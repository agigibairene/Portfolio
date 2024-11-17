import { Link } from "react-router-dom";
import profileImg from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import resumePdf from "../assets/resume.pdf";

export default function Home(){

    const handleDownload = async () => {
        try {
          const response = await fetch(resumePdf);
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', resumePdf); // Specify the file name for download
          document.body.appendChild(link);
          link.click();
          
          // Clean up
          link.remove();
          window.URL.revokeObjectURL(url);
        } catch (error) {
          console.error("Download failed:", error);
        }
      };

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
                        <button onClick={handleDownload} className="resume download">
                            Download <FaArrowDown className="arrow-icon"/>
                        </button>
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