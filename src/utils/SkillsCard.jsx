/* eslint-disable react/prop-types */
import { LuBadgeCheck } from "react-icons/lu"; 
import '../styles/skills.css';
import { motion } from "framer-motion";

const SkillsCard = ({ title, skills }) => {
    return (
        <motion.div 
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale:1}}
            transition={{type: "spring", stiffness: 15, delay: 0.2}}
            className="skills-card"
        >
            <h3 className="skills-card__title">{title}</h3>
            <div className="skills-card__grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skills-card__item">
                        <LuBadgeCheck className="skills-card__icon" />
                        <div>
                            <h4 className="skills-card__name">{skill.name}</h4>
                            <span className="skills-card__level">{skill.level}</span>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillsCard;
