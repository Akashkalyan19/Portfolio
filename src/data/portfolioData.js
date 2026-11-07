export const portfolioData = {
  personalInfo: {
    name: "Akash Kalyan",
    role: "Backend-focused software engineer",
    headline: "Building systems that hold up under pressure.",
    intro:
      "Backend-focused software engineer building reliable APIs, data-driven applications, and concurrency-aware systems with Node.js and PostgreSQL.",
    email: "Akshaykalyan7@gmail.com",
    degree: "B.Tech in Information Technology",
    institution: "Netaji Subhash University of Technology",
    graduation: "2024",
  },
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/Akashkalyan19",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/akash-kalyan-477584163",
    },
  ],
  projects: [
    {
      id: "ticketblitz",
      number: "01",
      title: "TicketBlitz",
      subtitle: "Concurrency-safe seat booking",
      challenge:
        "Overlapping requests must never book the same seat twice.",
      approach:
        "A transaction locks the active hold and seat row before changing state. Payment retries reuse an idempotency key.",
      outcome:
        "A repository test makes 20 concurrent attempts against one seat and asserts a single booking and payment.",
      image: "/projects/TicketBlitz.png",
      imageAlt: "TicketBlitz event page showing available, held, and booked seat counts.",
      tags: ["Node.js", "Express", "PostgreSQL", "Raw SQL"],
      repoUrl: "https://github.com/Akashkalyan19/TicketBlitz",
      demoUrl: "https://ticket-blitz-zeta.vercel.app",
      demoNote: "The demo’s Render backend may need a moment to wake up.",
      sourceLinks: [
        {
          label: "Booking transaction",
          url: "https://github.com/Akashkalyan19/TicketBlitz/blob/main/backend/src/routes/bookings.js",
        },
        {
          label: "Concurrency test",
          url: "https://github.com/Akashkalyan19/TicketBlitz/blob/main/backend/test-concurrent.js",
        },
      ],
    },
    {
      id: "prodwatch",
      number: "02",
      title: "ProdWatch",
      subtitle: "Incident management with an audit trail",
      challenge:
        "Incident updates need clear ownership, a traceable history, and role-restricted access.",
      approach:
        "JWT authentication and role middleware protect API routes. PostgreSQL triggers record incident changes; the audit endpoint is owner-only.",
      outcome:
        "Incident lifecycle changes are stored alongside user-attributed events, with audit snapshots generated at the database layer.",
      image: "/projects/Prodwatch.png",
      imageAlt: "ProdWatch sign-in screen with email and password fields.",
      tags: ["Node.js", "Express", "PostgreSQL", "React", "JWT", "RBAC"],
      repoUrl: "https://github.com/Akashkalyan19/ProdWatch",
      demoUrl: "https://prod-watch.vercel.app/",
      sourceLinks: [
        {
          label: "Authentication middleware",
          url: "https://github.com/Akashkalyan19/ProdWatch/blob/main/backend/src/middlewares/auth.middleware.js",
        },
        {
          label: "Owner-only audit route",
          url: "https://github.com/Akashkalyan19/ProdWatch/blob/main/backend/src/routes/audit.routes.js",
        },
        {
          label: "Incident audit trigger",
          url: "https://github.com/Akashkalyan19/ProdWatch/blob/main/backend/src/db/migrations/009_Create_incident_audit_trigger.sql",
        },
      ],
    },
    {
      id: "chitchatgpt",
      number: "03",
      title: "ChitChatGPT",
      subtitle: "Real-time chat and call rooms",
      description:
        "A supporting full-stack project with chat and video rooms, Socket.IO room events, WebRTC calls, and a Gemini-backed assistant.",
      tags: ["React", "Node.js", "PostgreSQL", "Socket.io", "WebRTC", "Gemini API"],
      image: "/projects/ChitChatGPT.png",
      imageAlt: "ChitChatGPT home screen with chat and video room entry points",
      repoUrl: "https://github.com/Akashkalyan19/ChitChatGPT",
      demoUrl: "https://chitchatgpt-e1hz.onrender.com/",
    },
  ],
  engineering: [
    {
      label: "Correctness",
      text: "Use transactions and row-level locks to protect the seat booking invariant.",
      project: "TicketBlitz",
      url: "https://github.com/Akashkalyan19/TicketBlitz/blob/main/backend/src/routes/bookings.js",
    },
    {
      label: "Safe retries",
      text: "Reuse an idempotency key so repeating a payment request does not create another payment.",
      project: "TicketBlitz",
      url: "https://github.com/Akashkalyan19/TicketBlitz/blob/main/backend/test-concurrent.js",
    },
    {
      label: "Authorization",
      text: "Verify identity and roles in API middleware; the audit endpoint requires the owner role.",
      project: "ProdWatch",
      url: "https://github.com/Akashkalyan19/ProdWatch/blob/main/backend/src/routes/audit.routes.js",
    },
    {
      label: "Auditability",
      text: "Write incident change records from a PostgreSQL trigger, alongside application-level events.",
      project: "ProdWatch",
      url: "https://github.com/Akashkalyan19/ProdWatch/blob/main/backend/src/db/migrations/009_Create_incident_audit_trigger.sql",
    },
  ],
  stack: [
    { category: "Backend", items: ["Node.js", "Express", "REST APIs"] },
    { category: "Data", items: ["PostgreSQL", "SQL", "Transactions"] },
    { category: "Product", items: ["React", "Vite", "Tailwind CSS"] },
    { category: "Engineering", items: ["JWT", "RBAC", "Concurrency", "Git"] },
  ],
};
