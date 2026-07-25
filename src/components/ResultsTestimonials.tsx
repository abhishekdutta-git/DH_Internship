"use client";

import { useState } from "react";
import { Star, Quote, TrendingUp, ChevronLeft, ChevronRight, Building2, Globe2, Award, Users } from "lucide-react";

const IMPACT_METRICS = [
  {
    icon: Building2,
    value: "250+",
    label: "Projects Completed",
    description: "Enterprise & startup applications delivered on schedule.",
  },
  {
    icon: Users,
    value: "180+",
    label: "Satisfied Clients",
    description: "Long-term partnerships across tech, fintech, and luxury brands.",
  },
  {
    icon: Globe2,
    value: "18+",
    label: "Countries",
    description: "Global footprint serving clients across US, EU, and APAC.",
  },
  {
    icon: Award,
    value: "10+",
    label: "Years Experience",
    description: "Deep domain expertise in web engineering & branding.",
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Lin",
    company: "FinPulse Global",
    role: "VP of Product",
    avatar: "SL",
    stars: 5,
    highlightMetric: "Revenue increased by 220%",
    metricSub: "Within 90 days post-relaunch",
    quote:
      "NorthPeak Digital transformed our entire web platform. Their engineering quality and attention to micro-interactions are unlike any agency we’ve worked with. Revenue increased by 220% within the first quarter.",
  },
  {
    id: 2,
    name: "Marcus Vance",
    company: "ScaleFlow SaaS",
    role: "Founder & CEO",
    avatar: "MV",
    stars: 5,
    highlightMetric: "Conversion jumped 180%",
    metricSub: "Signup funnel optimization",
    quote:
      "They redesigned our core SaaS workflow from scratch. The design language feels premium, fast, and effortless for our enterprise customers. Our user conversion jumped by 180% in week four.",
  },
  {
    id: 3,
    name: "Elena Rostova",
    company: "Apex Systems",
    role: "Chief Marketing Officer",
    avatar: "ER",
    stars: 5,
    highlightMetric: "75% Faster Load Times",
    metricSub: "Core Web Vitals 99+ Score",
    quote:
      "Our legacy site was suffering from slow load speeds and high drop-off. NorthPeak rebuilt the frontend using Next.js and Tailwind, slashing page load times by 75% and giving us perfect Lighthouse performance.",
  },
  {
    id: 4,
    name: "David Park",
    company: "Voxel Analytics",
    role: "Chief Technology Officer",
    avatar: "DP",
    stars: 5,
    highlightMetric: "3.4x Pipeline Increase",
    metricSub: "Brand repositioning & UX redesign",
    quote:
      "The level of technical maturity NorthPeak brings is outstanding. They didn’t just design a website—they helped us establish a scalable component library that our internal team now uses daily.",
  },
];

export default function ResultsTestimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="results" aria-labelledby="results-heading" className="py-24 md:py-32 bg-[#090d16] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
              PROVEN IMPACT & CLIENT RESULTS
            </span>
          </div>
          <h2 id="results-heading" className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Real Metrics Driven for Industry Leaders
          </h2>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Here is what happens when senior craftsmanship meets rigorous performance engineering and luxury aesthetic design.
          </p>
        </div>

        {/* Global Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {IMPACT_METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-3xl border border-white/15 hover:border-blue-400/40 transition-all flex flex-col justify-between"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-400" aria-hidden="true" />
                </div>
                <div>
                  <span className="font-display text-4xl font-extrabold text-white block mb-1">
                    {metric.value}
                  </span>
                  <h3 className="text-base font-bold text-slate-100 mb-1">
                    {metric.label}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {metric.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Featured Testimonial Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel gradient-border-glow p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
            {/* Background Quote Icon */}
            <Quote className="absolute -bottom-6 -right-6 w-48 h-48 text-white/[0.03] pointer-events-none" aria-hidden="true" />

            <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
              {/* Main Content */}
              <div className="flex-1">
                {/* Metric Badge Pill */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 mb-6 font-bold text-sm">
                  <TrendingUp className="w-4 h-4" aria-hidden="true" />
                  <span>{TESTIMONIALS[activeIdx].highlightMetric}</span>
                  <span className="text-xs text-emerald-200">
                    ({TESTIMONIALS[activeIdx].metricSub})
                  </span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6" role="img" aria-label="5 out of 5 stars customer rating">
                  {[...Array(TESTIMONIALS[activeIdx].stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg sm:text-2xl font-sans text-slate-100 font-medium leading-relaxed mb-8 italic">
                  "{TESTIMONIALS[activeIdx].quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {TESTIMONIALS[activeIdx].avatar}
                  </div>
                  <div>
                    <span className="font-display font-bold text-white text-base block">
                      {TESTIMONIALS[activeIdx].name}
                    </span>
                    <span className="text-xs text-slate-200 font-semibold">
                      {TESTIMONIALS[activeIdx].role},{" "}
                      <span className="text-blue-300">
                        {TESTIMONIALS[activeIdx].company}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/15">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className="min-h-[44px] min-w-[44px] p-2 flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-full"
                    aria-label={`Go to testimonial slide ${idx + 1} of ${TESTIMONIALS.length}`}
                    aria-current={activeIdx === idx ? "true" : "false"}
                  >
                    <span
                      className={`h-3 rounded-full transition-all block ${
                        activeIdx === idx
                          ? "w-8 bg-blue-400"
                          : "w-3 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="min-h-[44px] min-w-[44px] p-3 rounded-full bg-[#1e293b] border border-white/20 text-slate-100 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 flex items-center justify-center"
                  aria-label="View previous client testimonial"
                >
                  <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                </button>
                <button
                  onClick={handleNext}
                  className="min-h-[44px] min-w-[44px] p-3 rounded-full bg-[#1e293b] border border-white/20 text-slate-100 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 flex items-center justify-center"
                  aria-label="View next client testimonial"
                >
                  <ChevronRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
