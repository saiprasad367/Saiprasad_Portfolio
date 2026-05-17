export type TeamMember = {
  name: string;
  role: string;
  contributions: string[];
};

export type Feature = {
  title: string;
  desc: string;
};

export type TimelineEvent = {
  time: string;
  desc: string;
};

export type AchievementTheme = {
  bg: string;
  accentColor: string;
  accentBg: string;
  borderColor: string;
  tagBg: string;
  tagText: string;
};

export type Achievement = {
  slug: string;
  place: string;
  event: string;
  host: string;
  date: string;
  teamSize: number;
  prize: string;
  gradientAccent: string;
  theme: AchievementTheme;
  about: string;
  problem: string;
  solution: string; 
  teamStory: string; // The struggle and collaboration story
  teamContributions: TeamMember[];
  myContribution: string; 
  architecture: string[];
  features: Feature[];
  timeline: TimelineEvent[];
  leadership: string;
  outcome: string;
  soloPrizeCaption?: string;
  certificateCaption?: string;
  videoFilename?: string;
  videoCaption?: string;
  mainImageName?: string;
  mainImageTitle?: string;
  mainImageSubtitle?: string;
  contributionImageName?: string;
  emotionalClosing: string;
  imageFolder: string;
};

export const achievements: Achievement[] = [
  {
    slug: "charge-2026",
    place: "1st Place Winner",
    event: "CHARGE 2026 — 24h Hackathon",
    host: "Sreenidhi Institute of Science & Technology",
    date: "March 11–12, 2026",
    teamSize: 4,
    prize: "🏆 1st Place — ₹15,000",
    gradientAccent: "from-amber-200 to-orange-100",
    theme: {
      bg: "#FFFBEB", 
      accentColor: "#D97706", 
      accentBg: "#FDE68A", 
      borderColor: "#FDE68A", 
      tagBg: "#FEF3C7", 
      tagText: "#B45309", 
    },
    about: "CHARGE 2026 was a 24-hour national-level hackathon hosted by the Electronix Club and Department of ECE at Sreenidhi Institute of Science & Technology.\n\nThe competition brought together engineering teams from across multiple domains including AI, embedded systems, cloud computing, and VLSI design.\n\nTeams were required to design, build, and present a fully functional technical solution within 24 hours while being evaluated on innovation, technical complexity, practical impact, teamwork, and presentation quality.",
    problem: "Modern pipelined processors rely heavily on static hazard detection mechanisms that lack predictive intelligence.\n\nThese systems often:\n• detect issues too late\n• struggle with dynamic execution patterns\n• cannot learn from previous pipeline behavior\n• depend on fixed forwarding logic\n\nWe wanted to explore whether AI could assist processor systems by predicting hazards before execution conflicts occurred.",
    solution: "Our project combined FPGA hardware engineering with Machine Learning-driven predictive systems.\n\nThe hardware layer involved designing and simulating a 5-stage pipelined RISC processor architecture inside Xilinx Vivado.\n\nOn top of that architecture, we built an AI-powered hazard prediction platform capable of:\n• analyzing pipeline windows\n• predicting hazards\n• classifying execution conflicts\n• visualizing pipeline activity\n• improving execution awareness\n\nThe final system worked as an intelligent processor monitoring and hazard prediction platform.",
    teamStory: "The hackathon started with nothing more than an idea and 24 hours on the clock.\n\nWithin the first few hours, we split responsibilities based on our strengths: hardware architecture, FPGA pipeline development, AI prediction systems, frontend visualization, and testing.\n\nAs the night progressed, the pressure increased: bugs appeared, integrations failed, deployments broke, and timelines became tighter.\n\nBut the team kept pushing forward continuously — debugging, redesigning workflows, optimizing the AI system, and connecting the hardware and software layers together.\n\nDespite the exhaustion and time pressure, everyone stayed focused and collaborative throughout the event. That teamwork became one of the biggest reasons behind our final success.",
    teamContributions: [
      {
        name: "Ch. Sai Prasad",
        role: "Team Lead • AI System Developer",
        contributions: [
          "Developed the AI hazard prediction platform",
          "Coordinated integration between hardware and software systems",
          "Led overall project execution"
        ]
      },
      {
        name: "M. Anilkumar",
        role: "Hardware Architecture Engineer",
        contributions: [
          "Designed the pipelined RISC processor architecture in Vivado",
          "Worked on instruction flow validation"
        ]
      },
      {
        name: "V. Dinesh",
        role: "FPGA & Pipeline Logic Engineer",
        contributions: [
          "Contributed to FPGA logic implementation",
          "Handled hazard simulation",
          "Worked on hardware debugging workflows"
        ]
      },
      {
        name: "G. Sai Suhas",
        role: "Testing & Integration Engineer",
        contributions: [
          "Handled testing and validation",
          "Provided integration support",
          "Managed execution verification during the final development phase"
        ]
      }
    ],
    myContribution: "As the Team Leader, I handled:\n• overall project coordination\n• architecture planning\n• AI system development\n• frontend dashboard creation\n• backend integration\n• deployment workflows\n• final presentation and demo\n\nI specifically developed the Machine Learning-based hazard prediction platform that analyzed instruction windows and predicted:\n• RAW hazards\n• Load-use hazards\n• Structural hazards\n• Control hazards\n\nThe system achieved high prediction accuracy using Gradient Boosting-based ML models.",
    architecture: [
      "Vivado RISC Processor",
      "Pipeline Instruction Data",
      "Feature Extraction",
      "Machine Learning Model",
      "Hazard Prediction Engine",
      "Interactive Dashboard",
      "Real-Time Visualization"
    ],
    features: [
      { title: "🧠 AI-Based Hazard Prediction", desc: "Gradient boosting classification of pipeline instruction windows." },
      { title: "⚡ Real-Time Pipeline Analysis", desc: "Instant detection of data and control hazards before execution." },
      { title: "📊 Interactive Visualization", desc: "A sleek frontend dashboard to visualize the processor states." },
      { title: "🔍 Multi-Hazard Classification", desc: "Identifies RAW, Structural, Control, and Memory conflicts." },
      { title: "🚀 99.75% Prediction Accuracy", desc: "Highly accurate ML model trained on synthetic datasets." },
      { title: "⚙️ Vivado Integration", desc: "Seamless workflow bridging hardware simulation with software AI." }
    ],
    timeline: [
      { time: "Hour 1–2", desc: "Brainstorming & idea validation" },
      { time: "Hour 3–5", desc: "Hardware architecture planning" },
      { time: "Hour 6–10", desc: "RISC processor development in Vivado" },
      { time: "Hour 11–15", desc: "AI model training & backend integration" },
      { time: "Hour 16–20", desc: "Dashboard & visualization system" },
      { time: "Hour 21–23", desc: "Testing, optimization, deployment" },
      { time: "Final Hour", desc: "Final presentation and judging" }
    ],
    leadership: "As the Team Leader, I managed both the technical execution and team coordination throughout the hackathon.\n\nMy responsibilities included defining project direction, dividing workstreams, ensuring synchronization between hardware and software teams, solving integration challenges, managing deployment under time pressure, and leading the final product presentation.\n\nOne of the biggest challenges was ensuring smooth communication between the FPGA architecture side and the AI software system within an extremely limited 24-hour window.",
    outcome: "After an intense 24-hour build session, our project stood out because of its unique combination of:\n\n• FPGA engineering\n• processor architecture\n• machine learning\n• predictive analytics\n• real-time visualization\n\nThe judges appreciated both the technical depth and the practical engineering relevance of our solution.\n\nOur team was awarded:\n🏆 1st Place — CHARGE 2026\n💰 ₹15,000 Prize Money",
    certificateCaption: "Official Certificate awarded for securing 1st Prize in the 24-Hour National Level Hackathon conducted during CHARGE 2026 at Sreenidhi Institute of Science & Technology.",
    contributionImageName: "dashboard.jpg",
    emotionalClosing: "More than a hackathon — this was a 24-hour experience of leadership, collaboration, innovation, and relentless problem-solving.\n\nA night filled with ideas, debugging sessions, teamwork, pressure, excitement, and finally… victory.",
    imageFolder: "/assets/achievements/charge-2026",
  },
  {
    slug: "hackspirex",
    place: "2nd Place Winner",
    event: "HackspireX 2025 — 24-Hour National Level Innovation Hackathon",
    host: "GITAM University",
    date: "2025",
    teamSize: 4,
    prize: "🥈 2nd Place — ₹5,000",
    gradientAccent: "from-blue-200 to-indigo-100",
    theme: {
      bg: "#EFF6FF",
      accentColor: "#2563EB",
      accentBg: "#BFDBFE",
      borderColor: "#BFDBFE",
      tagBg: "#DBEAFE",
      tagText: "#1D4ED8",
    },
    about: "HackspireX is GITAM University's flagship innovation hackathon focused on solving real-world engineering challenges using emerging technologies.\n\nThe event brought together student innovators from multiple engineering domains including:\n• AI\n• embedded systems\n• FPGA design\n• cloud computing\n• automation systems\n\nTeams were required to design, develop, and present a fully working prototype within 24 hours under intense technical evaluation rounds.",
    problem: "Modern processors require high-speed execution, but debugging pipelined architectures remains highly manual and repetitive.\n\nAs processor designs become more complex, engineers spend large amounts of time:\n• checking simulation logs\n• identifying hazards\n• fixing Verilog code\n• rerunning simulations repeatedly\n\nEven small pipeline issues can break the complete processor execution flow.\n\nThere is no intelligent automated system capable of understanding simulation errors and fixing them dynamically.",
    solution: "Our project combined two engineering layers:\n\n1. 32-bit 7-Stage Pipelined RISC-V Processor\n2. AI-Powered Automation & Debugging Platform\n\nThe hardware team developed the processor architecture and pipeline execution system inside Vivado.\n\nOn top of that architecture, I developed an intelligent AI automation platform capable of:\n• analyzing simulation logs\n• detecting processor hazards\n• understanding errors\n• generating Verilog fixes\n• rerunning simulations automatically\n• monitoring execution through a web dashboard\n\nThe final platform acted like an autonomous AI-powered debugging system for processor architectures.",
    teamStory: "HackspireX was one of the most intense and technically challenging hackathons we participated in.\n\nFrom the beginning, our goal was to build something beyond a normal software project.\n\nWe wanted to combine:\n• processor architecture\n• FPGA systems\n• AI automation\n• intelligent debugging\n\ninto one integrated platform.\n\nThe biggest challenge was building both the hardware and AI layers within just 24 hours.\n\nThroughout the hackathon:\n• simulations failed\n• hazards appeared\n• integrations broke\n• debugging became continuous\n\nBut the team kept pushing through the pressure — solving problems together, rebuilding workflows, optimizing integrations, and continuously improving the system until everything finally worked.\n\nThat teamwork became one of the biggest reasons behind our success.",
    teamContributions: [
      {
        name: "Ch. Sai Prasad",
        role: "Team Lead • AI Automation Platform Developer",
        contributions: [
          "Developed the AI-powered automation platform and intelligent debugging workflows",
          "Built the dashboard system",
          "Coordinated complete integration between hardware and AI layers"
        ]
      },
      {
        name: "M. Anilkumar",
        role: "32-bit 7-Stage RISC-V Processor Engineer",
        contributions: [
          "Developed the 32-bit 7-stage pipelined RISC-V processor architecture",
          "Worked on instruction execution logic inside Vivado"
        ]
      },
      {
        name: "V. Dinesh",
        role: "Pipeline Architecture & FPGA Logic Engineer",
        contributions: [
          "Worked on FPGA implementation",
          "Handled pipeline integration and simulation workflows",
          "Provided hardware debugging"
        ]
      },
      {
        name: "Md Shazhaman",
        role: "Testing, Validation & Integration Support",
        contributions: [
          "Handled testing and validation",
          "Verified integration and provided debugging support"
        ]
      }
    ],
    myContribution: "I specifically developed:\n• the intelligent automation engine\n• AI log analysis workflows\n• automated debugging pipeline\n• real-time monitoring dashboard\n• simulation rerun workflows\n\nThe platform behaved like a multi-agent AI system capable of:\n• monitoring processor behavior\n• understanding failures\n• fixing issues automatically\n• continuously improving simulation execution",
    architecture: [
      "Verilog",
      "SystemVerilog",
      "Vivado Simulator",
      "RTL Design",
      "RISC-V Architecture",
      "Python",
      "OpenRouter API",
      "Python AI Agents",
      "Flask",
      "HTML/CSS/JS",
      "JSON Logs"
    ],
    features: [
      { title: "🧠 AI-Based Verilog Debugging", desc: "Autonomous generation of fixes for faulty modules." },
      { title: "⚡ Self-Healing Simulation", desc: "Automated error detection and continuous simulation runs." },
      { title: "🔍 Intelligent Hazard Detection", desc: "Automatic analysis of Vivado simulation logs for pipeline hazards." },
      { title: "🔄 Automated Simulation Reruns", desc: "Closed-loop system that retries until successful execution." },
      { title: "🌐 Real-Time Web Dashboard", desc: "Live visualization of execution status and applied fixes." },
      { title: "⚙️ FPGA + AI Hybrid Architecture", desc: "Integration of 32-bit RISC-V hardware with AI software." }
    ],
    timeline: [
      { time: "Hour 1–3", desc: "Problem selection & architecture planning" },
      { time: "Hour 4–8", desc: "32-bit RISC-V processor development" },
      { time: "Hour 9–14", desc: "AI automation platform development" },
      { time: "Hour 15–18", desc: "Log analysis & debugging workflows" },
      { time: "Hour 19–21", desc: "Dashboard & integration" },
      { time: "Hour 22–23", desc: "Testing & optimization" },
      { time: "Final Hour", desc: "Demo presentation & judging" }
    ],
    leadership: "As the Team Leader, I managed:\n• project coordination\n• architecture planning\n• AI automation workflows\n• frontend dashboard development\n• backend integration\n• deployment workflows\n• final presentation",
    outcome: "Our project stood out because it combined:\n\n• FPGA processor engineering\n• AI automation\n• intelligent debugging\n• autonomous workflows\n• real-time monitoring\n\ninto one integrated platform.\n\nThe judges appreciated the technical depth, innovation, and practical engineering impact of the system.\n\n🥈 2nd Place — HackspireX 2025\n💰 ₹5,000 Prize Money",
    soloPrizeCaption: "Receiving the HackspireX 2025 2nd Prize award after 24 hours of continuous building, debugging, testing, and presentation.",
    certificateCaption: "Official certificate awarded for securing 2nd Place at HackspireX 2025 hosted by GITAM University.",
    contributionImageName: "dashboard.jpg",
    emotionalClosing: "HackspireX was more than a competition.\n\nIt was a 24-hour journey of:\n• engineering\n• innovation\n• teamwork\n• AI automation\n• FPGA systems\n• leadership under pressure\n\nA project built through sleepless hours, constant debugging, and relentless collaboration.",
    imageFolder: "/assets/achievements/hackspirex",
  },
  {
    slug: "ingenium-nit-trichy",
    place: "Final Round Qualifier",
    event: "Ingenium 2026 — National Level Technical Innovation Competition",
    host: "NIT Tiruchirappalli (NIT Trichy)",
    date: "February 2026",
    teamSize: 3,
    prize: "🏁 Final Round Qualifier",
    gradientAccent: "from-emerald-200 to-teal-100",
    theme: {
      bg: "#ECFDF5",
      accentColor: "#059669",
      accentBg: "#A7F3D0",
      borderColor: "#A7F3D0",
      tagBg: "#D1FAE5",
      tagText: "#047857",
    },
    about: "Ingenium was one of the flagship national-level innovation competitions conducted during Pragyan 2026 at the National Institute of Technology Tiruchirappalli (NIT Trichy).\n\nThe competition focused on solving real-world engineering problems through innovation, robotics, autonomous systems, and industrial automation.\n\nThe event had multiple elimination rounds:\n\n• Round 1 — Technical PPT Submission\n• Round 2 — Prototype Development + Presentation\n• Final Round — Offline Evaluation at NIT Trichy\n\nOur team successfully qualified through all selection rounds and reached the final round among the top shortlisted teams across India.",
    problem: "In small factories, workers manually carry heavy materials through narrow spaces every day.\n\nThis causes:\n• physical stress\n• worker fatigue\n• delays in operations\n• safety risks\n• reduced efficiency\n\nMost existing automation systems are:\n• costly\n• fixed to specific layouts\n• difficult to implement for small industries\n\nThere was a clear need for a low-cost autonomous solution capable of automating material movement without changing existing factory infrastructure.",
    solution: "We designed a compact autonomous robot capable of safely transporting materials between workstations inside small factories.\n\nThe robot used:\n• ROS2 navigation\n• LiDAR-based mapping\n• autonomous localization\n• obstacle avoidance\n• intelligent station routing\n\nThe system could:\n• navigate narrow indoor factory spaces\n• avoid obstacles dynamically\n• operate without GPS\n• reroute automatically\n• adapt to changing station layouts\n\nThe complete solution focused on making industrial automation affordable and practical for small industries.",
    teamStory: "The idea for this project came after observing how workers in small factories manually move heavy materials between workstations every day.\n\nMost industrial automation systems available today are:\n• expensive\n• fixed to one factory layout\n• difficult for small industries to adopt\n\nWe wanted to create a solution that was:\n• affordable\n• autonomous\n• compact\n• safe around workers\n• adaptable to changing factory environments\n\nInstead of building a large industrial robot, we focused on creating a practical autonomous mobile robot capable of navigating narrow factory spaces without requiring GPS, cameras, or floor markers.\n\nAs the project evolved, we combined:\n• ROS2 autonomous navigation\n• LiDAR mapping\n• obstacle avoidance\n• intelligent station routing\n• autonomous movement workflows\n\ninto a complete industrial automation prototype.",
    teamContributions: [
      {
        name: "Ch. Sai Prasad",
        role: "Team Lead • ROS2 Simulation & Autonomous Software Developer",
        contributions: [
          "Developed the ROS2 autonomous simulation system",
          "Built navigation workflows and obstacle avoidance logic",
          "Coordinated complete software integration as Team Lead"
        ]
      },
      {
        name: "M. Anil Kumar",
        role: "Hardware Architecture & Robot Integration Engineer",
        contributions: [
          "Worked on robot hardware architecture",
          "Handled electronics integration",
          "Contributed to autonomous platform development"
        ]
      },
      {
        name: "B. Chandu",
        role: "Mechanical Design, Prototype Assembly & Testing",
        contributions: [
          "Handled mechanical assembly and chassis integration",
          "Worked on prototype fabrication",
          "Managed testing workflows"
        ]
      }
    ],
    myContribution: "I specifically developed:\n• the ROS2 autonomous robot simulation\n• station navigation workflows\n• autonomous movement logic\n• localization workflows\n• software-side robot behavior\n\nThe system demonstrated how the robot could autonomously:\n• move between stations\n• avoid obstacles dynamically\n• reroute intelligently\n• operate safely around workers",
    architecture: [
      "ROS2",
      "SLAM & AMCL Localization",
      "A* Path Planning",
      "LiDAR Navigation",
      "ESP32 & Raspberry Pi",
      "Python/C++",
      "micro-ROS"
    ],
    features: [
      { title: "🤖 GPS-Free Autonomous Navigation", desc: "Indoor navigation using LiDAR mapping without external markers." },
      { title: "🧭 Dynamic Station-to-Station Routing", desc: "Intelligent path planning for material transport." },
      { title: "🚧 Real-Time Obstacle Avoidance", desc: "Dynamic rerouting when obstacles block the path." },
      { title: "🏭 Industrial Material Automation", desc: "Automated workflow for factory environments." },
      { title: "⚡ Low-Cost Factory Automation", desc: "Affordable alternative to expensive industrial robots." },
      { title: "🔄 Reconfigurable Factory Mapping", desc: "Easy to update station layouts via SLAM mapping." }
    ],
    timeline: [
      { time: "Round 1", desc: "Technical PPT submission" },
      { time: "Round 2", desc: "Prototype development & project presentation" },
      { time: "Final Round", desc: "Offline evaluation at NIT Trichy" }
    ],
    leadership: "As the Team Leader, I handled:\n• project coordination\n• ROS2 simulation workflows\n• autonomous navigation software\n• robot routing logic\n• obstacle avoidance simulation\n• software architecture\n• presentation and final prototype explanation",
    outcome: "Our project successfully qualified through multiple elimination rounds and reached the final round of Ingenium 2026 at NIT Trichy.\n\nThe judges appreciated:\n• practical industrial impact\n• autonomous navigation workflows\n• low-cost automation vision\n• ROS2 integration\n• scalable factory automation approach\n\n🎯 Final Round Qualifier — Ingenium 2026\n📍 NIT Tiruchirappalli",
    mainImageName: "prototype.jpg",
    mainImageTitle: "Prototype Development",
    mainImageSubtitle: "Prototype design for the Autonomous Material Handling Robot developed during Ingenium 2026 at NIT Trichy.",
    videoFilename: "demo.mp4",
    videoCaption: "ROS2 autonomous robot simulation demonstrating intelligent navigation, station routing, and obstacle avoidance workflows.",
    certificateCaption: "Official participation certificate awarded for qualifying and participating in Ingenium — National Level Technical Innovation Competition during Pragyan 2026 at NIT Trichy.",
    emotionalClosing: "Ingenium 2026 was a journey of robotics, autonomous systems, industrial automation, and learning.\n\nA project that started as an idea for helping workers in small factories eventually became a fully autonomous industrial robot prototype presented at one of India's premier technical festivals.",
    imageFolder: "/assets/achievements/ingenium-nit-trichy",
  },
  {
    slug: "deutsche-borse-cybersecurity",
    place: "Top 10 Finalist Team",
    event: "Deutsche Börse Cybersecurity Challenge",
    host: "IIT Hyderabad",
    date: "January 2026",
    teamSize: 3,
    prize: "🏁 Top 10 Finalist Team",
    gradientAccent: "from-green-200 to-emerald-100",
    theme: {
      bg: "#F0FDF4",
      accentColor: "#16A34A",
      accentBg: "#BBF7D0",
      borderColor: "#BBF7D0",
      tagBg: "#DCFCE7",
      tagText: "#15803D",
    },
    about: "The Deutsche Börse Cybersecurity Challenge was conducted as part of Elan & nVision 2026 at IIT Hyderabad.\n\nThe competition was designed to test real-world cybersecurity skills through advanced Capture The Flag (CTF) challenges and security compliance assessments.\n\nThe event brought together participants from multiple colleges and technical backgrounds to compete in:\n• vulnerability exploitation\n• web application security\n• penetration testing\n• compliance analysis\n• security recommendation workflows\n\nThe competition was conducted offline at IIT Hyderabad as a high-intensity 3-hour cybersecurity event.",
    problem: "The competition featured two major tracks:\n\n🚩 Capture The Flag (CTF) Track\nTeams had to exploit vulnerabilities inside web applications and security systems to capture hidden flags and uncover destination URLs.\n\n🛡️ Compliance Track\nTeams had to identify security deficiencies, map them to required security baselines, and provide recommendations for fixing the vulnerabilities.\n\nThe event tested:\n• cybersecurity fundamentals\n• web exploitation\n• vulnerability analysis\n• logical reasoning\n• compliance understanding\n• teamwork under pressure",
    solution: "The challenge involved analyzing intentionally vulnerable systems and identifying hidden security weaknesses.\n\nOur workflow included:\n• reconnaissance and endpoint discovery\n• vulnerability identification\n• payload testing\n• database analysis\n• flag extraction\n• attack path validation\n• compliance assessment\n\nThe competition environment simulated real-world security investigation scenarios where every clue, response, and endpoint mattered.",
    teamStory: "Cybersecurity competitions had always been exciting for our team because they combined:\n• problem-solving\n• logical thinking\n• reverse engineering\n• vulnerability analysis\n• real-world attack simulations\n\nWhen we discovered the Deutsche Börse Cybersecurity Challenge at IIT Hyderabad, we saw it as an opportunity to test ourselves in a real competitive cybersecurity environment.\n\nUnlike normal coding contests, this competition required teams to think like security analysts and attackers at the same time.\n\nThroughout the challenge:\n• hidden vulnerabilities had to be discovered\n• security flaws had to be exploited\n• flags had to be captured\n• attack paths had to be analyzed\n• compliance gaps had to be identified\n\nEvery challenge required deep investigation, teamwork, and quick decision-making under time pressure.",
    teamContributions: [
      {
        name: "Ch. Sai Prasad",
        role: "Team Lead • Cybersecurity Analysis & Exploitation Workflows",
        contributions: [
          "Led the team and coordinated challenge-solving workflows",
          "Handled exploitation strategy",
          "Contributed to vulnerability analysis and flag discovery"
        ]
      },
      {
        name: "M. Anil Kumar",
        role: "Security Research & Vulnerability Investigation",
        contributions: [
          "Worked on vulnerability analysis",
          "Handled security investigation workflows",
          "Performed challenge reconnaissance"
        ]
      },
      {
        name: "B. Chandu",
        role: "CTF Analysis, Reconnaissance & Testing Support",
        contributions: [
          "Handled testing support",
          "Explored attack paths",
          "Managed challenge validation workflows"
        ]
      }
    ],
    myContribution: "I actively worked on:\n• web application analysis\n• endpoint enumeration\n• database-related vulnerability analysis\n• exploitation workflows\n• challenge-solving coordination",
    architecture: [
      "Vulnerability Exploitation",
      "Web Security",
      "Penetration Testing",
      "Compliance Analysis",
      "CTF Workflows",
      "Attack Simulations"
    ],
    features: [
      { title: "🔍 Reconnaissance", desc: "Endpoint discovery and system mapping." },
      { title: "⚡ Vulnerability Exploitation", desc: "Exploiting security flaws in web applications." },
      { title: "🚩 Flag Extraction", desc: "Accessing secured endpoints and databases." },
      { title: "🛡️ Compliance Mapping", desc: "Mapping security deficiencies to required baselines." },
      { title: "💡 Remediation Recommendations", desc: "Providing recommendations to fix identified vulnerabilities." }
    ],
    timeline: [
      { time: "Before the Event", desc: "Preparation on CTF workflows and vulnerability analysis" },
      { time: "Round Start", desc: "Reconnaissance and endpoint discovery" },
      { time: "Middle Phase", desc: "Vulnerability exploitation and flag capture" },
      { time: "Final Phase", desc: "Compliance assessment and recommendations" }
    ],
    leadership: "As the Team Leader, I handled:\n• challenge coordination\n• attack workflow planning\n• vulnerability investigation\n• exploitation strategy\n• flag analysis\n• team synchronization under time pressure\n\nOne of the biggest challenges was balancing speed and accuracy while continuously switching between multiple active problem-solving tracks during the competition.",
    outcome: "Our team successfully reached the Top 10 finalist teams in the Deutsche Börse Cybersecurity Challenge conducted during Elan & nVision 2026 at IIT Hyderabad.\n\nThe competition tested:\n• cybersecurity fundamentals\n• practical exploitation skills\n• logical reasoning\n• collaborative investigation\n• real-time problem solving\n\n🏁 Top 10 Finalist Team\n🌐 Deutsche Börse Cybersecurity Challenge\n📍 IIT Hyderabad",
    mainImageName: "team.jpg",
    mainImageTitle: "Our Team",
    mainImageSubtitle: "Team of 3 · CTF Finalists",
    certificateCaption: "Official Certificate of Appreciation awarded for participating in the Deutsche Börse Cybersecurity Challenge during Elan & nVision 2026 at IIT Hyderabad.",
    emotionalClosing: "The Deutsche Börse Cybersecurity Challenge was more than a competition.\n\nIt was an experience in:\n• cybersecurity investigation\n• vulnerability analysis\n• attack simulation\n• teamwork under pressure\n• real-world security thinking\n\nA fast-paced environment where every clue mattered and every flag represented a solved challenge.",
    imageFolder: "/assets/achievements/deutsche-borse-cybersecurity",
  },
];

export function getAchievementBySlug(slug: string): Achievement | undefined {
  return achievements.find((a) => a.slug === slug);
}
