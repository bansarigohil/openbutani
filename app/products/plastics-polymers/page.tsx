import Link from "next/link";
import {
  ArrowRight,
  Box,
  FileText,
  Search,
  ShieldCheck,
} from "lucide-react";

const polymerFamilies = [
  {
    number: "01",
    name: "PVC",
    description:
      "Polyvinyl chloride materials for selected construction, manufacturing and industrial applications.",
  },
  {
    number: "02",
    name: "HDPE",
    description:
      "High-density polyethylene materials for packaging, manufacturing and industrial requirements.",
  },
  {
    number: "03",
    name: "LDPE",
    description:
      "Low-density polyethylene materials for selected packaging and manufacturing applications.",
  },
  {
    number: "04",
    name: "LLDPE",
    description:
      "Linear low-density polyethylene materials for selected packaging and industrial applications.",
  },
  {
    number: "05",
    name: "PP",
    description:
      "Polypropylene materials supporting selected manufacturing, packaging and industrial applications.",
  },
  {
    number: "06",
    name: "PET",
    description:
      "Polyethylene terephthalate materials for selected packaging and manufacturing requirements.",
  },
  {
    number: "07",
    name: "Engineering Plastics",
    description:
      "Engineering polymer materials for selected industrial and manufacturing applications.",
  },
  {
    number: "08",
    name: "Polymer Additives",
    description:
      "Additive categories supporting selected polymer processing and material applications.",
  },
];

const supportPoints = [
  {
    icon: Search,
    title: "Polymer Sourcing",
    text: "Sourcing based on polymer type, grade, specification, quantity and destination requirements.",
  },
  {
    icon: FileText,
    title: "Technical Information",
    text: "Supporting relevant product information and documentation requirements where applicable.",
  },
  {
    icon: ShieldCheck,
    title: "Supply Coordination",
    text: "Coordinating supplier, commercial and international supply requirements.",
  },
];

export default function PlasticsPolymersPage() {
  return (
    <main className="polymer-page">
      {/* HEADER */}
      <header className="polymer-header">
        <div className="polymer-header-inner">
          <Link href="/" className="polymer-logo">
            OpenButani
          </Link>

          <nav className="polymer-nav" aria-label="Main navigation">
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
            className="polymer-header-quote"
          >
            Request a Quote
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="polymer-hero">
        <div className="polymer-container">
          <p className="section-eyebrow">
            PRODUCTS / PLASTICS &amp; POLYMERS
          </p>

          <h1>
            Polymer materials
            <br />
            for global industry.
          </h1>

          <p className="polymer-hero-text">
            Explore polymer material families supporting packaging,
            manufacturing, construction and selected industrial applications.
          </p>

          <div className="polymer-hero-actions">
            <a
              href="#polymer-catalogue"
              className="polymer-primary-button"
            >
              Explore Polymer Families
              <ArrowRight size={17} aria-hidden="true" />
            </a>

            <Link
              href="/request-a-quote"
              className="polymer-secondary-button"
            >
              Request a Quote
            </Link>
          </div>

          <div className="polymer-hero-mark">
            <Box size={72} strokeWidth={1} aria-hidden="true" />

            <span>
              PLASTICS
              <br />
              &amp;
              <br />
              POLYMERS
            </span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="polymer-intro-section">
        <div className="polymer-container">
          <div className="polymer-intro-grid">
            <div>
              <p className="section-eyebrow">
                PLASTICS &amp; POLYMERS
              </p>

              <h2>
                Materials for
                <br />
                modern industry.
              </h2>
            </div>

            <div>
              <p>
                OpenButani&apos;s plastics and polymers category is designed
                around international sourcing, trading and industrial supply
                requirements.
              </p>

              <p>
                Polymer requirements can depend on grade, specification,
                application, quantity and destination. Share those
                requirements with the OpenButani team so the appropriate supply
                opportunity can be evaluated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POLYMER CATALOGUE */}
      <section
        className="polymer-catalogue-section"
        id="polymer-catalogue"
      >
        <div className="polymer-container">
          <div className="polymer-catalogue-heading">
            <div>
              <p className="section-eyebrow">
                POLYMER PRODUCT FAMILIES
              </p>

              <h2>
                Explore polymer
                <br />
                categories.
              </h2>
            </div>

            <p>
              Browse the polymer families currently defined within the
              OpenButani catalogue structure.
            </p>
          </div>

          <div className="polymer-family-grid">
            {polymerFamilies.map((family) => (
              <article
                className="polymer-family-card"
                key={family.name}
              >
                <div className="polymer-family-number">
                  {family.number}
                </div>

                <div className="polymer-family-content">
                  <h3>{family.name}</h3>

                  <p>{family.description}</p>
                </div>

                <Link
                  href={`/request-a-quote?product=${encodeURIComponent(
                    family.name,
                  )}`}
                  className="polymer-family-link"
                >
                  Enquire
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="polymer-support-section">
        <div className="polymer-container">
          <div className="polymer-support-heading">
            <p className="section-eyebrow">
              POLYMER SOURCING
            </p>

            <h2>
              The right material
              <br />
              starts with the right specification.
            </h2>

            <p>
              Polymer supply requirements often depend on the exact material,
              grade, application, quantity and destination. Our sourcing
              approach starts with understanding those requirements.
            </p>
          </div>

          <div className="polymer-support-grid">
            {supportPoints.map((point) => {
              const Icon = point.icon;

              return (
                <article
                  className="polymer-support-card"
                  key={point.title}
                >
                  <div className="polymer-support-icon">
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
      <section className="polymer-final-cta">
        <div className="polymer-container">
          <p className="section-eyebrow">
            NEED A POLYMER PRODUCT?
          </p>

          <h2>
            Tell us your
            <br />
            material requirement.
          </h2>

          <p>
            Share the polymer type, grade, specification, quantity and
            destination with our team.
          </p>

          <Link
            href="/request-a-quote"
            className="polymer-final-button"
          >
            Request a Quote
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}