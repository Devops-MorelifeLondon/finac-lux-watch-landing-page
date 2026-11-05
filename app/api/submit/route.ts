import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      brand,
      model,
      condition,
      boxAndPapers,
      fullName,
      email,
      phone,
      postCode,
    } = data;

    // Validate required fields
    if (!brand || !model || !condition || !boxAndPapers || !fullName || !email || !phone || !postCode) {
      return NextResponse.json(
        {
          success: false,
          error: "Please complete all required fields marked with an asterisk (*).",
        },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    // Generate reference code
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const refId = `UK-VAL-W${randomSuffix}`;

    // Log the submission for records
    console.log("[Finacforce Luxury Horology] Valuation Request Received:", {
      refId,
      timestamp: new Date().toISOString(),
      watch: {
        brand: data.brand,
        model: data.model,
        condition: data.condition,
        boxAndPapers: data.boxAndPapers,
        year: data.year,
        caseMaterial: data.caseMaterial,
        additionalInfo: data.additionalInformation,
        photosCount: data.photosCount || 0,
      },
      contact: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        postCode: data.postCode,
      },
    });

    return NextResponse.json({
      success: true,
      refId,
      message: "Valuation request successfully received by the Finacforce Horology Desk.",
    });
  } catch (err: unknown) {
    console.error("[Finacforce Valuation API Error]:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please try again.",
      },
      { status: 500 }
    );
  }
}

