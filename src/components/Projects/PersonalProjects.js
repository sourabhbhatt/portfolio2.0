import React from "react";

const personalProjects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio to showcase my work.",
    link: "https://example.com",
  },
  {
    name: "Task Tracker App",
    description: "A task management app built to track daily goals.",
    link: "https://example.com",
  },
];

function PersonalProjects() {
  return (
    <section id="personal-projects" className="py-16 px-8 bg-white">
      <h2 className="text-3xl font-bold text-center">Personal Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {personalProjects.map((project) => (
          <div
            key={project.name}
            className="p-6 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="mt-2 text-gray-700">{project.description}</p>
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

export default PersonalProjects;
