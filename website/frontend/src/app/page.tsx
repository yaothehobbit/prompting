"use client";

import { useState } from "react";
import Overview from "@/components/Overview";
import ClaudeGuide from "@/components/ClaudeGuide";
import GeminiGuide from "@/components/GeminiGuide";
import GrokGuide from "@/components/GrokGuide";
import ChatGPTGuide from "@/components/ChatGPTGuide";
import DeepSeekGuide from "@/components/DeepSeekGuide";
import CLIGuide from "@/components/CLIGuide";
import Techniques from "@/components/Techniques";

const tabs = [
  { id: "overview", label: "Overview", color: "#e8e8e8" },
  { id: "techniques", label: "Techniques", color: "#f59e0b" },
  { id: "claude", label: "Claude", color: "#d97706" },
  { id: "gemini", label: "Gemini", color: "#4285f4" },
  { id: "grok", label: "Grok", color: "#1da1f2" },
  { id: "chatgpt", label: "ChatGPT", color: "#10a37f" },
  { id: "deepseek", label: "DeepSeek", color: "#7c3aed" },
  { id: "cli", label: "CLI Tools", color: "#22c55e" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview": return <Overview />;
      case "techniques": return <Techniques />;
      case "claude": return <ClaudeGuide />;
      case "gemini": return <GeminiGuide />;
      case "grok": return <GrokGuide />;
      case "chatgpt": return <ChatGPTGuide />;
      case "deepseek": return <DeepSeekGuide />;
      case "cli": return <CLIGuide />;
      default: return <Overview />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-[#2a2a3e] bg-[#0d0d0d] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                AI Prompting Guide
              </h1>
              <p className="text-sm text-[#a0a0a0] mt-1">
                RS Fund Management — Which model, which prompt, best results
              </p>
            </div>
            <a
              href="https://www.rsfundmanagement.com"
              className="text-sm text-[#a0a0a0] hover:text-white transition-colors"
            >
              rsfundmanagement.com
            </a>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex gap-1 overflow-x-auto pb-0 -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap rounded-t-lg transition-all ${
                  activeTab === tab.id
                    ? "text-white bg-[#1a1a2e]"
                    : "text-[#a0a0a0] hover:text-white hover:bg-[#141414]"
                }`}
                style={
                  activeTab === tab.id
                    ? { borderBottom: `2px solid ${tab.color}` }
                    : {}
                }
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">{renderContent()}</main>

      {/* Footer */}
      <footer className="border-t border-[#2a2a3e] py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-[#a0a0a0]">
          <p>
            Built with insights from MoE research consensus (Claude + Grok +
            Gemini + DeepSeek + Cerebras)
          </p>
          <p className="mt-1">
            &copy; {new Date().getFullYear()} RS Fund Management
          </p>
        </div>
      </footer>
    </div>
  );
}
