/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import Logo from '../assets/logo.png';
import {FaMoon, FaBars, FaSun, FaTimes} from 'react-icons/fa'
import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { useRef } from "react";


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
                <div className="nav-right" onClick={toggleSideMenu}>
                    {theme === "light" ? <FaMoon className="icon" onClick={toggleTheme}/> : <FaSun className="icon" onClick={toggleTheme}/> }
                    <Link className="resume" to="/resume">Resume</Link>
                    {toggle ? <FaTimes className="hamburger"  /> : <FaBars className="hamburger" />}
                </div>
            </nav>

            <div className={`${toggle ? "dropdown_menu open" : "dropdown_menu"}`} ref={refDropdownContainer}>
                <ul className="nav-links" ref={navLinks}>
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
                    <li>
                        <Link className="resume" to="/resume">Resume</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}