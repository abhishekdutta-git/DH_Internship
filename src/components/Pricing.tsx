"use client";

import { useState } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const PLANS = [
    {
      name: "Starter",
      id: "plan-starter",
      tagline: "Ideal for early-stage startups needing rapid market entry.",
      monthlyPrice: "$4,999",
      annualPrice: "$3,999",
      period: "/ month",
      highlight: false,
      ctaText: "Get Started with Starter",
      features: [
        "Bespoke 5-Page Responsive Web Build",
        "Next.js & Tailwind Architecture",
        "Essential UI/UX Component Library",
        "Basic Technical SEO & Meta Setup",
        "Lighthouse Performance > 90",
        "2-Week Rapid Delivery",
        "Standard Email Support",
      ],
    },
    {
      name: "Growth",
      id: "plan-growth",
      tagline: "Our flagship plan for scaling businesses wanting market dominance.",
      monthlyPrice: "$8,999",
      annualPrice: "$7,199",
      period: "/ month",
      highlight: true,
      badge: "MOST POPULAR CHOICE",
      ctaText: "Accelerate Growth Now",
      features: [
        "Unlimited Custom Pages & Micro-SaaS Interfaces",
        "Full Design System & Brand Identity Package",
        "Advanced Core Web Vitals Audit (99+ Score)",
        "Technical SEO & Dynamic Schema Automation",
        "Conversion Funnel & Analytics Integration",
        "Dedicated Engineering Lead & Weekly Sprints",
        "Priority 24/7 Slack & Video Support",
      ],
    },
    {
      name: "Enterprise",
      id: "plan-enterprise",
      tagline: "Bespoke engineering squad for complex enterprise digital ecosystems.",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      period: "pricing",
      highlight: false,
      ctaText: "Schedule Enterprise Call",
      features: [
        "Bespoke Multi-Platform Ecosystem & Apps",
        "Dedicated 5-Person Senior Squad (Design + Dev)",
        "Custom Backend Microservices & API Integrations",
        "Enterprise Security, SOC2 & SLA Compliance",
        "24/7 Dedicated Emergency Phone Support",
        "Continuous Deployment & Infrastructure Management",
        "Quarterly Strategic Tech Stack Reviews",
      ],
    },
  ];

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="py-24 md:py-32 relative bg-[#07090e]">
      {/* Glow Effects */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
              TRANSPARENT INVESTMENT
            </span>
          </div>
          <h2 id="pricing-heading" className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Predictable Pricing for High-Growth Companies
          </h2>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
            No hidden fees, no vague hourly estimates. Select a model that matches your business velocity.
          </p>

          {/* Billing Switcher */}
          <div className="inline-flex items-center justify-center bg-[#131b2e] p-1.5 rounded-full border border-white/20 shadow-inner" role="group" aria-label="Billing frequency selection">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              aria-pressed={!isAnnual}
              className={`min-h-[44px] px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                !isAnnual
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-200 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              aria-pressed={isAnnual}
              className={`min-h-[44px] px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                isAnnual
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-200 hover:text-white"
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-full border border-emerald-200 font-extrabold">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <article
                key={plan.id}
                className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.highlight
                    ? "bg-[#0f172a]/95 gradient-border-glow shadow-2xl shadow-blue-600/30 lg:-translate-y-3"
                    : "glass-panel glass-panel-hover border border-white/15"
                }`}
              >
                {/* Highlight Badge */}
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[11px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-8 min-h-[40px] font-medium">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        {price}
                      </span>
                      {price !== "Custom" && (
                        <span className="text-slate-200 text-sm font-semibold">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    {isAnnual && price !== "Custom" && (
                      <p className="text-xs text-emerald-300 mt-1.5 font-bold">
                        Billed annually (20% discount applied)
                      </p>
                    )}
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3.5 mb-8 pt-6 border-t border-white/15">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block mb-4">
                      What's Included:
                    </span>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-blue-300" aria-hidden="true" />
                        </div>
                        <span className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <a
                  href="#contact"
                  className={`w-full min-h-[48px] py-4 px-6 rounded-2xl font-bold text-sm text-center transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 group ${
                    plan.highlight
                      ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl shadow-blue-600/40 hover:shadow-blue-600/60 hover:scale-[1.02]"
                      : "bg-[#1e293b] text-white hover:bg-slate-700 border border-white/20"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
