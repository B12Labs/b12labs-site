import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 mt-16">
      <div className="w-full px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-[13px]">
        <div>
          <div className="text-stone-900 dark:text-stone-100 font-bold mb-3">Products</div>
          <ul className="space-y-1.5 text-stone-600 dark:text-stone-400">
            <li><a href="https://boss.ceo" target="_blank" rel="noreferrer" className="hover:text-[color:var(--brand-solid)]">BOSS (boss.ceo)</a></li>
            <li><a href="https://cintrico.com" target="_blank" rel="noreferrer" className="hover:text-[color:var(--brand-solid)]">Cintrico</a></li>
            <li><a href="https://github.com/B12Labs/engram" target="_blank" rel="noreferrer" className="hover:text-[color:var(--brand-solid)]">Engram</a></li>
          </ul>
        </div>
        <div>
          <div className="text-stone-900 dark:text-stone-100 font-bold mb-3">Company</div>
          <ul className="space-y-1.5 text-stone-600 dark:text-stone-400">
            <li><Link href="/about" className="hover:text-[color:var(--brand-solid)]">About</Link></li>
            <li><Link href="/research" className="hover:text-[color:var(--brand-solid)]">Research</Link></li>
            <li><Link href="/careers" className="hover:text-[color:var(--brand-solid)]">Careers</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-stone-900 dark:text-stone-100 font-bold mb-3">Open Source</div>
          <ul className="space-y-1.5 text-stone-600 dark:text-stone-400">
            <li><a href="https://github.com/B12Labs/engram" target="_blank" rel="noreferrer" className="hover:text-[color:var(--brand-solid)]">Engram (memory)</a></li>
            <li><a href="https://github.com/B12Labs" target="_blank" rel="noreferrer" className="hover:text-[color:var(--brand-solid)]">All repos</a></li>
          </ul>
        </div>
        <div>
          <div className="text-stone-900 dark:text-stone-100 font-bold mb-3">Contact</div>
          <ul className="space-y-1.5 text-stone-600 dark:text-stone-400">
            <li><a href="mailto:hello@b12labs.com" className="hover:text-[color:var(--brand-solid)]">hello@b12labs.com</a></li>
            <li><a href="mailto:press@b12labs.com" className="hover:text-[color:var(--brand-solid)]">press@b12labs.com</a></li>
            <li><a href="mailto:careers@b12labs.com" className="hover:text-[color:var(--brand-solid)]">careers@b12labs.com</a></li>
          </ul>
        </div>
      </div>
      <div className="w-full px-6 lg:px-8 py-6 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-500">
        <span>© {new Date().getFullYear()} B12 Labs. All rights reserved.</span>
        <span>Based in the United States.</span>
      </div>
    </footer>
  );
}
