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

export type EducationItem = {
  degree: string;
  field: string;
  school: string;
  period: string;
  imageSrc: string;
  imageAlt: string;
};

export const site = {
  name: "Jeson Parado",
  role: "Full‑stack Developer",
  location: "City, Country",
  summary:
    "I build fast, accessible web apps with great UX. I care about clean architecture, performance, and details.",
  phone: "+639639493290",
  email: "paradojeson@gmail.com",
  address: "Davao City, Philippines",
  socials: [
    { label: "GitHub", href: "https://github.com/jnparado" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle/" },
    { label: "Resume", href: "/resume.pdf" },
  ] satisfies SocialLink[],
  skills: [
    "React",
    "Express.js",
    "Node.js",
    "Redux",
    "Firebase",
    "Android",
    "Material UI",
    "Chakra UI",
    "Tailwind CSS",
    "Bootstrap",
    "Sass",
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Java",
    "Kotlin",
    "PHP",
    "Python",
    "C++",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "AWS",
    "Heroku",
  ],
  education: [
    {
      degree: "Bachelor of Science in",
      field: "Information Technology",
      school: "Holy Cross of Davao College",
      period: "2011 - 2015",
      imageSrc: "/images/holy-cross-of-davao-college.png",
      imageAlt: "Holy Cross of Davao College",
    },
  ] satisfies EducationItem[],
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

