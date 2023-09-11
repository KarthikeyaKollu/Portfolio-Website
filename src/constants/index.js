import {
  mobile,
  backend,
  android,
  creator,
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
  prompt
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
    title: "VSLI",
    icon: VLSI,
  },
  {
    title: "Opensource",
    icon:opensource,
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
    title: "Student Intern (AWS)",
    company_name: "Amazon Web Services",
    icon: starbucks,
    iconBg: "#383E56",
    date: "june 2022 - july 2022",
    points: [
      "During my AWS internship, I actively worked with a variety of AWS services, managing cloud resources and handling data with services like EC2, S3, and RDS.",
      "My internship allowed me to develop strong cloud architecture skills, designing scalable and resilient cloud infrastructures that met the specific requirements of our projects.",
      "This internship experience reinforced my dedication to cloud technology as a driving force behind modern IT solutions, motivating me to continue exploring its potential in future endeavors.",
     
    ],
  },
  {
    title: "Student Intern",
    company_name: "Google Developers Group",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Sep 2022",
    points: [
      "I have earned a prestigious certification from Google Developers Group through DevTown, validating my proficiency in utilizing Google's tools and technologies.",
      "My involvement in various tech events allowed me to engage with the tech community, exchange ideas, and gain insights into emerging trends and best practices.",
      "This certification underscores my commitment to staying at the forefront of technology, ensuring that I can consistently deliver impactful solutions in the dynamic and ever-evolving digital landscape.",

    ],
  },
  {
    title: "Student Intern",
    company_name: "Microsoft Learn Student Ambassadors ",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2022",
    points: [
      " hold the prestigious title of a Microsoft Learn Student Ambassador, which signifies my dedication to technology education and innovation advocacy.",
      " actively engage with both peers and educators, bridging the gap between students and industry professionals, and fostering an environment of collaboration and learning.",
      "facilitate workshops that enable students to gain practical experience with the latest technologies, helping them build valuable skills that are relevant to today's tech landscape.",

    ],
  },
  {
    title: "Intern in Real Time Embedded",
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
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
    Project_link: "https://example.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    Project_link: "https://example.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    Project_link: "https://example.com/",
  },

];
export { services, technologies, experiences, testimonials, projects,  };
