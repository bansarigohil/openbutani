import Link from "next/link";
import {
  ArrowRight,
  Factory,
  FileText,
  Search,
  ShieldCheck,
} from "lucide-react";

const industrialAreas = [
  {
    number: "01",
    name: "Industrial Materials",
    description:
      "Industrial materials for selected manufacturing, processing and supply requirements.",
  },
  {
    number: "02",
    name: "Manufacturing Materials",
    description:
      "Materials supporting industrial manufacturing and production requirements.",
  },
  {
    number: "03",
    name: "Process Materials",
    description:
      "Materials used within selected industrial and processing environments.",
  },
  {
    number: "04",
    name: "Technical Materials",
    description:
      "Technical material requirements based on specification, application and destination.",
  },
  {
    number: "05",
    name: "Industrial Supply",
    description:
      "Supply categories supporting international industrial procurement requirements.",
  },
  {
    number: "06",
    name: "Other Industrial Requirements",
    description:
      "Additional industrial requirements evaluated according to the specific sourcing request.",
  },
];

const supportPoints = [
  {
    icon: Search,
    title: "Requirement-Based Sourcing",
    text: "Understanding the material, specification, quantity and destination before identifying suitable supply opportunities.",
  },
  {
    icon: FileText,
    title: "Product Information",
    text: "Supporting relevant product specifications, documentation and commercial information where applicable.",
  },
  {
    icon: ShieldCheck,
    title: "Supply Coordination",
    text: "Coordinating relevant supplier and buyer requirements throughout the international supply process.",
  },
];

export default function IndustrialProductsPage() {
  return (
    <main className="industrial-page">
      {/* HEADER */}
      <header className="industrial-header">
        <div className="industrial-header-inner">
          <Link href="/" className="industrial-logo">
            OpenButani
          </Link>

          <nav
            className="industrial-nav"
            aria-label="Main navigation"
          >
            <Link href="/about">About</Link>

            <Link href="/products" className="active">
              Products
            </Link>

            <Link href="/industries">Industries</Link>

            <Link href="/global-trade">Global Trade</Link>

            <Link href="/what-we-do">What We Do</Link>

            <Link href="/contact">Contact</Link>
          </nav>

          <Link
            href="/request-a-quote"
            className="industrial-header-quote"
          >
            Request a Quote
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="industrial-hero">
        <div className="industrial-container">
          <p className="section-eyebrow">
            PRODUCTS / INDUSTRIAL PRODUCTS
          </p>

          <h1>
            Industrial materials
            <br />
            for global supply.
          </h1>

          <p className="industrial-hero-text">
            OpenButani supports industrial sourcing and supply requirements
            through international trading, procurement and supply coordination.
          </p>

          <div className="industrial-hero-actions">
            <a
              href="#industrial-catalogue"
              className="industrial-primary-button"
            >
              Explore Industrial Areas
              <ArrowRight size={17} aria-hidden="true" />
            </a>

            <Link
              href="/request-a-quote"
              className="industrial-secondary-button"
            >
              Request a Quote
            </Link>
          </div>

          <div className="industrial-hero-mark">
            <Factory
              size={72}
              strokeWidth={1}
              aria-hidden="true"
            />

            <span>
              INDUSTRIAL
              <br />
              MATERIALS
              <br />
              &amp; SUPPLY
            </span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="industrial-intro-section">
        <div className="industrial-container">
          <div className="industrial-intro-grid">
            <div>
              <p className="section-eyebrow">
                INDUSTRIAL PRODUCTS
              </p>

              <h2>
                Supply built around
                <br />
                the requirement.
              </h2>
            </div>

            <div>
              <p>
                Industrial product requirements can vary significantly by
                application, specification, quantity, origin and destination.
                OpenButani approaches industrial sourcing around the individual
                requirement rather than a fixed product list.
              </p>

              <p>
                Share your material requirement with the OpenButani team so the
                relevant sourcing and supply opportunity can be evaluated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIAL AREAS */}
      <section
        className="industrial-catalogue-section"
        id="industrial-catalogue"
      >
        <div className="industrial-container">
          <div className="industrial-catalogue-heading">
            <div>
              <p className="section-eyebrow">
                INDUSTRIAL SUPPLY AREAS
              </p>

              <h2>
                Explore industrial
                <br />
                requirements.
              </h2>
            </div>

            <p>
              These are sourcing areas within the website structure. Specific
              products should be added only after OpenButani product
              availability has been verified.
            </p>
          </div>

          <div className="industrial-area-grid">
            {industrialAreas.map((area) => (
              <article
                className="industrial-area-card"
                key={area.name}
              >
                <div className="industrial-area-number">
                  {area.number}
                </div>

                <div className="industrial-area-content">
                  <h3>{area.name}</h3>

                  <p>{area.description}</p>
                </div>

                <Link
                  href={`/request-a-quote?product=${encodeURIComponent(
                    area.name,
                  )}`}
                  className="industrial-area-link"
                >
                  Enquire
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                  />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="industrial-support-section">
        <div className="industrial-container">
          <div className="industrial-support-heading">
            <p className="section-eyebrow">
              INDUSTRIAL SOURCING
            </p>

            <h2>
              From requirement
              <br />
              to supply.
            </h2>

            <p>
              OpenButani can structure an industrial sourcing request around
              the technical and commercial information needed to identify a
              suitable supply opportunity.
            </p>
          </div>

          <div className="industrial-support-grid">
            {supportPoints.map((point) => {
              const Icon = point.icon;

              return (
                <article
                  className="industrial-support-card"
                  key={point.title}
                >
                  <div className="industrial-support-icon">
                    <Icon size={21} aria-hidden="true" />
                  </div>

                  <h3>{point.title}</h3>

                  <p>{point.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="industrial-final-cta">
        <div className="industrial-container">
          <p className="section-eyebrow">
            HAVE AN INDUSTRIAL REQUIREMENT?
          </p>

          <h2>
            Tell us what you
            <br />
            need to source.
          </h2>

          <p>
            Share the product or material, specification, quantity and
            destination requirements with our team.
          </p>

          <Link
            href="/request-a-quote"
            className="industrial-final-button"
          >
            Request a Quote
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}