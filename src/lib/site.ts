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

export type QaFitItem = {
  requirement: string;
  assessment: string;
  level: "very-strong" | "strong" | "good" | "gap" | "partial-gap" | "advantage";
  fitLabel: string;
};

export type QaRiskTier = {
  priority: string;
  label: string;
  examples: string[];
};

export type QaAutomationProfile = {
  title: string;
  tagline: string;
  intro: string;
  estimatedFit: string;
  positioning: string;
  positioningAvoid: string;
  responsibilities: string[];
  outcomes: string[];
  fitAssessment: QaFitItem[];
  advantage: {
    title: string;
    intro: string;
    capabilities: string[];
    workflow: string[];
    failurePoints: string[];
  };
  androidEdge: {
    title: string;
    intro: string;
    topics: string[];
  };
  aiApproach: {
    title: string;
    intro: string;
    principles: string[];
  };
  regressionStrategy: {
    title: string;
    steps: string[];
    criticalFlows: string[];
    testScenarios: string[];
  };
  riskBasedTesting: {
    title: string;
    intro: string;
    tiers: QaRiskTier[];
  };
  verdict: string;
  mainGaps: string[];
};

export type AiProductQaProfile = {
  title: string;
  tagline: string;
  intro: string;
  estimatedFit: string;
  positioning: string;
  positioningAvoid: string;
  sellingPoints: string[];
  fitAssessment: QaFitItem[];
  advantage: {
    title: string;
    intro: string;
    investigationQuestions: string[];
    workflow: string[];
    traceExample: {
      uiMessage: string;
      traceSteps: string[];
      finding: string;
    };
  };
  langSmithPrep: {
    title: string;
    intro: string;
    concepts: string[];
    note: string;
  };
  exploratoryTesting: {
    title: string;
    intro: string;
    exampleFeature: string;
    scenarios: string[];
  };
  verdict: string;
  mainGaps: string[];
};

export const site = {
  name: "Jeson Parado",
  role: "QA Specialist · AI Product Testing · Full-Stack Engineer",
  location: "Davao City, Philippines",
  heroTagline:
    "Full-stack engineer with strong QA, automation, and mobile testing — I investigate failures beyond the UI, from Android builds to APIs and production releases.",
  availability: {
    status: "Available for new projects",
    responseTime: "Replies within 24 hours",
    engagement: "Contract · Freelance · Remote worldwide",
  },
  summary:
    "QA specialist with a full-stack engineering background — hands-on experience testing web, mobile, API, and AI-powered applications. Strong at exploratory testing, reproducing complex issues, analyzing AI/agent behavior, and tracing problems to their likely root cause. 7+ years across Next.js, TypeScript, LLMs, Kotlin, PostgreSQL, and production deployments.",
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
      title: "AI Product QA",
      description:
        "Hands-on product QA for AI-powered apps — exploratory testing, agent/LLM behavior analysis, trace-based investigation, and root-cause analysis without needing to write code for the role.",
      deliverables: [
        "Exploratory testing & intended-behavior verification",
        "AI agent trace analysis — tool calls, context, LLM outputs",
        "Bug investigation across UI, API, agent, and data layers",
        "Lightweight QA documentation & regression coverage",
      ],
    },
    {
      title: "QA / Test Engineering",
      description:
        "QA with a mobile + full-stack engineering edge — web and device testing, API verification, release checks, test cases, and automation backed by real build/debug experience.",
      deliverables: [
        "End-to-end web & cross-browser testing (Chrome, Safari, Firefox, Edge)",
        "Android & iOS device testing — Android Studio, Kotlin, Jetpack Compose, Xcode",
        "Postman API testing, bug triage & release verification",
        "Playwright/Selenium automation + AI-assisted test authoring",
      ],
    },
  ] satisfies Service[],
  qaAutomation: {
    title: "QA / Test Engineer",
    tagline:
      "Estimated fit: 80–88% — strongest angle is QA + mobile + full-stack engineering, not a traditional career QA profile.",
    intro:
      "Full-stack engineer / QA automation engineer specializing in web and mobile applications — with hands-on Android, API testing, end-to-end debugging, release validation, and AI-assisted test automation. I work independently with engineering teams while owning quality end to end.",
    estimatedFit: "80–88%",
    positioning:
      "Full-stack engineer with strong QA, automation, and mobile testing experience — not a QA engineer with some development background.",
    positioningAvoid:
      "Don't position as manual-QA-only. The differentiator is understanding feature → risk → test → reproduce → read code/API → automate regression → release judgement.",
    responsibilities: [
      "Understand features, identify risk, test thoroughly, reproduce bugs, and read code/APIs to root-cause failures",
      "End-to-end web application testing, responsive layouts & cross-browser verification",
      "Hands-on Android device testing — builds, signing, permissions, WebViews, lifecycle & release verification",
      "Mobile testing on iOS — Xcode, device builds, updates, and release verification",
      "Test cases, QA checklists, reproduction steps & structured bug triage",
      "API testing with Postman — REST/SOAP, webhooks, OAuth, payload & failure-mode checks",
      "Automated UI & integration tests (Playwright, Selenium) with CI/CD quality gates",
      "Risk-based test plans — prioritize by patient/workflow impact, not just bug count",
      "AI-assisted test authoring (Claude Code, Codex, Cursor, Copilot) with independent review",
    ],
    outcomes: [
      "Reliable regression coverage for highest-risk web & mobile flows",
      "Clear test documentation, checklists & defect reports with reproduction steps",
      "API & integration coverage including negative and edge-case scenarios",
      "Faster release verification with engineering-led triage across the full stack",
      "AI-accelerated test development with validated logic — not blind trust in generated tests",
    ],
    fitAssessment: [
      { requirement: "End-to-end web testing", assessment: "Web application testing & debugging experience", level: "strong", fitLabel: "Strong" },
      { requirement: "Mobile testing", assessment: "Android Studio/Kotlin/Java/Jetpack Compose + iOS/Xcode", level: "very-strong", fitLabel: "Very strong" },
      { requirement: "Android device testing", assessment: "Direct Android development experience gives you an advantage", level: "strong", fitLabel: "Strong" },
      { requirement: "Release verification", assessment: "Mobile app updates, builds & release issue resolution", level: "strong", fitLabel: "Strong" },
      { requirement: "Bug triage", assessment: "Extensive debugging & issue reproduction", level: "strong", fitLabel: "Strong" },
      { requirement: "Test cases / checklists", assessment: "QA checklists, test cases & reproduction steps", level: "strong", fitLabel: "Strong" },
      { requirement: "API testing", assessment: "Postman + API debugging", level: "strong", fitLabel: "Strong" },
      { requirement: "Web / browser testing", assessment: "Chrome, Safari, Firefox, Edge + responsive testing", level: "strong", fitLabel: "Strong" },
      { requirement: "Automated testing", assessment: "Strong engineering foundation — automation depth should be demonstrated", level: "good", fitLabel: "Good" },
      { requirement: "AI coding agents", assessment: "Claude Code, Codex, Cursor, Copilot", level: "very-strong", fitLabel: "Excellent" },
      { requirement: "Dev / staging / production", assessment: "Full-stack deployment & debugging experience", level: "strong", fitLabel: "Strong" },
      { requirement: "Release process", assessment: "Relevant experience, particularly mobile releases", level: "good", fitLabel: "Good" },
      { requirement: "Healthcare / telehealth", assessment: "Not a major part of background — mWell iOS telehealth adjacent", level: "gap", fitLabel: "Gap" },
      { requirement: "MDM", assessment: "Not a core area of experience", level: "partial-gap", fitLabel: "Gap" },
      { requirement: "Continuous release", assessment: "Engineering & deployment experience is relevant", level: "good", fitLabel: "Good / Relevant" },
    ],
    advantage: {
      title: "Engineer who understands QA",
      intro:
        "This role isn't just clicking through test cases. It's understanding features, identifying risk, testing thoroughly, reproducing bugs, reading code and APIs, automating regression, working with engineers, and deciding whether it's safe to release. Full-stack background makes that much easier.",
      capabilities: [
        "Understand feature → identify risk → test → reproduce bugs",
        "Read code/API → automate regression → work with engineers",
        "Decide release readiness with engineering judgement",
      ],
      workflow: [
        "Android App",
        "API",
        "Authentication",
        "PostgreSQL",
        "Appointment / Patient workflow",
      ],
      failurePoints: [
        "Android-specific behavior",
        "Frontend state management",
        "API validation",
        "Authentication",
        "Database state",
        "Network behavior",
        "Backend logic",
        "Deployment / environment configuration",
      ],
    },
    androidEdge: {
      title: "Android experience is a real advantage",
      intro:
        "Hands-on Android device testing — not just testing apps, but building them. Android Studio, Kotlin, Java, Jetpack Compose, WebViews, AdMob, signing/build configuration, and mobile application updates.",
      topics: [
        "APK/AAB builds & signing",
        "Android versions & device-specific behavior",
        "Permissions, WebView behavior & network issues",
        "Lifecycle/state problems, crashes & ANRs",
        "Release builds vs debug builds",
        "Play Store deployment considerations",
      ],
    },
    aiApproach: {
      title: "AI-assisted automation — with engineering judgement",
      intro:
        "I use Claude Code, Codex, Cursor, and Copilot to accelerate test development, debugging, refactoring, and code generation — matching roles that ask for AI coding agents to build and improve automation.",
      principles: [
        "Use AI to accelerate test development — don't blindly trust generated tests",
        "Review test logic, execute tests, and validate edge cases",
        "Ensure automation catches meaningful regressions, not false confidence",
      ],
    },
    regressionStrategy: {
      title: "Regression automation strategy",
      steps: [
        "Identify critical user journeys",
        "Categorize tests by risk",
        "Automate stable, high-value regression paths",
        "Keep exploratory testing for areas requiring human judgement",
        "Run tests in CI with screenshots, logs & traces on failure",
        "Track flaky tests separately",
        "Block releases only on meaningful failures",
      ],
      criticalFlows: [
        "Patient login",
        "Appointment booking",
        "Provider interaction",
        "Telehealth session",
        "Patient data updates",
        "Logout / session expiration",
      ],
      testScenarios: [
        "Authentication, permissions & privacy-sensitive data",
        "Network interruption, expired sessions & duplicate actions",
        "Android background/foreground behavior & screen sizes",
        "Slow connections, API failures, app crashes",
        "Release/build differences (debug vs release)",
      ],
    },
    riskBasedTesting: {
      title: "Risk-based test plans",
      intro:
        "Not every bug has the same severity. For telehealth and healthcare workflows, I classify issues by patient and workflow impact — exactly the judgement modern QA roles ask for.",
      tiers: [
        {
          priority: "P0",
          label: "Release blocker",
          examples: [
            "Patient data exposed to another user",
            "Authentication bypass",
            "Critical appointment failure",
            "Telehealth session completely unavailable",
            "Incorrect patient/provider information",
          ],
        },
        {
          priority: "P1",
          label: "High",
          examples: [
            "Major workflow broken for a subset of users",
            "Android crash affecting important workflow",
            "Appointment state incorrectly saved",
          ],
        },
        {
          priority: "P2",
          label: "Medium",
          examples: [
            "Non-critical feature malfunction",
            "UI issue with workaround",
          ],
        },
        {
          priority: "P3",
          label: "Low",
          examples: [
            "Cosmetic issue",
            "Minor spacing or text problem",
          ],
        },
      ],
    },
    verdict:
      "Strong fit for QA + mobile + full-stack roles. Android + API debugging + release experience + AI coding-agent workflow is unusually relevant. Main gaps: healthcare/telehealth depth, MDM, and formal automated QA infrastructure at scale.",
    mainGaps: [
      "Healthcare / telehealth domain depth",
      "MDM (mobile device management)",
      "Formal automated QA infrastructure at enterprise scale",
    ],
  } satisfies QaAutomationProfile,
  aiProductQa: {
    title: "AI Product QA",
    tagline:
      "Estimated fit: 88–92% — stronger match than traditional QA roles because coding isn't required while engineering background accelerates debugging and root-cause analysis.",
    intro:
      "QA specialist with full-stack engineering understanding who enjoys investigating product behavior — not someone applying to write code. I test AI-powered web and mobile products with an exploratory mindset, analyze agent/LLM behavior, and trace issues to their likely root cause across UI, API, tools, and data.",
    estimatedFit: "88–92%",
    positioning:
      "QA specialist with a full-stack engineering background and hands-on experience testing web, mobile, API, and AI-powered applications. Strong at exploratory testing, reproducing complex issues, analyzing AI/agent behavior, and tracing problems to their likely root cause.",
    positioningAvoid:
      "Don't market as someone who wants to write code for this role — they explicitly say no reading or writing code is required. Lead with engineering-level technical understanding applied to product investigation.",
    sellingPoints: [
      "AI experience — LLMs, RAG, agents, and AI development tools in production",
      "Engineering knowledge — understand what happens underneath the UI without writing code for QA",
      "Mobile coverage — Android/iOS for mobile vs desktop testing requirements",
      "Debugging — frontend, APIs, backend, databases, integrations & deployment",
      "Exploratory mindset — natural edge-case testing beyond happy-path instructions",
    ],
    fitAssessment: [
      { requirement: "Hands-on product QA", assessment: "Extensive product development & debugging experience", level: "strong", fitLabel: "Strong" },
      { requirement: "Testing intended behavior", assessment: "Directly applicable across web, mobile & AI features", level: "strong", fitLabel: "Strong" },
      { requirement: "Exploratory testing", assessment: "Development background helps think of edge cases naturally", level: "very-strong", fitLabel: "Very strong" },
      { requirement: "Bug investigation", assessment: "Strong frontend/backend/API/mobile debugging experience", level: "very-strong", fitLabel: "Very strong" },
      { requirement: "Observability", assessment: "Production debugging & log/trace analysis experience", level: "good", fitLabel: "Good" },
      { requirement: "Agent traces", assessment: "Strong AI experience — LangSmith-specific experience to verify", level: "partial-gap", fitLabel: "Good / Verify" },
      { requirement: "LLM evaluations", assessment: "AI/LLM experience is a strong foundation", level: "partial-gap", fitLabel: "Good / Relevant" },
      { requirement: "Root-cause analysis", assessment: "One of the strongest areas — engineering-led investigation", level: "very-strong", fitLabel: "Excellent" },
      { requirement: "Mobile vs desktop", assessment: "Web + Android + iOS experience", level: "very-strong", fitLabel: "Very strong" },
      { requirement: "Permissions / error states", assessment: "Relevant full-stack & mobile experience", level: "strong", fitLabel: "Strong" },
      { requirement: "Regression testing", assessment: "Structured regression & release verification experience", level: "strong", fitLabel: "Strong" },
      { requirement: "Lightweight QA documentation", assessment: "Test cases, checklists & clear reproduction steps", level: "strong", fitLabel: "Strong" },
      { requirement: "Coding required", assessment: "They explicitly don't require it — engineering background is an advantage", level: "advantage", fitLabel: "Advantage" },
    ],
    advantage: {
      title: "Engineering understanding for AI product QA",
      intro:
        "High-level software engineering understanding that helps trace issues and determine likely root cause — exactly where a traditional QA tester might stop at \"the AI response is wrong.\"",
      investigationQuestions: [
        "Was the user's input interpreted incorrectly?",
        "Did the agent choose the wrong tool?",
        "Was the tool response incorrect?",
        "Was context missing from retrieval?",
        "Did the model produce the wrong answer?",
        "Was the UI displaying an incomplete response?",
        "Is it reproducible?",
        "Is it a frontend, agent, tool, or data issue?",
      ],
      workflow: [
        "User action",
        "UI",
        "API request",
        "Agent",
        "LLM",
        "Tool call",
        "Retrieved context",
        "Final response",
      ],
      traceExample: {
        uiMessage: "I couldn't find your order.",
        traceSteps: [
          "User message",
          "Agent",
          "Order lookup tool",
          "Wrong customer_id",
          "No results",
          "Agent: \"I couldn't find your order.\"",
        ],
        finding:
          "The agent is passing the wrong customer identifier to the order lookup tool. The UI behavior is correct, but the agent/tool interaction is producing an incorrect result.",
      },
    },
    langSmithPrep: {
      title: "LLM traces & observability (LangSmith concepts)",
      intro:
        "Strong AI foundation — learning LangSmith-specific tooling before interviews. Honest about direct LangSmith experience; fluent in equivalent trace concepts.",
      concepts: [
        "Traces, runs & parent/child runs",
        "Prompts, inputs/outputs & tool calls",
        "Token usage, latency & errors",
        "Evaluation scores & dataset-based evaluations",
        "LLM-as-a-judge & agent trajectories",
      ],
      note:
        "If LangSmith hasn't been used directly, don't claim it — describe equivalent trace investigation from building and debugging AI agents in production.",
    },
    exploratoryTesting: {
      title: "Exploratory QA — beyond instructions",
      intro:
        "They want someone who doesn't just follow instructions. Development experience makes exhaustive edge-case exploration natural.",
      exampleFeature: "User can update their profile",
      scenarios: [
        "Valid input, empty input, very long input & special characters",
        "Invalid format, refresh during submission & double-click submit",
        "Browser back button, mobile vs desktop layouts",
        "Expired session & insufficient permissions",
        "API failure, slow network & duplicate submission",
        "Navigating away mid-flow, empty/error/success states",
      ],
    },
    verdict:
      "Very strong fit for AI product QA. Engineering background is an explicit advantage for root-cause analysis and agent investigation — better match than telehealth QA when coding isn't required. Apply with confidence; prepare LangSmith/trace concepts honestly.",
    mainGaps: [
      "Direct LangSmith hands-on experience (concepts understood, verify before claiming)",
      "Formal LLM evaluation infrastructure at enterprise scale",
    ],
  } satisfies AiProductQaProfile,
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
    "RAG",
    "LLM Evaluations",
    "Agent Testing",
    "Exploratory Testing",
    "Root-Cause Analysis",
    "Observability",
    "LangSmith",
    "Grok AI",
    "Google Vertex AI",
    "ChatGPT",
    "Cursor",
    "Claude",
    "GitHub Copilot",
    "Playwright",
    "Selenium",
    "Postman",
    "Android Studio",
    "Jetpack Compose",
    "Xcode",
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
      label: "AI Product QA — Application Positioning",
      items: [
        "QA specialist with full-stack engineering background — investigates product behavior, not a coder-for-hire on QA roles",
        "Exploratory testing, AI/agent behavior analysis & root-cause tracing across UI → API → agent → LLM → tools",
        "Mobile vs desktop coverage — web, Android & iOS",
        "Lightweight QA documentation, regression testing & intended-behavior verification",
        "Estimated fit 88–92% for AI product QA roles where coding is not required",
      ],
    },
    {
      label: "AI Product QA — Fit & Strengths",
      items: [
        "Hands-on product QA — strong development & debugging background",
        "Exploratory testing — very strong edge-case mindset from engineering",
        "Bug investigation & root-cause analysis — excellent, core differentiator",
        "Mobile vs desktop — very strong web + Android + iOS",
        "Coding not required — engineering understanding is an explicit advantage",
      ],
    },
    {
      label: "AI Agent & LLM Trace Investigation",
      items: [
        "Trace investigation: user action → UI → API → agent → LLM → tool call → context → response",
        "Ask: wrong tool? missing context? bad tool response? model error? UI display issue?",
        "LangSmith concepts: traces, runs, parent/child runs, prompts, tool calls, latency, eval scores",
        "Dataset evaluations, LLM-as-a-judge & agent trajectories — strong AI foundation",
        "Honest gap: verify direct LangSmith experience before claiming; equivalent concepts from production AI work",
      ],
    },
    {
      label: "Exploratory Testing — Edge Cases",
      items: [
        "Beyond happy path — valid/empty/long/special-char input, invalid formats",
        "Session & permissions — expired session, insufficient permissions, duplicate submission",
        "Environment — API failure, slow network, refresh mid-flow, browser back, navigate away",
        "Platform — mobile vs desktop, empty/error/success states",
        "Profile-update example: double-click submit, refresh during submission, all state transitions",
      ],
    },
    {
      label: "QA / Test Engineer — Application Positioning",
      items: [
        "Full-stack engineer with strong QA, automation & mobile testing — not manual-QA-only",
        "Web: React, Next.js, TypeScript · Mobile: Android/Kotlin/Java/Jetpack Compose, iOS/Swift",
        "Testing: E2E, API, regression, cross-browser, test cases, bug triage, release validation",
        "Automation: AI-assisted test generation & maintenance (Claude Code, Codex, Cursor, Copilot)",
        "Backend: Node.js, Python/FastAPI, PostgreSQL · Tools: Postman, Git/GitHub, Docker",
      ],
    },
    {
      label: "QA / Test Engineer — Strongest Angle",
      items: [
        "QA + mobile + full-stack engineering — builder mindset, not manual-QA-only",
        "7+ years debugging, release verification & production issue resolution",
        "Structured test cases, QA checklists & clear bug reproduction steps",
        "Embedded quality partner for dev teams — triage, verify, and ship with confidence",
      ],
    },
    {
      label: "Web & Mobile Testing",
      items: [
        "End-to-end web testing — strong web app testing & debugging",
        "Mobile testing — very strong: Android Studio, Kotlin, Java, Jetpack Compose, iOS/Xcode",
        "Android device testing — direct Android development advantage",
        "Cross-browser: Chrome, Safari, Firefox, Edge + responsive layout testing",
        "Release verification — mobile app updates, builds & release issues",
      ],
    },
    {
      label: "Android QA — Developer-Level Edge",
      items: [
        "Built with Android Studio — not just tested apps: Kotlin, Java, Jetpack Compose, WebViews, AdMob",
        "APK/AAB builds, signing, Android versions & device-specific behavior",
        "Permissions, WebView behavior, network issues, lifecycle/state & crashes",
        "Release builds vs debug builds & Play Store deployment considerations",
      ],
    },
    {
      label: "Risk-Based Testing",
      items: [
        "P0 release blockers — data exposure, auth bypass, critical workflow failure",
        "P1 high — major workflow broken, Android crash on key path, bad state saved",
        "P2 medium — non-critical malfunction with workaround",
        "P3 low — cosmetic / minor UI issues",
      ],
    },
    {
      label: "Manual QA & Release Quality",
      items: [
        "Bug triage — extensive debugging & issue reproduction",
        "Test cases, checklists & documented reproduction steps",
        "Dev, staging & production validation",
        "Release process support — especially mobile releases",
        "Continuous release — engineering & deployment experience relevant",
      ],
    },
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

