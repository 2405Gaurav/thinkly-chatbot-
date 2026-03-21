function DSAIllustration() {
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
      <circle cx="210" cy="80" r="32" fill="url(#dp)" />
      <line x1="210" y1="112" x2="130" y2="175" stroke="#7c3aed" strokeWidth="3" opacity="0.4"/>
      <line x1="210" y1="112" x2="290" y2="175" stroke="#7c3aed" strokeWidth="3" opacity="0.4"/>
      <circle cx="130" cy="200" r="26" fill="url(#dp)" opacity="0.85"/>
      <circle cx="290" cy="200" r="26" fill="url(#dp)" opacity="0.85"/>
      <line x1="130" y1="226" x2="80" y2="285" stroke="#7c3aed" strokeWidth="2.5" opacity="0.35"/>
      <line x1="130" y1="226" x2="180" y2="285" stroke="#7c3aed" strokeWidth="2.5" opacity="0.35"/>
      <line x1="290" y1="226" x2="240" y2="285" stroke="#7c3aed" strokeWidth="2.5" opacity="0.35"/>
      <line x1="290" y1="226" x2="340" y2="285" stroke="#7c3aed" strokeWidth="2.5" opacity="0.35"/>
      <circle cx="80" cy="308" r="20" fill="url(#dp)" opacity="0.7"/>
      <circle cx="180" cy="308" r="20" fill="url(#dp)" opacity="0.7"/>
      <circle cx="240" cy="308" r="20" fill="url(#dp)" opacity="0.7"/>
      <circle cx="340" cy="308" r="20" fill="url(#dp)" opacity="0.7"/>
      <text x="210" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">root</text>
      <text x="130" y="205" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">L</text>
      <text x="290" y="205" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">R</text>
    </svg>
  );
}

function HRIllustration() {
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
      <rect x="60" y="80" width="220" height="80" rx="18" fill="url(#hp)"/>
      <polygon points="100,160 80,188 135,160" fill="#0891b2"/>
      <rect x="140" y="200" width="220" height="70" rx="18" fill="url(#hp)" opacity="0.75"/>
      <polygon points="320,270 342,294 288,270" fill="#06b6d4" opacity="0.75"/>
      <rect x="60" y="305" width="200" height="65" rx="18" fill="url(#hp)" opacity="0.6"/>
      <polygon points="95,370 73,396 138,370" fill="#0891b2" opacity="0.6"/>
      <text x="90" y="122" fill="white" fontSize="13" fontWeight="bold" opacity="0.95">Situation ✦</text>
      <text x="172" y="240" fill="white" fontSize="13" fontWeight="bold" opacity="0.9">Task ✦</text>
      <text x="90" y="342" fill="white" fontSize="13" fontWeight="bold" opacity="0.85">Action ✦</text>
    </svg>
  );
}

function MockIllustration() {
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
      <rect x="90" y="55" width="240" height="310" rx="16" fill="white" opacity="0.6" stroke="#ea580c" strokeWidth="1.5" strokeOpacity="0.3"/>
      <circle cx="210" cy="185" r="72" fill="none" stroke="#fed7aa" strokeWidth="14" opacity="0.5"/>
      <circle cx="210" cy="185" r="72" fill="none" stroke="url(#mp)" strokeWidth="14"
        strokeDasharray="452" strokeDashoffset="113" strokeLinecap="round" transform="rotate(-90 210 185)"/>
      <text x="210" y="178" textAnchor="middle" fill="#ea580c" fontSize="30" fontWeight="900">85</text>
      <text x="210" y="200" textAnchor="middle" fill="#c2410c" fontSize="11" fontWeight="600">/ 100</text>
      <text x="210" y="222" textAnchor="middle" fill="#f97316" fontSize="10">Score</text>
      {[["Technical", 0.9], ["Communication", 0.75], ["Problem Solving", 0.85]].map(([label, pct], i) => (
        <g key={i} transform={`translate(112, ${300 + i * 22})`}>
          <rect width="196" height="7" rx="3.5" fill="#fed7aa" opacity="0.5"/>
          <rect width={196 * pct} height="7" rx="3.5" fill="url(#mp)"/>
          <text x="0" y="-4" fill="#9a3412" fontSize="8.5" fontWeight="600">{label}</text>
        </g>
      ))}
    </svg>
  );
}

function ResumeIllustration() {
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
      </defs>
      <rect x="95" y="45" width="230" height="330" rx="12" fill="white" opacity="0.7"/>
      <rect x="95" y="45" width="230" height="58" rx="12" fill="url(#rp)"/>
      <rect x="95" y="84" width="230" height="19" rx="0" fill="url(#rp)"/>
      <circle cx="132" cy="73" r="20" fill="white" opacity="0.25"/>
      <rect x="162" y="60" width="108" height="10" rx="3" fill="white" opacity="0.75"/>
      <rect x="162" y="76" width="74" height="7" rx="3" fill="white" opacity="0.5"/>
      {[
        { y: 122, label: "Experience", lw: 62 },
        { y: 212, label: "Education", lw: 56 },
        { y: 298, label: "Skills", lw: 36 },
      ].map(({ y, label, lw }) => (
        <g key={label}>
          <rect x="115" y={y} width={lw} height="8" rx="3" fill="#059669" opacity="0.7"/>
          <rect x="115" y={y + 18} width="185" height="5" rx="2.5" fill="#d1fae5"/>
          <rect x="115" y={y + 28} width="148" height="5" rx="2.5" fill="#d1fae5"/>
          <rect x="115" y={y + 38} width="168" height="5" rx="2.5" fill="#d1fae5"/>
        </g>
      ))}
      <rect x="258" y="355" width="65" height="19" rx="9.5" fill="#059669" opacity="0.85"/>
      <text x="290" y="368" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">ATS ✓</text>
    </svg>
  );
}

export const illustrations = [DSAIllustration, HRIllustration, MockIllustration, ResumeIllustration];