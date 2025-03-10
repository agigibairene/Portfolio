/* eslint-disable react/prop-types */
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import data from '../utils/AboutData';
import "../styles/about.css";
import { motion } from 'framer-motion';

import { fadeUp } from '../utils/Animations';
import TechLogo from '../utils/Logo';
import reactLogo from '/reactjs.svg';
import jsLogo from '/javascript.png';
import flutter from "/flutter.svg";
import dart from "/dart.svg";
import animation from "../assets/Animation.lottie";
import python from "/python.svg";
import tailwind from "/tailwind.svg";
import typescript from "/typescript.svg";


const logos = [jsLogo, reactLogo, typescript,  tailwind, python, flutter, dart];

export default function About({ref, theme}){
    return(
        <section id="about" ref={ref}>
            <h2>~ About me ~</h2>
            <div className="about-me">
                <div className="mini-image">
                    <DotLottieReact
                        src={animation}
                        loop
                        autoplay
                        className='lottie'

                    />
                </div>
                <div className="about-txt">
                    <ul className="aboutItems">
                        {
                            data.map((item, index) =>{
                                const {icon, description, title} = item;
                                return(
                                    <motion.li 
                                        variants={fadeUp(0.2*index)}
                                        initial={"hidden"}
                                        whileInView={"show"}
                                        key={icon} className="aboutItem">
                                        {icon}
                                        <div className="aboutItemText">
                                            <h3>{title}</h3>
                                            <p>{description}</p>
                                        </div>
                                    </motion.li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

            <div className="tech-stack">
                <h2>My Tech Stack</h2>
                <div className="row-logo">
                   {
                    logos.map((logo, index) => 
                        <TechLogo 
                            key={logo} 
                            imagePath={logo} 
                            styles={{ animationDelay: `${index * 0.5}s` }}
                            theme={theme}
                        />)
                   }
                </div>
            </div>
        </section>
    )
}