"use client";

interface PromptSuggestionsProps {
  suggestions: string[];
  onSelect: (prompt: string) => void;
  disabled?: boolean;
  accent?: { color: string; bg: string };
}

export default function PromptSuggestions({
  suggestions,
  onSelect,
  disabled,
  accent = { color: "#7c3aed", bg: "#f3eeff" },
}: PromptSuggestionsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {suggestions.map((suggestion, i) => (
        <button
          key={i}
          onClick={() => onSelect(suggestion)}
          disabled={disabled}
          className="px-4 py-2 rounded-xl text-sm font-medium text-gray-600 bg-white border border-gray-200 transition-all duration-300"
          style={{
            cursor: disabled ? "not-allowed" : "pointer",
            opacity: disabled ? 0.5 : 1,
          }}
          onMouseEnter={(e) => {
            if (disabled) return;
            e.currentTarget.style.borderColor = `${accent.color}55`;
            e.currentTarget.style.color = accent.color;
            e.currentTarget.style.background = accent.bg;
            e.currentTarget.style.boxShadow = `0 2px 12px ${accent.color}18`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#e5e7eb";
            e.currentTarget.style.color = "#4b5563";
            e.currentTarget.style.background = "white";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
}