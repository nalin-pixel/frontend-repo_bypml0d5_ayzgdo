import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#home', label: 'Beranda' },
  { href: '#projects', label: 'Proyek' },
  { href: '#contact', label: 'Kontak' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-neutral-900/50 border-b border-neutral-200/60 dark:border-neutral-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-semibold tracking-tight text-lg">
            <span className="text-neutral-900 dark:text-white">Portofolio</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-sm font-medium hover:opacity-90"
            >
              Hubungi Saya
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-2 py-2 rounded-md text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="px-2 py-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-sm text-center"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
