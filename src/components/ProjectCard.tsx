import { Project } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 shadow-[0_22px_60px_-40px_rgba(0,0,0,0.85)] ring-1 ring-white/5 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-[0_28px_70px_-35px_rgba(99,102,241,0.35)]">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {project.imageSrc ? (
          <Image
            src={project.imageSrc}
            alt={project.imageAlt ?? project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            priority={false}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/25 via-fuchsia-500/15 to-amber-500/10" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />

        {project.slug ? (
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`View ${project.title} project`}
            className="absolute inset-0 z-10"
          />
        ) : project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title}`}
            className="absolute inset-0 z-10"
          />
        ) : null}
      </div>

      <div className="relative border-t border-white/10 bg-zinc-950/95 px-4 py-4">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 transition group-hover:opacity-100"
        />
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-extrabold tracking-tight text-white sm:text-base">
            {project.title}
          </p>
          {project.repoHref ? (
            <a
              href={project.repoHref}
              target="_blank"
              rel="noreferrer"
              className="relative z-20 shrink-0 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/90 transition hover:bg-white/20"
            >
              Code
            </a>
          ) : null}
        </div>
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-zinc-400">
          {project.description}
        </p>
        {project.tags.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-[10px] font-medium text-indigo-300 ring-1 ring-indigo-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
