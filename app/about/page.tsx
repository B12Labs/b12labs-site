import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — B12 Labs",
  description: "B12 Labs is a research lab building the cognitive stack for AI-native software.",
};

export default function AboutPage() {
  return (
    <div className="w-full px-6 lg:px-8 py-16">
      <div className="max-w-5xl">
        <h1 className="text-[40px] font-bold tracking-tight text-stone-900 dark:text-stone-50">About</h1>
        <p className="mt-4 text-[17px] text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl">
          B12 Labs is the research lab behind BOSS — an AI-native operating system for creators, SMBs,
          and enterprises. We believe software has been missing a cognitive layer since the 1970s: a
          durable memory, a reasoning substrate, and a learning loop that improves across sessions and
          users. We build that layer and the products that show what it enables.
        </p>

        <div className="max-w-[72ch] mt-4">
          <h2 className="mt-12 text-[22px] font-bold tracking-tight text-stone-900 dark:text-stone-50">
            Why &ldquo;B12&rdquo;
          </h2>
          <p className="mt-3 text-[15px] text-stone-600 dark:text-stone-400 leading-relaxed">
            Vitamin B12 is the nutrient that keeps neurons healthy and memory sharp. It&apos;s a small
            molecule with disproportionate effect on cognition. That&apos;s how we think about the work:
            small components — a file format, a routing rule, a markdown dialect — with outsized impact on
            what software can do. Lean, essential, compounding.
          </p>

          <h2 className="mt-12 text-[22px] font-bold tracking-tight text-stone-900 dark:text-stone-50">
            What we build
          </h2>
          <p className="mt-3 text-[15px] text-stone-600 dark:text-stone-400 leading-relaxed">
            We ship three things. <strong>BOSS</strong> is the consumer-facing AI operating system at{" "}
            <a href="https://boss.ceo" className="underline text-[color:var(--brand-solid)]">boss.ceo</a>{" "}
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

          <h2 className="mt-12 text-[22px] font-bold tracking-tight text-stone-900 dark:text-stone-50">
            How we work
          </h2>
          <ul className="mt-3 space-y-3 text-[15px] text-stone-600 dark:text-stone-400 leading-relaxed list-disc pl-5">
            <li>
              <strong>Open by default.</strong> Engram is MIT. The Lucid cognitive framework is public.
              We publish what we learn so others can build on it.
            </li>
            <li>
              <strong>Owned compute.</strong> Four VMs, 256 GB RAM, 4 TB disk combined. Whisper, NeuTTS,
              VibeVoice, VoxCPM, Piper, Gemma 4, Qwen 3, MiniCPM all run locally — not just behind an
              API bill.
            </li>
            <li>
              <strong>BYOK first.</strong> Users bring their own LLM keys, encrypted per-user in
              Cloudflare R2. We never fall back to platform keys in production.
            </li>
            <li>
              <strong>Pay for results, not models.</strong> Commodity coding is a gross-margin business.
              Council routes every call to the cheapest-adequate model; premium models only when the task
              actually requires them.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
