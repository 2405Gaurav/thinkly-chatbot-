"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { illustrations } from "@/components/landing-page/herocomponents";
import { modes } from "@/lib/landing-modes";
import Navbar from "@/components/navbar";



export default function Home() {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 80);
    const iv = setInterval(() => setCurrent((p) => (p + 1) % modes.length), 3200);
    return () => { clearTimeout(t); clearInterval(iv); };
  }, []);

  const mode = modes[current];

  return (
    <main
      className="min-h-screen font-sans overflow-x-hidden"
      style={{ background: "#f7f7f5", fontFamily: "'DM Sans', system-ui, sans-serif" }}
    >
     

      {/* HERO */}
          <Navbar />
      <section className="relative min-h-[calc(100vh-72px)] flex flex-col lg:flex-row items-center overflow-hidden">

        {/* Left */}
        <div
          className="w-full lg:w-5/12 px-8 sm:px-14 py-14 lg:py-0 flex flex-col items-start justify-center z-10"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400 mb-6">
            AI Mentor
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-[3.4rem] font-extrabold text-gray-800 leading-[1.1] mb-8 tracking-tight">
            Ace your campus<br />
            placements with<br />
            <span style={{ color: mode.color, transition: "color 0.5s ease" }}>
              {mode.text}
            </span>
          </h1>

          {/* Mode switcher */}
          <div className="flex gap-3 mb-8 flex-wrap">
            {modes.map((m, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-14 h-14 flex items-center justify-center text-2xl rounded-2xl transition-all duration-300"
                style={{
                  background: current === i ? "white" : "transparent",
                  boxShadow: current === i ? `0 4px 20px ${m.color}33` : "none",
                  transform: current === i ? "scale(1.12)" : "scale(1)",
                  filter: current === i ? "none" : "grayscale(0.5) opacity(0.55)",
                  outline: current === i ? `2px solid ${m.color}44` : "none",
                }}
                title={m.label}
              >
                {m.icon}
              </button>
            ))}
          </div>

          <p className="text-base sm:text-lg text-gray-500 mb-10 max-w-md leading-relaxed font-light">
            {mode.desc}
          </p>

          <Link
            href={mode.href}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white"
            style={{
              backgroundColor: mode.color,
              boxShadow: `0 4px 20px ${mode.color}44`,
              transition: "background-color 0.5s ease, box-shadow 0.5s ease",
            }}
          >
            Try {mode.label} →
          </Link>
        </div>

        {/* Right — illustration */}
        <div
          className="w-full lg:w-7/12 relative h-[55vh] lg:h-[calc(100vh-72px)] flex items-center justify-center pointer-events-none px-8 sm:px-14 lg:pr-16"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "scale(1)" : "scale(0.95)",
            transition: "opacity 1s ease 0.25s, transform 1s ease 0.25s",
          }}
        >
          {/* Colored blob bg */}
          <div
            className="absolute inset-10 rounded-[3rem] pointer-events-none"
            style={{ background: mode.bg, transition: "background 0.6s ease" }}
          />

          <div className="relative w-full h-full max-w-lg flex items-center justify-center p-10">
            {illustrations.map((Illo, i) => (
              <div
                key={i}
                className="absolute inset-0 flex items-center justify-center p-12"
                style={{
                  opacity: current === i ? 1 : 0,
                  transform: current === i ? "scale(1)" : "scale(0.92)",
                  transition: "opacity 0.55s ease, transform 0.55s ease",
                  pointerEvents: "none",
                }}
              >
                <Illo />
              </div>
            ))}
          </div>

          {/* Mode chip */}
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-xs font-bold shadow-sm"
            style={{
              background: "white",
              color: mode.color,
              border: `1.5px solid ${mode.color}33`,
              transition: "color 0.5s ease, border-color 0.5s ease",
              whiteSpace: "nowrap",
            }}
          >
            {mode.icon} {mode.label}
          </div>
        </div>
      </section>

   {/* ── STATS ── */}
      <section className="w-full" style={{ background: "white", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { v: "4",     l: "Practice modes"    },
              { v: "FAANG", l: "Level questions"   },
              { v: "AI",    l: "Powered feedback"  },
              { v: "24/7",  l: "Always available"  },
            ].map((s, i) => (
              <div key={i} className="flex flex-col py-10 px-8">
                <div
                  className="text-4xl font-black tracking-tight mb-1.5"
                  style={{
                    color: mode.color,
                    transition: "color 0.5s ease",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.v}
                </div>
                <div className="text-xs font-medium text-gray-400 tracking-wide">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS ── */}
      <section className="w-full py-32 px-8 sm:px-14" style={{ background: "#f7f7f5" }}>
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="mb-16 max-w-xl">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-4"
              style={{ color: mode.color, transition: "color 0.5s" }}
            >
              What you get
            </p>
            <h2
              className="text-4xl sm:text-5xl font-black text-gray-900 leading-[1.06]"
              style={{ letterSpacing: "-0.03em" }}
            >
              Every tool you need<br />to get placed.
            </h2>
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 gap-3">
            {modes.map((m, i) => (
              <Link
                href={m.href}
                key={i}
                className="group relative flex flex-col p-9 rounded-2xl bg-white transition-all duration-500 hover:-translate-y-1"
                style={{
                  border: "1px solid #ebebeb",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
                }}
              >
                {/* Top bar accent — grows on hover */}
                <div
                  className="absolute top-0 left-8 right-8 h-px transition-all duration-500 group-hover:left-0 group-hover:right-0 rounded-full"
                  style={{ backgroundColor: m.color, opacity: 0.6 }}
                />

                {/* Icon square */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-7 text-lg transition-transform duration-300 group-hover:scale-105"
                  style={{ background: m.bg }}
                >
                  <span style={{ fontSize: "18px", lineHeight: 1 }}>{m.icon}</span>
                </div>

                <h3
                  className="text-lg font-bold text-gray-900 mb-2.5"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {m.label}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-8 flex-1">
                  {m.desc}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-semibold tracking-wide"
                    style={{ color: m.color }}
                  >
                    Start practicing
                  </span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: m.color }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="w-full py-24 px-8 sm:px-14" style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto">
          <div
            className="relative overflow-hidden rounded-3xl px-12 sm:px-20 py-20"
            style={{ background: "#0f0f0f" }}
          >
            {/* Subtle color bloom behind text */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at center, ${mode.color}28 0%, transparent 70%)`,
                transition: "background 0.6s ease",
              }}
            />

            {/* Thin top border in accent color */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${mode.color}88, transparent)`, transition: "background 0.6s ease" }}
            />

            <div className="relative flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
              <div className="max-w-lg">
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-5"
                  style={{ color: mode.color, transition: "color 0.5s" }}
                >
                  No signup required
                </p>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.06] mb-5"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  Ready to get<br />placed?
                </h2>
                <p className="text-base font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Start your first AI mock interview in seconds.<br />
                  No account, no credit card.
                </p>
              </div>

              <div className="flex flex-col gap-3 flex-shrink-0">
                <Link
                  href="/chat?mode=mock"
                  className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: mode.color,
                    boxShadow: `0 4px 24px ${mode.color}55`,
                    transition: "background-color 0.5s ease",
                  }}
                >
                  Start Mock Interview
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/chat?mode=dsa"
                  className="inline-flex items-center justify-center px-9 py-4 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  Practice DSA instead
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-gray-100 py-8 px-8 sm:px-14 flex items-center justify-between">
        <span className="text-sm font-black text-gray-800">
          Placement<span style={{ color: mode.color, transition: "color 0.5s" }}>GPT</span>
        </span>
        <span className="text-xs text-gray-300">Built with Next.js</span>
      </footer>
    </main>
  );
}