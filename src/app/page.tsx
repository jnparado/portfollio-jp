import { Container } from "@/components/Container";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";
import { ChatWidget } from "@/components/ChatWidget";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AnimatedInView } from "@/components/AnimatedInView";

export default function Home() {
  return (
    <div className="font-sans">
      <Container>
        <AnimatedInView>
          <HeroSection />
        </AnimatedInView>

        <AnimatedInView delayMs={60}>
          <AboutSection />
        </AnimatedInView>

        <AnimatedInView delayMs={80}>
          <SkillsSection />
        </AnimatedInView>

        <AnimatedInView delayMs={100}>
          <EducationSection />
        </AnimatedInView>

        <AnimatedInView delayMs={120}>
        <Section id="projects" title="">
          <div className="mb-8 flex items-center justify-center gap-3 text-center">
            <span className="grid size-10 place-items-center rounded-xl bg-white/5 text-white ring-1 ring-white/10">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-current">
                <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11ZM7 7.5h10v2H7v-2Zm0 4h6v2H7v-2Zm0 4h10v2H7v-2Z" />
              </svg>
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
              Projects <span className="text-amber-500 dark:text-amber-400">Made</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {site.projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>
        </AnimatedInView>

        <AnimatedInView delayMs={140}>
          <ExperienceSection />
        </AnimatedInView>

        <AnimatedInView delayMs={160}>
          <ContactSection />
        </AnimatedInView>
      </Container>
    </div>
  );
}
