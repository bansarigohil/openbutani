import {
  FileCheck,
  ClipboardCheck,
  SearchCheck,
  ShieldCheck,
  PackageCheck,
  Scale,
  ArrowRight,
} from "lucide-react";

const qualityAreas = [
  {
    number: "01",
    title: "Product Specifications",
    description:
      "Understanding product specifications, grades, technical requirements and relevant documentation before progressing with a sourcing requirement.",
    icon: FileCheck,
  },
  {
    number: "02",
    title: "Supplier Qualification",
    description:
      "Reviewing relevant supplier information and sourcing opportunities according to the product and commercial requirement.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Documentation",
    description:
      "Coordinating relevant product and commercial documentation required for the trading and supply process.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Quality Coordination",
    description:
      "Supporting communication around product quality requirements, specifications and supply expectations.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Inspection & Verification",
    description:
      "Supporting inspection or verification requirements where applicable and agreed as part of the supply process.",
    icon: PackageCheck,
  },
  {
    number: "06",
    title: "Regulatory Awareness",
    description:
      "Maintaining awareness of relevant product, documentation and international trade requirements applicable to the transaction.",
    icon: Scale,
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding the required product, specification, grade, application and destination.",
  },
  {
    number: "02",
    title: "Review",
    description:
      "Relevant product and supplier information is reviewed against the stated requirement.",
  },
  {
    number: "03",
    title: "Coordinate",
    description:
      "Product information, documentation and commercial requirements are coordinated between the relevant parties.",
  },
  {
    number: "04",
    title: "Verify",
    description:
      "Where applicable, agreed inspection, verification or documentation requirements are addressed before supply.",
  },
];

export default function QualityCompliancePage() {
  return (
    <main className="quality-compliance-page">
      {/* HEADER */}
      <header className="quality-compliance-header">
        <div className="quality-compliance-container quality-compliance-header-inner">
          <a
            href="/"
            className="quality-compliance-logo"
            aria-label="OpenButani home"
          >
            OpenButani
          </a>

          <nav
            className="quality-compliance-nav"
            aria-label="Main navigation"
          >
            <a href="/about">About</a>
            <a href="/products">Products</a>
            <a href="/industries">Industries</a>
            <a href="/global-trade">Global Trade</a>
            <a href="/what-we-do">What We Do</a>
            <a
              href="/quality-compliance"
              aria-current="page"
            >
              Quality &amp; Compliance
            </a>
            <a href="/contact">Contact</a>
          </nav>

          <a
            href="/request-a-quote"
            className="quality-compliance-header-cta"
          >
            Request a Quote
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="quality-compliance-hero">
        <div className="quality-compliance-container quality-compliance-hero-content">
          <div>
            <p className="section-eyebrow">
              QUALITY &amp; COMPLIANCE
            </p>

            <h1>
              Confidence built
              <br />
              into every requirement.
            </h1>

            <p className="quality-compliance-hero-description">
              OpenButani approaches international sourcing and
              trading with attention to product specifications,
              supplier information, documentation and relevant
              quality requirements.
            </p>

            <div className="quality-compliance-hero-actions">
              <a
                href="/request-a-quote"
                className="quality-compliance-primary-button"
              >
                Discuss Your Requirement
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                />
              </a>

              <a
                href="#quality-areas"
                className="quality-compliance-secondary-button"
              >
                Explore Our Approach
              </a>
            </div>
          </div>

          <div className="quality-compliance-hero-side">
            <div className="quality-compliance-hero-side-number">
              01
            </div>

            <div className="quality-compliance-hero-side-line" />

            <p>
              Product
              <br />
              Information
              <br />
              Documentation
              <br />
              Coordination
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="quality-compliance-intro">
        <div className="quality-compliance-container quality-compliance-intro-grid">
          <div>
            <p className="section-eyebrow">
              OUR APPROACH
            </p>

            <h2>
              Quality starts
              <br />
              with clarity.
            </h2>
          </div>

          <div className="quality-compliance-intro-content">
            <p>
              International supply requirements can involve
              detailed product specifications, documentation,
              commercial conditions and destination
              requirements.
            </p>

            <p>
              Our approach is to understand those requirements
              clearly and coordinate the relevant information
              between suppliers and buyers throughout the
              sourcing and trading process.
            </p>
          </div>
        </div>
      </section>

      {/* QUALITY AREAS */}
      <section
        className="quality-compliance-areas"
        id="quality-areas"
      >
        <div className="quality-compliance-container">
          <div className="quality-compliance-section-heading">
            <div>
              <p className="section-eyebrow">
                QUALITY &amp; COMPLIANCE AREAS
              </p>

              <h2>
                Built around
                <br />
                the requirement.
              </h2>
            </div>

            <p>
              Our quality approach focuses on the information,
              coordination and verification requirements that
              matter during international sourcing and supply.
            </p>
          </div>

          <div className="quality-compliance-grid">
            {qualityAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  className="quality-compliance-card"
                  key={area.title}
                >
                  <div className="quality-compliance-card-top">
                    <span>{area.number}</span>

                    <div className="quality-compliance-card-icon">
                      <Icon
                        size={21}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <h3>{area.title}</h3>

                  <p>{area.description}</p>

                  <a
                    href="/request-a-quote"
                    className="quality-compliance-card-link"
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

      {/* PROCESS */}
      <section className="quality-compliance-process">
        <div className="quality-compliance-container quality-compliance-process-grid">
          <div className="quality-compliance-process-heading">
            <p className="section-eyebrow">
              QUALITY PROCESS
            </p>

            <h2>
              A structured
              <br />
              approach to supply.
            </h2>

            <p>
              We focus on clear information and coordinated
              requirements throughout the international
              sourcing process.
            </p>
          </div>

          <div className="quality-compliance-process-list">
            {process.map((step) => (
              <div
                className="quality-compliance-process-item"
                key={step.number}
              >
                <span>{step.number}</span>

                <div>
                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTATION */}
      <section className="quality-compliance-documentation">
        <div className="quality-compliance-container quality-compliance-documentation-grid">
          <div className="quality-compliance-documentation-visual">
            <div className="quality-compliance-document-card">
              <div className="quality-compliance-document-card-header">
                <span>PRODUCT INFORMATION</span>
                <FileCheck
                  size={20}
                  aria-hidden="true"
                />
              </div>

              <div className="quality-compliance-document-lines">
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="quality-compliance-document-check">
                <ShieldCheck
                  size={19}
                  aria-hidden="true"
                />
                <strong>
                  Requirement reviewed
                </strong>
              </div>
            </div>
          </div>

          <div className="quality-compliance-documentation-content">
            <p className="section-eyebrow">
              DOCUMENTATION &amp; TRACEABILITY
            </p>

            <h2>
              The right information
              <br />
              at the right stage.
            </h2>

            <p>
              Product and commercial documentation can play
              an important role in international trade. We
              coordinate relevant information according to the
              requirement and transaction.
            </p>

            <div className="quality-compliance-documentation-points">
              <div>
                <span>01</span>
                <strong>Product Specifications</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Supplier Documentation</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Commercial Information</strong>
              </div>

              <div>
                <span>04</span>
                <strong>Quality Requirements</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANT TRUST STATEMENT */}
      <section className="quality-compliance-trust">
        <div className="quality-compliance-container quality-compliance-trust-inner">
          <div>
            <p className="section-eyebrow">
              RESPONSIBLE COMMUNICATION
            </p>

            <h2>
              Clear information.
              <br />
              No unsupported claims.
            </h2>
          </div>

          <div className="quality-compliance-trust-content">
            <p>
              OpenButani presents product, supplier and quality
              information based on the requirements and
              documentation available for the relevant
              transaction.
            </p>

            <p>
              Certifications, approvals, inspections or other
              formal credentials are only referenced where they
              are applicable and have been appropriately
              verified.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="quality-compliance-final-cta">
        <div className="quality-compliance-container quality-compliance-final-cta-inner">
          <div>
            <p className="section-eyebrow">
              START A CONVERSATION
            </p>

            <h2>
              Have a specific
              <br />
              quality requirement?
            </h2>

            <p>
              Tell us your product specification,
              documentation or supply requirement and let us
              understand how we can support you.
            </p>
          </div>

          <a
            href="/request-a-quote"
            className="quality-compliance-primary-button"
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