import Link from "next/link";
import {
  ArrowRight,
  Beaker,
  FileText,
  Search,
  ShieldCheck,
} from "lucide-react";

const chemicalFamilies = [
  {
    number: "01",
    name: "Acids",
    description:
      "Chemical family for industrial and manufacturing requirements.",
  },
  {
    number: "02",
    name: "Alkalis",
    description:
      "Chemical materials used across selected industrial applications.",
  },
  {
    number: "03",
    name: "Alcohols",
    description:
      "Alcohol-based chemical materials for industrial and processing requirements.",
  },
  {
    number: "04",
    name: "Amines",
    description:
      "Chemical intermediates and materials for selected industrial applications.",
  },
  {
    number: "05",
    name: "Aromatics",
    description:
      "Aromatic chemical materials for industrial and chemical processing.",
  },
  {
    number: "06",
    name: "Esters",
    description:
      "Esters for selected industrial and manufacturing applications.",
  },
  {
    number: "07",
    name: "Glycols",
    description:
      "Glycol-based materials for industrial and manufacturing requirements.",
  },
  {
    number: "08",
    name: "Ketones",
    description:
      "Ketone-based chemical materials for industrial applications.",
  },
  {
    number: "09",
    name: "Solvents",
    description:
      "Solvent materials supporting manufacturing and processing requirements.",
  },
  {
    number: "10",
    name: "Specialty Chemicals",
    description:
      "Specialty chemical categories for application-focused supply requirements.",
  },
  {
    number: "11",
    name: "Industrial Chemicals",
    description:
      "Industrial chemical materials for manufacturing and commercial requirements.",
  },
  {
    number: "12",
    name: "Additives",
    description:
      "Chemical additives for selected industrial and material applications.",
  },
  {
    number: "13",
    name: "Performance Chemicals",
    description:
      "Performance-focused chemical materials for selected industrial applications.",
  },
];

const supportPoints = [
  {
    icon: Search,
    title: "Product Sourcing",
    text: "Sourcing based on product requirements, specifications, quantity and destination.",
  },
  {
    icon: FileText,
    title: "Product Information",
    text: "Supporting product information and documentation requirements where applicable.",
  },
  {
    icon: ShieldCheck,
    title: "Supplier Coordination",
    text: "Coordinating relevant supplier and commercial information for international supply.",
  },
];

export default function ChemicalsPage() {
  return (
    <main className="chemical-page">
      {/* HEADER */}
      <header className="chemical-header">
        <div className="chemical-header-inner">
          <Link href="/" className="chemical-logo">
            OpenButani
          </Link>

          <nav className="chemical-nav" aria-label="Main navigation">
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
            className="chemical-header-quote"
          >
            Request a Quote
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="chemical-hero">
        <div className="chemical-container">
          <div className="chemical-hero-content">
            <p className="section-eyebrow">
              PRODUCTS / CHEMICALS
            </p>

            <h1>
              Chemical supply
              <br />
              for global industry.
            </h1>

            <p className="chemical-hero-text">
              Explore chemical product families and sourcing categories
              supporting industrial and commercial supply requirements.
            </p>

            <div className="chemical-hero-actions">
              <a
                href="#chemical-catalogue"
                className="chemical-primary-button"
              >
                Explore Chemical Families
                <ArrowRight size={17} aria-hidden="true" />
              </a>

              <Link
                href="/request-a-quote"
                className="chemical-secondary-button"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          <div className="chemical-hero-mark">
            <Beaker size={78} strokeWidth={1} aria-hidden="true" />

            <span>
              INTERNATIONAL
              <br />
              CHEMICAL
              <br />
              SOURCING
            </span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="chemical-intro-section">
        <div className="chemical-container">
          <div className="chemical-intro-grid">
            <div>
              <p className="section-eyebrow">
                CHEMICALS
              </p>

              <h2>
                A structured approach
                <br />
                to chemical sourcing.
              </h2>
            </div>

            <div>
              <p>
                OpenButani&apos;s chemical category is designed around
                international sourcing, trading and supply requirements.
                Product availability, specifications and commercial terms
                depend on the individual requirement.
              </p>

              <p>
                For a specific chemical, provide the product name,
                specification, quantity and destination so the appropriate
                supply opportunity can be evaluated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHEMICAL FAMILIES */}
      <section
        className="chemical-catalogue-section"
        id="chemical-catalogue"
      >
        <div className="chemical-container">
          <div className="chemical-catalogue-heading">
            <div>
              <p className="section-eyebrow">
                CHEMICAL PRODUCT FAMILIES
              </p>

              <h2>
                Explore chemical
                <br />
                categories.
              </h2>
            </div>

            <p>
              Browse the chemical families currently defined within the
              OpenButani catalogue structure.
            </p>
          </div>

          <div className="chemical-family-grid">
            {chemicalFamilies.map((family) => (
              <article
                className="chemical-family-card"
                key={family.name}
              >
                <div className="chemical-family-number">
                  {family.number}
                </div>

                <div className="chemical-family-content">
                  <h3>{family.name}</h3>

                  <p>{family.description}</p>
                </div>

                <Link
                  href={`/request-a-quote?product=${encodeURIComponent(
                    family.name,
                  )}`}
                  className="chemical-family-link"
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

      {/* SOURCING SUPPORT */}
      <section className="chemical-support-section">
        <div className="chemical-container">
          <div className="chemical-support-heading">
            <p className="section-eyebrow">
              CHEMICAL SOURCING
            </p>

            <h2>
              More than a product
              <br />
              catalogue.
            </h2>

            <p>
              Chemical requirements often depend on exact specifications,
              quantity, application and destination. Our sourcing approach is
              designed around the individual requirement.
            </p>
          </div>

          <div className="chemical-support-grid">
            {supportPoints.map((point) => {
              const Icon = point.icon;

              return (
                <article
                  className="chemical-support-card"
                  key={point.title}
                >
                  <div className="chemical-support-icon">
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
      <section className="chemical-final-cta">
        <div className="chemical-container">
          <p className="section-eyebrow">
            NEED A CHEMICAL PRODUCT?
          </p>

          <h2>
            Tell us what you
            <br />
            are looking for.
          </h2>

          <p>
            Share the product, specification, quantity and destination
            requirements with our team.
          </p>

          <Link
            href="/request-a-quote"
            className="chemical-final-button"
          >
            Request a Quote
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}