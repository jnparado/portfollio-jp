import { Section } from "@/components/Section";
import { site } from "@/lib/site";
import Image from "next/image";

export function EducationSection() {
  return (
    <Section id="education" title="My Education">
      <div className="max-w-3xl">
        <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-300">
          Education is not the learning of facts, but the training of the mind to think.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4">
        {site.education.map((item) => (
          <div
            key={`${item.school}-${item.period}`}
            className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_50px_-35px_rgba(0,0,0,0.45)] dark:border-white/10 dark:bg-zinc-950"
          >
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr]">
              <div className="relative h-48 w-full md:h-full">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 768px) 240px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
                  {item.degree}
                </p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-2xl">
                  {item.field}
                </h3>
                <p className="mt-3 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {item.school}
                </p>
                <p className="mt-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                  {item.period}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

