export const portfolioData = {
  personalInfo: {
    name: "Akash Kalyan",
    initials: "AK",
    role: "Full-Stack Software Engineer",
    availability: "Open to Full-Stack Software Engineer roles",
    email: "Akashkalyan719@gmail.com",
    phone: "+91 97114 69219",
    location: "New Delhi, IN",
    resumeUrl: "/Akash_Kalyan_Resume.pdf",
    resumeFilename: "Akash_Kalyan_Resume.pdf",
  },

  socialLinks: [
    {
      name: "GitHub",
      handle: "github.com/Akashkalyan19",
      url: "https://github.com/Akashkalyan19",
    },
    {
      name: "LinkedIn",
      handle: "linkedin.com/in/akash-kalyan-477584163",
      url: "https://linkedin.com/in/akash-kalyan-477584163",
    },
  ],

  heroSpecs: [
    { label: "CONCURRENCY", value: "20:1", note: "0 double-bookings" },
    { label: "LEETCODE", value: "1652", note: "C++ & DSA rating" },
    { label: "DEGREE", value: "NSUT '24", note: "B.Tech IT · 7.35" },
  ],

  projects: [
    {
      id: "ticketblitz",
      index: "01",
      category: "CONCURRENCY & TRANSACTIONS",
      title: "TicketBlitz",
      tagline: "Concurrency-Safe Seat Booking Engine",
      summary:
        "Prevents race conditions and double-charges during simultaneous checkout spikes via PostgreSQL row-level locks, a strict state machine (available → held → booked), and idempotent payment retries.",
      impact: "Tested 20 concurrent booking attempts against 1 seat — strictly 1 booking and 1 payment succeed.",
      tags: ["Node.js", "Express", "PostgreSQL", "Raw SQL", "ACID"],
      image: "/projects/TicketBlitz.png",
      imageAlt: "TicketBlitz event booking screen displaying available, held, and booked seat counters.",
      demoUrl: "https://ticket-blitz-zeta.vercel.app",
      repoUrl: "https://github.com/Akashkalyan19/TicketBlitz",
      demoNote: "Render free-tier backend may take ~30s to wake on first request.",
      highlights: [
        {
          label: "bookings.js",
          url: "https://github.com/Akashkalyan19/TicketBlitz/blob/main/backend/src/routes/bookings.js",
        },
        {
          label: "test-concurrent.js",
          url: "https://github.com/Akashkalyan19/TicketBlitz/blob/main/backend/test-concurrent.js",
        },
      ],
    },
    {
      id: "prodwatch",
      index: "02",
      category: "SECURITY & AUDITABILITY",
      title: "ProdWatch",
      tagline: "Production Incident Management System",
      summary:
        "Enforces role-scoped incident operations (Owner, Team Lead, Engineer) with JWT auth and guarantees immutable audit trails through PostgreSQL triggers independent of application logic.",
      impact: "Database triggers record every INSERT/UPDATE/DELETE snapshot with owner-only audit log access.",
      tags: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "JWT", "RBAC"],
      image: "/projects/Prodwatch.png",
      imageAlt: "ProdWatch sign-in interface for production incident management.",
      demoUrl: "https://prod-watch.vercel.app/",
      repoUrl: "https://github.com/Akashkalyan19/ProdWatch",
      highlights: [
        {
          label: "auth.middleware.js",
          url: "https://github.com/Akashkalyan19/ProdWatch/blob/main/backend/src/middlewares/auth.middleware.js",
        },
        {
          label: "009_audit_trigger.sql",
          url: "https://github.com/Akashkalyan19/ProdWatch/blob/main/backend/src/db/migrations/009_Create_incident_audit_trigger.sql",
        },
      ],
    },
    {
      id: "chitchatgpt",
      index: "03",
      category: "REAL-TIME & AI",
      title: "ChitChatGPT",
      tagline: "Multi-Room Real-Time Chat, WebRTC & Gemini AI",
      summary:
        "Real-time communication suite pairing Socket.IO multi-room text messaging, peer-to-peer WebRTC voice/video rooms, persistent PostgreSQL history, and Google Gemini AI chat assistance.",
      impact: "Unified WebSocket room events, peer media signaling, and REST history inside one React client.",
      tags: ["React", "Node.js", "Socket.io", "WebRTC", "PostgreSQL", "Gemini API"],
      image: "/projects/ChitChatGPT.png",
      imageAlt: "ChitChatGPT room dashboard with video chat and text chat room controls.",
      demoUrl: "https://chitchatgpt-e1hz.onrender.com/",
      repoUrl: "https://github.com/Akashkalyan19/ChitChatGPT",
      demoNote: "Hosted on Render — initial load may pause briefly for cold start.",
      highlights: [],
    },
  ],

  experience: [
    {
      period: "06/2023 – 08/2023",
      organization: "HCL Infosystems Ltd.",
      role: "Front-end Developer Intern",
      kind: "Internship",
    },
  ],

  education: {
    period: "2020 – 2024",
    institution: "Netaji Subhash University of Technology (NSUT)",
    degree: "B.Tech in Information Technology",
    grade: "7.35 CGPA",
  },

  achievements: [
    {
      index: "A1",
      title: "LeetCode — 1652 Rating",
      issuer: "Competitive Programming & DSA",
      period: "C++",
      detail: "Algorithmic problem solving across graphs, trees, dynamic programming, and greedy strategies.",
    },
    {
      index: "A2",
      title: "The Complete Web Development Bootcamp",
      issuer: "Udemy",
      period: "08/2022 – 2023",
      detail: "Full-stack JavaScript, React, Node.js, Express, REST APIs, and database persistence.",
    },
    {
      index: "A3",
      title: "Basic C++ with Data Structures & Algorithms",
      issuer: "Coding Ninjas",
      period: "02/2021 – 07/2021",
      detail: "Core C++ memory model, recursion, trees, linked lists, stacks, queues, and sorting.",
    },
  ],

  skills: [
    {
      code: "01",
      category: "Frontend",
      items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3"],
    },
    {
      code: "02",
      category: "Backend & Real-Time",
      items: ["Node.js", "Express.js", "RESTful APIs", "JWT & RBAC", "Socket.io", "WebRTC", "Gemini API"],
    },
    {
      code: "03",
      category: "Databases & Integrity",
      items: ["PostgreSQL", "MongoDB", "Raw SQL", "ACID Transactions", "Row-Level Locks", "DB Triggers"],
    },
    {
      code: "04",
      category: "Cloud, DevOps & Languages",
      items: ["AWS (EC2, S3)", "Docker", "GitHub Actions (CI/CD)", "Git & GitHub", "Postman", "C / C++"],
    },
  ],

  engineeringPrinciples: [
    {
      index: "INV-01",
      title: "Lock Rows Before State Changes",
      detail:
        "Use PostgreSQL `FOR UPDATE` row locks inside explicit `BEGIN`/`COMMIT` transactions so concurrent requests never double-book.",
      file: "bookings.js",
      project: "TicketBlitz",
      url: "https://github.com/Akashkalyan19/TicketBlitz/blob/main/backend/src/routes/bookings.js",
    },
    {
      index: "INV-02",
      title: "Idempotent Retries & Auto-Recovery",
      detail:
        "Deduplicate payment retries with `Idempotency-Key` headers and automatically release expired holds.",
      file: "test-concurrent.js",
      project: "TicketBlitz",
      url: "https://github.com/Akashkalyan19/TicketBlitz/blob/main/backend/test-concurrent.js",
    },
    {
      index: "INV-03",
      title: "Enforce Roles at Middleware Boundaries",
      detail:
        "Pair stateless JWT authentication with strict role middleware (`owner`, `team_lead`, `engineer`) on sensitive audit routes.",
      file: "audit.routes.js",
      project: "ProdWatch",
      url: "https://github.com/Akashkalyan19/ProdWatch/blob/main/backend/src/routes/audit.routes.js",
    },
    {
      index: "INV-04",
      title: "Database-Layer Audit Snapshots",
      detail:
        "Write `OLD`/`NEW` JSONB audit rows via PostgreSQL triggers so history stays intact independently of app-layer refactors.",
      file: "009_audit_trigger.sql",
      project: "ProdWatch",
      url: "https://github.com/Akashkalyan19/ProdWatch/blob/main/backend/src/db/migrations/009_Create_incident_audit_trigger.sql",
    },
  ],
};
