export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repoHref?: string;
};

export const site = {
  name: "Jeson Parado",
  role: "Full‑stack Developer",
  location: "City, Country",
  summary:
    "I build fast, accessible web apps with great UX. I care about clean architecture, performance, and details.",
  email: "paradojeson@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/jnparado" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle/" },
    { label: "Resume", href: "/resume.pdf" },
  ] satisfies SocialLink[],
  skills: [
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind",
    "Node.js",
    "PostgreSQL",
    "AI Automation (n8n)",
    "Android Studio",
    "React Native",
    "Xcode",
    "Firebase",
  ],
  projects: [
    {
      title: "Project One",
      description:
        "A production-ready app with authentication, dashboards, and a clean design system.",
      tags: ["Next.js", "TypeScript", "Postgres"],
      href: "https://example.com",
      repoHref: "https://github.com/your-handle/project-one",
    },
    {
      title: "Project Two",
      description:
        "A developer tool that speeds up workflows with thoughtful UX and fast performance.",
      tags: ["React", "Tailwind", "DX"],
      repoHref: "https://github.com/your-handle/project-two",
    },
    {
      title: "Project Three",
      description:
        "An API + UI that focuses on reliability, observability, and maintainability.",
      tags: ["Node.js", "API", "Testing"],
    },
  ] satisfies Project[],
} as const;

