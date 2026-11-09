"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WatchBrands from "@/components/WatchBrands";
import ValuationCriteria from "@/components/ValuationCriteria";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import ValuationForm from "@/components/ValuationForm";
import WatchFAQ from "@/components/WatchFAQ";
import CTASection from "@/components/CTASection";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState<string>("Rolex");

  const handleBrandSelect = (brandName: string) => {
    setSelectedBrand(brandName);
    const formElement = document.getElementById("valuation-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fffefb] text-[#201515] selection:bg-[#00da04] selection:text-black">
      <Navbar onSelectBrand={handleBrandSelect} />
      <main className="flex-1">
        <Hero onQuickSelectBrand={handleBrandSelect} />
        <WatchBrands onSelectBrand={handleBrandSelect} />
        <ValuationCriteria />
        <HowItWorks />
        <WhyChooseUs />
        <ValuationForm selectedBrandFromParent={selectedBrand} />
        <WatchFAQ />
        <CTASection />
      </main>
      <FloatingCTA />
      <Footer />
    </div>
  );
}
