"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { LogoWordmark } from "./Logo";

const links = [
  { href: "/#symptoms", label: "Symptoms" },
  { href: "/#calculator", label: "ROI calculator" },
  { href: "/#services", label: "Services" },
  { href: "/#wins", label: "Wins" },
  { href: "/#compare", label: "Why us" },
  { href: "/#team", label: "Team" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/85 border-b border-line">
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group text-ink-950">
          <LogoWordmark className="h-7 w-auto" />
        </a>

        <ul className="hidden lg:flex items-center gap-7 text-sm text-ink-600">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link hover:text-ink-950">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/#contact"
            className="magnet shine-btn inline-flex items-center gap-2 rounded-full bg-ink-950 text-white px-5 py-2 text-sm font-semibold hover:bg-ink-800 transition"
          >
            Book a free audit
            <ArrowRight size={16} />
          </a>
        </div>

        <button
          className="md:hidden text-ink-950"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-white">
          <ul className="px-6 py-4 space-y-3 text-ink-700">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#contact"
                className="block mt-2 rounded-full bg-ink-950 text-white px-5 py-2 text-center text-sm font-semibold"
              >
                Book a free audit
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
