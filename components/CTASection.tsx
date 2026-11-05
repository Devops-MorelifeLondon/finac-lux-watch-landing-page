"use client";

import React from "react";
import { ArrowRight, Watch, Clock, ShieldCheck } from "lucide-react";

export default function CTASection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-24 bg-[#f8f4f0] border-t border-[#c5c0b1]/30">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fffefb] border border-[#c5c0b1]/70 text-[12px] font-[500] text-[#605d52] uppercase tracking-wider mb-5">
            <Watch className="w-3.5 h-3.5 text-[#00da04]" />
            <span>Finacforce Luxury Horology Desk</span>
          </div>

          <h2 className="text-[34px] sm:text-[50px] font-[300] text-[#201515] tracking-[-0.02em] leading-[1.12] mb-5">
            Your Timepiece Deserves an Exact Horological Valuation.
          </h2>

          <p className="text-[16px] sm:text-[17px] text-[#605d52] font-[350] leading-[27px] mb-8 max-w-2xl mx-auto">
            Whether you own a modern Rolex Submariner, a rare Patek Philippe complication, or an Audemars Piguet Royal Oak, receive a discreet, data-backed secondary market appraisal from UK horology specialists.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-6">
            <button
              type="button"
              onClick={() => scrollTo("valuation-form")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#00da04] hover:bg-[#00c204] text-[#201515] text-[14px] sm:text-[15px] font-[600] tracking-[0.5px] uppercase px-7 py-3.5 rounded-[8px] transition-all shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
            >
              <span>Request Free Watch Valuation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("brands")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#fffefb] hover:bg-[#f8f4f0] text-[#201515] border border-[#c5c0b1] text-[14px] sm:text-[15px] font-[450] px-6 py-3.5 rounded-[8px] transition-all cursor-pointer"
            >
              <span>Explore Evaluated Brands</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 text-[12px] text-[#605d52] font-[350]">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#00da04]" /> 24–48hr Turnaround
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00da04]" /> 100% Zero Obligation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

