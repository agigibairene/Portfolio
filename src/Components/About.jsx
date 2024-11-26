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
                    It is a long established fact that a reader will be distracted by 
                    the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less 
                    normal distribution of letters, as opposed to using Content here, 
                    content here, making it look like readable English. Many desktop 
                    publishing packages and web page editors now use Lorem Ipsum as their 
                    default model text, and a search for lorem ipsum will uncover many.
                    </div>
                    <button onClick={handleDownload} className="resume download">
                        Download <FaArrowDown className="arrow-icon"/>
                    </button>
                </div>
            </div>

            <div className="tech-stack">
                <h2>My tech Stack</h2>
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