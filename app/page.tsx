import Link from "next/link";
import { ArrowRight, Brain, Cpu, Database, Sparkles } from "lucide-react";

const products = [
  {
    name: "BOSS",
    domain: "boss.ceo",
    desc: "The AI-native operating system. 35 studios: Voice, Movie, Scribe, Agents, Personas, Capture, Meet, and more.",
    href: "https://boss.ceo",
    icon: Sparkles,
  },
  {
    name: "Cintrico",
    domain: "cintrico.com",
    desc: "Enterprise-tier BOSS with BYOK encryption, Cintrico-managed keys, centralized spend, SOC 2, HIPAA BAA.",
    href: "https://cintrico.com",
    icon: Cpu,
  },
  {
    name: "Engram",
    domain: "github.com/B12Labs/engram",
    desc: "Portable, graph-compressed, single-file memory for AI agents. 97% smaller than vector DBs. Sub-ms recall. MIT.",
    href: "https://github.com/B12Labs/engram",
    icon: Database,
  },
];

const pillars = [
  {
    title: "Cognitive infrastructure",
    body:
      "We build the memory, reasoning, and orchestration layer that turns LLM calls into durable software. Engram + Lucid + Council.",
  },
  {
    title: "Owned compute",
    body:
      "Four-VM cluster with 64 GB RAM and 1 TB disk each. Whisper, NeuTTS, VibeVoice, VoxCPM, Piper, Gemma 4, Qwen 3, MiniCPM — all local.",
  },
  {
    title: "Open by default",
    body:
      "Engram is MIT. Lucid framework is public. We publish what we learn so others can build on it — and we benefit from the contributions that come back.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="hero-mesh" aria-hidden />
        <div className="relative w-full px-6 lg:px-8 pt-20 pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-900 text-[11px] font-semibold text-stone-700 dark:text-stone-300 mb-6">
              <Brain className="w-3.5 h-3.5" />
              Research lab — AI-native software
            </div>
            <h1 className="text-[40px] sm:text-[56px] lg:text-[68px] font-bold tracking-tight leading-[1.05] text-stone-900 dark:text-stone-50">
              We build the cognitive stack for the next generation of software.
            </h1>
            <p className="mt-6 text-[17px] text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl">
              B12 Labs is the research lab behind BOSS — an AI-native operating system for creators, SMBs,
              and enterprises. 35 studios, 77 engines, a cognitive memory layer, and four VMs of owned compute.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://boss.ceo"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[color:var(--brand-solid)] hover:bg-[color:var(--brand-solid-hover)] text-white text-[13px] font-semibold shadow-sm"
              >
                Try BOSS <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-[13px] font-semibold hover:bg-stone-100 dark:hover:bg-stone-900"
              >
                Our products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 lg:px-8 py-16 border-t border-stone-200 dark:border-stone-800">
        <div className="mb-10">
          <h2 className="text-[28px] font-bold tracking-tight text-stone-900 dark:text-stone-50">
            What we ship
          </h2>
          <p className="mt-2 text-[15px] text-stone-600 dark:text-stone-400 max-w-2xl">
            Three products, one research thesis: software that remembers, reasons, and adapts — not just
            completes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group block p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 grid place-items-center rounded-xl bg-[color:var(--brand-secondary)] text-[color:var(--brand-solid)]">
                  <p.icon className="w-5 h-5" />
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[color:var(--brand-solid)] group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="text-[17px] font-bold text-stone-900 dark:text-stone-50">{p.name}</div>
              <div className="text-[11px] font-mono text-stone-500 dark:text-stone-500 mt-0.5">{p.domain}</div>
              <p className="mt-3 text-[13px] text-stone-600 dark:text-stone-400 leading-relaxed">{p.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="w-full px-6 lg:px-8 py-16 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-2xl mb-10">
          <h2 className="text-[28px] font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Our thesis
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div key={p.title}>
              <div className="text-[15px] font-bold text-stone-900 dark:text-stone-50">{p.title}</div>
              <p className="mt-2 text-[13px] text-stone-600 dark:text-stone-400 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-6 lg:px-8 py-16 border-t border-stone-200 dark:border-stone-800">
        <div className="rounded-3xl bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-950 border border-stone-200 dark:border-stone-800 p-10 sm:p-14">
          <h2 className="text-[28px] font-bold tracking-tight text-stone-900 dark:text-stone-50 max-w-2xl">
            We&apos;re hiring researchers, engineers, and designers.
          </h2>
          <p className="mt-3 text-[15px] text-stone-600 dark:text-stone-400 max-w-2xl">
            Help us build the cognitive layer that software has been missing since the 1970s.
          </p>
          <Link
            href="/careers"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[color:var(--brand-solid)] hover:bg-[color:var(--brand-solid-hover)] text-white text-[13px] font-semibold"
          >
            See open roles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
