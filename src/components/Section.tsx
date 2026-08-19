import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="flex flex-col gap-8">
        {title || eyebrow ? (
          <header className="flex max-w-3xl flex-col gap-3">
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <>
                <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                  {title}
                </h2>
                <div className="section-accent" aria-hidden="true" />
              </>
            ) : null}
          </header>
        ) : null}
        {children}
      </div>
    </section>
  );
}
