import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — B12 Labs",
  description: "Join the lab building the cognitive stack for AI-native software.",
};

const roles = [
  {
    title: "Senior Research Engineer — Memory Systems",
    team: "Engram",
    location: "Remote (US / EU)",
    body: "Ship the Dream Cycles engine. Experience with vector stores, graph pruning, or distributed indexes (FAISS, Tantivy, LEANN-style graph ANN). Rust or strong Python.",
  },
  {
    title: "Staff Engineer — Council Router",
    team: "Platform",
    location: "Remote (US / EU)",
    body: "Own the LLM routing and task classifier. Experience with inference platforms, multi-provider orchestration, and cost optimization. Go or TypeScript preferred.",
  },
  {
    title: "Senior Product Designer — BOSS Studios",
    team: "Design",
    location: "Remote",
    body: "Design the 35-studio surface at boss.ceo. Strong portfolio showing deep-density interfaces, dense data surfaces, and dark-mode fluency. Figma + prototyping in code is a plus.",
  },
  {
    title: "Senior Full-Stack Engineer — Studios",
    team: "Product",
    location: "Remote (US)",
    body: "Ship studios. Next.js 15, React 19, Tailwind v4, Supabase, Cloudflare R2. Comfortable working across the whole stack in a week-long iteration cadence.",
  },
  {
    title: "Site Reliability Engineer — Owned Compute",
    team: "Infra",
    location: "Remote (US)",
    body: "Operate a four-VM cluster running whisper, VibeVoice, NeuTTS, Gemma, Qwen. Experience with model serving (llama-server, vLLM), systemd, Grafana, and Cloudflare tunnels.",
  },
];

export default function CareersPage() {
  return (
    <div className="w-full px-6 lg:px-8 py-16">
      <div className="max-w-5xl">
        <h1 className="text-[40px] font-bold tracking-tight text-stone-900 dark:text-stone-50">
          Careers
        </h1>
        <p className="mt-4 text-[17px] text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl">
          Help us build the cognitive layer that software has been missing since the 1970s. We&apos;re
          remote-first, lean, and ship every week.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl text-[13px]">
          <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
            <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500">Cadence</div>
            <div className="mt-1 font-bold text-stone-900 dark:text-stone-50">Ship weekly</div>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
            <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500">Location</div>
            <div className="mt-1 font-bold text-stone-900 dark:text-stone-50">Remote-first</div>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
            <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500">Equity</div>
            <div className="mt-1 font-bold text-stone-900 dark:text-stone-50">Meaningful</div>
          </div>
        </div>

        <h2 className="mt-16 text-[22px] font-bold tracking-tight text-stone-900 dark:text-stone-50">
          Open roles
        </h2>
        <div className="mt-6 space-y-3 max-w-5xl">
          {roles.map((r) => (
            <div
              key={r.title}
              className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800"
            >
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <h3 className="text-[15px] font-bold text-stone-900 dark:text-stone-50">{r.title}</h3>
                <div className="text-[11px] font-mono text-stone-500">
                  {r.team} · {r.location}
                </div>
              </div>
              <p className="mt-2 text-[13px] text-stone-600 dark:text-stone-400 leading-relaxed">
                {r.body}
              </p>
              <a
                href={`mailto:careers@b12labs.com?subject=${encodeURIComponent(r.title)}`}
                className="mt-3 inline-block text-[12px] font-semibold text-[color:var(--brand-solid)]"
              >
                Apply via email →
              </a>
            </div>
          ))}
        </div>

        <p className="mt-12 text-[13px] text-stone-600 dark:text-stone-400 max-w-2xl">
          Don&apos;t see the exact role? We&apos;re small and often hire for strength, not fit. Send a
          note to{" "}
          <a href="mailto:careers@b12labs.com" className="underline text-[color:var(--brand-solid)]">
            careers@b12labs.com
          </a>{" "}
          and tell us what you&apos;d build.
        </p>
      </div>
    </div>
  );
}
