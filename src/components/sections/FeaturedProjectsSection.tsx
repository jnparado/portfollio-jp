import { Section } from "@/components/Section";
import { site } from "@/lib/site";

function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-current">
      <path d="M13.8 2.2c3.6.2 6.6 3.1 7.1 6.7.1 1-.2 2.2-.9 3.3l-3.2 5.3c-.7 1.2-2.1 1.9-3.5 1.9H8.8c-1.4 0-2.8-.7-3.5-1.9l-1.7-2.8c-.4-.6-.4-1.3-.1-1.9l1.7-3.2c.5-1 1.6-1.6 2.7-1.5l.6.1c.8-2.7 3.3-4.8 5.8-5Zm-1.2 5.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM9.2 20.4c.2 1.1-.6 2.1-1.7 2.1H6.2c-1 0-1.8-.8-1.7-1.8.1-.8.6-1.4 1.3-1.6l2.9-.7.5 2Z" />
    </svg>
  );
}

export function FeaturedProjectsSection() {
  const items = site.featuredProjects ?? [];
  if (items.length === 0) return null;

  return (
    <Section title="">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl border border-white/10 bg-zinc-950/60 p-6 shadow-[0_22px_60px_-40px_rgba(0,0,0,0.85)] ring-1 ring-white/5 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-white/5 text-white ring-1 ring-white/10">
              <RocketIcon />
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-white/70">
                Featured Projects
              </p>
              <p className="text-sm text-white/70">
                High-impact builds I&apos;m proud of.
              </p>
            </div>
          </div>

          <ol className="space-y-6 text-sm leading-7 text-white/80">
            {items.map((p, idx) => (
              <li key={p.title} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="font-extrabold tracking-tight text-white">
                  {idx + 1}. {p.title}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 size-1.5 rounded-full bg-amber-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-white/70">
                  <span className="font-semibold text-white/85">Tech:</span> {p.tech}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

