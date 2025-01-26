import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { motion } from "framer-motion";
import styled from "styled-components";
import {
  revealTop,
  revealTopStaggeredChildren,
} from "../utils/animationVariations";

const ExperienceSection = styled(motion.section)`
  margin-top: 5rem;
  position: relative;
  background-color: rgba(239, 176, 54, 0.1);
  padding: 2rem;
  border-radius: 8px;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2.5rem 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: #efb036;

    hr {
      flex-grow: 1;
      margin: 0 0.5rem;
      border: none;
      border-top: 1px solid #efb036;
    }
  }

  .list {
    .item {
      position: relative;
      transition: all 300ms ease;

      .btn {
        display: flex;
        align-items: center;
        background-color: rgba(239, 176, 54, 0.2);
        padding: 1rem;
        border-radius: 0.5rem;
        margin: 0.5rem 0;
        transition: all 300ms ease;

        .company {
          color: #efb036;
          font-weight: 500;
          margin-left: 0.5rem;
        }

        svg {
          margin-left: auto;
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.6);
          transition: all 300ms ease;
        }
      }

      .content {
        background-color: rgba(239, 176, 54, 0.1);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        border-radius: 0.5rem;
        padding: 0 1rem;
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: all 300ms ease;

        .company {
          font-size: 1.25rem;
          color: rgba(239, 176, 54, 1);
          font-weight: 500;
        }

        .designation {
          font-size: 0.875rem;
          color: rgb(195, 210, 232);
        }

        .tenure {
          color: rgb(195, 210, 232);
        }

        .work {
          margin: 0.5rem 0;
        }

        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;

          .skill {
            background-color: rgba(13, 13, 12, 0.2);
            padding: 0.25rem 0.75rem;
            font-size: 0.875rem;
            border-radius: 9999px;
          }
        }

        .achievement {
        background-color: rgba(13, 13, 12, 0.1);
        padding: 0.65rem 0.75rem;
          margin-top: 1rem;
          color: rgb(241, 164, 9);
          font-size: 0.95rem;
          font-style: italic;
        }

        .links {
          margin-top: 1rem;
          a {
            color: #efb036;
            text-decoration: underline;
            margin-right: 1rem;
            font-size: 0.875rem;
          }
        }
      }

      &.expanded {
        .btn {
          background-color: rgba(239, 176, 54, 0.3);

          svg {
            transform: rotate(-180deg);
          }
        }

        .content {
          max-height: 25rem;
          padding: 1rem;
          opacity: 1;
          margin: 1rem 0;
        }
      }
    }
  }
`;

const experienceInit = [
  {
    company: "Bijnis",
    short: "Bijnis",
    expanded: true,
    designation: "React Native Lead Developer",
    from: "Jul 2021",
    to: "Nov 2024",
    work: ["Leading the React Native team and managing multiple projects"],
    skills: [
      "React Native",
      "JavaScript",
      "TypeScript",
      "Redux Toolkit",
      "REST API",
      "AWS S3",
      "Node JS",
      "MongoDB",
      "Tailwind CSS",
      "CleverTap",
      "Branch.io",
      "CI/CD",
      "Headless JS",
      "Deep Linking",
      "WebSocket",
      "Push Notifications",
      "Jira",
    ],
    links: {
      playstore:
        "https://play.google.com/store/apps/details?id=com.shoekonnect.bizcrum&hl=en_IN&gl=US&pli=1",
      appStore:
        "https://apps.apple.com/in/app/bijnis-sourcing-app/id6464299974",
    },
    companyType: "Product-based",
    Achievement:
      "Transformed a Native Android app into React Native, enhancing performance across Android and iOS platforms, benefiting a user base exceeding one million users with optimized functionality and experience.",
  },
  {
    company: "Splice Global Services Pvt. Ltd.",
    short: "Splice",
    designation: "Senior Software Engineer",
    from: "Oct 2019",
    to: "May 2021",
    work: [
      "Worked on projects like delivery apps, cab booking, and video sharing social apps. Led a team of developers.",
    ],
    skills: [
      "React Native",
      "JavaScript",
      "TypeScript",
      "REST API",
      "SCSS",
      "Git",
      "GitLab",
      "Vue.js",
      "WebSocket",
      "AngularJS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    company: "Planeer Technology",
    short: "Planeer",
    designation: "Intern",
    from: "Jun 2019",
    to: "Sep 2019",
    work: ["Developed features for internal applications."],
    skills: [
      "Android Studio",
      "React Native",
      "JavaScript",
      "CSS",
      "Firebase",
      "API Integration",
      "Version Control",
    ],
  },
];

export default function Experience() {
  const [experience, setExperience] = useState([...experienceInit]);

  const toggleExperienceSection = (index) => {
    const exp = experience[index];
    exp.expanded = exp.expanded ? false : true;
    setExperience([...experience]);
  };

  return (
    <ExperienceSection
      variants={revealTopStaggeredChildren}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={revealTop} className="title">
        <hr />
        <span className="text-yellow-400 font-medium font-mono">02.</span> Work
        Experience
        <hr />
      </motion.div>

      <ul className="list">
        {experience.map((exp, index) => {
          return (
            <motion.li
              variants={revealTop}
              key={exp.company}
              className={`item ${exp.expanded ? "expanded" : ""}`}
            >
              <div
                role="button"
                className="btn"
                onClick={() => toggleExperienceSection(index)}
              >
                <span className="designation">{exp.designation + " "}</span>
                <span className="company">@{exp.short}</span>
                <IoChevronDown />
              </div>
              <div className="content">
                <div className="company">{exp.company}</div>
                <div className="designation">{exp.designation}</div>
                <div className="tenure">
                  {exp.from} - {exp.to}
                </div>
                <div className="work">
                  {exp.work.map((wk) => (
                    <div key={wk}>{wk}</div>
                  ))}
                </div>
                <div className="skills">
                  {exp.skills.map((sk) => (
                    <div key={sk} className="skill">
                      {sk}
                    </div>
                  ))}
                </div>
                {exp.Achievement && (
                  <div className="achievement">{exp.Achievement}</div>
                )}
                {exp.links && (
                  <div className="links">
                    {exp.links.playstore && (
                      <a href={exp.links.playstore} target="_blank" rel="noopener noreferrer">
                        Play Store
                      </a>
                    )}
                    {exp.links.appStore && (
                      <a href={exp.links.appStore} target="_blank" rel="noopener noreferrer">
                        App Store
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.li>
          );
        })}
      </ul>
    </ExperienceSection>
  );
}
