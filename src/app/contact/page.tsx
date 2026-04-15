import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ChatWidget } from "@/components/ChatWidget";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="font-sans">
      <Container>
        <Section eyebrow="Say hello" title="Contact">
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

