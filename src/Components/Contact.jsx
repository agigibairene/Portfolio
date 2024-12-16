import ContactCard from "../utils/ContactCard";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";

const x  = "bx bx-mail-send contact__card-icon"
const data = [
    {
        logo: <MdOutlineMarkEmailRead className={x} />, 
        name: "Email", 
        detail: "agigibaakawin@gmail.com",
        link: "#"
    },
    {
        logo: <FaLinkedinIn className={x}/>, 
        name: "LinkedIn", 
        detail: "Agigiba Irene",
        link: "https://www.linkedin.com/in/irene-agigiba-476a39214/"
    }
];

export default function Contact(){
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleUserInput(event){
        event.preventDefault();
        const {name, value} = event.target;
        setUserInput(prevData => (
            {
                ...prevData,
                [name]: value
            }
        ))
    }

    function handleSubmit(event){
        event.preventDefault();
    }


    return(
        <section className="contact section" id="contact">
            <h2 className="section__title">Get In Touch</h2>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Reach out to me</h3>
                    <div className="contact__info">
                        {
                            data.map(info =>{
                                const {name, logo, detail, link} = info;
                                return(
                                    <ContactCard
                                        key={name}
                                        title={name}
                                        icon={logo}
                                        link={link}
                                        details={detail}
                                    />
                                );
                            })
                        }
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Text me</h3>

                    <form onSubmit={handleSubmit} className="contact__form">
                        <div className="contact__form-div">
                            <input 
                                type="text" 
                                name="name" 
                                className="contact__form-input" 
                                placeholder="Enter your Name"
                                value={userInput.name}
                                onChange={handleUserInput}
                            />
                        </div>

                        <div className="contact__form-div">
                            <input 
                                type="email" 
                                name="email" 
                                className="contact__form-input" 
                                placeholder="Enter your email"
                                value={userInput.email}
                                onChange={handleUserInput}
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <textarea 
                                type="text" 
                                name="message" 
                                className="contact__form-input" 
                                placeholder="Write your message"
                                cols={30}
                                rows={10}
                                value={userInput.message}
                                onChange={handleUserInput}
                            ></textarea>
                        </div>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}