import { Container } from "@/components/Container";
import { getProjectBySlug, site } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return site.projects
    .filter((p): p is typeof p & { slug: string } => Boolean(p.slug))
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project?.slug) notFound();

  return (
    <div className="font-sans">
      <Container>
        <div className="py-10 sm:py-14">
          <nav className="mb-8 text-sm">
            <Link
              href="/projects"
              className="font-semibold text-amber-600 underline decoration-amber-600/30 underline-offset-4 hover:decoration-amber-600/60 dark:text-amber-400 dark:decoration-amber-400/30 dark:hover:decoration-amber-400/60"
            >
              ← Projects
            </Link>
          </nav>

          <header className="flex flex-col gap-4">
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Case study
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-zinc-950/5 px-3 py-1 text-xs font-semibold text-zinc-700 ring-1 ring-zinc-950/10 dark:bg-white/5 dark:text-zinc-200 dark:ring-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
            {project.href ? (
              <p className="flex flex-wrap gap-3">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 text-sm font-extrabold text-zinc-950 shadow-sm ring-1 ring-black/10 transition hover:bg-amber-300"
                >
                  Visit website
                  <span aria-hidden="true">↗</span>
                </a>
                {project.repoHref ? (
                  <a
                    href={project.repoHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-extrabold text-zinc-950 shadow-sm ring-1 ring-black/5 transition hover:bg-white/10 dark:text-zinc-50"
                  >
                    View code
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </p>
            ) : project.repoHref ? (
              <p>
                <a
                  href={project.repoHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 text-sm font-extrabold text-zinc-950 shadow-sm ring-1 ring-black/10 transition hover:bg-amber-300"
                >
                  View code
                  <span aria-hidden="true">↗</span>
                </a>
              </p>
            ) : null}
          </header>

          {project.imageSrc ? (
            <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-[0_22px_60px_-40px_rgba(0,0,0,0.85)]">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt ?? project.title}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 48rem, 100vw"
                priority
              />
            </div>
          ) : null}

          <article className="mt-12 max-w-3xl space-y-6 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            {slug === "stylerbox" ? (
              <>
                <p className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
                  Stylerbox has engineered an array of patented, first-to-market
                  smart products and technologies designed to impress, create
                  value, and generate revenue for our customers. We think outside
                  the box, innovate new ideas, and then bring them to market.
                </p>
                <p>
                  Our Stylerbox UVC Sterilizing Hair Appliance Organizer is the
                  foundation from which everything we create extends. The Stylerbox
                  unit is equipped with hair appliance auto shut-off technology.
                  Our UVC sterilizing lights will sterilize any set of hair
                  appliances and anything you put in the sterilizing drawer. You can
                  buy it empty or with our patented collection of Stylerbox
                  professional-grade hair appliances.
                </p>
                <p>
                  You can also equip your Stylerbox unit with a 10.1-inch
                  motion-activated touchscreen and high-performance motherboard.
                  Loaded on the touchscreen is our unique and innovative Stylerbox
                  app, which is unlike any app on the market. The Stylerbox app
                  displays images and videos, converts them into interactive
                  content, and generates revenue in multiple ways for our
                  customers.
                </p>
              </>
            ) : slug === "deletely" ? (
              <>
                <p className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
                  Is your Agency the victim of negative reviews? Remove the negative
                  reviews that harm your business and reputation.
                </p>
                <p>
                  Deletely specialises in the hands on removal of negative reviews
                  for Australian real estate agencies.
                </p>
              </>
            ) : slug === "prokrate" ? (
              <>
                <p className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
                  Prokrate International Trading Corporation is committed to
                  providing exceptional coffee experiences by offering comprehensive
                  solutions for coffee aficionados and businesses.
                </p>
                <p>
                  With an unparalleled selection of high-quality coffee machines,
                  grinders, specialty beans, flavorful gourmet sauces, and
                  state-of-the-art barista tools, we cater to the diverse needs of our
                  customers.
                </p>
              </>
            ) : slug === "labanca" ? (
              <>
                <p className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
                  La Banca Cruises offers yacht rentals, including private charters and
                  shared cruises, all at reasonable prices. Our yachts can accommodate
                  groups from 1 to 60 people, depending on the size of the vessel.
                </p>
                <p>
                  We also plan to open a restaurant at the terminal, serving dishes like
                  Australian Ribeye Steak, lobster, and other famous grilled seafood
                  from Subic.
                </p>
                <p>
                  Join us now for an exciting sea adventure!
                </p>
              </>
            ) : slug === "labanca-bookings" ? (
              <>
                <p className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
                  A Bubble.io admin workspace for La Banca Cruises staff to run day-to-day
                  booking operations: create and review appointments, see which vessel
                  each guest is on, and track payment and confirmation status at a
                  glance.
                </p>
                <p>
                  The Bookings view supports search, date filters, and quick actions to
                  view, edit, or remove reservations—so teams can keep schedules aligned
                  with boats on the water and respond quickly when plans change.
                </p>
                <p>
                  The same dashboard ecosystem extends to schedules, reports, fleet
                  monitoring, agents, and transaction history—giving operators a
                  single place to coordinate cruises from inquiry to departure.
                </p>
              </>
            ) : slug === "shirwell-music" ? (
              <>
                <p className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
                  Shirwell Music is the official digital home for Shirwell Bancan—a
                  place for fans to experience decades of songwriting and performance
                  in one app. The hero invites visitors to explore featured tracks, new
                  releases, and the full music player, all framed around a long creative
                  career.
                </p>
                <p>
                  The interface is built for mobile-first discovery: tabbed sections for
                  Home, Music, Flowers, and Premium; bold gold-on-black styling; and a
                  persistent “now playing” bar so listening never stops while browsing.
                  Dedicated calls to action—“Explore Music” and “Shop Flowers”—connect
                  streaming with commerce in a single branded experience.
                </p>
                <p>
                  Beyond playback, the Flowers area extends the Shirwell world into
                  tangible products, while Premium signals deeper fan tiers—together
                  forming an artist platform that pairs audio, merch-adjacent offerings,
                  and membership-style value in one cohesive flow.
                </p>
              </>
            ) : slug === "nexus-medpro" ? (
              <>
                <p className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
                  Nexus MedPro Staffing connects healthcare professionals with
                  service providers through a streamlined, AI-assisted worker
                  application flow. The landing experience leads with a single
                  high-intent action—“Start Application”—to keep onboarding fast,
                  focused, and friction-free.
                </p>

                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Worker application process
                </h3>
                <p>
                  Applicants move through a guided, step-by-step intake: account
                  creation, profile and credential capture, document uploads, shift
                  preferences, and review/submission. Form state is preserved
                  between steps so users can pick up where they left off, with
                  clear validation and progress indicators along the way.
                </p>
                <ul className="ml-5 list-disc space-y-1.5">
                  <li>Account & sign-in (with returning user path)</li>
                  <li>Personal info and credentialing details</li>
                  <li>Document uploads (IDs, licenses, certifications)</li>
                  <li>Shift availability, pay, and location preferences</li>
                  <li>Review and submit, then status tracking</li>
                </ul>

                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  AI parsing with Grok
                </h3>
                <p>
                  Uploaded documents are parsed by an AI pipeline backed by Grok
                  to automatically extract structured data—names, license numbers,
                  expiration dates, certifications, and other key fields. Extracted
                  values are mapped onto the application form so workers don’t
                  retype information that’s already on their documents, and the
                  system flags inconsistencies (e.g., expired licenses or
                  mismatched names) for quick correction.
                </p>

                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Location matching with Mapbox
                </h3>
                <p>
                  Mapbox powers address autocomplete, geocoding, and distance
                  awareness across the portal. Workers can specify how far they’re
                  willing to travel, and shifts are matched and sorted by proximity
                  to their saved locations—improving fill rates for providers and
                  surfacing relevant opportunities for candidates first.
                </p>

                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Outcome
                </h3>
                <p>
                  The result is a healthcare staffing experience that feels lighter
                  than traditional onboarding: less manual data entry through AI
                  parsing, faster decisions through location-aware matching, and a
                  clean, accessible UI that works well on both mobile and desktop.
                </p>
              </>
            ) : slug === "ai-disaster-simulator" ? (
              <>
                <p className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
                  AI Disaster Simulator is an interactive emergency planning
                  platform built with Next.js that models natural disasters,
                  visualizes impact on a live map, and generates AI-optimized
                  evacuation routes—not just shortest distance, but safest paths
                  based on elevation, congestion, and flood depth.
                </p>

                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Disaster scenarios & simulation
                </h3>
                <p>
                  Users configure disaster type (flood, earthquake, fire, power
                  outage), intensity, and environmental parameters like 24-hour
                  rainfall. A timeline slider forecasts impact from the current
                  moment through +30 min, +1 hour, +3 hours, +12 hours, tomorrow,
                  and up to 3 days later—updating flood depth, calamity zones,
                  and affected roads on the map in real time.
                </p>
                <ul className="ml-5 list-disc space-y-1.5">
                  <li>Multi-disaster types with adjustable intensity sliders</li>
                  <li>3D terrain, city overview, and 3D flood view modes</li>
                  <li>Live stats: flood depth, submerged zones, closed roads, evacuees</li>
                  <li>Automated SMS alerts when a calamity nears a registered number</li>
                </ul>

                <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-[0_22px_60px_-40px_rgba(0,0,0,0.85)]">
                  <Image
                    src="/images/projects/ai-disaster-simulator.png"
                    alt="AI Disaster Simulator with flood map, timeline controls, and AI evacuation planner"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 48rem, 100vw"
                  />
                </div>

                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  AI evacuation planner
                </h3>
                <p>
                  The AI evacuation planner calculates optimal routes tailored
                  to the scenario—prioritizing safety, traffic, flood avoidance,
                  or emergency vehicle access:
                </p>
                <ul className="ml-5 list-disc space-y-1.5">
                  <li>
                    <strong>Safest route</strong> — highest elevation, avoids
                    flood zones and fire perimeters
                  </li>
                  <li>
                    <strong>Least congested</strong> — AI traffic model predicts
                    bottlenecks and lower-congestion alternatives
                  </li>
                  <li>
                    <strong>Flood avoidance</strong> — stays above predicted
                    flood depth contours
                  </li>
                  <li>
                    <strong>Emergency vehicle route</strong> — wide-lane paths
                    optimized for ambulances and fire trucks
                  </li>
                </ul>

                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Tech stack
                </h3>
                <p>
                  Built with Next.js and TypeScript, deployed on Vercel. Uses
                  interactive mapping with geospatial overlays for flood depth
                  and calamity zones, shareable URL state for disaster parameters,
                  and AI-driven route optimization. Live at{" "}
                  <a
                    href="https://ai-disaster-simulator.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-amber-600 underline decoration-amber-600/30 underline-offset-4 hover:decoration-amber-600/60 dark:text-amber-400 dark:decoration-amber-400/30 dark:hover:decoration-amber-400/60"
                  >
                    ai-disaster-simulator.vercel.app
                  </a>
                  .
                </p>
              </>
            ) : slug === "hr-recruitment-ai" ? (
              <>
                <p className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
                  HR-recruitment-AI is an AI recruitment suite built with Next.js and
                  Grok (xAI) that puts hiring on autopilot—screening resumes,
                  ranking candidates, and running first-round interviews so
                  teams only spend time on people worth meeting.
                </p>

                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  AI Resume Screening
                </h3>
                <p>
                  Recruiters upload a batch of resumes against a job description.
                  Grok reads every PDF, DOCX, and TXT file, scores each candidate
                  against the role (0–100), ranks the pool, and flags critical
                  skill gaps—turning hundreds of applicants into a shortlist in
                  minutes instead of days.
                </p>
                <ul className="ml-5 list-disc space-y-1.5">
                  <li>Batch resume upload with job-description matching</li>
                  <li>Automated candidate ranking and skill-gap detection</li>
                  <li>Built for recruitment agencies, HR teams, and job marketplaces</li>
                </ul>

                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  AI Interview Assistant
                </h3>
                <p>
                  Grok conducts the first screening interview one question at a
                  time—covering experience, skills, salary expectations, and
                  availability—then delivers a candidate score and a clear
                  advance/reject recommendation for the hiring manager.
                </p>

                <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-[0_22px_60px_-40px_rgba(0,0,0,0.85)]">
                  <Image
                    src="/images/projects/hr-recruitment-ai-interview.png"
                    alt="HR-recruitment-AI interview assistant — candidate intake form"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 48rem, 100vw"
                  />
                </div>

                <h3 className="mt-8 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Live AI interview session
                </h3>
                <p>
                  Candidates join a guided interview room where Grok asks
                  tailored questions one at a time—referencing their resume and
                  the job description. A side panel shows the current question,
                  progress (e.g. question 1 of 10), and recent answers, while
                  the AI interviewer walks through experience, skills, and role
                  fit in a structured flow.
                </p>
                <ul className="ml-5 list-disc space-y-1.5">
                  <li>Question-by-question progress with session timer</li>
                  <li>Resume-aware prompts (e.g. gaps between role and background)</li>
                  <li>Answer, repeat, and leave controls for candidates</li>
                  <li>Recorded session with hire recommendation at the end</li>
                </ul>

                <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-[0_22px_60px_-40px_rgba(0,0,0,0.85)]">
                  <Image
                    src="/images/projects/hr-recruitment-ai-interview-session.png"
                    alt="HR-recruitment-AI live interview session with AI interviewer and question panel"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 48rem, 100vw"
                  />
                </div>

                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Tech stack
                </h3>
                <p>
                  The frontend and API routes are built with Next.js (App Router)
                  and TypeScript. Grok powers all AI workflows—resume parsing,
                  job matching, ranking logic, and conversational interviews.
                  Deployed on Vercel at{" "}
                  <a
                    href="https://hr-recruitment-ai.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-amber-600 underline decoration-amber-600/30 underline-offset-4 hover:decoration-amber-600/60 dark:text-amber-400 dark:decoration-amber-400/30 dark:hover:decoration-amber-400/60"
                  >
                    hr-recruitment-ai.vercel.app
                  </a>
                  .
                </p>
              </>
            ) : slug === "pharma-inventory" ? (
              <>
                <p className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
                  PharmaStock is a pharmacy inventory management system built with
                  Next.js, TypeScript, Tailwind CSS, and Supabase—designed to
                  track medicines, batches, suppliers, and every stock movement
                  from purchase to sale.
                </p>

                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Core inventory features
                </h3>
                <ul className="ml-5 list-disc space-y-1.5">
                  <li>Product catalog with SKU, category, unit, and reorder levels</li>
                  <li>Supplier directory for distributor contacts and details</li>
                  <li>Batch tracking on every stock-in with batch number, expiry, and pricing</li>
                  <li>FEFO stock-out: dispensing deducts from the soonest-expiring batch first</li>
                  <li>Full purchase and sales history for every inventory transaction</li>
                </ul>

                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Dashboard & alerts
                </h3>
                <p>
                  The dashboard surfaces low-stock alerts for products at or below
                  their reorder level, plus an expiry monitor that groups batches
                  into expired, ≤30 days, and ≤90 days—with suggested discounts
                  for near-expiry stock and total value at risk.
                </p>

                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  AI Demand Forecast
                </h3>
                <p>
                  An AI-powered demand forecast predicts medicine needs from past
                  sales, seasonality, and reorder levels—recommending reorder
                  quantity and timing with actionable insights for critical
                  out-of-stock items.
                </p>

                <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-[0_22px_60px_-40px_rgba(0,0,0,0.85)]">
                  <Image
                    src="/images/projects/pharma-inventory-forecast.png"
                    alt="PharmaStock AI Demand Forecast with reorder recommendations"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 48rem, 100vw"
                  />
                </div>

                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Tech stack
                </h3>
                <p>
                  Server actions handle CRUD and FEFO logic; Supabase powers
                  persistence for products, categories, suppliers, batches, and
                  transactions. Deployed on Vercel with environment-based Supabase
                  configuration.
                </p>
              </>
            ) : slug === "kamashoetra" ? (
              <>
                <p className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
                  Kama Shoetra is an AI-powered sneaker cleaning and restoration
                  platform that connects customers with premium cleaning services—from
                  booking and locker drop-offs to real-time order tracking and
                  subscription management.
                </p>
                <p>
                  Customers choose services, select Pudo locker locations for
                  convenient drop-off and pickup, and follow orders through each
                  stage of the cleaning workflow. Admins manage operations,
                  payments, and support from a dedicated dashboard.
                </p>
              </>
            ) : slug === "myhiredito" ? (
              <>
                <p className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
                  MyHiredito is a staffing software platform built for modern
                  teams—helping employers post shifts, match verified workers,
                  manage schedules, and run payroll without juggling five
                  different tools.
                </p>

                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Two sides, one platform
                </h3>
                <p>
                  The landing experience splits cleanly between{" "}
                  <strong>Employers</strong> and <strong>Workers</strong>. Employers
                  get a focused path to staff smarter, hire faster, and stay
                  compliant; workers can discover open shifts and apply from the
                  same product with a single toggle.
                </p>
                <ul className="ml-5 list-disc space-y-1.5">
                  <li>
                    <strong>Employers</strong> — post shifts, review matched
                    candidates, manage schedules, and handle payroll in one
                    dashboard
                  </li>
                  <li>
                    <strong>Workers</strong> — browse available shifts, apply
                    quickly, and track assignments from a worker-first view
                  </li>
                </ul>

                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  What it solves
                </h3>
                <p>
                  Traditional staffing often means spreadsheets, separate payroll
                  tools, and manual compliance checks. MyHiredito consolidates
                  shift posting, worker verification, scheduling, and payroll
                  into a single staffing operations platform—so teams can fill
                  roles faster while keeping processes auditable and compliant.
                </p>

                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Employer dashboard
                </h3>
                <p>
                  Once signed in, employers land on a home dashboard with job
                  posting, applicant review, messaging, worker management,
                  billing, and reports—all in one nav. A guided onboarding flow
                  verifies the business (government ID, business certificate, and
                  company details) before unlocking job posting, with clear
                  progress tracking and hiring insights along the way.
                </p>

                <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-[0_22px_60px_-40px_rgba(0,0,0,0.85)]">
                  <Image
                    src="/images/projects/myhiredito-dashboard.png"
                    alt="MyHiredito employer dashboard with onboarding checklist and hiring feed"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 48rem, 100vw"
                  />
                </div>

                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Key features
                </h3>
                <ul className="ml-5 list-disc space-y-1.5">
                  <li>Shift posting and worker matching</li>
                  <li>Verified worker profiles and scheduling</li>
                  <li>Employer onboarding with ID and business verification</li>
                  <li>Applicant tracking, messaging, billing, and reports</li>
                  <li>Payroll and compliance workflows in one place</li>
                  <li>Employer / worker dual experience with clear CTAs</li>
                </ul>

                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Outcome
                </h3>
                <p>
                  The result is a staffing platform that feels lighter than
                  stitching together point solutions: employers get one place to
                  run operations, and workers get a straightforward path from
                  discovery to booked shifts.
                </p>
              </>
            ) : slug === "best-coast-tours" ? (
              <>
                <p className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
                  Best Coast Tours is a smart travel and booking platform that helps travelers
                  discover, customize, and reserve unforgettable tour experiences across
                  Southern California. The platform simplifies trip planning by combining
                  tour selection, booking management, and cost computation into one seamless
                  experience.
                </p>
            
                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Two sides, one booking platform
                </h3>
                <ul className="ml-5 list-disc space-y-1.5">
                  <li>
                    <strong>Travelers / Customers</strong> — browse tour packages, choose
                    destinations, customize itineraries, select pickup locations, and book
                    tours with instant pricing.
                  </li>
                  <li>
                    <strong>Admin / Tour Operators</strong> — manage bookings, calculate trip
                    costs, assign vehicles, monitor schedules, and optimize tour operations.
                  </li>
                </ul>
            
                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Customer booking flow
                </h3>
                <p>
                  Travelers can quickly move from browsing to booking by selecting a tour,
                  entering trip details, choosing pickup preferences, and confirming
                  reservations. The platform provides transparent pricing and booking
                  summaries so customers can confidently plan their trip.
                </p>
            
                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Explore tours by category
                </h3>
                <p>
                  Tour experiences are organized into curated categories, helping customers
                  find the perfect getaway based on interests and travel style:
                </p>
                <ul className="ml-5 list-disc space-y-1.5">
                  <li>City Tours — explore iconic landmarks and attractions</li>
                  <li>Coastal Tours — scenic beaches, harbors, and ocean experiences</li>
                  <li>Wine Tours — curated vineyard and tasting experiences</li>
                  <li>Private Group Tours — customized itineraries for families or teams</li>
                  <li>Luxury Tours — premium transport and VIP experiences</li>
                </ul>
            
                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Intelligent booking & cost calculation
                </h3>
                <p>
                  The admin dashboard includes a powerful pricing engine that automatically
                  calculates total booking cost based on multiple variables such as tour
                  package, guest count, travel distance, vehicle type, and optional add-ons.
                  This ensures accurate quotations and streamlined booking management.
                </p>
            
                <ul className="ml-5 list-disc space-y-1.5">
                  <li>Automatic distance and route-based cost computation</li>
                  <li>Dynamic pricing based on guest count and vehicle assignment</li>
                  <li>Add-on pricing for extras like private pickup or special stops</li>
                  <li>Booking status tracking and schedule management</li>
                </ul>
            
                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Admin operations dashboard
                </h3>
                <p>
                  Tour operators can monitor reservations, manage daily schedules, update
                  pricing rules, and analyze operational profitability from a centralized
                  dashboard. This reduces manual coordination and improves efficiency across
                  the business.
                </p>
            
                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Outcome
                </h3>
                <p>
                  Best Coast Tours transforms traditional tour booking into a modern digital
                  experience. Customers enjoy a frictionless booking journey, while tour
                  operators gain powerful tools for cost optimization, scheduling, and
                  revenue management—all within a single platform.
                </p>
              </>
            ) :
            (       
              <p className="text-lg text-zinc-950 dark:text-zinc-50">
                {project.description}
              </p>
            )}
          </article>
        </div>
      </Container>
    </div>
  );


}
 