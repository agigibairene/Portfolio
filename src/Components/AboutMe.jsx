import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import animation from "../assets/Animation.lottie";
import "../styles/about.css";
import { FaJsSquare } from 'react-icons/fa';
import { FaServer } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';



export default function AboutMe(){
    return (
      <section className="about-container" id="about">
        <h2 className="title">About</h2>
        <div className="content">
            <DotLottieReact
                src={animation}
                loop
                autoplay
                className='lottie'
            />
          <ul className="aboutItems">
            <li className="aboutItem">
              <FaJsSquare />
              <div className="aboutItemText">
                <h3>Frontend Developer</h3>
                <p>
                  I'm a frontend developer with experience in building responsive
                  and optimized sites
                </p>
              </div>
            </li>
            <li className="aboutItem">
             <FaServer />
              <div className="aboutItemText">
                <h3>Backend Developer</h3>
                <p>
                  I have experience developing fast and optimised back-end systems
                  and APIs
                </p>
              </div>
            </li>
            <li className="aboutItem">
              <FaMobileAlt />
              <div className="aboutItemText">
                <h3>UI Designer</h3>
                <p>
                  I have designed multiple landing pages and have created design
                  systems as well
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  };