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
              <p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 text-sm font-extrabold text-zinc-950 shadow-sm ring-1 ring-black/10 transition hover:bg-amber-300"
                >
                  Visit website
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
            ) : (
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
