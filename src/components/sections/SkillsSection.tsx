import { Section } from "@/components/Section";
import { site } from "@/lib/site";

function SkillIcon({ label }: { label: string }) {
  // Minimal inline icons to avoid adding deps.
  if (label === "React") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7 fill-none">
        <circle cx="12" cy="12" r="1.8" className="fill-indigo-200" />
        <g className="stroke-indigo-200" strokeWidth="1.6" opacity="0.95">
          <ellipse cx="12" cy="12" rx="9" ry="3.6" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
        </g>
      </svg>
    );
  }

  if (label === "Node.js" || label === "Express.js") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7 fill-none">
        <path
          d="M12 2.5 20 7v10l-8 4.5L4 17V7l8-4.5Z"
          className="stroke-emerald-200"
          strokeWidth="1.6"
        />
        <path
          d="M8.3 11.2c.5-1.2 1.8-2 3.7-2 2.2 0 3.7 1.1 3.7 2.8 0 1.7-1.3 2.9-3.7 2.9-1.8 0-3.2-.8-3.7-2.1"
          className="stroke-emerald-200"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (label === "Tailwind CSS") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7 fill-none">
        <path
          d="M7.5 11c.9-3 2.8-4.5 5.5-4.5 4 0 5 3 7.5 3-.9 3-2.8 4.5-5.5 4.5-4 0-5-3-7.5-3Zm-3 6c.9-3 2.8-4.5 5.5-4.5 4 0 5 3 7.5 3-.9 3-2.8 4.5-5.5 4.5-4 0-5-3-7.5-3Z"
          className="fill-sky-200"
          opacity="0.95"
        />
      </svg>
    );
  }

  if (label === "JavaScript" || label === "TypeScript") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7 fill-none">
        <path
          d="M5 4.5h14v15H5v-15Z"
          className="stroke-amber-200"
          strokeWidth="1.6"
        />
        <path
          d="M9 16.4c.4.8 1.1 1.2 2 1.2 1 0 1.6-.5 1.6-1.3 0-1-1-1.3-2.2-1.8-1.2-.5-2.2-1.1-2.2-2.6 0-1.5 1.2-2.6 3-2.6 1.3 0 2.2.4 2.9 1.5"
          className="stroke-amber-200"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (label === "AWS") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7 fill-none">
        <path
          d="M7.5 16.8c0 1.7 1.5 3 3.4 3h6.2c1.9 0 3.4-1.3 3.4-3 0-1.6-1.2-2.8-2.9-3 .1-.4.1-.7.1-1.1 0-2.6-2.2-4.7-4.8-4.7-2 0-3.8 1.2-4.5 3-1.2.4-2.1 1.5-2.1 2.8 0 .2 0 .4.1.6-1.2.3-1.9 1.2-1.9 2.4Z"
          className="stroke-orange-200"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7 fill-none">
      <path
        d="M7.5 8.5h9m-9 4h9m-6 4h6"
        className="stroke-zinc-200"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M6 3.8h12A2.2 2.2 0 0 1 20.2 6v12A2.2 2.2 0 0 1 18 20.2H6A2.2 2.2 0 0 1 3.8 18V6A2.2 2.2 0 0 1 6 3.8Z"
        className="stroke-zinc-200"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills & Abilities">
      <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-purple-700 p-[1px]">
        <div className="rounded-3xl bg-zinc-950/90 px-5 py-8 ring-1 ring-white/10 sm:px-8 sm:py-10">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-white/70">
              Skills &amp; Abilities
            </p>
            <p className="mt-2 text-pretty text-sm leading-7 text-white/70">
              A snapshot of the tools and technologies I use to ship products.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {site.skills.map((label) => (
              <li
                key={label}
                className="group rounded-2xl border border-white/10 bg-black/30 p-4 shadow-[0_16px_40px_-30px_rgba(0,0,0,0.8)] transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-black/40"
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="grid size-12 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition group-hover:bg-white/7">
                    <SkillIcon label={label} />
                  </div>
                  <p className="text-sm font-medium text-white/90">{label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

