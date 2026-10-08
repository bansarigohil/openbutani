"use client";

import Header from "@/components/Header";

import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Globe2,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const requirements = [
  "Product name or product family",
  "Required quantity and unit",
  "Grade or technical specification",
  "Application or intended use",
  "Destination country or location",
  "Preferred Incoterm, if known",
];

const requestQuoteSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),

  company: z.string().min(2, "Please enter your company name."),

  email: z
    .string()
    .min(1, "Please enter your business email.")
    .email("Please enter a valid business email."),

  phone: z.string().min(6, "Please enter a valid phone number."),

  country: z.string().min(2, "Please enter your country."),

  product: z.string().min(2, "Please enter the product you require."),

  quantity: z.string().min(1, "Please enter the required quantity."),

  unit: z.string().min(1, "Please select a unit."),

  specification: z
    .string()
    .min(2, "Please provide the grade or specification."),

  application: z
    .string()
    .min(2, "Please describe the application."),

  destination: z.string().min(2, "Please enter the destination."),

  incoterm: z
    .string()
    .min(1, "Please select an Incoterm or choose 'Not sure'."),

  message: z
    .string()
    .min(10, "Please provide a little more information.")
    .max(3000, "Message must be 3000 characters or less."),

  document: z.any().optional(),
});

type RequestQuoteFormData = z.infer<typeof requestQuoteSchema>;

export default function RequestAQuotePage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
      isSubmitSuccessful,
    },
  } = useForm<RequestQuoteFormData>({
    resolver: zodResolver(requestQuoteSchema),
    mode: "onBlur",

    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      product: "",
      quantity: "",
      unit: "",
      specification: "",
      application: "",
      destination: "",
      incoterm: "",
      message: "",
    },
  });

  const onSubmit = async (data: RequestQuoteFormData) => {
    try {
      /*
       * Create FormData so the form can send
       * both normal fields and the uploaded document.
       */
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("company", data.company);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("country", data.country);
      formData.append("product", data.product);
      formData.append("quantity", data.quantity);
      formData.append("unit", data.unit);
      formData.append("specification", data.specification);
      formData.append("application", data.application);
      formData.append("destination", data.destination);
      formData.append("incoterm", data.incoterm);
      formData.append("message", data.message);

      /*
       * Add the uploaded document only when
       * the user has selected a file.
       */
      const documentFile = data.document?.[0];

      if (documentFile) {
        formData.append("document", documentFile);
      }

      /*
       * Do NOT manually set Content-Type.
       * The browser automatically creates the correct
       * multipart/form-data boundary for FormData.
       */
      const response = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to submit your request."
        );
      }

      console.log("Quote request submitted:", result);

      reset();
    } catch (error) {
      console.error(
        "Quote request submission failed:",
        error
      );
    }
  };

  return (
    <main className="request-quote-page">
      {/* SHARED HEADER */}
      <Header />

      {/* HERO */}
      <section className="request-quote-hero">
        <div className="request-quote-container">
          <p className="section-eyebrow">REQUEST A QUOTE</p>

          <h1>
            Tell us what
            <br />
            you need.
          </h1>

          <p className="request-quote-hero-description">
            Share your product and supply requirements with
            OpenButani. Our team can review your requirement
            and assess suitable international sourcing and
            trading opportunities.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="request-quote-form-section">
        <div className="request-quote-container request-quote-form-grid">
          {/* LEFT INFORMATION */}
          <aside className="request-quote-info">
            <p className="section-eyebrow">
              YOUR REQUIREMENT
            </p>

            <h2>
              The more detail
              <br />
              you provide, the better.
            </h2>

            <p className="request-quote-info-intro">
              Product specifications, quantity, application
              and destination information can help us better
              understand your requirement.
            </p>

            <div className="request-quote-info-list">
              {requirements.map((requirement) => (
                <div
                  className="request-quote-info-item"
                  key={requirement}
                >
                  <CheckCircle2
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <span>{requirement}</span>
                </div>
              ))}
            </div>

            <div className="request-quote-trust">
              <div className="request-quote-trust-icon">
                <ShieldCheck
                  size={22}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <div>
                <strong>
                  Requirement-focused approach
                </strong>

                <p>
                  We review the information you provide to
                  understand the sourcing or supply
                  requirement.
                </p>
              </div>
            </div>
          </aside>

          {/* FORM CARD */}
          <div className="request-quote-form-card">
            <div className="request-quote-form-heading">
              <div>
                <p className="section-eyebrow">
                  QUOTE REQUEST
                </p>

                <h2>Submit your requirement</h2>
              </div>

              <FileText
                size={30}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>

            <form
              className="request-quote-form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              {/* SECTION 01 */}
              <div className="request-quote-form-section-title">
                <span>01</span>
                <h3>Contact Information</h3>
              </div>

              <div className="request-quote-form-row">
                <div className="request-quote-field">
                  <label htmlFor="name">
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name
                        ? "name-error"
                        : undefined
                    }
                    {...register("name")}
                  />

                  {errors.name && (
                    <span
                      id="name-error"
                      className="request-quote-error"
                    >
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="request-quote-field">
                  <label htmlFor="company">
                    Company
                  </label>

                  <input
                    id="company"
                    type="text"
                    placeholder="Company name"
                    autoComplete="organization"
                    aria-invalid={Boolean(
                      errors.company
                    )}
                    aria-describedby={
                      errors.company
                        ? "company-error"
                        : undefined
                    }
                    {...register("company")}
                  />

                  {errors.company && (
                    <span
                      id="company-error"
                      className="request-quote-error"
                    >
                      {errors.company.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="request-quote-form-row">
                <div className="request-quote-field">
                  <label htmlFor="email">
                    Business Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    autoComplete="email"
                    aria-invalid={Boolean(
                      errors.email
                    )}
                    aria-describedby={
                      errors.email
                        ? "email-error"
                        : undefined
                    }
                    {...register("email")}
                  />

                  {errors.email && (
                    <span
                      id="email-error"
                      className="request-quote-error"
                    >
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="request-quote-field">
                  <label htmlFor="phone">
                    Phone
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="+00 000 000 000"
                    autoComplete="tel"
                    aria-invalid={Boolean(
                      errors.phone
                    )}
                    aria-describedby={
                      errors.phone
                        ? "phone-error"
                        : undefined
                    }
                    {...register("phone")}
                  />

                  {errors.phone && (
                    <span
                      id="phone-error"
                      className="request-quote-error"
                    >
                      {errors.phone.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="request-quote-field">
                <label htmlFor="country">
                  Country
                </label>

                <input
                  id="country"
                  type="text"
                  placeholder="Country"
                  autoComplete="country-name"
                  aria-invalid={Boolean(
                    errors.country
                  )}
                  aria-describedby={
                    errors.country
                      ? "country-error"
                      : undefined
                  }
                  {...register("country")}
                />

                {errors.country && (
                  <span
                    id="country-error"
                    className="request-quote-error"
                  >
                    {errors.country.message}
                  </span>
                )}
              </div>

              {/* SECTION 02 */}
              <div className="request-quote-form-section-title">
                <span>02</span>
                <h3>Product Requirement</h3>
              </div>

              <div className="request-quote-field">
                <label htmlFor="product">
                  Product
                </label>

                <input
                  id="product"
                  type="text"
                  placeholder="Product name or product family"
                  aria-invalid={Boolean(
                    errors.product
                  )}
                  aria-describedby={
                    errors.product
                      ? "product-error"
                      : undefined
                  }
                  {...register("product")}
                />

                {errors.product && (
                  <span
                    id="product-error"
                    className="request-quote-error"
                  >
                    {errors.product.message}
                  </span>
                )}
              </div>

              <div className="request-quote-form-row">
                <div className="request-quote-field">
                  <label htmlFor="quantity">
                    Quantity
                  </label>

                  <input
                    id="quantity"
                    type="text"
                    placeholder="Required quantity"
                    aria-invalid={Boolean(
                      errors.quantity
                    )}
                    aria-describedby={
                      errors.quantity
                        ? "quantity-error"
                        : undefined
                    }
                    {...register("quantity")}
                  />

                  {errors.quantity && (
                    <span
                      id="quantity-error"
                      className="request-quote-error"
                    >
                      {errors.quantity.message}
                    </span>
                  )}
                </div>

                <div className="request-quote-field">
                  <label htmlFor="unit">
                    Unit
                  </label>

                  <select
                    id="unit"
                    defaultValue=""
                    aria-invalid={Boolean(
                      errors.unit
                    )}
                    aria-describedby={
                      errors.unit
                        ? "unit-error"
                        : undefined
                    }
                    {...register("unit")}
                  >
                    <option value="" disabled>
                      Select unit
                    </option>

                    <option value="kg">KG</option>
                    <option value="mt">MT</option>
                    <option value="tonnes">
                      Tonnes
                    </option>
                    <option value="litres">
                      Litres
                    </option>
                    <option value="pieces">
                      Pieces
                    </option>
                    <option value="other">
                      Other
                    </option>
                  </select>

                  {errors.unit && (
                    <span
                      id="unit-error"
                      className="request-quote-error"
                    >
                      {errors.unit.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="request-quote-field">
                <label htmlFor="specification">
                  Grade / Specification
                </label>

                <input
                  id="specification"
                  type="text"
                  placeholder="Grade, specification, CAS number, technical requirement, etc."
                  aria-invalid={Boolean(
                    errors.specification
                  )}
                  aria-describedby={
                    errors.specification
                      ? "specification-error"
                      : undefined
                  }
                  {...register("specification")}
                />

                {errors.specification && (
                  <span
                    id="specification-error"
                    className="request-quote-error"
                  >
                    {errors.specification.message}
                  </span>
                )}
              </div>

              <div className="request-quote-field">
                <label htmlFor="application">
                  Application
                </label>

                <input
                  id="application"
                  type="text"
                  placeholder="Intended application or use"
                  aria-invalid={Boolean(
                    errors.application
                  )}
                  aria-describedby={
                    errors.application
                      ? "application-error"
                      : undefined
                  }
                  {...register("application")}
                />

                {errors.application && (
                  <span
                    id="application-error"
                    className="request-quote-error"
                  >
                    {errors.application.message}
                  </span>
                )}
              </div>

              {/* SECTION 03 */}
              <div className="request-quote-form-section-title">
                <span>03</span>
                <h3>Trade &amp; Delivery</h3>
              </div>

              <div className="request-quote-form-row">
                <div className="request-quote-field">
                  <label htmlFor="destination">
                    Destination
                  </label>

                  <input
                    id="destination"
                    type="text"
                    placeholder="Destination country / port"
                    aria-invalid={Boolean(
                      errors.destination
                    )}
                    aria-describedby={
                      errors.destination
                        ? "destination-error"
                        : undefined
                    }
                    {...register("destination")}
                  />

                  {errors.destination && (
                    <span
                      id="destination-error"
                      className="request-quote-error"
                    >
                      {errors.destination.message}
                    </span>
                  )}
                </div>

                <div className="request-quote-field">
                  <label htmlFor="incoterm">
                    Incoterm
                  </label>

                  <select
                    id="incoterm"
                    defaultValue=""
                    aria-invalid={Boolean(
                      errors.incoterm
                    )}
                    aria-describedby={
                      errors.incoterm
                        ? "incoterm-error"
                        : undefined
                    }
                    {...register("incoterm")}
                  >
                    <option value="" disabled>
                      Select Incoterm
                    </option>

                    <option value="EXW">EXW</option>
                    <option value="FCA">FCA</option>
                    <option value="FOB">FOB</option>
                    <option value="CFR">CFR</option>
                    <option value="CIF">CIF</option>
                    <option value="DAP">DAP</option>
                    <option value="DDP">DDP</option>
                    <option value="other">
                      Other
                    </option>
                    <option value="unknown">
                      Not sure
                    </option>
                  </select>

                  {errors.incoterm && (
                    <span
                      id="incoterm-error"
                      className="request-quote-error"
                    >
                      {errors.incoterm.message}
                    </span>
                  )}
                </div>
              </div>

              {/* SECTION 04 */}
              <div className="request-quote-form-section-title">
                <span>04</span>
                <h3>Additional Information</h3>
              </div>

              <div className="request-quote-field">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us anything else that may help us understand your requirement."
                  aria-invalid={Boolean(
                    errors.message
                  )}
                  aria-describedby={
                    errors.message
                      ? "message-error"
                      : undefined
                  }
                  {...register("message")}
                />

                {errors.message && (
                  <span
                    id="message-error"
                    className="request-quote-error"
                  >
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* FILE */}
              <div className="request-quote-field">
                <label htmlFor="document">
                  Supporting Document
                </label>

                <div className="request-quote-file">
                  <input
                    id="document"
                    type="file"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.jpg,.jpeg,.png"
                    {...register("document")}
                  />

                  <div className="request-quote-file-content">
                    <PackageCheck
                      size={22}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />

                    <div>
                      <strong>
                        Attach a specification or document
                      </strong>

                      <span>
                        PDF, DOC, XLS, CSV, JPG or PNG
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SUBMIT */}
              <div className="request-quote-submit-area">
                <p>
                  By submitting this form, you are
                  providing your requirement for review by
                  the OpenButani team.
                </p>

                <button
                  type="submit"
                  className="request-quote-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Submit Request"}

                  <ArrowRight
                    size={18}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </button>
              </div>

              {/* SUCCESS MESSAGE */}
              {isSubmitSuccessful && (
                <div
                  className="request-quote-success"
                  role="status"
                >
                  <CheckCircle2
                    size={21}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <div>
                    <strong>
                      Requirement received.
                    </strong>

                    <p>
                      Your form has been validated
                      successfully. The submission
                      connection is now connected to the
                      OpenButani API.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* BOTTOM INFORMATION */}
      <section className="request-quote-bottom">
        <div className="request-quote-container request-quote-bottom-grid">
          <div className="request-quote-bottom-item">
            <Globe2
              size={24}
              strokeWidth={1.7}
              aria-hidden="true"
            />

            <div>
              <strong>International sourcing</strong>

              <p>
                Connecting supply and demand across
                international markets.
              </p>
            </div>
          </div>

          <div className="request-quote-bottom-item">
            <PackageCheck
              size={24}
              strokeWidth={1.7}
              aria-hidden="true"
            />

            <div>
              <strong>Requirement focused</strong>

              <p>
                Product, quantity, specification and
                destination details help us understand your
                request.
              </p>
            </div>
          </div>

          <div className="request-quote-bottom-item">
            <ShieldCheck
              size={24}
              strokeWidth={1.7}
              aria-hidden="true"
            />

            <div>
              <strong>Professional coordination</strong>

              <p>
                Supporting clear communication throughout
                the sourcing and trading process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}