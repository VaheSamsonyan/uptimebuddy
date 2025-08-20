import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import Welcome from "@/emails/welcome";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { to } = body;

    if (!to || typeof to !== "string" || !to.includes("@")) {
      return NextResponse.json(
        { message: "Invalid or missing 'to' email address" },
        { status: 400 },
      );
    }

    const info = await transporter.sendMail({
      from: `"UptimeBuddy" <${process.env.GMAIL_USER}>`,
      to,
      subject: "UptimeBuddy",
      text: "Welcome to UptimeBuddy!",
      html: await render(Welcome()),
      replyTo: process.env.GMAIL_USER,
    });

    const teamEmailInfo = await transporter.sendMail({
      from: `"UptimeBuddy" <${process.env.GMAIL_USER}>`,
      to: "uptimebuddyteam@gmail.com",
      subject: "New signup/request received",
      text: `A new user signed up: ${to}`,
      html: `<p>A new user signed up: <strong>${to}</strong></p>`,
      replyTo: process.env.GMAIL_USER,
    });

    return NextResponse.json(
      { message: "Email sent to user and team", info, teamEmailInfo },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      {
        message: "Error sending email",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
