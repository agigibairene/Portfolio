import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';
import './style.css';
import {FaMoon, FaBars} from 'react-icons/fa'

export default function Header(){
    return(
        <header>
            <nav>
                <div className="logo">
                    <img src={Logo} alt="" />
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
                    <FaMoon className="icon"/>
                    <Link className="resume" to="/resume">Resume</Link>
                    <FaBars className="hamburger"/>
                </div>
            </nav>
        </header>
    )
}