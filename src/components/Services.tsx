"use client";

import { Code2, Layout, Sparkles, TrendingUp, Zap, Compass, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    id: "web-development",
    title: "Web Development",
    icon: Code2,
    description:
      "Full-stack Web Applications built on Next.js, React, and TypeScript. We engineer resilient edge architectures designed for lightning speed, dynamic scalability, and bulletproof security.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Serverless Edge"],
    accentColor: "from-blue-500 to-cyan-500",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    icon: Layout,
    description:
      "Bespoke user interface designs and comprehensive design systems. We craft intuitive digital journeys that elevate user engagement and optimize conversion funnels.",
    tags: ["Framer Systems", "Figma Libraries", "Micro-Interactions", "User Research"],
    accentColor: "from-indigo-500 to-purple-500",
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    icon: Sparkles,
    description:
      "Luxury visual identity systems that leave a lasting mark. From custom typography and color harmony to comprehensive brand guidelines that build market dominance.",
    tags: ["Logo Systems", "Visual Language", "Typography", "Brand Strategy"],
    accentColor: "from-purple-500 to-pink-500",
  },
  {
    id: "seo-growth",
    title: "SEO & Growth",
    icon: TrendingUp,
    description:
      "Data-driven organic growth and technical SEO strategy. We optimize site architecture, indexation, and content hierarchy to dominate top search positions.",
    tags: ["Technical Audits", "Core Web Vitals", "Content Strategy", "Schema Markup"],
    accentColor: "from-cyan-500 to-emerald-500",
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    icon: Zap,
    description:
      "Speed audits and Core Web Vitals optimization. We audit legacy bottlenecks, minimize JS bundles, and deliver guaranteed 95+ Lighthouse scores across all devices.",
    tags: ["Bundle Reduction", "Edge Caching", "Lazy Preloading", "99+ Lighthouse"],
    accentColor: "from-amber-500 to-orange-500",
  },
  {
    id: "digital-strategy",
    title: "Digital Strategy",
    icon: Compass,
    description:
      "Strategic advisory for modern tech ecosystems. We help leadership teams evaluate tech stacks, modern infrastructure migration, and digital product roadmaps.",
    tags: ["Architecture Audits", "Tech Migration", "Funnel Optimization", "Analytics"],
    accentColor: "from-blue-600 to-indigo-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative bg-[#07090e]">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              OUR CAPABILITIES
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Bespoke Services Engineered for Scale & Market Leadership
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            We don’t build generic websites. We design and develop custom digital assets tailored to drive revenue, accelerate user acquisition, and establish brand prestige.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = service.icon;
            return (
              <article
                key={service.id}
                className="glass-panel glass-panel-hover p-8 rounded-3xl relative group flex flex-col justify-between border border-white/10"
              >
                <div>
                  {/* Service Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300 shadow-md">
                    <IconComponent className="w-7 h-7 text-blue-400 group-hover:text-cyan-300 transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Tech / Feature Tags */}
                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mb-6">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center text-xs font-semibold text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-all"
                  >
                    Discuss Service Requirements
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
