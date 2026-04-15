import type { Metadata } from "next";
import { FamilyStrip } from "@/components/FamilyStrip";

export const metadata: Metadata = {
  title: "About — B12 Labs",
  description: "B12 Labs is a research lab building the cognitive stack for AI-native software.",
};

export default function AboutPage() {
  return (
    <>
      <div className="w-full px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[10px] font-bold uppercase tracking-[2px] text-[color:var(--brand-solid)]">
            About
          </span>
          <h1 className="mt-3 text-[40px] md:text-[48px] font-bold tracking-tight leading-[1.05] text-stone-900 dark:text-stone-50">
            The research lab behind<br />
            <span className="text-[color:var(--brand-solid)]">cognitive software</span>
          </h1>
          <p className="mt-6 text-[17px] text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl mx-auto">
            B12 Labs is the research lab behind BOSS — an AI-native operating system for creators,
            SMBs, and enterprises. We believe software has been missing a cognitive layer since the
            1970s: durable memory, a reasoning substrate, and a learning loop that improves across
            sessions and users. We build that layer and the products that show what it enables.
          </p>
        </div>

        <div className="max-w-[72ch] mx-auto mt-16 space-y-12">
          <section className="text-center">
            <h2 className="text-[22px] font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Why &ldquo;B12&rdquo;
            </h2>
            <p className="mt-3 text-[15px] text-stone-600 dark:text-stone-400 leading-relaxed">
              Vitamin B12 is the nutrient that keeps neurons healthy and memory sharp. It&apos;s a
              small molecule with disproportionate effect on cognition. That&apos;s how we think
              about the work: small components — a file format, a routing rule, a markdown dialect —
              with outsized impact on what software can do. Lean, essential, compounding.
            </p>
          </section>

          <section className="text-center">
            <h2 className="text-[22px] font-bold tracking-tight text-stone-900 dark:text-stone-50">
              What we build
            </h2>
            <p className="mt-3 text-[15px] text-stone-600 dark:text-stone-400 leading-relaxed">
              We ship three things. <strong>BOSS</strong> is the consumer-facing AI operating system
              at{" "}
              <a href="https://boss.ceo" className="underline text-[color:var(--brand-solid)]">
                boss.ceo
              </a>{" "}
              — 35 studios (Voice, Movie, Scribe, Social, Agents, Personas…) with real user traction.{" "}
              <strong>Cintrico</strong> is the enterprise tier at{" "}
              <a href="https://cintrico.com" className="underline text-[color:var(--brand-solid)]">
                cintrico.com
              </a>{" "}
              — same platform, BYOK encryption, SOC 2, centralized spend.{" "}
              <strong>Engram</strong> is the open-source memory layer at{" "}
              <a
                href="https://github.com/B12Labs/engram"
                className="underline text-[color:var(--brand-solid)]"
              >
                github.com/B12Labs/engram
              </a>{" "}
              — MIT-licensed, 97% smaller than vector DBs, sub-millisecond recall.
            </p>
          </section>

          <section className="text-center">
            <h2 className="text-[22px] font-bold tracking-tight text-stone-900 dark:text-stone-50">
              How we work
            </h2>
            <ul className="mt-4 space-y-3 text-[15px] text-stone-600 dark:text-stone-400 leading-relaxed text-left sm:text-center max-w-[65ch] mx-auto">
              <li>
                <strong>Open by default.</strong> Engram is MIT. The Lucid cognitive framework is
                public. We publish what we learn so others can build on it.
              </li>
              <li>
                <strong>Owned compute.</strong> Four VMs, 256 GB RAM, 4 TB disk combined. Whisper,
                NeuTTS, VibeVoice, VoxCPM, Piper, Gemma 4, Qwen 3, MiniCPM all run locally — not just
                behind an API bill.
              </li>
              <li>
                <strong>BYOK first.</strong> Users bring their own LLM keys, encrypted per-user in
                Cloudflare R2. We never fall back to platform keys in production.
              </li>
              <li>
                <strong>Pay for results, not models.</strong> Commodity coding is a gross-margin
                business. Council routes every call to the cheapest-adequate model; premium models
                only when the task actually requires them.
              </li>
            </ul>
          </section>
        </div>
      </div>
      <FamilyStrip label="Products we ship" />
    </>
  );
}
