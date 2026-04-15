import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research — B12 Labs",
  description: "Open research from B12 Labs on cognitive infrastructure for AI-native software.",
};

const papers = [
  {
    title: "Lucid — a four-tier cognitive framework for AI agents",
    status: "Published · 2026-04",
    url: "https://github.com/B12Labs/engram/blob/main/docs/lucid.md",
    body:
      "Most memory systems store the past. Lucid adds three more tiers: Awake (live agent state), Dream Cycles (nightly consolidation, enrichment, linking, decay), and REM (a portable markdown dialect that mirrors binary memory bundles). Together they close a cognitive loop — Awake drains into Dream Cycles; Dream Cycles produce REM + Engram entries; Engram recollection informs the next Awake cycle. Six cognitive primitives map across the tiers: Perception, Cognition, Imagination, Recollection, Hallucination, and Consciousness as the emergent goal.",
  },
  {
    title: "Engram — portable, graph-compressed memory for agents",
    status: "Published · 2026-04",
    url: "https://github.com/B12Labs/engram",
    body:
      "One portable file per agent. 97% smaller than traditional vector databases via LEANN-style graph pruning. Three-tier search auto-selects based on query complexity: LEANN (0.025ms, keywords), Tantivy hybrid (0.1ms, mixed), PageIndex reasoning (2–5s, deep multi-hop). MIT licensed. The file format is stable at v0.1; v1.0 adds backwards-compatibility guarantees.",
  },
  {
    title: "Craft cache — making coding a commodity",
    status: "In progress · 2026-04",
    url: null,
    body:
      "Every coding task is either craft (shared, infrastructure, identical across users — wire an API route, fix a TypeScript error) or pattern (user-facing, must stay unique). Craft cache stores the solution; pattern cache stores the pattern + variation axes + prior instances, and the next generation is instructed to differ from the instances. Naive caching kills diversity; this structure increases it over time.",
  },
  {
    title: "Council — free-first LLM routing",
    status: "Design — 2026-03",
    url: null,
    body:
      "A single router in front of every LLM call. Classifies each task by shape and cost tolerance, then routes: commodity tasks go to free local models on our owned VMs (Gemma 4 26B, Qwen 3, Llama 3.1); medium tasks go to cheap cloud (Groq, DeepSeek, Together); only novel-architecture or ambiguous-spec tasks escalate to Opus / Sonnet / GPT-5. Target: 60% free local, 30% cheap cloud, 10% premium. Drops session cost by 10× compared to Premium-default tools.",
  },
];

export default function ResearchPage() {
  return (
    <div className="w-full px-6 lg:px-8 py-16">
      <div className="max-w-5xl">
        <h1 className="text-[40px] font-bold tracking-tight text-stone-900 dark:text-stone-50">
          Research
        </h1>
        <p className="mt-4 text-[17px] text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl">
          Open notes from the lab. We publish the ideas, ship the implementations, and keep learning
          from the feedback.
        </p>
      </div>
      <div className="mt-12 space-y-4 max-w-5xl">
        {papers.map((p) => {
          const Tag = p.url ? "a" : "div";
          return (
            <Tag
              key={p.title}
              {...(p.url ? { href: p.url, target: "_blank", rel: "noreferrer" } : {})}
              className={`block p-7 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 ${
                p.url ? "hover:border-stone-300 dark:hover:border-stone-700 transition-colors" : ""
              }`}
            >
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <h2 className="text-[18px] font-bold text-stone-900 dark:text-stone-50">{p.title}</h2>
                <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">
                  {p.status}
                </span>
              </div>
              <p className="mt-3 text-[14px] text-stone-600 dark:text-stone-400 leading-relaxed">
                {p.body}
              </p>
              {p.url && (
                <div className="mt-3 text-[12px] font-semibold text-[color:var(--brand-solid)]">
                  Read →
                </div>
              )}
            </Tag>
          );
        })}
      </div>
    </div>
  );
}
