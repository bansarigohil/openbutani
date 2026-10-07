import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const quoteRequestSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  country: z.string().min(2),
  product: z.string().min(2),
  quantity: z.string().min(1),
  unit: z.string().min(1),
  specification: z.string().min(2),
  application: z.string().min(2),
  destination: z.string().min(2),
  incoterm: z.string().min(1),
  message: z.string().min(10).max(3000),
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

    const result = quoteRequestSchema.safeParse(body);

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

    const quoteRequest = result.data;

    await transporter.sendMail({
      from: `"OpenButani Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: quoteRequest.email,
      subject: `New Quote Request: ${quoteRequest.product}`,
      text: `
New OpenButani Quote Request

Name: ${quoteRequest.name}
Company: ${quoteRequest.company}
Email: ${quoteRequest.email}
Phone: ${quoteRequest.phone}
Country: ${quoteRequest.country}

Product: ${quoteRequest.product}
Quantity: ${quoteRequest.quantity}
Unit: ${quoteRequest.unit}
Specification: ${quoteRequest.specification}
Application: ${quoteRequest.application}
Destination: ${quoteRequest.destination}
Incoterm: ${quoteRequest.incoterm}

Message:
${quoteRequest.message}
      `,
    });

    console.log(
      "OpenButani quote request email sent successfully."
    );

    return NextResponse.json(
      {
        success: true,
        message: "Quote request received successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Quote request email error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while sending your quote request. Please try again.",
      },
      { status: 500 }
    );
  }
}