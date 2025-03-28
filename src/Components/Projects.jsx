/* eslint-disable react/prop-types */
import discoverBooks from "../assets/book-discover.png"
import netflix from "../assets/netflix.png"
import portfolio from "../assets/portfolio.png"
import "../styles/project.css";
import { MdArrowOutward } from "react-icons/md";


const projects = [
    {
        image: discoverBooks, 
        name: "Discover Books",
        type: "React-TS/Node.js", 
        github: "https://github.com/agigibairene/Discover_BookHub",
        demo: "https://discovery-app-five.vercel.app/" 
    },
    {
        image: netflix,
        name: "NetflixGPT",
        type: "Reactjs/firebase",
        github: "https://github.com/agigibairene/Netflix-gpt",
        demo: "https://netflix-gpt-seven-smoky.vercel.app/"
    },
    {
        image: portfolio, 
        name: "Portfolio",
        type: "ReactJS", 
        github: "https://github.com/agigibairene/Portfolio",
        demo: "https://portfolio-hdhr.vercel.app/"
    }
];

export default function Projects({ref}){
    return(
       <section id="projects" ref={ref}>
            <h2 className="text-center text-2xl md:text-3xl mb-10">~ Projects ~</h2>

            <div className="flex gap-6 justify-center flex-wrap  px-8">
                {
                    projects.map(project =>{
                        const {image, type, name, demo, github} = project;
                        return <div key={demo} className="w-[24rem] h-[19rem] p-4 rounded-md project pb-8 ">
                            <img src={image} alt="" className="object-contain rounded-md " />
                            <div className="flex justify-between px-6 mt-8">
                                <div>
                                    <a href={github} target="_blank">
                                        <p className="project-name">{name}</p>
                                    </a>
                                    <a href={github} target="_blank">
                                        <p className="italic">{type}</p>
                                    </a>
                                </div>
                                <a href={demo} target="_blank" className="flex items-start live">
                                    <p>Live Demo</p>
                                    <MdArrowOutward size={25} className="ml-2 projects-arrow"/>
                                </a>
                            </div>
                        </div>
                    })
                }
        </div>
       </section>
    )
}