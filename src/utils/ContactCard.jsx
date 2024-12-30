/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import "../styles/contact.css"

export default function ContactCard({title, details, icon, link}){
    return(
            <motion.div 
                initial={{opacity:0, x:-100}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1, delay:0.2}}
                className="contact__card">
                <Link to={link}>
                    {icon}
                    <h3 className="contact__card-title">{title}</h3>
                    <span className="contact__card-data">{details}</span>
                    <a href={link} target="_blank" className="contact__button">
                        Write me <FaArrowRight className="bx bx-right-arrow-alt contact__button-icon"/>
                    </a>
                </Link>
            </motion.div >
    )
}