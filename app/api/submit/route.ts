import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      item,
      brand,
      model,
      condition,
      boxAndPapers,
      year,
      fullName,
      email,
      phone,
      postCode,
      additionalInformation,
    } = body;

    // Validate all mandatory fields
    const missingFields: string[] = [];
    if (!item?.trim()) missingFields.push("Item Category");
    if (!brand?.trim()) missingFields.push("Brand");
    if (!model?.trim()) missingFields.push("Model / Product Name");
    if (!condition?.trim()) missingFields.push("Item Condition");
    if (!boxAndPapers?.trim()) missingFields.push("Box and Papers Present");
    if (!year?.trim()) missingFields.push("Year");
    if (!fullName?.trim()) missingFields.push("Full Name");
    if (!email?.trim()) missingFields.push("Email Address");
    if (!phone?.trim()) missingFields.push("Phone Number");
    if (!postCode?.trim()) missingFields.push("Post Code");
    if (!additionalInformation?.trim()) missingFields.push("Additional Information");

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: `Please complete all mandatory fields: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

    // Format current London submission date
    const now = new Date();
    const formattedDate = now.toLocaleString("en-GB", {
      timeZone: "Europe/London",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const timestamp = Date.now().toString();

    // Build Jotform payload matching form 263022591448053
    const formData = new URLSearchParams();
    formData.append("formID", "263022591448053");
    formData.append("simple_spc", "263022591448053-263022591448053");
    formData.append("jsExecutionTracker", `build-date-${timestamp}`);
    formData.append("submitSource", "finacforce-luxury-web");
    formData.append("buildDate", timestamp);
    formData.append("uploadServerUrl", "https://upload.jotform.com/upload");
    formData.append("eventObserver", "1");

    // Form fields
    formData.append("q3_item", item.trim());
    formData.append("q4_typeA4", brand.trim());
    formData.append("q5_typeA5", model.trim());
    formData.append("q6_typeA6", condition.trim());
    formData.append("q16_boxAnd", boxAndPapers.trim());
    formData.append("q17_year", year.trim());
    formData.append("q10_fullName", fullName.trim());
    formData.append("q11_emailAddress", email.trim());
    formData.append("q12_phoneNumber", phone.trim());
    formData.append("q13_postCode", postCode.trim());
    formData.append("q14_additionalInformation", additionalInformation.trim());
    formData.append("q15_submissionDate", formattedDate);

    // Forward to Jotform submit endpoint
    const jotformResponse = await fetch(
      "https://submit.jotform.com/submit/263022591448053",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
        body: formData.toString(),
      }
    );

    if (!jotformResponse.ok && jotformResponse.status !== 302) {
      console.error(
        "Jotform submission failed:",
        jotformResponse.status,
        jotformResponse.statusText
      );
      return NextResponse.json(
        {
          success: false,
          error: "Submission service temporarily unavailable. Please try again.",
        },
        { status: 502 }
      );
    }

    // Generate unique client reference code
    const refId = `UK-VAL-${Math.floor(100000 + Math.random() * 900000)}`;

    return NextResponse.json({
      success: true,
      message: "Valuation request successfully submitted to appraisal desk",
      refId,
      submissionDate: formattedDate,
      data: {
        item,
        brand,
        model,
        condition,
        boxAndPapers,
        year,
        fullName,
        email,
        phone,
        postCode,
      },
    });
  } catch (err: unknown) {
    console.error("API route error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred during submission. Please try again.",
      },
      { status: 500 }
    );
  }
}
