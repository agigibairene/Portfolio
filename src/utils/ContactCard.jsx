/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa6";
import "../styles/contact.css"

export default function ContactCard({title, details, icon, link}){
    return(
            <div className="contact__card">
                {/* <span className="bx bx contact__card-icon"></spa> */}
                {icon}
                <h3 className="contact__card-title">{title}</h3>
                <span className="contact__card-data">{details}</span>
                <a href={link} target="_blank" className="contact__button">
                    Write me <FaArrowRight className="bx bx-right-arrow-alt contact__button-icon"/>
                </a>
            </div>
    )
}