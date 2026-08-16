import { Link, NavLink } from "react-router-dom"

interface Link{
    path: string;
    label: string;
    name: string;
}

const links: Link[] = [
    { path: "/", label: "Home", name: "home"},
    { path: "/about", label: "About Me", name: "about" },
    { path: "/experience", label: "Experience", name: "experiences" },
    { path: "/projects", label: "Projects", name: "projects" },
    { path: "/contact", label: "Contact", name: "contact" },
];

export default function NavBar(){
    return(
        <>
            <nav className="py-2 md:px-24">
                <Link to='/'>
                    <p className="font-medium text-lg">~/<span className="text-[#00abf0]">irene-akawin</span></p>
                </Link>
                <ul className="flex gap-6">
                    {
                        links.map((item)=><li key={item.name}>
                            <NavLink to={item.path}>
                                {item.label}
                            </NavLink>
                        </li>)
                    }
                </ul>
                <a className="resume view outline-0" href={''} target="_blank" rel="noopener noreferrer">
                    Resume
                </a>
            </nav>

            <div className="h-px w-full bg-gray-700 "></div>
        </>
    )
}