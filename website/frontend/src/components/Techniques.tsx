export default function Techniques() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold mb-2">Prompting Techniques</h2>
        <p className="text-[#a0a0a0]">
          Research-backed methods ranked by effectiveness. Based on MoE consensus
          from 5 AI experts (March 2026).
        </p>
      </section>

      {/* Decision Flowchart */}
      <section className="bg-[#1a1a2e] rounded-lg p-6 border border-[#2a2a3e]">
        <h3 className="text-xl font-bold mb-4 text-[#f59e0b]">
          Which Technique Should I Use?
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <span className="text-[#f59e0b] font-mono shrink-0">START</span>
            <span className="text-[#a0a0a0]">Is the task simple with a clear answer?</span>
          </div>
          <div className="ml-8 flex items-start gap-3">
            <span className="text-[#22c55e] font-mono shrink-0">YES &rarr;</span>
            <span><strong>Zero-shot.</strong> Just ask directly. No special technique needed.</span>
          </div>
          <div className="ml-8 flex items-start gap-3">
            <span className="text-[#ef4444] font-mono shrink-0">NO &nbsp;&rarr;</span>
            <span className="text-[#a0a0a0]">Does it require multi-step reasoning?</span>
          </div>
          <div className="ml-16 flex items-start gap-3">
            <span className="text-[#22c55e] font-mono shrink-0">YES &rarr;</span>
            <span>Using a <strong>reasoning model</strong> (Claude Opus, o3, Gemini Thinking)?</span>
          </div>
          <div className="ml-24 flex items-start gap-3">
            <span className="text-[#22c55e] font-mono shrink-0">YES &rarr;</span>
            <span><strong>Just say &quot;think deeply.&quot;</strong> Reasoning models do CoT internally.</span>
          </div>
          <div className="ml-24 flex items-start gap-3">
            <span className="text-[#ef4444] font-mono shrink-0">NO &nbsp;&rarr;</span>
            <span><strong>Chain-of-Thought.</strong> Add &quot;Think step by step&quot; (+10-20% accuracy).</span>
          </div>
          <div className="ml-16 flex items-start gap-3">
            <span className="text-[#ef4444] font-mono shrink-0">NO &nbsp;&rarr;</span>
            <span className="text-[#a0a0a0]">Do you need a specific output format?</span>
          </div>
          <div className="ml-24 flex items-start gap-3">
            <span className="text-[#22c55e] font-mono shrink-0">YES &rarr;</span>
            <span><strong>Few-shot (2-3 examples).</strong> Show the format you want.</span>
          </div>
          <div className="ml-24 flex items-start gap-3">
            <span className="text-[#ef4444] font-mono shrink-0">NO &nbsp;&rarr;</span>
            <span><strong>Persona prompting.</strong> &quot;You are a [role]. Analyze using [methodology].&quot;</span>
          </div>
        </div>
      </section>

      {/* Technique Cards */}
      <section className="space-y-6">
        {/* Zero-shot */}
        <TechniqueCard
          name="Zero-Shot Prompting"
          effectiveness="Baseline"
          bestFor="Simple, well-defined tasks"
          description="Just ask directly. No examples, no special instructions. This is your default starting point — only escalate to more complex techniques when zero-shot isn't enough."
          example={`Summarize the key risks in this 10-K filing:\n[paste filing text]`}
          doList={["Start here for every new task", "Be specific about what you want", "Specify output format if needed"]}
          dontList={["Add unnecessary complexity", "Use CoT for simple factual lookups"]}
        />

        {/* Chain of Thought */}
        <TechniqueCard
          name="Chain-of-Thought (CoT)"
          effectiveness="+10-20% accuracy"
          bestFor="Math, logic, multi-step reasoning"
          description={`Add "Think step by step" or "Let's work through this carefully." Forces the model to show intermediate reasoning, catching errors early. Skip this for reasoning models (Claude Opus, o3) — they already do it internally.`}
          example={`A company has $50M revenue, 30% margins, and 15x P/E.\nWhat is the implied stock price if there are 10M shares outstanding?\n\nThink step by step.`}
          doList={["Use for math, logic, and analysis tasks", "Use on standard models (Sonnet, GPT-4o, Gemini Flash)", "Let the model show its work"]}
          dontList={["Use on reasoning models (they do it internally)", "Use for simple factual questions", "Expect it to fix knowledge gaps"]}
        />

        {/* Few-shot */}
        <TechniqueCard
          name="Few-Shot Prompting"
          effectiveness="+15-30% accuracy"
          bestFor="Specific formats, domain tasks, classification"
          description="Show 2-5 examples of input/output pairs. The model learns the pattern and applies it consistently. Most effective when your desired output format is non-obvious."
          example={`Classify these headlines as BULLISH, BEARISH, or NEUTRAL:\n\nExample: "Apple beats Q4 estimates by 15%" → BULLISH\nExample: "Fed holds rates steady, signals patience" → NEUTRAL\nExample: "Major retailer files Chapter 11" → BEARISH\n\nNow classify:\n"Tesla deliveries miss estimates by 3%"\n"Microsoft announces $60B buyback program"\n"GDP growth revised down to 1.2%"`}
          doList={["Use 3-5 diverse examples", "Cover edge cases in examples", "Match the complexity of your actual task"]}
          dontList={["Use trivial or redundant examples", "Include more than 7 examples (diminishing returns)", "Use examples that contradict each other"]}
        />

        {/* Persona */}
        <TechniqueCard
          name="Persona / Role Prompting"
          effectiveness="+14-18% on domain tasks"
          bestFor="Domain expertise, consistent tone, specialized analysis"
          description='Assign a specific role with relevant expertise. "You are a senior equity analyst with 15 years of experience" produces fundamentally different output than a generic query. Can stack multiple personas for different perspectives.'
          example={`You are a senior credit analyst at a major rating agency.\nYou specialize in high-yield corporate bonds.\n\nAnalyze the following company's credit profile:\n- Revenue: $200M (declining 5% YoY)\n- Debt/EBITDA: 4.5x\n- Interest coverage: 2.1x\n- Industry: Retail\n\nProvide a credit rating recommendation with justification.`}
          doList={["Be specific about expertise level and domain", "Include methodology constraints", "Stack personas for multi-perspective analysis"]}
          dontList={["Use vague personas (\"expert\")", "Assign personas that conflict with the task", "Expect the persona to add factual knowledge"]}
        />

        {/* Tree of Thought */}
        <TechniqueCard
          name="Tree-of-Thought (ToT)"
          effectiveness="+83% on puzzle tasks (90% vs 7%)"
          bestFor="Complex problems with multiple solution paths"
          description="Explore multiple reasoning paths simultaneously, evaluate each, and pursue the most promising ones. Like a chess player considering multiple moves ahead. Requires multiple LLM calls but dramatically improves accuracy on hard problems."
          example={`Consider this strategic decision from 3 different angles.\nFor each angle, reason through the implications, then evaluate\nwhich approach is strongest.\n\nDecision: Should we acquire CompanyX for $500M?\n\nAngle 1: Financial (DCF, synergies, payback period)\nAngle 2: Strategic (market position, competitive moat)\nAngle 3: Risk (integration, cultural, regulatory)\n\nAfter exploring all 3, recommend a path forward.`}
          doList={["Use for high-stakes decisions", "Explicitly ask for multiple paths", "Request evaluation of each path"]}
          dontList={["Use for simple questions (massive overkill)", "Expect it in a single API call", "Skip the evaluation/synthesis step"]}
        />

        {/* Self-Consistency */}
        <TechniqueCard
          name="Self-Consistency"
          effectiveness="-15-20% hallucination"
          bestFor="Reliability-critical tasks, fact verification"
          description="Generate the same answer 3-5 times, then take the majority vote. Inconsistent answers reveal uncertainty. If the model gives different answers each time, the question may be ambiguous or beyond its knowledge."
          example={`[Run this prompt 3 times with temperature 0.7]\n\nBased on the financial data provided, what is the\nfair value estimate for this stock?\nShow your work.\n\n[Then compare: if all 3 agree → high confidence.\nIf 2/3 agree → medium confidence.\nIf all differ → low confidence, need more data.]`}
          doList={["Use for critical financial calculations", "Set temperature > 0 to get variation", "Report confidence based on agreement"]}
          dontList={["Use for creative tasks (variation is expected)", "Run fewer than 3 samples", "Ignore disagreements"]}
        />

        {/* Extended Thinking */}
        <TechniqueCard
          name="Extended Thinking / Deep Reasoning"
          effectiveness="Logarithmic improvement with token budget"
          bestFor="Complex analysis, architecture decisions, research"
          description='Modern reasoning models (Claude Opus, o3, Gemini Thinking) have built-in chain-of-thought. Instead of "think step by step," give high-level instructions like "think deeply about this" and let the model allocate its reasoning budget. The model reasons internally before responding.'
          example={`Think deeply about the architectural trade-offs.\n\nWe need to migrate from a monolithic Django app to\nmicroservices. The app handles:\n- 10K requests/sec at peak\n- 50 database tables with complex joins\n- Real-time WebSocket connections\n- Background job processing\n\nWhat is the optimal migration strategy?`}
          doList={["Use with reasoning models (Opus, o3, Gemini Thinking)", "Give high-level direction, not prescriptive steps", "Budget 1,024+ tokens for thinking"]}
          dontList={["Add explicit \"step by step\" (redundant)", "Micromanage the reasoning process", "Use on non-reasoning models (no effect)"]}
        />

        {/* Structured Output */}
        <TechniqueCard
          name="Structured Output (XML / JSON)"
          effectiveness="Consistent, parseable results"
          bestFor="API integration, data extraction, programmatic use"
          description="Tell the model exactly what structure to return. Claude prefers XML tags. ChatGPT has native JSON mode. Gemini works with both. This eliminates ambiguity and makes outputs machine-readable."
          example={`Extract the following from this earnings call transcript.\nReturn as XML:\n\n<analysis>\n  <revenue_guidance>\n    <amount>number</amount>\n    <direction>up|down|flat</direction>\n    <confidence>high|medium|low</confidence>\n  </revenue_guidance>\n  <key_risks>\n    <risk>description</risk>\n  </key_risks>\n  <sentiment>bullish|bearish|neutral</sentiment>\n</analysis>`}
          doList={["Use XML tags for Claude", "Use JSON mode for ChatGPT (response_format)", "Include field descriptions in the schema"]}
          dontList={["Mix XML and JSON in same prompt", "Leave field types ambiguous", "Expect perfect JSON without JSON mode (ChatGPT)"]}
        />
      </section>

      {/* Comparison Table */}
      <section>
        <h3 className="text-2xl font-bold mb-4">Technique Comparison Matrix</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse comparison-table">
            <thead>
              <tr>
                <th className="text-left p-3 border border-[#2a2a3e]">Technique</th>
                <th className="text-center p-3 border border-[#2a2a3e]">Accuracy Boost</th>
                <th className="text-center p-3 border border-[#2a2a3e]">API Calls</th>
                <th className="text-center p-3 border border-[#2a2a3e]">Complexity</th>
                <th className="text-center p-3 border border-[#2a2a3e]">Best Models</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Zero-shot", "Baseline", "1", "Low", "All"],
                ["Chain-of-Thought", "+10-20%", "1", "Low", "Standard models"],
                ["Few-shot", "+15-30%", "1", "Medium", "All"],
                ["Persona", "+14-18%", "1", "Low", "All"],
                ["Tree-of-Thought", "+83% (puzzles)", "3-5", "High", "All"],
                ["Self-Consistency", "-15-20% halluc.", "3-5", "Medium", "All"],
                ["Extended Thinking", "Variable", "1", "Low", "Reasoning models"],
                ["Structured Output", "Consistency", "1", "Medium", "Claude, GPT-4"],
              ].map(([tech, boost, calls, complexity, models], i) => (
                <tr key={i} className="border-b border-[#2a2a3e] hover:bg-[#141414]">
                  <td className="p-3 border border-[#2a2a3e] font-medium">{tech}</td>
                  <td className="p-3 border border-[#2a2a3e] text-center text-[#22c55e]">{boost}</td>
                  <td className="p-3 border border-[#2a2a3e] text-center">{calls}</td>
                  <td className="p-3 border border-[#2a2a3e] text-center">{complexity}</td>
                  <td className="p-3 border border-[#2a2a3e] text-center text-[#a0a0a0]">{models}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Automated Optimization */}
      <section className="bg-[#1a1a2e] rounded-lg p-6 border border-[#2a2a3e]">
        <h3 className="text-xl font-bold mb-3">Advanced: Automated Prompt Optimization</h3>
        <p className="text-[#a0a0a0] mb-4">
          For production systems, these frameworks can optimize prompts automatically —
          outperforming manual engineering by ~20%.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "DSPy", desc: "Pipeline compiler for production. Reusable, optimizable prompt modules.", maturity: "High" },
            { name: "TextGrad", desc: "Instance-level autograd for prompts. Best for hard coding/science tasks.", maturity: "Medium" },
            { name: "OPRO", desc: "LLM iteratively searches for better prompts. Simple to implement.", maturity: "Medium" },
            { name: "metaTextGrad", desc: "Meta-optimization: optimizes the optimizer itself. Research frontier.", maturity: "Early" },
          ].map((fw) => (
            <div key={fw.name} className="bg-[#141414] rounded-lg p-4">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-bold">{fw.name}</h4>
                <span className="text-xs px-2 py-0.5 rounded bg-[#2a2a3e] text-[#a0a0a0]">
                  {fw.maturity}
                </span>
              </div>
              <p className="text-sm text-[#a0a0a0]">{fw.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function TechniqueCard({
  name,
  effectiveness,
  bestFor,
  description,
  example,
  doList,
  dontList,
}: {
  name: string;
  effectiveness: string;
  bestFor: string;
  description: string;
  example: string;
  doList: string[];
  dontList: string[];
}) {
  return (
    <div className="bg-[#1a1a2e] rounded-lg border border-[#2a2a3e] overflow-hidden">
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <h3 className="text-xl font-bold">{name}</h3>
          <span className="text-xs px-2 py-1 rounded bg-[#22c55e]/20 text-[#22c55e] font-medium">
            {effectiveness}
          </span>
        </div>
        <p className="text-sm text-[#a0a0a0] mb-1">
          <strong className="text-white">Best for:</strong> {bestFor}
        </p>
        <p className="text-sm text-[#a0a0a0] mb-4">{description}</p>

        {/* Example */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-[#f59e0b] mb-2">EXAMPLE PROMPT</p>
          <pre className="text-[#e8e8e8]">
            <code>{example}</code>
          </pre>
        </div>

        {/* Do / Don't */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="tip-card tip-do">
            <p className="text-xs font-semibold text-[#22c55e] mb-1">DO</p>
            <ul className="text-sm text-[#a0a0a0] space-y-1">
              {doList.map((item, i) => (
                <li key={i}>+ {item}</li>
              ))}
            </ul>
          </div>
          <div className="tip-card tip-dont">
            <p className="text-xs font-semibold text-[#ef4444] mb-1">DON&apos;T</p>
            <ul className="text-sm text-[#a0a0a0] space-y-1">
              {dontList.map((item, i) => (
                <li key={i}>- {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
