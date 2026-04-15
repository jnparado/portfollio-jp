import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export default function ProjectsPage() {
  return (
    <div className="font-sans">
      <Container>
        <Section eyebrow="Selected work" title="Projects">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {site.projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>
      </Container>
    </div>
  );
}

