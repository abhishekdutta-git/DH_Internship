"use client";

import { useState, useId } from "react";
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Clock, MessageSquare, Building, User } from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

export default function ContactForm() {
  const nameId = useId();
  const emailId = useId();
  const companyId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Work Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid work email address.";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company Name is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Project message is required.";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Please provide at least 15 characters describing your project.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate server submission API response delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#090d16] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Value Proposition */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Let's Build Something Extraordinary Together
            </h2>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-10">
              Ready to elevate your digital presence or engineer a high-throughput web application? Fill out the brief form or reach out directly.
            </p>

            {/* Direct Contact Detail Cards */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl glass-panel border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <a
                    href="mailto:hello@northpeakdigital.com"
                    className="text-base font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    hello@northpeakdigital.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl glass-panel border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Guaranteed SLA Response
                  </span>
                  <span className="text-base font-semibold text-white">
                    Under 2 Hours (Mon - Fri)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl glass-panel border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Global Offices
                  </span>
                  <span className="text-base font-semibold text-white">
                    San Francisco, CA & London, UK
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7">
            <div className="glass-panel gradient-border-glow p-8 sm:p-12 rounded-3xl shadow-2xl">
              {isSubmitted ? (
                /* Success Message State */
                <div
                  className="py-12 text-center flex flex-col items-center animate-in fade-in zoom-in-95 duration-500"
                  role="alert"
                  aria-live="polite"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    Project Request Received!
                  </h3>
                  <p className="text-slate-300 max-w-md text-sm leading-relaxed mb-8">
                    Thank you for reaching out. One of our Senior Partners will review your project requirements and get back to you within 2 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Active Contact Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-slate-400 mb-6">
                    Fill in your details below and we will prepare a tailored proposal.
                  </p>

                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor={nameId}
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Full Name <span className="text-blue-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id={nameId}
                        name="name"
                        type="text"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-errormessage={errors.name ? `${nameId}-error` : undefined}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Lin"
                        className={`w-full px-4 py-3.5 pl-11 rounded-xl bg-white/[0.04] border ${
                          errors.name
                            ? "border-red-500 focus:ring-red-500"
                            : "border-white/10 focus:border-blue-500"
                        } text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all`}
                      />
                      <User className="w-5 h-5 text-slate-500 absolute left-3.5 top-3.5 pointer-events-none" />
                    </div>
                    {errors.name && (
                      <p
                        id={`${nameId}-error`}
                        className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
                        role="alert"
                      >
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Work Email Field */}
                  <div>
                    <label
                      htmlFor={emailId}
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Work Email <span className="text-blue-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id={emailId}
                        name="email"
                        type="email"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-errormessage={errors.email ? `${emailId}-error` : undefined}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. sarah@finpulse.com"
                        className={`w-full px-4 py-3.5 pl-11 rounded-xl bg-white/[0.04] border ${
                          errors.email
                            ? "border-red-500 focus:ring-red-500"
                            : "border-white/10 focus:border-blue-500"
                        } text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all`}
                      />
                      <Mail className="w-5 h-5 text-slate-500 absolute left-3.5 top-3.5 pointer-events-none" />
                    </div>
                    {errors.email && (
                      <p
                        id={`${emailId}-error`}
                        className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
                        role="alert"
                      >
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Company Field */}
                  <div>
                    <label
                      htmlFor={companyId}
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Company Name <span className="text-blue-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id={companyId}
                        name="company"
                        type="text"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.company}
                        aria-errormessage={errors.company ? `${companyId}-error` : undefined}
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. FinPulse Global"
                        className={`w-full px-4 py-3.5 pl-11 rounded-xl bg-white/[0.04] border ${
                          errors.company
                            ? "border-red-500 focus:ring-red-500"
                            : "border-white/10 focus:border-blue-500"
                        } text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all`}
                      />
                      <Building className="w-5 h-5 text-slate-500 absolute left-3.5 top-3.5 pointer-events-none" />
                    </div>
                    {errors.company && (
                      <p
                        id={`${companyId}-error`}
                        className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
                        role="alert"
                      >
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.company}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor={messageId}
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Project Description <span className="text-blue-400">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id={messageId}
                        name="message"
                        rows={4}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-errormessage={errors.message ? `${messageId}-error` : undefined}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, target timeline, and goals..."
                        className={`w-full px-4 py-3.5 pl-11 rounded-xl bg-white/[0.04] border ${
                          errors.message
                            ? "border-red-500 focus:ring-red-500"
                            : "border-white/10 focus:border-blue-500"
                        } text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none`}
                      />
                      <MessageSquare className="w-5 h-5 text-slate-500 absolute left-3.5 top-3.5 pointer-events-none" />
                    </div>
                    {errors.message && (
                      <p
                        id={`${messageId}-error`}
                        className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
                        role="alert"
                      >
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Encrypting & Transmitting...
                      </span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
