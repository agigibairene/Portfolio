/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import {FaMoon, FaBars, FaSun, FaTimes} from 'react-icons/fa'
import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { useRef } from "react";


import resume from "/resume.pdf";

const links = [
    { path: "/", label: "Home", name: "home"},
    { path: "/about", label: "About Me", name: "about" },
    { path: "/skills", label: "Skills", name: "skills" },
    { path: "/projects", label: "Projects", name: "projects" },
    { path: "/contact", label: "Contact", name: "contact" },
];

export default function Header({toggleTheme, theme}){

    const [toggle, setToggle] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const refDropdownContainer = useRef();
    const navLinks = useRef();


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
                    <h2><FaCode className="code"/> Irene</h2>
                    <div className="theme-icon">
                        {
                           theme === "light" ? <FaMoon className="iconType"  onClick={toggleTheme}/> : 
                            <FaSun className="iconType" onClick={toggleTheme}/> 
                        }
                    </div>
                </div>
                <ul className="nav-links">
                    {
                        links.map(({ path, label, name }) => (
                            <li key={path} onClick={() => document.getElementById(name).scrollIntoView({ behavior: 'smooth' })}>
                                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={path}>
                                    {label}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                <div className="nav-right" onClick={toggleSideMenu}>
                    {theme === "light" ? <FaMoon className="icon" onClick={toggleTheme}/> : <FaSun className="icon" onClick={toggleTheme}/> }
                    <a className="resume" href={resume} target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                    {toggle ? <FaTimes className="hamburger"  /> : <FaBars className="hamburger" />}
                </div>
            </nav>

            <div className={`${toggle ? "dropdown_menu open" : "dropdown_menu"}`} ref={refDropdownContainer}>
                <ul className="nav-links" ref={navLinks}>
                    <li>
                        <NavLink className={({isActive})=> isActive ? "active" : ""} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink  className={({isActive})=> isActive ? "active" : ""}  to="/about">About Me</NavLink>
                    </li>
                    <li>
                        <NavLink  className={({isActive})=> isActive ? "active" : ""} to="/skills">Skills</NavLink>
                    </li>
                    <li>
                        <NavLink  className={({isActive})=> isActive ? "active" : ""} to="/projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink  className={({isActive})=> isActive ? "active" : ""} to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className="resume" to="/resume">Resume</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}