import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavItem {
    id: string;
    label: string;
}

const links: NavItem[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "experiences", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog/OS" },
    { id: "contact", label: "Contact" },
];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = links
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-80px 0px -50% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const handleScroll = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();

        const el = document.getElementById(id);

        if (el) {
            const offset = 80;
            const top =
                el.getBoundingClientRect().top +
                window.scrollY -
                offset;

            window.scrollTo({
                top,
                behavior: "smooth",
            });
        }

        setActiveSection(id);
        setIsOpen(false);
    };

    return (
        <>
            <nav className="relative flex items-center justify-between py-4 px-4 md:px-24">
                
                {/* Logo */}
                <a href="#home" onClick={handleScroll("home")}>
                    <p className="font-medium text-lg">
                        ~/
                        <span className="text-[#00abf0]">
                            irene-akawin
                        </span>
                    </p>
                </a>

                {/* Desktop links */}
                <ul className="hidden md:flex gap-6">
                    {links.map((item) => (
                        <li key={item.id}>
                            <NavLink
                                to={`/${item.id}`}
                                onClick={handleScroll(item.id)}
                                className={`
                                    relative
                                    pb-1
                                    transition-colors
                                    hover:text-[#00abf0]
                                    ${
                                        activeSection === item.id
                                            ? "text-[#00abf0] border-b-2 border-[#00abf0]"
                                            : ""
                                    }
                                `}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Resume */}
                <a
                    className="resume view outline-0 hidden md:inline-block"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume
                </a>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-2xl z-50"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <FaTimes className="text-white" />
                    ) : (
                        <FaBars className="text-white" />
                    )}
                </button>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-[#081b29] md:hidden flex flex-col items-center gap-4 py-6 shadow-lg z-40">
                        {links.map((item) => (
                            <NavLink
                                key={item.id}
                                to={`/${item.id}`}
                                onClick={handleScroll(item.id)}
                                className={`
                                    text-lg
                                    pb-1
                                    transition-colors
                                    ${
                                        activeSection === item.id
                                            ? "text-[#00abf0] border-b-2 border-[#00abf0]"
                                            : ""
                                    }
                                `}
                            >
                                {item.label}
                            </NavLink>
                        ))}

                        <a
                            className="resume view outline-0"
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                    </div>
                )}
            </nav>

            <div className="h-px w-full bg-gray-700"></div>
        </>
    );
}