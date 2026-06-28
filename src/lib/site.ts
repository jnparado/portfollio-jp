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
  /** Internal case study URL: `/projects/{slug}` */
  slug?: string;
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

export type SkillGroup = {
  label: string;
  items: string[];
};

export type FeaturedProject = {
  title: string;
  bullets: string[];
  tech: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  kind?: string;
  period: string;
  bullets?: string[];
};

export const site = {
  name: "Jeson Parado",
  role: "Full‑stack Developer",
  location: "City, Country",
  summary:
    "I build full-stack and AI-powered applications including booking systems, chatbots, and automation tools. I specialize in integrating APIs, designing scalable workflows, and solving real business problems using modern technologies.",
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
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "React Native",
    "Spring Boot",
    "Bubble.io",
    "OpenAI API",
    "GitHub",
    "Vercel",
    "Webhooks",
    "CI/CD",
  ],
  skillGroups: [
    { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS (responsive, high-performance UI)"] },
    { label: "Backend", items: ["Node.js", "Spring Boot (REST APIs, scalable backend architecture)"] },
    { label: "Mobile Development", items: ["React Native", "iOS (Xcode)", "Android (Kotlin, Jetpack Compose)"] },
    { label: "Database", items: ["PostgreSQL", "Supabase (schema design, query optimization)"] },
    { label: "AI & Automation", items: ["OpenAI API", "AI-driven workflows", "Prompt engineering"] },
    { label: "No-Code / Low-Code", items: ["Bubble.io (rapid full-stack development, automation systems)"] },
    { label: "Tools & DevOps", items: ["GitHub", "Vercel", "Cursor", "CI/CD basics", "REST APIs", "Webhooks"] },
  ] satisfies SkillGroup[],
  featuredProjects: [
    {
      title: "AI Document Verification System",
      bullets: [
        "Extracts data from PDFs using OpenAI Vision",
        "Validates insurance certificates",
      ],
      tech: "OpenAI, API, Backend logic",
    },
    {
      title: "Yacht Booking Platform",
      bullets: [
        "Dynamic scheduling system",
        "Real-time availability logic",
        "Built full-stack",
      ],
      tech: "Bubble.io, Xano, Stripe, Mapbox",
    },
    {
      title: "AI Chatbot App",
      bullets: ["Spring Boot backend", "Kotlin mobile frontend"],
      tech: "Spring Boot, Kotlin, OpenAI API",
    },
  ] satisfies FeaturedProject[],
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
      title: "Stylerbox",
      description:
        "Patented UVC sterilizing smart hair appliance organizer with auto shut-off, optional touchscreen, and a revenue-generating Stylerbox app.",
      tags: ["Hardware", "UVC sterilization", "Smart display", "Product"],
      imageSrc: "/images/projects/stylerbox-hero.png",
      imageAlt:
        "Stylerbox wall-mounted unit with hair tools and illuminated display",
      slug: "stylerbox",
      href: "https://stylerbox.com",
    },
    {
      title: "Deletely",
      description:
        "Hands-on removal of negative reviews for Australian real estate agencies—protect your reputation and your business.",
      tags: ["Real estate", "Reputation", "Australia", "Web"],
      imageSrc: "/images/projects/deletely-hero.png",
      imageAlt:
        "Deletely homepage with maroon hero and remove negative reviews messaging",
      slug: "deletely",
      href: "https://deletely.com.au",
    },
    {
      title: "Prokrate",
      description:
        "E-commerce for coffee equipment—machines, grinders, beans, sauces, and barista tools for enthusiasts and businesses.",
      tags: ["E-commerce", "Coffee", "Retail", "B2B"],
      imageSrc: "/images/projects/prokrate-hero.png",
      imageAlt:
        "Prokrate storefront hero with professional espresso machine",
      slug: "prokrate",
      href: "https://prokrate.com",
    },
    {
      title: "La Banca Cruises",
      description:
        "Yacht rentals—private charters and shared cruises in Subic for groups from 1 to 60 guests.",
      tags: ["Travel", "Yacht charter", "Subic", "Bubble"],
      imageSrc: "/images/projects/labanca-hero.png",
      imageAlt:
        "La Banca Cruises gallery page with yachts and Unforgettable Experiences banner",
      slug: "labanca",
      href: "https://labancayachtour-36644.bubbleapps.io",
    },
    {
      title: "La Banca Bookings",
      description:
        "Admin dashboard to manage yacht reservations—search, schedule, boats, payments, and booking status in one place.",
      tags: ["Bubble", "Admin", "Bookings", "Operations"],
      imageSrc: "/images/projects/labanca-bookings-hero.png",
      imageAlt:
        "La Banca Cruises admin Bookings page with reservation list and actions",
      slug: "labanca-bookings",
      href: "https://labancatravelsandtours-82856.bubbleapps.io",
    },
    {
      title: "Shirwell Music",
      description:
        "Official artist hub for Shirwell Bancan—stream tracks, browse releases, and shop flowers in a gold-on-black mobile experience.",
      tags: ["Music", "Artist", "E-commerce", "Mobile"],
      imageSrc: "/images/projects/shirwell-music-hero.png",
      imageAlt:
        "Shirwell Music mobile app with hero, Explore Music and Shop Flowers CTAs, and player bar",
      slug: "shirwell-music",
      href: "https://shirwel.com",
    },
    {
      title: "Nexus MedPro",
      description:
        "Healthcare staffing portal with an AI-assisted worker application flow—Grok-powered document parsing and Mapbox-based location matching to connect professionals with shifts.",
      tags: ["Healthcare", "AI", "Grok", "Mapbox", "Onboarding", "Web"],
      imageSrc: "/images/projects/nexus-medpro-hero.png",
      imageAlt:
        "Nexus MedPro Join page with Start Application CTA and Connecting Healthcare professionals with service providers tagline",
      slug: "nexus-medpro",
    },
    {
      title: "MyHiredito",
      description:
        "Online jobs marketplace where workers apply to opportunities and businesses hire vetted freelancers—browse by category, message, and get paid securely on one platform.",
      tags: [
        "Marketplace",
        "Jobs",
        "Freelancers",
        "Hiring",
        "Web",
      ],
      imageSrc: "/images/projects/myhiredito-hero.png",
      imageAlt:
        "MyHiredito hero with Recruit the talent you need without the stress headline and notification cards",
      slug: "myhiredito",
    },
    {
      title: "Best Coast Tours",
      description:
        "Smart travel booking platform where customers explore curated tours, customize itineraries, and book seamless travel experiences while admins manage bookings, schedules, and dynamic cost calculations.",
      tags: [
        "Travel",
        "Booking",
        "Tours",
        "Admin Dashboard",
        "Web",
      ],
      imageSrc: "/images/projects/bestcoasttours-logo.jpg",
      imageAlt:
        "Best Coast Tours dashboard showing tour booking, itinerary planning, and booking cost calculation",
      slug: "best-coast-tours",
      href: "https://bestcoasttours.com/",
    },
    {
      title: "Laybare",
      description:
        "A production-ready app with authentication, dashboards, and a clean design system.",
      tags: ["Next.js", "TypeScript", "Postgres"],
      imageSrc: "/images/projects/project-one.svg",
      imageAlt: "Project One preview",
      href: "https://lay-bare.com",
      repoHref: "https://github.com/your-handle/project-one",
    },
    {
      title: "mwell-ios",
      description:
        "Healthcare mobile application for iOS featuring telemedicine, wellness tracking, medical records management, and digital health services.",
      tags: [
        "Sign Up / Login",
        "OTP Verification",
        "Face ID",
        "Health Dashboard",
        "Telemedicine",
        "Doctor Consultation",
        "Specialist Booking",
        "Video Consultation",
        "Medical Records",
        "Wellness Tracking",
        "Apple HealthKit",
        "Fitness Programs",
        "Mental Wellness",
        "Lab Test Booking",
        "Pharmacy Ordering",
        "Push Notifications"
      ],
      imageSrc: "/images/projects/mwell-ios.jpg",
      imageAlt: "mWell iOS app preview showing healthcare dashboard and telemedicine features",
      href: "https://www.mwell.com.ph/",
      repoHref: "https://github.com/your-handle/project-one",
    }

  ] satisfies Project[],
  experience: [
    {
      company: "Zipstaff inc",
      role: "Full Stack Developer/Teach Lead",
      period: "December 2025 - April 2026",
      bullets: [
        "Developed worker application systems allowing users to easily apply for jobs via web and mobile",
        "Built job marketplace platforms supporting healthcare and non-healthcare roles",
        "Created internal admin dashboards for managing applicants, job listings, and workflows",
        "Designed scalable backend architecture using Supabase (PostgreSQL, authentication, real-time updates)",
        "Built mobile apps using React Native and web apps using Next.js",
        "Implemented AI-powered features (resume parsing, document validation, automation workflows) using Grok and ChatGPT",
        "Integrated APIs for notifications, payments, and communication systems",
        "Ensured responsive, accessible UI across all devices",
      ],
    },
    {
      company: "Conserva Care LLC",
      role: "Full Stack Developerr",
      period: "March 2024 - November 2024",
      bullets: [
        "Strong understanding of Bubble’s editor, data architecture, workflows, responsive design, and plugin ecosystem",
        "Able to debug complex workflows, identify root causes, and implement effective fixes",
        "Created and exposed REST APIs in Xano to support secure, efficient communication between Bubble and external systems",
        "Implemented Mapbox Location API and used Grok for checking details against client requirements",
        "Built data sync pipelines from Bubble to Xano using Canvas templates",
      ],
    },
    {
      company: "DCBank",
      role: ".NET Developer",
      period: "May 2023 - Feb 2024",
      bullets: [
        "Worked closely with database administrators and the rest of the development team to ensure system accuracy and performance",
        "Managed and maintained multiple applications including support, configuration, documentation, testing, upgrades, and change management processes",
        "Supported customers and end users; collaborated with the development team to resolve application issues",
        "Set up user accounts and helped maintain test, development, and training environments for critical applications",
      ],
    },
    {
      company: "MVP.Dev",
      role: "Full Stack Developer",
      period: "February 2022 - April 2023",
      bullets: [
        "Designed, developed, and delivered applications on the Bubble.io platform",
        "Ensured the best possible performance, quality, and responsiveness of applications",
        "Identified bottlenecks and bugs and devised solutions to address them",
        "Helped maintain code quality, organization, and automation",
        "Provided technical customer support for various platform issues and assisted with other programming tasks (including no-code platforms)",
        "Set up secure connections with OAuth2, Bearer tokens, or API keys",
        "Parsed dynamic JSON responses",
        "Created backend workflows for automated data exchange and synchronization between platforms",
      ],
    },
    {
      company: "Accenture Inc.",
      role: "Mobile Developer (iOS/Android)",
      period: "May 03 2020 - December 15 2021",
      bullets: [
        "Assigned to application development and maintenance",
        "Led end-to-end development of an admin Android app: ordering system, inventory, and sales",
        "Rechecked fixes and issues whenever updates were available",
        "Analyzed data and validated compliance with existing industry practices",
      ],
    },
    {
      company: "One Corp",
      role: "Full Stack Developer",
      period: "August 2016 - December 2019",
      bullets: [
        "Assigned to application development and maintenance; owned major modules end-to-end",
        "Built record management systems in Visual Studio (C#)",
        "Developed the “E-hatud” app using Cordova for web and Xcode/Android Studio for mobile",
        "Resolved difficult problems, improved operations, and provided exceptional client services",
        "Developed a payroll management system using PHP and MySQL, plus leave and attendance features on Android",
      ],
    },
    {
      company: "Technology Innovation Inc.",
      role: "Systems Developer",
      period: "September 2015 - February 2016",
      bullets: [
        "Owned end-to-end development of a “Barangay System”",
        "Developed using Visual Studio (C#) with SQL Server and MySQL",
        "Assigned to application development and maintenance",
        "Worked closely with clients to gather requirements and deliver solutions",
      ],
    },
  ] satisfies ExperienceItem[],
} as const;

export function getProjectBySlug(slug: string): Project | undefined {
  for (const p of site.projects) {
    if (p.slug === slug) return p;
  }
  return undefined;
}

