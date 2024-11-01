import { Link } from "react-router-dom";
import profileImg from "../assets/profile.jpg";

export default function Home(){
    return(
        <section id="homepage">
            <div className="home-text">
                <span>Software Engineer</span>
                <h1>Irene Akawin Agigiba</h1>
                <p>I&apos;m a software engineer, specialiazed in MERN stack and 
                    mobile development 
                </p>
                <div className="btns">
                    <Link to="#" className="resume">DownLoad Resume</Link>
                    <Link to="#" className="get-intouch">Contact me</Link>
                </div>
            </div>
                <div className="profile-img">
                    <img src={profileImg} alt="" />
                </div>
        </section>
    )
}