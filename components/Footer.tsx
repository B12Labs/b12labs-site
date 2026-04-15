import Link from "next/link";
import { B12_PASTELS } from "@/lib/palette";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";

const PRODUCTS = [
  { href: "https://boss.ceo", name: "BOSS", external: true },
  { href: "https://cintrico.com", name: "Cintrico", external: true },
  { href: "https://github.com/B12Labs/engram", name: "Engram", external: true },
  { href: "/products", name: "All products" },
];

const READ = [
  { href: "/research", name: "Research notes" },
  { href: "/about", name: "About the lab" },
  { href: "https://github.com/B12Labs/engram/blob/main/docs/lucid.md", name: "Lucid framework", external: true },
  { href: "https://github.com/B12Labs", name: "Open source", external: true },
];

const CONNECT = [
  { href: "/careers", name: "Careers" },
  { href: "mailto:hello@b12labs.com", name: "hello@b12labs.com" },
  { href: "mailto:press@b12labs.com", name: "press@b12labs.com" },
  { href: "mailto:careers@b12labs.com", name: "careers@b12labs.com" },
];

const SOCIAL: { name: string; href: string; label: string; path: string; pastelIndex: number }[] = [
  {
    name: "X",
    label: "X / Twitter",
    href: "https://x.com/b12labs",
    pastelIndex: 0,
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    name: "GitHub",
    label: "GitHub",
    href: "https://github.com/B12Labs",
    pastelIndex: 1,
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  {
    name: "LinkedIn",
    label: "LinkedIn",
    href: "https://linkedin.com/company/b12labs",
    pastelIndex: 2,
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "Email",
    label: "Email",
    href: "mailto:hello@b12labs.com",
    pastelIndex: 3,
    path: "M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v11a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 17.5v-11zm2.5-.5a.5.5 0 00-.5.5v.3l8 5.33 8-5.33V6.5a.5.5 0 00-.5-.5h-15zm15.5 2.75l-7.44 4.96a1 1 0 01-1.12 0L4 8.75v8.75a.5.5 0 00.5.5h15a.5.5 0 00.5-.5V8.75z",
  },
];

function LinkColumn({ title, items }: { title: string; items: { href: string; name: string; external?: boolean }[] }) {
  return (
    <div>
      <div className="text-[10px] font-bold uppercase tracking-[1.6px] text-stone-500 dark:text-stone-500 mb-4">
        {title}
      </div>
      <ul className="space-y-2.5">
        {items.map((i) =>
          i.external ? (
            <li key={i.href}>
              <a
                href={i.href}
                target="_blank"
                rel="noreferrer"
                className="text-[13px] text-stone-600 dark:text-stone-400 hover:text-[color:var(--brand-solid)] transition-colors duration-150"
              >
                {i.name}
              </a>
            </li>
          ) : (
            <li key={i.href}>
              <Link
                href={i.href}
                className="text-[13px] text-stone-600 dark:text-stone-400 hover:text-[color:var(--brand-solid)] transition-colors duration-150"
              >
                {i.name}
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 mt-24 bg-white dark:bg-stone-950 overflow-hidden">
      {/* Pastel gradient strip — the 5-note color theme */}
      <div
        aria-hidden
        className="h-[3px] w-full"
        style={{
          background: `linear-gradient(to right, ${B12_PASTELS.join(",")})`,
        }}
      />

      {/* Decorative dot grid — subtle lab notebook feel */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 0.5px, transparent 0.5px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative w-full px-6 lg:px-8 pt-20 pb-10">
        {/* ── Masthead: eyebrow + big wordmark + mission ─────────── */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--brand-secondary)] ring-1 ring-[color:var(--brand-solid)]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--brand-solid)] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[1.6px] text-[color:var(--brand-solid)]">
              A research lab in the United States
            </span>
          </div>

          <div className="mt-7 flex items-center justify-center">
            <Logo size={56} showWordmark />
          </div>

          <p className="mt-6 text-[17px] text-stone-600 dark:text-stone-400 leading-relaxed max-w-xl mx-auto">
            We build the cognitive stack for AI-native software — memory, reasoning, and orchestration
            layers that turn LLM calls into durable products.
          </p>
        </div>

        {/* ── Newsletter: notes from the lab ─────────────────────── */}
        <div className="mt-12 max-w-lg mx-auto text-center">
          <div className="text-[10px] font-bold uppercase tracking-[1.6px] text-stone-500 dark:text-stone-500 mb-3">
            Notes from the lab
          </div>
          <p className="text-[13px] text-stone-600 dark:text-stone-400 mb-5">
            New research, open-source drops, and product launches. One email per month. No spam.
          </p>
          <NewsletterForm />
        </div>

        {/* ── Decorative ornament — 12 dots echoing the logo ──────── */}
        <div aria-hidden className="mt-16 flex items-center justify-center gap-1.5">
          {Array.from({ length: 12 }).map((_, i) => {
            const cardinal = i % 3 === 0;
            const pastel = cardinal ? B12_PASTELS[(i / 3) % B12_PASTELS.length] : null;
            return (
              <span
                key={i}
                className="rounded-full"
                style={{
                  width: cardinal ? 6 : 3,
                  height: cardinal ? 6 : 3,
                  backgroundColor: pastel ?? "#d6d3d1",
                  opacity: cardinal ? 1 : 0.5,
                }}
              />
            );
          })}
        </div>

        {/* ── Three link columns, centered grid ──────────────────── */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-3xl mx-auto text-center sm:text-left">
          <LinkColumn title="Products" items={PRODUCTS} />
          <LinkColumn title="Read" items={READ} />
          <LinkColumn title="Connect" items={CONNECT} />
        </div>

        {/* ── Distinct-per-platform social tiles ──────────────────── */}
        <div className="mt-14 flex items-center justify-center gap-3">
          {SOCIAL.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="group relative w-11 h-11 rounded-full border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-900/5"
            >
              {/* Pastel fill that grows from the bottom on hover */}
              <span
                aria-hidden
                className="absolute inset-0 rounded-full origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"
                style={{ backgroundColor: B12_PASTELS[s.pastelIndex] }}
              />
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="relative w-[15px] h-[15px] text-stone-600 dark:text-stone-300 group-hover:text-stone-900 transition-colors duration-200"
              >
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>

        {/* ── Colophon bottom bar ────────────────────────────────── */}
        <div className="mt-16 pt-6 border-t border-stone-200 dark:border-stone-900">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-stone-500 dark:text-stone-500">
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <span className="font-mono">
                © {new Date().getFullYear()} B12 Labs
              </span>
              <span className="text-stone-300 dark:text-stone-700">/</span>
              <span>Based in the United States</span>
              <span className="text-stone-300 dark:text-stone-700">/</span>
              <span>Est. 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
