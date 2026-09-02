import { useState, Fragment, type ReactNode } from "react";

interface TimelineItem {
  degree?: string;
  role?: string;
  school?: string;
  company?: string;
  year: string;
  description: string;
  icon: string;
}

interface TimelineCardProps {
  icon: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
}

interface ColumnLabelProps {
  children: ReactNode;
}

interface ExperienceProps {
  ref?: React.Ref<HTMLElement>;
}

const education: TimelineItem[] = [
  {
    degree: "BSc Software Engineering",
    school: "African Leadership University, Rwanda",
    year: "Sept, 2022 - July, 2026",
    description:
      "I'm a software engineering graduate, specialized in full stack development. Relevant Coursework: Python, JavaScript, Flutter etc",
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

const experience: TimelineItem[] = [
  {
    role: "Frontend Developer",
    company: "ProHealium",
    year: "September, 2025",
    description:
      "Collaborated to build a pharmacy management platform for sales tracking, and financial analysis using Next.js, etc.",
    icon: "💻",
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

function TimelineCard({
  icon,
  title,
  subtitle,
  year,
  description,
}: TimelineCardProps) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-full flex gap-4 p-5 cursor-pointer rounded-xl transition-all duration-300"
      style={{
        background: "var(--card-color)",
        boxShadow: hovered
          ? "0px 6px 24px -4px #00abf0"
          : "var(--box-shadow)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      {/* Icon bubble */}
      <div
        className="w-11 h-11 rounded-xl text-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300"
        style={{
          background: hovered
            ? "rgba(0,171,240,0.12)"
            : "rgba(0,171,240,0.07)",
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
            color: hovered ? "#00abf0" : "var(--card-text-color)",
          }}
        >
          {title}
        </h4>

        <p
          className="text-[0.82rem] font-medium mb-0.5"
          style={{ color: "#00abf0" }}
        >
          {subtitle}
        </p>

        <p
          className="text-[0.75rem] mb-2 opacity-50"
          style={{ color: "var(--card-text-color)" }}
        >
          {year}
        </p>

        <p
          className="text-[0.83rem] leading-relaxed opacity-70"
          style={{ color: "var(--card-text-color)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function ColumnLabel({ children }: ColumnLabelProps) {
  return (
    <h3
      className="text-[0.7rem] font-bold tracking-[0.2em] uppercase mb-5 flex items-center gap-2"
      style={{ color: "#00abf0" }}
    >
      <span
        className="block h-px flex-1"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,171,240,0.4), transparent)",
        }}
      />

      {children}

      <span
        className="block h-px flex-1"
        style={{
          background:
            "linear-gradient(270deg, rgba(0,171,240,0.4), transparent)",
        }}
      />
    </h3>
  );
}

export default function Experience({ ref }: ExperienceProps) {
  const rowCount = Math.max(education.length, experience.length);

  const rows = Array.from({ length: rowCount }, (_, i) => ({
    edu: education[i],
    exp: experience[i],
  }));

  return (
    <section
      id="experiences"
      ref={ref}
      className="max-w-4xl mx-auto mt-36"
      style={{ background: "var(--bg-color)" }}
    >
      {/* Heading */}
      <p className="text-white mb-4">
        //{" "}
        <span className="text-(--special-color)">
          experience && education
        </span>
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-4 max-w-5xl mx-auto">
        {/* Labels */}
        <ColumnLabel>Education</ColumnLabel>
        <ColumnLabel>Experience</ColumnLabel>

        {/* Paired rows */}
        {rows.map((row, i) => (
          <Fragment key={i}>
            {row.edu ? (
              <TimelineCard
                icon={row.edu.icon}
                title={row.edu.degree ?? ""}
                subtitle={row.edu.school ?? ""}
                year={row.edu.year}
                description={row.edu.description}
              />
            ) : (
              <div />
            )}

            {row.exp ? (
              <TimelineCard
                icon={row.exp.icon}
                title={row.exp.role ?? ""}
                subtitle={row.exp.company ?? ""}
                year={row.exp.year}
                description={row.exp.description}
              />
            ) : (
              <div />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}

