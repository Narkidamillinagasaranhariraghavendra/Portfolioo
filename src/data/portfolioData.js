export const personalInfo = {
  fullName: "Naga Saran Hari Raghavendra Narkidamilli",
  shortName: "Naga Saran",
  title: "Full-Stack Developer & Aspiring Software Engineer",
  tagline: "Building scalable web applications, intelligent AI solutions, and solving complex DSA problems.",
  email: "narkidamillihariraghavendra@gmail.com",
  phone: "+91 7702502722",
  location: "Kakinada, Andhra Pradesh, India",
  summary: "Full-Stack Developer and Aspiring Software Engineer specializing in Artificial Intelligence with hands-on experience in Python, SQL, and modern web application development. Experienced in Data Structures and Algorithms, OOP, database management, REST APIs, and software projects. Seeking a Software Developer opportunity to apply technical skills, solve engineering problems, and contribute to reliable software solutions.",
  socialLinks: {
    github: "https://github.com/Narkidamillinagasaranhariraghavendra",
    linkedin: "https://www.linkedin.com/in/hari-raghavendra-narkidamilli-2873542b9/",
    leetcode: "https://leetcode.com/u/23A31A43B6/",
    hackerrank: "https://www.hackerrank.com/profile/23a31a43b6",
    codechef: "https://www.codechef.com/users/hari234"
  },
  stats: [
    { label: "DSA Problems Solved", value: "500+", suffix: "" },
    { label: "CGPA (B.Tech AI)", value: "8.21", suffix: "/10" },
    { label: "Internships Completed", value: "2", suffix: "" },
    { label: "Industry Certifications", value: "4+", suffix: "" }
  ]
};

export const educationData = [
  {
    degree: "B.Tech in Artificial Intelligence",
    institution: "Pragati Engineering College, Kakinada",
    period: "2023 – 2027",
    score: "CGPA: 8.21 / 10",
    description: "Specializing in Artificial Intelligence, Machine Learning, Data Structures, Algorithms, DBMS, and Object-Oriented Programming."
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Aditya Junior College, Palakol",
    period: "2021 – 2023",
    score: "Percentage: 96.3%",
    description: "Focused on Mathematics, Physics, and Chemistry with top academic performance."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "ZP High School, Ilaparru",
    period: "2021",
    score: "Percentage: 95%",
    description: "Completed secondary education with distinction in science and mathematics."
  }
];

export const experienceData = [
  {
    role: "Software Engineer Intern",
    company: "YUVA",
    period: "Recent",
    type: "Internship",
    points: [
      "Contributed to core software development activities including coding, debugging, testing, and application-module enhancement.",
      "Collaborated on application development tasks while strictly following industry software engineering practices for implementation and testing."
    ],
    skills: ["Software Engineering", "Debugging", "Testing", "Module Enhancement"]
  },
  {
    role: "Green Internship",
    company: "1M1B, EY & Microsoft",
    period: "Recent",
    type: "Sustainability Tech Internship",
    points: [
      "Participated in a global sustainability initiative supported by EY and Microsoft, applying design-thinking and technology concepts to environmental challenges.",
      "Analyzed sustainability challenges and contributed to technology-driven solution development through structured problem-solving."
    ],
    skills: ["Design Thinking", "Sustainability Tech", "Problem-Solving", "EY & Microsoft Program"]
  }
];

export const projectsData = [
  {
    id: "realtime-chat",
    title: "Real-Time Chat Application",
    subtitle: "Instant messaging app with Socket.IO, Clerk Auth & Hero UI",
    category: "Full Stack",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Clerk", "Zustand", "Hero UI", "ImageKit"],
    highlights: [
      "Developed a real-time messaging application enabling users to communicate through instant one-to-one conversations.",
      "Implemented secure authentication with Clerk, message persistence with MongoDB, and reactive state management using Zustand.",
      "Integrated Socket.IO for low-latency real-time communication and utilized Hero UI & ImageKit to build a responsive, high-performance UI."
    ],
    github: "https://github.com/Narkidamillinagasaranhariraghavendra/Real_time_chat_app",
    demo: "#",
    featured: true
  },
  {
    id: "book-store",
    title: "Book Store Management System",
    subtitle: "Full-stack inventory & store web app with CRUD operations",
    category: "Full Stack",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    highlights: [
      "Developed a web-based Book Store Management System with full CRUD operations for managing books, authors, prices, and categories.",
      "Built robust RESTful APIs using Node.js and Express.js with MongoDB integration for efficient data storage and rapid retrieval.",
      "Implemented a clean, responsive React.js interface to deliver a seamless and intuitive book management experience."
    ],
    github: "https://github.com/Narkidamillinagasaranhariraghavendra/Book-Store",
    demo: "#",
    featured: true
  },
  {
    id: "ecoglow",
    title: "EcoGlow - Sustainable Skincare Platform",
    subtitle: "AI-enhanced eco-friendly skincare solution utilizing Groq API",
    category: "Web & AI",
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "Groq API"],
    highlights: [
      "Developed an eco-friendly skincare concept focused on repurposing fruit peels as natural resources for sustainable face-care applications.",
      "Explored orange, banana, and pomegranate peels as potential sources of beneficial compounds for skincare applications.",
      "Presented a sustainability-focused approach promoting organic-waste reuse through plant-based personal-care solutions integrated with Groq API."
    ],
    github: "https://github.com/Narkidamillinagasaranhariraghavendra/eco-glow",
    demo: "#",
    featured: true
  }
];

export const skillsData = {
  languages: [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "Java (basic)", level: 70, icon: "☕" },
    { name: "JavaScript", level: 88, icon: "🟨" },
    { name: "SQL", level: 85, icon: "🗄️" },
    { name: "HTML & CSS", level: 92, icon: "🎨" }
  ],
  frontend: [
    { name: "React.js", level: 88 },
    { name: "HTML5 & CSS3", level: 92 },
    { name: "JavaScript (ES6+)", level: 88 },
    { name: "Tailwind CSS / Hero UI", level: 85 },
    { name: "Zustand State Management", level: 80 }
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "REST APIs", level: 90 },
    { name: "Socket.IO", level: 80 },
    { name: "Groq API", level: 78 }
  ],
  database: [
    { name: "MongoDB", level: 85 },
    { name: "SQL / MySQL", level: 82 }
  ],
  coreConcepts: [
    "Data Structures & Algorithms (500+ solved)",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Operating Systems (OS)",
    "Machine Learning Concepts"
  ],
  tools: [
    "Git", "GitHub", "VS Code", "Vercel", "Render", "Clerk Auth", "ImageKit"
  ],
  softSkills: [
    "Problem-Solving",
    "Analytical Thinking",
    "Communication",
    "Public Speaking",
    "Teamwork & Collaboration",
    "Adaptability",
    "Quick Learning",
    "Willingness to Learn"
  ]
};

export const certificationsData = [
  {
    title: "Salesforce Agentforce Specialist",
    issuer: "Salesforce",
    icon: "☁️",
    color: "from-blue-500 to-indigo-600",
    description: "Certified in building and deploying autonomous AI agents on the Salesforce platform."
  },
  {
    title: "OCI Certified Foundation Associate",
    issuer: "Oracle",
    icon: "🔴",
    color: "from-red-500 to-amber-600",
    description: "Certified in Oracle Cloud Infrastructure core services, security, architecture, and cloud fundamentals."
  },
  {
    title: "OCI AI Foundation Associate",
    issuer: "Oracle",
    icon: "🧠",
    color: "from-purple-500 to-pink-600",
    description: "Certified in Oracle Cloud AI concepts, Machine Learning workflows, and AI infrastructure."
  },
  {
    title: "Python Essentials 1 & 2",
    issuer: "Cisco Networking Academy",
    icon: "🐍",
    color: "from-emerald-500 to-teal-600",
    description: "Comprehensive mastery of Python programming fundamentals, data structures, OOP, and modules."
  },
  {
    title: "Programming in Java (Elite Badge)",
    issuer: "NPTEL Elite",
    icon: "🏆",
    color: "from-amber-500 to-yellow-600",
    description: "Earned Elite distinction in Java Programming through rigorous coursework and proctored examination."
  }
];

export const achievementsData = [
  {
    title: "500+ DSA Problems Solved",
    platforms: ["CodeChef", "HackerRank", "LeetCode"],
    icon: "⚡",
    description: "Demonstrated strong algorithmic thinking and problem-solving skills across leading competitive programming platforms."
  }
];
