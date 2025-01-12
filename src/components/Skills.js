import React from "react";

const skills = [
  { name: "React Native", level: "90%" },
  { name: "JavaScript", level: "85%" },
  { name: "Redux", level: "80%" },
  { name: "Node.js", level: "75%" },
];

function Skills() {
  return (
    <section id="skills" className="py-16 px-8 bg-white">
      <h2 className="text-3xl font-bold text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {skills.map((skill) => (
          <div key={skill.name}>
            <p className="font-medium">{skill.name}</p>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-blue-500 h-2 rounded"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
