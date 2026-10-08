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
    /*
     * Read the request as FormData instead of JSON.
     * This allows us to receive the uploaded document.
     */
    const formData = await request.formData();

    const body = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      country: String(formData.get("country") ?? ""),
      product: String(formData.get("product") ?? ""),
      quantity: String(formData.get("quantity") ?? ""),
      unit: String(formData.get("unit") ?? ""),
      specification: String(
        formData.get("specification") ?? ""
      ),
      application: String(
        formData.get("application") ?? ""
      ),
      destination: String(
        formData.get("destination") ?? ""
      ),
      incoterm: String(formData.get("incoterm") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

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

    /*
     * Get the uploaded document, if one was selected.
     */
    const uploadedFile = formData.get("document");

    let attachment:
      | {
          filename: string;
          content: Buffer;
          contentType?: string;
        }
      | undefined;

    if (
      uploadedFile instanceof File &&
      uploadedFile.size > 0
    ) {
      /*
       * Safety limit: 10 MB per uploaded file.
       */
      const MAX_FILE_SIZE = 10 * 1024 * 1024;

      if (uploadedFile.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          {
            success: false,
            message:
              "The uploaded file is too large. Please upload a file smaller than 10 MB.",
          },
          { status: 400 }
        );
      }

      const allowedFileTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "text/csv",
        "image/jpeg",
        "image/png",
      ];

      if (
        uploadedFile.type &&
        !allowedFileTypes.includes(uploadedFile.type)
      ) {
        return NextResponse.json(
          {
            success: false,
            message:
              "This file type is not supported. Please upload a PDF, DOC, DOCX, XLS, XLSX, CSV, JPG, or PNG file.",
          },
          { status: 400 }
        );
      }

      const fileBuffer = Buffer.from(
        await uploadedFile.arrayBuffer()
      );

      attachment = {
        filename: uploadedFile.name,
        content: fileBuffer,
        contentType:
          uploadedFile.type || "application/octet-stream",
      };
    }

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

      /*
       * Attach the customer's document when provided.
       */
      ...(attachment
        ? {
            attachments: [attachment],
          }
        : {}),
    });

    console.log(
      "OpenButani quote request email sent successfully."
    );

    if (attachment) {
      console.log(
        `Quote request attachment received: ${attachment.filename}`
      );
    }

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