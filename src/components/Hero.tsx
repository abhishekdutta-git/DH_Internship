"use client";

import { ArrowRight, ChevronDown, Sparkles, ShieldCheck, Zap, Award } from "lucide-react";

const STATS = [
  { value: "250+", label: "Projects Completed" },
  { value: "99.4%", label: "Client Satisfaction" },
  { value: "18+", label: "Countries Served" },
  { value: "10+", label: "Years Experience" },
];

const CLIENT_LOGOS = [
  { name: "Stripe", role: "Payments Ecosystem" },
  { name: "Vercel", role: "Frontend Platform" },
  { name: "Linear", role: "Issue Tracking" },
  { name: "Framer", role: "Design Systems" },
  { name: "Supabase", role: "Backend Suite" },
  { name: "Raycast", role: "Productivity Tools" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Ambient Radial Gradient Background Blobs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-cyan-500/10 rounded-full blur-[140px] pointer-events-none animate-blob-slow"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/15 via-purple-500/15 to-pink-500/10 rounded-full blur-[120px] pointer-events-none animate-blob-reverse"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          {/* Announcement Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md mb-8 group hover:border-blue-500/40 transition-colors shadow-lg">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping" />
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs sm:text-sm font-medium text-slate-300">
              ⚡ NEXT-GEN DIGITAL ARCHITECTURE & BRANDING
            </span>
          </div>

          {/* Large Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            We Engineer{" "}
            <span className="text-gradient-accent">High-Impact</span> Digital
            Experiences for Visionary Brands
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl font-normal leading-relaxed mb-10">
            NorthPeak Digital combines elite software craftsmanship, bespoke UI/UX
            design, and organic growth marketing to build digital products that
            outperform the competition.
          </p>

          {/* Two CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#results"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-300 hover:text-white glass-panel rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all"
            >
              Explore Case Studies
            </a>
          </div>

          {/* Key Statistics Bar */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl glass-panel border border-white/10 mb-20 shadow-2xl">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-3 text-center border-r last:border-r-0 border-white/5"
              >
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Client Logos / Trust Badges Section */}
          <div className="w-full pt-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-8">
              Trusted by industry pioneers & high-growth tech companies
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              {CLIENT_LOGOS.map((client) => (
                <div
                  key={client.name}
                  className="flex flex-col items-center justify-center p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/15 transition-all group"
                >
                  <span className="font-display font-bold text-slate-300 text-lg group-hover:text-white transition-colors">
                    {client.name}
                  </span>
                  <span className="text-[10px] text-slate-500 group-hover:text-blue-400 transition-colors">
                    {client.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 flex flex-col items-center">
            <a
              href="#services"
              className="inline-flex flex-col items-center text-xs font-medium text-slate-400 hover:text-blue-400 transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-2"
              aria-label="Scroll down to services section"
            >
              <span className="mb-2">Discover Our Services</span>
              <div className="p-2 rounded-full border border-white/10 bg-white/5 group-hover:border-blue-500/40 animate-bounce">
                <ChevronDown className="w-4 h-4 text-slate-300 group-hover:text-blue-400" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
