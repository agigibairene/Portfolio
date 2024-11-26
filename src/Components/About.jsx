import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FaArrowDown } from 'react-icons/fa';

import TechLogo from '../utils/Logo';
import reactLogo from '/reactjs.svg';
import jsLogo from '/javascript.png';
import nodejs from '/node-js.svg';
import expressLogo from '/express.svg';
import flutter from "/flutter.svg";
import dart from "/dart.svg";
import animation from "../assets/Animation.lottie";
import useDownLoadResume from '../hooks/useDownLoadResume';
import resumePdf from "/resume.pdf";


const logos = [jsLogo, reactLogo, nodejs, expressLogo, flutter, dart];

export default function About(){

    const { handleDownload} = useDownLoadResume(resumePdf)

    return(
        <section id="about">
            <h2>About me</h2>
            <div className="about-me">
                <div className="mini-image">
                    <DotLottieReact
                        src={animation}
                        loop
                        autoplay
                        className='lottie'
                    />
                </div>
                <div className="about-txt">
                    <div>
                        With a solid foundation in MongoDB, Express.js, React.js, and Node.js,
                        I thrive in the world of full-stack development. I have a deep understanding of
                        each layer of the MERN stack and utilize this knowledge
                        to build seamless, scalable, and user-friendly applications that leave a lasting impression.
                    </div>
                    <button onClick={handleDownload} className="resume download">
                        Download <FaArrowDown className="arrow-icon"/>
                    </button>
                </div>
            </div>

            <div className="tech-stack">
                <h2>Technologies - My tech Stack</h2>
                <div className="row-logo">
                   {
                    logos.map((logo, index) => 
                        <TechLogo 
                            key={logo} 
                            imagePath={logo} 
                            styles={{ animationDelay: `${index * 0.5}s` }}
                        />)
                   }
                </div>
            </div>
        </section>
    )
}