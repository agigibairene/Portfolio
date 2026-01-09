/* eslint-disable react/prop-types */
import { useState } from "react";
import discoverBooks from "../assets/book-discover.png";
import seedlinq from "../assets/seedlinq.png";
import netflix from "../assets/netflix.png";
import portfolio from "../assets/portfolio.png";
import "../styles/project.css";
import { MdArrowOutward } from "react-icons/md";

const projects = {
  personal: [
    {
      image: seedlinq,
      name: "SEEDLINQ",
      type: "React-TS / Django",
      github: "https://github.com/agigibairene/Capstone_project",
      demo: "https://capstone-project-lyart-eta.vercel.app/",
    },
    {
      image: discoverBooks,
      name: "Discover Books",
      type: "React-TS / Node.js",
      github: "https://github.com/agigibairene/Discover_BookHub",
      demo: "https://discovery-app-five.vercel.app/",
    },
    {
      image: netflix,
      name: "NetflixGPT",
      type: "ReactJS / Firebase",
      github: "https://github.com/agigibairene/Netflix-gpt",
      demo: "https://netflix-gpt-seven-smoky.vercel.app/",
    },
    {
      image: portfolio,
      name: "Portfolio",
      type: "ReactJS",
      github: "https://github.com/agigibairene/Portfolio",
      demo: "https://portfolio-hdhr.vercel.app/",
    },
  ],

  articles: [
    {
      name: "{{ Django Architecture }}",
      type:
        "Explains how Django’s MVT architecture and URL dispatcher work together to create structured and scalable applications.",
      demo: "https://medium.com/@ireneagigiba/django-architecture-495b643c2e3e",
    },
    {
      name: "<Hoisting in JavaScript />",
      type:
        "A simple explanation of JavaScript hoisting, execution context, and memory allocation.",
      demo: "https://akawin.hashnode.dev/hoisting-titlein-js",
    },
  ],

  opensource: [
    {
      name: "DjangoCampus UI",
      type:
        "Improved responsiveness, fixed footer and registration form, added animations, icons, and country dropdown.",
      demo: "https://djangocampus.tech/",
    },
  ],
};

const tabs = [
  { key: "personal", label: "Personal Projects" },
  { key: "opensource", label: "Open Source Contributions" },
  { key: "articles", label: "Articles" },
];

export default function Projects({ sectionRef }) {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <section id="projects" ref={sectionRef}>
      <h2 className="text-center text-2xl md:text-3xl mb-10">
        ~ Projects ~
      </h2>

      {/* Tabs */}
      <div className="flex px-8 gap-4 mb-10 justify-center flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition
              ${
                activeTab === tab.key
                  ? "bg-[#030712] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex gap-6 justify-center flex-wrap px-8">
        {projects[activeTab].map((project, index) => {
          // PERSONAL PROJECT CARD
          if (activeTab === "personal") {
            const { image, type, name, demo, github } = project;

            return (
              <div
                key={demo}
                className="w-[24rem] h-[19rem] p-4 rounded-md project pb-8"
              >
                <img
                  src={image}
                  alt={name}
                  className="object-contain rounded-md"
                />

                <div className="flex justify-between px-6 mt-8">
                  <div>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      <p className="project-name">{name}</p>
                    </a>
                    <p className="italic text-sm">{type}</p>
                  </div>

                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start live"
                  >
                    <p>Live Demo</p>
                    <MdArrowOutward
                      size={25}
                      className="ml-2 projects-arrow"
                    />
                  </a>
                </div>
              </div>
            );
          }

          // ARTICLES & OPEN SOURCE CARD
          return (
            <div
              key={index}
              className="w-[24rem] min-h-[12rem] p-6 rounded-md project"
            >
              <h3 className="project-name mb-2">{project.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.type}</p>

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center live"
              >
                <p>{activeTab === 'opensource' ? 'View' : 'Read'}</p>
                <MdArrowOutward size={22} className="ml-2 projects-arrow" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
