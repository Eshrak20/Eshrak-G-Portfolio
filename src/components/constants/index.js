import {
  apsis,
  tib,
  mysoft,
  jivta,
  vintage,
  softr,
  tailwind,
  web1,
  backend1,
  ml_dl,
  android,
  fbic,
  digitalWallet,
  Electron_bd,
  Shopnoneer,
  Syntaxx,
  mohammdpurGovt,
  uiu,
  jagnnat,
  NewHorizon,
  buet,
  avatar,
  nodejs,
  reactjs,
  redux,
  postgresql,
  javascript,
  typescript,
  expressjs,
  graphql,
  prisma,
} from "../../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web1,
  },
  {
    title: "Frontend Developer",
    icon: android,
  },
  {
    title: "Backend Developer",
    icon: backend1,
  },
  {
    title: "MERN Stack Specialist",
    icon: ml_dl,
  },
];

const technologies = [
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Express.js",
    icon: expressjs,
  },
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  // {
  //   title: "Part Full Stack Developer (Laravel & React JS Specialist)",
  //   company_name: "Innovation Lab 360",
  //   icon: fbic, // replace with actual icon variable
  //   iconBg: "#E6DEDD",
  //   date: "Nov 2024 - Present",
  //   points: [
  //     "Developing full-stack applications using Laravel and React.js",
  //     "Working on real-world projects for Bangladeshi government, MNCs, and private companies",
  //     "Collaborating with cross-functional teams to deliver software solutions",
  //   ],
  // },
  {
    title: "Learning Dynamic Web Application Developer (React & Node)",
    company_name: "Programming Hero",
    icon: fbic, // replace with actual icon variable
    iconBg: "#E6DEDD",
    date: "Mar 2025 - Present",
    points: [
      "Strengthening full-stack skills through practical, hands-on projects",
      "Working with TypeScript, Express, MongoDB, Mongoose, SQL, PostgreSQL, Prisma",
      "Building industry-standard applications and gaining job-ready experience",
    ],
  },
];

const educations = [
  {
    title: "Computer Science (6th Semester)",
    company_name: "Daffodil Polytechnic Institute",
    icon: fbic, // replace with actual icon variable
    iconBg: "#03162e",
    date: "Jan 2023 - Jan 2027",
    points: [
      "Member & Programming Leader at DPI Computer and Programming Club",
      "Mentoring students, organizing coding sessions, and leading collaborative projects",
      "Building real-world problem-solving skills through hands-on learning and team innovation",
    ],
  },
  {
    title: "Next Level Web Development (Batch-5)",
    company_name: "Programming Hero",
    icon: fbic, // replace with actual icon variable
    iconBg: "#03162e",
    date: "Mar 2025 - Present",
    points: [
      "Hands-on learning with TypeScript, Express, MongoDB, SQL, PostgreSQL, Prisma",
      "Building industry-standard applications to strengthen full-stack development skills",
    ],
  },
  {
    title: "Student",
    company_name: "Phitron",
    icon: fbic, // replace with actual icon variable
    iconBg: "#03162e",
    date: "Sep 2023 - Mar 2024",
    points: [
      "Learned fundamental data structures, algorithms, and programming",
      "Focused on problem-solving and simulation exercises using C and C++",
    ],
  },
  {
    title: "S.S.C, Science",
    company_name: "Birshreshtha Munshi Abdur Rouf Public College",
    icon: fbic, // replace with actual icon variable
    iconBg: "#03162e",
    date: "Jan 2020 - Nov 2022",
    points: [
      "Graduated with GPA 4.89",
      "Focused on leadership and management skills",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Great developer to work with. Eshrakis an excellent developer with great communication skills and impressive working experience. He consistently delivered quality work on time.",
    name: "Luis",
    designation: "Project Manager",
    company: "Freelance Client",
    image: avatar,
  },
  {
    testimonial:
      "Eshrakis an experienced API developer. I am really happy to work with him. He has done the job right and on time, exceeding my expectations with his backend skills.",
    name: "Luis",
    designation: "Technical Lead",
    company: "Colombia Startup",
    image: avatar,
  },
  {
    testimonial:
      "He understood the tasks that should be done and successfully applied his knowledge to provide the best solution. His experience in Spring Boot and RESTful APIs is clearly reflected in his work.",
    name: "Rifat Ahmed",
    designation: "Software Consultant",
    company: "Pennsylvania, USA",
    image: avatar,
  },
  {
    testimonial:
      "Shohag is a reliable and highly skilled developer. From UI design with Angular to backend development in PHP and ASP.NET MVC, he handles full-stack tasks with ease and professionalism.",
    name: "Fardin vaie",
    designation: "Senior Developer",
    company: "Freelance Projects, USA",
    image: avatar,
  },
];

const projects = [
  {
    name: "Digital Wallet",
    description:
      "Digital Wallet Management is designed to make money transactions easier, safer, and faster. From secure savings to instant transfers, our service is built to empower both users and agents with seamless financial solutions.For every 1000 Taka or above cash-out, a service fee of 20 Taka applies. This fee is divided equally between the Agent and the Admin.",
    tags: [
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: digitalWallet,
    source_code_link: "https://github.com/Eshrak20/Digital-Wallet-React-Redux",
    live_preview_link: "https://digital-wallet-react-redux.netlify.app/",
  },
  {
    name: "Electron Engineering and Power Services",
    description:
      "Electron Engineering and Power Services is a corporate website for a company specializing in electronic equipment and power solutions. It showcases products, services, and expertise with a clean, responsive design and an easy inquiry system for client quotes and info.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "inertia",
        color: "green-text-gradient",
      },
    ],
    image: Electron_bd,
    source_code_link: "https://github.com/Eshrak20/electronbdProject",
    live_preview_link: "https://electron-bd.com/",
  },
  {
    name: "Shopnoo Neer Web",
    description:
      "Shopnooneer is a real estate app designed to help you find detailed information about plots, flats, and various properties near you. Whether you're looking to buy or explore available properties in your area, the app provides accurate listings, pricing, and location details. With an easy-to-use interface, Shopnooneer makes property searching simple, fast.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
    ],
    image: Shopnoneer,
    source_code_link: "https://github.com/mahbub-shohag/shopnoneer_client",
    live_preview_link: "https://shopnoneer.com/",
  },
  {
    name: "Syntax Soft System",
    description:
      "Syntax Soft System is the official website of an innovative software company offering digital solutions. It showcases services, projects, team expertise, and client testimonials with a modern, responsive design. The site also features career listings and a contact form for easy client engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: Syntaxx,
    source_code_link: "https://github.com/Eshrak20/SyntaxSoftProject",
    live_preview_link: "https://syntaxss.com",
  },
];

export {
  services,
  technologies,
  experiences,
  educations,
  testimonials,
  projects,
};
