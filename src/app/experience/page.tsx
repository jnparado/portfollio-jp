import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export default function ExperiencePage() {
  return (
    <div className="font-sans">
      <Container>
        <Section eyebrow="Timeline" title="Experience">
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
      </Container>
    </div>
  );
}

