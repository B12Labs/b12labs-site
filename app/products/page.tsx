import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Products — B12 Labs",
  description: "BOSS, Cintrico, and Engram — the three things B12 Labs ships.",
};

const items = [
  {
    name: "BOSS",
    url: "https://boss.ceo",
    one: "AI-native operating system for creators and SMBs",
    body:
      "35 studios span Voice, Movie, Scribe, Social, Agents, Personas, Capture, Meet, Docs, Images, Flow, Brand, and more. Free tier at boss.ceo with BYOK. Pro tier at cintrico.com for enterprises that need BAA, SOC 2, and managed keys. Built on Next.js 15, Cloudflare R2, Supabase, and a council LLM router that prefers free local models (Gemma 4 26B, Qwen 3, Llama 3.1) over paid cloud APIs.",
  },
  {
    name: "Cintrico",
    url: "https://cintrico.com",
    one: "Enterprise BOSS with managed keys and centralized spend",
    body:
      "Same BOSS platform with enterprise guarantees: Cintrico-provided keys, centralized token accounting, SOC 2 Type II (in progress), HIPAA BAA, Entra ID SSO, Microsoft Azure committed-spend purchasing via the Microsoft Marketplace. Admin console at /admin with provider balances, user allowlists, feature flags, and model routing controls.",
  },
  {
    name: "Engram",
    url: "https://github.com/B12Labs/engram",
    one: "Portable memory for AI agents — MIT, open source",
    body:
      "An engram is the physical trace of a memory in the brain. Our Engram gives AI agents the same thing: one portable file per agent, 97% smaller than vector databases, sub-millisecond recall via a three-tier search (LEANN graph, Tantivy hybrid, PageIndex reasoning). The Lucid tier adds cognitive layers on top: Awake (live state), Dream Cycles (nightly enrichment), REM (portable markdown dialect), and the base Engram bundle — four tiers that close a cognitive loop nobody ships today.",
  },
];

export default function ProductsPage() {
  return (
    <div className="w-full px-6 lg:px-8 py-16">
      <div className="max-w-5xl">
        <h1 className="text-[40px] font-bold tracking-tight text-stone-900 dark:text-stone-50">
          Products
        </h1>
        <p className="mt-4 text-[17px] text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl">
          Three products. One research thesis: software that remembers, reasons, and adapts.
        </p>
      </div>
      <div className="mt-12 space-y-4 max-w-5xl">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="group block p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 transition-colors"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-[24px] font-bold text-stone-900 dark:text-stone-50">
                    {item.name}
                  </span>
                  <span className="text-[12px] font-mono text-stone-500">
                    {item.url.replace(/^https?:\/\//, "")}
                  </span>
                </div>
                <div className="mt-1 text-[14px] text-[color:var(--brand-solid)] font-semibold">
                  {item.one}
                </div>
                <p className="mt-3 text-[14px] text-stone-600 dark:text-stone-400 leading-relaxed">
                  {item.body}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-[color:var(--brand-solid)] group-hover:translate-x-0.5 transition-all shrink-0 mt-1.5" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
