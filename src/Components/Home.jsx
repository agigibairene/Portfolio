/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import profileImg from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resumePdf from "/resume.pdf";
import useDownLoadResume from "../hooks/useDownLoadResume";
import { IoDocumentTextOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

export default function Home({ref, scrollToContact}){

    const {handleDownload} = useDownLoadResume(resumePdf);

 
    
    return(
        <section id="homepage" ref={ref}>
            <div id="home-content">
                <div className="home-text">
                    <motion.h1 initial={{opacity:0, x:-100}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:1, delay:0.2}}>
                    <span className="title">Hiii
                        <span className="wave-icon wave">👋</span>,  I&apos;m
                    </span>
                            Irene Akawin Agigiba
                    </motion.h1>
                    <motion.p 
                        initial={{opacity:0, x:-100}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:1.2, delay:0.4}}
                        className='desc-me'>Software Engineer | Full Stack Enthusiast</motion.p>
                    <motion.p
                        initial={{opacity:0, x:-100}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:1.4, delay:0.5}}
                        className="description-home"
                    >
                        I love creating innovative solutions that have a meaningful impact on society. Beyond software,<br/>
                        I’m an agriculture enthusiast 🪴🌿, deeply passionate about the pivotal role farming plays in our lives.<br/>
                        I’m devoted to leveraging technology to make agriculture more efficient, productive, and sustainable.<br/> 
                        If you&lsquo;re as excited about transforming agriculture through tech as I am, let&apos;s connect!&quot;
                    </motion.p>
                    <motion.div 
                        className="btns"
                        initial={{opacity:0, x:-100}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:1.4, delay:0.5}}
                    >
                        <button onClick={handleDownload} className="resume download ">
                        Resume <IoDocumentTextOutline className="arrow-icon"/>
                        </button>
                        <Link onClick={scrollToContact} className="get-intouch">
                            Contact me <FaPhoneAlt className="phone"/>
                        </Link>
                    </motion.div>
                </div>
                 <div className="profile-img">
                    <motion.img  
                        initial={{opacity:0, scale:0.5}}
                        whileInView={{opacity:1, scale:1}}
                        transition={{duration:1.4, delay:0}} 
                        src={profileImg} alt="" 
                    />
                </div>
            </div>

            <div className="socials">
                <p>Visit my: </p>
                <div className="social-accounts">
                    <a href="https://github.com/agigibairene" target="_blank"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/irene-agigiba-476a39214/" target="_blank"><FaLinkedin /></a>
                </div>
            </div>

        </section>
    )
}