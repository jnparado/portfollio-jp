import { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/10 dark:bg-zinc-950">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-black/20 underline-offset-4 transition-colors group-hover:decoration-black/50 dark:decoration-white/20 dark:group-hover:decoration-white/50"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        {project.repoHref ? (
          <a
            href={project.repoHref}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Code
          </a>
        ) : null}
      </div>
      <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-black/10 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700 dark:border-white/10 dark:bg-black dark:text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

