import discoverBooks from "../assets/book-discover.png"
import netflix from "../assets/netflix.png"
import portfolio from "../assets/portfolio.png"
import "../styles/project.css";


const projects = [
    {
        image: discoverBooks, 
        name: "Discover Books",
        type: "React-TS/Node.js", 
        github: "https://github.com/agigibairene/Discover_BookHub",
        demo: "https://discovery-app-alpha.vercel.app/" 
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

export default function Projects(){
    return(
       <section>
            <h2 className="text-center text-3xl mb-6">~ Projects ~</h2>

            <div className="flex gap-6 justify-center  px-8">
            {
                projects.map(project =>{
                    const {image, type, name, demo, github} = project;
                    return <div key={demo} className="w-[24rem] h-[19rem] p-4 rounded-md project pb-8 ">
                        <img src={image} alt="" className="object-contain rounded-md " />
                        <div className="flex justify-between px-6 mt-4">
                            <div>
                                <a href={github}>
                                    <p>{name}</p>
                                </a>
                                <a href={github}>
                                    <p>{type}</p>
                                </a>
                            </div>
                            <a href={demo}>
                                <p>Live Demo</p>
                            </a>
                        </div>
                    </div>
                })
            }
        </div>
       </section>
    )
}