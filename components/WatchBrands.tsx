"use client";

import React from "react";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

interface WatchBrandsProps {
  onSelectBrand: (brandName: string) => void;
}

export default function WatchBrands({ onSelectBrand }: WatchBrandsProps) {
  const brands = [
    {
      name: "Rolex",
      tagline: "Geneva, Switzerland • The Benchmark of Prestige",
      badge: "High UK Demand",
      description:
        "Whether you own a modern ceramic Submariner, an iconic Daytona chronograph, a GMT-Master II, or an heirloom Day-Date, our horologists evaluate market demand across all references.",
      popularModels: [
        "Submariner Date (126610LN / 116610LV)",
        "Cosmograph Daytona (116500LN / 126500LN)",
        "GMT-Master II (126710BLRO Pepsi / BLNR)",
        "Datejust 41 & 36 Fluted",
        "Day-Date 40 President (18k / Platinum)",
      ],
      keyFactors: [
        "Ceramic & aluminum bezel integrity",
        "Original warranty card & green seal tags",
        "Oyster / Jubilee bracelet stretch assessment",
      ],
    },
    {
      name: "Patek Philippe",
      tagline: "Geneva, Switzerland • The Pinnacle of Haute Horlogerie",
      badge: "Collector & Auction Grade",
      description:
        "From the steel Nautilus and sports Aquanaut to historic Calatrava dress timepieces and high complications, we evaluate Patek Philippe with the utmost discretion and market depth.",
      popularModels: [
        "Nautilus 5711/1A, 5712, 5980",
        "Aquanaut 5167A & 5168G",
        "Calatrava 5227, 5196 & 6119",
        "Annual Calendar Chronograph 5905",
        "World Time & Perpetual Calendars",
      ],
      keyFactors: [
        "Original Certificate of Origin or Archive Extract",
        "Original mahogany display box & pusher pins",
        "Unpolished case bevels & hallmarks clarity",
      ],
    },
    {
      name: "Audemars Piguet",
      tagline: "Le Brassus, Switzerland • Modern Horological Mastery",
      badge: "High Secondary Demand",
      description:
        "The Gérald Genta-designed Royal Oak and Royal Oak Offshore represent iconic icons of luxury sports horology. We appraise boutique editions, steel classics, and precious metals.",
      popularModels: [
        "Royal Oak 15500ST & 15510ST (41mm)",
        "Royal Oak 'Jumbo' Extra-Thin 15202 / 16202",
        "Royal Oak Offshore Chronograph (42mm/44mm)",
        "Royal Oak Chronograph 26331ST",
        "Code 11.59 Selfwinding & Chrono",
      ],
      keyFactors: [
        "Tapisserie dial texture & hand alignment",
        "Satin-brushed integrated bracelet geometry",
        "Audemars Piguet international warranty booklet",
      ],
    },
    {
      name: "Omega",
      tagline: "Biel/Bienne, Switzerland • Master Chronometer Heritage",
      badge: "Strong Market Movement",
      description:
        "From the moon-landing Speedmaster Professional to James Bond's Seamaster Diver 300M, Omega timepieces maintain robust resale interest across the United Kingdom.",
      popularModels: [
        "Speedmaster Professional 'Moonwatch' (Hesalite / Sapphire)",
        "Seamaster Diver 300M Co-Axial Master Chronometer",
        "Seamaster Planet Ocean 600M",
        "Speedmaster 'Silver Snoopy Award' 50th",
        "Aqua Terra 150M & Dark Side of the Moon",
      ],
      keyFactors: [
        "METAS Master Chronometer certification cards",
        "Co-Axial movement amplitude & timing report",
        "Original wooden/presentation box set",
      ],
    },
    {
      name: "Cartier",
      tagline: "Paris, France • The Shape of Timeless Elegance",
      badge: "Surging Secondary Demand",
      description:
        "Cartier watches combine timeless Parisian design with Swiss horological precision. We regularly appraise stainless steel, two-tone, and solid 18k gold references.",
      popularModels: [
        "Santos de Cartier (Large & Medium)",
        "Tank Must & Tank Louis Cartier",
        "Ballon Bleu de Cartier (33mm, 36mm, 42mm)",
        "Panthère de Cartier (Yellow / Rose Gold)",
        "Santos-Dumont & Tank Française",
      ],
      keyFactors: [
        "Cabochon blue spinel / sapphire crown condition",
        "Original red presentation box & paperwork",
        "SmartLink bracelet links or deployant leather strap",
      ],
    },
    {
      name: "Haute Horlogerie & Independent Watchmakers",
      tagline: "Vacheron Constantin, Richard Mille, IWC, Breitling, Tudor & More",
      badge: "Specialist Appraisal",
      description:
        "Our horologists regularly evaluate fine pieces from the 'Holy Trinity', German masters like A. Lange & Söhne, avant-garde Richard Mille, and precision tool watches from Breitling, IWC and Tudor.",
      popularModels: [
        "Vacheron Constantin Overseas (4500V / 5500V)",
        "Richard Mille RM 011, RM 035, RM 67-01",
        "IWC Big Pilot & Portugieser Chronograph",
        "Breitling Navitimer B01 & Chronomat",
        "Tudor Black Bay 58, 54 & Pelagos",
      ],
      keyFactors: [
        "High-horology complications & service history",
        "Geneva Hallmark (Poinçon de Genève) integrity",
        "Titanium, ceramic, forged carbon & precious metals",
      ],
    },
  ];

  return (
    <section id="brands" className="py-20 sm:py-24 bg-[#fffefb]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00da04]" />
            <p className="text-[12px] font-[600] text-[#605d52] tracking-[2px] uppercase">
              Evaluated Watchmakers
            </p>
          </div>
          <h2 className="text-[32px] sm:text-[46px] font-[300] text-[#201515] tracking-[-0.015em] leading-[1.12] mb-4">
            Specialised Appraisal Desks for the World’s Leading Horological Houses.
          </h2>
          <p className="text-[16px] text-[#605d52] font-[350] leading-[26px]">
            Every timepiece is evaluated by dedicated UK horology specialists with deep knowledge of collector demand, secondary market trade indices, and verified component authenticity.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="bg-[#f8f4f0]/60 hover:bg-[#fffefb] border border-[#c5c0b1]/60 hover:border-[#201515]/60 rounded-[14px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group shadow-xs hover:shadow-md"
            >
              <div>
                {/* Brand Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-[24px] sm:text-[26px] font-[400] text-[#201515] tracking-[-0.01em]">
                      {brand.name}
                    </h3>
                    <p className="text-[12px] text-[#605d52] font-[350] mt-0.5">
                      {brand.tagline}
                    </p>
                  </div>
                  <span className="shrink-0 text-[10px] sm:text-[11px] font-[600] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#fffefb] border border-[#c5c0b1]/70 text-[#201515] group-hover:bg-[#00da04]/10 group-hover:border-[#00da04]/40 group-hover:text-[#146b16] transition-colors">
                    {brand.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[14px] text-[#605d52] font-[350] leading-[23px] mb-5">
                  {brand.description}
                </p>

                {/* Popular Models */}
                <div className="mb-5 pb-5 border-b border-[#c5c0b1]/40">
                  <div className="text-[11px] font-[600] uppercase tracking-[1.5px] text-[#605d52] mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#00da04]" />
                    <span>Key Evaluated References</span>
                  </div>
                  <ul className="space-y-1.5">
                    {brand.popularModels.map((model, mIdx) => (
                      <li
                        key={mIdx}
                        className="text-[13px] text-[#201515] font-[400] flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5c0b1] group-hover:bg-[#00da04] transition-colors" />
                        <span>{model}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Appraisal Factors */}
                <div className="mb-6">
                  <div className="text-[11px] font-[600] uppercase tracking-[1.5px] text-[#605d52] mb-2">
                    Appraisal Factors
                  </div>
                  <ul className="space-y-1">
                    {brand.keyFactors.map((factor, fIdx) => (
                      <li
                        key={fIdx}
                        className="text-[12px] text-[#605d52] font-[350] flex items-start gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00da04] shrink-0 mt-0.5" />
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onSelectBrand(brand.name.includes("&") ? "Vacheron Constantin" : brand.name)}
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-[8px] bg-[#fffefb] hover:bg-[#201515] text-[#201515] hover:text-[#fffefb] border border-[#c5c0b1] hover:border-[#201515] text-[13px] font-[500] tracking-wide transition-all cursor-pointer group/btn"
              >
                <span>Value My {brand.name.split(" ")[0]} Timepiece</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Other Brands Pill Row */}
        <div className="mt-12 p-6 rounded-[12px] bg-[#f8f4f0] border border-[#c5c0b1]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-[16px] font-[500] text-[#201515]">
              Own a brand not listed above?
            </h4>
            <p className="text-[13px] text-[#605d52] font-[350]">
              We also appraise Blancpain, Glashütte Original, Panerai, Zenith, Girard-Perregaux, Chopard, Franck Muller, and vintage military timepieces.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectBrand("Other Luxury Watch")}
            className="shrink-0 bg-[#00da04] hover:bg-[#00c204] text-[#201515] text-[13px] font-[600] uppercase tracking-wide px-5 py-2.5 rounded-[8px] transition-colors"
          >
            Enquire About Any Watch
          </button>
        </div>
      </div>
    </section>
  );
}

