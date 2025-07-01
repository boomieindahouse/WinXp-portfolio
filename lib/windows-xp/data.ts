export interface PortfolioItem {
  id: string;
  name: string;
  type: "folder" | "image" | "pdf" | "text" | "project";
  iconPath?: string;
  url?: string;
  image?: string;
  description?: string;
  technologies?: string[];
  features?: string[];
  text?: string;
  children?: PortfolioItem[];
  path?: string[];
}

export const desktopIcons: PortfolioItem[] = [
  {
    id: "my-portfolio",
    name: "My Portfolio",
    type: "folder",
    iconPath: "/icons/folder.png",
    path: [],
  },
  {
    id: "projects",
    name: "Projects",
    type: "folder",
    iconPath: "/icons/project.png",
    path: ["Projects"],
  },
  {
    id: "resume",
    name: "Resume",
    type: "pdf",
    iconPath: "/icons/iepdf.png",
    url: "https://elboomie.vercel.app/my-resume.pdf",
    path: ["Resume"],
  },
  {
    id: "about-me",
    name: "About Me",
    type: "folder",
    iconPath: "/icons/agent.png",
    path: ["About Me"],
  },
  {
    id: "recycle-bin",
    name: "Recycle Bin",
    type: "folder",
    iconPath: "/icons/bin.png",
  },
  {
    id: "internet-explorer",
    name: "Internet Explorer",
    type: "folder",
    iconPath: "/icons/ie.png",
  },
];

export const portfolioData: PortfolioItem[] = [
  {
    id: "projects-folder",
    name: "Projects",
    type: "folder",
    iconPath: "/icons/project.png",
    children: [
      {
        id: "project-1",
        name: "E-Commerce App",
        type: "project",
        iconPath: "/icons/projectdoc.png",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
        description: "A fully functional e-commerce application with product listings, shopping cart, and checkout process.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
        features: [
          "User authentication and authorization",
          "Product search and filtering",
          "Shopping cart management",
          "Payment processing with Stripe",
          "Order history and tracking"
        ],
        url: "https://example.com/ecommerce"
      },
      {
        id: "project-2",
        name: "Movie Recommend",
        type: "project",
        iconPath: "/icons/projectdoc.png",
        image: "https://raw.githubusercontent.com/boomieindahouse/MovieApp/refs/heads/master/screenshots/genre.png",
        description: "An app for movie recommendations and categorizing movies by genre using React Native and the TMDB API.",
        technologies: ["JavaScript", "TMDB API", "React Native", "Expo"],
        features: [
          "Display Popular Movies on the home screen",
          "Select a movie Genre and display movies in that genre",
          "View detailed information about each movie, such as synopsis, ratings, and more",
        ],
        url: "https://github.com/boomieindahouse/MovieApp"
      },
      {
        id: "project-3",
        name: "Meeting Creative",
        type: "project",
        iconPath: "/icons/projectdoc.png",
        image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg",
        description: "A task management application to organize and track personal and professional tasks.",
        technologies: ["React", "Redux", "Firebase", "Material UI"],
        features: [
          "Task creation and editing",
          "Task categorization and priority levels",
          "Due date management",
          "User authentication",
          "Data synchronization across devices"
        ],
        url: "https://example.com/taskmanager"
      },
      {
        id: "project-4",
        name: "VU University",
        type: "project",
        iconPath: "/icons/projectdoc.png",
        image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg",
        description: "A task management application to organize and track personal and professional tasks.",
        technologies: ["React", "Redux", "Firebase", "Material UI"],
        features: [
          "Task creation and editing",
          "Task categorization and priority levels",
          "Due date management",
          "User authentication",
          "Data synchronization across devices"
        ],
        url: "https://example.com/taskmanager"
      },
      {
        id: "project-5",
        name: "Tonnam Hotel",
        type: "project",
        iconPath: "/icons/projectdoc.png",
        image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg",
        description: "A task management application to organize and track personal and professional tasks.",
        technologies: ["React", "Redux", "Firebase", "Material UI"],
        features: [
          "Task creation and editing",
          "Task categorization and priority levels",
          "Due date management",
          "User authentication",
          "Data synchronization across devices"
        ],
        url: "https://example.com/taskmanager"
      },
      {
        id: "project-6",
        name: "Chuaykai",
        type: "project",
        iconPath: "/icons/projectdoc.png",
        image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg",
        description: "A task management application to organize and track personal and professional tasks.",
        technologies: ["React", "Redux", "Firebase", "Material UI"],
        features: [
          "Task creation and editing",
          "Task categorization and priority levels",
          "Due date management",
          "User authentication",
          "Data synchronization across devices"
        ],
        url: "https://example.com/taskmanager"
      },
      {
        id: "project-7",
        name: "Apureda Thailand",
        type: "project",
        iconPath: "/icons/projectdoc.png",
        image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg",
        description: "A task management application to organize and track personal and professional tasks.",
        technologies: ["React", "Redux", "Firebase", "Material UI"],
        features: [
          "Task creation and editing",
          "Task categorization and priority levels",
          "Due date management",
          "User authentication",
          "Data synchronization across devices"
        ],
        url: "https://example.com/taskmanager"
      },
      {
        id: "project-8",
        name: "Kaspersky x Icom",
        type: "project",
        iconPath: "/icons/projectdoc.png",
        image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg",
        description: "A task management application to organize and track personal and professional tasks.",
        technologies: ["React", "Redux", "Firebase", "Material UI"],
        features: [
          "Task creation and editing",
          "Task categorization and priority levels",
          "Due date management",
          "User authentication",
          "Data synchronization across devices"
        ],
        url: "https://example.com/taskmanager"
      },
      {
        id: "project-9",
        name: "Portfolio v.2",
        type: "project",
        iconPath: "/icons/projectdoc.png",
        image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg",
        description: "A task management application to organize and track personal and professional tasks.",
        technologies: ["React", "Redux", "Firebase", "Material UI"],
        features: [
          "Task creation and editing",
          "Task categorization and priority levels",
          "Due date management",
          "User authentication",
          "Data synchronization across devices"
        ],
        url: "https://example.com/taskmanager"
      }
    ]
  },
  {
    id: "about-me-folder",
    name: "About Me",
    type: "folder",
    iconPath: "/icons/agent.png",
    children: [
      {
        id: "bio",
        name: "Biography.txt",
        type: "text",
        iconPath: "/icons/notepad.png",
        text: "I am a passionate full-stack developer with expertise in modern web technologies. With over 5 years of experience, I've worked on a diverse range of projects from e-commerce platforms to real-time data visualization applications.\n\nMy technical skills include:\n- Frontend: React, Vue.js, Angular, HTML5, CSS3, JavaScript/TypeScript\n- Backend: Node.js, Express, Python, Django, Ruby on Rails\n- Databases: MongoDB, PostgreSQL, MySQL, Firebase\n- DevOps: Docker, AWS, CI/CD pipelines\n\nI enjoy solving complex problems and creating user-friendly applications that deliver exceptional experiences. When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new technologies."
      },
      {
        id: "skills",
        name: "Skills.txt",
        type: "text",
        iconPath: "/windows-xp/icons/text.png",
        text: "Technical Skills:\n\n- Programming Languages: JavaScript, TypeScript, Python, PHP, HTML5, CSS3\n- Frontend Frameworks: React, Vue.js, Angular, Next.js\n- UI/UX: Tailwind CSS, Material UI, Bootstrap, SASS\n- Backend: Node.js, Express, Django, Laravel\n- Databases: MongoDB, PostgreSQL, MySQL, Redis\n- DevOps: Docker, Kubernetes, AWS, Azure, GitLab CI/CD\n- Testing: Jest, React Testing Library, Cypress\n- Mobile: React Native\n\nSoft Skills:\n\n- Problem-solving\n- Team collaboration\n- Communication\n- Time management\n- Adaptability\n- Project management"
      },
      {
        id: "profile-pic",
        name: "Profile Photo",
        type: "image",
        iconPath: "/icons/gallery.png",
        url: "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg"
      },
      {
        id: "education",
        name: "Education.txt",
        type: "text",
        iconPath: "/icons/notepad.png",
        text: "Education:\n\nBachelor of Science in Computer Science\nUniversity of Technology\n2012 - 2016\n\nCertifications:\n\n- AWS Certified Developer - Associate\n- MongoDB Certified Developer\n- Google Professional Cloud Developer\n- React Certification - Advanced Concepts"
      }
    ]
  },
  {
    id: "gallery-folder",
    name: "Image Gallery",
    type: "folder",
    iconPath: "/icons/gallery.png",
    children: [
      {
        id: "image-1",
        name: "Project Screenshot 1",
        type: "image",
        iconPath: "/windows-xp/icons/image.png",
        url: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      },
      {
        id: "image-2",
        name: "Project Screenshot 2",
        type: "image",
        iconPath: "/windows-xp/icons/image.png",
        url: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg"
      },
      {
        id: "image-3",
        name: "Project Screenshot 3",
        type: "image",
        iconPath: "/windows-xp/icons/image.png",
        url: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg"
      },
    ]
  },
  {
    id: "resume-file",
    name: "Resume",
    type: "pdf",
    iconPath: "/icons/iepdf.png",
    url: "https://example.com/resume.pdf"
  },
  {
    id: "contact-info",
    name: "Contact Info.txt",
    type: "text",
    iconPath: "/icons/contact.png",
    text: "Contact Information:\n\nEmail: developer@example.com\nPhone: (123) 456-7890\n\nSocial Media:\n- LinkedIn: linkedin.com/in/developer\n- GitHub: github.com/developer\n- Twitter: @developer\n\nPlease feel free to reach out with any inquiries about projects, collaborations, or job opportunities."
  }
];