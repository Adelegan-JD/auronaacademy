# Aurona Academy — Project Status

## Project objective

Deliver a polished, responsive public website for Aurona Academy, serving prospective learners and families in Canada and Nigeria, with a secure custom enquiry workflow.

The initial release includes the public website and enquiry capture only. Student/tutor accounts, dashboards, an LMS, payments, scheduling/booking, progress tracking, assessments, parent dashboards, and certificates are explicitly outside the current release.

## Current milestone

**Phase 1: Project Audit & Foundation — COMPLETE (23 November 2026)**

The repository, application structure, principal pages, technical configuration, assets, enquiry endpoint, database migration, and deployment status have been reviewed.

## Phase tracker

| Phase | Description | Status |
|---|---|---|
| 1 | Project Audit & Foundation | Complete |
| 2 | UI/UX Design & Website Refinement | Implementation complete; Vercel verification pending |
| 3 | Enquiry System Development | Initial implementation; refinement pending |
| 4 | Database & External Services | Production setup pending |
| 5 | Security & Privacy | Initial controls present; review pending |
| 6 | SEO, Accessibility & Performance | Initial setup present; review pending |
| 7 | Quality Assurance & Testing | Pending |
| 8 | Production Deployment | Initial Vercel build/deployment check succeeded; production workflow not verified |
| 9 | Documentation & Handover | Pending |
| 10 | Custom Domain & Launch | Pending |

## Phase 1 audit — completed findings

### Repository and architecture
- Next.js App Router application using Next.js 16.4.0, React 19.3.0, TypeScript, Tailwind CSS 4, Lucide React, and Zod.
- Strict TypeScript configuration and ESLint configuration are present.
- GitHub repository is connected: `Adelegan-JD/auronaacademy`.
- Default branch: `main`.
- Vercel is connected to the repository.
- The current main commit is `7acd3d9abf3700688c6f00e45e1c8c68f75cd49e`.
- Vercel reported a successful check for that commit. This confirms the reported deployment/build check only; it does not establish that every page or the enquiry workflow has been manually tested.
- The repository's `AGENTS.md` requires consulting the installed Next.js 16 documentation before making code changes. The GitHub-only audit did not have access to the local `node_modules/next/dist/docs` files, so this requirement must be followed in the development environment before relevant implementation work.

### Existing public routes
- Home: `/`
- About: `/about`
- Programmes: `/programmes`
- How It Works: `/how-it-works`
- Contact/enquiry: `/contact`
- FAQs: `/faq`
- Privacy: `/privacy`
- SEO endpoints: `/robots.txt` and `/sitemap.xml`
- Enquiry API: `POST /api/enquiries`

### Existing technical foundation
- Shared site shell exists for supporting pages.
- Homepage currently has a separate header and footer implementation.
- Enquiry form, server-side API route, Supabase SQL migration, and environment-variable example are present.
- The API is designed to persist enquiries in Supabase before attempting email notification through Resend.
- Metadata, robots rules, and sitemap generation are present.
- No student portal or LMS is included, consistent with the agreed initial-release scope.

### Confirmed audit findings to address in later phases

| Priority | Finding | Planned phase |
|---|---|---|
| High | Homepage references `/images/learning-hero.jpg`, but the repository's `public/images` directory currently contains only `aurona-logo.png`. The hero asset is missing and must be supplied or replaced. | Phase 2 |
| High | Contact page repeats both Nigerian WhatsApp contact cards, resulting in duplicate contact options. | Phase 2 |
| Medium | Homepage duplicates header/footer markup instead of using the shared site shell used by other pages. Consolidate to one implementation. | Phase 2 |
| Medium | `src/app/layout.tsx` still declares the old theme colour `#082d4f`, while the refined CSS palette uses `#142d4e`. | Phase 2 |
| High | Enquiry API request-size enforcement currently relies on the `Content-Length` header; requests without that header need safe handling. | Phase 3 / 5 |
| High | Email delivery exceptions and post-insert status-update failures need handling that cannot misreport a saved enquiry or cause avoidable duplicate submissions. | Phase 3 |
| High | Production Supabase migration, credentials, Resend sender verification, and Vercel environment variables have not yet been configured and verified. | Phase 4 |
| Medium | The privacy notice is a first draft. Actual provider configuration, data retention, cross-border processing, and applicable obligations need owner review before launch. | Phase 5 |
| Medium | `nodemailer` is listed as a dependency, while the current notification implementation calls the Resend REST API directly. Confirm whether it is unused and remove it if so. | Phase 3 |
| Medium | GitHub reports that the `main` branch is not protected. Consider adding branch protection and requiring successful checks before merges. | Phase 7 / release governance |

## Technical decisions

- Next.js App Router, React, and TypeScript remain the application foundation.
- Preserve the existing architecture; do not rebuild the application unnecessarily.
- Vercel is the deployment platform.
- Supabase managed PostgreSQL is the planned enquiry database.
- Resend is the planned enquiry email-notification provider.
- Server-side secrets must never be exposed through `NEXT_PUBLIC_*` variables or committed to Git.
- The first release is a public marketing/information website with a custom enquiry workflow.
- Future portal/LMS/payment/booking features remain out of scope until separately approved.

## External dependencies requiring owner action

- Create/authorise a Supabase project and securely configure production credentials.
- Create/authorise a Resend account and verify an appropriate sender identity/domain.
- Approve the final privacy notice and data-retention approach.
- Supply or approve a suitable homepage hero image if the existing asset cannot be recovered.
- Purchase a custom domain when ready for the launch phase.

## Verification record

- GitHub main branch inspected: 23 November 2026.
- Latest audited commit: `7acd3d9abf3700688c6f00e45e1c8c68f75cd49e`.
- Vercel status for that commit: `success`.
- Local dependency installation, local lint, and local production build were not run as part of this audit.
- Full browser, accessibility, mobile, and end-to-end enquiry tests remain outstanding.

## Phase 1 exit decision

**Phase 1 is complete.** The codebase and scope are understood, the principal routes and technical foundation are documented, the current deployment check is recorded, and concrete risks/gaps have been assigned to later phases.

No production-readiness claim is made at this stage.

## Phase 2 implementation — completed changes

- Added `public/images/learning-hero.svg`, a locally hosted, branded educational illustration, and updated the homepage to use it instead of the missing JPG.
- Removed homepage-specific header and footer markup. The root `SiteShell` now renders one shared header and footer on every public route.
- Converted `SiteShell` into a server component by removing the unnecessary client directive and pathname-based shell bypass.
- Standardised desktop and mobile navigation across the homepage and supporting pages, with a privacy-notice link in the mobile menu and footer.
- Removed duplicated Nigerian WhatsApp cards from the Contact page and consolidated contact methods into a data-driven list.
- Added a direct `/privacy` link to the enquiry consent text; it opens in a new tab so the form is not lost.
- Updated the browser theme colour to match the refined navy palette.
- Applied consistent page-section treatment and improved privacy-page readability, card surfaces, FAQ states, contact links, consent-link visibility, and responsive spacing.

### Phase 2 verification state

- Repository checks confirm the homepage no longer contains its own header/footer and references the new local hero asset.
- Repository checks confirm one shared header/footer component and the enquiry form's direct privacy link.
- Contact page contains one WhatsApp entry per Nigerian number (two distinct Nigerian contacts), rather than duplicate entries.
- Vercel check for latest phase 2 commit is pending at the time of this update.
- Browser-based visual review and full cross-device interaction checks remain part of the QA phase; no claim is made that these have been completed.

## Immediate next step

Once the current Vercel check is successful, proceed to Phase 3: refine and harden the custom enquiry workflow.
