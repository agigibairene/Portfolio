import "../styles/skills.css";
import { frontend, backend } from "../utils/skillData";
import SkillsCard from "../utils/SkillsCard";
export default function Skills(){
    return(
        <section className="skills section" id="skills">
            <h2 className="section__title">My Skills</h2>
            <div className="skills__container container grid">
                <SkillsCard title="Frontend" skills={frontend}/>
                <SkillsCard title="Backend" skills={backend}/>
            </div>
        </section>
    )
}