/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import Logo from '../assets/logo.png';
import {FaMoon, FaBars, FaSun} from 'react-icons/fa'
import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";


export default function Header({toggleTheme, theme}){

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            setIsActive(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <header>
            <nav  className={isActive ? "opaque" : "" }>
                <div className="logo">
                    {/* <img src={Logo} alt="" /> */}
                    <h2><FaCode className="code"/> Irene</h2>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Me</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <div className="nav-right">
                    {theme === "light" ? <FaMoon className="icon" onClick={toggleTheme}/> : <FaSun className="icon" onClick={toggleTheme}/> }
                    <Link className="resume" to="/resume">Resume</Link>
                    <FaBars className="hamburger"/>
                </div>
            </nav>
        </header>
    )
}