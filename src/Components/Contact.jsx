/* eslint-disable react/prop-types */
import ContactCard from "../utils/ContactCard";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { useRef, useState } from "react";
import checkValidData from "../utils/validate";
import Modal from "../utils/Modal";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";


const x = "bx bx-mail-send contact__card-icon";
const data = [
    {
        logo: <MdOutlineMarkEmailRead className={x} />,
        name: "Email",
        detail: "agigibaakawin@gmail.com",
        link: "mailto:someone@example.com"
    },
    {
        logo: <FaLinkedinIn className={x} />,
        name: "LinkedIn",
        detail: "Agigiba Irene",
        link: "https://www.linkedin.com/in/irene-agigiba-476a39214/"
    }
];

export default function Contact({ ref }) {
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: ""
    });

    const modalRef = useRef();
    const [errors, setErrors] = useState({});

    function validateInputs() {
        const { emailRegex, msgRegex, fullNameRegex } = checkValidData(
            userInput.email,
            userInput.message,
            userInput.name
        );
        const validationErrors = {
            email: emailRegex ? "" : "Invalid email format.",
            message: msgRegex ? "" : "Message must not be empty.",
            name: fullNameRegex ? "" : "Full Name is required."
        };
        setErrors(validationErrors);
        return Object.values(validationErrors).every((err) => err === "");
    }

    function handleUserInput(event) {
        const { name, value } = event.target;
        setUserInput((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const isValid = validateInputs();

        if (isValid) {
            try {
                // Sending email using EmailJS
                await emailjs.send(
                    "service_8xg79le", 
                    "template_v0kxqgs", 
                    userInput,
                    "ztn-p4ABCRrpeSO53" 
                );

                // Open modal
                if (modalRef.current) {
                    modalRef.current.openModal();
                }

                // Automatically close the modal after 3 seconds
                setTimeout(() => {
                    if (modalRef.current) {
                        modalRef.current.closeModal();
                    }
                }, 2000);

                // Clear the form
                setUserInput({ name: "", email: "", message: "" });
            } catch (error) {
                console.error("Failed to send email:", error);
            }
        }
    }
  

    return (
        <section className="contact section" id="contact" ref={ref}>
            <h2 className="section__title">~ Get In Touch ~</h2>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Reach out to me</h3>
                    <div className="contact__info">
                        {data.map((info) => {
                            const { name, logo, detail, link } = info;
                            return (
                                <ContactCard
                                    key={name}
                                    title={name}
                                    icon={logo}
                                    link={link}
                                    details={detail}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Text me</h3>

                    <motion.form 
                        initial={{opacity:0, x:100}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:1, delay:0.2}}
                        onSubmit={handleSubmit} 
                        className="contact__form"
                    >
                        <Modal message="Sent Successfully" ref={modalRef} />
                        <div className="contact__form-div">
                            <input
                                type="text"
                                name="name"
                                className="contact__form-input"
                                placeholder="Enter your Name"
                                value={userInput.name}
                                onChange={handleUserInput}
                            />
                            {errors.name && <p className="error">{errors.name}</p>}
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
                            {errors.email && <p className="error">{errors.email}</p>}
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
                            {errors.message && <p className="error">{errors.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="msg"
                        >
                            Send Message <IoIosSend className="msg-icon" />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
