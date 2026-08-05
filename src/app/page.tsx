import { Container } from "@/components/Container";
import { AboutSection } from "@/components/sections/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { QaAutomationSection } from "@/components/sections/QaAutomationSection";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { getHomepageProjects, site } from "@/lib/site";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AnimatedInView } from "@/components/AnimatedInView";
import Link from "next/link";

export default function Home() {
  const homepageProjects = getHomepageProjects();

  return (
    <div className="font-sans">
      <Container>
        <AnimatedInView>
          <HeroSection />
        </AnimatedInView>

        <AnimatedInView delayMs={60}>
          <ServicesSection />
        </AnimatedInView>

        <AnimatedInView delayMs={70}>
          <QaAutomationSection />
        </AnimatedInView>

        <AnimatedInView delayMs={80}>
          <AboutSection />
        </AnimatedInView>

        <AnimatedInView delayMs={100}>
          <Section id="projects" eyebrow="Selected work" title="Projects that deliver results">
            <p className="max-w-2xl text-sm leading-7 text-zinc-700 dark:text-zinc-300">
              Real products shipped for healthcare, recruitment, travel, and
              e-commerce — AI-powered where it counts.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {homepageProjects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/projects"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 text-sm font-semibold text-zinc-950 transition hover:bg-white/10 dark:text-zinc-50"
              >
                View all {site.projects.length} projects
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white shadow-[0_18px_45px_-22px_rgba(99,102,241,0.75)] transition hover:bg-indigo-500"
              >
                Hire me for your next build
              </a>
            </div>
          </Section>
        </AnimatedInView>

        <AnimatedInView delayMs={120}>
          <ExperienceSection />
        </AnimatedInView>

        <AnimatedInView delayMs={140}>
          <SkillsSection />
        </AnimatedInView>

        <AnimatedInView delayMs={160}>
          <ContactSection />
        </AnimatedInView>
      </Container>
    </div>
  );
}
