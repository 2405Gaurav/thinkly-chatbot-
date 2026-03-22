import React from "react";

export function DSAIllustration() {
  return (
    <svg viewBox="0 0 420 420" className="w-full h-full drop-shadow-xl">
      <defs>
        <pattern id="dp" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
          <polygon points="0,0 18,0 9,15.6" fill="#7c3aed" opacity="0.9"/>
          <polygon points="9,15.6 18,0 27,15.6" fill="#a78bfa" opacity="0.7"/>
          <polygon points="18,0 36,0 27,15.6" fill="#8b5cf6" opacity="0.8"/>
          <polygon points="0,0 9,15.6 0,31.2" fill="#6d28d9" opacity="0.85"/>
          <polygon points="9,15.6 18,31.2 0,31.2" fill="#c4b5fd" opacity="0.5"/>
          <polygon points="9,15.6 27,15.6 18,31.2" fill="#ddd6fe" opacity="0.4"/>
        </pattern>
      </defs>
      
      {/* Background Subtle Grid */}
      <rect width="420" height="420" fill="#f5f3ff" opacity="0.5" />

      {/* Tree Connections */}
      <g stroke="#a78bfa" strokeWidth="4" strokeLinecap="round">
        <line x1="210" y1="70" x2="110" y2="140" opacity="0.5"/>
        {/* Highlighted Path */}
        <line x1="210" y1="70" x2="310" y2="140" stroke="#7c3aed" strokeWidth="6" />
        <line x1="310" y1="140" x2="250" y2="220" stroke="#7c3aed" strokeWidth="6" />
        
        <line x1="110" y1="140" x2="50" y2="220" opacity="0.5"/>
        <line x1="110" y1="140" x2="170" y2="220" opacity="0.5"/>
        <line x1="310" y1="140" x2="370" y2="220" opacity="0.5"/>
      </g>

      {/* Tree Nodes */}
      <circle cx="210" cy="70" r="28" fill="url(#dp)" />
      <circle cx="110" cy="140" r="24" fill="white" stroke="#8b5cf6" strokeWidth="4" />
      <circle cx="310" cy="140" r="28" fill="url(#dp)" stroke="#ddd6fe" strokeWidth="4" />
      
      <circle cx="50" cy="220" r="20" fill="white" stroke="#c4b5fd" strokeWidth="3" />
      <circle cx="170" cy="220" r="20" fill="white" stroke="#c4b5fd" strokeWidth="3" />
      <circle cx="250" cy="220" r="24" fill="url(#dp)" stroke="#ddd6fe" strokeWidth="4"/>
      <circle cx="370" cy="220" r="20" fill="white" stroke="#c4b5fd" strokeWidth="3" />

      {/* Array Data Structure at Bottom */}
      <g transform="translate(90, 310)">
        <rect x="0" y="0" width="240" height="46" rx="8" fill="white" stroke="#a78bfa" strokeWidth="3" />
        <line x1="40" y1="0" x2="40" y2="46" stroke="#c4b5fd" strokeWidth="2" />
        <line x1="80" y1="0" x2="80" y2="46" stroke="#c4b5fd" strokeWidth="2" />
        <line x1="120" y1="0" x2="120" y2="46" stroke="#c4b5fd" strokeWidth="2" />
        <line x1="160" y1="0" x2="160" y2="46" stroke="#c4b5fd" strokeWidth="2" />
        <line x1="200" y1="0" x2="200" y2="46" stroke="#c4b5fd" strokeWidth="2" />
        
        {/* Highlighted Array Element */}
        <rect x="160" y="0" width="40" height="46" fill="url(#dp)" opacity="0.8" />
        <text x="180" y="28" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">i</text>
      </g>
    </svg>
  );
}

export function HRIllustration() {
  return (
    <svg viewBox="0 0 420 420" className="w-full h-full drop-shadow-xl">
      <defs>
        <pattern id="hp" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
          <polygon points="0,0 18,0 9,15.6" fill="#0891b2" opacity="0.9"/>
          <polygon points="9,15.6 18,0 27,15.6" fill="#22d3ee" opacity="0.7"/>
          <polygon points="18,0 36,0 27,15.6" fill="#06b6d4" opacity="0.8"/>
          <polygon points="0,0 9,15.6 0,31.2" fill="#0e7490" opacity="0.85"/>
          <polygon points="9,15.6 18,31.2 0,31.2" fill="#a5f3fc" opacity="0.5"/>
          <polygon points="9,15.6 27,15.6 18,31.2" fill="#cffafe" opacity="0.4"/>
        </pattern>
      </defs>

      {/* Connecting Flow Arrows */}
      <g stroke="#22d3ee" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" fill="none">
        <path d="M 190 120 L 230 120" />
        <path d="M 300 190 L 300 230" />
        <path d="M 230 300 L 190 300" />
      </g>

      {/* S.T.A.R. Method Flow */}
      {/* S - Situation */}
      <rect x="60" y="60" width="120" height="120" rx="20" fill="url(#hp)" />
      <text x="120" y="115" textAnchor="middle" fill="white" fontSize="42" fontWeight="900" opacity="0.3">S</text>
      <text x="120" y="135" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Situation</text>

      {/* T - Task */}
      <rect x="240" y="60" width="120" height="120" rx="20" fill="white" stroke="#06b6d4" strokeWidth="3" />
      <text x="300" y="115" textAnchor="middle" fill="#0891b2" fontSize="42" fontWeight="900" opacity="0.2">T</text>
      <text x="300" y="135" textAnchor="middle" fill="#0e7490" fontSize="14" fontWeight="bold">Task</text>

      {/* R - Result */}
      <rect x="60" y="240" width="120" height="120" rx="20" fill="white" stroke="#06b6d4" strokeWidth="3" />
      <text x="120" y="295" textAnchor="middle" fill="#0891b2" fontSize="42" fontWeight="900" opacity="0.2">R</text>
      <text x="120" y="315" textAnchor="middle" fill="#0e7490" fontSize="14" fontWeight="bold">Result</text>

      {/* A - Action */}
      <rect x="240" y="240" width="120" height="120" rx="20" fill="url(#hp)" />
      <text x="300" y="295" textAnchor="middle" fill="white" fontSize="42" fontWeight="900" opacity="0.3">A</text>
      <text x="300" y="315" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Action</text>

      {/* Central Checkpoint */}
      <circle cx="210" cy="210" r="24" fill="#0891b2" stroke="white" strokeWidth="4" className="drop-shadow-md"/>
      <path d="M 198 210 L 206 218 L 222 202" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type ScoreRow = [label: string, pct: number];

export function MockIllustration(){
  const rows: ScoreRow[] = [
    ["Technical", 0.9],["Communication", 0.75],
    ["Problem Solving", 0.85],
  ];

  return (
    <svg viewBox="0 0 420 420" className="w-full h-full drop-shadow-xl">
      <defs>
        <pattern id="mp" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
          <polygon points="0,0 18,0 9,15.6" fill="#ea580c" opacity="0.9"/>
          <polygon points="9,15.6 18,0 27,15.6" fill="#fb923c" opacity="0.7"/>
          <polygon points="18,0 36,0 27,15.6" fill="#f97316" opacity="0.8"/>
          <polygon points="0,0 9,15.6 0,31.2" fill="#c2410c" opacity="0.85"/>
          <polygon points="9,15.6 18,31.2 0,31.2" fill="#fed7aa" opacity="0.5"/>
          <polygon points="9,15.6 27,15.6 18,31.2" fill="#ffedd5" opacity="0.4"/>
        </pattern>
      </defs>

      {/* Main Video Call App Window */}
      <rect x="20" y="40" width="380" height="340" rx="16" fill="white" stroke="#fed7aa" strokeWidth="2" />
      <rect x="20" y="40" width="380" height="30" fill="#fff7ed" rx="16" />
      <rect x="20" y="60" width="380" height="10" fill="#fff7ed" />
      <circle cx="40" cy="55" r="4" fill="#fb923c" />
      <circle cx="55" cy="55" r="4" fill="#fdba74" />
      <circle cx="70" cy="55" r="4" fill="#fed7aa" />

      {/* Video Feed (Left Side) */}
      <rect x="35" y="85" width="160" height="275" rx="12" fill="#ffedd5" />
      <rect x="45" y="95" width="45" height="18" rx="4" fill="#ea580c" opacity="0.8"/>
      <circle cx="53" cy="104" r="3" fill="white" />
      <text x="62" y="107" fill="white" fontSize="9" fontWeight="bold">REC</text>
      
      {/* Candidate Silhouette */}
      <circle cx="115" cy="190" r="35" fill="#f97316" opacity="0.4" />
      <path d="M 50 290 Q 115 210 180 290 Z" fill="#f97316" opacity="0.4" />

      {/* Scorecard Dashboard (Right Side) */}
      <rect x="210" y="85" width="175" height="275" rx="12" fill="white" stroke="#fed7aa" strokeWidth="1.5" className="drop-shadow-sm" />
      
      {/* Circular Score */}
      <circle cx="297" cy="155" r="45" fill="none" stroke="#ffedd5" strokeWidth="10" />
      <circle
        cx="297" cy="155" r="45"
        fill="none" stroke="url(#mp)" strokeWidth="10"
        strokeDasharray="282.7" strokeDashoffset="42.4"
        strokeLinecap="round"
        transform="rotate(-90 297 155)"
      />
      <text x="297" y="153" textAnchor="middle" fill="#ea580c" fontSize="24" fontWeight="900">85</text>
      <text x="297" y="168" textAnchor="middle" fill="#c2410c" fontSize="10" fontWeight="600">Score</text>

      {/* Metric Bars */}
      {rows.map(([label, pct], i) => (
        <g key={label} transform={`translate(225, ${230 + i * 35})`}>
          <text x="0" y="-6" fill="#9a3412" fontSize="9" fontWeight="700">{label}</text>
          <rect width="145" height="8" rx="4" fill="#ffedd5" />
          <rect width={145 * pct} height="8" rx="4" fill="url(#mp)" />
        </g>
      ))}
    </svg>
  );
}

export function ResumeIllustration() {
  const sections =[
    { y: 135, lw: 70 },
    { y: 225, lw: 55 },
    { y: 315, lw: 40 },
  ];

  return (
    <svg viewBox="0 0 420 420" className="w-full h-full drop-shadow-xl">
      <defs>
        <pattern id="rp" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
          <polygon points="0,0 18,0 9,15.6" fill="#059669" opacity="0.9"/>
          <polygon points="9,15.6 18,0 27,15.6" fill="#34d399" opacity="0.7"/>
          <polygon points="18,0 36,0 27,15.6" fill="#10b981" opacity="0.8"/>
          <polygon points="0,0 9,15.6 0,31.2" fill="#047857" opacity="0.85"/>
          <polygon points="9,15.6 18,31.2 0,31.2" fill="#a7f3d0" opacity="0.5"/>
          <polygon points="9,15.6 27,15.6 18,31.2" fill="#d1fae5" opacity="0.4"/>
        </pattern>
        <linearGradient id="scanGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Document Base */}
      <rect x="95" y="30" width="230" height="350" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="2" />
      
      {/* Header Profile Section */}
      <rect x="95" y="30" width="230" height="65" rx="8" fill="url(#rp)" />
      <rect x="95" y="85" width="230" height="10" fill="url(#rp)" />
      <circle cx="135" cy="62" r="22" fill="white" opacity="0.3" />
      <rect x="170" y="50" width="110" height="10" rx="4" fill="white" opacity="0.9" />
      <rect x="170" y="68" width="70" height="6" rx="3" fill="white" opacity="0.6" />

      {/* Text Blocks (Experience, Education, Skills) */}
      {sections.map(({ y, lw }, idx) => (
        <g key={idx}>
          <rect x="115" y={y}      width={lw}  height="9" rx="4.5" fill="#059669" opacity="0.8"/>
          <rect x="115" y={y + 18} width="180" height="6" rx="3"   fill="#d1fae5"/>
          <rect x="115" y={y + 30} width="150" height="6" rx="3"   fill="#d1fae5"/>
          <rect x="115" y={y + 42} width="165" height="6" rx="3"   fill="#d1fae5"/>
        </g>
      ))}

      {/* ATS Laser Scanner Effect */}
      <rect x="75" y="140" width="270" height="80" fill="url(#scanGradient)" />
      <line x1="75" y1="220" x2="345" y2="220" stroke="#10b981" strokeWidth="4" className="drop-shadow-md" />
      
      {/* Scanner Side Nodes */}
      <circle cx="75" cy="220" r="5" fill="#047857" />
      <circle cx="345" cy="220" r="5" fill="#047857" />

      {/* Floating ATS Badge */}
      <g transform="translate(230, 310)">
        <rect width="115" height="42" rx="10" fill="white" stroke="#059669" strokeWidth="2" className="drop-shadow-lg" />
        <rect width="115" height="42" rx="10" fill="url(#rp)" opacity="0.1" />
        <text x="57" y="16" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="bold" letterSpacing="1">ATS MATCH</text>
        <text x="57" y="32" textAnchor="middle" fill="#059669" fontSize="16" fontWeight="900">99%</text>
        <circle cx="20" cy="24" r="6" fill="#10b981" />
        <path d="M 17 24 L 19 26 L 24 21" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

export const illustrations =[DSAIllustration, HRIllustration, MockIllustration, ResumeIllustration];