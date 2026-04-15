import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Products — B12 Labs",
  description: "BOSS, Cintrico, and Engram — the three things B12 Labs ships.",
};

type Mark = "boss" | "cintrico" | "engram";

const items: { name: string; url: string; one: string; body: string; mark: Mark }[] = [
  {
    name: "BOSS",
    url: "https://boss.ceo",
    one: "AI-native operating system for creators and SMBs",
    body:
      "35 studios span Voice, Movie, Scribe, Social, Agents, Personas, Capture, Meet, Docs, Images, Flow, Brand, and more. Free tier at boss.ceo with BYOK. Pro tier at cintrico.com for enterprises that need BAA, SOC 2, and managed keys. Built on Next.js 15, Cloudflare R2, Supabase, and a council LLM router that prefers free local models (Gemma 4 26B, Qwen 3, Llama 3.1) over paid cloud APIs.",
    mark: "boss",
  },
  {
    name: "Cintrico",
    url: "https://cintrico.com",
    one: "Enterprise BOSS with managed keys and centralized spend",
    body:
      "Same BOSS platform with enterprise guarantees: Cintrico-provided keys, centralized token accounting, SOC 2 Type II (in progress), HIPAA BAA, Entra ID SSO, Microsoft Azure committed-spend purchasing via the Microsoft Marketplace. Admin console at /admin with provider balances, user allowlists, feature flags, and model routing controls.",
    mark: "cintrico",
  },
  {
    name: "Engram",
    url: "https://github.com/B12Labs/engram",
    one: "Portable memory for AI agents — MIT, open source",
    body:
      "An engram is the physical trace of a memory in the brain. Our Engram gives AI agents the same thing: one portable file per agent, 97% smaller than vector databases, sub-millisecond recall via a three-tier search (LEANN graph, Tantivy hybrid, PageIndex reasoning). The Lucid tier adds cognitive layers on top: Awake (live state), Dream Cycles (nightly enrichment), REM (portable markdown dialect), and the base Engram bundle — four tiers that close a cognitive loop nobody ships today.",
    mark: "engram",
  },
];

function BigMark({ mark }: { mark: Mark }) {
  if (mark === "cintrico") {
    return (
      <div className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cintrico.com/cintrico-icon.png?v=2"
          alt=""
          className="w-14 h-14 object-contain"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cintrico.com/cintrico-wordmark.png"
          alt="Cintrico"
          className="h-[28px] object-contain dark:invert dark:brightness-[1.3]"
        />
      </div>
    );
  }
  if (mark === "boss") {
    return (
      <div className="flex items-center gap-3">
        <span className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-lg shadow-teal-500/30 font-bold text-[18px]">
          B
        </span>
        <span className="text-[26px] font-bold tracking-tight text-stone-900 dark:text-stone-50">
          BOSS<span className="text-teal-600 dark:text-teal-400">.ceo</span>
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-3">
      <span className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-700 text-white shadow-lg shadow-violet-500/30 font-bold text-[18px]">
        E
      </span>
      <span className="text-[26px] font-bold tracking-tight text-stone-900 dark:text-stone-50">
        Engram
      </span>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="w-full px-6 lg:px-8 pt-28 pb-16">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-[10px] font-bold uppercase tracking-[2px] text-[color:var(--brand-solid)]">
          Products
        </span>
        <h1 className="mt-3 text-[40px] md:text-[48px] font-bold tracking-tight leading-[1.05] text-stone-900 dark:text-stone-50">
          Three products, one thesis
        </h1>
        <p className="mt-6 text-[17px] text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl mx-auto">
          Software that remembers, reasons, and adapts — not just completes.
        </p>
      </div>

      <div className="mt-14 space-y-5 max-w-5xl mx-auto">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="group block p-8 md:p-10 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 transition-colors text-center"
          >
            <div className="flex items-center justify-center mb-5">
              <BigMark mark={item.mark} />
            </div>
            <div className="text-[11px] font-mono text-stone-500">
              {item.url.replace(/^https?:\/\//, "")}
            </div>
            <div className="mt-3 text-[14px] text-[color:var(--brand-solid)] font-semibold">
              {item.one}
            </div>
            <p className="mt-4 text-[14px] text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl mx-auto">
              {item.body}
            </p>
            <div className="mt-6 inline-flex items-center gap-1 text-[13px] font-semibold text-[color:var(--brand-solid)] group-hover:gap-2 transition-all">
              Visit <ArrowRight className="w-4 h-4" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
