import storetodoorweb from "./Projects/storetodoorweb.png";
import storetodoor from "./Projects/storetodoor1.jpg";
import storetodoor2 from "./Projects/storetodoor2.jpg";
import bookCash from "./Mywork/bookCash.png";
import studyIq from "./Mywork/studyIq.png";
import MGB from "./Projects/mgb.jpg";
import andgouser from "./Projects/andgouser.jpg";
import andgodriver from "./Projects/andgo1.jpg";
import shofar from "./Projects/shofar2.jpg";
import portfolio from "./Projects/portfolio.png";
import amz from "./Projects/amz.png";
import omShantiStore from "./Projects/omShantiStore.jpg";
import socialExchange1 from "./Projects/socialExchange1.jpg";
import uwanxt from "./Projects/uwanxt.jpg";
import local from "./Projects/local.jpg";
import bijnis from "./Bijnis.PNG";

export const mobileProjects = [
  {
    name: "Bijnis",
    slug: "bijnis",
    images: bijnis,

    projects: [
      {
        title: "Bijnis Sourcing App",
        description:
          "This is a product-based mobile application that connects retailers and manufacturers, providing a seamless sourcing experience.",
        link: "https://play.google.com/store/apps/details?id=com.shoekonnect.bizcrum&hl=en_IN&gl=US&pli=1",
        github: "",
        imgPaths: ["Projects/bijnis_app.jpg"],
        technologies: [
          "React Native",
          "Redux Toolkit",
          "AWS S3",
          "Tailwind CSS",
        ],
        languages: ["TypeScript", "JavaScript", "CSS"],
      },
    ],
  },
  {
    name: "Store To Door Driver",
    slug: "storetodoordriver",
    images: storetodoor2,
    projects: [
      {
        title: "Store To Door Driver",
        description: "This is a mobile application, connects you to helper",
        link: "https://play.google.com/store/apps/details?id=com.storetodoredriver",
        github: "",
        imgPaths: ["Projects/storetodoor2.jpg"],
        technologies: ["Python", "React Native"],
        languages: ["JavaScript", "CSS"],
      },
    ],
  },
  {
    name: "Store To Door User",
    slug: "storetodooruser",
    images: storetodoor,
    projects: [
      {
        title: "Store To Door User",
        description: "This is a mobile application, connects you to helper",
        link: "https://play.google.com/store/apps/details?id=com.storetodooruser",
        github: "",
        imgPaths: ["Projects/storetodoor1.jpg"],
        technologies: ["Python", "React Native"],
        languages: ["JavaScript", "CSS"],
      },
    ],
  },
  {
    name: "Local",
    slug: "local",
    images: local,
    projects: [
      {
        title: "Local",
        description:
          "This is a mobile application, you can buy or sell products from here.",
        link: "",
        github: "",
        imgPaths: ["Projects/local.jpg"],
        technologies: ["Firebase", "React Native"],
        languages: ["JavaScript", "CSS"],
      },
    ],
  },
  {
    name: "Om Shanti Store",
    slug: "omshantistore",
    images: omShantiStore,
    projects: [
      {
        title: "Om Shanti Store",
        description:
          "This is a mobile application, you can buy or sell products from here.",
        link: "",
        github: "",
        imgPaths: ["Projects/omShantiStore.jpg"],
        technologies: ["Firebase", "React Native"],
        languages: ["JavaScript", "CSS"],
      },
    ],
  },
  {
    name: "AndGo User",
    slug: "andgouser",
    images: andgouser,
    projects: [
      {
        title: "AndGo User",
        description: "This is a mobile application interface.",
        link: "",
        github: "",
        imgPaths: ["Projects/andgouser.jpg"],
        technologies: ["Python", "React Native"],
        languages: ["JavaScript", "CSS"],
      },
    ],
  },
  {
    name: "Shofar",
    slug: "shofar",
    images: shofar,
    projects: [
      {
        title: "Shofar",
        description: "This is a mobile application like Facebook.",
        link: "",
        github: "",
        imgPaths: ["Projects/shofar2.jpg"],
        technologies: ["Python", "React Native"],
        languages: ["JavaScript", "CSS"],
      },
    ],
  },
];

export const webProjects = [
  {
    name: "Bookcash",
    slug: "bookcash",
    images: bookCash,
    projects: [
      {
        title: "Bookcash",
        description: "The purpose of this is to exchange or buy books.",
        link: "",
        github: "",
        imgPaths: ["Projects/bookCash.png"],
        technologies: ["Python", "Angular-8"],
        languages: ["JavaScript", "CSS"],
      },
    ],
  },
  {
    name: "AMZ Seller Financing",
    slug: "sellerfinancing",
    images: amz,
    projects: [
      {
        title: "AWS Finance",
        description: "A fast funding platform built for eCommerce sellers.",
        link: "https://app.ecommercesellerfinancing.com/console/",
        github: "",
        imgPaths: ["Projects/amz.png"],
        technologies: ["Python", "React JS"],
        languages: ["JavaScript", "CSS", "Bootstrap", "jQuery"],
      },
    ],
  },
  {
    name: "Studyiq",
    slug: "studyiq",
    images: studyIq,
    projects: [
      {
        title: "Studyiq",
        description: "This is a web application that provides study material.",
        link: "",
        github: "",
        imgPaths: ["Projects/studyIq.png"],
        technologies: ["Python", "Angular-8"],
        languages: ["JavaScript", "CSS"],
      },
    ],
  },
  {
    name: "Portfolio",
    slug: "portfolio",
    images: portfolio,
    projects: [
      {
        title: "Portfolio",
        description: "This is a web application portfolio.",
        link: "https://sourabhbhatt.github.io/portfolio/",
        github: "https://github.com/sourabhbhatt/portfolio",
        imgPaths: ["Projects/portfolio.png"],
        technologies: ["React JS"],
        languages: ["JavaScript", "CSS"],
      },
    ],
  },
];
