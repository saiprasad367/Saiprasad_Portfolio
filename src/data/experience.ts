export type ExperienceDetail = {
  slug: string;
  company: string;
  role: string;
  period: string;
  desc: string;
  tags: string[];
  theme: {
    bg: string;
    accentColor: string;
    accentBg: string;
    borderColor: string;
    tagBg: string;
    tagText: string;
  };
  overview: string[];
  whatIWorkedOn: string[];
  whatIDeveloped: string[];
  collaboration: string[];
  keyLearningOutcomes: string[];
  certificateDetails: string[];
  certificateImage?: string;
};

export const experiences: ExperienceDetail[] = [
  {
    slug: "microsoft-aicte",
    company: "Edunet Foundation × Microsoft × AICTE",
    role: "AI Intern",
    period: "May 2025 — Jun 2025",
    desc: "Worked as an AI Intern under the Microsoft × AICTE Virtual Internship Program implemented by Edunet Foundation, focused on building practical AI, Machine Learning, and cloud computing solutions using Microsoft Azure technologies.",
    tags: ["Microsoft Azure", "Azure AI Services", "Azure OpenAI", "Machine Learning", "Deep Learning", "Prompt Engineering", "Custom Vision", "Python", "REST APIs"],
    theme: {
      bg: "#F0F9FF",
      accentColor: "#0369A1",
      accentBg: "#BAE6FD",
      borderColor: "#BAE6FD",
      tagBg: "#E0F2FE",
      tagText: "#0369A1",
    },
    overview: [
      "Participated in a structured 4-week industry internship program designed to provide hands-on exposure to Artificial Intelligence, Machine Learning, Deep Learning, and Generative AI technologies using Microsoft's enterprise cloud ecosystem.",
      "The internship covered both theoretical foundations and practical implementation workflows, including supervised learning, unsupervised learning, neural networks, prompt engineering, Azure AI services, and Custom Vision model development.",
      "Worked extensively with Microsoft Learn modules, AI toolchains, and real-world AI deployment concepts while building project demonstrations and completing guided technical assignments."
    ],
    whatIWorkedOn: [
      "Explored Azure AI and Azure Cognitive Services for intelligent application development",
      "Learned ML and Deep Learning fundamentals including model training and evaluation",
      "Worked with Generative AI concepts and prompt engineering workflows",
      "Built computer vision pipelines using Azure Custom Vision services",
      "Developed lightweight AI-powered demo applications integrating cloud APIs",
      "Explored REST API integrations for AI model interaction and deployment",
      "Participated in mentor-led technical workshops and collaborative implementation sessions"
    ],
    whatIDeveloped: [
      "Developed AI-powered image classification workflows using Azure Custom Vision",
      "Built prompt-based AI interaction systems using Azure OpenAI services",
      "Created cloud-based AI prototypes demonstrating real-world AI use cases",
      "Implemented AI inference workflows integrated with frontend interfaces",
      "Improved understanding of scalable AI deployment pipelines and enterprise AI ecosystems"
    ],
    collaboration: [
      "Worked in a collaborative virtual internship environment alongside fellow interns, mentors, and industry professionals from Edunet Foundation and Microsoft.",
      "Participated in weekly mentor sessions, technical review discussions, and peer learning activities.",
      "Collaborated on brainstorming scalable AI system ideas and improving practical deployment workflows."
    ],
    keyLearningOutcomes: [
      "Understanding of enterprise AI architecture and deployment concepts",
      "Practical experience with Microsoft Azure AI ecosystem",
      "Exposure to Generative AI and prompt engineering methodologies",
      "Experience building AI-enabled cloud applications",
      "Stronger understanding of ML, DL, and computer vision fundamentals",
      "Improved SDLC and Agile collaboration exposure through project-based learning"
    ],
    certificateDetails: [
      "Successfully completed the Microsoft × AICTE AI Azure Internship Program implemented by Edunet Foundation from 13 May 2025 to 13 June 2025.",
      "Earned official internship completion certification validating hands-on implementation skills in: Azure AI, Machine Learning, Deep Learning, Custom Vision, Generative AI."
    ],
    certificateImage: "/assets/internships/edunet/certificate.jpg"
  },
  {
    slug: "codtech-it",
    company: "CodTech IT Solutions",
    role: "Full Stack Web Development Intern",
    period: "Sep 2024 — Nov 2024",
    desc: "Completed a Full Stack Web Development Internship focused on modern frontend and backend application development using JavaScript-based technologies and real-world web engineering practices.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST APIs", "HTML5", "CSS3"],
    theme: {
      bg: "#FAF5FF",
      accentColor: "#7E22CE",
      accentBg: "#E9D5FF",
      borderColor: "#DDD6FE",
      tagBg: "#F3E8FF",
      tagText: "#7E22CE",
    },
    overview: [
      "Worked on end-to-end web development projects covering frontend interfaces, backend API systems, database integration, and responsive application architecture.",
      "The internship emphasized independent project development, modern web engineering workflows, scalable API communication, and real-world development practices using the MERN stack ecosystem.",
      "Focused on practical implementation and production-style development methodologies while improving both frontend and backend engineering capabilities."
    ],
    whatIWorkedOn: [
      "Developed responsive frontend interfaces using React.js and modern JavaScript",
      "Built backend APIs with Node.js and Express.js",
      "Integrated MongoDB for dynamic data storage and retrieval",
      "Worked on RESTful API architecture and request handling",
      "Implemented interactive UI components and reusable frontend modules",
      "Improved application responsiveness and cross-device compatibility",
      "Worked on debugging, optimization, and feature enhancement workflows"
    ],
    whatIDeveloped: [
      "Built full-stack web modules integrating frontend, backend, and database layers",
      "Developed scalable REST API endpoints for web applications",
      "Designed responsive user interfaces optimized for usability and performance",
      "Improved frontend interaction and backend communication efficiency",
      "Strengthened understanding of application architecture and deployment workflows"
    ],
    collaboration: [
      "Worked independently on assigned project modules while also participating in collaborative review and mentorship sessions.",
      "Engaged in feature implementation cycles, technical discussions, and iterative debugging sessions.",
      "Participated in code improvement workflows and practical web development tasks simulating industry workflows."
    ],
    keyLearningOutcomes: [
      "Stronger understanding of full-stack application architecture",
      "Hands-on exposure to MERN stack development",
      "Improved API design and backend logic implementation skills",
      "Better understanding of responsive UI/UX development principles",
      "Experience with real-world development workflows and project delivery cycles"
    ],
    certificateDetails: [
      "Successfully completed the Full Stack Web Development Internship Program at CodTech IT Solutions from 15 September 2024 to 30 October 2024.",
      "Received official internship certification recognizing: Full-stack web development implementation, Frontend and backend engineering skills, REST API development, Modern web application architecture practices."
    ],
    certificateImage: "/assets/internships/codtech/certificate.jpg"
  }
];

export function getExperienceBySlug(slug: string): ExperienceDetail | undefined {
  return experiences.find((e) => e.slug === slug);
}
