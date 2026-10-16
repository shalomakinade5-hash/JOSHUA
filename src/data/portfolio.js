export const profile = {
  name: "Joshua Tobi Ajagbe",
  shortName: "Joshua Ajagbe",
  title: "Software Engineer",
  email: "joshuaajagbe96@gmail.com",
  github: "https://github.com/Joepolymath",
  linkedin: "https://ng.linkedin.com/in/joshua-ajagbe",
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Writing", href: "#writing" },
];

export const experience = [
  {
    title: "AI Engineer",
    company: "BreezeLearn",
    dates: "Apr 2026 – Present",
    type: "Full-time",
    location: "Canada",
  },
  {
    title: "Backend Engineer",
    company: "BreezeLearn",
    dates: "Nov 2025 – Mar 2026",
    type: "Full-time",
    location: "Remote",
  },
  {
    title: "Chief Technology Officer",
    company: "Awarome",
    dates: "Jan 2024 – Present",
    type: "Contract",
    location: "Abuja, Nigeria · Remote",
  },
  {
    title: "Software Engineer",
    company: "MBL Hightech",
    dates: "May 2024 – Jun 2026",
    location: "Cyprus",
    highlights: [
      "Built a high-scale backend enterprise chat application for the Cyprus and Turkish CRM market.",
      "Designed the infrastructure for the chat application and created a monorepo for its apps and packages, with usage documentation.",
    ],
  },
  {
    title: "Backend Engineering Lead",
    company: "ThriveAgric",
    dates: "May 2025 – Dec 2025",
  },
  {
    title: "Backend Software Engineer",
    company: "ThriveAgric",
    dates: "Aug 2022 – May 2025",
    location: "Nigeria · Hybrid",
    highlights: [
      "Developed backend infrastructure for an inventory management system used across agricultural warehouses in Nigeria.",
      "Developed backend infrastructure and APIs for Tradr, an agricultural marketplace.",
      "Helped build and maintain the backend for AOS, an agricultural operating system used to manage farmers across Nigeria and other African countries.",
      "Trained backend engineering interns in the Tech Accelerator Program.",
    ],
  },
  {
    title: "Backend Software Engineer",
    company: "Equally AI",
    dates: "Jul 2023 – Dec 2023",
    type: "Contract",
    location: "Tel Aviv District, Israel · Remote",
    highlights: [
      "Helped launch a no-code accessibility solution by building features and maintaining in-house microservices.",
    ],
  },
  {
    title: "Backend Software Engineer",
    company: "RapidMedicare",
    dates: "Jun 2022 – Aug 2023",
    type: "Contract",
    location: "Remote",
  },
  {
    title: "Software Engineer",
    company: "Glodaris Technologies LTD",
    dates: "Jan 2022 – Jun 2023",
    type: "Contract",
    location: "Abuja, Nigeria",
  },
  {
    title: "Full Stack Software Engineer",
    company: "Instant Deposit Ltd.",
    dates: "Dec 2021 – Jun 2022",
    type: "Full-time",
    location: "Nigeria",
  },
  {
    title: "Intern",
    company: "Plateau State ICT Development Agency",
    dates: "Oct 2021 – Feb 2022",
    type: "Internship",
    location: "Jos, Plateau State, Nigeria",
  },
  {
    title: "Full Stack Software Engineer Intern",
    company: "Instant Deposit Ltd.",
    dates: "Aug 2021 – Nov 2021",
    type: "Internship",
    location: "Jos, Plateau State, Nigeria",
  },
];

export const projects = [
  {
    number: "01",
    name: "AskHR",
    category: "AI · KNOWLEDGE SYSTEMS",
    summary:
      "An internal HR knowledge assistant that answers questions from company documents, with clickable citations and a clear hand-off when the source material has no answer.",
    detail:
      "The public README describes a document pipeline for upload, parsing, chunking and embeddings, followed by retrieval-backed chat. The demo data describes a fictional company, so this is presented as a development project—not a deployed HR product.",
    role:
      "A public repository commit is authored under Joshua’s GitHub account. The exact division of implementation work is not otherwise documented.",
    stack: ["Python", "FastAPI", "React", "PostgreSQL + pgvector", "Docker"],
    status: "Development project · fictional sample data",
    href: "https://github.com/Joepolymath/askhr",
    featured: true,
    visual: "knowledge",
  },
  {
    number: "02",
    name: "Express Code Generator",
    category: "DEVELOPER TOOLING",
    summary:
      "A small Node.js command-line tool that bootstraps an Express backend by bringing in a starter repository and setting it up as a fresh project.",
    detail:
      "The CLI uses ShellJS to clone the public baseNodeServer starter, initialize a Git repository, remove the starter remote, and install dependencies. The package manifest names Joshua as author; repository history also records work from other contributors.",
    role:
      "Named as the package author in its public npm manifest. Public history includes collaborator contributions.",
    stack: ["JavaScript", "Node.js", "Express", "ShellJS", "Git"],
    status: "Public package manifest · no adoption metrics claimed",
    href: "https://github.com/Joepolymath/express-code-gen",
    featured: false,
    visual: "scaffold",
  },
  {
    number: "03",
    name: "DSA Ninja",
    category: "TYPESCRIPT · DATA STRUCTURES",
    summary:
      "A JavaScript/TypeScript monorepo organized around small packages for algorithms and data structures, with build and test scripts.",
    detail:
      "The repository contains separate `searchy`, `sortify` and `structify` packages. Their manifests include TypeScript build scripts and Jest test commands; the `structify` package names Joshua’s GitHub account as author.",
    role:
      "Public package metadata and repository commits associate this work with Joshua’s GitHub account.",
    stack: ["TypeScript", "JavaScript", "Lerna", "Jest"],
    status: "Open-source package monorepo",
    href: "https://github.com/Joepolymath/dsa-ninja",
    featured: false,
    visual: "packages",
  },
];

export const skillGroups = [
  {
    label: "Backend & APIs",
    source: "AskHR · Express Code Generator",
    skills: ["Python", "FastAPI", "Node.js", "Express"],
  },
  {
    label: "Data & retrieval",
    source: "AskHR",
    skills: ["PostgreSQL", "pgvector", "Embeddings", "RAG"],
  },
  {
    label: "Product interface",
    source: "AskHR",
    skills: ["React", "Vite", "Tailwind CSS"],
  },
  {
    label: "Engineering practice",
    source: "AskHR · DSA Ninja",
    skills: ["Docker Compose", "Server-sent events", "Jest", "Pytest"],
  },
];

export const article = {
  title: "Choosing Between Embedded Documents and Referenced Documents in MongoDB",
  href: "https://medium.com/@joshuaajagbe96/choosing-between-embedded-documents-and-referenced-documents-in-mongodb-99bedfcdc76d",
  source: "Linked from Joshua’s public GitHub profile README",
};
