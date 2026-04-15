import Link from "next/link";
import { B12_PASTELS } from "./Nav";

const PRODUCTS = [
  { href: "https://boss.ceo", name: "BOSS", external: true },
  { href: "https://cintrico.com", name: "Cintrico", external: true },
  { href: "https://github.com/B12Labs/engram", name: "Engram", external: true },
];

const COMPANY = [
  { href: "/about", name: "About" },
  { href: "/research", name: "Research" },
  { href: "/careers", name: "Careers" },
];

const OPEN_SOURCE = [
  { href: "https://github.com/B12Labs/engram", name: "Engram", external: true },
  { href: "https://github.com/B12Labs", name: "All repositories", external: true },
];

const CONTACT = [
  { href: "mailto:hello@b12labs.com", name: "hello@b12labs.com" },
  { href: "mailto:press@b12labs.com", name: "press@b12labs.com" },
  { href: "mailto:careers@b12labs.com", name: "careers@b12labs.com" },
];

const SOCIAL = [
  {
    name: "X",
    href: "https://x.com/b12labs",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    name: "GitHub",
    href: "https://github.com/B12Labs",
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/b12labs",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
];

function Column({ title, items }: { title: string; items: { href: string; name: string; external?: boolean }[] }) {
  return (
    <div>
      <div className="text-[10px] font-bold uppercase tracking-[1.4px] text-stone-500 dark:text-stone-500 mb-4">
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
    <footer className="relative z-10 mt-24 bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-stone-900">
      {/* Pastel strip — subtle, 2px tall, 5 bands in the B12 palette */}
      <div
        aria-hidden
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(to right, ${B12_PASTELS.join(",")})`,
        }}
      />

      <div className="w-full px-6 lg:px-8 py-16">
        {/* ── Top: big wordmark + tagline + newsletter ────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          {/* Big editorial wordmark */}
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-3">
              <span className="text-[56px] md:text-[72px] font-bold tracking-[-0.04em] leading-none text-stone-900 dark:text-stone-50">
                B12
              </span>
              <span className="text-[28px] md:text-[36px] font-light tracking-tight text-stone-400 dark:text-stone-600">
                Labs
              </span>
            </div>
            <p className="mt-4 text-[13px] text-stone-600 dark:text-stone-400 leading-relaxed max-w-md">
              Research for AI-native software. The lab behind{" "}
              <a
                href="https://boss.ceo"
                target="_blank"
                rel="noreferrer"
                className="text-[color:var(--brand-solid)] hover:underline"
              >
                BOSS
              </a>
              ,{" "}
              <a
                href="https://cintrico.com"
                target="_blank"
                rel="noreferrer"
                className="text-[color:var(--brand-solid)] hover:underline"
              >
                Cintrico
              </a>
              , and{" "}
              <a
                href="https://github.com/B12Labs/engram"
                target="_blank"
                rel="noreferrer"
                className="text-[color:var(--brand-solid)] hover:underline"
              >
                Engram
              </a>
              .
            </p>
            {/* Social row */}
            <div className="mt-6 flex items-center gap-2">
              {SOCIAL.map((s, i) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="group relative w-9 h-9 rounded-full border border-stone-200 dark:border-stone-800 text-stone-500 dark:text-stone-400 flex items-center justify-center transition-all duration-200 hover:text-stone-900 dark:hover:text-stone-50 hover:border-stone-300 dark:hover:border-stone-700 hover:-translate-y-0.5"
                >
                  {/* Pastel backdrop on hover */}
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ backgroundColor: B12_PASTELS[i % B12_PASTELS.length], opacity: 0 }}
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-200"
                    style={{ backgroundColor: B12_PASTELS[i % B12_PASTELS.length] }}
                  />
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="relative w-[14px] h-[14px]"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns — 4 grouped */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <Column title="Products" items={PRODUCTS} />
            <Column title="Company" items={COMPANY} />
            <Column title="Open source" items={OPEN_SOURCE} />
            <Column title="Contact" items={CONTACT} />
          </div>
        </div>

        {/* ── Product pastel dots — the "3 products" as visual beads ─ */}
        <div className="flex items-center gap-4 py-5 border-t border-stone-100 dark:border-stone-900">
          <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-stone-400 dark:text-stone-600">
            The lab ships
          </span>
          <div className="flex items-center gap-3">
            {[
              { name: "BOSS", pastel: B12_PASTELS[0] },
              { name: "Cintrico", pastel: B12_PASTELS[1] },
              { name: "Engram", pastel: B12_PASTELS[2] },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: p.pastel }}
                />
                <span className="text-[11px] font-medium text-stone-600 dark:text-stone-400">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────────────────────── */}
        <div className="pt-6 border-t border-stone-100 dark:border-stone-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] text-stone-500 dark:text-stone-500">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© {new Date().getFullYear()} B12 Labs. All rights reserved.</span>
            <span className="hidden sm:inline text-stone-300 dark:text-stone-700">·</span>
            <span>Based in the United States.</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
