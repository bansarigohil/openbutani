import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactRequestSchema = z.object({
  name: z.string().min(2, "Name is required."),
  company: z.string().min(2, "Company name is required."),
  email: z.string().email("Please enter a valid email address."),
  country: z.string().min(2, "Country is required."),
  subject: z.string().min(2, "Subject is required."),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(3000, "Message is too long."),
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = contactRequestSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the submitted information.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const contactRequest = result.data;

    await transporter.sendMail({
      from: `"OpenButani Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: contactRequest.email,
      subject: `New Contact Enquiry: ${contactRequest.subject}`,
      text: `
New OpenButani Contact Enquiry

Name: ${contactRequest.name}
Company: ${contactRequest.company}
Email: ${contactRequest.email}
Country: ${contactRequest.country}
Subject: ${contactRequest.subject}

Message:
${contactRequest.message}
      `,
    });

    console.log(
      "OpenButani contact enquiry email sent successfully."
    );

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been received successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact enquiry email error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while sending your enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}