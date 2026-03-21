"use client";

import { ChatMode, MODES, ModeConfig } from "@/lib/promptBuilder";

const MODE_META: Record<string, { color: string; bg: string }> = {
  dsa:    { color: "#7c3aed", bg: "#f3eeff" },
  hr:     { color: "#0891b2", bg: "#ecfeff" },
  mock:   { color: "#ea580c", bg: "#fff7ed" },
  resume: { color: "#059669", bg: "#ecfdf5" },
};

interface ModeSelectorProps {
  currentMode: ChatMode;
  onModeChange: (mode: ChatMode) => void;
  disabled?: boolean;
}

export default function ModeSelector({ currentMode, onModeChange, disabled }: ModeSelectorProps) {
  const modes = Object.values(MODES);

  return (
    <div className="flex flex-wrap gap-2">
      {modes.map((mode: ModeConfig) => {
        const isActive = currentMode === mode.id;
        const meta = MODE_META[mode.id] ?? MODE_META.dsa;

        return (
          <button
            key={mode.id}
            onClick={() => onModeChange(mode.id)}
            disabled={disabled}
            className="relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
            style={{
              backgroundColor: isActive ? meta.color : "#f3f4f6",
              color: isActive ? "white" : "#6b7280",
              boxShadow: isActive ? `0 4px 14px ${meta.color}44` : "none",
              transform: isActive ? "scale(1.04)" : "scale(1)",
              border: isActive ? `1.5px solid ${meta.color}` : "1.5px solid transparent",
              cursor: disabled ? "not-allowed" : "pointer",
              opacity: disabled ? 0.55 : 1,
            }}
          >
            <span className="text-base leading-none">{mode.emoji}</span>
            <span>{mode.label}</span>

            {/* Active dot */}
            {isActive && (
              <span
                className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full animate-pulse"
                style={{
                  backgroundColor: "#4ade80",
                  border: "2px solid white",
                  boxShadow: "0 0 6px #4ade8099",
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}