import {
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaAndroid,
  FaApple,
  FaGithub,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiXcode,
  SiFirebase,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGitlab,
  SiBitbucket,
} from "react-icons/si";

export const techData = {
  frontend: [
    { name: "React Native", icon: <FaReact /> },
    { name: "React", icon: <FaReact /> },
    { name: "Vue.js", icon: <FaVuejs /> },
    { name: "iOS", icon: <FaApple /> },
    { name: "Android", icon: <FaAndroid /> },
    { name: "Xcode", icon: <SiXcode /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <FaNodeJs /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "GraphQL", icon: <SiGraphql /> },
  ],
  database: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firestore", icon: <SiFirebase /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MySQL", icon: <SiMysql /> },
  ],
  tools: [
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Bitbucket", icon: <SiBitbucket /> },
    { name: "Git", icon: <SiGit /> },
    { name: "GitLab", icon: <SiGitlab /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "AWS", icon: <FaAws /> },
  ],
};

export const statsData = [
  { value: "5+", label: "Years of Experience" },
  { value: "10+", label: "Applications Developed" },
  { value: "100K+", label: "Downloads" },
];
