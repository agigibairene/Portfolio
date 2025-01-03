/* eslint-disable react/prop-types */
export default function TechLogo({imagePath, styles,theme}){
    return(
        <div className="tech-card"  style={styles}>
            <img src={imagePath} alt={imagePath} style={{filter: theme === "dark" ? "invert(1)" : "invert(0)"}}/>
        </div>
    )
}