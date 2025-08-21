export const intro = {
  introduction:
    "Hi, I'm Gautam — a full-stack developer passionate about building scalable, end-to-end products for the web.",
  learning:
    "Lately, I've been diving deep into RAG-based applications, exploring how they can shape the future of intelligent systems.",
  hobby1:
    "Outside of work, I love tinkering with different technologies like I recently built a",
  techCTA: "YouTube downloader",
  hobby2: "sharing insights through technical",
  blogCTA: "blogs",
  hobby3: "practicing my newly found hobby",
  origamiCTA: "origami",
  ytDownloader: "https://gr-youtube-downloader.vercel.app/",
  myBlog: "https://blogs.gautamraj.space/",
  origami: "/origami",
};

export const projects = {
  /*
Built a full-stack Bookmark Manager with Next.js App Router, Auth.js, Prisma, and PostgreSQL enabling users to save, tag, and filter links.
- Implemented secure Google OAuth with Auth.js Prisma Adapter; scoped all CRUD to the authenticated user.
- Designed a modern UI with Tailwind CSS (cards, tag pills, gradient shell) and server action–driven forms.
- Modeled many-to-many `Bookmark ↔ Tag` relations in Prisma with unique per-user tag constraints.
- Optimized DX and reliability with server actions, route revalidation, and typed `searchParams` in Next.js 15.
  */
  bookmarkManager: {
    title: "Bookmark Manager",
    techStack: "PostgreSQL, Prisma, NextJs, NextAuth, TailwindCSS",
    points: [
      "Built a full-stack Bookmark Manager with Next.js App Router, Auth.js, Prisma, and PostgreSQL enabling users to save, tag, and filter links.",
      "Implemented secure Google OAuth with Auth.js Prisma Adapter; scoped all CRUD to the authenticated user.",
      "Designed a modern UI with Tailwind CSS (cards, tag pills, gradient shell) and server action–driven forms.",
      "Modeled many-to-many `Bookmark ↔ Tag` relations in Prisma with unique per-user tag constraints.",
      "Optimized DX and reliability with server actions, route revalidation, and typed `searchParams` in Next.js 15.",
    ],
    githubLink: "https://github.com/GautamRaj-1200/bookmark-manager",
    deployedLink: "https://bookmark-manager-gr.vercel.app/",
  },
  legalBlogs: {
    title: "Legal Blogs",
    techStack: "MongoDB, ExpressJs, ReactJs,NodeJs, AWS S3, Redux",
    points: [
      "LEGAL BLOGS A full-stack blogging platform built with the MongoDB, ExpressJs, ReactJs,NodeJs stack.",
      "Secured platform with JWT authentication, middleware, and role-based access control (RBAC).",
      "Implemented full CRUD functionality, advanced search, and AWS S3 integration for media uploads.",
      "Designed a responsive React UI with Redux Toolkit, custom hooks, React Router, and TypeScript.",
    ],
    githubLink: "https://github.com/GautamRaj-1200/legal-blogs-latest",
    deployedLink: "https://legal-blogs-stage.vercel.app/",
  },
};

export const howIThink = {
  title: "How I Think",
  points: [
    "I care about scalability and maintainability — writing code that remains clean and understandable even as projects grow.",
    "My go-to stack is Next.js, Redux, Tailwind, and NodeJs/FastAPI because they balance developer speed with performance and scalability.",
    "I avoid over-engineering — preferring solutions that are as simple as possible, without sacrificing quality. I value clear architecture and consistent UI.",
  ],
};

export const learningLog = {
  title: "Learning Log",
  points: [
    "Now: Learning FastAPI for building machine learning based applications.",
    "Why: Python has the best libraries for machine learning and data science. FastAPI is a great choice for building efficient, high-performance APIs.",
    "Building: A HR Query Chatbot with FastAPI, SentenceTransformers, and Faiss.",
  ],
};
