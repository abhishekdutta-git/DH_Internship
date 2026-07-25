"use client";

import { Sparkles, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05070a] text-slate-200 border-t border-white/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="flex items-center gap-3 mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-xl w-fit p-1"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-[1px]">
                <div className="w-full h-full bg-[#0d121e] rounded-[11px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-blue-400" aria-hidden="true" />
                </div>
              </div>
              <span className="font-display text-xl font-bold text-white tracking-tight flex items-center gap-1.5">
                NorthPeak
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 font-sans font-semibold">
                  Digital
                </span>
              </span>
            </a>

            <p className="text-sm text-slate-200 leading-relaxed max-w-sm mb-6 font-medium">
              Engineering high-impact digital experiences, bespoke UI/UX designs, and luxury brand architectures for industry pioneers.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] min-w-[44px] rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-slate-100 hover:text-white hover:border-blue-400/50 hover:bg-blue-500/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                aria-label="NorthPeak Digital GitHub Profile"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] min-w-[44px] rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-slate-100 hover:text-white hover:border-blue-400/50 hover:bg-blue-500/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                aria-label="NorthPeak Digital Twitter Profile"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] min-w-[44px] rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-slate-100 hover:text-white hover:border-blue-400/50 hover:bg-blue-500/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                aria-label="NorthPeak Digital LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Dribbble */}
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] min-w-[44px] rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-slate-100 hover:text-white hover:border-blue-400/50 hover:bg-blue-500/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                aria-label="NorthPeak Digital Dribbble Portfolio"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm9.85 10.75a9.89 9.89 0 0 1-4.8 4.31c-.34-.7-.73-1.4-1.16-2.07 3.32-.93 5.43-2.01 5.96-2.24zm-6.75-6.52a9.98 9.98 0 0 1 3.53 3.65c-.47.24-2.4 1.25-5.5 2.16-1.07-2.07-2.29-4.04-3.64-5.88 1.94-.36 3.84-.28 5.61.07zM9.46 3.12c1.33 1.81 2.54 3.74 3.59 5.77-3.8 1.15-7.55 1.28-8.12 1.28a9.94 9.94 0 0 1 4.53-7.05zM2.14 12c0-.12.01-.24.01-.36.51 0 4.77-.07 9.07-1.39.46.72.88 1.47 1.24 2.22-4.14 1.29-7.85 4.32-8.31 4.71a9.9 9.9 0 0 1-2.01-5.18zm3.27 6.64c.39-.34 3.62-3.08 7.64-4.24.81 1.95 1.48 4 1.99 6.09-3.71 1.27-7.46-.22-9.63-1.85zm11.39 3.01c-.51-2.02-1.17-4.02-1.95-5.91 3.96-.86 6.04-1.96 6.13-2.01a9.96 9.96 0 0 1-4.18 7.92z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <a href="#services" className="hover:text-white transition-colors py-1 inline-block">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors py-1 inline-block">
                  UI/UX Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors py-1 inline-block">
                  Brand Identity
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors py-1 inline-block">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors py-1 inline-block">
                  Performance Audits
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <a href="#services" className="hover:text-white transition-colors py-1 inline-block">
                  Services
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-white transition-colors py-1 inline-block">
                  Results & Metrics
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors py-1 inline-block">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors py-1 inline-block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Headquarters
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed mb-4 font-medium">
              500 Howard Street, Suite 400<br />
              San Francisco, CA 94105
            </p>
            <p className="text-xs text-slate-200 font-semibold">
              Direct inquiries:<br />
              <a
                href="mailto:hello@northpeakdigital.com"
                className="text-blue-300 hover:underline inline-block py-1 font-bold"
              >
                hello@northpeakdigital.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar & MANDATORY CREDIT LINE */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold">
          <p className="text-slate-300">
            © {new Date().getFullYear()} NorthPeak Digital Agency. All rights reserved.
          </p>

          {/* MANDATORY CREDIT LINE REQUIREMENT */}
          <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-slate-100">
            <span>Built for Digital Heroes Training Task</span>
            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 font-bold hover:text-cyan-300 hover:underline inline-flex items-center ml-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm"
              aria-label="Digital Heroes Website https://digitalheroesco.com (opens in a new tab)"
            >
              https://digitalheroesco.com
              <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
