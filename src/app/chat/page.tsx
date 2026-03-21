"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { ChatMode, MODES } from "@/lib/promptBuilder";
import ChatBubble from "@/components/ChatBubble";
import TypingIndicator from "@/components/TypingIndicator";
import PromptSuggestions from "@/components/PromptSuggestions";

// ─── Accent palette ────────────────────────────────────────────────────────────
const MODE_META: Record<string, { color: string; bg: string; light: string }> = {
  dsa:    { color: "#7c3aed", bg: "#f3eeff", light: "#ede9fe" },
  hr:     { color: "#0891b2", bg: "#ecfeff", light: "#cffafe" },
  mock:   { color: "#ea580c", bg: "#fff7ed", light: "#fed7aa" },
  resume: { color: "#059669", bg: "#ecfdf5", light: "#a7f3d0" },
};

// ─── Sidebar mode items ────────────────────────────────────────────────────────
const SIDEBAR_MODES: { id: ChatMode; emoji: string; label: string; sublabel: string }[] = [
  { id: "dsa",    emoji: "🧠", label: "DSA Practice",    sublabel: "Coding problems" },
  { id: "hr",     emoji: "💬", label: "HR Interview",    sublabel: "Behavioral rounds" },
  { id: "mock",   emoji: "🎯", label: "Mock Interview",  sublabel: "Full simulation" },
  { id: "resume", emoji: "📄", label: "Resume Review",   sublabel: "ATS & feedback" },
];

// ─── Sidebar ───────────────────────────────────────────────────────────────────
function ChatSidebar({
  mode,
  onModeChange,
  collapsed,
  onToggle,
  disabled,
}: {
  mode: ChatMode;
  onModeChange: (m: ChatMode) => void;
  collapsed: boolean;
  onToggle: () => void;
  disabled: boolean;
}) {
  const accent = MODE_META[mode];

  return (
    <aside
      className="flex-shrink-0 flex flex-col h-full transition-all duration-300 ease-in-out"
      style={{
        width: collapsed ? "64px" : "220px",
        background: "#f0f7ff",
        borderRight: "1px solid #dbeafe",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      {/* Sidebar header */}
      <div
        className="flex items-center justify-between px-3 py-4 flex-shrink-0"
        style={{ borderBottom: "1px solid #dbeafe" }}
      >
        {!collapsed && (
          <Link href="/" className="flex items-center gap-2 group select-none">
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center text-sm transition-transform group-hover:scale-110"
              style={{ background: accent.bg }}
            >
              🚀
            </span>
            <span
              className="text-sm font-black text-gray-800 tracking-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Placement<span style={{ color: accent.color }}>GPT</span>
            </span>
          </Link>
        )}
        {collapsed && (
          <Link href="/" className="mx-auto">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
              style={{ background: accent.bg }}
            >
              🚀
            </span>
          </Link>
        )}
        <button
          onClick={onToggle}
          className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-200 ml-1"
          style={{ color: "#6b7280" }}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 transition-transform duration-300"
            style={{ transform: collapsed ? "rotate(180deg)" : "none" }}
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </div>

      {/* Study modes section */}
      <div className="flex-1 overflow-y-auto py-4 px-2 flex flex-col gap-1">
        {!collapsed && (
          <p
            className="text-[10px] font-bold uppercase tracking-widest px-2 mb-2"
            style={{ color: "#93c5fd" }}
          >
            Study Modes
          </p>
        )}

        {SIDEBAR_MODES.map((m) => {
          const isActive = mode === m.id;
          const meta = MODE_META[m.id];
          return (
            <button
              key={m.id}
              onClick={() => !disabled && onModeChange(m.id)}
              disabled={disabled}
              title={collapsed ? m.label : undefined}
              className="w-full flex items-center rounded-xl transition-all duration-200 group"
              style={{
                padding: collapsed ? "10px 0" : "10px 10px",
                justifyContent: collapsed ? "center" : "flex-start",
                gap: collapsed ? "0" : "10px",
                background: isActive ? meta.bg : "transparent",
                border: isActive ? `1.5px solid ${meta.light}` : "1.5px solid transparent",
                cursor: disabled ? "not-allowed" : "pointer",
                opacity: disabled ? 0.6 : 1,
                boxShadow: isActive ? `0 2px 8px ${meta.color}18` : "none",
              }}
            >
              {/* Emoji icon */}
              <span
                className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-lg transition-transform duration-200 group-hover:scale-110"
                style={{
                  background: isActive ? meta.light : "#e0f2fe",
                  boxShadow: isActive ? `0 0 0 2px ${meta.color}30` : "none",
                }}
              >
                {m.emoji}
              </span>

              {!collapsed && (
                <div className="text-left min-w-0">
                  <p
                    className="text-xs font-bold leading-tight truncate"
                    style={{ color: isActive ? meta.color : "#374151" }}
                  >
                    {m.label}
                  </p>
                  <p
                    className="text-[10px] leading-tight truncate"
                    style={{ color: isActive ? meta.color + "99" : "#9ca3af" }}
                  >
                    {m.sublabel}
                  </p>
                </div>
              )}

              {/* Active dot */}
              {isActive && (
                <span
                  className="ml-auto flex-shrink-0 w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: meta.color,
                    display: collapsed ? "none" : "block",
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom study tip */}
      {!collapsed && (
        <div
          className="mx-2 mb-3 p-3 rounded-xl"
          style={{ background: "#dbeafe", border: "1px solid #bfdbfe" }}
        >
          <p className="text-[10px] font-bold text-blue-700 uppercase tracking-wider mb-1">
            📚 Study Tip
          </p>
          <p className="text-[10px] text-blue-600 leading-relaxed">
            Practice daily — even 20 mins of DSA keeps interview skills sharp.
          </p>
        </div>
      )}

      {/* Back to home link */}
      <div
        className="px-2 pb-3 flex-shrink-0"
        style={{ borderTop: "1px solid #dbeafe", paddingTop: "10px" }}
      >
        <Link
          href="/"
          className="flex items-center rounded-xl transition-colors duration-200"
          style={{
            padding: collapsed ? "8px 0" : "8px 10px",
            justifyContent: collapsed ? "center" : "flex-start",
            gap: "8px",
            color: "#6b7280",
          }}
          title={collapsed ? "Home" : undefined}
        >
          <span
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "#e0f2fe" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </span>
          {!collapsed && (
            <span className="text-xs font-semibold text-gray-500">Back to Home</span>
          )}
        </Link>
      </div>
    </aside>
  );
}

// ─── Main chat content ─────────────────────────────────────────────────────────
function ChatContent() {
  const searchParams = useSearchParams();
  const initialMode = (searchParams.get("mode") as ChatMode) || "dsa";
  const [mode, setMode] = useState<ChatMode>(initialMode);
  const [input, setInput] = useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const accent = MODE_META[mode] ?? MODE_META.dsa;

  const transport = useMemo(
    () => new DefaultChatTransport({ api: "/api/chat", body: { mode } }),
    [mode]
  );

  const { messages, sendMessage, status, error, setMessages } = useChat({
    id: `placement-chat-${mode}`,
    transport,
  });

  const isLoading = status === "submitted" || status === "streaming";
  const currentSuggestions = MODES[mode].suggestions;

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => { scrollToBottom(); }, [messages, scrollToBottom]);
  useEffect(() => { if (!isLoading) inputRef.current?.focus(); }, [isLoading]);

  const handleSend = async (text?: string) => {
    const msg = text || input.trim();
    if (!msg || isLoading) return;
    setInput("");
    await sendMessage({ text: msg });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleModeChange = (newMode: ChatMode) => {
    if (newMode !== mode) {
      setMode(newMode);
      setMessages([]);
    }
  };

  return (
    <div
      className="flex h-dvh overflow-hidden"
      style={{ background: "#f7f7f5", fontFamily: "'DM Sans', system-ui, sans-serif" }}
    >
      {/* ── SIDEBAR ── */}
      <ChatSidebar
        mode={mode}
        onModeChange={handleModeChange}
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed((c) => !c)}
        disabled={isLoading}
      />

      {/* ── CHAT PANEL ── */}
      <div className="flex flex-col flex-1 min-w-0 h-full">

        {/* Header */}
        <header
          className="flex-shrink-0 px-4 sm:px-6 py-3.5 flex items-center justify-between"
          style={{
            background: "white",
            borderBottom: "1px solid #e5e7eb",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
              style={{ background: accent.bg }}
            >
              {MODES[mode].emoji}
            </div>
            <div>
              <h1 className="text-sm font-bold text-gray-800 leading-tight">
                {MODES[mode].label}
              </h1>
              <p className="text-[10px] text-gray-400 font-medium">
                {SIDEBAR_MODES.find((m) => m.id === mode)?.sublabel}
              </p>
            </div>
          </div>

          {/* Active mode badge */}
          <span
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white"
            style={{
              backgroundColor: accent.color,
              boxShadow: `0 2px 8px ${accent.color}44`,
              transition: "background-color 0.4s",
            }}
          >
            {MODES[mode].emoji} {MODES[mode].label} Mode
          </span>
        </header>

        {/* Messages */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-2xl mx-auto w-full px-4 sm:px-6 py-6">
            {messages.length === 0 ? (
              <EmptyState mode={mode} onSuggestionClick={handleSend} accent={accent} />
            ) : (
              <>
                {messages.map((message) => (
                  <ChatBubble key={message.id} message={message} accent={accent} />
                ))}
                {status === "submitted" && <TypingIndicator accent={accent} />}
              </>
            )}

            {error && (
              <div className="flex justify-center my-6">
                <div
                  className="rounded-2xl px-6 py-5 text-center max-w-md w-full"
                  style={{ background: "#fef2f2", border: "1px solid #fecaca" }}
                >
                  <p className="text-red-600 text-sm font-semibold mb-1">Something went wrong</p>
                  <p className="text-red-400 text-xs mb-4">{error.message}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-5 py-2 rounded-lg text-sm font-medium text-white"
                    style={{ backgroundColor: "#ef4444" }}
                  >
                    Try Again
                  </button>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </main>

        {/* Input */}
        <footer
          className="flex-shrink-0 px-4 sm:px-6 py-4"
          style={{ background: "white", borderTop: "1px solid #e5e7eb" }}
        >
          <div className="max-w-2xl mx-auto w-full">
            {messages.length > 0 && !isLoading && (
              <div className="mb-3">
                <PromptSuggestions
                  suggestions={currentSuggestions.slice(0, 2)}
                  onSelect={handleSend}
                  disabled={isLoading}
                  accent={accent}
                />
              </div>
            )}

            <div className="flex gap-3 items-end">
              <div className="flex-1">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={`Ask about ${MODES[mode].label}…`}
                  disabled={isLoading}
                  rows={1}
                  className="w-full rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 resize-none outline-none transition-all duration-200 disabled:opacity-50"
                  style={{
                    minHeight: "52px",
                    maxHeight: "140px",
                    background: "#f0f7ff",
                    border: "1.5px solid #dbeafe",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = `${accent.color}88`;
                    e.currentTarget.style.background = "white";
                    e.currentTarget.style.boxShadow = `0 0 0 3px ${accent.color}14`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#dbeafe";
                    e.currentTarget.style.background = "#f0f7ff";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              <button
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="flex-shrink-0 w-[52px] h-[52px] rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: isLoading || !input.trim() ? "#e5e7eb" : accent.color,
                  color: isLoading || !input.trim() ? "#9ca3af" : "white",
                  cursor: isLoading || !input.trim() ? "not-allowed" : "pointer",
                  boxShadow: isLoading || !input.trim() ? "none" : `0 4px 14px ${accent.color}44`,
                }}
              >
                {isLoading ? (
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                )}
              </button>
            </div>

            <p className="text-center text-[11px] text-gray-400 mt-2.5">
              PlacementGPT can make mistakes. Always verify important information.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

// ─── Empty state ───────────────────────────────────────────────────────────────
function EmptyState({
  mode,
  onSuggestionClick,
  accent,
}: {
  mode: ChatMode;
  onSuggestionClick: (t: string) => void;
  accent: { color: string; bg: string; light: string };
}) {
  const config = MODES[mode];
  return (
    <div className="flex flex-col items-center justify-center py-12 sm:py-20 animate-fade-in">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5"
        style={{ background: accent.bg, boxShadow: `0 8px 24px ${accent.color}22` }}
      >
        {config.emoji}
      </div>

      <h2 className="text-xl sm:text-2xl font-extrabold text-gray-800 mb-1 tracking-tight">
        Hi, I&apos;m PlacementGPT
      </h2>
      <p className="text-gray-400 text-sm mb-3 font-light">Your AI-powered placement mentor</p>

      <span
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold text-white mb-8"
        style={{ backgroundColor: accent.color, boxShadow: `0 4px 12px ${accent.color}44` }}
      >
        {config.emoji} {config.label} Mode
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
        {config.suggestions.map((s, i) => (
          <button
            key={i}
            onClick={() => onSuggestionClick(s)}
            className="text-left p-4 rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            style={{ borderColor: "#dbeafe", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${accent.color}55`;
              e.currentTarget.style.boxShadow = `0 4px 16px ${accent.color}18`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#dbeafe";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
            }}
          >
            <p className="text-sm text-gray-500 leading-relaxed">{s}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Page export ───────────────────────────────────────────────────────────────
export default function ChatPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-dvh" style={{ background: "#f0f7ff" }}>
          <div
            className="w-10 h-10 border-2 border-t-transparent rounded-full animate-spin"
            style={{ borderColor: "#0891b2", borderTopColor: "transparent" }}
          />
        </div>
      }
    >
      <ChatContent />
    </Suspense>
  );
}