export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  imageSrc?: string;
  imageAlt?: string;
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

export type ExperienceItem = {
  company: string;
  role: string;
  kind?: string;
  period: string;
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
      imageSrc: "/images/projects/project-one.svg",
      imageAlt: "Project One preview",
      href: "https://example.com",
      repoHref: "https://github.com/your-handle/project-one",
    },
    {
      title: "Project Two",
      description:
        "A developer tool that speeds up workflows with thoughtful UX and fast performance.",
      tags: ["React", "Tailwind", "DX"],
      imageSrc: "/images/projects/project-two.svg",
      imageAlt: "Project Two preview",
      repoHref: "https://github.com/your-handle/project-two",
    },
    {
      title: "Project Three",
      description:
        "An API + UI that focuses on reliability, observability, and maintainability.",
      tags: ["Node.js", "API", "Testing"],
      imageSrc: "/images/projects/project-three.svg",
      imageAlt: "Project Three preview",
    },
  ] satisfies Project[],
  experience: [
    {
      company: "Self Employed",
      role: "Full Stack Developer",
      period: "Oct 2021 - Present",
    },
    {
      company: "Mapstreak Flyseas",
      role: "Web Developer | Internship",
      period: "June 2021 - Dec 2021",
    },
    {
      company: "The Spark Foundation",
      role: "Website Developer | Internship",
      period: "May 2021 - June 2021",
    },
    {
      company: "The Spark Foundation",
      role: "Mobile Application Developer | Internship",
      period: "April 2021 - May 2021",
    },
    {
      company: "Frshr Technologies",
      role: "Wordpress Developer | Internship",
      period: "April 2021 - April 2021",
    },
  ] satisfies ExperienceItem[],
} as const;

