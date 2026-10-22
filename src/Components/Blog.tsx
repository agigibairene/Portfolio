import { useState } from "react";
import { articles } from "../utils/skillData";
import type { Articles } from "../utils/skillData";

function ArticleCard({ article }: { article: Articles }) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <a
      href={article.demo}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group block cursor-pointer rounded-xl p-4 transition-all duration-300 border"
      style={{
        background: "var(--card-color)",
        boxShadow: "var(--box-shadow)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        borderColor: article.featured ? "var(--special-color)" : "transparent",
      }}
    >
      <h2 className="text-white font-medium mb-2 leading-snug">
        {article.name}
      </h2>

      <p className="text-sm mb-3 opacity-70" style={{ color: "var(--card-text-color)" }}>
        {article.type}
      </p>

      <hr className="border-gray-700 mb-3" />

      <div className="flex items-center justify-between mb-3">
        <span
          className="text-xs font-mono px-2 py-0.5 rounded border text-(--special-color)"
          style={{ borderColor: "var(--special-color)" }}
        >
          {article.tag}
        </span>
        <span className="text-sm opacity-50" style={{ color: "var(--card-text-color)" }}>
          {article.date}
        </span>
      </div>

      <span className="group/link flex items-center gap-1 text-sm text-(--special-color) font-medium">
        Read post
        <span className="inline-block transition-transform duration-200 rotate-0 group-hover/link:rotate-30">
          →
        </span>
      </span>
    </a>
  );
}

export default function BlogList() {
  return (
    <section id='blog'>
      <div className="mb-20 max-w-4xl mx-auto mt-20 px-6 md:px-0">
        <p className="text-white">
          // <span className="text-(--special-color)">Writing</span>
        </p>
        <h2 className="text-white font-bold text-3xl">
          Blog posts
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 items-start">
          {articles.map((article: Articles) => (
            <ArticleCard article={article} key={article.demo} />
          ))}
        </div>
      </div>

      <div className="h-px w-full bg-gray-700"></div>
    </section>
  );
}