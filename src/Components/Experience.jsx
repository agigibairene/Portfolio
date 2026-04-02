/* eslint-disable react/prop-types */
import { useState } from "react";

const education = [
  {
    degree: "BSc Software Engineering",
    school: "African Leadership University, Rwanda",
    year: "Sept, 2022 - Present",
    description:
      "I'm a final year student specializing in full stack development. Relevant Coursework: Python, JavaScript, Flutter etc",
    icon: "🎓",
  },
  {
    degree: "Cambridge A-levels",
    school: "African Science Academy, Tema, Ghana",
    year: "2021 - June, 2022",
    description:
      "Studied A-level mathematics, A-level Physics, robotics and a badminton lover",
    icon: "🎓",
  },
];

const experience = [
  {
    role: "Frontend Developer",
    company: "ProHealium",
    year: "September, 2025",
    description: `Collaborated to build a pharmacy management platform for sales tracking, and financial analysis using Next.js, etc.
    `,
    icon: "💻"
  },
  {
    role: "Frontend Developer Intern",
    company: "Odeen Microsystems LLC",
    year: "Jan, 2024 - April, 2024",
    description:
      "Collaborated with a team to build Odeen's official website, using React and Tailwind CSS based on provided UI designs.",
    icon: "💻",
  },
];

function TimelineCard({ icon, title, subtitle, year, description }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex gap-4 p-5 cursor-pointer rounded-xl transition-all duration-300"
      style={{
        background: "var(--card-color)",
        boxShadow: hovered ? "0px 6px 24px -4px #00abf0" : "var(--box-shadow)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      {/* Icon bubble */}
      <div
        className="w-11 h-11 rounded-xl text-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300"
        style={{
          background: hovered ? "rgba(0,171,240,0.12)" : "rgba(0,171,240,0.07)",
          border: hovered
            ? "1px solid rgba(0,171,240,0.4)"
            : "1px solid rgba(0,171,240,0.15)",
        }}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <h4
          className="text-[0.95rem] font-bold leading-snug mb-0.5 transition-colors duration-300"
          style={{
            fontFamily: "'Syne', sans-serif",
            color: hovered ? "#00abf0" : "var(--card-text-color)",
          }}
        >
          {title}
        </h4>
        <p
          className="text-[0.82rem] font-medium mb-0.5"
          style={{ color: "#00abf0", fontFamily: "'DM Sans', sans-serif" }}
        >
          {subtitle}
        </p>
        <p
          className="text-[0.75rem] font-mono mb-2 opacity-50"
          style={{ color: "var(--card-text-color)" }}
        >
          {year}
        </p>
        <p
          className="text-[0.83rem] leading-relaxed opacity-70"
          style={{ color: "var(--card-text-color)", fontFamily: "'DM Sans', sans-serif" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function ColumnLabel({ children }) {
  return (
    <h3
      className="text-[0.7rem] font-bold tracking-[0.2em] uppercase mb-5 flex items-center gap-2"
      style={{ color: "#00abf0", fontFamily: "'DM Mono', monospace" }}
    >
      <span
        className="block h-px flex-1"
        style={{ background: "linear-gradient(90deg, rgba(0,171,240,0.4), transparent)" }}
      />
      {children}
      <span
        className="block h-px flex-1"
        style={{ background: "linear-gradient(270deg, rgba(0,171,240,0.4), transparent)" }}
      />
    </h3>
  );
}

export default function Experience({ ref }) {
  return (
      <section
        id="experiences"
        ref={ref}
        className="py-16 px-4 sm:px-8 md:px-[5%]"
        style={{ background: "var(--bg-color)" }}
      >
        {/* Heading */}
        <h2
          className="text-center font-medium mb-10"
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
            fontFamily: "'Playfair Display', serif",
            color: "var(--special-color)",
          }}
        >
          ~ Education & Experience ~
        </h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
          {/* Education */}
          <div>
            <ColumnLabel>Education</ColumnLabel>
            <div className="flex flex-col gap-4">
              {education.map((edu, i) => (
                <TimelineCard
                  key={i}
                  icon={edu.icon}
                  title={edu.degree}
                  subtitle={edu.school}
                  year={edu.year}
                  description={edu.description}
                />
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <ColumnLabel>Experience</ColumnLabel>
            <div className="flex flex-col gap-4">
              {experience.map((exp, i) => (
                <TimelineCard
                  key={i}
                  icon={exp.icon}
                  title={exp.role}
                  subtitle={exp.company}
                  year={exp.year}
                  description={exp.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}