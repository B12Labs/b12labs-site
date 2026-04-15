import type { Metadata } from "next";
import { FamilyStrip } from "@/components/FamilyStrip";

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
    <>
      <div className="w-full px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[10px] font-bold uppercase tracking-[2px] text-[color:var(--brand-solid)]">
            Careers
          </span>
          <h1 className="mt-3 text-[40px] md:text-[48px] font-bold tracking-tight leading-[1.05] text-stone-900 dark:text-stone-50">
            Help us build the cognitive layer
          </h1>
          <p className="mt-6 text-[17px] text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl mx-auto">
            Remote-first, lean, and ship every week. Equity that matters.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-[13px]">
            {[
              { label: "Cadence", val: "Ship weekly" },
              { label: "Location", val: "Remote-first" },
              { label: "Equity", val: "Meaningful" },
            ].map((s) => (
              <div
                key={s.label}
                className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800"
              >
                <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
                  {s.label}
                </div>
                <div className="mt-1 font-bold text-stone-900 dark:text-stone-50">{s.val}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-16">
          <h2 className="text-[22px] font-bold tracking-tight text-stone-900 dark:text-stone-50 text-center">
            Open roles
          </h2>
          <div className="mt-8 space-y-3 max-w-4xl mx-auto">
            {roles.map((r) => (
              <div
                key={r.title}
                className="p-6 md:p-7 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-center"
              >
                <div className="text-[11px] font-mono text-stone-500">
                  {r.team} · {r.location}
                </div>
                <h3 className="mt-1 text-[16px] font-bold text-stone-900 dark:text-stone-50">
                  {r.title}
                </h3>
                <p className="mt-2 text-[13px] text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl mx-auto">
                  {r.body}
                </p>
                <a
                  href={`mailto:careers@b12labs.com?subject=${encodeURIComponent(r.title)}`}
                  className="mt-4 inline-block text-[12px] font-semibold text-[color:var(--brand-solid)]"
                >
                  Apply via email →
                </a>
              </div>
            ))}
          </div>

          <p className="mt-12 text-[13px] text-stone-600 dark:text-stone-400 max-w-2xl mx-auto text-center">
            Don&apos;t see the exact role? We&apos;re small and often hire for strength, not fit.
            Send a note to{" "}
            <a href="mailto:careers@b12labs.com" className="underline text-[color:var(--brand-solid)]">
              careers@b12labs.com
            </a>{" "}
            and tell us what you&apos;d build.
          </p>
        </div>
      </div>
      <FamilyStrip label="Work on these" />
    </>
  );
}
