/* eslint-disable react/prop-types */
import profileImg from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home({ ref }) {
  return (
    <section
      id="homepage"
      ref={ref}
      className="min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-[5%] py-24"
      style={{ background: "var(--bg-color)", color: "var(--text-color)" }}
    >
      {/* Main content row */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 w-full max-w-6xl mx-auto">
        
        {/* Text side */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3"
            style={{ color: "var(--text-color)",  }}
          >
            <span style={{ color: "var(--special-color)" }}>
              Hiii{" "}
              <span className="inline-block animate-[wave_2s_ease-in-out_infinite] origin-[70%_70%]">
                👋
              </span>
              , I&apos;m
            </span>
            <br />
            Irene Akawin Agigiba
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-base sm:text-lg font-semibold mb-4"
            style={{ color: "var(--special-color)" }}
          >
            Software Engineer | Full Stack Enthusiast
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="text-sm sm:text-base leading-relaxed max-w-xl opacity-75"
            style={{ color: "var(--text-color)" }}
          >
            I love creating innovative solutions that have a meaningful impact on
            society. Beyond software, I&apos;m an agriculture enthusiast 🪴🌿,
            deeply passionate about the pivotal role farming plays in our lives.
            I&apos;m devoted to leveraging technology to make agriculture more
            efficient, productive, and sustainable.
          </motion.p>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex items-center gap-3 mt-8"
          >
            <span
              className="text-sm font-medium opacity-60"
              style={{ color: "var(--text-color)" }}
            >
              Visit my:
            </span>
            <a
              href="https://github.com/agigibairene"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                border: "var(--border-color)",
                background: "var(--card-color)",
                color: "var(--icon-color)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#00abf0";
                e.currentTarget.style.borderColor = "#00abf0";
                e.currentTarget.style.boxShadow = "0 0 14px -2px #00abf0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--icon-color)";
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/irene-agigiba-476a39214/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                border: "var(--border-color)",
                background: "var(--card-color)",
                color: "var(--icon-color)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#00abf0";
                e.currentTarget.style.borderColor = "#00abf0";
                e.currentTarget.style.boxShadow = "0 0 14px -2px #00abf0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--icon-color)";
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <FaLinkedin size={18} />
            </a>
          </motion.div>
        </div>

        {/* Profile image side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0 }}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <div
            className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden"
            style={{
              border: "3px solid #00abf0",
              boxShadow: "0 0 40px -8px #00abf0",
            }}
          >
            <img
              src={profileImg}
              alt="Irene Agigiba"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Wave keyframe */}
      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-15deg); }
          40% { transform: rotate(15deg); }
          60% { transform: rotate(-10deg); }
          80% { transform: rotate(10deg); }
        }
        .animate-\\[wave_2s_ease-in-out_infinite\\] {
          animation: wave 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}