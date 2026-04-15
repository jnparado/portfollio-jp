import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function isConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.CONTACT_TO_EMAIL,
  );
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as ContactBody | null;

  const name = body?.name?.trim() ?? "";
  const email = body?.email?.trim() ?? "";
  const phone = body?.phone?.trim() ?? "";
  const message = body?.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 },
    );
  }

  if (!isConfigured()) {
    // Keep the UI "working" even without SMTP configured.
    return NextResponse.json({
      ok: true,
      delivered: false,
      message:
        "Message captured, but email sending is not configured. Please set SMTP env vars.",
    });
  }

  const port = Number(process.env.SMTP_PORT);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const to = process.env.CONTACT_TO_EMAIL as string;
  const from = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER || to;

  const subject = `Portfolio contact: ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  await transporter.sendMail({
    to,
    from,
    replyTo: email,
    subject,
    text,
  });

  return NextResponse.json({ ok: true, delivered: true });
}

