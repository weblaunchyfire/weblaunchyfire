import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req) {
  try {
    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    // Validate fields
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: "Missing required fields for signature verification" },
        { status: 400 }
      );
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret || keySecret.trim() === "") {
      return NextResponse.json(
        { error: "Razorpay secret key is not configured on the server." },
        { status: 500 }
      );
    }

    // Generate local signature
    const hmac = crypto.createHmac("sha256", keySecret);
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const generatedSignature = hmac.digest("hex");

    // Compare signatures
    if (generatedSignature === razorpay_signature) {
      return NextResponse.json({
        success: true,
        message: "Payment signature verified successfully"
      });
    } else {
      console.warn("Signature mismatch. Payment verification failed.");
      return NextResponse.json(
        { error: "Signature mismatch. Invalid transaction signature." },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Razorpay signature verification API error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to verify payment signature" },
      { status: 500 }
    );
  }
}
