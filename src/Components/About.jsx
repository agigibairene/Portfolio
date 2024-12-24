import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import data from '../utils/AboutData';
import "../styles/about.css";
import { motion } from 'framer-motion';

import TechLogo from '../utils/Logo';
import reactLogo from '/reactjs.svg';
import jsLogo from '/javascript.png';
import nodejs from '/node-js.svg';
import expressLogo from '/express.svg';
import flutter from "/flutter.svg";
import dart from "/dart.svg";
import animation from "../assets/Animation.lottie";


const logos = [jsLogo, reactLogo, nodejs, expressLogo, flutter, dart];

export default function About(){


    return(
        <section id="about">
            <h2>About me</h2>
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
                            data.map(item =>{
                                const {icon, description, title} = item;
                                return(
                                    <motion.li 
                                        initial={{opacity:0, x:100}}
                                        whileInView={{opacity:1, x:0}}
                                        transition={{duration:1, delay:0.2}}
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
                <h2>My tech Stack</h2>
                <div className="row-logo">
                   {
                    logos.map((logo, index) => 
                        <TechLogo 
                            key={logo} 
                            imagePath={logo} 
                            styles={{ animationDelay: `${index * 0.5}s` }}
                        />)
                   }
                </div>
            </div>
        </section>
    )
}