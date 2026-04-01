import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { FaMediumM, FaGithub, FaLinkedinIn } from "react-icons/fa";

const contacts = [
  {
    label: "EMAIL",
    value: "agigibaakawin@gmail.com",
    href: "mailto:agigibaakawin@gmail.com",
    icon: Mail,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/irene-agigiba",
    href: "https://www.linkedin.com/in/irene-agigiba-476a39214/",
    icon: FaLinkedinIn,
  },
  {
    label: "GITHUB",
    value: "agigibairene",
    href: "https://github.com/agigibairene",
    icon: FaGithub,
  },
  {
    label: "MEDIUM",
    value: "Irene Agigiba",
    href: "https://medium.com/@ireneagigiba",
    icon: FaMediumM,
  },
];

function ContactCard({ label, value, href, icon: Icon }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex items-center gap-4 p-5 rounded-2xl cursor-pointer transition-all duration-300 h-full"
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(12px)",
        border: "none",
        boxShadow: hovered ? "0 0 40px -4px #00abf0aa, 0 0 80px -10px #00abf066" : "var(--box-shadow)",
      }}
    >
      {/* Icon */}
      <div
        className="flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300"
        style={{
          background: hovered ? "#00abf022" : "transparent",
          color: "var(--text-color)",
          border: "var(--border-color)",
        }}
      >
        <Icon size={18} />
      </div>

      {/* Text */}
      <div className="flex flex-col min-w-0 flex-grow">
        <span
          className="text-[10px] tracking-widest"
          style={{ color: "var(--text-color)", opacity: 0.6 }}
        >
          {label}
        </span>
        <span
          className="text-sm truncate"
          style={{ color: "var(--card-text-color)" }}
        >
          {value}
        </span>
      </div>

      {/* Arrow */}
      <div
        className="transition-all duration-300"
        style={{
          color: "#00abf0",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-6px)",
        }}
      >
        <ArrowRight size={16} />
      </div>
    </a>
  );
}

export default function Contacts() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 sm:p-10"
      style={{ color: "var(--text-color)" }}
    >
      <div
        className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl rounded-3xl p-6 sm:p-8"
        style={{
          background: "var(--card-color)",
        backdropFilter: "blur(12px)",
          border: "none",
          boxShadow: "var(--box-shadow)",
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl" style={{ color: "var(--special-color)" }}>
            ~
          </span>
          <h2 className="text-2xl sm:text-3xl text-[#00abf0] font-semibold">
            Get in Touch
          </h2>
        </div>

        {/* Description */}
        <p className="text-sm mb-6 max-w-md" style={{ opacity: 0.7 }}>
          I'm open to work. Let's build
          something impactful together.
        </p>

        {/* Divider */}
        <div
          className="w-10 h-px mb-8"
          style={{ background: "var(--special-color)" }}
        />

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-fr" style={{gap: '2rem'}}>
          {contacts.map((c) => (
            <ContactCard key={c.label} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
}
