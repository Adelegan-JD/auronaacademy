create extension if not exists pgcrypto;

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 100),
  email text not null check (char_length(email) <= 254),
  country text not null check (country in ('Canada', 'Nigeria', 'Other')),
  programme text not null check (programme in (
    'STEM and Digital Learning', 'English and Language Arts',
    'Academic Support', 'Professional Development', 'Other'
  )),
  level text not null default '',
  "contactMethod" text not null check ("contactMethod" in ('email', 'whatsapp')),
  message text not null default '' check (char_length(message) <= 1500),
  consent boolean not null check (consent is true),
  ip_hash text not null,
  notification_status text not null default 'pending'
    check (notification_status in ('pending', 'sent', 'failed')),
  notification_sent_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists enquiries_created_at_idx on public.enquiries (created_at desc);

create table if not exists public.enquiry_rate_limits (
  ip_hash text primary key,
  window_started_at timestamptz not null default now(),
  request_count integer not null default 1
);

create or replace function public.check_enquiry_rate_limit(p_ip_hash text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  current_count integer;
begin
  insert into public.enquiry_rate_limits (ip_hash, window_started_at, request_count)
  values (p_ip_hash, now(), 1)
  on conflict (ip_hash) do update
    set window_started_at = case
          when public.enquiry_rate_limits.window_started_at < now() - interval '1 hour' then now()
          else public.enquiry_rate_limits.window_started_at
        end,
        request_count = case
          when public.enquiry_rate_limits.window_started_at < now() - interval '1 hour' then 1
          else public.enquiry_rate_limits.request_count + 1
        end
  returning request_count into current_count;
  return current_count <= 5;
end;
$$;

alter table public.enquiries enable row level security;
alter table public.enquiry_rate_limits enable row level security;
revoke all on public.enquiries from anon, authenticated;
revoke all on public.enquiry_rate_limits from anon, authenticated;
revoke all on function public.check_enquiry_rate_limit(text) from public, anon, authenticated;
grant execute on function public.check_enquiry_rate_limit(text) to service_role;
