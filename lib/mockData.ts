// Mock Data for AI Prep Hub - Software Developer Focused

export const mockUserProfile = {
  name: "Alex Chen",
  email: "alex.chen@email.com",
  title: "Full-Stack Developer",
  experience: "3 years",
  location: "San Francisco, CA",
  github: "alexchen-dev",
  linkedin: "alexchen",
  bio: "Full-stack developer passionate about building AI-powered applications. Previously built e-commerce platforms and SaaS tools.",
  skills: ["React", "Next.js", "Node.js", "TypeScript", "Python", "PostgreSQL", "AWS", "Docker"],
  preferredRoles: ["Full-Stack Engineer", "Frontend Engineer", "Backend Engineer"],
  currentCompany: "TechStartup Inc.",
  education: "B.S. Computer Science, UC Berkeley"
}

export const mockDashboardMetrics = {
  resumesCreated: 12,
  emailsGenerated: 18,
  interviewsPracticed: 8,
  jobsExplored: 24,
  applicationsSubmitted: 15,
  interviewsScheduled: 3,
  responseRate: "22%",
  averageScore: "85%"
}

export const mockRecentActivity = [
  {
    id: "1",
    activity: "Tailored resume for Full-Stack Engineer at ChatFlow AI",
    date: "2025-07-31",
    status: "Completed",
    type: "resume"
  },
  {
    id: "2",
    activity: "Practiced coding interview for Backend role at DataSense",
    date: "2025-07-30",
    status: "Completed",
    type: "interview",
    score: "88%"
  },
  {
    id: "3",
    activity: "Generated email for CTO at SmartDocs AI",
    date: "2025-07-29",
    status: "Sent",
    type: "email"
  },
  {
    id: "4",
    activity: "Applied to Senior Frontend Engineer at AIWriter",
    date: "2025-07-28",
    status: "Pending",
    type: "application"
  },
  {
    id: "5",
    activity: "Completed system design interview for VoiceAI Platform",
    date: "2025-07-27",
    status: "Completed",
    type: "interview",
    score: "91%"
  }
]

export const mockAIStartups = [
  {
    id: "chatflow",
    name: "ChatFlow AI",
    description: "Building the next-generation customer support platform powered by LLMs",
    location: "San Francisco, CA",
    size: "20-50",
    stage: "Series A",
    founded: "2023",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
    aiTech: ["OpenAI API", "Langchain", "Vector Databases"],
    website: "chatflow.ai",
    logo: "🤖"
  },
  {
    id: "smartdocs",
    name: "SmartDocs AI",
    description: "AI-powered document generation and automation for businesses",
    location: "New York, NY",
    size: "10-20",
    stage: "Seed",
    founded: "2024",
    techStack: ["React", "Python", "FastAPI", "MongoDB", "Docker"],
    aiTech: ["GPT-4", "Claude API", "Custom NLP"],
    website: "smartdocs.ai",
    logo: "📄"
  },
  {
    id: "voiceai",
    name: "VoiceAI Platform",
    description: "Real-time voice transcription and analysis for meetings",
    location: "Remote",
    size: "30-40",
    stage: "Series A",
    founded: "2022",
    techStack: ["Vue.js", "Go", "PostgreSQL", "Kubernetes", "GCP"],
    aiTech: ["Whisper API", "Real-time processing", "Sentiment analysis"],
    website: "voiceai.io",
    logo: "🎙️"
  },
  {
    id: "aiwriter",
    name: "AIWriter",
    description: "AI writing assistant for content creators and marketers",
    location: "Austin, TX",
    size: "15-25",
    stage: "Seed",
    founded: "2023",
    techStack: ["Next.js", "Node.js", "MySQL", "Vercel", "Stripe"],
    aiTech: ["Multiple LLMs", "Fine-tuned models", "Prompt engineering"],
    website: "aiwriter.io",
    logo: "✍️"
  },
  {
    id: "datasense",
    name: "DataSense Analytics",
    description: "AI-powered analytics dashboard for e-commerce businesses",
    location: "Seattle, WA",
    size: "25-35",
    stage: "Series A",
    founded: "2022",
    techStack: ["React", "Django", "PostgreSQL", "Redis", "AWS", "Tableau"],
    aiTech: ["Predictive analytics", "Recommendation engine", "Anomaly detection"],
    website: "datasense.io",
    logo: "📊"
  }
]

export const mockJobListings = [
  {
    id: "1",
    title: "Senior Full-Stack Engineer",
    company: "ChatFlow AI",
    companyId: "chatflow",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    experience: "4+ years",
    salary: "$140k - $180k + equity",
    posted: "2 days ago",
    applicants: "45",
    snippet: "Build scalable web applications integrating LLMs for customer support automation...",
    requirements: [
      "4+ years full-stack development experience",
      "Expert in React/Next.js and Node.js",
      "Experience with AI/ML API integration",
      "Strong TypeScript skills",
      "Database design (PostgreSQL preferred)"
    ],
    responsibilities: [
      "Design and implement AI-powered chat interfaces",
      "Build RESTful APIs for LLM integration",
      "Optimize application performance and scalability",
      "Collaborate with AI team on feature implementation",
      "Mentor junior developers"
    ],
    niceToHave: [
      "Experience with OpenAI/Anthropic APIs",
      "Knowledge of vector databases",
      "DevOps experience with AWS",
      "Previous startup experience"
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker"]
  },
  {
    id: "2",
    title: "Backend Engineer - AI Infrastructure",
    company: "SmartDocs AI",
    companyId: "smartdocs",
    location: "New York, NY (Remote OK)",
    type: "Full-time",
    experience: "3+ years",
    salary: "$130k - $160k + equity",
    posted: "1 day ago",
    applicants: "32",
    snippet: "Build robust backend systems for AI document processing and generation...",
    requirements: [
      "3+ years backend development experience",
      "Strong Python skills (FastAPI preferred)",
      "Experience with microservices architecture",
      "API design and implementation",
      "Database optimization skills"
    ],
    responsibilities: [
      "Design scalable APIs for AI document processing",
      "Implement queue systems for async AI tasks",
      "Optimize database queries and caching",
      "Monitor and improve system performance",
      "Build integration with multiple AI providers"
    ],
    niceToHave: [
      "Experience with document processing",
      "Knowledge of prompt engineering",
      "MongoDB experience",
      "Background in automation"
    ],
    techStack: ["Python", "FastAPI", "MongoDB", "Redis", "Docker", "AWS", "Celery"]
  },
  {
    id: "3",
    title: "Frontend Engineer - AI Chat Interface",
    company: "VoiceAI Platform",
    companyId: "voiceai",
    location: "Remote (US Timezone)",
    type: "Full-time",
    experience: "2+ years",
    salary: "$120k - $150k + equity",
    posted: "3 days ago",
    applicants: "28",
    snippet: "Create beautiful, responsive interfaces for real-time AI voice transcription...",
    requirements: [
      "2+ years frontend development experience",
      "Expert in React or Vue.js",
      "Experience with real-time applications",
      "Strong CSS/UI skills",
      "WebSocket experience"
    ],
    responsibilities: [
      "Build real-time transcription UI components",
      "Implement responsive design for all devices",
      "Create interactive data visualizations",
      "Optimize frontend performance",
      "Work with designers on UX improvements"
    ],
    niceToHave: [
      "Audio/video streaming experience",
      "D3.js or Chart.js knowledge",
      "Accessibility expertise",
      "Animation libraries experience"
    ],
    techStack: ["Vue.js", "TypeScript", "WebSockets", "Tailwind CSS", "D3.js", "Vite"]
  },
  {
    id: "4",
    title: "Full-Stack Engineer - AI Writing Platform",
    company: "AIWriter",
    companyId: "aiwriter",
    location: "Austin, TX (Hybrid)",
    type: "Full-time",
    experience: "3+ years",
    salary: "$125k - $155k + equity",
    posted: "1 week ago",
    applicants: "67",
    snippet: "Join our team building the future of AI-assisted content creation...",
    requirements: [
      "3+ years full-stack experience",
      "Proficient in Next.js and Node.js",
      "Database design experience",
      "Payment integration experience",
      "Strong problem-solving skills"
    ],
    responsibilities: [
      "Build features for AI content generation",
      "Implement user authentication and billing",
      "Create admin dashboards and analytics",
      "Integrate multiple AI model providers",
      "Optimize for SEO and performance"
    ],
    niceToHave: [
      "Content management system experience",
      "Stripe integration experience",
      "SEO optimization knowledge",
      "Marketing tech background"
    ],
    techStack: ["Next.js", "Node.js", "MySQL", "Prisma", "Stripe", "Vercel", "TypeScript"]
  },
  {
    id: "5",
    title: "Senior Backend Engineer - Analytics Platform",
    company: "DataSense Analytics",
    companyId: "datasense",
    location: "Seattle, WA (Remote OK)",
    type: "Full-time",
    experience: "5+ years",
    salary: "$150k - $190k + equity",
    posted: "4 days ago",
    applicants: "51",
    snippet: "Build data pipelines and APIs for AI-powered e-commerce analytics...",
    requirements: [
      "5+ years backend engineering experience",
      "Expert in Python and Django",
      "Strong SQL and data modeling skills",
      "Experience with large-scale data processing",
      "API design expertise"
    ],
    responsibilities: [
      "Design data pipelines for analytics processing",
      "Build APIs for dashboard visualization",
      "Implement ML model serving infrastructure",
      "Optimize query performance at scale",
      "Lead technical architecture decisions"
    ],
    niceToHave: [
      "E-commerce domain knowledge",
      "Experience with Spark or similar",
      "ML engineering background",
      "Team lead experience"
    ],
    techStack: ["Python", "Django", "PostgreSQL", "Redis", "Celery", "AWS", "Docker"]
  },
  {
    id: "6",
    title: "Platform Engineer - AI Services",
    company: "ChatFlow AI",
    companyId: "chatflow",
    location: "San Francisco, CA (Remote OK)",
    type: "Full-time",
    experience: "4+ years",
    salary: "$145k - $175k + equity",
    posted: "5 days ago",
    applicants: "38",
    snippet: "Scale our AI infrastructure to handle millions of customer conversations...",
    requirements: [
      "4+ years DevOps/Platform experience",
      "Strong AWS or GCP knowledge",
      "Kubernetes expertise",
      "Infrastructure as Code experience",
      "Monitoring and observability skills"
    ],
    responsibilities: [
      "Design scalable infrastructure for AI services",
      "Implement CI/CD pipelines",
      "Monitor system performance and costs",
      "Ensure high availability and reliability",
      "Optimize AI API usage and costs"
    ],
    niceToHave: [
      "Experience scaling AI applications",
      "Cost optimization expertise",
      "Security best practices",
      "Terraform experience"
    ],
    techStack: ["AWS", "Kubernetes", "Terraform", "Docker", "Prometheus", "GitHub Actions"]
  },
  {
    id: "7",
    title: "Junior Full-Stack Developer",
    company: "SmartDocs AI",
    companyId: "smartdocs",
    location: "New York, NY (Hybrid)",
    type: "Full-time",
    experience: "1+ years",
    salary: "$90k - $120k + equity",
    posted: "2 days ago",
    applicants: "89",
    snippet: "Great opportunity for early-career developers to work with cutting-edge AI...",
    requirements: [
      "1+ years development experience",
      "Knowledge of React and Python",
      "Basic understanding of APIs",
      "Strong learning mindset",
      "CS degree or bootcamp graduate"
    ],
    responsibilities: [
      "Implement UI features for document generation",
      "Write API endpoints for CRUD operations",
      "Fix bugs and improve code quality",
      "Participate in code reviews",
      "Learn AI integration best practices"
    ],
    niceToHave: [
      "Personal projects with AI APIs",
      "Open source contributions",
      "Hackathon experience",
      "Technical blog writing"
    ],
    techStack: ["React", "Python", "FastAPI", "MongoDB", "Git", "Docker"]
  },
  {
    id: "8",
    title: "Mobile Engineer - AI Features",
    company: "VoiceAI Platform",
    companyId: "voiceai",
    location: "Remote (Global)",
    type: "Full-time",
    experience: "3+ years",
    salary: "$130k - $160k + equity",
    posted: "1 week ago",
    applicants: "42",
    snippet: "Build mobile apps with real-time AI voice processing capabilities...",
    requirements: [
      "3+ years mobile development (iOS/Android)",
      "React Native or Flutter experience",
      "Real-time audio processing knowledge",
      "API integration expertise",
      "App store deployment experience"
    ],
    responsibilities: [
      "Develop cross-platform mobile applications",
      "Implement real-time voice features",
      "Optimize mobile performance and battery",
      "Handle offline functionality",
      "Collaborate with backend team on APIs"
    ],
    niceToHave: [
      "Native iOS/Android experience",
      "Audio engineering background",
      "WebRTC knowledge",
      "Published apps in stores"
    ],
    techStack: ["React Native", "TypeScript", "WebRTC", "REST APIs", "Redux", "Jest"]
  },
  {
    id: "9",
    title: "Frontend Lead - AI Dashboard",
    company: "DataSense Analytics",
    companyId: "datasense",
    location: "Seattle, WA (Hybrid)",
    type: "Full-time",
    experience: "6+ years",
    salary: "$160k - $200k + equity",
    posted: "3 days ago",
    applicants: "35",
    snippet: "Lead frontend development for our AI-powered analytics dashboard...",
    requirements: [
      "6+ years frontend experience",
      "Expert React and TypeScript skills",
      "Data visualization expertise",
      "Team leadership experience",
      "Architecture design skills"
    ],
    responsibilities: [
      "Lead frontend architecture decisions",
      "Mentor team of frontend engineers",
      "Build complex data visualizations",
      "Ensure code quality and standards",
      "Collaborate with product and design"
    ],
    niceToHave: [
      "D3.js expertise",
      "Performance optimization experience",
      "Micro-frontend architecture",
      "Previous lead experience"
    ],
    techStack: ["React", "TypeScript", "D3.js", "Redux", "Webpack", "Jest", "Storybook"]
  },
  {
    id: "10",
    title: "DevOps Engineer - AI Infrastructure",
    company: "AIWriter",
    companyId: "aiwriter",
    location: "Austin, TX (Remote OK)",
    type: "Full-time",
    experience: "3+ years",
    salary: "$125k - $155k + equity",
    posted: "6 days ago",
    applicants: "29",
    snippet: "Manage infrastructure for our AI writing platform serving thousands of users...",
    requirements: [
      "3+ years DevOps experience",
      "Strong cloud platform knowledge",
      "CI/CD pipeline expertise",
      "Monitoring and logging skills",
      "Security best practices"
    ],
    responsibilities: [
      "Manage cloud infrastructure on Vercel/AWS",
      "Implement automated deployment pipelines",
      "Monitor application performance",
      "Ensure platform security",
      "Optimize infrastructure costs"
    ],
    niceToHave: [
      "Vercel deployment experience",
      "Cost optimization skills",
      "Database administration",
      "On-call experience"
    ],
    techStack: ["Vercel", "AWS", "GitHub Actions", "Docker", "New Relic", "PagerDuty"]
  },
  {
    id: "11",
    title: "Full-Stack Engineer - Conversational AI",
    company: "ChatFlow AI",
    companyId: "chatflow",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "2+ years",
    salary: "$115k - $145k + equity",
    posted: "1 day ago",
    applicants: "56",
    snippet: "Build conversational interfaces powered by state-of-the-art language models...",
    requirements: [
      "2+ years full-stack experience",
      "React and Node.js proficiency",
      "REST API development",
      "Database experience",
      "Strong communication skills"
    ],
    responsibilities: [
      "Implement chat UI components",
      "Build conversation management APIs",
      "Integrate with LLM providers",
      "Handle message persistence",
      "Improve response latency"
    ],
    niceToHave: [
      "Chatbot development experience",
      "WebSocket implementation",
      "Redis experience",
      "UI/UX sensibility"
    ],
    techStack: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redis", "TypeScript"]
  },
  {
    id: "12",
    title: "Backend Engineer - Document AI",
    company: "SmartDocs AI",
    companyId: "smartdocs",
    location: "New York, NY",
    type: "Full-time",
    experience: "4+ years",
    salary: "$140k - $170k + equity",
    posted: "4 days ago",
    applicants: "41",
    snippet: "Design backend systems for intelligent document processing and generation...",
    requirements: [
      "4+ years backend experience",
      "Strong Python and async programming",
      "Microservices architecture",
      "Queue systems experience",
      "PDF processing knowledge"
    ],
    responsibilities: [
      "Build document processing pipelines",
      "Implement template generation system",
      "Design async job processing",
      "Integrate OCR and NLP services",
      "Optimize processing speed"
    ],
    niceToHave: [
      "Document parsing libraries",
      "Celery or similar experience",
      "S3 and CDN knowledge",
      "Legal tech background"
    ],
    techStack: ["Python", "FastAPI", "Celery", "MongoDB", "S3", "Docker", "RabbitMQ"]
  },
  {
    id: "13",
    title: "Senior Frontend Engineer - Voice UI",
    company: "VoiceAI Platform",
    companyId: "voiceai",
    location: "Remote (US)",
    type: "Full-time",
    experience: "5+ years",
    salary: "$150k - $180k + equity",
    posted: "2 days ago",
    applicants: "33",
    snippet: "Create innovative voice-driven user interfaces for the future of meetings...",
    requirements: [
      "5+ years frontend experience",
      "Expert JavaScript/TypeScript",
      "Audio visualization experience",
      "Performance optimization skills",
      "Accessibility expertise"
    ],
    responsibilities: [
      "Design voice interaction patterns",
      "Build audio waveform visualizations",
      "Implement real-time transcription UI",
      "Ensure cross-browser compatibility",
      "Lead frontend best practices"
    ],
    niceToHave: [
      "Web Audio API experience",
      "Canvas/WebGL knowledge",
      "Speech recognition APIs",
      "Material Design expertise"
    ],
    techStack: ["Vue.js", "TypeScript", "Web Audio API", "Canvas", "Vuex", "Nuxt.js"]
  },
  {
    id: "14",
    title: "Full-Stack Engineer - Content AI",
    company: "AIWriter",
    companyId: "aiwriter",
    location: "Austin, TX",
    type: "Full-time",
    experience: "3+ years",
    salary: "$125k - $155k + equity",
    posted: "5 days ago",
    applicants: "72",
    snippet: "Help build the most intuitive AI writing platform for content creators...",
    requirements: [
      "3+ years full-stack experience",
      "Next.js and API development",
      "User authentication systems",
      "Payment processing experience",
      "SEO knowledge"
    ],
    responsibilities: [
      "Build content editor with AI features",
      "Implement user workspace system",
      "Create content analytics dashboard",
      "Integrate multiple AI providers",
      "Optimize page load performance"
    ],
    niceToHave: [
      "Rich text editor experience",
      "Markdown processing",
      "Content CMS background",
      "Growth engineering"
    ],
    techStack: ["Next.js", "Prisma", "tRPC", "Tailwind", "Stripe", "Vercel", "MySQL"]
  },
  {
    id: "15",
    title: "Platform Engineer - Data Analytics",
    company: "DataSense Analytics",
    companyId: "datasense",
    location: "Seattle, WA",
    type: "Full-time",
    experience: "4+ years",
    salary: "$145k - $175k + equity",
    posted: "1 week ago",
    applicants: "46",
    snippet: "Scale our data platform processing billions of e-commerce events daily...",
    requirements: [
      "4+ years platform/DevOps experience",
      "Data pipeline infrastructure",
      "Kubernetes and Docker expertise",
      "Monitoring at scale",
      "Cost optimization skills"
    ],
    responsibilities: [
      "Design scalable data infrastructure",
      "Implement data pipeline monitoring",
      "Optimize compute and storage costs",
      "Ensure data security compliance",
      "Support ML model deployment"
    ],
    niceToHave: [
      "Apache Spark experience",
      "Data warehouse knowledge",
      "ML platform experience",
      "FinOps certification"
    ],
    techStack: ["AWS", "Kubernetes", "Airflow", "Spark", "Terraform", "DataDog"]
  }
]

export const mockResumes = {
  original: {
    name: "Alex Chen",
    title: "Software Developer",
    email: "alex.chen@email.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
    summary: "Software developer with 3 years of experience building web applications. Skilled in React and Node.js.",
    experience: [
      {
        company: "TechStartup Inc.",
        title: "Software Developer",
        duration: "2022 - Present",
        bullets: [
          "Developed web applications using React and Node.js",
          "Worked on database design and API development",
          "Participated in code reviews and team meetings"
        ]
      },
      {
        company: "WebDev Agency",
        title: "Junior Developer",
        duration: "2021 - 2022",
        bullets: [
          "Built responsive websites for clients",
          "Learned modern JavaScript frameworks",
          "Assisted senior developers with projects"
        ]
      }
    ],
    skills: ["JavaScript", "React", "Node.js", "HTML/CSS", "Git", "SQL"],
    education: "B.S. Computer Science, UC Berkeley (2021)"
  },
  tailored: {
    fullstack: {
      name: "Alex Chen",
      title: "Full-Stack Engineer",
      email: "alex.chen@email.com",
      phone: "(555) 123-4567",
      location: "San Francisco, CA",
      summary: "Full-Stack Engineer with 3 years building scalable web applications and integrating AI APIs. Experienced in React, Next.js, Node.js, and implementing AI-powered features that improved user engagement by 40%.",
      experience: [
        {
          company: "TechStartup Inc.",
          title: "Full-Stack Developer",
          duration: "2022 - Present",
          bullets: [
            "Built AI-powered recommendation system using OpenAI API, increasing user engagement by 40%",
            "Developed scalable RESTful APIs handling 10K+ requests/day with Node.js and Express",
            "Implemented real-time chat features using Socket.io and integrated GPT-3.5 for smart responses",
            "Optimized database queries reducing load time by 60% using PostgreSQL and Redis caching",
            "Led migration from React to Next.js improving SEO and performance scores by 35%"
          ]
        },
        {
          company: "WebDev Agency",
          title: "Junior Full-Stack Developer",
          duration: "2021 - 2022",
          bullets: [
            "Developed 5 production web applications using React and Node.js for e-commerce clients",
            "Integrated Stripe payment processing and built admin dashboards for order management",
            "Implemented automated testing reducing bugs by 50% using Jest and React Testing Library"
          ]
        }
      ],
      skills: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS", "OpenAI API", "REST APIs"],
      education: "B.S. Computer Science, UC Berkeley (2021)",
      projects: [
        "AI Chat Widget: Open-source React component for AI-powered customer support (500+ GitHub stars)"
      ]
    },
    backend: {
      name: "Alex Chen",
      title: "Backend Engineer",
      email: "alex.chen@email.com",
      phone: "(555) 123-4567",
      location: "San Francisco, CA",
      summary: "Backend Engineer specializing in scalable API development and AI integration. 3 years experience building microservices, data pipelines, and integrating LLM APIs for production applications.",
      experience: [
        {
          company: "TechStartup Inc.",
          title: "Backend Developer",
          duration: "2022 - Present",
          bullets: [
            "Designed microservices architecture processing 1M+ AI requests daily using Node.js and Python",
            "Built robust queue system for async AI tasks using Redis and Bull reducing response time by 70%",
            "Implemented rate limiting and caching strategy for OpenAI API calls saving $10K/month",
            "Created data pipeline for user analytics using PostgreSQL and Apache Kafka",
            "Developed comprehensive API documentation and maintained 99.9% uptime SLA"
          ]
        },
        {
          company: "WebDev Agency",
          title: "Junior Backend Developer",
          duration: "2021 - 2022",
          bullets: [
            "Built RESTful APIs for 8 client projects handling authentication and data validation",
            "Optimized database queries and implemented indexing strategies improving performance by 45%",
            "Set up CI/CD pipelines using GitHub Actions and automated testing workflows"
          ]
        }
      ],
      skills: ["Node.js", "Python", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "Microservices", "GraphQL", "FastAPI"],
      education: "B.S. Computer Science, UC Berkeley (2021)",
      certifications: ["AWS Certified Developer - Associate"]
    },
    frontend: {
      name: "Alex Chen", 
      title: "Frontend Engineer",
      email: "alex.chen@email.com",
      phone: "(555) 123-4567",
      location: "San Francisco, CA",
      summary: "Frontend Engineer passionate about creating intuitive AI-powered user interfaces. 3 years building responsive web applications with modern JavaScript frameworks and AI API integrations.",
      experience: [
        {
          company: "TechStartup Inc.",
          title: "Frontend Developer",
          duration: "2022 - Present",
          bullets: [
            "Built AI-powered dashboard using React and D3.js visualizing ML predictions for 5K+ users",
            "Implemented real-time collaborative editor with AI suggestions using WebSockets and Draft.js",
            "Created reusable component library reducing development time by 40% across 3 products",
            "Improved Core Web Vitals scores by 50% through lazy loading and code splitting",
            "Led accessibility improvements achieving WCAG 2.1 AA compliance"
          ]
        },
        {
          company: "WebDev Agency",
          title: "Junior Frontend Developer",
          duration: "2021 - 2022",
          bullets: [
            "Developed 10+ responsive marketing websites using React and Next.js",
            "Implemented pixel-perfect designs with 98% accuracy from Figma mockups",
            "Built interactive data visualizations for client dashboards using Chart.js"
          ]
        }
      ],
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "GraphQL", "Jest", "Webpack", "Figma", "D3.js"],
      education: "B.S. Computer Science, UC Berkeley (2021)",
      portfolio: "alexchen.dev - Showcasing AI-powered web applications"
    }
  }
}

export const mockEmailTemplates = {
  professional: {
    subject: "Application for {position} - {userName}",
    body: `Dear {hiringManager},

I am writing to express my strong interest in the {position} position at {company}. Having followed {company}'s innovative work in {aiArea}, I was particularly impressed by {specificAchievement}.

My experience building {relevantProject} aligns perfectly with your requirements. At {previousCompany}, I {keyAchievement}, which I believe demonstrates my ability to contribute to your team's goals.

I am excited about the opportunity to bring my skills in {techStack} to help {company} {companyMission}. I would welcome the chance to discuss how my background in {relevantExperience} can contribute to your continued success.

Thank you for considering my application. I have attached my resume for your review and would be happy to provide any additional information.

Best regards,
{userName}
{userEmail}
{userLinkedIn}`
  },
  enthusiastic: {
    subject: "Excited to join {company}'s mission as {position}!",
    body: `Hi {hiringManager},

I just came across the {position} role at {company} and had to reach out immediately! Your work on {specificProject} really resonates with me - it's exactly the kind of impactful AI application I want to build.

Here's why I'd be a great fit:
• Built a similar {similarProject} that {achievement}
• Deep experience with {techStack} - your exact stack!
• Passionate about {aiArea} and have been following {company} since {timeframe}

I recently {recentAchievement}, and I'm eager to bring that same innovation to {company}. Plus, I noticed you're using {specificTech} - I actually wrote a blog post about optimizing it for AI applications!

I'd love to chat about how I can help {company} {companyGoal}. Are you available for a quick call this week?

Looking forward to hearing from you!

{userName}
{userEmail}
Portfolio: {userPortfolio}`
  },
  technical: {
    subject: "Backend Engineer Application - Scaling AI Infrastructure",
    body: `Hello {hiringManager},

I noticed {company} is looking for a {position} to help scale your AI infrastructure. Having built similar systems that handle {metric}, I'm confident I can help solve your scaling challenges.

Technical alignment with your needs:
- Designed microservices handling 1M+ AI API requests/day at {previousCompany}
- Reduced AI API costs by 40% through intelligent caching and queuing
- Built real-time data pipelines using {techStack}
- Open source contributor to {relevantProject}

I'm particularly interested in {company}'s approach to {technicalChallenge}. I faced a similar challenge when {relevantExperience} and would love to discuss how my solution might apply to your use case.

My GitHub showcases several relevant projects, including a {relevantRepo} that demonstrates my approach to {technicalArea}.

I'm available for technical discussions and would be happy to walk through my architecture decisions on past AI integration projects.

Best,
{userName}
GitHub: {userGithub}
Email: {userEmail}`
  },
  networking: {
    subject: "Fellow builder interested in {company}'s AI platform",
    body: `Hi {founderName},

I've been following {company}'s journey since your {milestone} and I'm truly impressed by how you're approaching {problem}. As someone who's been building in the {aiArea} space, your solution really stands out.

I recently shipped {relevantProject} and learned some interesting lessons about {technicalArea} that might be relevant to what you're building. Would love to share insights and learn more about your technical challenges.

Quick background: I'm a {position} with experience at {previousCompany}, where I {achievement}. Currently exploring opportunities to work on meaningful AI products, and {company}'s mission really resonates with me.

If you're open to it, I'd love to grab virtual coffee and chat about {sharedInterest}. Even if there's no immediate fit, I'm always excited to connect with fellow builders in the space.

Cheers,
{userName}
{userLinkedIn}
P.S. Loved your recent post about {blogPost} - the point about {insight} was spot on!`
  }
}

export const mockInterviewQuestions = {
  technical: [
    {
      question: "Walk me through how you would design a real-time chat system that integrates with an LLM API like GPT-4.",
      category: "System Design",
      difficulty: "Medium",
      followUps: [
        "How would you handle rate limiting?",
        "What about message persistence?",
        "How do you manage API costs?"
      ]
    },
    {
      question: "We need to build a feature that processes user uploads and generates AI summaries. How would you architect this?",
      category: "Architecture",
      difficulty: "Medium",
      followUps: [
        "How do you handle large files?",
        "What if the AI API is down?",
        "How do you ensure security?"
      ]
    },
    {
      question: "Show me how you'd implement a React component that displays AI-generated responses with typing animation.",
      category: "Coding",
      difficulty: "Easy",
      expectedApproach: "Use React hooks, handle streaming responses, implement smooth animations"
    },
    {
      question: "Our API response times are slow when calling the AI service. How would you debug and optimize this?",
      category: "Performance",
      difficulty: "Medium",
      followUps: [
        "What monitoring would you add?",
        "How about caching strategies?",
        "When would you use queues?"
      ]
    },
    {
      question: "Implement a simple API endpoint that takes user input, validates it, and forwards it to an AI service.",
      category: "Coding",
      difficulty: "Easy",
      languages: ["JavaScript", "Python"],
      expectedChecks: ["Input validation", "Error handling", "Async processing", "Response formatting"]
    }
  ],
  behavioral: [
    {
      question: "Tell me about a time you had to integrate a third-party API into your application.",
      category: "Experience",
      lookingFor: ["Technical challenges", "Problem-solving", "Communication", "Results"]
    },
    {
      question: "How do you stay updated with the rapidly evolving AI/tech landscape?",
      category: "Learning",
      lookingFor: ["Continuous learning", "Practical application", "Community involvement"]
    },
    {
      question: "Describe a project where you had to balance feature development with technical debt.",
      category: "Decision Making",
      lookingFor: ["Prioritization", "Communication", "Technical judgment", "Business awareness"]
    }
  ],
  projectDiscussion: [
    {
      question: "I see you built an AI-powered recommendation system. Walk me through the technical decisions you made.",
      category: "Project Deep Dive",
      areas: ["Architecture", "Technology choices", "Challenges faced", "Lessons learned"]
    },
    {
      question: "How did you handle data privacy when building features that send user data to AI APIs?",
      category: "Security/Privacy",
      lookingFor: ["Security awareness", "Best practices", "Compliance knowledge"]
    }
  ]
}

export const mockInterviewFeedback = {
  overall: {
    score: 85,
    recommendation: "Strong Hire",
    summary: "Candidate demonstrated solid technical skills and good understanding of AI integration patterns. Would be a valuable addition to the team with some minor areas for growth."
  },
  strengths: [
    {
      area: "Technical Knowledge",
      feedback: "Strong understanding of full-stack development and AI API integration patterns.",
      examples: [
        "Correctly identified need for queue system in high-volume scenarios",
        "Good grasp of caching strategies for AI responses",
        "Demonstrated knowledge of modern web frameworks"
      ]
    },
    {
      area: "Problem Solving",
      feedback: "Systematic approach to breaking down complex problems.",
      examples: [
        "Used step-by-step approach for system design question",
        "Considered edge cases without prompting",
        "Thought about scalability from the start"
      ]
    },
    {
      area: "Communication",
      feedback: "Clear explanations of technical concepts.",
      examples: [
        "Used analogies effectively to explain complex ideas",
        "Asked clarifying questions before diving into solutions",
        "Structured responses logically"
      ]
    }
  ],
  areasToImprove: [
    {
      area: "System Design Depth",
      feedback: "Could go deeper into distributed systems concepts.",
      suggestions: [
        "Study microservices patterns and when to use them",
        "Learn more about message queuing systems (RabbitMQ, Kafka)",
        "Practice more complex system design scenarios"
      ]
    },
    {
      area: "Cost Optimization",
      feedback: "Limited discussion of cost-efficiency in AI implementations.",
      suggestions: [
        "Research strategies for optimizing AI API usage",
        "Understand token limits and pricing models",
        "Learn about model selection trade-offs"
      ]
    },
    {
      area: "Testing Strategies",
      feedback: "Brief mention of testing, could elaborate more.",
      suggestions: [
        "Discuss unit testing for AI-integrated features",
        "Consider mocking strategies for AI APIs",
        "Think about testing non-deterministic outputs"
      ]
    }
  ],
  interviewerNotes: {
    technicalRound: "Solid coding skills. Implemented the API endpoint cleanly with good error handling. Could improve by considering rate limiting from the start.",
    systemDesign: "Good high-level architecture. Understood the importance of async processing. Would benefit from more experience with large-scale systems.",
    behavioral: "Great examples from past projects. Showed growth mindset and eagerness to learn. Team fit looks positive.",
    overall: "Candidate shows strong potential. While not senior-level yet, demonstrates solid foundation and learning ability. Would recommend for mid-level position with growth path."
  },
  nextSteps: [
    "Practice more system design problems, especially those involving AI/ML services",
    "Build a side project that handles high-volume AI API requests",
    "Contribute to open source projects using AI APIs",
    "Read 'Designing Data-Intensive Applications' for distributed systems knowledge",
    "Set up a mock interview with a senior engineer friend"
  ],
  resources: [
    {
      title: "System Design Interview Guide",
      type: "Course",
      link: "educative.io/system-design"
    },
    {
      title: "Building AI-Powered Applications",
      type: "Blog Series",
      link: "example.com/ai-apps"
    },
    {
      title: "Cost-Effective AI Integration Patterns",
      type: "Video",
      link: "youtube.com/ai-patterns"
    }
  ]
}

export const mockCompletedInterviews = [
  {
    id: "int1",
    company: "ChatFlow AI",
    position: "Senior Full-Stack Engineer",
    date: "2025-07-30",
    score: 88,
    result: "Passed - Next round scheduled",
    feedback: "Strong technical skills, good AI knowledge"
  },
  {
    id: "int2",
    company: "DataSense Analytics",
    position: "Backend Engineer",
    date: "2025-07-28",
    score: 82,
    result: "Passed - Waiting for response",
    feedback: "Solid backend experience, needs more distributed systems knowledge"
  },
  {
    id: "int3",
    company: "VoiceAI Platform",
    position: "Frontend Engineer",
    date: "2025-07-25",
    score: 91,
    result: "Passed - Final round scheduled",
    feedback: "Excellent UI/UX sense, strong React skills"
  }
]

export const mockLearningResources = [
  {
    category: "AI Integration",
    resources: [
      "OpenAI API Documentation and Best Practices",
      "Building Production-Ready AI Applications",
      "Prompt Engineering for Developers"
    ]
  },
  {
    category: "System Design",
    resources: [
      "Designing AI-Powered Microservices",
      "Scaling Machine Learning APIs",
      "Caching Strategies for AI Responses"
    ]
  },
  {
    category: "Full-Stack Development",
    resources: [
      "Next.js 14 with AI Features",
      "Real-time Applications with WebSockets",
      "Building Accessible AI Interfaces"
    ]
  }
]

// Mock Custom Jobs for Demo
export const mockCustomJobs = [
  {
    id: "custom-1",
    title: "Senior AI Engineer",
    company: "Anthropic",
    companyId: "custom-anthropic",
    location: "San Francisco, CA (Remote OK)",
    type: "Full-time",
    experience: "5+ years",
    salary: "$180k - $250k + equity",
    posted: "1 day ago",
    applicants: "12",
    snippet: "Join our team building next-generation AI systems. Work on constitutional AI, safety research, and scaling language models...",
    requirements: [
      "PhD in Computer Science, AI, or related field",
      "5+ years experience in machine learning",
      "Deep understanding of transformer architectures",
      "Experience with large-scale distributed training",
      "Strong Python and PyTorch skills"
    ],
    responsibilities: [
      "Design and implement novel AI architectures",
      "Conduct research on AI safety and alignment",
      "Scale training infrastructure for large language models",
      "Collaborate with research and product teams",
      "Publish research findings at top-tier conferences"
    ],
    niceToHave: [
      "Publications in NeurIPS, ICML, or ICLR",
      "Experience with constitutional AI",
      "Background in AI safety research",
      "Open source contributions to ML frameworks"
    ],
    techStack: ["Python", "PyTorch", "CUDA", "Distributed Systems", "Research"],
    isCustom: true,
    addedDate: "2025-07-31"
  },
  {
    id: "custom-2",
    title: "Full-Stack Developer",
    company: "Midjourney",
    companyId: "custom-midjourney",
    location: "Remote (US)",
    type: "Full-time", 
    experience: "3+ years",
    salary: "$140k - $180k + equity",
    posted: "3 days ago",
    applicants: "28",
    snippet: "Build the web platform that enables millions of users to create AI-generated art. Work on scalable systems handling billions of image generations...",
    requirements: [
      "3+ years full-stack development experience",
      "Expert in React and Node.js",
      "Experience with high-traffic web applications",
      "Strong understanding of image processing",
      "Database optimization skills"
    ],
    responsibilities: [
      "Build user-facing features for image generation platform",
      "Optimize backend systems for handling millions of requests",
      "Implement real-time collaboration features",
      "Work on payment and subscription systems",
      "Improve image processing pipeline performance"
    ],
    niceToHave: [
      "Experience with image/video processing",
      "Knowledge of CDN and caching strategies",
      "Background in creative tools",
      "Understanding of generative AI models"
    ],
    techStack: ["React", "Node.js", "Python", "PostgreSQL", "Redis", "AWS", "Docker"],
    isCustom: true,
    addedDate: "2025-07-30"
  },
  {
    id: "custom-3",
    title: "ML Platform Engineer",
    company: "Scale AI",
    companyId: "custom-scale",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    experience: "4+ years",
    salary: "$160k - $220k + equity", 
    posted: "1 week ago",
    applicants: "45",
    snippet: "Build the infrastructure that powers AI model training and evaluation at scale. Work with the world's leading AI companies...",
    requirements: [
      "4+ years platform/infrastructure experience",
      "Strong experience with Kubernetes and Docker",
      "Python and distributed systems expertise",
      "ML model deployment experience",
      "Data pipeline and workflow orchestration"
    ],
    responsibilities: [
      "Design scalable ML training infrastructure",
      "Build tools for model evaluation and testing",
      "Implement data processing pipelines",
      "Optimize GPU cluster utilization",
      "Create developer tools for ML workflows"
    ],
    niceToHave: [
      "Experience with ML frameworks (PyTorch, TensorFlow)",
      "Knowledge of GPU programming",
      "Background in data labeling platforms",
      "Kubernetes operator development"
    ],
    techStack: ["Python", "Kubernetes", "Docker", "PyTorch", "Airflow", "GCP", "Terraform"],
    isCustom: true,
    addedDate: "2025-07-29"
  }
]

// Mock custom company data to support custom jobs
export const mockCustomCompanies = [
  {
    id: "custom-anthropic",
    name: "Anthropic",
    description: "AI safety company focused on building safe, beneficial, and understandable AI systems",
    location: "San Francisco, CA",
    size: "100-200",
    stage: "Series B",
    founded: "2021",
    techStack: ["Python", "PyTorch", "CUDA", "Distributed Systems", "Research"],
    aiTech: ["Constitutional AI", "Large Language Models", "AI Safety"],
    website: "anthropic.com",
    logo: "🤖"
  },
  {
    id: "custom-midjourney",
    name: "Midjourney",
    description: "AI-powered creative platform enabling users to generate stunning visual art and imagery",
    location: "San Francisco, CA",
    size: "50-100",
    stage: "Private",
    founded: "2021",
    techStack: ["React", "Node.js", "Python", "PostgreSQL", "Redis", "AWS"],
    aiTech: ["Generative AI", "Image Generation", "DALL-E", "Stable Diffusion"],
    website: "midjourney.com",
    logo: "🎨"
  },
  {
    id: "custom-scale",
    name: "Scale AI",
    description: "Data platform for AI, providing high-quality training data and model evaluation services",
    location: "San Francisco, CA", 
    size: "500-1000",
    stage: "Series E",
    founded: "2016",
    techStack: ["Python", "Kubernetes", "Docker", "PyTorch", "Airflow", "GCP"],
    aiTech: ["Data Labeling", "Model Evaluation", "ML Infrastructure"],
    website: "scale.com",
    logo: "📊"
  }
]