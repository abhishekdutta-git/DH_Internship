"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Results", href: "#results" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07090e]/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-black/50"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between"
          aria-label="Global Navigation"
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
            aria-label="NorthPeak Digital Homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0d121e] rounded-[11px] flex items-center justify-center group-hover:bg-[#12192a] transition-colors">
                <Sparkles className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                NorthPeak
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-sans font-medium">
                  Digital
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#0d121e]/80 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white px-4 py-2 rounded-full transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-[0.98] group overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-1.5">
                Start Project
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="fixed inset-0 top-[73px] z-40 bg-[#07090e]/95 backdrop-blur-2xl md:hidden border-t border-white/10 flex flex-col justify-between p-6 animate-in fade-in slide-in-from-top-4 duration-300"
        >
          <div className="flex flex-col space-y-4 pt-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-2">
              Navigation
            </span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-semibold text-slate-200 hover:text-blue-400 transition-colors py-2 px-2 border-b border-white/5 flex items-center justify-between"
              >
                {link.name}
                <ArrowUpRight className="w-5 h-5 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 px-6 text-center font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-600/30 active:scale-95 transition-all"
            >
              Start Project Now
            </a>
            <p className="text-center text-xs text-slate-400">
              © {new Date().getFullYear()} NorthPeak Digital. All rights reserved.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
