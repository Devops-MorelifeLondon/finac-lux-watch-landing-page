"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, Clock } from "lucide-react";

interface NavbarProps {
  onSelectBrand?: (brand: string) => void;
}

export default function Navbar({ onSelectBrand }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-200 bg-[#fffefb]/95 backdrop-blur-md border-b border-[#c5c0b1]/30">
      <nav className="max-w-[1360px] mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 shrink-0 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Image
            alt="Finacforce Logo"
            width={160}
            height={32}
            className="h-6 sm:h-7 w-auto object-contain"
            src="/finacforce-official-logo.png"
            priority
          />
          <div className="flex items-center gap-1.5">
            <span className="bg-[#201515] text-[#fffefb] text-[9px] font-[700] uppercase tracking-[1.5px] px-1.5 py-0.5 rounded-[4px]">
              LUXURY
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 bg-[#00da04]/15 text-[#1b7a1d] text-[9px] font-[700] uppercase tracking-[1.2px] px-1.5 py-0.5 rounded-[4px] border border-[#00da04]/30">
              <Clock className="w-2.5 h-2.5" /> HOROLOGY
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          <button
            onClick={() => scrollTo("brands")}
            className="px-3 py-1.5 rounded-[8px] text-[14px] whitespace-nowrap transition-colors duration-150 text-[#605d52] hover:text-[#201515] hover:bg-[#f8f4f0]/80 font-[450]"
          >
            Watch Brands
          </button>
          <button
            onClick={() => scrollTo("valuation-criteria")}
            className="px-3 py-1.5 rounded-[8px] text-[14px] whitespace-nowrap transition-colors duration-150 text-[#605d52] hover:text-[#201515] hover:bg-[#f8f4f0]/80 font-[450]"
          >
            Valuation Criteria
          </button>
          <button
            onClick={() => scrollTo("how-it-works")}
            className="px-3 py-1.5 rounded-[8px] text-[14px] whitespace-nowrap transition-colors duration-150 text-[#605d52] hover:text-[#201515] hover:bg-[#f8f4f0]/80 font-[450]"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollTo("why-us")}
            className="px-3 py-1.5 rounded-[8px] text-[14px] whitespace-nowrap transition-colors duration-150 text-[#605d52] hover:text-[#201515] hover:bg-[#f8f4f0]/80 font-[450]"
          >
            Why Finacforce
          </button>
          <button
            onClick={() => scrollTo("faq")}
            className="px-3 py-1.5 rounded-[8px] text-[14px] whitespace-nowrap transition-colors duration-150 text-[#605d52] hover:text-[#201515] hover:bg-[#f8f4f0]/80 font-[450]"
          >
            FAQ
          </button>
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => scrollTo("valuation-form")}
            className="bg-[#00da04] hover:bg-[#00c204] text-[#201515] text-[12px] xl:text-[13px] font-[600] tracking-[0.5px] uppercase px-3.5 xl:px-4 py-2 rounded-[8px] transition-all whitespace-nowrap leading-none shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
          >
            Get Watch Valuation
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-[8px] text-[#605d52] hover:text-[#201515] hover:bg-[#f8f4f0] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fffefb] border-b border-[#c5c0b1]/50 px-4 py-4 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <button
            onClick={() => scrollTo("brands")}
            className="block w-full text-left px-3 py-2 text-[15px] font-[450] text-[#201515] hover:bg-[#f8f4f0] rounded-[6px]"
          >
            Watch Brands
          </button>
          <button
            onClick={() => scrollTo("valuation-criteria")}
            className="block w-full text-left px-3 py-2 text-[15px] font-[450] text-[#201515] hover:bg-[#f8f4f0] rounded-[6px]"
          >
            Valuation Criteria
          </button>
          <button
            onClick={() => scrollTo("how-it-works")}
            className="block w-full text-left px-3 py-2 text-[15px] font-[450] text-[#201515] hover:bg-[#f8f4f0] rounded-[6px]"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollTo("why-us")}
            className="block w-full text-left px-3 py-2 text-[15px] font-[450] text-[#201515] hover:bg-[#f8f4f0] rounded-[6px]"
          >
            Why Finacforce
          </button>
          <button
            onClick={() => scrollTo("faq")}
            className="block w-full text-left px-3 py-2 text-[15px] font-[450] text-[#201515] hover:bg-[#f8f4f0] rounded-[6px]"
          >
            Frequently Asked Questions
          </button>
          <div className="pt-2 border-t border-[#c5c0b1]/30">
            <button
              onClick={() => scrollTo("valuation-form")}
              className="w-full text-center bg-[#00da04] hover:bg-[#00c204] text-[#201515] font-[600] text-[13px] tracking-wide uppercase py-2.5 rounded-[8px]"
            >
              Get Free Watch Valuation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

