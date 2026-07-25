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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

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
          ? "bg-[#07090e]/95 backdrop-blur-xl border-b border-white/15 py-3.5 shadow-2xl shadow-black/80"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between"
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-xl p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 p-[1px] shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300">
              <div className="w-full h-full bg-[#0d121e] rounded-[11px] flex items-center justify-center group-hover:bg-[#12192a] transition-colors">
                <Sparkles className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                NorthPeak
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 font-sans font-semibold">
                  Digital
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#0d121e] border border-white/15 rounded-full px-4 py-1.5 shadow-inner">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-200 hover:text-white px-4 py-2 rounded-full transition-colors relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                {link.name}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 group overflow-hidden"
              aria-label="Start Project with NorthPeak Digital"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" aria-hidden="true" />
              <span className="relative flex items-center gap-1.5">
                Start Project
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-h-[44px] min-w-[44px] p-2.5 rounded-xl bg-[#1e293b] border border-white/20 text-white hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 flex items-center justify-center"
            aria-expanded={mobileMenuOpen}
            aria-controls={mobileMenuOpen ? "mobile-navigation-menu" : undefined}
            aria-label={mobileMenuOpen ? "Close main navigation menu" : "Open main navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="fixed inset-0 top-[73px] z-40 bg-[#07090e] md:hidden border-t border-white/15 flex flex-col justify-between p-6 animate-in fade-in slide-in-from-top-4 duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          <div className="flex flex-col space-y-4 pt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 px-2">
              Menu Navigation
            </span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-bold text-white hover:text-blue-400 transition-colors py-3 px-2 border-b border-white/10 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg"
              >
                {link.name}
                <ArrowUpRight className="w-5 h-5 text-slate-400" aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-col gap-4">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[48px] py-3.5 px-6 text-center font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-600/40 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 flex items-center justify-center"
            >
              Start Project Now
            </a>
            <p className="text-center text-xs font-medium text-slate-300">
              © {new Date().getFullYear()} NorthPeak Digital. All rights reserved.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
