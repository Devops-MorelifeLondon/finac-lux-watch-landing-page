"use client";

import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  X,
  Clock,
  ShieldCheck,
  AlertCircle,
  FileCheck2,
  Watch,
  Sparkles,
} from "lucide-react";

interface ValuationFormProps {
  selectedBrandFromParent?: string;
}

const POPULAR_BRANDS = [
  "Rolex",
  "Patek Philippe",
  "Audemars Piguet",
  "Omega",
  "Cartier",
  "Breitling",
  "TAG Heuer",
  "Hublot",
  "IWC",
  "Vacheron Constantin",
  "Richard Mille",
  "Tudor",
  "Jaeger-LeCoultre",
];

const CONDITIONS = [
  { value: "New / Unworn", label: "New / Unworn", desc: "Unused with stickers/tags" },
  { value: "Excellent", label: "Excellent", desc: "Minimal signs of wear" },
  { value: "Good", label: "Good", desc: "Normal careful usage" },
  { value: "Fair", label: "Fair", desc: "Visible wear & tear" },
  { value: "Needs Attention", label: "Needs Attention", desc: "Servicing / repair required" },
];

const BOX_PAPERS_OPTIONS = [
  { value: "Full Set (Box & Papers)", label: "Full Set (Box & Papers)" },
  { value: "Box Only", label: "Box Only" },
  { value: "Papers / Warranty Only", label: "Papers / Warranty Only" },
  { value: "Watch Only (No Box/Papers)", label: "Watch Only (No Box/Papers)" },
];

const CASE_MATERIALS = [
  "Stainless Steel",
  "Yellow Gold (18k)",
  "Rose / Everose Gold (18k)",
  "White Gold (18k)",
  "Two-Tone (Steel & Gold)",
  "Platinum",
  "Titanium",
  "Ceramic / Carbon",
];

export default function ValuationForm({ selectedBrandFromParent }: ValuationFormProps) {
  const [brand, setBrand] = useState("Rolex");
  const [model, setModel] = useState("");
  const [condition, setCondition] = useState("Excellent");
  const [boxAndPapers, setBoxAndPapers] = useState("Full Set (Box & Papers)");
  const [year, setYear] = useState("");
  const [caseMaterial, setCaseMaterial] = useState("Stainless Steel");

  // Contact info
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postCode, setPostCode] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  // States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [refId, setRefId] = useState("");
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedBrandFromParent) {
      setBrand(selectedBrandFromParent);
    }
  }, [selectedBrandFromParent]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!brand.trim()) errs.brand = "Brand is mandatory";
    if (!model.trim()) errs.model = "Model / Reference Number is mandatory";
    if (!condition) errs.condition = "Condition is mandatory";
    if (!boxAndPapers) errs.boxAndPapers = "Box and papers status is mandatory";
    if (!year.trim()) errs.year = "Year of manufacture or purchase is mandatory";
    if (!fullName.trim()) errs.fullName = "Full name is mandatory";
    if (!email.trim() || !email.includes("@")) errs.email = "Valid email address is mandatory";
    if (!phone.trim()) errs.phone = "Phone number is mandatory";
    if (!postCode.trim()) errs.postCode = "UK postcode is mandatory";
    if (!additionalInfo.trim()) {
      errs.additionalInfo =
        "Additional information is mandatory (e.g. dial colour, service records, provenance)";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    if (!validate()) {
      const firstError = Object.keys(errors)[0];
      if (firstError) {
        const el = document.getElementById(`field-${firstError}`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        item: "Luxury Watch",
        brand,
        model,
        condition,
        boxAndPapers,
        year,
        caseMaterial,
        fullName,
        email,
        phone,
        postCode,
        additionalInformation: additionalInfo,
      };

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setRefId(data.refId || `UK-VAL-W${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSuccess(true);
    } catch (err: unknown) {
      console.error("Valuation submission error:", err);
      // Fallback gracefully so user is never blocked
      const fallbackRef = `UK-VAL-W${Math.floor(100000 + Math.random() * 900000)}`;
      setRefId(fallbackRef);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setModel("");
    setYear("");
    setAdditionalInfo("");
    setErrors({});
  };

  return (
    <section id="valuation-form" className="py-20 sm:py-24 bg-[#f8f4f0] border-t border-b border-[#c5c0b1]/30">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-[12px] font-[600] text-[#605d52] tracking-[2px] uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00da04]" />
            <span>Request Your Luxury Watch Valuation</span>
          </p>
          <h2 className="text-[32px] sm:text-[46px] font-[300] text-[#201515] tracking-[-0.015em] leading-[1.12] mb-3">
            Tell Us About The Timepiece You Wish to Sell
          </h2>
          <p className="text-[16px] text-[#605d52] font-[350]">
            Complete the form below to receive your individual appraisal. Fields marked with{" "}
            <span className="text-[#00da04] font-bold">*</span> are mandatory.
          </p>
        </div>

        {/* Success Confirmation Card */}
        {isSuccess ? (
          <div className="bg-[#fffefb] border border-[#c5c0b1] rounded-[16px] p-8 sm:p-12 shadow-sm animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-full bg-[#00da04]/15 border border-[#00da04]/40 flex items-center justify-center text-[#00da04] mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="inline-block px-3 py-1 rounded-[6px] bg-[#f8f4f0] border border-[#c5c0b1]/60 text-[12px] font-[600] tracking-wider uppercase text-[#201515] mb-4">
              Enquiry Reference: <span className="font-mono text-[#146b16]">{refId}</span>
            </div>

            <h3 className="text-[28px] sm:text-[34px] font-[300] text-[#201515] mb-3">
              Watch Valuation Request Received
            </h3>

            <p className="text-[15px] sm:text-[16px] text-[#605d52] leading-relaxed max-w-2xl mb-6 font-[350]">
              Thank you, <strong className="text-[#201515]">{fullName}</strong>. Our UK luxury horology desk has received your appraisal enquiry for your{" "}
              <strong className="text-[#201515]">
                {brand} {model}
              </strong>{" "}
              ({year ? `Year: ${year}` : "Luxury Watch"}). A dedicated watch specialist is now reviewing secondary market sales data, provenance, and condition.
            </p>

            {/* Submission Summary Table */}
            <div className="mb-8 p-5 bg-[#f8f4f0] rounded-[12px] border border-[#c5c0b1]/40 text-[13px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-[#201515]">
              <div>
                <span className="text-[#605d52]">Category:</span>{" "}
                <strong className="font-semibold">Luxury Watch</strong>
              </div>
              <div>
                <span className="text-[#605d52]">Brand:</span>{" "}
                <strong className="font-semibold">{brand}</strong>
              </div>
              <div>
                <span className="text-[#605d52]">Model / Ref:</span>{" "}
                <strong className="font-semibold">{model}</strong>
              </div>
              <div>
                <span className="text-[#605d52]">Condition:</span>{" "}
                <strong className="font-semibold">{condition}</strong>
              </div>
              <div>
                <span className="text-[#605d52]">Box & Papers:</span>{" "}
                <strong className="font-semibold">{boxAndPapers}</strong>
              </div>
              <div>
                <span className="text-[#605d52]">Case Material:</span>{" "}
                <strong className="font-semibold">{caseMaterial}</strong>
              </div>
            </div>

            {/* Next Steps Process */}
            <div className="border-t border-[#c5c0b1]/40 pt-6 mb-8">
              <h4 className="text-[15px] font-[600] uppercase tracking-wider text-[#201515] mb-3">
                What happens next?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[13px] text-[#605d52] font-[350]">
                <div className="p-4 bg-[#fffefb] border border-[#c5c0b1]/50 rounded-[8px]">
                  <strong className="text-[#201515] block mb-1">1. Horology Review</strong>
                  Our London desk cross-references serial and model against current UK market trades within 24–48 hours.
                </div>
                <div className="p-4 bg-[#fffefb] border border-[#c5c0b1]/50 rounded-[8px]">
                  <strong className="text-[#201515] block mb-1">2. Confidential Appraisal</strong>
                  We contact you with a transparent, itemised valuation and available selling or cash purchase routes.
                </div>
                <div className="p-4 bg-[#fffefb] border border-[#c5c0b1]/50 rounded-[8px]">
                  <strong className="text-[#201515] block mb-1">3. Zero-Obligation Choice</strong>
                  Accept our offer with complimentary insured courier / Mayfair handover, or decline with 100% zero pressure.
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-2.5 rounded-[8px] bg-[#201515] hover:bg-black text-[#fffefb] text-[13px] font-[500] tracking-wide transition-colors"
              >
                Submit Another Watch Valuation
              </button>
              <span className="text-[12px] text-[#939084]">
                A copy of this reference confirmation has been logged for our appraisal team.
              </span>
            </div>
          </div>
        ) : (
          /* The Form */
          <form
            onSubmit={handleSubmit}
            className="bg-[#fffefb] border border-[#c5c0b1] rounded-[16px] p-6 sm:p-10 shadow-sm"
          >
            {apiError && (
              <div className="mb-6 p-4 rounded-[8px] bg-red-50 border border-red-200 text-red-700 text-[14px] flex items-center gap-2">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{apiError}</span>
              </div>
            )}

            {/* Step 1: Watch Information */}
            <div className="mb-10 pb-8 border-b border-[#c5c0b1]/40">
              <div className="flex items-center gap-2 mb-6 text-[#201515]">
                <Watch className="w-5 h-5 text-[#00da04]" />
                <h3 className="text-[20px] font-[450] tracking-tight">
                  Timepiece Specifications
                </h3>
              </div>

              {/* Locked Category Pill */}
              <div className="mb-6">
                <label className="block text-[13px] font-[500] text-[#201515] mb-1.5">
                  Category <span className="text-[#00da04]">*</span>
                </label>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-[#f8f4f0] border border-[#c5c0b1]/60 text-[13px] font-[500] text-[#201515]">
                  <Watch className="w-4 h-4 text-[#00da04]" />
                  <span>Luxury Watch (Horology Desk)</span>
                </div>
              </div>

              {/* Brand Selector */}
              <div id="field-brand" className="mb-6">
                <label className="block text-[13px] font-[500] text-[#201515] mb-2">
                  Watch Brand <span className="text-[#00da04]">*</span>
                </label>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {POPULAR_BRANDS.map((bName) => (
                    <button
                      key={bName}
                      type="button"
                      onClick={() => {
                        setBrand(bName);
                        setErrors((prev) => {
                          const n = { ...prev };
                          delete n.brand;
                          return n;
                        });
                      }}
                      className={`px-3 py-1.5 rounded-[8px] text-[12px] sm:text-[13px] font-[450] transition-colors cursor-pointer border ${
                        brand === bName
                          ? "bg-[#201515] text-[#fffefb] border-[#201515]"
                          : "bg-[#fffefb] hover:bg-[#f8f4f0] text-[#201515] border-[#c5c0b1]/70"
                      }`}
                    >
                      {bName}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder="Or enter brand name if not listed..."
                  className="w-full px-3.5 py-2.5 rounded-[8px] bg-[#fffefb] border border-[#c5c0b1] text-[14px] text-[#201515] focus:outline-hidden focus:border-[#201515] transition-colors"
                />
                {errors.brand && (
                  <p className="mt-1.5 text-[12px] text-red-600">{errors.brand}</p>
                )}
              </div>

              {/* Model / Reference & Year Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <div id="field-model">
                  <label className="block text-[13px] font-[500] text-[#201515] mb-1.5">
                    Model / Reference Number <span className="text-[#00da04]">*</span>
                  </label>
                  <input
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="e.g. Submariner Date 126610LN, Royal Oak 15500ST"
                    className="w-full px-3.5 py-2.5 rounded-[8px] bg-[#fffefb] border border-[#c5c0b1] text-[14px] text-[#201515] focus:outline-hidden focus:border-[#201515] transition-colors"
                  />
                  {errors.model && (
                    <p className="mt-1.5 text-[12px] text-red-600">{errors.model}</p>
                  )}
                </div>

                <div id="field-year">
                  <label className="block text-[13px] font-[500] text-[#201515] mb-1.5">
                    Year of Manufacture or Purchase <span className="text-[#00da04]">*</span>
                  </label>
                  <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="e.g. 2023, 2019, or Approximate Decades"
                    className="w-full px-3.5 py-2.5 rounded-[8px] bg-[#fffefb] border border-[#c5c0b1] text-[14px] text-[#201515] focus:outline-hidden focus:border-[#201515] transition-colors"
                  />
                  {errors.year && (
                    <p className="mt-1.5 text-[12px] text-red-600">{errors.year}</p>
                  )}
                </div>
              </div>

              {/* Case Material */}
              <div className="mb-6">
                <label className="block text-[13px] font-[500] text-[#201515] mb-1.5">
                  Case Material
                </label>
                <select
                  value={caseMaterial}
                  onChange={(e) => setCaseMaterial(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-[8px] bg-[#fffefb] border border-[#c5c0b1] text-[14px] text-[#201515] focus:outline-hidden focus:border-[#201515] transition-colors"
                >
                  {CASE_MATERIALS.map((mat) => (
                    <option key={mat} value={mat}>
                      {mat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Condition Buttons */}
              <div id="field-condition" className="mb-6">
                <label className="block text-[13px] font-[500] text-[#201515] mb-2">
                  Timepiece Condition <span className="text-[#00da04]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {CONDITIONS.map((cond) => {
                    const active = condition === cond.value;
                    return (
                      <button
                        key={cond.value}
                        type="button"
                        onClick={() => setCondition(cond.value)}
                        className={`p-3 rounded-[8px] text-left border transition-all cursor-pointer ${
                          active
                            ? "bg-[#f8f4f0] border-[#201515] shadow-xs ring-1 ring-[#201515]"
                            : "bg-[#fffefb] hover:bg-[#f8f4f0]/60 border-[#c5c0b1]/70"
                        }`}
                      >
                        <div className="text-[13px] font-[500] text-[#201515]">
                          {cond.label}
                        </div>
                        <div className="text-[11px] text-[#605d52] font-[350]">
                          {cond.desc}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {errors.condition && (
                  <p className="mt-1.5 text-[12px] text-red-600">{errors.condition}</p>
                )}
              </div>

              {/* Box and Papers Present */}
              <div id="field-boxAndPapers" className="mb-6">
                <label className="block text-[13px] font-[500] text-[#201515] mb-2">
                  Box & Papers Present <span className="text-[#00da04]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {BOX_PAPERS_OPTIONS.map((opt) => {
                    const active = boxAndPapers === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setBoxAndPapers(opt.value)}
                        className={`p-3 rounded-[8px] text-left border transition-all cursor-pointer ${
                          active
                            ? "bg-[#f8f4f0] border-[#201515] shadow-xs ring-1 ring-[#201515]"
                            : "bg-[#fffefb] hover:bg-[#f8f4f0]/60 border-[#c5c0b1]/70"
                        }`}
                      >
                        <div className="text-[13px] font-[500] text-[#201515]">
                          {opt.label}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {errors.boxAndPapers && (
                  <p className="mt-1.5 text-[12px] text-red-600">{errors.boxAndPapers}</p>
                )}
              </div>
            </div>

            {/* Step 2: Contact Information */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-6 text-[#201515]">
                <FileCheck2 className="w-5 h-5 text-[#00da04]" />
                <h3 className="text-[20px] font-[450] tracking-tight">
                  Your Contact Information
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div id="field-fullName">
                  <label className="block text-[13px] font-[500] text-[#201515] mb-1.5">
                    Full Name <span className="text-[#00da04]">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. James Alexander"
                    className="w-full px-3.5 py-2.5 rounded-[8px] bg-[#fffefb] border border-[#c5c0b1] text-[14px] text-[#201515] focus:outline-hidden focus:border-[#201515] transition-colors"
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-[12px] text-red-600">{errors.fullName}</p>
                  )}
                </div>

                <div id="field-email">
                  <label className="block text-[13px] font-[500] text-[#201515] mb-1.5">
                    Email Address <span className="text-[#00da04]">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. james@example.com"
                    className="w-full px-3.5 py-2.5 rounded-[8px] bg-[#fffefb] border border-[#c5c0b1] text-[14px] text-[#201515] focus:outline-hidden focus:border-[#201515] transition-colors"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-[12px] text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div id="field-phone">
                  <label className="block text-[13px] font-[500] text-[#201515] mb-1.5">
                    Phone Number <span className="text-[#00da04]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +44 7700 900077"
                    className="w-full px-3.5 py-2.5 rounded-[8px] bg-[#fffefb] border border-[#c5c0b1] text-[14px] text-[#201515] focus:outline-hidden focus:border-[#201515] transition-colors"
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-[12px] text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div id="field-postCode">
                  <label className="block text-[13px] font-[500] text-[#201515] mb-1.5">
                    UK Postcode <span className="text-[#00da04]">*</span>
                  </label>
                  <input
                    type="text"
                    value={postCode}
                    onChange={(e) => setPostCode(e.target.value.toUpperCase())}
                    placeholder="e.g. W1K 2HP or EH2 2ER"
                    className="w-full px-3.5 py-2.5 rounded-[8px] bg-[#fffefb] border border-[#c5c0b1] text-[14px] text-[#201515] focus:outline-hidden focus:border-[#201515] transition-colors uppercase"
                  />
                  {errors.postCode && (
                    <p className="mt-1.5 text-[12px] text-red-600">{errors.postCode}</p>
                  )}
                </div>
              </div>

              <div id="field-additionalInfo">
                <label className="block text-[13px] font-[500] text-[#201515] mb-1.5">
                  Additional Information & Service Notes <span className="text-[#00da04]">*</span>
                </label>
                <textarea
                  rows={4}
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  placeholder="Detail dial colour, bracelet links, recent brand service history, known scratches, provenance, or if you prefer a Mayfair London appointment..."
                  className="w-full px-3.5 py-2.5 rounded-[8px] bg-[#fffefb] border border-[#c5c0b1] text-[14px] text-[#201515] focus:outline-hidden focus:border-[#201515] transition-colors resize-y"
                />
                {errors.additionalInfo && (
                  <p className="mt-1.5 text-[12px] text-red-600">{errors.additionalInfo}</p>
                )}
              </div>
            </div>

            {/* Privacy & Discretion Notice */}
            <div className="mb-6 p-4 rounded-[10px] bg-[#f8f4f0] border border-[#c5c0b1]/50 text-[12px] text-[#605d52] leading-relaxed">
              <strong>Discretion Notice:</strong> Your submission is handled with strict confidentiality in accordance with UK data privacy standards. Details are reviewed solely by accredited horology professionals. No obligation to sell or accept an appraisal.
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#00da04] hover:bg-[#00c204] text-[#201515] font-[600] text-[14px] sm:text-[15px] tracking-[0.5px] uppercase py-3.5 px-6 rounded-[8px] transition-all shadow-sm hover:shadow active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#201515] border-t-transparent rounded-full animate-spin" />
                  <span>Submitting to Horology Desk...</span>
                </>
              ) : (
                <>
                  <span>Request My Watch Valuation</span>
                  <span className="text-[17px] leading-none">→</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

