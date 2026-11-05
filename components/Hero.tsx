"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Clock, Award, Sparkles, Watch } from "lucide-react";

interface HeroProps {
  onQuickSelectBrand?: (brand: string) => void;
}

export default function Hero({ onQuickSelectBrand }: HeroProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const watchShortcuts = [
    { label: "Rolex Submariner & Daytona", brand: "Rolex" },
    { label: "Patek Philippe Nautilus", brand: "Patek Philippe" },
    { label: "Audemars Piguet Royal Oak", brand: "Audemars Piguet" },
    { label: "Omega Speedmaster & Seamaster", brand: "Omega" },
    { label: "Cartier Santos & Tank", brand: "Cartier" },
    { label: "Vacheron Constantin Overseas", brand: "Vacheron Constantin" },
  ];

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-64px)] flex flex-col justify-between bg-white pt-24 pb-12 sm:pt-28 sm:pb-16 border-b border-[#c5c0b1]/30">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#00da04]/5 via-amber-50/20 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 w-full relative z-10 my-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f8f4f0] border border-[#c5c0b1]/70 text-[#201515] text-[12px] sm:text-[13px] font-[500] tracking-wide mb-6 shadow-xs animate-in fade-in duration-300">
            <span className="w-2 h-2 rounded-full bg-[#00da04] animate-pulse" />
            <span className="font-[600] tracking-wider uppercase text-[11px] text-[#605d52]">
              UK Horology Desk
            </span>
            <span className="text-[#c5c0b1]">|</span>
            <span>Live Secondary Market Valuations • Mayfair & Nationwide</span>
          </div>

          {/* Main Title */}
          <h1 className="text-[38px] sm:text-[56px] lg:text-[68px] font-[300] tracking-[-0.025em] leading-[1.08] text-[#201515] mb-5">
            Sell Your Luxury Watch in the UK
          </h1>

          {/* Subheading */}
          <h2 className="text-[19px] sm:text-[23px] lg:text-[26px] font-[400] text-[#201515] tracking-[-0.01em] mb-5 max-w-3xl mx-auto leading-snug">
            Looking to Sell Your Timepiece? Start With a Personalised Horological Valuation.
          </h2>

          {/* Narrative Body */}
          <p className="text-[15px] sm:text-[17px] text-[#605d52] font-[350] leading-[27px] max-w-2xl mx-auto mb-8">
            From Rolex Submariner and Daytona to Patek Philippe Nautilus, Audemars Piguet, Omega, and Cartier, discover your luxury watch’s true secondary market worth. Whether upgrading, refining your collection, or liquidating an asset, our specialist watch desk offers discreet, transparent, and verified UK appraisals.
          </p>

          {/* Quick Model Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-9 max-w-2xl mx-auto">
            {watchShortcuts.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  if (onQuickSelectBrand) onQuickSelectBrand(item.brand);
                  scrollTo("valuation-form");
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] sm:text-[13px] font-[450] bg-[#f8f4f0] hover:bg-[#fffefb] text-[#201515] border border-[#c5c0b1]/60 hover:border-[#201515] transition-all cursor-pointer shadow-2xs hover:shadow-xs group"
              >
                <Watch className="w-3.5 h-3.5 text-[#00da04] group-hover:scale-110 transition-transform" />
                <span>{item.label}</span>
                <span className="text-[#939084] text-[11px] group-hover:text-[#201515] ml-0.5">→</span>
              </button>
            ))}
          </div>

          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-4">
            <button
              onClick={() => scrollTo("valuation-form")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#00da04] hover:bg-[#00c204] text-[#201515] text-[14px] sm:text-[15px] font-[600] tracking-[0.5px] uppercase px-7 py-3.5 rounded-[10px] transition-all shadow-sm hover:shadow-md active:scale-[0.98] cursor-pointer"
            >
              <span>Get My Watch Valuation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo("brands")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#fffefb] hover:bg-[#f8f4f0] text-[#201515] border border-[#c5c0b1] text-[14px] sm:text-[15px] font-[450] px-6 py-3.5 rounded-[10px] transition-all cursor-pointer"
            >
              <span>Explore Evaluated Brands</span>
            </button>
          </div>

          {/* Small Guarantee Note */}
          <p className="text-[13px] text-[#939084] font-[350]">
            All timepiece enquiries are appraised individually by watchmakers & horologists. 100% no obligation.
          </p>
        </div>
      </div>

      {/* Trust & Metrics Row */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 w-full pt-10 mt-6 relative z-10 border-t border-[#c5c0b1]/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-[#fffefb] border border-[#c5c0b1]/50 rounded-[12px] p-4 sm:p-5 hover:border-[#201515]/40 transition-colors">
            <div className="flex items-center gap-2 mb-1.5 text-[#00da04]">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-[12px] font-[600] uppercase tracking-wider text-[#605d52]">
                Complimentary
              </span>
            </div>
            <div className="text-[20px] sm:text-[22px] font-[400] text-[#201515]">
              100% Free
            </div>
            <div className="text-[12px] sm:text-[13px] text-[#605d52] font-[350]">
              Zero Upfront Valuation Costs
            </div>
          </div>

          <div className="bg-[#fffefb] border border-[#c5c0b1]/50 rounded-[12px] p-4 sm:p-5 hover:border-[#201515]/40 transition-colors">
            <div className="flex items-center gap-2 mb-1.5 text-[#00da04]">
              <Clock className="w-5 h-5" />
              <span className="text-[12px] font-[600] uppercase tracking-wider text-[#605d52]">
                Turnaround
              </span>
            </div>
            <div className="text-[20px] sm:text-[22px] font-[400] text-[#201515]">
              24–48 Hours
            </div>
            <div className="text-[12px] sm:text-[13px] text-[#605d52] font-[350]">
              Individual Appraisal Review
            </div>
          </div>

          <div className="bg-[#fffefb] border border-[#c5c0b1]/50 rounded-[12px] p-4 sm:p-5 hover:border-[#201515]/40 transition-colors">
            <div className="flex items-center gap-2 mb-1.5 text-[#00da04]">
              <Sparkles className="w-5 h-5" />
              <span className="text-[12px] font-[600] uppercase tracking-wider text-[#605d52]">
                Intelligence
              </span>
            </div>
            <div className="text-[20px] sm:text-[22px] font-[400] text-[#201515]">
              Live UK Data
            </div>
            <div className="text-[12px] sm:text-[13px] text-[#605d52] font-[350]">
              Secondary Market Pricing
            </div>
          </div>

          <div className="bg-[#fffefb] border border-[#c5c0b1]/50 rounded-[12px] p-4 sm:p-5 hover:border-[#201515]/40 transition-colors">
            <div className="flex items-center gap-2 mb-1.5 text-[#00da04]">
              <Award className="w-5 h-5" />
              <span className="text-[12px] font-[600] uppercase tracking-wider text-[#605d52]">
                Logistics
              </span>
            </div>
            <div className="text-[20px] sm:text-[22px] font-[400] text-[#201515]">
              UK Nationwide
            </div>
            <div className="text-[12px] sm:text-[13px] text-[#605d52] font-[350]">
              Discreet & Fully Insured Handover
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

