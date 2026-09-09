import { useState } from "react";
import { contributions } from "../utils/skillData";
import type { Contribution } from "../utils/skillData";

function ContributionCard({ contribution }: { contribution: Contribution }) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group cursor-pointer rounded-xl p-4 transition-all duration-300"
      style={{
        background: "var(--card-color)",
        boxShadow: "var(--box-shadow)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      {/* Header: name / repo + badge */}
      <div className="flex items-center justify-between mb-2 gap-2">
        <h2 className="text-white font-medium transition-colors duration-300">
          {contribution.name}{" "}
          <span className="text-gray-500 font-normal">/ {contribution.repo}</span>
        </h2>
        <span
          className="shrink-0 text-xs font-mono px-2 py-0.5 rounded border text-(--special-color)"
          style={{ borderColor: "var(--special-color)" }}
        >
          {contribution.badge}
        </span>
      </div>

      <p className="text-sm mb-3 opacity-70" style={{ color: "var(--card-text-color)" }}>
        {contribution.description}
      </p>

      <hr className="border-gray-700 mb-3" />

      <div className="flex justify-start">
        <a
          href={contribution.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link flex items-center gap-1 text-sm underline text-gray-300 transition-colors duration-200 hover:text-(--special-color) hover:no-underline"
        >
          {contribution.linkText}
          <span className="inline-block transition-transform duration-200 rotate-0 group-hover/link:rotate-30">
            →
          </span>
        </a>
      </div>
    </div>
  );
}

export default function ContributionList() {
  return (
    <section>
      <div className="mb-20 max-w-4xl mx-auto mt-20 px-20 md:px-0">
        <p className="text-white">
          // <span className="text-(--special-color)">Open Source</span>
        </p>
        <h2 className="text-white font-bold text-3xl">
          Contributions
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {contributions.map((contribution: Contribution) => (
            <ContributionCard contribution={contribution} key={`${contribution.name}-${contribution.link}`} />
          ))}
        </div>
      </div>

      <div className="h-px w-full bg-gray-700"></div>
    </section>
  );
}