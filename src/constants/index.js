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
    name: "CSS 3",
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
    name: "React JS",
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
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
    title: "Internship in Cloud Computing",
    company_name: "Amazon Web Services",
    icon: starbucks, //amazon
    iconBg: "white",
    date: "june 2022 - july 2022",
    points: [
      "During my AWS internship, I actively worked with a variety of AWS services, managing cloud resources and handling data with services like EC2, S3, and RDS.",
      "My internship allowed me to develop strong cloud architecture skills, designing scalable and resilient cloud infrastructures that met the specific requirements of our projects.",
      "This internship experience reinforced my dedication to cloud technology as a driving force behind modern IT solutions, motivating me to continue exploring its potential in future endeavors.",
    ],
  },
  {
    title: "Internship in Web Development",
    company_name: "Google Developers Group",
    icon: tesla,
    iconBg: "white",
    date: "Aug 2022 - Sep 2022",
    points: [
      "I have earned a prestigious certification from Google Developers Group through DevTown, validating my proficiency in utilizing Google's tools and technologies.",
      "My involvement in various tech events allowed me to engage with the tech community, exchange ideas, and gain insights into emerging trends and best practices.",
      "This certification underscores my commitment to staying at the forefront of technology, ensuring that I can consistently deliver impactful solutions in the dynamic and ever-evolving digital landscape.",
    ],
  },
  {
    title: "Internship in Frontend Web Development",
    company_name: "Microsoft Learn Student Ambassadors ",
    icon: shopify,
    iconBg: "white",
    date: "Jan 2022 - Jan 2022",
    points: [
      " hold the prestigious title of a Microsoft Learn Student Ambassador, which signifies my dedication to technology education and innovation advocacy.",
      " actively engage with both peers and educators, bridging the gap between students and industry professionals, and fostering an environment of collaboration and learning.",
      "facilitate workshops that enable students to gain practical experience with the latest technologies, helping them build valuable skills that are relevant to today's tech landscape.",
    ],
  },
  {
    title: "Internship in Real Time Embedded Systems",
    company_name: "Robocoupler",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Mar 2023",
    points: [
      "Gain hands-on experience in integrating hardware and software components, ensuring seamless communication and functionality within embedded systems.",
      "Hone my skills in developing control algorithms that enabled precise and efficient operation of robotic systems, enhancing their capabilities.",
      "Actively contribute to real-world projects as part of a collaborative team, applying my knowledge and skills to solve practical challenges in the field of robotics and embedded systems.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Kamaji: Scaling Kubernetes with Ease",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "Kubernetes Architecture and Components.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "Navigating the DevOps Roadmap",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "DisneyDreams",
    description:
      "a new entertainment project delivering the enchantment of Disney+Hotstar with a world of movies and shows, making magic accessible on your screens.",
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
    image: carrent,
    source_code_link: "https://github.com/",
    Project_link: "",
  },
  {
    name: "ClimaScope",
    description:
      "The convenience of staying informed with real-time weather updates, precise forecasts, and personalized notifications tailored to your location, all at your fingertips.",
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
    image: jobit,
    source_code_link: "https://github.com/",
    Project_link: "",
  },
  {
    name: "Language-Translator",
    description:
      "Language Translator with Auto Language Detection! Say bye to language obstacles. Our  technology automatically identifies the language you're speaking or typing.",
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
    image: tripguide,
    source_code_link: "https://github.com/",
    Project_link: "",
  },
];
export { services, technologies, experiences, testimonials, projects };
