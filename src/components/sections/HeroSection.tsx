import { site } from "@/lib/site";
import Image from "next/image";

function SocialIcon({ label }: { label: string }) {
  // Minimal inline icons to avoid adding deps.
  if (label === "GitHub") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
        <path d="M12 .5C5.73.5.75 5.62.75 12c0 5.1 3.29 9.43 7.86 10.96.58.11.8-.26.8-.57v-2.1c-3.2.71-3.88-1.58-3.88-1.58-.53-1.39-1.28-1.76-1.28-1.76-1.05-.73.08-.72.08-.72 1.16.08 1.77 1.22 1.77 1.22 1.03 1.8 2.71 1.28 3.37.98.1-.77.4-1.28.73-1.57-2.55-.3-5.24-1.31-5.24-5.84 0-1.29.44-2.34 1.17-3.17-.12-.3-.51-1.5.11-3.12 0 0 .96-.31 3.15 1.21.91-.26 1.9-.38 2.88-.38.98 0 1.97.13 2.88.38 2.19-1.52 3.15-1.21 3.15-1.21.62 1.62.23 2.82.11 3.12.73.83 1.17 1.88 1.17 3.17 0 4.54-2.69 5.53-5.25 5.83.41.37.78 1.09.78 2.2v3.26c0 .31.21.68.81.57 4.57-1.53 7.86-5.86 7.86-10.96C23.25 5.62 18.27.5 12 .5Z" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
        <path d="M20.45 20.45h-3.55v-5.56c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.15 1.45-2.15 2.95v5.65H9.34V9h3.4v1.56h.05c.47-.9 1.62-1.86 3.34-1.86 3.57 0 4.23 2.35 4.23 5.41v6.34ZM5.33 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.55V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.23 0Z" />
      </svg>
    );
  }

  if (label === "Resume") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
        <path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 1.5V8h4.5L14 3.5ZM7.5 12.25h9v1.5h-9v-1.5Zm0 4h9v1.5h-9v-1.5Zm0-8h6v1.5h-6v-1.5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
      <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-8.75a7.25 7.25 0 1 1 0 14.5 7.25 7.25 0 0 1 0-14.5Z" />
    </svg>
  );
}

export function HeroSection() {
  const firstName = site.name.split(" ")[0] ?? site.name;

  return (
    <div id="home" className="relative py-14 sm:py-20 scroll-mt-24">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.55] [mask-image:radial-gradient(closest-side,rgba(0,0,0,1),rgba(0,0,0,0))] dark:opacity-[0.35]"
        viewBox="0 0 900 480"
        fill="none"
      >
        <path
          d="M110 140C210 80 330 90 390 160C455 235 540 270 640 250C740 230 790 170 860 120"
          stroke="currentColor"
          strokeOpacity="0.18"
          strokeWidth="2"
          className="text-zinc-900 dark:text-white"
        />
        <path
          d="M90 320C190 260 310 270 385 315C470 368 575 372 660 330C740 290 810 250 870 220"
          stroke="currentColor"
          strokeOpacity="0.14"
          strokeWidth="2"
          className="text-zinc-900 dark:text-white"
        />
        {[
          [120, 145],
          [200, 105],
          [295, 120],
          [390, 160],
          [480, 240],
          [560, 270],
          [645, 250],
          [740, 215],
          [835, 135],
          [115, 325],
          [240, 285],
          [385, 315],
          [520, 365],
          [660, 330],
          [770, 285],
          [870, 225],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle
              cx={x}
              cy={y}
              r="6"
              className="text-indigo-500"
              fill="currentColor"
              opacity="0.25"
            />
            <circle
              cx={x}
              cy={y}
              r="2.5"
              className="text-indigo-600"
              fill="currentColor"
              opacity="0.75"
            />
          </g>
        ))}
      </svg>

      <div className="grid items-center gap-10 lg:grid-cols-[1fr_360px]">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="inline-flex size-2 rounded-full bg-emerald-500" />
            Available for work
            <span className="mx-2 text-zinc-300 dark:text-zinc-700">•</span>
            {site.location}
          </div>

          <div className="space-y-4">
            <p className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
              Hi There,
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-6xl">
              I&apos;m{" "}
              <span className="text-amber-500 dark:text-amber-400">{firstName}</span>
            </h1>

            <p className="max-w-2xl text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-xl">
              I Am Into{" "}
              <span className="text-rose-600 dark:text-rose-400">{site.role}</span>{" "}
              <span className="text-zinc-950/70 dark:text-white/70">|</span>
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#about"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-7 text-sm font-semibold text-white shadow-[0_18px_45px_-22px_rgba(99,102,241,0.75)] transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:w-auto"
            >
              About Me
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-none stroke-current stroke-2">
                <path d="M12 5v14" strokeLinecap="round" />
                <path d="M7.5 14.5 12 19l4.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 w-full items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:bg-black dark:text-zinc-200 dark:hover:bg-zinc-900 sm:w-auto"
            >
              Contact
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            {site.socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                aria-label={s.label}
                title={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex size-12 items-center justify-center rounded-full bg-black/80 text-white shadow-sm ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-black md:transition-transform"
              >
                <SocialIcon label={s.label} />
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[360px]">
          <div className="relative mx-auto aspect-square w-full max-w-[320px]">
            <div className="absolute inset-0 rounded-full bg-amber-300/80 blur-[0px] dark:bg-amber-300/70" />
            <div className="absolute inset-3 rounded-full bg-white/70 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/10 backdrop-blur dark:bg-black/40 dark:ring-white/10" />
            <div className="absolute inset-6 overflow-hidden rounded-full ring-1 ring-black/10 dark:ring-white/10">
              <Image
                src="/images/jeson-parado.png"
                alt={site.name}
                fill
                sizes="(min-width: 1024px) 360px, 70vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

