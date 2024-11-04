import { Link } from "react-router-dom";
import profileImg from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home(){
    return(
        <section id="homepage">
            <div id="home-content">
                <div className="home-text">
                    <span className="title">Software Engineer</span>
                    <h1>Irene Akawin Agigiba</h1>
                    <p>I&apos;m a software engineer, specialiazed in MERN stack and
                        mobile development
                    </p>
                    <div className="btns">
                        <Link to="#" className="resume download">Download</Link>
                        <Link to="#" className="get-intouch">Contact me</Link>
                    </div>
                </div>
                 <div className="profile-img">
                    <img src={profileImg} alt="" />
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