/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import {FaMoon, FaBars, FaSun, FaTimes} from 'react-icons/fa'
import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { useRef } from "react";
import { motion } from "framer-motion";
import { container } from "../utils/Animations";


import resume from "/resume.pdf";

const links = [
    { path: "/", label: "Home", name: "home"},
    { path: "/about", label: "About Me", name: "about" },
    { path: "/experience", label: "Experience", name: "experiences" },
    { path: "/projects", label: "Projects", name: "projects" },
    { path: "/contact", label: "Contact", name: "contact" },
];


export default function Header({toggleTheme, theme, refs}){

    const [toggle, setToggle] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const refDropdownContainer = useRef();
    const navLinks = useRef();

   

    const scrollToSection = (name) => {
        const elementRef = refs[name];
        if (elementRef && elementRef.current) {
            window.scrollTo({
                top: elementRef.current.offsetTop - 90 , 
                behavior: 'smooth'
            });
        }
        setToggle(false);
    };

    
    useEffect(() => {
        const handleScroll = () =>{
            setIsActive(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (toggle){
            const dropDownHeight = navLinks.current.getBoundingClientRect().height;
        console.log(dropDownHeight);
        refDropdownContainer.current.style.height = `${dropDownHeight}px`;
        }
        else{
            refDropdownContainer.current.style.height = 0
        }
    },[toggle]);

    function toggleSideMenu(){
        setToggle(showMenu => !showMenu);
    }

    return(
        <header>
            <nav  className={isActive ? "opaque" : "" }>
                <div className="logo">
                    <h2 className="text-2xl"><FaCode size={30} className="code"/> Irene</h2>
                    <div className="theme-icon">
                        {
                           theme === "light" ? <FaMoon className="iconType"  onClick={toggleTheme}/> : 
                            <FaSun className="iconType" onClick={toggleTheme}/> 
                        }
                    </div>
                </div>
                <ul className="nav-links">
                    {
                        links.map((item, index) => {
                            const { path, label} = item
                            return <motion.li key={path} 
                                variants={container(0.2*index)}
                                initial="hidden"
                                whileInView={"show"}
                                onClick={() => scrollToSection(item.name)}>
                                <NavLink 
                                    className={({ isActive }) => (isActive ? "active" : "")} to={path}
                                >
                                    {label}
                                </NavLink>
                            </motion.li>
                            })
                    }
                </ul>
                <div className="nav-right" onClick={toggleSideMenu}>
                    {theme === "light" ? <FaMoon className="icon" onClick={toggleTheme}/> : <FaSun className="icon" onClick={toggleTheme}/> }
                    <a className="resume view" href={resume} target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                    {toggle ? <FaTimes className="hamburger"  /> : <FaBars className="hamburger" />}
                </div>
            </nav>

            <div className={`${toggle ? "dropdown_menu open" : "dropdown_menu"}`} ref={refDropdownContainer}>
                <ul className="nav-links" ref={navLinks}>
                    {
                        links.map(({ path, label, name }) => (
                            <li key={path} onClick={() => scrollToSection(name)} >
                                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={path}>
                                    {label}
                                </NavLink>
                            </li>
                        ))
                    }
                    <li>
                        <a href={resume} className="resume view" to="/resume">Resume</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

