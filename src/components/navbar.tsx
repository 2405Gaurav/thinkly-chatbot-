"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const MODE_COLORS: Record<string, string> = {
  "/chat": "#7c3aed",
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "https://thegauravthakur.in", external: true },
  { label: "GitHub", href: "https://github.com/2405Gaurav", external: true, icon: GitHubIcon },
];

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3 h-3 opacity-50"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detect accent from current route
  const accentColor = Object.entries(MODE_COLORS).find(([route]) =>
    pathname.startsWith(route)
  )?.[1] ?? "#7c3aed";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid #e5e7eb" : "1px solid transparent",
          boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
          fontFamily: "'DM Sans', system-ui, sans-serif",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group select-none"
            aria-label="PlacementGPT home"
          >
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-transform duration-300 group-hover:scale-110"
              style={{ background: `${accentColor}18` }}
            >
              🚀
            </span>
            <span
              className="text-base font-black tracking-tight text-gray-800"
              style={{ letterSpacing: "-0.02em" }}
            >
              Placement
              <span
                style={{ color: accentColor, transition: "color 0.4s ease" }}
              >
                GPT
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = !link.external && pathname === link.href;
              const Icon = link.icon;

              if (link.external) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{
                      color: "#6b7280",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = accentColor;
                      e.currentTarget.style.background = `${accentColor}0f`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#6b7280";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {Icon && <Icon />}
                    {link.label}
                    <ExternalIcon />
                  </a>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive ? accentColor : "#6b7280",
                    background: isActive ? `${accentColor}0f` : "transparent",
                    fontWeight: isActive ? 700 : 500,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

        
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg gap-1.5 transition-colors duration-200"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{ background: mobileOpen ? `${accentColor}10` : "transparent" }}
          >
            <span
              className="w-5 h-0.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: accentColor,
                transform: mobileOpen ? "rotate(45deg) translate(2px, 3px)" : "none",
              }}
            />
            <span
              className="w-5 h-0.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: accentColor,
                opacity: mobileOpen ? 0 : 1,
                transform: mobileOpen ? "scaleX(0)" : "none",
              }}
            />
            <span
              className="w-5 h-0.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: accentColor,
                transform: mobileOpen ? "rotate(-45deg) translate(2px, -3px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="fixed inset-x-0 top-16 z-40 sm:hidden transition-all duration-300 ease-out"
        style={{
          opacity: mobileOpen ? 1 : 0,
          transform: mobileOpen ? "translateY(0)" : "translateY(-8px)",
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
      >
        <div
          className="mx-4 rounded-2xl p-3 shadow-xl"
          style={{
            background: "rgba(255,255,255,0.97)",
            border: "1px solid #e5e7eb",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = !link.external && pathname === link.href;
              const Icon = link.icon;

              if (link.external) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 transition-colors duration-200"
                    style={{ color: "#6b7280" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {Icon && <Icon />}
                    {link.label}
                    <ExternalIcon />
                  </a>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200"
                  style={{
                    color: isActive ? accentColor : "#6b7280",
                    background: isActive ? `${accentColor}0f` : "transparent",
                    fontWeight: isActive ? 700 : 500,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-2 mt-1" style={{ borderTop: "1px solid #f3f4f6" }}>
              <Link
                href="/chat?mode=mock"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                style={{
                  backgroundColor: accentColor,
                  boxShadow: `0 4px 14px ${accentColor}44`,
                }}
              >
                🚀 Start Free Mock Interview
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 sm:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Spacer so page content isn't hidden under fixed nav */}
      <div className="h-16" />
    </>
  );
}