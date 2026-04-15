import { Project } from "@/lib/site";
import Image from "next/image";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-[0_22px_60px_-40px_rgba(0,0,0,0.85)] transition hover:-translate-y-0.5 hover:border-white/20">
      <div className="relative aspect-[16/10] w-full">
        {project.imageSrc ? (
          <Image
            src={project.imageSrc}
            alt={project.imageAlt ?? project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            priority={false}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/25 via-fuchsia-500/15 to-amber-500/10" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title}`}
            className="absolute inset-0"
          />
        ) : null}
      </div>

      <div className="bg-amber-400 px-4 py-3 text-zinc-950">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-extrabold tracking-tight sm:text-base">
            {project.title}
          </p>
          {project.repoHref ? (
            <a
              href={project.repoHref}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold underline decoration-black/30 underline-offset-4 hover:decoration-black/60"
            >
              Code
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

