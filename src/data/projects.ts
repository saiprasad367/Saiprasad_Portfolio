export type ProjectTheme = {
  bg: string;
  accentColor: string;
  accentBg: string;
  borderColor: string;
  tagBg: string;
  tagText: string;
};

export type Feature = { title: string; desc: string };
export type Challenge = { title: string; desc: string };
export type StackCategory = { category: string; tech: string[] };

export type Project = {
  slug: string;
  name: string;
  tag: string;
  tagline: string;
  desc: string;
  stats: string[];
  categorizedStack: StackCategory[];
  gradientAccent: string;
  theme: ProjectTheme;
  overview: string;
  problem: string;
  solution: string;
  features: Feature[];
  architecture: string[]; 
  howItWorks: string[]; 
  metrics: string[];
  folderStructure: string;
  challenges: Challenge[];
  learnings: string[];
  future: string[];
  runInstructions: string;
  liveUrl: string;
  githubUrl: string;
  comingSoon?: boolean;
  video?: string;
  screenshots?: string[];
  stack: string[]; // Kept for hero chips backwards compatibility
};

export const projects: Project[] = [
  {
    slug: "shortify",
    name: "Shortify",
    tag: "Cloud-Native · SaaS",
    tagline: "Cloud-Native URL Shortener Platform",
    desc: "Scalable SaaS platform for generating high-performance short URLs with Redis-powered caching, real-time analytics, and enterprise-grade architecture.",
    stats: [
      "⚡ <50ms Redirect Time",
      "📊 Real-Time Analytics",
      "🚀 99%+ Cache Hit Rate",
      "🔗 56.8B URL Combinations"
    ],
    stack: ["React", "Node.js", "Redis", "PostgreSQL", "Docker", "TypeScript"],
    categorizedStack: [
      { category: "Frontend", tech: ["React", "TypeScript", "Vite", "Tailwind CSS"] },
      { category: "Backend", tech: ["Node.js", "Express.js", "Prisma ORM"] },
      { category: "Database & Infrastructure", tech: ["PostgreSQL", "Redis", "Docker"] },
      { category: "DevOps & Deployment", tech: ["Render", "Vercel", "GitHub Actions"] }
    ],
    gradientAccent: "from-sky-100 to-blue-100",
    theme: {
      bg: "#F0F9FF",
      accentColor: "#0369A1",
      accentBg: "#BAE6FD",
      borderColor: "#BAE6FD",
      tagBg: "#E0F2FE",
      tagText: "#0369A1",
    },
    overview: "Shortify is a cloud-native URL shortening platform designed for high scalability and low-latency performance.\n\nThe platform transforms long URLs into compact, shareable links while providing advanced analytics, distributed caching, rate limiting, and enterprise-level security.\n\nBuilt with a modern TypeScript-based architecture, Shortify follows scalable backend design principles using Redis caching, PostgreSQL persistence, and asynchronous analytics processing.",
    problem: "Traditional URL shorteners often struggle with scalability, analytics performance, and redirect latency under heavy traffic.\n\nMost free platforms:\n• lack detailed analytics\n• have slow redirects\n• don't support custom aliases\n• fail under high concurrent traffic\n• provide poor developer experience\n\nThe challenge was to design a production-ready URL shortening system capable of handling high request volumes while maintaining ultra-fast redirect performance.",
    solution: "To solve this, I designed a two-layer architecture using Redis as the caching layer and PostgreSQL for persistent storage.\n\nShortify uses:\n• Base62 encoding for compact URLs\n• Redis caching for sub-millisecond redirects\n• Asynchronous analytics workers\n• Rate limiting & XSS protection\n• Dockerized infrastructure\n• Scalable REST APIs\n\nThis architecture significantly reduces database load while maintaining high-speed redirections even during traffic spikes.",
    features: [
      { title: "⚡ High-Speed Redirects", desc: "Redis-powered caching enables ultra-fast redirects with minimal latency." },
      { title: "📊 Real-Time Analytics", desc: "Track clicks, referrers, locations, browsers, and devices." },
      { title: "🔒 Enterprise Security", desc: "Rate limiting, validation, sanitization, and XSS protection included." },
      { title: "🎯 Custom Aliases", desc: "Users can generate branded custom short URLs." },
      { title: "⏳ Expiry Support", desc: "Temporary URLs with configurable expiration times." },
      { title: "🐳 Dockerized Deployment", desc: "Complete containerized setup using Docker Compose." }
    ],
    architecture: [
      "Frontend (React + Vite)",
      "REST API Layer (Express.js)",
      "Redis Cache Layer",
      "PostgreSQL Database"
    ],
    howItWorks: [
      "URL Submission: User submits a long URL from the frontend dashboard.",
      "Base62 Generation: Backend converts database ID into a compact Base62 short ID.",
      "Cache Storage: URL mapping is stored inside Redis for ultra-fast retrieval.",
      "Redirection: Incoming requests first check Redis cache before hitting PostgreSQL.",
      "Analytics Processing: Click events are processed asynchronously to avoid slowing redirects."
    ],
    metrics: [
      "⚡ Redirect Latency: <50ms",
      "📈 Cache Hit Rate: 99%+",
      "🔗 URL Capacity: 56.8 Billion",
      "🚀 API Response Time: ~80ms",
      "🐳 Fully Dockerized Infrastructure"
    ],
    folderStructure: `shortify/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── config/
│   ├── prisma/
│   └── docker-compose.yml
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types/
│   └── vite.config.ts`,
    challenges: [
      { title: "Redis Cache Synchronization", desc: "Handled cache invalidation and stale data consistency." },
      { title: "Redirect Performance", desc: "Optimized lookup operations to reduce redirect latency." },
      { title: "Analytics Scaling", desc: "Implemented asynchronous processing to avoid blocking requests." },
      { title: "URL Collision Prevention", desc: "Used database-backed Base62 encoding for guaranteed uniqueness." }
    ],
    learnings: [
      "Designing scalable backend systems",
      "Redis caching strategies",
      "Docker container orchestration",
      "REST API architecture",
      "Production-grade TypeScript development",
      "Database optimization techniques"
    ],
    future: [
      "QR code generation",
      "User authentication",
      "Team collaboration features",
      "AI-powered link analytics",
      "Custom branded domains",
      "Kubernetes deployment"
    ],
    runInstructions: `# 1. Clone the repository
git clone https://github.com/saiprasad367/URL_Shortener.git
cd URL_Shortener

# 2. Start infrastructure (PostgreSQL + Redis via Docker)
cd backend
docker-compose up -d

# 3. Setup backend
npm install
cp .env.example .env        # fill DATABASE_URL + REDIS_URL
npx prisma generate
npx prisma migrate dev
npm run dev                 # → http://localhost:5000

# 4. Setup frontend (new terminal)
cd ../frontend
npm install
cp .env.example .env
npm run dev                 # → http://localhost:5173`,
    githubUrl: "https://github.com/saiprasad367/URL_Shortener",
    liveUrl: "https://url-shortener-14yj.vercel.app/",
    video: "/assets/projects/shortify/frames/Shortify.mp4",
    screenshots: [
      "/assets/projects/shortify/screenshots/1.jpg",
      "/assets/projects/shortify/screenshots/2.jpg",
      "/assets/projects/shortify/screenshots/3.jpg",
      "/assets/projects/shortify/screenshots/4.jpg",
    ],
  },
  {
    slug: "silicon-mind",
    name: "SiliconMind",
    tag: "AI · Hardware",
    tagline: "AI-Powered FPGA Intelligence Platform",
    desc: "FPGA Intelligence, decoded in seconds. AI-driven FPGA optimization platform that analyzes Vivado design reports and predicts timing failures.",
    stats: [
      "⚡ 10–100× Faster Design Analysis",
      "🧠 AI + Reinforcement Learning Engine",
      "📊 55+ FPGA Metrics Extracted",
      "🚀 Trained on 200,000 FPGA Design Snapshots",
      "🔍 Real-Time What-If Simulation"
    ],
    stack: ["Python", "FastAPI", "Scikit-learn", "FPGA", "Vivado"],
    categorizedStack: [
      { category: "Frontend", tech: ["React (Vite)", "TypeScript", "Tailwind CSS", "Recharts", "Plotly"] },
      { category: "Backend", tech: ["Python", "Flask REST API", "Gunicorn"] },
      { category: "AI / Machine Learning", tech: ["XGBoost", "Scikit-learn", "MLP Neural Networks", "Reinforcement Learning (Q-Learning)"] },
      { category: "Data & Storage", tech: ["Pandas", "NumPy", "SQLite", "CSV Training Dataset"] },
      { category: "DevOps", tech: ["GitHub", "Vercel"] }
    ],
    gradientAccent: "from-violet-100 to-purple-100",
    theme: {
      bg: "#FAF5FF",
      accentColor: "#7E22CE",
      accentBg: "#E9D5FF",
      borderColor: "#DDD6FE",
      tagBg: "#F3E8FF",
      tagText: "#7E22CE",
    },
    overview: "SiliconMind is a cloud-native AI platform built to accelerate FPGA design optimization workflows.\n\nThe platform acts as an AI Autopilot for hardware engineers by parsing Vivado reports, extracting engineering metrics, predicting timing and power failures, recommending optimal synthesis strategies using Reinforcement Learning, and generating explainable AI-based recommendations.\n\nInstead of waiting hours for FPGA re-synthesis cycles, SiliconMind delivers predictive insights in seconds using machine learning, Q-Learning optimization, and analytical simulation models.",
    problem: `Traditional FPGA verification and optimization workflows are highly manual, slow, and expert-dependent.\n\nEngineers often spend hours:\n• analyzing Vivado reports\n• debugging timing violations\n• resolving routing congestion\n• tuning synthesis strategies\n• re-running expensive synthesis cycles\n\nComplex FPGA builds may take 4–12 hours for a single re-synthesis iteration.\n\nMost workflows also lack:\n• predictive analytics\n• automated optimization\n• explainable recommendations\n• real-time design simulation\n\nSiliconMind solves this using AI-powered FPGA intelligence and autonomous optimization pipelines.`,
    solution: `SiliconMind combines Machine Learning, Reinforcement Learning, analytical simulation, and rule-based expert systems into a unified FPGA intelligence platform.\n\nThe system:\n• parses Vivado reports using regex-based extraction\n• generates 55+ engineering features\n• predicts FPGA health and timing risks\n• recommends optimal Vivado synthesis strategies\n• performs what-if simulations without re-synthesis\n• generates explainable engineering recommendations\n\nThe platform continuously improves by learning from every uploaded FPGA design.`,
    features: [
      { title: "🧠 AI Autopilot", desc: "Q-Learning based RL agent automatically selects the best Vivado synthesis strategy." },
      { title: "📊 FPGA Health Score", desc: "ML-generated health score combining timing, utilization, power, and DRC metrics." },
      { title: "⚡ Timing Intelligence", desc: "Real-time WNS, Fmax, critical path, and timing trace visualization." },
      { title: "🔥 Power Intelligence", desc: "Analyze dynamic/static power consumption and hotspot regions." },
      { title: "🎯 What-If Simulator", desc: "Simulate frequency and pipeline modifications without full FPGA re-synthesis." },
      { title: "🧩 Explainable AI Insights", desc: "Rule-based engineering recommendations with High / Medium / Low priorities." },
      { title: "📈 Continuous Learning", desc: "The platform retrains models every 50 uploads automatically." }
    ],
    architecture: [
      "React Frontend",
      "Flask REST API Gateway",
      "Parser Service",
      "ML Inference Engine",
      "RL Optimization Agent",
      "AI Insight Engine",
      "SQLite + Training Dataset"
    ],
    howItWorks: [
      "Upload: Upload FPGA Vivado Reports",
      "Extraction: Extract 55+ Engineering Features",
      "Normalization: Normalize Feature Vectors",
      "Inference: Run ML Ensemble Models & Generate Health Score",
      "Prediction: Predict Timing / Power Failures",
      "Optimization: Run RL Optimization Strategy",
      "Recommendations: Generate Explainable AI Recommendations",
      "Visualization: Render Interactive Visual Analytics"
    ],
    metrics: [
      "⚡ Faster Feedback: 10–100×",
      "🧠 AI Models: XGBoost, MLP, RL",
      "💰 Impact: Reduces compute costs",
      "☁️ Deployment: Cloud-native architecture"
    ],
    folderStructure: `SILICON_MIND/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── charts/
│   │   └── services/
│
├── backend/
│   ├── app.py
│   ├── parserservice.py
│   ├── mlservice.py
│   ├── rlservice.py
│   ├── aiengine.py
│   ├── models/
│   └── datasets/
│
├── README.md
└── README_DEPLOY.md`,
    challenges: [
      { title: "FPGA Report Parsing", desc: "Building robust regex extraction pipelines for unstructured Vivado reports." },
      { title: "RL Strategy Optimization", desc: "Designing a stable Q-Learning reward system for FPGA synthesis optimization." },
      { title: "Real-Time Simulation", desc: "Generating predictive timing and power estimates without re-synthesis." },
      { title: "Explainable AI", desc: "Ensuring all AI recommendations remain transparent and engineer-readable." },
      { title: "Continuous Learning Pipeline", desc: "Implementing background retraining without affecting frontend responsiveness." }
    ],
    learnings: [
      "XGBoost Classifier for predicting FPGA design failures.",
      "Random Forest as an ensemble voting member for classification.",
      "MLP Neural Network for generating FPGA health score regressions.",
      "Q-Learning RL Agent for selecting optimal Vivado synthesis strategies.",
      "Rule-Based Expert Engine for transforming engineering metrics."
    ],
    future: [
      "LLM-powered FPGA debugging assistant",
      "Graph Neural Networks for routing prediction",
      "Intel Quartus & Microchip Libero support",
      "Real-time Vivado TCL plugin",
      "Multi-tenant cloud deployment",
      "AI-generated XDC constraints"
    ],
    runInstructions: `# 1. Clone the repository
git clone https://github.com/saiprasad367/SILICON_MIND.git
cd SILICON_MIND

# 2. Create virtual environment
python -m venv venv
source venv/bin/activate     # Windows: venv\\Scripts\\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Run the API server
cd backend
uvicorn api.main:app --reload --port 8000`,
    githubUrl: "https://github.com/saiprasad367/SILICON_MIND",
    liveUrl: "https://silicon-mind.vercel.app",
    video: "/assets/projects/silicon-mind/frames/siliconmind.mp4",
    screenshots: [
      "/assets/projects/silicon-mind/screenshots/1.jpg",
      "/assets/projects/silicon-mind/screenshots/2.jpg",
      "/assets/projects/silicon-mind/screenshots/3.jpg",
      "/assets/projects/silicon-mind/screenshots/4.jpg",
      "/assets/projects/silicon-mind/screenshots/5.jpg",
    ],
  },
  {
    slug: "smart-bio-gpt",
    name: "SmartBioGPT",
    tag: "GenAI · BioTech",
    tagline: "AI-Powered Biomedical Research Assistant",
    desc: "Conversational AI platform for biomedical research with real-time gene analysis, protein intelligence, and interactive 3D molecular visualization.",
    stats: [
      "🧬 Biomedical AI Research Platform",
      "💬 ChatGPT-Style Scientific Assistant",
      "🔬 Real-Time Gene & Protein Search",
      "🧪 Interactive 3D Protein Visualization",
      "⚡ 10,000+ Lines of Code",
      "🌐 Integrated with Multiple Biomedical APIs"
    ],
    stack: ["Next.js", "Azure OpenAI", "PDB API", "Three.js"],
    categorizedStack: [
      { category: "Frontend", tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "React Query", "Zustand", "Axios"] },
      { category: "Visualization", tech: ["Three.js", "Mol*", "Recharts"] },
      { category: "Backend", tech: ["Node.js", "Express.js", "JWT Authentication", "Zod Validation"] },
      { category: "Database & APIs", tech: ["Supabase", "PostgreSQL", "UniProt", "DrugBank"] },
      { category: "Deployment", tech: ["Vercel", "Render", "GitHub"] }
    ],
    gradientAccent: "from-emerald-100 to-green-100",
    theme: {
      bg: "#F0FDF4",
      accentColor: "#15803D",
      accentBg: "#BBF7D0",
      borderColor: "#A7F3D0",
      tagBg: "#DCFCE7",
      tagText: "#15803D",
    },
    overview: "SmartBioGPT is an AI-powered biomedical research platform designed to simplify the way researchers interact with gene and protein data.\n\nThe platform combines conversational AI, biomedical data aggregation, secure authentication, and advanced molecular visualization into a modern full-stack application.\n\nUsing a ChatGPT-style interface, users can:\n• search genes and proteins\n• explore biological structures\n• visualize 3D proteins\n• save research history\n• generate AI-powered scientific insights\n\nThe platform integrates multiple biomedical APIs while delivering a responsive and visually immersive user experience.",
    problem: `Biomedical research platforms are often fragmented, difficult to use, and heavily dependent on manual workflows.\n\nResearchers typically need to:\n• search across multiple databases\n• manually interpret protein data\n• switch between separate visualization tools\n• manage scattered research workflows\n\nMost platforms also lack:\n• conversational AI interfaces\n• real-time molecular visualization\n• centralized biomedical insights\n• personalized research workflows\n\nSmartBioGPT solves this by combining AI-powered research assistance, biological search, and 3D protein visualization into a single intelligent platform.`,
    solution: `SmartBioGPT uses a modern full-stack architecture combining AI chat systems, biomedical APIs, authentication pipelines, and real-time visualization technologies.\n\nThe system:\n• aggregates biomedical data from multiple sources\n• provides conversational AI interactions\n• visualizes molecular structures using Three.js & Mol*\n• supports JWT-based authentication\n• stores user history and favorites\n• delivers responsive real-time scientific interfaces\n\nThe result is a powerful AI research assistant for biomedical exploration.`,
    features: [
      { title: "💬 AI Biomedical Chat", desc: "Natural language ChatGPT-style interface for biological and protein queries." },
      { title: "🔬 Gene & Protein Search", desc: "Aggregates biomedical information from multiple trusted databases." },
      { title: "🧪 3D Molecular Visualization", desc: "Interactive protein structure rendering using Three.js and Mol*." },
      { title: "🔐 Secure Authentication", desc: "JWT-based authentication with encrypted credential storage." },
      { title: "⭐ Favorites & Research History", desc: "Save, organize, and revisit important research queries." },
      { title: "📱 Fully Responsive Interface", desc: "Optimized experience across desktop, tablet, and mobile devices." },
      { title: "⚡ Real-Time Scientific Data", desc: "Dynamic biomedical search with fast API-driven responses." }
    ],
    architecture: [
      "React Frontend",
      "AI Chat Interface",
      "Express REST API",
      "Biomedical Data Services",
      "Supabase + PostgreSQL",
      "3D Visualization Engine"
    ],
    howItWorks: [
      "Query: User enters biomedical query",
      "Processing: AI engine processes scientific intent",
      "Data Fetching: Backend fetches biomedical datasets",
      "Aggregation: Gene & protein information is aggregated",
      "Visualization: 3D molecular structures are rendered",
      "Insights: AI-generated insights are displayed",
      "Storage: User can save results to favorites/history"
    ],
    metrics: [
      "🧬 Focus: Simplifies biomedical research",
      "💬 Interface: Conversational exploration",
      "🔬 Intelligence: Centralized data",
      "🧪 Tech: Immersive 3D rendering"
    ],
    folderStructure: `SmartBioGPT/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── middleware/
│   │   └── utils/
│
├── bio-insight-ai-main/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── styles/
│   │   └── assets/
│
├── README.md
└── .env.example`,
    challenges: [
      { title: "Biomedical Data Integration", desc: "Combining multiple scientific APIs into a unified response system." },
      { title: "3D Molecular Rendering", desc: "Optimizing Three.js and Mol* rendering for complex protein structures." },
      { title: "AI Chat Architecture", desc: "Designing responsive conversational scientific workflows." },
      { title: "Authentication & Security", desc: "Building secure JWT authentication with scalable backend APIs." },
      { title: "Scientific UX Design", desc: "Creating a modern and intuitive biomedical research experience." }
    ],
    learnings: [
      "Conversational Scientific Queries using natural language prompts.",
      "Biomedical Data Aggregation combining multiple biological APIs.",
      "Protein Structure Visualization via interactive Three.js rendering.",
      "Intelligent Research Workflows tracking history and favorites."
    ],
    future: [
      "AI-powered protein mutation prediction",
      "Research collaboration workspaces",
      "Mobile biomedical applications",
      "Export reports as PDF/CSV",
      "Custom ML models for protein analysis",
      "Offline scientific workspace support",
      "Advanced analytics dashboards"
    ],
    runInstructions: `# 1. Clone the repository
git clone https://github.com/saiprasad367/SmartBioGPT.git
cd SmartBioGPT

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env.local

# 4. Run development server
npm run dev`,
    githubUrl: "https://github.com/saiprasad367/SmartBioGPT",
    liveUrl: "https://smart-bio-gpt-tau.vercel.app",
    screenshots: [
      "/assets/projects/smart-bio-gpt/screenshots/1.jpg",
      "/assets/projects/smart-bio-gpt/screenshots/2.jpg",
      "/assets/projects/smart-bio-gpt/screenshots/3.jpg",
      "/assets/projects/smart-bio-gpt/screenshots/4.jpg",
      "/assets/projects/smart-bio-gpt/screenshots/5.jpg",
      "/assets/projects/smart-bio-gpt/screenshots/6.jpg",
      "/assets/projects/smart-bio-gpt/screenshots/7.jpg",
      "/assets/projects/smart-bio-gpt/screenshots/8.jpg",
    ],
  },
  {
    slug: "edu-bridge",
    name: "EduBridge AI",
    tag: "GenAI · EdTech",
    tagline: "Voice-first multilingual learning platform.",
    desc: "AI tutor that adapts explanations in 50+ languages with real-time speech, powered by Azure OpenAI and Azure Speech Services.",
    stats: ["Details coming soon"],
    stack: ["React", "Node.js", "Azure OpenAI", "Azure Speech"],
    categorizedStack: [
      { category: "Frontend", tech: ["React"] },
      { category: "AI Services", tech: ["Azure OpenAI", "Azure Speech"] },
      { category: "Database", tech: ["Cosmos DB"] }
    ],
    gradientAccent: "from-amber-100 to-orange-100",
    theme: {
      bg: "#FFFBEB",
      accentColor: "#B45309",
      accentBg: "#FDE68A",
      borderColor: "#FDE68A",
      tagBg: "#FEF3C7",
      tagText: "#B45309",
    },
    overview: "Details coming soon.",
    problem: "Traditional education platforms lack multilingual, voice-first interactivity, leaving behind students who learn best through conversational engagement in their native language.",
    solution: "EduBridge AI provides an adaptive, conversational tutor that uses real-time speech recognition and synthesis. It tailors explanations across 50+ languages, breaking down complex topics using Azure's AI stack.",
    features: [{ title: "Coming soon", desc: "Details coming soon." }],
    architecture: ["Speech-to-Text", "OpenAI Generator", "Text-to-Speech", "Client"],
    howItWorks: [
      "Input: User speaks a question in their native language.",
      "STT: Azure Speech-to-Text transcribes the audio in real time.",
      "Generation: Azure OpenAI processes the query and generates an explanation.",
      "TTS: Azure Text-to-Speech synthesizes the response back to the user.",
    ],
    metrics: ["Details coming soon"],
    folderStructure: "edu-bridge/\n├── frontend/\n└── backend/",
    challenges: [{ title: "Coming soon", desc: "Details coming soon." }],
    learnings: ["Details coming soon"],
    future: ["Details coming soon"],
    runInstructions: "",
    githubUrl: "",
    liveUrl: "",
    screenshots: [
      "/assets/projects/edu-bridge/screenshots/1.jpg",
      "/assets/projects/edu-bridge/screenshots/2.jpg",
      "/assets/projects/edu-bridge/screenshots/3.jpg",
      "/assets/projects/edu-bridge/screenshots/4.jpg",
      "/assets/projects/edu-bridge/screenshots/5.jpg",
      "/assets/projects/edu-bridge/screenshots/6.jpg",
      "/assets/projects/edu-bridge/screenshots/7.jpg",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
