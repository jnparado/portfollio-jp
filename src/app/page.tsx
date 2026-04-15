import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";
import Image from "next/image";
import { ChatWidget } from "@/components/ChatWidget";

export default function Home() {
  return (
    <div className="font-sans">
      <Container>
        <div className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
            <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="inline-flex size-2 rounded-full bg-emerald-500" />
              Available for work
              <span className="mx-2 text-zinc-300 dark:text-zinc-700">•</span>
              {site.location}
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
                {site.name}
              </h1>
              <p className="max-w-2xl text-xl leading-8 text-zinc-700 dark:text-zinc-300">
                {site.role}. {site.summary}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                Contact me
              </a>
              <div className="flex flex-wrap gap-2">
                {site.socials.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-4 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:bg-black dark:text-zinc-200 dark:hover:bg-zinc-900"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              {site.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-zinc-700 dark:border-white/10 dark:bg-black dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
            </div>

            <div className="mx-auto w-full max-w-[280px] lg:mx-0">
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950">
                <Image
                  src="/images/jeson-parado.png"
                  alt="Jeson Parado"
                  fill
                  sizes="(min-width: 1024px) 280px, 70vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <Section id="about" eyebrow="Overview" title="About">
          <div className="max-w-3xl space-y-4 text-base leading-7 text-zinc-700 dark:text-zinc-300 sm:text-[17px] sm:leading-8">
            <p>
              I have developed several full-stack applications across web and
              mobile platforms. One of my key projects was a booking and
              management system where users can browse services, select
              schedules, and complete reservations, while administrators manage
              inventory, pricing, and reports through a dashboard. I handled the
              full development process including UI design, backend logic,
              database structure, and API integrations.
            </p>
            <p>
              I have also built automation-driven systems that process and
              validate data, integrate third-party APIs, and trigger workflows
              based on user actions. My work focuses on creating responsive,
              user-friendly interfaces combined with efficient backend systems
              that ensure performance, accuracy, and scalability.
            </p>
            <p>
              Additionally, I have experience delivering projects end-to-end—from
              requirements gathering and development to testing, deployment, and
              ongoing improvements—while working closely with clients to ensure
              the solution meets their business needs.
            </p>
          </div>
        </Section>

        <Section id="projects" eyebrow="Selected work" title="Projects">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {site.projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Timeline" title="Experience">
          <ol className="max-w-3xl space-y-4">
            {[
              {
                title: "Role Title",
                company: "Company",
                period: "2024 — Present",
                bullets: [
                  "Shipped a feature that improved a key metric.",
                  "Led a small initiative across design + engineering.",
                  "Improved performance and reliability in production.",
                ],
              },
              {
                title: "Role Title",
                company: "Company",
                period: "2022 — 2024",
                bullets: [
                  "Built internal tools that saved time each week.",
                  "Improved developer experience and test coverage.",
                ],
              },
            ].map((item) => (
              <li
                key={`${item.company}-${item.period}`}
                className="rounded-2xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-zinc-950"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="font-medium text-zinc-950 dark:text-zinc-50">
                    {item.title} · {item.company}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {item.period}
                  </p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="contact" eyebrow="Say hello" title="Contact">
          <div className="grid max-w-5xl grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-zinc-950">
              <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                Want to work together or chat? Email me at{" "}
                <a
                  className="font-medium text-zinc-950 underline decoration-black/20 underline-offset-4 hover:decoration-black/50 dark:text-zinc-50 dark:decoration-white/20 dark:hover:decoration-white/50"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
                .
              </p>
            </div>
            <ChatWidget />
          </div>
        </Section>
      </Container>
    </div>
  );
}
