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

export type Service = {
  title: string;
  description: string;
  deliverables: string[];
};

export type QaAutomationProfile = {
  title: string;
  tagline: string;
  intro: string;
  responsibilities: string[];
  outcomes: string[];
};

export const site = {
  name: "Jeson Parado",
  role: "AI Engineer · Full-Stack Developer · QA Automation",
  location: "Davao City, Philippines",
  heroTagline:
    "I build AI-powered products that automate operations, cut manual work, and help teams move faster.",
  availability: {
    status: "Available for new projects",
    responseTime: "Replies within 24 hours",
    engagement: "Contract · Freelance · Remote worldwide",
  },
  summary:
    "I'm an AI Engineer and Full-Stack Developer with 7+ years of experience building intelligent web apps, automation systems, and scalable backends. I integrate LLMs, RAG, and workflow tools like n8n into production solutions—from AI chatbots and document processing to recruitment automation and pharmacy inventory—using Next.js, TypeScript, Supabase, and OpenAI APIs to deliver measurable business value.",
  phone: "+639639493290",
  email: "paradojeson@gmail.com",
  address: "Davao City, Philippines",
  socials: [
    { label: "GitHub", href: "https://github.com/jnparado" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jeson-parado-4362611a6/" },
    { label: "Resume", href: "/resume.pdf" },
  ] satisfies SocialLink[],
  homepageProjectSlugs: [
    "pharma-inventory",
    "hr-recruitment-ai",
    "ai-disaster-simulator",
    "myhiredito",
    "nexus-medpro",
    "best-coast-tours",
  ],
  services: [
    {
      title: "AI Applications & Automation",
      description:
        "Custom AI tools that replace manual work — chatbots, document processing, recruitment screening, and workflow automation with LLMs and RAG.",
      deliverables: [
        "AI chatbots & virtual assistants",
        "Document & PDF analysis pipelines",
        "n8n / API workflow automation",
      ],
    },
    {
      title: "Full-Stack Web Apps",
      description:
        "Production-ready SaaS dashboards, admin panels, and customer-facing apps built with Next.js, TypeScript, and Supabase.",
      deliverables: [
        "Next.js + TypeScript frontends",
        "Supabase / PostgreSQL backends",
        "Auth, RBAC & cloud deployment",
      ],
    },
    {
      title: "Staffing & Booking Platforms",
      description:
        "End-to-end platforms for hiring, shift management, reservations, and payments — built for healthcare, travel, and service businesses.",
      deliverables: [
        "Applicant & worker onboarding flows",
        "Scheduling, billing & compliance tools",
        "Real-time dashboards & reporting",
      ],
    },
    {
      title: "Mobile & Cross-Platform",
      description:
        "iOS, Android, and React Native apps that pair with your web backend — from telehealth to e-commerce and field operations.",
      deliverables: [
        "React Native & native iOS/Android",
        "API integration & push notifications",
        "App Store / Play Store delivery",
      ],
    },
    {
      title: "QA Automation & Quality Engineering",
      description:
        "Embedded QA partner for Salesforce, APIs, and CI/CD — automated regression, integration tests, PR quality gates, and release readiness reporting.",
      deliverables: [
        "Salesforce Flow, Apex & LWC test automation",
        "REST/SOAP API & AWS Lambda integration tests",
        "GitHub Actions quality gates on every PR",
        "AI-accelerated test authoring with human validation",
      ],
    },
  ] satisfies Service[],
  qaAutomation: {
    title: "QA Automation Engineer",
    tagline:
      "Quality assurance as an engineering discipline — not manual scripts.",
    intro:
      "I design, build, and maintain automated test coverage for complex platforms and integration layers. I work embedded with developers as the quality gate: PR reviews, CI/CD pipelines, regression suites, and clear release-readiness metrics — treating test automation as maintainable, version-controlled engineering work.",
    responsibilities: [
      "Automated tests for Salesforce Flows, Apex (unit & integration), and Lightning Web Components UI flows",
      "API & integration tests — REST/SOAP, webhooks, OAuth 2.0, AWS Lambda, mocked vendors, end-to-end scenarios",
      "Required PR reviewer for coverage, regression risk, and engineering standards before production",
      "CI/CD integration — tests on every pull request with quality gates that block failed deployments",
      "Test strategy per feature/integration: test data, sandboxes, scheduled regression & failure triage",
      "Verify error handling, retries, API limits, and negative/failure-mode behavior",
      "AI-assisted test authoring (Claude Code, Cursor, Copilot) with independent validation of all generated tests",
      "Documentation of coverage, gaps, quality metrics, and release readiness for tech leadership",
    ],
    outcomes: [
      "Automated regression for highest-risk platform areas running in CI on every PR",
      "Integration test coverage including negative & failure scenarios",
      "Documented PR review standards adopted by the team",
      "Testing stages in serverless CI/CD pipelines (Lambda, API Gateway)",
      "Reusable AI-driven testing workflows shared across the squad",
    ],
  } satisfies QaAutomationProfile,
  skills: [
    "JavaScript",
    "React",
    "React Native",
    "Vue.js",
    "Kotlin",
    "Swift",
    "Java",
    "C#",
    ".NET",
    ".NET Core",
    "ASP.NET Core",
    "Entity Framework",
    "SQL Server",
    "Blazor",
    "Blazor WebAssembly",
    "OAuth2",
    "BFF",
    "PHP",
    "MySQL",
    "MongoDB",
    "Python",
    "Django",
    "Next.js",
    "NestJS",
    "Tailwind CSS",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "Spring Boot",
    "Bubble.io",
    "Vertex AI",
    "OpenAI API",
    "Grok AI",
    "Google Vertex AI",
    "ChatGPT",
    "Cursor",
    "Claude",
    "GitHub Copilot",
    "Playwright",
    "Selenium",
    "Postman",
    "Salesforce",
    "Apex",
    "LWC",
    "SOAP",
    "GitHub Actions",
    "AWS Lambda",
    "REST APIs",
    "GraphQL",
    "FastAPI",
    "Flutter",
    "Scrum",
    "SAFe",
    "Xano",
    "Mapbox",
    "Stripe",
    "HubSpot",
    "Webhooks",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "AWS",
    "GCP",
    "Azure",
    "GitHub",
    "Vercel",
  ],
  skillGroups: [
    {
      label: "QA Automation Engineer — Role",
      items: [
        "Sole or embedded QA owner for platform + integration quality",
        "Partner with Salesforce devs & integration engineers on shared delivery",
        "Quality gate before production — coverage, risk, and standards in PR review",
        "4–6+ years QA experience with 3+ years focused on test automation",
        "Maintainable, version-controlled test code with clear documentation",
      ],
    },
    {
      label: "Salesforce & Platform Testing",
      items: [
        "Apex test classes & 75% deployment coverage requirements",
        "End-to-end Salesforce Flow testing",
        "Lightning Web Components (LWC) UI automation",
        "Lightning Experience UI automation challenges",
        "Salesforce DX, sandboxes & scratch org test environments (familiarity)",
        "Preferred: Provar, Copado Robotic Testing, Litify / vertical SaaS on Salesforce",
      ],
    },
    {
      label: "API & Integration Test Automation",
      items: [
        "REST & SOAP API automated suites from scratch",
        "Webhook flows, OAuth 2.0 auth paths & payload validation",
        "AWS Lambda & API Gateway serverless testing",
        "Mocked vendor responses & end-to-end integration scenarios",
        "Negative testing — API limits, bad data, failures & retry behavior",
        "Postman/Newman or equivalent API testing tooling",
      ],
    },
    {
      label: "UI Test Automation",
      items: [
        "Playwright, Selenium, or similar modern UI frameworks",
        "Build automated UI suites from scratch — not only maintenance",
        "JavaScript/TypeScript & Python scripting for test automation",
        "Regression suites on schedule and on deployment",
      ],
    },
    {
      label: "CI/CD & Quality Gates",
      items: [
        "Wire automated tests into CI/CD — run on every pull request",
        "GitHub Actions quality gates that block deploys on failure",
        "Branch protection & required reviewer workflows",
        "Serverless pipeline testing stages with Integration Engineering",
        "Triage failures: defects vs environment/data issues",
      ],
    },
    {
      label: "AI-Assisted Test Engineering",
      items: [
        "Claude Code, Codex, Cursor & MCP agent workflows for test authoring",
        "Accelerate test creation while validating all AI-generated tests",
        "Engineering judgement — never accept AI output without review",
        "Reusable AI-driven testing workflows for the broader team",
      ],
    },
    {
      label: "Full-Stack Product Engineering",
      items: [
        "Build end-to-end product features across backend, frontend & APIs",
        "Partner with Product & Design for simple, intuitive user experiences",
        "Translate customer needs into scalable technical solutions",
        "Principled trade-offs between speed, quality & long-term maintainability",
        "Own features in production — iteration, reliability & improvement",
        "Contribute to shared standards, tooling & engineering practices",
        "Work in small, empowered squads with clear product vertical ownership",
      ],
    },
    {
      label: "Frontend & Mobile",
      items: [
        "JavaScript & React — responsive web applications",
        "TypeScript & React.js (modern full-stack product UI)",
        "Blazor WebAssembly & Blazor Server",
        "Next.js (responsive, high-performance UI)",
        "Modern front-end build tools & package management",
        "Flutter (cross-platform mobile apps)",
        "React Native, iOS (Xcode) & Android (Kotlin)",
        "Tailwind CSS",
      ],
    },
    {
      label: "Backend",
      items: [
        "C# / .NET, .NET Core & ASP.NET Core (commercial experience)",
        "Entity Framework & Microsoft SQL Server backend services",
        "RESTful APIs & scalable backend architectures",
        "Python & Django (bonus full-stack backend)",
        "BFF (Backend for Frontend) architecture",
        "Building & consuming REST APIs at scale",
        "OAuth2 & authentication flows (Bearer tokens, API keys)",
        "Next.js & NestJS (production APIs and server-side apps)",
        "Node.js & GraphQL (scalable backend services)",
        "HubSpot APIs & third-party CRM integrations",
        "Spring Boot (enterprise REST architecture)",
      ],
    },
    {
      label: "Cloud & DevOps",
      items: [
        "AWS (EC2, S3, Lambda, RDS)",
        "Docker containerization & deployment",
        "Vercel, GitHub & CI/CD pipelines",
        "Kubernetes fundamentals",
      ],
    },
    {
      label: "Database",
      items: [
        "Microsoft SQL Server & Entity Framework",
        "Relational database design, SQL querying & performance tuning",
        "PostgreSQL (schema design, queries & optimization)",
        "Supabase & relational database modeling",
        "MySQL & MongoDB",
      ],
    },
    {
      label: "AI-Assisted Development",
      items: [
        "Daily use of Cursor, Claude Code & GitHub Copilot in the SDLC",
        "AI-accelerated coding, debugging, testing, refactoring & documentation",
        "Effective prompts & AI workflows for technical problem-solving",
        "Critically review AI-generated code for accuracy, security & performance",
        "Automate development workflows with AI tools & custom scripting",
        "Stay current on emerging AI technologies & share team best practices",
      ],
    },
    {
      label: "AI & Automation",
      items: ["OpenAI API", "Grok AI", "LLMs & RAG", "n8n workflow automation", "Prompt engineering"],
    },
    {
      label: "Agile & Collaboration",
      items: [
        "Scrum team member in self-organizing squads",
        "Scaled Agile Framework (SAFe) exposure",
        "Collaborate effectively across Product, Design & Engineering",
        "Self-starter — collaborates with team and clients",
        "Moves fast and delivers milestones under uncertainty",
      ],
    },
    {
      label: "Core Strengths",
      items: [
        "7+ years professional software development experience",
        "Design, build & maintain clean, scalable, well-documented code",
        "Software architecture, OOP, design patterns & secure coding practices",
        "Translate business requirements into high-quality technical solutions",
        "Troubleshoot defects and implement reliable long-term solutions",
        "Strong engineering judgement & analytical problem-solving",
        "Excellent written & verbal communication in English",
        "Ownership mindset for features in production",
        "Customer success & people-first mindset",
      ],
    },
    {
      label: "Bonus Experience",
      items: [
        "RESTful APIs & .NET Core backend architectures",
        "Agile / Scrum delivery environments",
        "CI/CD pipelines & cloud-based deployment (AWS, Vercel)",
        "Python / Django · TypeScript / React full-stack products",
        "Fintech & payments (Stripe, billing, marketplace flows)",
      ],
    },
    {
      label: "Values",
      items: [
        "Excellence · Integrity · Professionalism",
        "People Success · Customer Success",
        "Innovation · Diversity · Fun",
      ],
    },
    { label: "No-Code / Low-Code", items: ["Bubble.io (rapid full-stack development, automation systems)"] },
  ] satisfies SkillGroup[],
  featuredProjects: [
    {
      title: "PharmaStock — Pharmacy Inventory",
      bullets: [
        "FEFO stock-out logic with batch and expiry tracking",
        "Low-stock alerts and expiry monitor with discount suggestions",
        "Full product, supplier, and transaction management",
      ],
      tech: "Next.js, TypeScript, Supabase, Tailwind CSS",
    },
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
      title: "PharmaStock",
      description:
        "Pharmacy inventory management system with batch tracking, FEFO dispensing, low-stock alerts, and an expiry monitor with discount suggestions for near-expiry stock.",
      tags: ["Next.js", "TypeScript", "Supabase", "Inventory", "Healthcare"],
      imageSrc: "/images/projects/pharma-inventory-dashboard.png",
      imageAlt:
        "PharmaStock dashboard with sales stats, expiring list, and recent orders",
      slug: "pharma-inventory",
      repoHref: "https://github.com/jnparado/pharma-inventory",
    },
    {
      title: "HR-recruitment-AI",
      description:
        "AI recruitment suite that screens resumes, ranks candidates against job descriptions, and runs first-round interviews—powered by Grok so hiring teams focus only on top matches.",
      tags: ["Next.js", "Grok AI", "Recruitment", "AI", "HR"],
      imageSrc: "/images/projects/hr-recruitment-ai-screening.png",
      imageAlt:
        "HR-recruitment-AI resume screening — job description input and resume upload",
      slug: "hr-recruitment-ai",
      href: "https://hr-recruitment-ai.vercel.app/",
      repoHref: "https://github.com/jnparado/hr_recruitment_ai",
    },
    {
      title: "AI Disaster Simulator",
      description:
        "Interactive disaster simulation platform with flood, earthquake, fire, and outage scenarios—AI-powered evacuation routing, timeline forecasting, and SMS calamity alerts on a 3D map.",
      tags: ["Next.js", "AI", "Mapbox", "Geospatial", "Emergency"],
      imageSrc: "/images/projects/ai-disaster-simulator.png",
      imageAlt:
        "AI Disaster Simulator dashboard with flood map, timeline, and evacuation routes",
      slug: "ai-disaster-simulator",
      href: "https://ai-disaster-simulator.vercel.app/",
      repoHref: "https://github.com/jnparado/ai-disaster-simulator",
    },
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
      title: "Kama Shoetra",
      description:
        "AI-powered sneaker cleaning and restoration platform where customers book premium cleaning services, choose Pudo locker drop-offs, track orders in real time, and manage subscriptions, while admins oversee cleaning workflows, payments, and customer support.",
      tags: [
        "Sneaker Cleaning",
        "Booking",
        "Subscription",
        "Admin Dashboard",
        "Web App",
        "AI",
      ],
      imageSrc: "/images/projects/kamashoetra.png",
      imageAlt:
        "Kama Shoetra dashboard showing sneaker service booking, order tracking, locker selection, and subscription management",
      slug: "kamashoetra",
      repoHref: "https://github.com/jnparado/kamashoetra",
    },
    {
      title: "MyHiredito",
      description:
        "Staffing platform for modern teams—employers post shifts, match verified workers, manage schedules, and run payroll in one place instead of juggling multiple tools.",
      tags: ["Staffing", "Workforce", "Scheduling", "Payroll", "Web App"],
      imageSrc: "/images/projects/myhiredito-hero.png",
      imageAlt:
        "MyHiredito employer homepage — Staff smarter, Hire faster, Stay compliant",
      slug: "myhiredito",
      repoHref: "https://github.com/jnparado/myhiredito",
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
      imageSrc: "/images/projects/laybare.jpeg",
      imageAlt: "Project One preview",
      href: "https://lay-bare.com",
      repoHref: "https://github.com/jnparado/lbo-ios",
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
      imageSrc: "/images/projects/mwell.jpg",
      imageAlt: "mWell iOS app preview showing healthcare dashboard and telemedicine features",
      href: "https://www.mwell.com.ph/",
      repoHref: "https://github.com/jnparado/mwell-ios",
    },
  ] satisfies Project[],
  experience: [
    {
      company: "Zipstaff inc",
      role: "Full Stack Developer / Tech Lead",
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
      role: "Full Stack Developer",
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
      period: "June 2023- Feb 2024",
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
      company: "Core Proc.",
      role: "iOS DEVELOPER - freelance",
      period: "February 2022 – April 2022",
      bullets: [
        "Assigned to application development and maintenance",
        "Led end-to-end development of an admin Android app: ordering system, inventory, and sales",
        "Rechecked fixes and issues whenever updates were available",
        "Analyzed data and validated compliance with existing industry practices",
      ],
    },

    {
      company: "Laybare.",
      role: "iOS DEVELOPER - freelance",
      period: "December 2021 - December 2022",
      bullets: [
        "Assigned to application development and maintenance",
        "Led end-to-end development of an admin Android app: ordering system, inventory, and sales",
        "Rechecked fixes and issues whenever updates were available",
        "Analyzed data and validated compliance with existing industry practices",
      ],
    },

    {
      company: "Accenture Inc.",
      role: "Mobile Developer (iOS/Android)",
      period: "May 03 2020 - November 15 2021",
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

export function getHomepageProjects(): Project[] {
  return site.homepageProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => Boolean(p));
}

