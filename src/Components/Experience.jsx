/* eslint-disable react/prop-types */
import "../styles/educ.css";

const education = [
    {
        degree: "BSc Software Engineering",
        school: "African Leadership University, Rwanda",
        year: "Sept, 2022 - Present",
        description: "I'm a final year student specializing in full stack development. Relevant Coursework: Python, JavaScript, Flutter etc",
        icon: "🎓"
    },
    {
        degree: "Cambridge A-levels",
        school: "African Science Academy, Tema, Ghana",
        year: "2021 - June, 2022",
        description: "Studied A-level mathematics, A-level Physics, robotics and a badminton lover",
        icon: "🎓"
    }

]

const experience = [
    {
        role: "Frontend Developer Intern",
        company: "Odeen Microsystems LLC",
        year: "Jan, 2024 - April, 2024",
        description: `Collaborated with a team to build Odeen's official website, using React, and Tailwind CSS
                    based on provided UI designs.`,
        icon: "💻"
    }
]

export default function Experience({ref}){

    return (
      <section id='experiences' className='education-section' ref={ref}>
        <div className='education-container'>
          <h2 className='education-title'>Education & Experiences</h2>
          <div className='grid md:grid-cols-2'>
              {/* Education section */}
              <div>
                  <h3 className='section-title'>Education</h3>
                  {education.map((edu, index) => (
                      <div key={index} className='card'>
                          <div className='icon'>{edu.icon}</div>
                          <div>
                              <h4 className='degree'>{edu.degree}</h4>
                              <p className='institution'>{edu.school}</p>
                              <p className='year'>{edu.year}</p>
                              <p className='description mt-2'>{edu.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
              {/* Experience Section */}
              <div>
                  <h3 className='section-title'>Experience</h3>
                  {experience.map((exp, index) => (
                      <div key={index} className='card'>
                          <div className='icon'>{exp.icon}</div>
                          <div>
                              <h4 className='degree'>{exp.role}</h4>
                              <p className='institution'>{exp.company}</p>
                              <p className='year'>{exp.year}</p>
                              <p className='description mt-2'>{exp.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
        </div>
      </section>
    )
}
  
