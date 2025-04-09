import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { mobileProjects, webProjects } from "../../assets/workData";
import { FaExternalLinkAlt, FaGithub, FaGooglePlay,FaAppStoreIos } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectDetails = () => {
  const { slug } = useParams();
  const allProjects = [...mobileProjects, ...webProjects];
  const project = allProjects.find((proj) => proj.slug === slug);

  if (!project) {
    return <div className="p-5 text-white">Project not found.</div>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-8 p-8">
      {/* Carousel */}
      <div className="w-full max-w-xs">
        <Slider {...sliderSettings}>
          {project?.images?.map((img, idx) => (
            <div key={idx}>
              <img
                src={img}
                alt={`${project.name} ${idx + 1}`}
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-6 w-full">
        <h1 className="text-3xl font-bold text-white">{project.name}</h1>

        {project.projects.map((subProject, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-500 pl-6 flex flex-col gap-3"
          >
            <h3 className="text-lg font-semibold text-white">
              {subProject.title}
            </h3>
            <p className="text-gray-300">{subProject.description}</p>

            <div className="flex gap-4 items-center flex-wrap">
              {subProject?.android && (
                <a
                  href={subProject.android}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline flex items-center gap-2"
                >
                  <FaGooglePlay /> Play Store
                </a>
              )}
              {subProject?.ios && (
                <a
                  href={subProject.ios}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline flex items-center gap-2"
                >
                  <FaAppStoreIos /> App Store
                </a>
              )}
              {subProject?.github && (
                <a
                  href={subProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline flex items-center gap-2"
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {subProject?.web && (
                <a
                  href={subProject.web}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline flex items-center gap-2"
                >
                  <FaExternalLinkAlt /> Website
                </a>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-6 text-sm text-white mt-2">
              <div>
                <span className="font-semibold block mb-1">Technologies:</span>
                <ul className="flex flex-wrap gap-2">
                  {subProject.technologies.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-gray-700 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-semibold block mb-1">Languages:</span>
                <ul className="flex flex-wrap gap-2">
                  {subProject.languages.map((lang, i) => (
                    <li
                      key={i}
                      className="bg-gray-700 px-3 py-1 rounded-full text-xs"
                    >
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
