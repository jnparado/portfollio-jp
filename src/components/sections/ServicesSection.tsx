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
            className="glass-panel group p-6 transition duration-300 hover:border-indigo-500/25 hover:shadow-[0_28px_70px_-35px_rgba(99,102,241,0.25)] sm:p-8"
          >
            <h3 className="text-lg font-extrabold tracking-tight text-zinc-950 dark:text-white">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-white/75">
              {service.description}
            </p>
            <ul className="mt-4 space-y-2">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm text-zinc-700 dark:text-white/80"
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
        <a href="#contact" className="btn-primary">
          Discuss your project
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </Section>
  );
}
