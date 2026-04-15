"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const stored = JSON.parse(localStorage.getItem("b12_newsletter") || "[]") as string[];
      if (!stored.includes(trimmed)) {
        stored.push(trimmed);
        localStorage.setItem("b12_newsletter", JSON.stringify(stored));
      }
      setStatus("ok");
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center gap-1 w-full max-w-md mx-auto rounded-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 p-1 focus-within:border-[color:var(--brand-solid)] focus-within:ring-2 focus-within:ring-[color:var(--brand-secondary)] transition-all"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
        aria-label="Email address"
        className="flex-1 px-4 py-1.5 bg-transparent text-[13px] text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-600 outline-none"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-[12px] font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:brightness-110 transition-all shadow-sm shadow-teal-500/25 disabled:opacity-60"
      >
        {status === "ok" ? (
          <>
            <Check className="w-3.5 h-3.5" /> Subscribed
          </>
        ) : (
          <>
            Subscribe <ArrowRight className="w-3.5 h-3.5" />
          </>
        )}
      </button>
    </form>
  );
}
