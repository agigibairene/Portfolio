import { useState } from "react";
import { projects } from "../utils/skillData"
import type { Project } from "../utils/skillData"

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group cursor-pointer rounded-xl p-4 transition-all duration-300"
      style={{
        background: "var(--card-color)",
        boxShadow: "var(--box-shadow)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      {/* Card title */}
      <div className="flex items-center justify-between mb-2">
        <h2
          className="uppercase text-(--special-color) font-medium transition-colors duration-300"

        >
          {project.name}
        </h2>
        <p className="text-sm opacity-50" style={{ color: "var(--card-text-color)" }}>
          {project.type}
        </p>
      </div>
      <p className="text-sm mb-3 opacity-70" style={{ color: "var(--card-text-color)" }}>
        {project.desc}
      </p>
      <hr className="border-gray-700 mb-3" />
      <div className="flex justify-between">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link flex items-center gap-1 text-sm underline text-gray-300 transition-colors duration-200 hover:text-(--special-color) hover:no-underline"
        >
          Code
          <span className="inline-block transition-transform duration-200 rotate-0 group-hover/link:rotate-30">
            ↗
          </span>
        </a>
          
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link flex items-center gap-1 text-sm underline text-gray-300 transition-colors duration-200 hover:text-(--special-color) hover:no-underline"
        >
          Demo
          <span className="inline-block transition-transform duration-200 rotate-0 group-hover/link:rotate-30">
            ↗
          </span>
        </a>
      </div>
    </div>
  );
}

export default function ProjectList() {
  return (
    <section id='projects'>
      <div className="mb-20 max-w-4xl mx-auto mt-20 px-20 md:px-0">
        <p className="text-white">
          // <span className="text-(--special-color)">Project</span>
        </p>
        <h2 className="text-white font-bold text-3xl">
          Projects I've built
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {projects.map((project: Project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>

      <div className="h-px w-full bg-gray-700 "></div>
    </section>
  )
}