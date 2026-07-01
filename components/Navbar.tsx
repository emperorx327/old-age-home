"use client";

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#testimonials' },
  { label: 'Donate', href: '#donate' },
  { label: 'Contact', href: '#contact' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-sage-100/80 bg-cream/90 backdrop-blur-md">
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <a href="#home" className="text-xl font-semibold tracking-tight text-ink">
            AUM Old Age Home
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ink/80 transition hover:text-sage-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sage-200 bg-white text-ink shadow-sm md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-sage-100 bg-cream md:hidden">
          <nav className="section-shell flex flex-col gap-2 py-4" aria-label="Mobile primary">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-2xl px-3 py-3 text-base font-medium text-ink transition hover:bg-sage-50 hover:text-sage-700"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}