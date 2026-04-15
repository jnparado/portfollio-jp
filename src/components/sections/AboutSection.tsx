import Image from "next/image";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

function SectionTitleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-current">
      <path d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2c-4.4 0-8 2.3-8 5.2 0 1 1 1.8 2.3 1.8h11.4c1.3 0 2.3-.8 2.3-1.8C20 16.3 16.4 14 12 14Z" />
    </svg>
  );
}

export function AboutSection() {
  const resumeHref = site.socials.find((s) => s.label === "Resume")?.href ?? "/resume.pdf";

  return (
    <Section id="about" title="">
      <div className="text-center">
        <div className="inline-flex items-center justify-center gap-2">
          <span className="text-zinc-950 dark:text-zinc-50">
            <SectionTitleIcon />
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
        </div>
      </div>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-[360px_1fr]">
        <div className="mx-auto w-full max-w-[360px]">
          <div className="relative overflow-hidden rounded-3xl bg-white/5 p-2 ring-1 ring-white/10">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/about-photo.png"
                alt={site.name}
                fill
                sizes="(min-width: 1024px) 360px, 80vw"
                className="object-cover grayscale"
                priority={false}
              />
            </div>
          </div>
        </div>

        <div className="max-w-2xl">
          <p className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            I&apos;m {site.name.split(" ")[0]}
          </p>
          <p className="mt-1 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            {site.role}
          </p>

          <p className="mt-5 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
            {site.summary}
          </p>

          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <dt className="font-semibold text-indigo-600 dark:text-indigo-400">Email</dt>
              <dd className="text-zinc-700 dark:text-zinc-300">
                <a className="hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-2">
              <dt className="font-semibold text-indigo-600 dark:text-indigo-400">Place</dt>
              <dd className="text-zinc-700 dark:text-zinc-300">{site.address ?? site.location}</dd>
            </div>
          </dl>

          <div className="mt-8">
            <a
              href={resumeHref}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white shadow-[0_18px_45px_-22px_rgba(99,102,241,0.75)] transition hover:bg-indigo-500"
            >
              Resume
              <span aria-hidden="true" className="text-base leading-none">
                ›
              </span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

