import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const portfolioData = {
  personalInfo: {
    name: "Akash Kalyan",
    role: "Full-Stack Developer",
    tagline: "Building production-grade backend systems & scalable web apps.",
    bio: "Full-stack developer with a strong foundation in backend fundamentals like PostgreSQL, transactions, and API design. Hands-on experience building production-style systems, handling concurrency, data integrity, and failure scenarios using Node.js and relational databases. Comfortable working end-to-end when needed, with a clear backend-first mindset.",
    location: "Ghaziabad, Uttar Pradesh, India",
    email: "Akshaykalyan7@gmail.com",
    phone: 9711469219,
  },
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/Akashkalyan19",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/akash-kalyan-477584163/",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:Akshaykalyan7@gmail.com",
      icon: Mail,
    },
  ],
  education: [
    {
      degree: "B.Tech (Information Technology)",
      institution: "Netaji Subhash University of Technology",
      period: "2020 - 2024",
      score: "7.35",
    },
  ],
  projects: [
    {
      id: 1,
      title: "TicketBlitz",
      image: "/projects/TicketBlitz",
      description:
        "Concurrency-Safe Seat Booking Backend. Designed a transactional seat booking system enforcing a strict state machine (available -> held -> booked) under concurrent access. Prevented race conditions using PostgreSQL row-level locking and ACID transactions.",
      tags: ["Node.js", "Express", "PostgreSQL"],
      demoUrl: "https://ticket-blitz-zeta.vercel.app",
      githubUrl: "https://github.com/Akashkalyan19/TicketBlitz",
    },
    {
      id: 2,
      title: "ProdWatch",
      image: "/projects/Prodwatch.png",
      description:
        "Production Incident Management System. Built a platform with JWT auth and RBAC. Designed an immutable incident timeline with PostgreSQL trigger-based audit logging.",
      tags: [
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "JWT",
        "Tailwind CSS",
      ],
      demoUrl: "https://prod-watch.vercel.app/",
      githubUrl: "https://github.com/Akashkalyan19/ProdWatch",
    },
    {
      id: 3,
      title: "ChitChatGPT",
      image: "/projects/ChitChatGPT.png",
      description:
        "Multi User Real-Time Chat with AI. Real-time chat with multi-room messaging, persistence, and AI integration using Gemini API and Socket.io.",
      tags: ["React", "Node.js", "Socket.io", "PostgreSQL", "Gemini API"],
      demoUrl: "https://chitchatgpt-e1hz.onrender.com/",
      githubUrl: "https://github.com/Akashkalyan19/ChitChatGPT",
    },
  ],
  skills: [
    // Frontend
    { name: "HTML/CSS", level: 90, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 85, category: "frontend" },

    // Backend
    { name: "Node.js", level: 90, category: "backend" },
    { name: "Express", level: 85, category: "backend" },
    { name: "PostgreSQL", level: 85, category: "backend" },
    { name: "MongoDB", level: 80, category: "backend" },
    { name: "REST APIs", level: 90, category: "backend" },
    { name: "C/C++", level: 80, category: "backend" },
    { name: "Data Structures & Algo", level: 80, category: "backend" },

    // Tools
    { name: "Git", level: 85, category: "tools" },
  ],
};
