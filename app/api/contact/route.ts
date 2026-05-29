import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, website, message } = await req.json();

    // Basic server-side validation
    if (!name || !email || !website || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY || "YOUR_API_KEY";

    // If the API Key is not configured yet, simulate successful submission for developer visual testing
    if (RESEND_API_KEY === "YOUR_API_KEY" || RESEND_API_KEY === "re_your_api_key_here" || !RESEND_API_KEY) {
      console.warn(
        "Resend API key is not configured in .env.local. Simulating a successful submission for developer testing. Please set RESEND_API_KEY in your environment to activate real emails."
      );
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return NextResponse.json({ success: true, simulated: true });
    }

    // Call Resend REST API securely
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Note: Resend's free onboarding tier allows sending from onboarding@resend.dev to your account email.
        // Once you verify your domain (e.g. promogent.com) in Resend dashboard, you can change this to: "PromoGent Site <contact@promogent.com>"
        from: "PromoGent Site <onboarding@resend.dev>",
        to: ["promogent@gmail.com"],
        subject: `New CRO Audit Request from ${website}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eeedeb; border-radius: 12px; color: #0a0a0a;">
            <h2 style="font-size: 20px; font-weight: 800; border-bottom: 2px solid #eeedeb; padding-bottom: 10px; margin-top: 0;">
              New Revenue Leak Audit Request
            </h2>
            <p style="margin: 15px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 15px 0;"><strong>Work Email:</strong> <a href="mailto:${email}" style="color: #0a0a0a; font-weight: 600;">${email}</a></p>
            <p style="margin: 15px 0;"><strong>Website URL:</strong> <a href="${website}" target="_blank" style="color: #6ea8ff; font-weight: 600; text-decoration: underline;">${website}</a></p>
            
            <p style="margin: 20px 0 10px 0; font-weight: 700;">#1 Conversion Obstacle:</p>
            <blockquote style="background: #fafaf9; border-left: 4px solid #0a0a0a; padding: 15px; border-radius: 6px; font-style: italic; margin: 0; color: #444; line-height: 1.6;">
              ${message.replace(/\n/g, "<br />")}
            </blockquote>
            
            <footer style="margin-top: 30px; border-t: 1px solid #eeedeb; padding-top: 15px; font-size: 11px; color: #666; text-align: center;">
              This inquiry was sent securely from the promogent.com contact form.
            </footer>
          </div>
        `,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const data = await response.json();
      return NextResponse.json(
        { error: data.message || "Resend failed to deliver the email." },
        { status: response.status }
      );
    }
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "An internal server error occurred." },
      { status: 500 }
    );
  }
}
