# Aurona Academy

A responsive Next.js website for Aurona Academy, with a server-side enquiry endpoint and Supabase PostgreSQL persistence.

## Stack
- Next.js App Router, React, TypeScript
- Tailwind CSS 4 and project CSS design system
- Zod request validation
- Supabase Postgres via its server-side REST API
- Resend REST API for email notifications

## Local setup
1. Install Node.js 22 or newer.
2. Run `npm ci`.
3. Copy `.env.example` to `.env.local` and fill in the server-side values.
4. Apply `supabase/migrations/202611230001_create_enquiries.sql` in the Supabase SQL editor.
5. Run `npm run dev` and open `http://localhost:3000`.

The public enquiry form posts to `/api/enquiries`. The server validates input, applies a database-backed limit of five submissions per hashed network identifier per hour, stores the enquiry first, and then attempts an email notification. If email delivery is not configured or fails, the enquiry remains stored and the API reports `notificationStatus: "pending"`.

## Environment variables
See `.env.example`. `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`, and `RATE_LIMIT_SALT` are server-only secrets. Never expose them with a `NEXT_PUBLIC_` prefix or commit real values.

`ENQUIRY_FROM_EMAIL` must be a sender identity verified with Resend. `ENQUIRY_TO_EMAIL` defaults to `auronaacademy@gmail.com`.

## Database access and privacy
The migration enables row-level security and removes public/anonymous access. The API uses the Supabase service role key on the server only. The rate-limit table stores a salted hash rather than a raw IP address. Establish and periodically review a retention/deletion schedule before production launch.

## Deployment
Import the GitHub repository into Vercel, set environment variables for Production (and Preview if desired), then deploy. Apply the SQL migration before enabling public enquiries. Set `NEXT_PUBLIC_SITE_URL` to the active canonical URL. A custom domain can be connected later in Vercel without changing the app architecture.

## Launch gates
- Create a Supabase project and apply the migration.
- Add Supabase URL, service-role key, and a strong random `RATE_LIMIT_SALT` to Vercel.
- Create a Resend account, verify a sender domain/address, and add `RESEND_API_KEY` plus `ENQUIRY_FROM_EMAIL` to Vercel.
- Review the privacy policy and confirm the retention schedule and business contact details.
- Run the production build and submit test enquiries before public launch.
