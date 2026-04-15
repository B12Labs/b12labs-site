import Link from "next/link";
import { ArrowRight, Brain, Cpu, Database } from "lucide-react";
import { HeroBg } from "@/components/HeroBg";

const products = [
  {
    name: "BOSS",
    domain: "boss.ceo",
    desc: "The AI-native operating system. 35 studios: Voice, Movie, Scribe, Agents, Personas, Capture, Meet, and more.",
    href: "https://boss.ceo",
    icon: Brain,
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
      "Four-VM cluster, 256 GB RAM, 4 TB disk. Whisper, NeuTTS, VibeVoice, VoxCPM, Piper, Gemma 4, Qwen 3, MiniCPM — all local.",
  },
  {
    title: "Open by default",
    body:
      "Engram is MIT. Lucid framework is public. We publish what we learn so others can build on it — and benefit from the contributions that come back.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center px-4 text-center overflow-hidden -mt-14 pt-14">
        <HeroBg />

        <div className="relative z-10 max-w-4xl mx-auto pb-16">
          <div className="flex flex-col items-center gap-3 mb-8 hero-entrance-logo">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-teal-700 text-white text-[11px] font-bold tracking-tight shadow-lg shadow-teal-500/40">
                B12
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                B12<span className="text-teal-400">Labs</span>
              </span>
            </div>
          </div>

          <div className="hero-entrance-pill mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-teal-300 bg-teal-500/15 ring-1 ring-teal-400/30 rounded-full px-3 py-1 backdrop-blur-sm">
              Research for AI-native software
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white mb-6 hero-entrance-h1">
            We build the cognitive stack
            <br />
            for the{" "}
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
              next generation of software
            </span>
          </h1>

          <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-2xl mx-auto mb-10 hero-entrance-sub">
            B12 Labs is the research lab behind BOSS — an AI-native operating system for creators, SMBs,
            and enterprises.
            <br className="hidden md:block" />
            35 studios, 77 engines, a cognitive memory layer, four VMs of owned compute.
          </p>

          <div className="flex gap-3 justify-center flex-wrap mb-12 hero-entrance-cta">
            <a
              href="https://boss.ceo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-teal-700 hover:brightness-110 text-white text-[14px] font-semibold shadow-lg shadow-teal-900/40"
            >
              Try BOSS <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm hover:bg-white/20 text-white text-[14px] font-semibold"
            >
              Our products
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 flex-wrap text-xs text-stone-400 font-medium hero-entrance-proof">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" /> 3 products shipped
            </span>
            <span className="w-px h-3 bg-stone-600" />
            <span>Self-hosted AI</span>
            <span className="w-px h-3 bg-stone-600" />
            <span>MIT open source</span>
            <span className="w-px h-3 bg-stone-600" />
            <span>BYOK by default</span>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ─────────────────────────────────── */}
      <section className="relative w-full px-6 lg:px-8 py-24 border-t border-stone-200 dark:border-stone-800 bg-[var(--bg)]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-[color:var(--brand-solid)]">
              What we ship
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Three products, one thesis
            </h2>
            <p className="mt-3 text-[15px] text-stone-600 dark:text-stone-400 max-w-xl mx-auto">
              Software that remembers, reasons, and adapts — not just completes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {products.map((p, i) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className={`pillar-card pillar-reveal-${i + 1} group block p-7 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 grid place-items-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-lg shadow-teal-500/30">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[color:var(--brand-solid)] group-hover:translate-x-0.5 transition-all" />
                </div>
                <div className="text-[19px] font-bold text-stone-900 dark:text-stone-50">{p.name}</div>
                <div className="text-[11px] font-mono text-stone-500 mt-0.5">{p.domain}</div>
                <p className="mt-3 text-[13px] text-stone-600 dark:text-stone-400 leading-relaxed">
                  {p.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── THESIS ───────────────────────────────────── */}
      <section className="relative w-full px-6 lg:px-8 py-24 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-[color:var(--brand-solid)]">
              Our thesis
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 max-w-2xl">
              The cognitive layer software has been missing since the 1970s
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pillars.map((p) => (
              <div key={p.title}>
                <div className="text-[16px] font-bold text-stone-900 dark:text-stone-50">{p.title}</div>
                <p className="mt-2 text-[14px] text-stone-600 dark:text-stone-400 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIRING ───────────────────────────────────── */}
      <section className="relative w-full px-6 lg:px-8 py-24 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-950 via-stone-950 to-stone-900 border border-teal-900/40 p-12 sm:p-16 text-white">
            <div className="hero-mesh" aria-hidden />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
                We&apos;re hiring researchers, engineers, and designers.
              </h2>
              <p className="mt-4 text-[15px] text-stone-300 max-w-2xl">
                Help us build the cognitive layer that software has been missing since the 1970s.
                Remote-first, ship weekly, equity that matters.
              </p>
              <Link
                href="/careers"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-white text-[14px] font-semibold shadow-lg shadow-teal-500/30"
              >
                See open roles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
