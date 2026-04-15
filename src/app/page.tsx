import { Container } from "@/components/Container";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";
import { ChatWidget } from "@/components/ChatWidget";

export default function Home() {
  return (
    <div className="font-sans">
      <Container>
        <HeroSection />
        <AboutSection />

        <SkillsSection />
        <EducationSection />

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
                bullets: ["Built internal tools that saved time each week.", "Improved developer experience and test coverage."],
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
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.period}</p>
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
