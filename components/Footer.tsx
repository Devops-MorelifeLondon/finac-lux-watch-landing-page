"use client";

import React from "react";
import Image from "next/image";
import { Clock } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#201515] text-[#fffefb] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <Image
                alt="Finacforce Logo"
                width={160}
                height={32}
                className="h-6 sm:h-7 w-auto object-contain"
                src="/finacforce-official-whitelogo.png"
              />
              <span className="bg-[#fffefb] text-[#201515] text-[9px] font-[700] uppercase tracking-[1.5px] px-1.5 py-0.5 rounded-[4px]">
                LUXURY
              </span>
              <span className="bg-[#00da04]/20 text-[#00da04] text-[9px] font-[700] uppercase tracking-[1.2px] px-1.5 py-0.5 rounded-[4px] border border-[#00da04]/30">
                HOROLOGY
              </span>
            </div>

            <p className="text-[14px] text-[#c5c0b1] font-[350] leading-[24px] max-w-sm mb-6">
              The premier UK valuation desk for luxury watches and prestige timepieces. Transparent, individualised secondary market appraisals for Rolex, Patek Philippe, Audemars Piguet, and fine horology.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[12px] text-[#c5c0b1]">
              <Clock className="w-3.5 h-3.5 text-[#00da04]" />
              <span>London Mayfair Horology Desk & UK Nationwide Courier</span>
            </div>
          </div>

          {/* Column 1: Watch Houses */}
          <div>
            <h4 className="text-[13px] font-[600] uppercase tracking-[1.5px] text-[#fffefb] mb-4">
              Watch Houses
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#c5c0b1] font-[350]">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("brands")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Rolex (Submariner, Daytona, GMT)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("brands")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Patek Philippe (Nautilus, Aquanaut)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("brands")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Audemars Piguet (Royal Oak)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("brands")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Omega (Speedmaster, Seamaster)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("brands")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Cartier (Santos, Tank, Ballon)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("brands")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Vacheron Constantin & Independents
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h4 className="text-[13px] font-[600] uppercase tracking-[1.5px] text-[#fffefb] mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#c5c0b1] font-[350]">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("how-it-works")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  4-Step Selling Process
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("valuation-criteria")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Valuation Criteria
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("why-us")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Why Finacforce Horology
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("valuation-form")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Free Watch Valuation Form
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("faq")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Standards */}
          <div>
            <h4 className="text-[13px] font-[600] uppercase tracking-[1.5px] text-[#fffefb] mb-4">
              Legal & Discretion
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#c5c0b1] font-[350]">
              <li>
                <a href="#valuation-form" className="hover:text-white transition-colors">
                  Client Privacy Policy
                </a>
              </li>
              <li>
                <a href="#valuation-form" className="hover:text-white transition-colors">
                  Terms & Valuation Conditions
                </a>
              </li>
              <li>
                <a href="#valuation-form" className="hover:text-white transition-colors">
                  Contact Horology Desk
                </a>
              </li>
              <li>
                <a href="#valuation-form" className="hover:text-white transition-colors">
                  Appraisal Disclaimers
                </a>
              </li>
              <li>
                <a href="#valuation-form" className="hover:text-white transition-colors">
                  Courier Insurance Guidance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[12px] text-[#939084] font-[350]">
          <p className="max-w-2xl leading-relaxed">
            Finacforce Luxury facilitates valuations and connects sellers with vetted appraisal specialists across the United Kingdom. All valuation enquiries are subject to verification and physical review; submission of details does not constitute a binding financial offer or purchase obligation.
          </p>

          <div className="shrink-0 text-center md:text-right">
            <div>© 2026 Finacforce. All rights reserved.</div>
            <div className="text-[11px] text-[#605d52] mt-0.5">
              Companies House verified reference • Open Government Licence v3.0
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

