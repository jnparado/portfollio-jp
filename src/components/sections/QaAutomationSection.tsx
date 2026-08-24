import { Section } from "@/components/Section";
import { site, type AiProductQaProfile, type QaAutomationProfile, type QaFitItem } from "@/lib/site";

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
  advantage: {
    className:
      "bg-indigo-500/15 text-indigo-700 ring-indigo-500/25 dark:text-indigo-300",
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

function FitAssessmentTable({ items, description }: { items: QaFitItem[]; description: string }) {
  return (
    <article className="glass-panel p-6 sm:p-8">
      <h3 className="text-lg font-extrabold tracking-tight text-zinc-950 dark:text-white">
        Fit assessment
      </h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
      <ul className="mt-6 divide-y divide-white/10">
        {items.map((item) => {
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
  );
}

function AiProductQaPanel({ qa }: { qa: AiProductQaProfile }) {
  return (
    <div id="ai-product-qa">
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center rounded-full bg-emerald-600/15 px-4 py-1.5 text-sm font-bold text-emerald-700 ring-1 ring-emerald-500/25 dark:text-emerald-300">
          Estimated fit: {qa.estimatedFit}
        </span>
        <h3 className="text-xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          {qa.title}
        </h3>
      </div>
      <p className="mt-3 max-w-3xl text-sm font-semibold text-indigo-600 dark:text-indigo-400">
        {qa.tagline}
      </p>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        {qa.intro}
      </p>

      <blockquote className="glass-panel mt-6 border-l-4 border-emerald-500 p-5 sm:p-6">
        <p className="text-sm font-semibold text-zinc-950 dark:text-white">
          {qa.positioning}
        </p>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {qa.positioningAvoid}
        </p>
      </blockquote>

      <article className="glass-panel mt-6 p-6 sm:p-8">
        <h4 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Strongest selling points
        </h4>
        <div className="mt-4">
          <BulletList items={qa.sellingPoints} />
        </div>
      </article>

      <div className="mt-6">
        <FitAssessmentTable
          items={qa.fitAssessment}
          description="AI product QA requirements — engineering background is an advantage when coding isn't required."
        />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="glass-panel p-6 sm:p-8">
          <h3 className="text-lg font-extrabold tracking-tight text-zinc-950 dark:text-white">
            {qa.advantage.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
            {qa.advantage.intro}
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Investigation stack
          </p>
          <div className="mt-3 max-w-xs">
            <WorkflowStack steps={qa.advantage.workflow} />
          </div>
          <div className="mt-4">
            <BulletList items={qa.advantage.investigationQuestions} />
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Trace example — &ldquo;{qa.advantage.traceExample.uiMessage}&rdquo;
          </p>
          <div className="mt-3 max-w-sm">
            <WorkflowStack steps={qa.advantage.traceExample.traceSteps} />
          </div>
          <p className="mt-4 text-sm leading-6 text-indigo-700 dark:text-indigo-300">
            {qa.advantage.traceExample.finding}
          </p>
        </article>

        <article className="glass-panel p-6 sm:p-8">
          <h3 className="text-lg font-extrabold tracking-tight text-zinc-950 dark:text-white">
            {qa.langSmithPrep.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
            {qa.langSmithPrep.intro}
          </p>
          <div className="mt-4">
            <BulletList items={qa.langSmithPrep.concepts} />
          </div>
          <p className="mt-4 rounded-lg bg-amber-500/10 px-4 py-3 text-sm leading-6 text-amber-900 ring-1 ring-amber-500/20 dark:text-amber-200">
            {qa.langSmithPrep.note}
          </p>

          <h3 className="mt-8 text-lg font-extrabold tracking-tight text-zinc-950 dark:text-white">
            {qa.exploratoryTesting.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
            {qa.exploratoryTesting.intro}
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Example: {qa.exploratoryTesting.exampleFeature}
          </p>
          <div className="mt-3">
            <BulletList items={qa.exploratoryTesting.scenarios} />
          </div>
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
          Prepare honestly before interviewing
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {qa.mainGaps.map((gap) => (
            <li
              key={gap}
              className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-800 ring-1 ring-amber-500/20 dark:text-amber-300"
            >
              {gap}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

function MobileQaPanel({ qa }: { qa: QaAutomationProfile }) {
  return (
    <div id="mobile-qa" className="mt-16 border-t border-white/10 pt-16">
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center rounded-full bg-indigo-600/15 px-4 py-1.5 text-sm font-bold text-indigo-700 ring-1 ring-indigo-500/25 dark:text-indigo-300">
          Estimated fit: {qa.estimatedFit}
        </span>
        <h3 className="text-xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          {qa.title} — mobile &amp; full-stack
        </h3>
      </div>
      <p className="mt-3 max-w-3xl text-sm font-semibold text-indigo-600 dark:text-indigo-400">
        {qa.tagline}
      </p>
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

      <div className="mt-6">
        <FitAssessmentTable
          items={qa.fitAssessment}
          description="How my QA + mobile + full-stack background maps to telehealth and mobile QA roles."
        />
      </div>

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
    </div>
  );
}

export function QaAutomationSection() {
  return (
    <Section id="qa-automation" eyebrow="Quality engineering" title="QA & Product Testing">
      <AiProductQaPanel qa={site.aiProductQa} />
      <MobileQaPanel qa={site.qaAutomation} />

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
