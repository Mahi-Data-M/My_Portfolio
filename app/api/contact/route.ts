import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/* ── Types ──────────────────────────────────────────────────────────────── */
interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/* ── Email validator ────────────────────────────────────────────────────── */
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/* ── POST /api/contact ──────────────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  /* Parse body */
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = body;

  /* ── Validation ───────────────────────────────────────────────────────── */
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 422 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 422 }
    );
  }

  if (name.trim().length > 100) {
    return NextResponse.json(
      { error: "Name is too long." },
      { status: 422 }
    );
  }

  if (message.trim().length > 5000) {
    return NextResponse.json(
      { error: "Message is too long (max 5000 characters)." },
      { status: 422 }
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (!toEmail) {
    console.error("CONTACT_TO_EMAIL env variable is not set.");
    return NextResponse.json(
      { error: "Server configuration error. Please try again later." },
      { status: 500 }
    );
  }

  /* ── Send via Resend ──────────────────────────────────────────────────── */
  try {
    const { error } = await resend.emails.send({
      /*
       * FROM: Must be a verified domain in your Resend account.
       * During development you can use: onboarding@resend.dev
       * For production, add your domain at https://resend.com/domains
       * and change this to e.g. "Portfolio Contact <contact@yourdomain.com>"
       */
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: `${name.trim()} <${email.trim()}>`,
      subject: `[Portfolio] ${subject.trim()}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9fafb; border-radius: 12px;">
          <h2 style="margin: 0 0 24px; color: #111827; font-size: 20px; font-weight: 700;">
            New Portfolio Contact Message
          </h2>

          <table style="width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.08);">
            <tr>
              <td style="padding: 12px 16px; background: #f3f4f6; font-weight: 600; color: #374151; width: 100px; font-size: 13px;">Name</td>
              <td style="padding: 12px 16px; color: #111827; font-size: 14px;">${escapeHtml(name.trim())}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; background: #f3f4f6; font-weight: 600; color: #374151; font-size: 13px;">Email</td>
              <td style="padding: 12px 16px; font-size: 14px;">
                <a href="mailto:${escapeHtml(email.trim())}" style="color: #0ea5e9; text-decoration: none;">${escapeHtml(email.trim())}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; background: #f3f4f6; font-weight: 600; color: #374151; font-size: 13px;">Subject</td>
              <td style="padding: 12px 16px; color: #111827; font-size: 14px;">${escapeHtml(subject.trim())}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; background: #f3f4f6; font-weight: 600; color: #374151; vertical-align: top; font-size: 13px;">Message</td>
              <td style="padding: 12px 16px; color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message.trim())}</td>
            </tr>
          </table>

          <p style="margin: 20px 0 0; font-size: 12px; color: #9ca3af; text-align: center;">
            Sent from your portfolio contact form · Reply directly to respond to ${escapeHtml(name.trim())}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

/* ── XSS-safe HTML escaping ─────────────────────────────────────────────── */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
