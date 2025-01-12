import React from "react";

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio to showcase my work.",
    link: "https://example.com",
  },
  {
    name: "E-commerce App",
    description: "A React Native app for online shopping.",
    link: "https://example.com",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-4 block"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
