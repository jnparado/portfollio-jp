import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export function ServicesSection() {
  return (
    <Section id="services" eyebrow="What I build" title="Services for clients">
      <p className="max-w-2xl text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        I partner with startups, agencies, and businesses to ship AI-powered
        products and full-stack platforms — from idea to production deployment.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {site.services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6 shadow-[0_22px_60px_-40px_rgba(0,0,0,0.85)] ring-1 ring-white/5"
          >
            <h3 className="text-lg font-extrabold tracking-tight text-white">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/75">
              {service.description}
            </p>
            <ul className="mt-4 space-y-2">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm text-white/80"
                >
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-400"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="#contact"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white shadow-[0_18px_45px_-22px_rgba(99,102,241,0.75)] transition hover:bg-indigo-500"
        >
          Discuss your project
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </Section>
  );
}
