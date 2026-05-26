export const profile = {
  name: "Syed Taha Zaidi",
  shortName: "Taha Zaidi",
  handle: "@taha-zaidii",
  role: "AI Engineer",
  location: "Karachi, Pakistan",
  available: "Open to freelance & full-time roles",
  // The hero copy — written in Taha's voice, not in landing-page voice.
  intro:
    "I'm 21, from Karachi, studying CS at FAST NUCES. I co-founded Vector with one of my closest friends — a small AI studio. We build agents, RAG systems, and the MVPs around them for startups that need to move fast.",
  introExtra:
    "Outside of that, I do a lot. I freelance design and motion, I run marketing for student festivals, I argue about politics at dinner. The rest is below.",
  // "Currently" line — edit this anytime to keep it real.
  currently: [
    "Shipping Vector engagements",
    "Senior year, FAST NUCES",
    "Rereading anything I can find on the Cold War",
  ],
  philosophy: "Shipping > theorizing.",
  email: "tahazaidi2004@gmail.com",
  phone: "+92 311 1844899",
  whatsapp: "https://wa.me/923111844899",
  links: {
    github: "https://github.com/taha-zaidii",
    linkedin: "https://www.linkedin.com/in/taha-zaidii",
    instagram: "https://instagram.com/taha_zaidii",
    site: "https://tahazaidi.me",
  },
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  tags?: string[];
};

export const experiences: Experience[] = [
  {
    company: "Vector — AI Automation Studio",
    role: "Co-Founder & AI Engineer",
    location: "Remote / Karachi",
    period: "May 2026 — Present",
    bullets: [
      "Co-founded a two-person AI studio shipping full-stack MVPs and AI infrastructure for early-stage startups on <2-week fixed-scope sprints.",
      "Shipping client products: an autonomous support-triage agent, a domain-specific RAG platform, and B2B SaaS MVPs.",
      "Own the full lifecycle — discovery, scoping, delivery, and hand-off; bridge engineering with commercial GTM.",
    ],
    tags: ["LangChain", "n8n", "pgvector", "LlamaIndex", "Next.js", "Stripe"],
  },
  {
    company: "PROCOM '26 — FAST NUCES",
    role: "Director, Marketing & Brand Partnerships",
    location: "Karachi, Pakistan",
    period: "Sep 2025 — Apr 2026",
    bullets: [
      "Led a 40+ person marketing team inside a 600+ executive committee for Pakistan's largest student tech festival.",
      "Closed 50+ corporate sponsorships generating PKR 1 Cr+ (~$36K) — an all-time revenue record in PROCOM's 25-year history.",
      "Ran C-suite negotiations end-to-end and architected an integrated GTM across digital, on-ground, PR, and influencer channels.",
    ],
    tags: ["B2B Sales", "GTM", "Partnerships", "Brand"],
  },
  {
    company: "Bytes Platform",
    role: "Tech Consultant",
    location: "Hybrid / Denton, TX",
    period: "Jul 2025 — Aug 2025",
    bullets: [
      "Consulted for US-based business owners and veteran-owned businesses across CRM/ERP, AI chatbots, e-commerce, SEO, and brand revamps.",
      "Contributed to 10+ shipped client solutions — LLM chatbots, custom web apps, AI workflow automations.",
      "Translated business requirements into technical specs and coordinated cross-functional delivery.",
    ],
    tags: ["LLM Chatbots", "Shopify", "WordPress", "n8n"],
  },
  {
    company: "ACM NUCES — FAST NUCES",
    role: "Executive Head, Branding & Design",
    location: "Karachi, Pakistan",
    period: "Sep 2024 — May 2025",
    bullets: [
      "Led the full rebrand and digital strategy for Developers Day 2025 — FAST's largest annual tech event with 2,500+ attendees and 30+ companies.",
      "Directed ACM NUCES social media, content production, and engagement strategy for the 2024–25 term.",
    ],
    tags: ["Brand", "Design", "Events"],
  },
  {
    company: "Freelance — Self-Employed",
    role: "Graphic Designer & Video Editor",
    location: "Remote",
    period: "Jun 2022 — Present",
    bullets: [
      "Delivered 50+ paid projects across Pakistan, US, and Australia — shortform content, After Effects motion, logo & brand identity.",
      "Maintained consistent 5-star ratings on Upwork alongside full-time studies.",
    ],
    tags: ["After Effects", "Brand", "Motion"],
  },
];

export type Project = {
  name: string;
  blurb: string;
  description: string;
  stack: string[];
  href?: string;
  badge?: string;
};

export const projects: Project[] = [
  {
    name: "Baymax.app",
    badge: "Multi-Agent AI",
    blurb: "Hierarchical multi-agent career-coaching platform.",
    description:
      "Custom orchestrator managing 4 specialized agents — Resume Analyzer, Voice Interview Coach, Job Scout, Roadmap Planner — on LLaMA 3.3 70B via Groq, wrapped in a SafetyGuard layer for prompt-injection and PII handling. RAG pipeline (ChromaDB + HuggingFace) for resume-to-JD matching with ATS scoring, real-time voice interviews via Groq Whisper, and a CSP-based 90-day roadmap planner using AC-3 + backtracking with MRV.",
    stack: [
      "LLaMA 3.3 70B",
      "Groq",
      "LangChain",
      "CrewAI",
      "LangGraph",
      "FastAPI",
      "Next.js",
      "ChromaDB",
      "Whisper",
    ],
    href: "https://github.com/taha-zaidii/baymax.app",
  },
  {
    name: "Ustaad",
    badge: "Marketplace · AI Matching",
    blurb: "AI-powered recruitment & service marketplace for Pakistan's informal labor market.",
    description:
      "Full-stack workforce platform connecting daily-wage laborers, skilled professionals, and businesses. Hybrid AI matching (TF-IDF + cosine similarity, matrix factorization) benchmarked on Hit-Rate@5 / MRR. 11 GoF design patterns and Redis cache-aside + PostgreSQL GIN/B-tree indexes — cut p95 API latency from ~800 ms to <200 ms.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "FastAPI",
      "scikit-learn",
    ],
    href: "https://github.com/taha-zaidii/Ustaad",
  },
  {
    name: "Vyse",
    badge: "Computer Vision",
    blurb: "Real-time AI workplace-safety intelligence.",
    description:
      "Real-time safety monitoring using YOLOv8 object detection and MediaPipe facial-landmark analysis (EAR drowsiness detection) to flag PPE violations, device usage, and anomalous activity. Modular 4-agent architecture (Vision, Risk, Alert, Analytics) over an event-driven decision engine and an async video-inference pipeline.",
    stack: ["Python", "YOLOv8", "MediaPipe", "Multi-Agent", "Async Pipelines"],
    href: "https://github.com/taha-zaidii/Vyse",
  },
  {
    name: "AeroWatch",
    badge: "UAV · Telemetry",
    blurb: "UAV weather-intelligence dashboard with live telemetry.",
    description:
      "Real-time telemetry visualization and weather intelligence dashboard for UAV operations — engineered with a responsive React 18 + TypeScript front-end and live data pipelines.",
    stack: ["React 18", "TypeScript", "Telemetry"],
    href: "https://github.com/taha-zaidii/AeroWatch",
  },
  {
    name: "ShopSense",
    badge: "RecSys",
    blurb: "Neural collaborative-filtering recommender.",
    description:
      "Neural Collaborative Filtering recommender combining GMF and MLP towers, served behind a Flask API. Benchmarked against classical baselines on standard recsys metrics.",
    stack: ["TensorFlow", "Flask", "Python", "NCF"],
    href: "https://github.com/taha-zaidii/ShopSense",
  },
  {
    name: "RetroLang",
    badge: "Compilers",
    blurb: "Hand-built compiler for an arcade DSL.",
    description:
      "End-to-end compiler with all six classical phases — lexer, parser, semantic analyzer, IR generation, optimization, and code generation — for a small arcade-style domain-specific language.",
    stack: ["Python", "Compilers", "DSL"],
    href: "https://github.com/taha-zaidii/RetroLang",
  },
];

export const skills = {
  Languages: ["Python", "TypeScript", "JavaScript", "C/C++", "SQL", "Solidity", "HTML/CSS"],
  "AI / ML & GenAI": [
    "LangChain",
    "LangGraph",
    "CrewAI",
    "n8n",
    "RAG",
    "Multi-Agent Systems",
    "Prompt Engineering",
    "ChromaDB",
    "pgvector",
    "HuggingFace",
    "scikit-learn",
    "YOLOv8",
    "MediaPipe",
    "Groq",
    "OpenAI API",
    "Whisper",
    "LLaMA 3.3",
  ],
  "Web & Mobile": ["Next.js", "React", "Node.js", "FastAPI", "Tailwind", "WordPress", "Shopify"],
  "Data & Infra": [
    "PostgreSQL",
    "Redis",
    "MongoDB",
    "Vercel",
    "DigitalOcean",
    "Linux",
    "Docker",
    "CI/CD",
  ],
  "Product & Brand": [
    "Figma",
    "After Effects",
    "Photoshop",
    "Illustrator",
    "Premiere",
    "GTM",
    "B2B Sales",
  ],
};

export const honors = [
  "Gold Medal — Rector's List of Honor, FAST NUCES",
  "3× Dean's List of Honor — FAST NUCES",
  "2× Outstanding Diplomacy & Best Delegation — IBA MUNIK",
  "Director, Operations — FAST Creators Fest (Sony as title sponsor)",
  "Elected President — Nixor Student Government, 2023",
];

export const education = {
  school: "FAST National University of Computer & Emerging Sciences (NUCES)",
  degree: "B.S. Computer Science · GPA 3.45 / 4.00",
  period: "Expected Aug 2027",
  location: "Karachi, Pakistan",
};

// Off-screen — the stuff I actually do when I'm not at the laptop.
// Direct, blunt, no clever framing. Edit any of these to make them more "you".
export type Interest = {
  title: string;
  note: string;
};

export const interests: Interest[] = [
  {
    title: "Anime",
    note: "Pretty much my evening routine.",
  },
  {
    title: "Astrophysics & space",
    note: "I want to see Earth from outer space someday.",
  },
  {
    title: "Debate",
    note: "Two Outstanding Diplomacy wins at IBA MUNIK.",
  },
  {
    title: "Economics",
    note: "Studied it at A-Levels. Still read about it most days.",
  },
  {
    title: "Geopolitics & history",
    note: "Pakistan, India, the Cold War, the Ottomans — pick a topic.",
  },
];
