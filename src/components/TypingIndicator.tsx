"use client";

import { useEffect, useState } from "react";

const LOADING_TEXTS = [
  "Analyzing your answer…",
  "Thinking like an interviewer…",
  "Preparing feedback…",
  "Processing your response…",
  "Evaluating your approach…",
  "Crafting detailed insights…",
];

interface TypingIndicatorProps {
  accent?: { color: string; bg: string };
}

export default function TypingIndicator({
  accent = { color: "#7c3aed", bg: "#f3eeff" },
}: TypingIndicatorProps) {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % LOADING_TEXTS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-start mb-4 animate-fade-in">
      <div
        className="rounded-2xl rounded-bl-md px-5 py-3.5 max-w-[75%]"
        style={{
          background: "white",
          border: "1px solid #e5e7eb",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        {/* Label row */}
        <div
          className="flex items-center gap-2 mb-2 pb-2"
          style={{ borderBottom: "1px solid #f3f4f6" }}
        >
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
            style={{ background: accent.bg }}
          >
            🤖
          </div>
          <span className="text-xs font-bold" style={{ color: accent.color }}>
            PlacementGPT
          </span>
        </div>

        {/* Dots + text */}
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {[0, 150, 300].map((delay) => (
              <span
                key={delay}
                className="w-2 h-2 rounded-full animate-bounce"
                style={{
                  backgroundColor: accent.color,
                  animationDelay: `${delay}ms`,
                  opacity: 0.7,
                }}
              />
            ))}
          </div>
          <span
            className="text-sm transition-all duration-500"
            style={{ color: "#9ca3af" }}
          >
            {LOADING_TEXTS[textIndex]}
          </span>
        </div>
      </div>
    </div>
  );
}