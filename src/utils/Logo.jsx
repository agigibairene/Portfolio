/* eslint-disable react/prop-types */
export default function TechLogo({imagePath, styles}){
    return(
        <div className="tech-card"  style={styles}>
            <img src={imagePath} alt={imagePath}/>
        </div>
    )
}