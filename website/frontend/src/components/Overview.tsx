export default function Overview() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="text-center py-12">
        <h2 className="text-4xl font-bold mb-4">
          Stop Guessing. Start Prompting.
        </h2>
        <p className="text-xl text-[#a0a0a0] max-w-3xl mx-auto">
          Each AI platform has unique strengths. The same prompt on Claude,
          Gemini, and Grok can yield dramatically different results. This guide
          shows you <strong className="text-white">which model to use</strong>{" "}
          and <strong className="text-white">how to prompt it</strong> for
          maximum results.
        </p>
      </section>

      {/* Quick Decision Matrix */}
      <section>
        <h3 className="text-2xl font-bold mb-4">Quick Decision: Which Model?</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#141414]">
                <th className="text-left p-3 border border-[#2a2a3e]">Task</th>
                <th className="text-center p-3 border border-[#2a2a3e]">Best Choice</th>
                <th className="text-center p-3 border border-[#2a2a3e]">Runner-Up</th>
                <th className="text-left p-3 border border-[#2a2a3e]">Why</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Complex coding / architecture", "Claude", "ChatGPT", "Best at large codebases, systematic refactoring, and following complex instructions"],
                ["Real-time news / X (Twitter) data", "Grok", "Gemini", "Native X/Twitter search + live web access"],
                ["Google-grounded research", "Gemini", "Grok", "Native Google Search integration with citations"],
                ["Math / logic verification", "DeepSeek", "Claude", "Specialized reasoning, fast, cheap"],
                ["Creative writing / brainstorming", "Claude", "ChatGPT", "Nuanced, avoids cliches, follows style constraints"],
                ["Quick Q&A / general chat", "ChatGPT", "Gemini", "Fast, conversational, huge knowledge base"],
                ["Financial analysis / data", "Claude + Grok MoE", "Gemini", "MoE consensus catches single-model blind spots"],
                ["Long document analysis", "Gemini / Claude", "ChatGPT", "1M+ token context windows"],
                ["CLI / terminal workflows", "Claude Code", "Gemini CLI", "Full filesystem access, git integration, tool use"],
              ].map(([task, best, runner, why], i) => (
                <tr key={i} className="border-b border-[#2a2a3e] hover:bg-[#141414]">
                  <td className="p-3 border border-[#2a2a3e] font-medium">{task}</td>
                  <td className="p-3 border border-[#2a2a3e] text-center font-bold">{best}</td>
                  <td className="p-3 border border-[#2a2a3e] text-center text-[#a0a0a0]">{runner}</td>
                  <td className="p-3 border border-[#2a2a3e] text-[#a0a0a0]">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Model Strengths Cards */}
      <section>
        <h3 className="text-2xl font-bold mb-4">Platform Strengths at a Glance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              name: "Claude",
              color: "#d97706",
              strengths: ["200K context window", "XML-structured prompts", "Extended thinking (deep reasoning)", "Best code generation", "Safest / most aligned"],
              weaknesses: ["No live web search in chat", "Can be overly cautious"],
            },
            {
              name: "Gemini",
              color: "#4285f4",
              strengths: ["1M+ token context", "Native Google Search grounding", "Multimodal (images, video, audio)", "Free tier generous", "Fast inference"],
              weaknesses: ["Inconsistent on complex logic", "Verbose responses"],
            },
            {
              name: "Grok",
              color: "#1da1f2",
              strengths: ["Real-time X/Twitter access", "Web search built-in", "Uncensored / direct style", "Great for current events", "xAI DeepSearch mode"],
              weaknesses: ["Smaller knowledge base", "Less reliable on code"],
            },
            {
              name: "ChatGPT",
              color: "#10a37f",
              strengths: ["Largest ecosystem (plugins, GPTs)", "Strong general knowledge", "Good at conversation", "Image generation (DALL-E)", "Function calling"],
              weaknesses: ["Knowledge cutoff lag", "Can hallucinate confidently"],
            },
            {
              name: "DeepSeek",
              color: "#7c3aed",
              strengths: ["Exceptional math/logic", "Open-weight models", "Very cheap API", "R1 reasoning chain", "Great for verification"],
              weaknesses: ["Limited web access", "Less polished UX"],
            },
            {
              name: "CLI Tools",
              color: "#22c55e",
              strengths: ["Full filesystem access", "Git integration", "Multi-file editing", "Automated workflows", "No copy-paste needed"],
              weaknesses: ["Learning curve", "Terminal-only interface"],
            },
          ].map((model) => (
            <div
              key={model.name}
              className="bg-[#1a1a2e] rounded-lg p-5 border border-[#2a2a3e] hover:border-opacity-60 transition-all"
              style={{ borderTopColor: model.color, borderTopWidth: "3px" }}
            >
              <h4 className="text-lg font-bold mb-3" style={{ color: model.color }}>
                {model.name}
              </h4>
              <div className="space-y-2">
                <div>
                  <p className="text-xs font-semibold text-[#22c55e] mb-1">STRENGTHS</p>
                  <ul className="text-sm text-[#a0a0a0] space-y-0.5">
                    {model.strengths.map((s, i) => (
                      <li key={i}>+ {s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#ef4444] mb-1">WATCH OUT</p>
                  <ul className="text-sm text-[#a0a0a0] space-y-0.5">
                    {model.weaknesses.map((w, i) => (
                      <li key={i}>- {w}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The MoE Approach */}
      <section className="bg-[#1a1a2e] rounded-lg p-6 border border-[#2a2a3e]">
        <h3 className="text-2xl font-bold mb-3">The Power Move: Mixture of Experts (MoE)</h3>
        <p className="text-[#a0a0a0] mb-4">
          For high-stakes decisions, don&apos;t rely on a single model. Use multiple AI
          platforms as a panel of experts, then synthesize their responses into a
          consensus. This catches blind spots, reduces hallucination, and produces
          more reliable results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#141414] rounded-lg p-4">
            <h4 className="font-bold text-[#f59e0b] mb-2">Phase 1: Parallel Research</h4>
            <p className="text-sm text-[#a0a0a0]">
              Send the same question to Grok (for X/web data), Gemini (for
              Google-grounded research), and Claude (for deep reasoning).
              Collect all responses.
            </p>
          </div>
          <div className="bg-[#141414] rounded-lg p-4">
            <h4 className="font-bold text-[#f59e0b] mb-2">Phase 2: Discussion</h4>
            <p className="text-sm text-[#a0a0a0]">
              Synthesize findings, send back to ALL experts (including DeepSeek
              for math verification). Each expert votes AGREE or DISAGREE with
              evidence. Repeat until consensus.
            </p>
          </div>
          <div className="bg-[#141414] rounded-lg p-4">
            <h4 className="font-bold text-[#f59e0b] mb-2">Phase 3: Final Report</h4>
            <p className="text-sm text-[#a0a0a0]">
              Produce a final report with consensus findings, flagged
              disagreements, and source citations. This is 10x more reliable
              than any single model&apos;s output.
            </p>
          </div>
        </div>
      </section>

      {/* Universal Rules */}
      <section>
        <h3 className="text-2xl font-bold mb-4">Universal Prompting Rules (All Platforms)</h3>
        <div className="space-y-3">
          {[
            { title: "Be Specific", desc: "\"Analyze Q4 revenue trends for SaaS companies\" beats \"tell me about business\"" },
            { title: "Give Context", desc: "\"I'm a portfolio manager evaluating risk\" changes the entire response framing" },
            { title: "Specify Format", desc: "\"Return as a markdown table with columns: Company, Revenue, YoY Growth\" eliminates ambiguity" },
            { title: "Use Examples", desc: "Show 2-3 examples of desired output. Few-shot prompting improves accuracy 15-30%" },
            { title: "Iterate, Don't Restart", desc: "Follow up in the same conversation to refine. Models retain context and improve with feedback" },
            { title: "Break Complex Tasks", desc: "Split a 10-step analysis into 3 focused prompts. Each gets more attention than one mega-prompt" },
          ].map((rule, i) => (
            <div key={i} className="bg-[#141414] rounded-lg p-4 flex gap-4 items-start">
              <span className="text-2xl font-bold text-[#f59e0b] shrink-0 w-8 text-center">{i + 1}</span>
              <div>
                <h4 className="font-bold">{rule.title}</h4>
                <p className="text-sm text-[#a0a0a0]">{rule.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
