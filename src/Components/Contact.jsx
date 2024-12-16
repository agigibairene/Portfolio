import ContactCard from "../utils/ContactCard";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

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
]
export default function Contact(){
    return(
        <section className="contact section" id="contact">
            <h2 className="section__title">Get In Touch</h2>
            {/* <span className="section__subtitle">Contact me</span> */}

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

                    <form action="" className="contact__form">
                        <div className="contact__form-div">
                            {/* <label className="contact__form-tag">Name</label> */}
                            <input type="text" name="name" className="contact__form-input" placeholder="Enter your Name"/>
                        </div>

                        <div className="contact__form-div">
                            {/* <label className="contact__form-tag">Name</label> */}
                            <input type="email" name="email" className="contact__form-input" placeholder="Enter your email"/>
                        </div>

                        <div className="contact__form-div contact__form-area">
                            {/* <label className="contact__form-tag">Name</label> */}
                            <textarea 
                                type="text" 
                                name="msg" 
                                className="contact__form-input" 
                                placeholder="Write your message"
                                cols={30}
                                rows={10}
                            ></textarea>
                        </div>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}