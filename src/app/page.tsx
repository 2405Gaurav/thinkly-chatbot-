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
            AI Interview Mentor
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

      {/* STATS */}
      <section className="w-full py-12 border-t border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { v: "4", l: "Practice Modes" },
            { v: "FAANG", l: "Level Questions" },
            { v: "AI", l: "Powered Feedback" },
            { v: "24/7", l: "Always Available" },
          ].map((s, i) => (
            <div key={i} className="py-4">
              <div className="text-3xl font-black text-gray-800 mb-1">{s.v}</div>
              <div className="text-sm text-gray-400 font-medium">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="w-full py-24 px-8 sm:px-14">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400 mb-3">What you get</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-14 tracking-tight">
            Every tool you need<br />to get placed.
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {modes.map((m, i) => (
              <Link
                href={m.href}
                key={i}
                className="group p-8 rounded-2xl border border-gray-100 bg-white hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: m.bg }}
                  >
                    {m.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{m.label}</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">{m.desc}</p>
                <span className="text-sm font-semibold" style={{ color: m.color }}>
                  Start practicing →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="w-full py-20 px-8 sm:px-14">
        <div
          className="max-w-3xl mx-auto rounded-3xl p-14 text-center"
          style={{ background: mode.bg, transition: "background 0.6s ease" }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
            Ready to get placed?
          </h2>
          <p className="text-base text-gray-500 mb-10 max-w-md mx-auto font-light">
            No signup required. Start your first AI mock interview in seconds.
          </p>
          <Link
            href="/chat?mode=mock"
            className="inline-flex px-10 py-4 rounded-xl text-base font-bold text-white"
            style={{
              backgroundColor: mode.color,
              boxShadow: `0 4px 24px ${mode.color}55`,
              transition: "background-color 0.5s ease",
            }}
          >
            Start Mock Interview →
          </Link>
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