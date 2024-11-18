import TechLogo from '../utils/Logo';

import reactLogo from '/reactjs.svg';
import jsLogo from '/javascript.png';
import nodejs from '/node-js.svg';
import expressLogo from '/express.svg';
import flutter from "/flutter.svg";
import dart from "/dart.svg";

import anime from '/anime.gif';

const logos = [jsLogo, reactLogo, nodejs, expressLogo, flutter, dart];

export default function About(){
    return(
        <section id="about">
            <h2>About me</h2>
            <div className="mini-image">
                <img src={anime} alt="" />
            </div>
            <div className="about-txt">
                
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