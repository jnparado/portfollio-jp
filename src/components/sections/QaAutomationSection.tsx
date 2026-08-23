import { Section } from "@/components/Section";
import { site, type QaFitItem } from "@/lib/site";

const levelStyles: Record<
  QaFitItem["level"],
  { label: string; className: string }
> = {
  "very-strong": {
    label: "Excellent",
    className:
      "bg-emerald-500/15 text-emerald-700 ring-emerald-500/25 dark:text-emerald-300",
  },
  strong: {
    label: "Strong",
    className: "bg-emerald-500/10 text-emerald-700 ring-emerald-500/20 dark:text-emerald-300",
  },
  good: {
    label: "Good",
    className: "bg-amber-500/10 text-amber-800 ring-amber-500/20 dark:text-amber-300",
  },
  gap: {
    label: "Gap",
    className: "bg-zinc-500/10 text-zinc-600 ring-zinc-500/20 dark:text-zinc-400",
  },
};

export function QaAutomationSection() {
  const qa = site.qaAutomation;

  return (
    <Section id="qa-automation" eyebrow="QA + mobile + full-stack" title={qa.title}>
      <p className="max-w-3xl text-sm font-semibold text-indigo-600 dark:text-indigo-400">
        {qa.tagline}
      </p>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        {qa.intro}
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="glass-panel p-6 sm:p-8">
          <h3 className="text-lg font-extrabold tracking-tight text-zinc-950 dark:text-white">
            What I do
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-700 dark:text-white/80">
            {qa.responsibilities.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-400"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="glass-panel p-6 sm:p-8">
          <h3 className="text-lg font-extrabold tracking-tight text-zinc-950 dark:text-white">
            First 6 months — success looks like
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-700 dark:text-white/80">
            {qa.outcomes.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-400"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <article className="glass-panel mt-6 p-6 sm:p-8">
        <h3 className="text-lg font-extrabold tracking-tight text-zinc-950 dark:text-white">
          Fit assessment
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          How my QA + mobile + full-stack background maps to common test-engineer
          requirements.
        </p>
        <ul className="mt-6 divide-y divide-white/10">
          {qa.fitAssessment.map((item) => {
            const style = levelStyles[item.level];
            return (
              <li
                key={item.requirement}
                className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                    {item.requirement}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {item.assessment}
                  </p>
                </div>
                <span
                  className={`inline-flex shrink-0 items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${style.className}`}
                >
                  {style.label}
                </span>
              </li>
            );
          })}
        </ul>
      </article>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#skills"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 text-sm font-semibold text-zinc-950 transition hover:bg-white/10 dark:text-zinc-50"
        >
          View QA skills
        </a>
        <a
          href="#contact"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white shadow-[0_18px_45px_-22px_rgba(99,102,241,0.75)] transition hover:bg-indigo-500"
        >
          Discuss QA / test role
        </a>
      </div>
    </Section>
  );
}
