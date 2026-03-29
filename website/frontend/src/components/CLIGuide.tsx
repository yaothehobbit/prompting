export default function CLIGuide() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold mb-2" style={{ color: "#22c55e" }}>
          CLI Tools — Beyond Traditional Prompting
        </h2>
        <p className="text-[#a0a0a0]">
          CLI-based AI tools eliminate the biggest friction in AI workflows: copy-pasting
          between your editor and a chat window. They read your files, edit your code,
          run your tests, and commit your changes — all from the terminal.
        </p>
      </section>

      {/* Why CLI > Chat */}
      <section className="bg-[#1a1a2e] rounded-lg p-6 border border-[#2a2a3e]">
        <h3 className="text-xl font-bold mb-4 text-[#22c55e]">
          Why CLI Beats Traditional Chat Prompting
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#141414]">
                <th className="text-left p-3 border border-[#2a2a3e]">Aspect</th>
                <th className="text-left p-3 border border-[#2a2a3e]">Chat (Browser)</th>
                <th className="text-left p-3 border border-[#2a2a3e]">CLI (Terminal)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Context", "Copy-paste code snippets manually", "Reads entire codebase automatically"],
                ["Editing", "Copy output, paste into editor, fix formatting", "Edits files directly in place"],
                ["Testing", "Copy code, run manually, paste errors back", "Runs tests, reads errors, fixes automatically"],
                ["Git", "Manual commit/push workflow", "Stages, commits, pushes with messages"],
                ["Multi-file", "One file at a time in chat", "Works across entire project simultaneously"],
                ["Iteration", "Manual back-and-forth", "Autonomous loop: edit → test → fix → repeat"],
                ["Tools", "Web search only (if any)", "File I/O, shell, web, databases, APIs"],
                ["Memory", "Conversation history (limited)", "Project memory persists across sessions"],
              ].map(([aspect, chat, cli], i) => (
                <tr key={i} className="border-b border-[#2a2a3e]">
                  <td className="p-3 border border-[#2a2a3e] font-medium">{aspect}</td>
                  <td className="p-3 border border-[#2a2a3e] text-[#ef4444]/80">{chat}</td>
                  <td className="p-3 border border-[#2a2a3e] text-[#22c55e]">{cli}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Claude Code */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold">Claude Code (Anthropic)</h3>
        <p className="text-[#a0a0a0]">
          The most capable AI CLI tool. Full filesystem access, git integration,
          web search, multi-file editing, and autonomous task execution.
        </p>

        <div className="bg-[#1a1a2e] rounded-lg border border-[#2a2a3e] p-5">
          <h4 className="font-bold mb-3">Getting Started</h4>
          <pre className="text-[#e8e8e8]"><code>{`# Install
npm install -g @anthropic-ai/claude-code

# Start in your project directory
cd your-project
claude

# That's it — Claude can now see your entire codebase`}</code></pre>
        </div>

        <div className="bg-[#1a1a2e] rounded-lg border border-[#2a2a3e] p-5">
          <h4 className="font-bold mb-3">Power Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "CLAUDE.md — Project Instructions",
                desc: "Create a CLAUDE.md file in your project root with persistent instructions. Claude reads it every session — no need to repeat context.",
                example: `# CLAUDE.md
## Architecture
- FastAPI backend + Next.js frontend
- PostgreSQL with SQLAlchemy ORM
- Deploy to Cloud Run

## Rules
- Always write tests for new code
- Use timezone-aware datetime
- Follow existing code patterns`,
              },
              {
                title: "Hooks — Automated Behaviors",
                desc: "Configure hooks that run automatically on events like file edits, session start, or before commits. Enforce linting, testing, and safety checks.",
                example: `// .claude/settings.json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit|Write",
      "command": "python lint_check.py"
    }],
    "Stop": [{
      "command": "python test_reminder.py"
    }]
  }
}`,
              },
              {
                title: "Memory — Cross-Session Persistence",
                desc: "Claude Code remembers user preferences, project context, and feedback across sessions. Build up institutional knowledge over time.",
                example: `# Memory types:
# - user: your role, expertise, preferences
# - feedback: corrections and confirmations
# - project: ongoing work, goals, deadlines
# - reference: external system pointers

# Claude saves these automatically when
# it learns something important`,
              },
              {
                title: "Subagents — Parallel Execution",
                desc: "Spawn specialized agents for independent tasks. Research agents, test runners, and code explorers work in parallel.",
                example: `# In one prompt, Claude can:
# 1. Spawn an agent to explore the codebase
# 2. Spawn another to run tests
# 3. While it reads files itself
# All three work simultaneously

# This is why CLI is faster than chat:
# parallelism is built in`,
              },
            ].map((feat) => (
              <div key={feat.title} className="bg-[#141414] rounded-lg p-4">
                <h5 className="font-bold text-[#22c55e] mb-1">{feat.title}</h5>
                <p className="text-sm text-[#a0a0a0] mb-2">{feat.desc}</p>
                <pre className="text-xs"><code>{feat.example}</code></pre>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1a1a2e] rounded-lg border border-[#2a2a3e] p-5">
          <h4 className="font-bold mb-3">Example Workflows</h4>
          <div className="space-y-4">
            <WorkflowExample
              title="Bug Fix (2 minutes, not 20)"
              steps={[
                "\"Fix the authentication bug in the login endpoint. The error is: JWT token expired but refresh isn't working.\"",
                "Claude reads the auth code, finds the bug, edits the file",
                "Runs existing tests to verify the fix",
                "If tests fail, reads the error and fixes again",
                "Creates a commit with a descriptive message",
              ]}
            />
            <WorkflowExample
              title="New Feature (autonomous)"
              steps={[
                "\"Add rate limiting to all API endpoints. Use Redis with a sliding window algorithm. 100 requests per minute per user.\"",
                "Claude explores the codebase to understand the routing pattern",
                "Creates the rate limiter middleware",
                "Adds it to all routes following existing patterns",
                "Writes tests for the rate limiter",
                "Runs tests, fixes any failures",
                "Commits with clear message explaining the implementation",
              ]}
            />
            <WorkflowExample
              title="MoE Research (via Python scripts)"
              steps={[
                "\"Research the current state of quantum computing in finance. Use MoE protocol.\"",
                "Claude writes Python scripts that call Grok API (for X/web), Gemini API (for Google search), and DeepSeek API (for verification)",
                "Launches all scripts in parallel",
                "Collects results, synthesizes findings",
                "Runs discussion rounds with all experts via API calls",
                "Writes FINAL_REPORT.md with consensus findings",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Other CLI Tools */}
      <section>
        <h3 className="text-2xl font-bold mb-4">Other CLI Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ToolCard
            name="Gemini CLI"
            provider="Google"
            color="#4285f4"
            desc="Google's CLI tool with Gemini models. Includes Google Search grounding. Good for research tasks from the terminal."
            install="npm install -g @anthropic-ai/claude-code"
            strengths={["Google Search built-in", "1M token context", "Free tier available"]}
            weaknesses={["Less mature than Claude Code", "Fewer tool integrations"]}
          />
          <ToolCard
            name="GitHub Copilot CLI"
            provider="GitHub / OpenAI"
            color="#10a37f"
            desc="Shell command suggestion and explanation. Not a full agent — focused on helping you write terminal commands."
            install="gh extension install github/gh-copilot"
            strengths={["Excellent for shell commands", "Git integration", "Explains commands before running"]}
            weaknesses={["Not a full agent (no file editing)", "Limited to command suggestions"]}
          />
          <ToolCard
            name="Aider"
            provider="Open Source"
            color="#f59e0b"
            desc="Open-source AI pair programmer. Supports multiple LLM backends (Claude, GPT, local models). Git-aware editing."
            install="pip install aider-chat"
            strengths={["Model-agnostic (any LLM)", "Open source", "Good git integration"]}
            weaknesses={["Steeper learning curve", "Less autonomous than Claude Code"]}
          />
          <ToolCard
            name="Cursor / Windsurf"
            provider="Various"
            color="#a78bfa"
            desc="IDE-integrated AI coding assistants. Visual interface with AI capabilities. Best for developers who prefer GUIs."
            install="Download from cursor.com / codeium.com"
            strengths={["Visual diff view", "Inline completions", "Project-aware context"]}
            weaknesses={["IDE-specific (not pure CLI)", "Less autonomous"]}
          />
        </div>
      </section>

      {/* CLI Prompting Best Practices */}
      <section>
        <h3 className="text-2xl font-bold mb-4">CLI Prompting Best Practices</h3>
        <div className="space-y-3">
          <div className="tip-card tip-do">
            <strong>Give the end goal, not step-by-step instructions.</strong> CLI tools can explore
            the codebase themselves. &quot;Add user authentication&quot; is better than telling it which
            files to edit.
          </div>
          <div className="tip-card tip-do">
            <strong>Use CLAUDE.md for persistent context.</strong> Instead of repeating project
            architecture every session, put it in CLAUDE.md. The CLI reads it automatically.
          </div>
          <div className="tip-card tip-do">
            <strong>Let it run tests.</strong> The biggest advantage of CLI over chat: it can run
            your test suite, read failures, and fix them in a loop. Trust the autonomous cycle.
          </div>
          <div className="tip-card tip-do">
            <strong>Use hooks for quality enforcement.</strong> Set up linting hooks, test reminders,
            and safety checks. The CLI enforces your standards automatically.
          </div>
          <div className="tip-card tip-info">
            <strong>CLI + Chat = Best combo.</strong> Use CLI for coding and file manipulation.
            Use chat (with Gemini/Grok for web search) for research and brainstorming. They complement each other.
          </div>
          <div className="tip-card tip-dont">
            <strong>Don&apos;t micromanage the agent.</strong> If you find yourself dictating every edit,
            you&apos;re using the CLI like a chat window. Step back, state the goal, and let it work.
          </div>
        </div>
      </section>

      {/* Quick Comparison */}
      <section>
        <h3 className="text-2xl font-bold mb-4">CLI Tool Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#141414]">
                <th className="text-left p-3 border border-[#2a2a3e]">Feature</th>
                <th className="text-center p-3 border border-[#2a2a3e]">Claude Code</th>
                <th className="text-center p-3 border border-[#2a2a3e]">Gemini CLI</th>
                <th className="text-center p-3 border border-[#2a2a3e]">Aider</th>
                <th className="text-center p-3 border border-[#2a2a3e]">Copilot CLI</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["File Editing", "Full", "Full", "Full", "No"],
                ["Git Integration", "Full", "Partial", "Full", "Full"],
                ["Web Search", "Yes", "Yes (Google)", "No", "No"],
                ["Test Running", "Yes", "Yes", "Yes", "No"],
                ["Subagents", "Yes", "No", "No", "No"],
                ["Hooks System", "Yes", "No", "No", "No"],
                ["Memory/Persistence", "Yes", "Limited", "Limited", "No"],
                ["Autonomous Mode", "Yes", "Limited", "Limited", "No"],
                ["Multi-model", "Claude only", "Gemini only", "Any LLM", "GPT only"],
                ["Free Tier", "Limited", "Yes", "BYOK", "GitHub sub"],
              ].map(([feature, cc, gem, aider, copilot], i) => (
                <tr key={i} className="border-b border-[#2a2a3e]">
                  <td className="p-3 border border-[#2a2a3e] font-medium">{feature}</td>
                  <td className="p-3 border border-[#2a2a3e] text-center">{cc}</td>
                  <td className="p-3 border border-[#2a2a3e] text-center">{gem}</td>
                  <td className="p-3 border border-[#2a2a3e] text-center">{aider}</td>
                  <td className="p-3 border border-[#2a2a3e] text-center">{copilot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function WorkflowExample({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="bg-[#141414] rounded-lg p-4">
      <h5 className="font-bold mb-2">{title}</h5>
      <ol className="text-sm text-[#a0a0a0] space-y-1">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-[#22c55e] shrink-0 font-mono">{i + 1}.</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ToolCard({
  name,
  provider,
  color,
  desc,
  install,
  strengths,
  weaknesses,
}: {
  name: string;
  provider: string;
  color: string;
  desc: string;
  install: string;
  strengths: string[];
  weaknesses: string[];
}) {
  return (
    <div
      className="bg-[#1a1a2e] rounded-lg p-5 border border-[#2a2a3e]"
      style={{ borderTopColor: color, borderTopWidth: "3px" }}
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-bold" style={{ color }}>{name}</h4>
        <span className="text-xs text-[#a0a0a0]">{provider}</span>
      </div>
      <p className="text-sm text-[#a0a0a0] mb-3">{desc}</p>
      <pre className="text-xs mb-3"><code>{install}</code></pre>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div>
          <p className="font-semibold text-[#22c55e] mb-1">Strengths</p>
          {strengths.map((s, i) => (
            <p key={i} className="text-[#a0a0a0]">+ {s}</p>
          ))}
        </div>
        <div>
          <p className="font-semibold text-[#ef4444] mb-1">Limitations</p>
          {weaknesses.map((w, i) => (
            <p key={i} className="text-[#a0a0a0]">- {w}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
