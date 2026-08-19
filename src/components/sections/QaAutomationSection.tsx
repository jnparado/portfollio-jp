import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export function QaAutomationSection() {
  const qa = site.qaAutomation;

  return (
    <Section id="qa-automation" eyebrow="Quality engineering" title={qa.title}>
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
          Discuss QA automation role
        </a>
      </div>
    </Section>
  );
}
