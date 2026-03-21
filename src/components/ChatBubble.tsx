"use client";

import { UIMessage } from "ai";
import { useEffect, useRef } from "react";

interface ChatBubbleProps {
  message: UIMessage;
  accent?: { color: string; bg: string };
}

export default function ChatBubble({
  message,
  accent = { color: "#7c3aed", bg: "#f3eeff" },
}: ChatBubbleProps) {
  const isUser = message.role === "user";
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bubbleRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message.parts]);

  const getText = () =>
    message.parts
      .filter((part): part is { type: "text"; text: string } => part.type === "text")
      .map((p) => p.text)
      .join("");

  const text = getText();

  return (
    <div
      ref={bubbleRef}
      className={`flex w-full mb-4 animate-fade-in ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className="relative max-w-[85%] md:max-w-[75%] px-5 py-3.5 shadow-sm"
        style={{
          borderRadius: isUser ? "1.25rem 1.25rem 0.375rem 1.25rem" : "1.25rem 1.25rem 1.25rem 0.375rem",
          backgroundColor: isUser ? accent.color : "white",
          color: isUser ? "white" : "#1f2937",
          border: isUser ? "none" : "1px solid #e5e7eb",
          boxShadow: isUser
            ? `0 4px 14px ${accent.color}44`
            : "0 2px 8px rgba(0,0,0,0.06)",
          transition: "background-color 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        {/* AI label row */}
        {!isUser && (
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
            <span
              className="text-xs font-bold"
              style={{ color: accent.color }}
            >
              PlacementGPT
            </span>
          </div>
        )}

        <div className="text-sm leading-relaxed whitespace-pre-wrap break-words">
          {renderMarkdown(text, accent, isUser)}
        </div>
      </div>
    </div>
  );
}

function renderMarkdown(
  text: string,
  accent: { color: string; bg: string },
  isUser: boolean
) {
  if (!text) return null;

  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeContent = "";
  let codeLanguage = "";
  let codeBlockKey = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <div
            key={`code-${codeBlockKey++}`}
            className="my-3 rounded-xl overflow-hidden"
            style={{ border: "1px solid #e5e7eb" }}
          >
            <div
              className="px-4 py-1.5 text-xs font-mono font-semibold"
              style={{ background: accent.bg, color: accent.color }}
            >
              {codeLanguage || "code"}
            </div>
            <pre
              className="p-4 overflow-x-auto text-xs leading-relaxed"
              style={{ background: "#f9fafb", color: "#374151" }}
            >
              <code>{codeContent.trimEnd()}</code>
            </pre>
          </div>
        );
        codeContent = "";
        codeLanguage = "";
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
        codeLanguage = line.slice(3).trim();
      }
      continue;
    }

    if (inCodeBlock) { codeContent += line + "\n"; continue; }

    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-sm font-bold mt-4 mb-1.5" style={{ color: accent.color }}>
          {renderInline(line.slice(4), accent, isUser)}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-base font-extrabold mt-4 mb-2" style={{ color: isUser ? "white" : "#111827" }}>
          {renderInline(line.slice(3), accent, isUser)}
        </h2>
      );
    } else if (line.startsWith("# ")) {
      elements.push(
        <h1 key={i} className="text-lg font-extrabold mt-4 mb-2" style={{ color: isUser ? "white" : "#111827" }}>
          {renderInline(line.slice(2), accent, isUser)}
        </h1>
      );
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      elements.push(
        <div key={i} className="flex items-start gap-2 ml-2 my-0.5">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accent.color }} />
          <span>{renderInline(line.slice(2), accent, isUser)}</span>
        </div>
      );
    } else if (/^\d+\.\s/.test(line)) {
      const match = line.match(/^(\d+)\.\s(.*)$/);
      if (match) {
        elements.push(
          <div key={i} className="flex items-start gap-2 ml-2 my-0.5">
            <span className="font-bold text-xs min-w-[1.2rem] flex-shrink-0" style={{ color: accent.color }}>
              {match[1]}.
            </span>
            <span>{renderInline(match[2], accent, isUser)}</span>
          </div>
        );
      }
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={i}
          className="pl-3 my-2 text-xs italic py-1 rounded-r"
          style={{
            borderLeft: `3px solid ${accent.color}`,
            background: accent.bg,
            color: "#4b5563",
          }}
        >
          {renderInline(line.slice(2), accent, isUser)}
        </blockquote>
      );
    } else if (line.startsWith("---")) {
      elements.push(<hr key={i} className="my-3 border-gray-100" />);
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="h-2" />);
    } else {
      elements.push(
        <p key={i} className="my-0.5">
          {renderInline(line, accent, isUser)}
        </p>
      );
    }
  }

  if (inCodeBlock && codeContent) {
    elements.push(
      <div key={`code-${codeBlockKey}`} className="my-3 rounded-xl overflow-hidden" style={{ border: "1px solid #e5e7eb" }}>
        <div className="px-4 py-1.5 text-xs font-mono font-semibold" style={{ background: accent.bg, color: accent.color }}>
          {codeLanguage || "code"}
        </div>
        <pre className="p-4 overflow-x-auto text-xs leading-relaxed" style={{ background: "#f9fafb", color: "#374151" }}>
          <code>{codeContent.trimEnd()}</code>
        </pre>
      </div>
    );
  }

  return elements;
}

function renderInline(
  text: string,
  accent: { color: string; bg: string },
  isUser: boolean
): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*|`([^`]+)`|\*(.+?)\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));

    if (match[2]) {
      parts.push(
        <strong key={key++} style={{ fontWeight: 700, color: isUser ? "white" : "#111827" }}>
          {match[2]}
        </strong>
      );
    } else if (match[3]) {
      parts.push(
        <code
          key={key++}
          className="px-1.5 py-0.5 rounded text-xs font-mono"
          style={{
            background: isUser ? "rgba(255,255,255,0.2)" : accent.bg,
            color: isUser ? "white" : accent.color,
          }}
        >
          {match[3]}
        </code>
      );
    } else if (match[4]) {
      parts.push(
        <em key={key++} className="italic" style={{ color: isUser ? "rgba(255,255,255,0.85)" : "#6b7280" }}>
          {match[4]}
        </em>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts.length === 1 ? parts[0] : parts;
}