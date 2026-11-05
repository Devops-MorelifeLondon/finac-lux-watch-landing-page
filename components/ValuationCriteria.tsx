"use client";

import React from "react";
import { FileText, Cpu, PackageCheck, History, TrendingUp, AlertCircle } from "lucide-react";

export default function ValuationCriteria() {
  const criteria = [
    {
      icon: FileText,
      step: "01",
      title: "Reference Number & Rarity",
      description:
        "Every luxury watch has an exact reference number that dictates its market rarity. Whether it's a discontinued Rolex Submariner (116610LN vs 126610LN) or a rare dial variant (MKI vs MKII dials), our horology desk identifies collector nuances.",
      keyCheck: "Model code, dial configuration, bezel insert material",
    },
    {
      icon: Cpu,
      step: "02",
      title: "Case Condition & Chamfers",
      description:
        "Watch collectors place high value on original factory lines. An unpolished case with crisp bevels commands a significant premium over heavily polished cases. We evaluate hairline marks, lug sharpness, and bracelet stretch.",
      keyCheck: "Chamfer crispness, case thickness, bracelet sag",
    },
    {
      icon: PackageCheck,
      step: "03",
      title: "Box, Papers & Full Collector Set",
      description:
        "A 'Full Set' includes original inner/outer presentation boxes, warranty guarantee card, manual booklets, swing tags, and bezel protectors. While we happily buy watches without papers ('naked watches'), full sets command top collector value.",
      keyCheck: "Dated guarantee card, serial match, original presentation box",
    },
    {
      icon: History,
      step: "04",
      title: "Movement Health & Service History",
      description:
        "Documented service records from official brand service centres (e.g., Rolex St James, Patek Philippe Geneva) verify caliber authenticity and prove the watch runs within factory timing tolerances (COSC / METAS).",
      keyCheck: "Service receipts, timekeeping amplitude, original hands & dial",
    },
    {
      icon: TrendingUp,
      step: "05",
      title: "Real-Time UK Market Intelligence",
      description:
        "Unlike automated algorithms that give artificially low or unrealistic estimates, our valuations reflect verified transaction data from UK trade networks, Mayfair watch dealers, and London auction houses.",
      keyCheck: "Live dealer trades, secondary market liquidity, global indices",
    },
  ];

  return (
    <section id="valuation-criteria" className="py-20 sm:py-24 bg-[#f8f4f0] border-t border-b border-[#c5c0b1]/30">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-[12px] font-[600] text-[#605d52] tracking-[2px] uppercase mb-3">
            Horological Appraisal Standards
          </p>
          <h2 className="text-[32px] sm:text-[46px] font-[300] text-[#201515] tracking-[-0.015em] leading-[1.12] mb-4">
            How We Appraise Your Timepiece: The 5 Pillars of Watch Value.
          </h2>
          <p className="text-[16px] text-[#605d52] font-[350] leading-[26px]">
            Luxury watch valuation is an exact science. We don’t rely on automated algorithmic guesswork — our appraisals are calibrated to the individual condition, completeness, and collector status of your timepiece.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criteria.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#fffefb] border border-[#c5c0b1]/60 hover:border-[#201515]/50 rounded-[14px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 shadow-xs hover:shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-[10px] bg-[#f8f4f0] border border-[#c5c0b1]/60 flex items-center justify-center text-[#201515]">
                      <Icon className="w-5 h-5 text-[#201515]" />
                    </div>
                    <span className="text-[13px] font-[600] tracking-widest text-[#939084]">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-[19px] sm:text-[21px] font-[400] text-[#201515] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[14px] text-[#605d52] font-[350] leading-[24px] mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#c5c0b1]/30">
                  <div className="text-[11px] font-[600] uppercase tracking-wider text-[#939084] mb-1">
                    Evaluation Metric
                  </div>
                  <div className="text-[12px] font-[500] text-[#201515]">
                    {item.keyCheck}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Naked Watches & Vintage Box Banner */}
          <div className="bg-[#201515] text-[#fffefb] rounded-[14px] p-6 sm:p-7 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#00da04]">
                <AlertCircle className="w-5 h-5" />
                <span className="text-[11px] font-[700] uppercase tracking-widest text-[#00da04]">
                  No Box or Papers?
                </span>
              </div>
              <h3 className="text-[20px] sm:text-[22px] font-[300] text-[#fffefb] mb-3 leading-snug">
                We Appraise "Watch Only" Timepieces with Full Confidence.
              </h3>
              <p className="text-[14px] text-[#c5c0b1] font-[350] leading-[24px]">
                Lost the original warranty card or inherited a vintage watch without its box? Our horologists conduct physical serial checks against manufacturer registers to verify authenticity and provide a fair market appraisal.
              </p>
            </div>

            <div className="pt-5 border-t border-white/10 mt-4">
              <span className="text-[12px] text-[#00da04] font-[500] flex items-center gap-1.5">
                <span>✓ 100% Verified Authentic Processing</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

