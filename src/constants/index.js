import {
  backend,
  android,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  uiux,
  opensource,
  embeded,
  VLSI,
  prompt,
  crm,
  medisearch,
  procase
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: uiux,
  },
  {
    title: "Android Studio",
    icon: android,
  },
  {
    title: "Embeded Systems",
    icon: embeded,
  },
  {
    title: "VLSI",
    icon: VLSI,
  },
  {
    title: "Opensource",
    icon: opensource,
  },
  {
    title: "Promt Engineer",
    icon: prompt,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
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
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "ThreeJS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Embedded Systems and Robotics",
    company_name: "Robocoupler",
    icon: meta, //amazon
    iconBg: "white",
    date: "May 2023 - Sep 2023",
    points: [
      "Interned in Embedded Systems and Robotics.",
      "Learned hardware-software integration.",
      "Studied control algorithms.",
      "Gained experience in firmware programming",
      "Contributed to real-world projects.",
      "Worked collaboratively in a team environment."
    ],
  },
  {
    title: "Internship in Web Development",
    company_name: "Google Developers Group by devTown",
    icon: tesla,
    iconBg: "white",
    date: "Aug 2022 - Aug 2022",
    points: [
      "Certified by Google Developers Group by DevTown.",
      "Honed skills through workshops, hackathons, and tech events.",
      "Utilized Google's tools for innovative software solutions",
      "Demonstrated dedication to staying at the cutting edge of technology.",
      "Committed to delivering impactful solutions in the ever-evolving digital landscape.",
    ],
  },
  {
    title: "Internship in Frontend Web Development",
    company_name: "Microsoft Learn Student Ambassadors ",
    icon: shopify,
    iconBg: "white",
    date: "Jan 2022 - Jan 2022",
    points: [
      "Completed AWS Academy Cloud Foundations.",
      "Gained hands-on experience in cloud computing.",
      "Learned about various AWS services and infrastructure management.",
      "Collaborated on real-world projects.",
      "Honed skills in cloud architecture, automation, and scalability.",
      "Solidified commitment to cloud technology and its role in modern IT solutions.",
    ],
  },
  {
    title: "OpenSource Contribution",
    company_name: "Continue",
    icon: opensource,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Mar 2024",
    points: [
      "Developed a native app for continue.dev, an open-source VS Code co-pilot.",
      "Demonstrated full OS integration beyond VS Code or JetBrains.",
      "Attracted attention from potential employers due to the innovative project.",
    ],
  },
  {
    title: "OpenSource Contribution",
    company_name: "MediSearch",
    icon: opensource,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Mar 2024",
    points: [
      "Developed a full-stack solution for Medisearch.io.",
      "Integrated LLM (Language Model) for enhanced functionality.",
      "Impressed stakeholders with a compelling demo.",

    ],
  },
];

const testimonials = [
  {
    testimonial: "How to set up continue with Google Gemini API",
    name: "Nate Sesti",
    designation: "CFO",
    company: "continue",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1712924327882/9d1c5b65-e5d0-43bb-8d5f-d8d31e04545f.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    testimonial: "Kubernetes Architecture and Components.",
    name: "Michal pandáy",
    designation: "Founder",
    company: "Mediserach",
    image: "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/GSiEeoHcNTQ/upload/6f4c34e0984876bb8effc3f1c64e2b1f.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    testimonial: "Getting started with Onedoc",
    name: "Auguste",
    designation: "CO-Founder",
    company: "FileForge",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1714141408773/4b57ce4e-cf83-45c6-aca0-a8d1f5d0b57e.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
];

const projects = [
  {
    name: "Customer Relationship Management",
    description:
      "Enhanced clientmanagement bydeveloping anddeploying a CRM application, stream lining operations and improving business efficiency.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
      
    ],
    image: crm,
    source_code_link: "https://github.com/KarthikeyaKollu/dashboard-react.git",
    Project_link: "https://github.com/KarthikeyaKollu/dashboard-react.git",
  },
  {
    name: "MediSearch",
    description:
      "Developed a comprehensive chat interface for MediSearch,integrating cutting-edgeAI technology to deliver accurate and science-based responses to medical inquiries and transformed boring task into an engaging and efficient experience.",
tags: [
  {
    name: "ReactJS",
    color: "blue-text-gradient",
  },
  {
    name: "Restapi",
    color: "green-text-gradient",
  },
  {
    name: "scss",
    color: "pink-text-gradient",
  },
],
  image: medisearch,
    source_code_link: "https://github.com/KarthikeyaKollu/medisearch.git",
      Project_link: "https://github.com/KarthikeyaKollu/medisearch.git",
  },
{
  name: "ProCase",
    description:
  "Engineered a robust hardware and software integration system for health monitoring, incorporating sensors togather real-time data on vital signs such as SpO2, heart rate, and temperature culminating in the health monitoring product.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "TranslatorAPI",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
      image: procase,
        source_code_link: "https://github.com/KarthikeyaKollu/smartcase.git",
          Project_link: "https://github.com/KarthikeyaKollu/smartcase.git",
  },
];
export { services, technologies, experiences, testimonials, projects };
