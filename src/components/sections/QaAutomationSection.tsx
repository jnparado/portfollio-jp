import { Section } from "@/components/Section";
import { site, type QaFitItem } from "@/lib/site";

const levelStyles: Record<
  QaFitItem["level"],
  { className: string }
> = {
  "very-strong": {
    className:
      "bg-emerald-500/15 text-emerald-700 ring-emerald-500/25 dark:text-emerald-300",
  },
  strong: {
    className:
      "bg-emerald-500/10 text-emerald-700 ring-emerald-500/20 dark:text-emerald-300",
  },
  good: {
    className:
      "bg-amber-500/10 text-amber-800 ring-amber-500/20 dark:text-amber-300",
  },
  "partial-gap": {
    className:
      "bg-amber-500/10 text-amber-700 ring-amber-500/20 dark:text-amber-300",
  },
  gap: {
    className:
      "bg-red-500/10 text-red-700 ring-red-500/20 dark:text-red-300",
  },
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-sm leading-6 text-zinc-700 dark:text-white/80">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-400"
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function WorkflowStack({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-col items-stretch gap-1">
      {steps.map((step, index) => (
        <div key={step} className="flex flex-col items-center">
          <div className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-center text-sm font-medium text-zinc-950 dark:text-white">
            {step}
          </div>
          {index < steps.length - 1 ? (
            <span
              className="my-0.5 text-xs text-zinc-400 dark:text-zinc-500"
              aria-hidden="true"
            >
              ↓
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function QaAutomationSection() {
  const qa = site.qaAutomation;

  return (
    <Section id="qa-automation" eyebrow="QA + mobile + full-stack" title={qa.title}>
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center rounded-full bg-indigo-600/15 px-4 py-1.5 text-sm font-bold text-indigo-700 ring-1 ring-indigo-500/25 dark:text-indigo-300">
          Estimated fit: {qa.estimatedFit}
        </span>
        <p className="max-w-3xl text-sm font-semibold text-indigo-600 dark:text-indigo-400">
          {qa.tagline}
        </p>
      </div>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        {qa.intro}
      </p>

      <blockquote className="glass-panel mt-6 border-l-4 border-indigo-500 p-5 sm:p-6">
        <p className="text-sm font-semibold text-zinc-950 dark:text-white">
          {qa.positioning}
        </p>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {qa.positioningAvoid}
        </p>
      </blockquote>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="glass-panel p-6 sm:p-8">
          <h3 className="text-lg font-extrabold tracking-tight text-zinc-950 dark:text-white">
            What I do
          </h3>
          <div className="mt-4">
            <BulletList items={qa.responsibilities} />
          </div>
        </article>

        <article className="glass-panel p-6 sm:p-8">
          <h3 className="text-lg font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Success looks like
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
                  {item.fitLabel}
                </span>
              </li>
            );
          })}
        </ul>
      </article>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="glass-panel p-6 sm:p-8">
          <h3 className="text-lg font-extrabold tracking-tight text-zinc-950 dark:text-white">
            {qa.advantage.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
            {qa.advantage.intro}
          </p>
          <div className="mt-4">
            <BulletList items={qa.advantage.capabilities} />
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Example stack — investigate beyond the UI
          </p>
          <div className="mt-3 max-w-xs">
            <WorkflowStack steps={qa.advantage.workflow} />
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            I can determine whether the problem is
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {qa.advantage.failurePoints.map((point) => (
              <li
                key={point}
                className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-white/10 dark:text-zinc-300"
              >
                {point}
              </li>
            ))}
          </ul>
        </article>

        <article className="glass-panel p-6 sm:p-8">
          <h3 className="text-lg font-extrabold tracking-tight text-zinc-950 dark:text-white">
            {qa.androidEdge.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
            {qa.androidEdge.intro}
          </p>
          <div className="mt-4">
            <BulletList items={qa.androidEdge.topics} />
          </div>

          <h3 className="mt-8 text-lg font-extrabold tracking-tight text-zinc-950 dark:text-white">
            {qa.aiApproach.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
            {qa.aiApproach.intro}
          </p>
          <div className="mt-4">
            <BulletList items={qa.aiApproach.principles} />
          </div>
        </article>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="glass-panel p-6 sm:p-8">
          <h3 className="text-lg font-extrabold tracking-tight text-zinc-950 dark:text-white">
            {qa.regressionStrategy.title}
          </h3>
          <div className="mt-4">
            <BulletList items={qa.regressionStrategy.steps} />
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Critical flows to prioritize
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {qa.regressionStrategy.criticalFlows.map((flow) => (
              <li
                key={flow}
                className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-800 ring-1 ring-indigo-500/20 dark:text-indigo-300"
              >
                {flow}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Then test
          </p>
          <div className="mt-3">
            <BulletList items={qa.regressionStrategy.testScenarios} />
          </div>
        </article>

        <article className="glass-panel p-6 sm:p-8">
          <h3 className="text-lg font-extrabold tracking-tight text-zinc-950 dark:text-white">
            {qa.riskBasedTesting.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
            {qa.riskBasedTesting.intro}
          </p>
          <ul className="mt-6 space-y-4">
            {qa.riskBasedTesting.tiers.map((tier) => (
              <li
                key={tier.priority}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex size-8 items-center justify-center rounded-lg bg-zinc-950 text-xs font-bold text-white dark:bg-white dark:text-zinc-950">
                    {tier.priority}
                  </span>
                  <span className="text-sm font-semibold text-zinc-950 dark:text-white">
                    {tier.label}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                  {tier.examples.map((example) => (
                    <li key={example} className="flex gap-2">
                      <span aria-hidden="true">·</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <article className="glass-panel mt-6 p-6 sm:p-8">
        <h3 className="text-lg font-extrabold tracking-tight text-zinc-950 dark:text-white">
          Verdict
        </h3>
        <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
          {qa.verdict}
        </p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Main gaps to address honestly
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {qa.mainGaps.map((gap) => (
            <li
              key={gap}
              className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-800 ring-1 ring-red-500/20 dark:text-red-300"
            >
              {gap}
            </li>
          ))}
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
