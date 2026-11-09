"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Check } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Tell Us About Your Timepiece",
      description:
        "Select your watch brand and share the model, reference number, condition, and whether original box and papers are present.",
      badge: "Takes under 2 minutes online",
      details: ["Model & Reference", "Condition & Year", "Box & Warranty Status"],
    },
    {
      num: "02",
      title: "Horological Appraisal Review",
      description:
        "Submit your timepiece information. Our watch desk reviews your specifications against verified UK secondary market sales.",
      badge: "Fast, confidential assessment",
      details: ["Secondary Market Data", "Authenticity Cross-Check", "24–48hr Response"],
    },
    {
      num: "03",
      title: "Discuss Your Valuation & Options",
      description:
        "If your timepiece meets our secondary criteria, our horology team will explain our appraisal breakdown and discuss available sale or purchase options.",
      badge: "Dedicated UK specialist guidance",
      details: ["Transparent Valuation Range", "Direct Purchase or Brokerage", "Clear Itemised Pricing"],
    },
    {
      num: "04",
      title: "Decide Whether to Proceed",
      description:
        "Review the valuation provided and decide whether you would like to move forward. If proceeding, choose between insured courier collection or private London handover.",
      badge: "100% no pressure, zero obligation",
      details: ["Zero Obligation to Sell", "Complimentary Insured Shipping", "Prompt Direct Bank Transfer"],
    },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-[#fffefb]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[12px] font-[600] text-[#605d52] tracking-[2px] uppercase mb-3">
            Simple 4-Step Process
          </p>
          <h2 className="text-[32px] sm:text-[46px] font-[300] text-[#201515] tracking-[-0.015em] leading-[1.12] mb-4">
            How to Sell Your Luxury Watch
          </h2>
          <p className="text-[16px] text-[#605d52] font-[350] leading-[26px]">
            A discreet, professional horological process designed to give you complete clarity, precision, and confidence from your first enquiry to final settlement.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#f8f4f0]/60 hover:bg-[#fffefb] border border-[#c5c0b1]/60 hover:border-[#201515]/60 rounded-[14px] p-6 flex flex-col justify-between transition-all duration-200 group shadow-2xs hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[28px] sm:text-[32px] font-[300] tracking-tight text-[#c5c0b1] group-hover:text-[#201515] transition-colors">
                    {step.num}
                  </span>
                  <span className="text-[11px] font-[500] text-[#605d52] bg-[#fffefb] px-2.5 py-1 rounded-full border border-[#c5c0b1]/60">
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-[18px] sm:text-[20px] font-[450] text-[#201515] mb-2.5 leading-snug">
                  {step.title}
                </h3>

                <p className="text-[13px] sm:text-[14px] text-[#605d52] font-[350] leading-[23px] mb-5">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#c5c0b1]/30">
                <ul className="space-y-1.5">
                  {step.details.map((detail, dIdx) => (
                    <li
                      key={dIdx}
                      className="text-[12px] text-[#201515] font-[400] flex items-center gap-2"
                    >
                      <Check className="w-3.5 h-3.5 text-[#00da04] shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Card */}
        <div className="bg-[#f8f4f0] border border-[#c5c0b1]/70 rounded-[14px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#00da04]/15 border border-[#00da04]/30 flex items-center justify-center text-[#146b16] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[18px] font-[450] text-[#201515]">
                Ready to submit your timepiece for review?
              </h4>
              <p className="text-[14px] text-[#605d52] font-[350]">
                Complimentary horology appraisal with zero obligation to proceed at any stage.
              </p>
            </div>
          </div>

          <button
            onClick={() => scrollTo("valuation-form")}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#00da04] hover:bg-[#00c204] text-[#201515] text-[13px] font-[600] tracking-[0.5px] uppercase px-6 py-3 rounded-[8px] transition-all whitespace-nowrap cursor-pointer shadow-xs"
          >
            <span>Get My Watch Valuation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

