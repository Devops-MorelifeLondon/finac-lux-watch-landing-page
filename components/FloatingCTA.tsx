"use client";

import React, { useState, useEffect } from "react";
import { Watch, ArrowUpRight } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA once user scrolls past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById("valuation-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
      // Focus on brand or model input after scrolling
      setTimeout(() => {
        const firstInput = formElement.querySelector<HTMLInputElement>("input, select");
        if (firstInput) {
          firstInput.focus({ preventScroll: true });
        }
      }, 500);
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Valuation enquiry navigation"
      className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <button
        type="button"
        onClick={scrollToForm}
        className="group relative flex items-center gap-2.5 bg-[#201515] hover:bg-black text-[#fffefb] pl-3.5 pr-4 py-3 rounded-full shadow-2xl border border-[#c5c0b1]/40 hover:border-[#00da04]/80 transition-all duration-200 active:scale-95 cursor-pointer"
      >
        {/* Glowing aura */}
        <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#00da04] to-emerald-400 opacity-25 group-hover:opacity-75 blur-sm transition duration-300 -z-10" />

        {/* Green Watch Icon Badge */}
        <span className="w-8 h-8 rounded-full bg-[#00da04] flex items-center justify-center text-[#201515] shrink-0 group-hover:rotate-12 transition-transform duration-200 shadow-sm">
          <Watch className="w-4 h-4" />
        </span>

        {/* Text */}
        <div className="flex flex-col text-left leading-tight pr-1">
          <span className="text-[10px] uppercase font-[700] tracking-[1.5px] text-[#00da04]">
            Valuation Desk
          </span>
          <span className="text-[13px] font-[500] text-[#fffefb]">
            Value My Watch
          </span>
        </div>

        {/* Arrow icon */}
        <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#00da04] group-hover:text-[#201515] flex items-center justify-center text-[#c5c0b1] transition-colors duration-200">
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </button>
    </aside>
  );
}

