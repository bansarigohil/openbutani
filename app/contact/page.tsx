"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Phone,
  Globe2,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      country: formData.get("country"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      console.log("Contact API response:", result);

      if (!response.ok) {
        alert(
          result.message ||
            "Please check your information and try again."
        );
        return;
      }

      alert(
        result.message ||
          "Your enquiry has been received successfully."
      );

      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      alert(
        "Something went wrong while sending your enquiry. Please try again."
      );
    }
  }

  return (
    <main className="contact-page">
      {/* =========================
          HEADER
      ========================== */}

      <header className="contact-header">
        <div className="contact-header-inner">
          <Link
            href="/"
            className="contact-logo"
            aria-label="OpenButani home"
          >
            <Image
              src="/images/openbutani-logo-wordmark.png"
              alt="OpenButani"
              width={629}
              height={155}
              priority
            />
          </Link>

          <nav
            className="contact-nav"
            aria-label="Main navigation"
          >
            <Link href="/about">About</Link>

            <Link href="/products">Products</Link>

            <Link href="/industries">Industries</Link>

            <Link href="/global-trade">
              Global Trade
            </Link>

            <Link href="/what-we-do">
              What We Do
            </Link>

            <Link
              href="/contact"
              className="active"
            >
              Contact
            </Link>
          </nav>

          <Link
            href="/request-a-quote"
            className="contact-header-cta"
          >
            Request a Quote
          </Link>
        </div>
      </header>

      {/* =========================
          HERO
      ========================== */}

      <section className="contact-hero">
        <div className="contact-container">
          <div className="contact-eyebrow">
            CONTACT OPENBUTANI
          </div>

          <h1>
            Let&apos;s Talk About Your Global Supply Needs.
          </h1>

          <p>
            Whether you are looking for international sourcing,
            trading, procurement or supply solutions, connect
            with OpenButani to discuss your requirement.
          </p>
        </div>
      </section>

      {/* =========================
          CONTACT INTRODUCTION
      ========================== */}

      <section className="contact-intro">
        <div className="contact-container contact-intro-grid">
          <div>
            <div className="contact-section-label">
              GET IN TOUCH
            </div>

            <h2>
              Start a conversation with our team.
            </h2>

            <p>
              Every international requirement is different.
              Share your business need with us and we can
              understand the requirement, explore suitable
              sourcing opportunities and coordinate the next
              steps.
            </p>

            <Link
              href="/request-a-quote"
              className="contact-primary-button"
            >
              Request a Quote
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="contact-info-list">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <MessageSquare size={22} />
              </div>

              <div>
                <h3>Business Enquiries</h3>

                <p>
                  For general business discussions, trading
                  opportunities and international supply
                  requirements.
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Globe2 size={22} />
              </div>

              <div>
                <h3>Global Sourcing</h3>

                <p>
                  Discuss sourcing requirements, supplier
                  opportunities and international procurement
                  needs.
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Mail size={22} />
              </div>

              <div>
                <h3>Email Enquiries</h3>

                <p>
                  Use the contact form to send your
                  requirement to the OpenButani team.
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Phone size={22} />
              </div>

              <div>
                <h3>Direct Contact</h3>

                <p>
                  Contact details can be added here once the
                  official OpenButani business information is
                  confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CONTACT FORM
      ========================== */}

      <section className="contact-form-section">
        <div className="contact-container contact-form-grid">
          <div className="contact-form-copy">
            <div className="contact-section-label">
              SEND AN ENQUIRY
            </div>

            <h2>
              Tell us what you need.
            </h2>

            <p>
              Share a few details about your company and
              requirement. This helps us understand how we can
              support your international sourcing or trading
              needs.
            </p>

            <div className="contact-form-note">
              <strong>
                For product-specific requirements
              </strong>

              <span>
                You can also use our dedicated Request a Quote
                form for detailed product, quantity,
                specification and destination information.
              </span>
            </div>

            <Link
              href="/request-a-quote"
              className="contact-secondary-link"
            >
              Go to Request a Quote
              <ArrowRight size={17} />
            </Link>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            {/* Name + Company */}

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="name">
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="company">
                  Company
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company name"
                  required
                />
              </div>
            </div>

            {/* Email + Country */}

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="email">
                  Business Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="country">
                  Country
                </label>

                <input
                  id="country"
                  name="country"
                  type="text"
                  placeholder="Country"
                  required
                />
              </div>
            </div>

            {/* Subject */}

            <div className="contact-field">
              <label htmlFor="subject">
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="How can we help?"
                required
              />
            </div>

            {/* Message */}

            <div className="contact-field">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={7}
                placeholder="Tell us about your requirement..."
                required
              />
            </div>

            {/* Submit */}

            <button
              type="submit"
              className="contact-submit"
            >
              Send Enquiry
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </section>

      {/* =========================
          FINAL CTA
      ========================== */}

      <section className="contact-final-cta">
        <div className="contact-container">
          <div>
            <div className="contact-section-label">
              READY TO DISCUSS A REQUIREMENT?
            </div>

            <h2>
              Connect supply with demand.
            </h2>

            <p>
              For detailed product and sourcing requirements,
              send us a quote request and provide the
              information needed to evaluate your requirement.
            </p>
          </div>

          <Link
            href="/request-a-quote"
            className="contact-final-button"
          >
            Request a Quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}