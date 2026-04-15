"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { B12_PASTELS } from "@/lib/palette";

/**
 * Each link carries its own pastel identity — a small dot under the active
 * or hovered item, rotated through the B12 palette (teal / violet / amber /
 * coral / pink). This is the one thing people will remember about the nav.
 */
const LINKS = [
  { href: "/products", label: "Products", pastel: B12_PASTELS[0] },
  { href: "/research", label: "Research", pastel: B12_PASTELS[1] },
  { href: "/about", label: "About", pastel: B12_PASTELS[2] },
  { href: "/careers", label: "Careers", pastel: B12_PASTELS[3] },
];

function BrandMark() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 pl-3 pr-4 border-r border-stone-200/60 dark:border-stone-800/60 shrink-0 group transition-transform duration-300 hover:scale-[1.03]"
    >
      <Logo size={24} showWordmark />
    </Link>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
        <nav
          className={`pointer-events-auto flex items-center justify-between px-2 py-1.5 rounded-full transition-all duration-300 w-full max-w-4xl border ${
            scrolled
              ? "bg-white/95 dark:bg-stone-950/95 backdrop-blur-md border-stone-200 dark:border-stone-800 shadow-lg shadow-stone-900/5 dark:shadow-black/40"
              : "bg-white/70 dark:bg-stone-950/70 backdrop-blur-sm border-stone-200/60 dark:border-stone-800/60"
          }`}
        >
          <BrandMark />

          {/* Desktop links — each with its own pastel dot */}
          <div className="hidden md:flex items-center gap-0.5 flex-1 pl-2">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative px-3 py-1.5 rounded-full text-[12px] font-semibold text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-150"
              >
                <span className="relative z-10">{l.label}</span>
                {/* Pastel dot that fades in on hover */}
                <span
                  aria-hidden
                  className="absolute left-1/2 -translate-x-1/2 bottom-0.5 w-1 h-1 rounded-full opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200"
                  style={{ backgroundColor: l.pastel }}
                />
                {/* Pastel background on hover */}
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-0"
                  style={{ backgroundColor: l.pastel, opacity: 0 }}
                />
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-200"
                  style={{ backgroundColor: l.pastel }}
                />
              </Link>
            ))}
          </div>

          {/* Right cluster — GitHub + Try BOSS */}
          <div className="flex items-center gap-1.5 pr-1 shrink-0">
            <a
              href="https://github.com/B12Labs"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[12px] font-semibold text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-900 transition-all duration-150"
            >
              GitHub
              <ArrowUpRight className="size-3 opacity-60" />
            </a>
            <a
              href="https://boss.ceo"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-[12px] font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:brightness-110 transition-all shadow-sm shadow-teal-500/25"
            >
              Try BOSS
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden size-8 rounded-lg flex items-center justify-center text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-stone-950/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-[300px] max-w-[85vw] bg-white dark:bg-stone-950 border-l border-stone-200 dark:border-stone-800 shadow-2xl transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100 dark:border-stone-900">
            <BrandMark />
            <button
              onClick={() => setMobileOpen(false)}
              className="size-8 rounded-lg flex items-center justify-center text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-900"
              aria-label="Close menu"
            >
              <X className="size-4" />
            </button>
          </div>
          <div className="p-4 space-y-1">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: l.pastel }}
                />
                <span className="text-[14px] font-semibold text-stone-900 dark:text-stone-50">
                  {l.label}
                </span>
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-stone-100 dark:border-stone-900 space-y-2">
              <a
                href="https://github.com/B12Labs"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-3 py-3 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
              >
                <span className="text-[14px] font-semibold text-stone-900 dark:text-stone-50">
                  GitHub
                </span>
                <ArrowUpRight className="size-4 text-stone-400" />
              </a>
              <a
                href="https://boss.ceo"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center px-3 py-3 rounded-xl text-[13px] font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 shadow-sm shadow-teal-500/25"
              >
                Try BOSS
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
