"use client";

import React from "react";
import { ShieldCheck, Scale, Award, EyeOff } from "lucide-react";

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: Scale,
      title: "Calibrated to Your Exact Reference",
      description:
        "Luxury timepieces vary considerably in secondary value based on subtle reference codes, dial marks, bezel materials, and case preservation. We review individual serial and condition factors rather than assuming all watches from a brand share generic prices.",
      pill: "Individualised Horology",
    },
    {
      icon: Award,
      title: "Real UK Secondary Market Intelligence",
      description:
        "Our appraisal desk is calibrated to active transaction prices across London watch exchanges, Mayfair dealers, and verified UK collector networks, ensuring you receive true secondary market valuations.",
      pill: "Live Market Intelligence",
    },
    {
      icon: EyeOff,
      title: "Strict Discretion & Fully Insured Logistics",
      description:
        "From discreet home courier collection fully insured up to high values by Royal Mail Special Delivery to private Mayfair appointments, your privacy and physical security are paramount at every step.",
      pill: "Discreet & Insured",
    },
    {
      icon: ShieldCheck,
      title: "You Retain 100% Autonomous Control",
      description:
        "Submitting an enquiry never obligates you to accept an offer or part with your timepiece. You review our itemised appraisal in your own time with zero pressure from sales agents.",
      pill: "Zero Obligation",
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-24 bg-[#fffefb]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[12px] font-[600] text-[#605d52] tracking-[2px] uppercase mb-3">
            The Finacforce Advantage
          </p>
          <h2 className="text-[32px] sm:text-[46px] font-[300] text-[#201515] tracking-[-0.015em] leading-[1.12] mb-4">
            Why Choose Finacforce Luxury Horology?
          </h2>
          <p className="text-[16px] text-[#605d52] font-[350] leading-[26px]">
            Our valuation framework is built on accurate secondary market intelligence, horological expertise, and unconditional respect for our clients' time and asset autonomy.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#f8f4f0]/60 hover:bg-[#fffefb] border border-[#c5c0b1]/60 hover:border-[#201515]/60 rounded-[14px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 group shadow-2xs hover:shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-[10px] bg-[#fffefb] border border-[#c5c0b1]/60 flex items-center justify-center text-[#201515] group-hover:border-[#201515] transition-colors">
                      <Icon className="w-6 h-6 text-[#201515]" />
                    </div>
                    <span className="text-[11px] font-[600] uppercase tracking-wider text-[#605d52] bg-[#fffefb] border border-[#c5c0b1]/60 px-3 py-1 rounded-full">
                      {item.pill}
                    </span>
                  </div>

                  <h3 className="text-[20px] sm:text-[22px] font-[450] text-[#201515] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[14px] sm:text-[15px] text-[#605d52] font-[350] leading-[25px]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

