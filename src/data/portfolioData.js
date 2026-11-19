export const personalInfo = {
  name: "Manikeshwar Lagishetti",
  role: "Entry-Level Java Full Stack Developer",
  location: "Hyderabad, Telangana, India",
  avatar: "/profile.jpg",
  summary: "Entry-level Java Full Stack Developer with practical project experience building web applications using Java, Spring Boot, React.js, MySQL, JavaScript, and REST APIs. Developed and deployed Literary Sanctuary, a Goodreads-inspired application. Interested in entry-level Software Developer and Java Developer opportunities.",
  
  email: "manikeshwarlagishetti@gmail.com",
  phone: "+91 9390135050",
  rawPhone: "+919390135050",
  linkedin: "https://www.linkedin.com/in/manikeshwar-lagishetti-ab6375259/",
  linkedinDisplay: "linkedin.com/in/manikeshwar-lagishetti",
  github: "https://github.com/manikeshwarlagishetti-coder",
  githubDisplay: "github.com/manikeshwarlagishetti-coder",
  instagram: "https://www.instagram.com/this_is_manikeshwar/",
  instagramDisplay: "@this_is_manikeshwar",
  twitter: "https://www.instagram.com/this_is_manikeshwar/",
  twitterDisplay: "@this_is_manikeshwar",
  credly: "https://www.credly.com/users/manikeshwar-lagishetti/badges",
  credlyDisplay: "credly.com/users/manikeshwar-lagishetti",
  portfolioUrl: "https://manikeshwar-portfolio.vercel.app/"
};

export const skillsData = {
  backend: [
    { name: "Java", level: "Core & OOP", highlight: true },
    { name: "Spring Boot", level: "REST Microservices", highlight: true },
    { name: "Spring Security", level: "Authentication & JWT", highlight: true },
    { name: "REST APIs", level: "API Design & Integration", highlight: true },
    { name: "JDBC", level: "Database Connectivity" },
    { name: "JPA / Hibernate", level: "ORM & Entity Mapping", highlight: true }
  ],
  frontend: [
    { name: "React.js", level: "Component Architecture", highlight: true },
    { name: "Redux Toolkit", level: "State Management", highlight: true },
    { name: "JavaScript", level: "ES6+ Modern JS", highlight: true },
    { name: "Tailwind CSS", level: "Responsive Styling", highlight: true },
    { name: "HTML5", level: "Semantic Markup" },
    { name: "CSS3", level: "Layouts & Animations" }
  ],
  database: [
    { name: "MySQL", level: "Relational Modeling & Queries", highlight: true },
    { name: "Database Design", level: "Normalization & Schema Design" }
  ],
  tools: [
    { name: "Git", level: "Version Control" },
    { name: "GitHub", level: "Collaboration & Repositories", highlight: true },
    { name: "Maven", level: "Build Automation & Dependencies" },
    { name: "VS Code", level: "Development Environment" }
  ]
};

export const projectsData = [
  {
    id: "literary-sanctuary",
    title: "Literary Sanctuary",
    category: "Full-Stack Web Application",
    badge: "Featured & Deployed",
    subtitle: "Goodreads-Inspired Book Discovery & Reading Management Platform",
    description: "A comprehensive full-stack reading management web application that enables book enthusiasts to discover titles, organize customized reading shelves, write detailed reviews, assign star ratings, establish annual reading goals, and manage personal profiles.",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security (JWT)",
      "React.js",
      "Redux Toolkit",
      "MySQL",
      "JPA / Hibernate",
      "REST APIs",
      "Tailwind CSS"
    ],
    features: [
      "Book discovery catalog with real-time search and filter mechanics",
      "Custom reading shelves: Currently Reading, Want to Read, and Completed",
      "Interactive user ratings, detailed book reviews, and personalized reading goals",
      "Stateless authentication & authorization powered by Spring Security with JWT tokens",
      "Relational MySQL persistence with JPA/Hibernate entity mappings and data migrations",
      "Decoupled React.js frontend consuming secure Spring Boot REST endpoints"
    ],
    liveUrl: "https://goodreads-project-production.up.railway.app",
    githubUrl: "https://github.com/manikeshwarlagishetti-coder/goodreads-project",
    status: "Live & Deployed on Railway",
    architecture: "React Frontend (Vite) + Spring Boot REST API + MySQL Cloud Database"
  },
  {
    id: "user-management-dashboard",
    title: "User Management Dashboard",
    category: "Frontend Web Application",
    badge: "React Interface",
    subtitle: "Dynamic Administrative Control Panel with Complete CRUD Capabilities",
    description: "A clean and responsive administrative dashboard engineered with modular, reusable React components. Empowers administrators with dynamic rendering and full CRUD functionality to browse, create, edit, and delete user records with instantaneous UI updates.",
    techStack: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Component State",
      "REST API Integration",
      "Responsive Layout"
    ],
    features: [
      "Full CRUD operations: View, Add, Edit, and Delete user entries seamlessly",
      "Reusable component design: Modular modal dialogs, data table rows, and input controls",
      "Dynamic client-side filtering and real-time search functionality",
      "Interactive form validation with error states to prevent malformed data entry",
      "Mobile-first responsive design adapted for desktop, tablet, and mobile displays"
    ],
    liveUrl: "https://user-management-dashboard-vert.vercel.app/",
    githubUrl: "https://github.com/manikeshwarlagishetti-coder",
    status: "Live & Deployed on Vercel",
    architecture: "React Reusable Component Tree + State-driven CRUD Engine"
  }
];

export const educationData = [
  {
    degree: "Bachelor of Commerce (Computer Applications)",
    institution: "Pratibha Degree College",
    location: "Siddipet, Telangana",
    period: "Graduated: 2025",
    cgpa: "7.41 CGPA",
    highlights: [
      "Comprehensive coursework combining core computer applications, database concepts, and business logic",
      "Solid academic foundation in algorithms, basic programming principles, and relational database systems"
    ]
  }
];

export const certificationsData = [
  {
    title: "Java Full Stack Developer Training",
    organization: "NxtWave",
    category: "Full Stack Specialization",
    description: "Rigorous hands-on training covering modern full-stack development with Java, Spring Boot, Spring Security, RESTful Microservices, React.js, Redux Toolkit, and MySQL database engineering.",
    topics: ["Core Java & OOP", "Spring Boot & REST APIs", "React.js & Redux Toolkit", "MySQL & JPA/Hibernate", "Full-Stack Project Deployment"]
  },
  {
    title: "AWS Educate Training Badges",
    organization: "Amazon Web Services (AWS)",
    category: "Cloud Computing Foundations",
    credlyUrl: "https://www.credly.com/users/manikeshwar-lagishetti/badges",
    description: "Verified official AWS digital credentials issued through Credly demonstrating foundational proficiency across core cloud architecture, database, storage, and serverless disciplines.",
    badges: [
      { name: "Getting Started: Compute", domain: "Cloud Compute & EC2 Foundations", icon: "compute" },
      { name: "Getting Started: Databases", domain: "Relational & NoSQL Cloud Data", icon: "database" },
      { name: "Getting Started: Storage", domain: "S3 Object & Block Storage", icon: "storage" },
      { name: "Getting Started: Serverless", domain: "Lambda & Event-Driven Architecture", icon: "serverless" },
      { name: "Getting Started: Cloud Ops", domain: "Monitoring, Governance & IAM", icon: "cloudops" }
    ],
    topics: [
      "Compute Fundamentals",
      "Cloud Databases",
      "Cloud Storage",
      "Serverless Architecture",
      "Cloud Operations"
    ]
  }
];
