import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Vision & Mission", href: "#mission" },
  { label: "Leadership", href: "#leadership" },
  { label: "People's Agenda", href: "#agenda" },
  { label: "Newsroom", href: "#news" },
  { label: "Get Involved", href: "#involved" },
  { label: "Donate", href: "#donate" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-emerald-700 flex items-center justify-center text-white font-black">J</div>
          <div className="leading-tight">
            <p className="font-semibold text-slate-900">Jharkhand Mukti Morcha</p>
            <p className="text-[11px] uppercase tracking-wide text-emerald-700 font-medium">JMM</p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#donate" className="hidden md:inline-flex items-center rounded-lg bg-emerald-700 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-emerald-800 transition-colors">Donate</a>
          <button aria-label="Toggle menu" className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-200" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 grid gap-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-slate-800 font-medium hover:text-emerald-700">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
