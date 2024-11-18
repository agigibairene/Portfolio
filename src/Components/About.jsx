import TechLogo from '../utils/Logo';

import reactLogo from '/reactjs.svg';
import jsLogo from '/javascript.png';
import nodejs from '/node-js.svg';
import expressLogo from '/express.svg';

const logos = [jsLogo, reactLogo, nodejs, expressLogo];

export default function About(){
    return(
        <section id="about">
            <h2>About me</h2>
            <div className="mini-image">

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