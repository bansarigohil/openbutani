import Header from "@/components/Header";

import {
  Globe2,
  ArrowLeftRight,
  ClipboardCheck,
  Ship,
  Network,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Global Sourcing",
    description:
      "Connecting product requirements with suitable international sourcing opportunities across global markets.",
    icon: Globe2,
  },
  {
    number: "02",
    title: "International Trading",
    description:
      "Supporting cross-border trading requirements by connecting suppliers, products and buyers.",
    icon: ArrowLeftRight,
  },
  {
    number: "03",
    title: "Procurement",
    description:
      "Supporting businesses with requirement-based procurement and international supplier coordination.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Import & Export",
    description:
      "Supporting international movement of products through structured import and export coordination.",
    icon: Ship,
  },
  {
    number: "05",
    title: "Supply Coordination",
    description:
      "Coordinating product information, commercial requirements and supply details between trading partners.",
    icon: Network,
  },
  {
    number: "06",
    title: "Market Access",
    description:
      "Helping connect businesses with international supply and demand opportunities across relevant markets.",
    icon: TrendingUp,
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding the product, specification, quantity, application and destination requirements.",
  },
  {
    number: "02",
    title: "Source",
    description:
      "We identify suitable sourcing opportunities based on the requirement and available supply relationships.",
  },
  {
    number: "03",
    title: "Evaluate",
    description:
      "Product information, specifications and commercial requirements are reviewed before progressing.",
  },
  {
    number: "04",
    title: "Coordinate",
    description:
      "We coordinate the relevant supply, commercial and communication requirements between parties.",
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "The objective is to support a clear and coordinated path from international sourcing to supply.",
  },
];

export default function WhatWeDoPage() {
  return (
    <main className="what-we-do-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="what-we-do-hero">
        <div className="what-we-do-container what-we-do-hero-inner">
          <div className="what-we-do-hero-content">
            <p className="section-eyebrow">
              WHAT WE DO
            </p>

            <h1>
              From sourcing
              <br />
              to supply.
            </h1>

            <p>
              OpenButani connects suppliers, manufacturers and
              buyers through international sourcing, trading
              and supply solutions across global markets.
            </p>

            <div className="what-we-do-hero-actions">
              <a
                href="/request-a-quote"
                className="what-we-do-primary-button"
              >
                Request a Quote

                <ArrowRight
                  size={18}
                  aria-hidden="true"
                />
              </a>

              <a
                href="#services"
                className="what-we-do-secondary-button"
              >
                Explore Our Services
              </a>
            </div>
          </div>

          <div className="what-we-do-hero-side">
            <div className="what-we-do-hero-side-label">
              INTERNATIONAL TRADE
            </div>

            <div className="what-we-do-hero-side-line" />

            <p>
              Sourcing.
              <br />
              Trading.
              <br />
              Coordination.
              <br />
              Supply.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="what-we-do-intro">
        <div className="what-we-do-container what-we-do-intro-grid">
          <div>
            <p className="section-eyebrow">
              OUR APPROACH
            </p>

            <h2>
              Connecting the
              <br />
              right supply with
              <br />
              the right demand.
            </h2>
          </div>

          <div className="what-we-do-intro-content">
            <p>
              International trade involves more than moving a
              product from one place to another. It requires
              understanding requirements, identifying suitable
              supply opportunities and coordinating information
              between commercial partners.
            </p>

            <p>
              OpenButani takes a requirement-driven approach to
              international sourcing and trading, helping
              businesses navigate supply opportunities across
              chemicals, polymers and industrial products.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        className="what-we-do-services"
        id="services"
      >
        <div className="what-we-do-container">
          <div className="what-we-do-section-heading">
            <div>
              <p className="section-eyebrow">
                OUR SERVICES
              </p>

              <h2>
                Built around
                <br />
                your requirement.
              </h2>
            </div>

            <p>
              Our services are structured around the needs of
              international buyers, suppliers and businesses
              seeking reliable sourcing and trading
              opportunities.
            </p>
          </div>

          <div className="what-we-do-services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="what-we-do-service-card"
                  key={service.title}
                >
                  <div className="what-we-do-service-top">
                    <span>{service.number}</span>

                    <div className="what-we-do-service-icon">
                      <Icon
                        size={21}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a
                    href="/request-a-quote"
                    className="what-we-do-service-link"
                  >
                    Discuss Your Requirement

                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                    />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW WE WORK
      ===================================================== */}

      <section className="what-we-do-process">
        <div className="what-we-do-container">
          <div className="what-we-do-process-heading">
            <p className="section-eyebrow">
              HOW WE WORK
            </p>

            <h2>
              A clear path from
              <br />
              requirement to supply.
            </h2>
          </div>

          <div className="what-we-do-process-list">
            {process.map((step) => (
              <div
                className="what-we-do-process-item"
                key={step.number}
              >
                <span className="what-we-do-process-number">
                  {step.number}
                </span>

                <div className="what-we-do-process-title">
                  <h3>{step.title}</h3>
                </div>

                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TRADE NETWORK
      ===================================================== */}

      <section className="what-we-do-network">
        <div className="what-we-do-container">
          <div className="what-we-do-network-heading">
            <p className="section-eyebrow">
              TRADE NETWORK
            </p>

            <h2>
              Connecting
              <br />
              supply and demand.
            </h2>
          </div>

          <div className="what-we-do-network-flow">
            <div className="what-we-do-network-node">
              <span>01</span>

              <strong>Suppliers</strong>

              <p>
                International supply sources and
                manufacturing relationships.
              </p>
            </div>

            <div className="what-we-do-network-arrow">
              <ArrowRight
                size={28}
                aria-hidden="true"
              />
            </div>

            <div className="what-we-do-network-node what-we-do-network-node-main">
              <span>02</span>

              <strong>OpenButani</strong>

              <p>
                Sourcing, trading and supply coordination.
              </p>
            </div>

            <div className="what-we-do-network-arrow">
              <ArrowRight
                size={28}
                aria-hidden="true"
              />
            </div>

            <div className="what-we-do-network-node">
              <span>03</span>

              <strong>Buyers</strong>

              <p>
                Manufacturers, businesses and international
                customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="what-we-do-final-cta">
        <div className="what-we-do-container what-we-do-final-cta-inner">
          <div>
            <p className="section-eyebrow">
              START A CONVERSATION
            </p>

            <h2>
              Have a sourcing
              <br />
              requirement?
            </h2>

            <p>
              Tell us what you are looking for and let us
              understand your requirement.
            </p>
          </div>

          <a
            href="/request-a-quote"
            className="what-we-do-primary-button"
          >
            Request a Quote

            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </a>
        </div>
      </section>

    </main>
  );
}