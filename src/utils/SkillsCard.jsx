/* eslint-disable react/prop-types */

import { LuBadgeCheck } from "react-icons/lu"; // Importing icon from react-icons
import '../styles/skills.css'; // CSS file for styling

const SkillsCard = ({ title, skills }) => {
    return (
        <div className="skills-card">
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
        </div>
    );
};

export default SkillsCard;
