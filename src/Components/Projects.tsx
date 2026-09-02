import { projects } from "../utils/skillData"
import type { Project } from "../utils/skillData"

export default function ProjectList(){
  return(
    <section className="max-w-4xl mx-auto mt-36">
       <p className='text-white'>// <span className='text-(--special-color)'>Project</span></p>
        <h2 className="text-white font-bold text-3xl">
          Projects I've built
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {
          projects.map((project: Project) => (
            <div className="bg-(--card-color) rounded-xl p-6 shadow-md border border-gray-700" key={project.name}>
              {/* Card title */}
              <h2 className="text-gray-200 mb-3 uppercase">{project.name}</h2>
              <p className="text-sm text-gray-400 mb-2">{project.type}</p>
              <p className="text-sm text-gray-300 mb-4">{project.desc}</p>
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm underline">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm underline">
                  Demo
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}