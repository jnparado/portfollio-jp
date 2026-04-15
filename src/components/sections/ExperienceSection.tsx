import { Section } from "@/components/Section";
import { site } from "@/lib/site";

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
      <path d="M9.5 6.5A2.5 2.5 0 0 1 12 4h0a2.5 2.5 0 0 1 2.5 2.5V7H19a2 2 0 0 1 2 2v2.7c0 .5-.3.9-.7 1.1l-2.3 1V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-5.2l-2.3-1c-.4-.2-.7-.6-.7-1.1V9a2 2 0 0 1 2-2h4.5v-.5Zm2.5-1a1 1 0 0 0-1 1V7h2v-.5a1 1 0 0 0-1-1Zm-6.5 7.9 2.8 1.2c.2.1.4.3.4.6V19c0 .3.2.5.5.5h8.6c.3 0 .5-.2.5-.5v-3.8c0-.2.1-.5.4-.6l2.8-1.2V11.2c-2.6 1-5.6 1.5-9 1.5s-6.4-.5-9-1.5v2.2Zm.2-4.9c2.5 1 5.3 1.5 8.3 1.5s5.8-.5 8.3-1.5V9.5H5.7v-.9Z" />
    </svg>
  );
}

export function ExperienceSection() {
  const items = site.experience ?? [];

  return (
    <Section id="experience" title="">
      <div className="mb-10 flex items-center justify-center gap-3 text-center">
        <span className="grid size-10 place-items-center rounded-xl bg-white/5 text-white ring-1 ring-white/10">
          <BriefcaseIcon />
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
          Work Experience
        </h2>
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

        <ol className="space-y-10">
          {items.map((item, idx) => {
            const isLeft = idx % 2 === 1; // alternate after the first
            return (
              <li
                key={`${item.company}-${item.period}-${idx}`}
                className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12"
              >
                {/* center icon */}
                <div className="pointer-events-none absolute left-4 top-6 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2">
                  <span className="grid size-10 place-items-center rounded-full bg-zinc-950 text-amber-400 ring-2 ring-white/20">
                    <BriefcaseIcon />
                  </span>
                </div>

                {/* Left column */}
                <div className={isLeft ? "md:col-start-1 md:justify-self-end" : "md:col-start-1"}>
                  {isLeft ? (
                    <Card item={item} side="left" />
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>

                {/* Right column */}
                <div className={!isLeft ? "md:col-start-2" : "md:col-start-2"}>
                  {!isLeft ? (
                    <Card item={item} side="right" />
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>

                {/* Mobile: always show card full width */}
                <div className="md:hidden">
                  <Card item={item} side="right" />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

function Card({
  item,
  side,
}: {
  item: { company: string; role: string; period: string };
  side: "left" | "right";
}) {
  return (
    <div
      className={[
        "relative ml-10 rounded-xl bg-white px-5 py-4 text-red-700 shadow-[0_18px_55px_-35px_rgba(0,0,0,0.65)] ring-1 ring-black/10 md:ml-0 md:max-w-[420px] dark:bg-white dark:text-red-700 dark:ring-white/10",
        side === "left" ? "md:mr-10" : "md:ml-10",
      ].join(" ")}
    >
      {/* notch */}
      <div
        aria-hidden="true"
        className={[
          "absolute top-6 h-3 w-3 rotate-45 bg-white ring-1 ring-black/10 dark:ring-white/10",
          side === "left" ? "-right-1.5 md:-right-1.5" : "-left-1.5 md:-left-1.5",
        ].join(" ")}
      />

      <p className="text-sm font-extrabold text-red-700">{item.company}</p>
      <p className="mt-0.5 text-sm font-semibold text-red-700">{item.role}</p>
      <p className="mt-2 text-xs font-semibold text-red-600">{item.period}</p>
    </div>
  );
}

