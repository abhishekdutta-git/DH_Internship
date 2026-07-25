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
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    icon: Layout,
    description:
      "Bespoke user interface designs and comprehensive design systems. We craft intuitive digital journeys that elevate user engagement and optimize conversion funnels.",
    tags: ["Framer Systems", "Figma Libraries", "Micro-Interactions", "User Research"],
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    icon: Sparkles,
    description:
      "Luxury visual identity systems that leave a lasting mark. From custom typography and color harmony to comprehensive brand guidelines that build market dominance.",
    tags: ["Logo Systems", "Visual Language", "Typography", "Brand Strategy"],
  },
  {
    id: "seo-growth",
    title: "SEO & Growth",
    icon: TrendingUp,
    description:
      "Data-driven organic growth and technical SEO strategy. We optimize site architecture, indexation, and content hierarchy to dominate top search positions.",
    tags: ["Technical Audits", "Core Web Vitals", "Content Strategy", "Schema Markup"],
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    icon: Zap,
    description:
      "Speed audits and Core Web Vitals optimization. We audit legacy bottlenecks, minimize JS bundles, and deliver guaranteed 95+ Lighthouse scores across all devices.",
    tags: ["Bundle Reduction", "Edge Caching", "Lazy Preloading", "99+ Lighthouse"],
  },
  {
    id: "digital-strategy",
    title: "Digital Strategy",
    icon: Compass,
    description:
      "Strategic advisory for modern tech ecosystems. We help leadership teams evaluate tech stacks, modern infrastructure migration, and digital product roadmaps.",
    tags: ["Architecture Audits", "Tech Migration", "Funnel Optimization", "Analytics"],
  },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-24 md:py-32 relative bg-[#07090e]">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
              OUR CAPABILITIES
            </span>
          </div>
          <h2 id="services-heading" className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Bespoke Services Engineered for Scale & Market Leadership
          </h2>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
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
                className="glass-panel glass-panel-hover p-8 rounded-3xl relative group flex flex-col justify-between border border-white/15 focus-within:ring-2 focus-within:ring-blue-400"
              >
                <div>
                  {/* Service Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-blue-400/50 transition-all duration-300 shadow-md">
                    <IconComponent className="w-7 h-7 text-blue-400 group-hover:text-cyan-300 transition-colors" aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-200 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Tech / Feature Tags */}
                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 mb-6">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#1e293b] text-slate-100 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center min-h-[44px] text-xs font-bold text-blue-300 hover:text-blue-200 group-hover:translate-x-1 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-md"
                    aria-label={`Discuss Service Requirements for ${service.title}`}
                  >
                    Discuss Service Requirements
                    <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
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
