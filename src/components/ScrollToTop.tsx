"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-blue-600/90 text-white shadow-2xl shadow-blue-600/50 hover:bg-blue-500 hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-md border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
      aria-label="Scroll back to top of page"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
