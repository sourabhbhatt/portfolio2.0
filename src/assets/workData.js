import storetodoorweb from "./Projects/storetodoorweb.png"; //web
import storetodoor from "./Projects/storetodoor1.jpg"; // app and web
import storetodoor2 from "./Projects/storetodoor2.jpg";
import bookCash from "./Mywork/bookCash.png";
import studyIq from "./Mywork/studyIq.png";
import MGB from "./Projects/mgb.jpg"; // app and web
import andgouser from "./Projects/andgouser.jpg";
import andgodriver from "./Projects/andgo1.jpg"; // mobile
import shofar from "./Projects/shofar2.jpg";
import portfolio from "./Projects/portfolio.png";
import amz from "./Projects/amz.png";
import omShantiStore from "./Projects/omShantiStore.jpg";
import socialExchange1 from "./Projects/socialExchange1.jpg"; // mobile
import uwanxt from "./Projects/uwanxt.jpg";
import local from "./Projects/local.jpg";
import bijnis from "./Bijnis.PNG";

export const mobileProjects = [
  {
    name: "Bijnis",
    slug: "bijnis",
    images: [bijnis, bijnis],
    projects: [
      {
        title: "Bijnis – Sourcing & Wholesale Marketplace",
        description:
          "A powerful sourcing app connecting retailers and manufacturers, enabling direct bulk ordering and discovery of suppliers. Focused on performance, analytics, and seamless UX.",
        android:
          "https://play.google.com/store/apps/details?id=com.shoekonnect.bizcrum",
        ios: "https://apps.apple.com/in/app/bijnis-sourcing-app/id6464299974",
        web: "",
        github: "",
        imgPaths: ["Projects/bijnis_app.jpg"],
        technologies: [
          "React Native",
          "Redux Toolkit",
          "Node.js",
          "AWS S3",
          "MongoDB",
          "Tailwind CSS",
          "CleverTap",
          "Branch.io",
          "CI/CD",
          "WebSocket",
          "Deep Linking",
        ],
        languages: ["TypeScript", "JavaScript", "SCSS"],
      },
    ],
  },
  {
    name: "Uwanxt",
    slug: "uwanxt",
    images: [uwanxt],
    projects: [
      {
        title: "Uwanxt – Smart Home Controller",
        description:
          "Control your smart home devices using a single mobile interface powered by IoT and MQTT protocols.",
        android: "",
        ios: "",
        web: "",
        github: "",
        imgPaths: ["Projects/andgouser.jpg"],
        technologies: ["React Native", "IoT", "MQTT"],
        languages: ["JavaScript", "CSS"],
      },
    ],
  },
  {
    name: "Store To Door – User",
    slug: "storetodoor-user",
    images: [storetodoor],
    projects: [
      {
        title: "Store To Door – User App",
        description:
          "A grocery and utility delivery app where users can schedule pickups and deliveries straight to their door.",
        android:
          "https://play.google.com/store/apps/details?id=com.storetodooruser",
        ios: "",
        web: "",
        github: "",
        imgPaths: ["Projects/storetodoor1.jpg"],
        technologies: ["React Native", "Firebase", "Vue.js", "Node.js"],
        languages: ["JavaScript", "TypeScript"],
      },
    ],
  },
  {
    name: "My Glove Box",
    slug: "mgb",
    images: [MGB],
    projects: [
      {
        title: "My Glove Box – Personal Document Organizer",
        description:
          "Manage your vehicles, insurance, licenses, tickets, and certificates in one secure mobile dashboard.",
        android: "",
        ios: "",
        web: "",
        github: "",
        imgPaths: ["Projects/storetodoor1.jpg"],
        technologies: ["React Native", "Firebase", "Vue.js", "Node.js"],
        languages: ["JavaScript", "TypeScript"],
      },
    ],
  },
  {
    name: "Social Exchange",
    slug: "social-exchange",
    images: [socialExchange1],
    projects: [
      {
        title: "Social Exchange – Barter Marketplace App",
        description:
          "Users can trade belongings by proposing mutual deals. If both agree, the deal is confirmed instantly in-app.",
        android: "",
        ios: "",
        web: "",
        github: "",
        imgPaths: ["Projects/storetodoor1.jpg"],
        technologies: ["React Native", "Firebase", "Vue.js", "Node.js"],
        languages: ["JavaScript", "TypeScript"],
      },
    ],
  },

  {
    name: "AndGo – User",
    slug: "andgo-user",
    images: [andgouser],
    projects: [
      {
        title: "AndGo – Cab Booking (User)",
        description:
          "A modern, Uber-like cab booking interface with real-time driver tracking and route optimization.",
        android: "",
        ios: "",
        web: "",
        github: "",
        imgPaths: ["Projects/andgouser.jpg"],
        technologies: ["React Native", "Node.js", "REST API"],
        languages: ["JavaScript", "SCSS"],
      },
    ],
  },
  {
    name: "Shofar",
    slug: "shofar",
    images: [shofar],
    projects: [
      {
        title: "Shofar – Social Network App",
        description:
          "A privacy-focused social media platform enabling secure content sharing, messaging, and media uploads.",
        android: "",
        ios: "",
        web: "",
        github: "",
        imgPaths: ["Projects/shofar2.jpg"],
        technologies: ["React Native", "Firebase", "Node.js"],
        languages: ["JavaScript", "CSS"],
      },
    ],
  },
  {
    name: "Local",
    slug: "local",
    images: [local],
    projects: [
      {
        title: "Local – Hyperlocal Marketplace",
        description:
          "A second-hand product marketplace designed for hyperlocal buying, selling, and bartering.",
        android: "",
        ios: "",
        web: "",
        github: "",
        imgPaths: ["Projects/local.jpg"],
        technologies: ["React Native", "Firebase", "FCM"],
        languages: ["JavaScript", "CSS"],
      },
    ],
  },
  {
    name: "Om Shanti Store",
    slug: "omshanti-store",
    images: [omShantiStore],
    projects: [
      {
        title: "Om Shanti Store – Community Commerce",
        description:
          "Mobile-first e-commerce app built to empower local sellers in small towns and villages.",
        android: "",
        ios: "",
        web: "",
        github: "",
        imgPaths: ["Projects/omShantiStore.jpg"],
        technologies: ["React Native", "Firebase", "AWS", "FCM"],
        languages: ["JavaScript", "TypeScript"],
      },
    ],
  },
  {
    name: "AndGo – Driver",
    slug: "andgo-driver",
    images: [andgodriver],
    projects: [
      {
        title: "AndGo – Cab Booking (Driver)",
        description:
          "Driver dashboard for accepting rides, tracking location, and earnings in real-time.",
        android: "",
        ios: "",
        web: "",
        github: "",
        imgPaths: ["Projects/andgouser.jpg"],
        technologies: ["React Native", "Node.js", "REST API"],
        languages: ["JavaScript", "SCSS"],
      },
    ],
  },
  {
    name: "Store To Door – Driver",
    slug: "storetodoor-driver",
    images: [storetodoor2],
    projects: [
      {
        title: "Store To Door – Driver App",
        description:
          "Driver app to manage order deliveries, locations, customer verification, and live status updates.",
        android:
          "https://play.google.com/store/apps/details?id=com.storetodoredriver",
        ios: "",
        web: "",
        github: "",
        imgPaths: ["Projects/storetodoor2.jpg"],
        technologies: ["React Native", "Firebase", "Node.js", "Express.js"],
        languages: ["JavaScript", "TypeScript"],
      },
    ],
  },
];

export const webProjects = [
  {
    name: "Store To Door (Web)",
    slug: "storetodoorweb",
    images: [storetodoorweb],
    projects: [
      {
        title: "Store To Door – Admin Dashboard",
        description:
          "A web-based admin panel for managing users, delivery agents, orders, and real-time logistics for Store To Door.",
        link: "",
        github: "",
        imgPaths: ["Projects/storetodoorweb.png"],
        technologies: ["Angular 8", "Python (Django)", "MySQL", "REST API"],
        languages: ["JavaScript", "HTML", "CSS"],
      },
    ],
  },
  {
    name: "BookCash",
    slug: "bookcash",
    images: [bookCash],
    projects: [
      {
        title: "BookCash – Academic Book Marketplace",
        description:
          "A platform that allows students to buy, sell, or exchange books. Built with user authentication, filters, and real-time chat.",
        link: "",
        github: "",
        imgPaths: ["Projects/bookCash.png"],
        technologies: ["Angular 8", "Python (Django)", "MySQL"],
        languages: ["JavaScript", "HTML", "CSS"],
      },
    ],
  },
  {
    name: "AMZ Seller Financing",
    slug: "sellerfinancing",
    images: [amz],
    projects: [
      {
        title: "AMZ Seller Financing – eCommerce Lending Portal",
        description:
          "A fintech platform that provides fast funding solutions for Amazon/eCommerce sellers. Features credit scoring, application forms, and dashboards.",
        link: "https://app.ecommercesellerfinancing.com/console/",
        github: "",
        imgPaths: ["Projects/amz.png"],
        technologies: ["React JS", "Node.js", "MongoDB", "Python"],
        languages: ["JavaScript", "CSS", "Bootstrap", "jQuery"],
      },
    ],
  },
  {
    name: "StudyIQ Web",
    slug: "studyiq",
    images: [studyIq],
    projects: [
      {
        title: "StudyIQ – LMS Portal",
        description:
          "Web application for UPSC, SSC, and other competitive exam aspirants. Features courses, video streaming, quizzes, and doubt forums.",
        link: "",
        github: "",
        imgPaths: ["Projects/studyIq.png"],
        technologies: ["Angular 8", "Python (Flask)", "REST API"],
        languages: ["JavaScript", "CSS", "HTML"],
      },
    ],
  },
  {
    name: "Portfolio 2.0",
    slug: "portfolio",
    images: [portfolio],
    projects: [
      {
        title: "Portfolio 2.0 – Developer Showcase",
        description:
          "My personal portfolio showcasing apps, animations, and open-source work. Built with React, Framer Motion, and fully responsive design.",
        link: "https://sourabhbhatt.github.io/portfolio/",
        github: "https://github.com/sourabhbhatt/portfolio",
        imgPaths: ["Projects/portfolio.png"],
        technologies: ["React JS", "Framer Motion", "Styled Components"],
        languages: ["JavaScript", "HTML", "CSS"],
      },
    ],
  },
];
