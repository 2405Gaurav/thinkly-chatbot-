# 🚀 PlacementGPT — AI Placement Mentor

> **Crack your placement interviews with AI-powered mentorship.** Practice DSA, HR questions, mock interviews, and get your resume reviewed — all powered by GPT.

---

## ✨ What is PlacementGPT?

PlacementGPT is a purpose-built AI placement mentor designed specifically for **Indian college students** preparing for campus placements. It's not a generic chatbot — it's a **4-in-1 interview preparation tool**.

---

## 🎯 Features

### 🧠 DSA Interview Mode
- Get FAANG-level DSA questions
- Progressive hints (subtle → strong)
- Complexity analysis after every solution
- Topic coverage: Arrays, DP, Graphs, Trees, and more

### 💬 HR Interview Mode
- One question at a time
- STAR method feedback
- Score 1-10 on every answer
- Company-specific tips

### 🎯 Mock Interview Mode
- Full interview simulation (Intro → DSA → HR → Q&A)
- Comprehensive scorecard with verdict
- Score breakdown: Technical, Problem Solving, Communication, Confidence
- Verdict: STRONG HIRE / HIRE / LEAN HIRE / NO HIRE

### 📄 Resume Review Mode
- Section-by-section analysis
- Score out of 10 for each section
- Power words & quantifiable metrics suggestions
- Tailored for Product / Service / Startup companies

### 🎨 Premium UI/UX
- Dark mode with gradient backgrounds
- Glassmorphism effects
- Animated typing indicator
- Smooth message animations
- Custom markdown rendering with code blocks

---

## ⚙️ Tech Stack

| Tech | Purpose |
|------|---------|
| **Next.js 16** (App Router) | Full-stack React framework |
| **TypeScript** | Type safety |
| **Tailwind CSS v4** | Styling |
| **Vercel AI SDK v6** | Streaming AI responses |
| **OpenAI GPT-4o-mini** | LLM backbone |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── chat/
│   │   └── page.tsx          # Main chat UI
│   └── api/
│       └── chat/
│           └── route.ts      # API route (streaming)
├── components/
│   ├── ChatBubble.tsx        # Chat message bubble with markdown
│   ├── ModeSelector.tsx      # Mode pill selector
│   ├── TypingIndicator.tsx   # Animated typing indicator
│   └── PromptSuggestions.tsx # Suggested prompt chips
└── lib/
    ├── promptBuilder.ts      # System prompts per mode
    └── openai.ts             # OpenAI SDK config
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm
- An OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd thinkly-chatbot

# 2. Install dependencies
npm install

# 3. Set up environment variables
# Edit .env.local and add your OpenAI API key
# OPENAI_API_KEY=sk-your-key-here

# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deployment (Vercel)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Add environment variable: `OPENAI_API_KEY`
4. Deploy!

---

## 🧠 Prompt Engineering

The backbone of PlacementGPT is its **mode-specific system prompts**. Each mode has a carefully crafted prompt in `src/lib/promptBuilder.ts` that transforms GPT into a specialized interviewer/mentor.

---

## 📝 Why This Was Built

Indian campus placements are unique — they have a specific structure (DSA + HR + PI), companies have different expectations, and students need targeted preparation. PlacementGPT solves this by providing a **dedicated AI mentor** that understands the Indian placement ecosystem.

---

## 📄 License

MIT License — feel free to use, modify, and distribute.
