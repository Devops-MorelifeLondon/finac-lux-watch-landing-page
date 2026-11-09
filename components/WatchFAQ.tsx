"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle, PhoneCall } from "lucide-react";

export default function WatchFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Where can I sell my luxury watch in the UK?",
      a: "You can start by requesting an appraisal with Finacforce Luxury Horology. We review enquiries for pre-owned luxury watches across England, Scotland, Wales, and Northern Ireland. Once an appraisal is agreed, you can choose between private handover at our London Mayfair facilities or complimentary insured courier collection nationwide.",
    },
    {
      q: "How much is my luxury watch worth?",
      a: "Your timepiece's potential resale value depends on its brand, exact reference number, year of manufacture, mechanical and aesthetic condition, authenticity, whether original box and papers are present, and current secondary market collector demand. Our horology desk bases valuations on actual recent UK and global secondary market transactions.",
    },
    {
      q: "Can I sell my Rolex, Omega or Patek without original box or papers?",
      a: "Yes. You may submit an enquiry without the original box or warranty papers ('naked watch'). Our horologists verify serial codes against manufacturer registers and inspect the movement. While complete sets command a collector premium, authentic watches without paperwork are actively purchased and appraised.",
    },
    {
      q: "Should I get my watch serviced or polished before selling it?",
      a: "No, we strongly recommend against polishing or having unauthorized repairs done before an appraisal. Serious watch collectors and dealers place high value on original unpolished cases with crisp factory chamfers. Polishing can remove metal and reduce value. Submit the watch in its current condition.",
    },
    {
      q: "Which luxury watch brands does Finacforce evaluate?",
      a: "We actively evaluate Rolex, Patek Philippe, Audemars Piguet, Omega, Cartier, Vacheron Constantin, Richard Mille, Breitling, IWC Schaffhausen, Jaeger-LeCoultre, Tudor, A. Lange & Söhne, Panerai, Hublot, and TAG Heuer, as well as exceptional independent watchmakers and vintage pocket watches.",
    },
    {
      q: "How does secure shipping or in-person handover work in the UK?",
      a: "If you decide to proceed with an agreed valuation, we provide a prepaid, fully insured Royal Mail Special Delivery pack or arrange dedicated private courier transit. Alternatively, clients selling high-value horological assets may book a private consultation in Mayfair, London.",
    },
    {
      q: "Do I have to accept a valuation?",
      a: "No. Requesting an appraisal is 100% complimentary and does not commit you to selling your timepiece or accepting our offer. You retain total autonomy and control at every step.",
    },
  ];

  const scrollToForm = () => {
    const el = document.getElementById("valuation-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[#fffefb]">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[12px] font-[600] text-[#605d52] tracking-[2px] uppercase mb-3 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#00da04]" />
            <span>Frequently Asked Questions</span>
          </p>
          <h2 className="text-[32px] sm:text-[46px] font-[300] text-[#201515] tracking-[-0.015em] leading-[1.12] mb-4">
            Everything You Need to Know Before Selling
          </h2>
          <p className="text-[16px] text-[#605d52] font-[350]">
            Transparent answers to help you navigate timepiece appraisals, authenticity verification, box & papers, and secure settlement.
          </p>
        </div>

        {/* Accordions */}
        <div className="divide-y divide-[#c5c0b1]/50 border-t border-b border-[#c5c0b1]/50">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5 transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="text-[17px] sm:text-[18px] font-[450] text-[#201515] group-hover:text-black leading-snug">
                    {faq.q}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#f8f4f0] group-hover:bg-[#f0ece6] flex items-center justify-center text-[#201515] shrink-0 transition-colors">
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-3.5 pr-8 animate-in fade-in duration-200">
                    <p className="text-[15px] text-[#605d52] font-[350] leading-[25px]">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Bottom Callout */}
        <div className="mt-12 p-6 rounded-[12px] bg-[#f8f4f0] border border-[#c5c0b1]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <PhoneCall className="w-5 h-5 text-[#201515]" />
            <p className="text-[14px] text-[#201515] font-[450]">
              Have a high-value timepiece or multi-watch estate question?
            </p>
          </div>
          <button
            type="button"
            onClick={scrollToForm}
            className="text-[13px] font-[600] uppercase tracking-wide text-[#201515] hover:text-black underline underline-offset-4 cursor-pointer whitespace-nowrap"
          >
            Speak with an Appraiser →
          </button>
        </div>
      </div>
    </section>
  );
}

