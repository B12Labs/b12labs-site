/**
 * FamilyStrip — renders the B12 product family as real brand marks.
 * Used above the footer and on product pages to show visual continuity
 * with BOSS.ceo and cintrico.com.
 */
export function FamilyStrip({ label = "The B12 Labs family" }: { label?: string }) {
  return (
    <section className="w-full px-6 lg:px-8 py-12 border-t border-stone-200 dark:border-stone-900">
      <div className="max-w-5xl mx-auto text-center">
        <div className="text-[10px] font-bold uppercase tracking-[1.6px] text-stone-400 dark:text-stone-500 mb-6">
          {label}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {/* BOSS */}
          <a
            href="https://boss.ceo"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-200"
          >
            <span className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 text-white text-[9px] font-bold shadow-sm shadow-teal-500/30">
              B
            </span>
            <span className="text-[18px] font-bold tracking-tight text-stone-900 dark:text-stone-50">
              BOSS<span className="text-teal-600 dark:text-teal-400">.ceo</span>
            </span>
          </a>

          {/* Cintrico — real asset */}
          <a
            href="https://cintrico.com"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity duration-200"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cintrico.com/cintrico-icon.png?v=2"
              alt=""
              className="w-7 h-7 object-contain"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cintrico.com/cintrico-wordmark.png"
              alt="Cintrico"
              className="h-[20px] object-contain dark:invert dark:brightness-[1.3]"
            />
          </a>

          {/* Engram */}
          <a
            href="https://github.com/B12Labs/engram"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-200"
          >
            <span className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-700 text-white text-[9px] font-bold shadow-sm shadow-violet-500/30">
              E
            </span>
            <span className="text-[18px] font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Engram
            </span>
          </a>
        </div>
        <p className="mt-5 text-[12px] text-stone-500 dark:text-stone-500 max-w-xl mx-auto">
          B12 Labs builds the cognitive stack. BOSS, Cintrico, and Engram are the products that
          ship on top of it.
        </p>
      </div>
    </section>
  );
}
