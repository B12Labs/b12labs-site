import Link from "next/link";

const links = [
  { href: "/products", label: "Products" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-stone-950/80 backdrop-blur-md">
      <div className="w-full px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-stone-900 dark:text-stone-100">
          <span className="grid place-items-center w-7 h-7 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 text-white text-[11px] font-bold">
            B12
          </span>
          <span className="text-[15px] font-bold tracking-tight">B12 Labs</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-1 text-[13px] font-medium">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 rounded-lg text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href="https://github.com/B12Labs"
          target="_blank"
          rel="noreferrer"
          className="text-[13px] font-semibold text-stone-900 dark:text-stone-100 hover:text-[color:var(--brand-solid)]"
        >
          GitHub →
        </a>
      </div>
    </header>
  );
}
