export const intro = {
  introduction:
    "Hi, I'm Gautam — a full-stack developer who loves building, end-to-end products for the web. I'm currently exploring RAG-based applications, and in my spare time I enjoy creating desktop utilities (like a YouTube downloader), writing technical blogs and experimenting with my newly found hobby: origami.",
};

export const projects = {
  ytcompanion: {
    title: "Youtube Companion",
    techStack: "PostgreSQL, Prisma, NextJs, NextAuth, pgvector, GeminiAI",
    points: [
      "YouTube Companion Dashboard A mini-dashboard built with the PostgreSQL, Prisma,NextJs, NextAuth, RAG pipeline (pgvector + GeminiAI) integrated with the YouTube Data API.",
      "Implemented video detail management (update title/description) and comment operations (add, reply, delete).",
      "Built a notes system with tagging & search, enabling users to organize video improvement ideas.",
      "Integrated event logging system to capture all actions (video edits, notes, comments) into PostgreSQL.",
      "Used RAG pipeline (pgvector + GeminiAI) to provide natural-language insights from logs (e.g., activity summaries).",
      "Deployed full-stack app to Vercel.",
    ],
    githubLink: "https://github.com/GautamRaj-1200/yt-companion",
    deployedLink: "deployed link here",
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
