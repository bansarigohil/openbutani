import {
  Leaf,
  Globe2,
  Truck,
  ShieldCheck,
  Handshake,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const sustainabilityAreas = [
  {
    number: "01",
    title: "Responsible Sourcing",
    description:
      "Considering supplier information, product requirements and responsible business practices when evaluating international sourcing opportunities.",
    icon: Leaf,
  },
  {
    number: "02",
    title: "Supply-Chain Efficiency",
    description:
      "Supporting clear coordination between suppliers, buyers and relevant trading partners to help create efficient supply processes.",
    icon: Truck,
  },
  {
    number: "03",
    title: "Resource Efficiency",
    description:
      "Supporting practical approaches that consider product requirements, supply planning and efficient coordination across international trade.",
    icon: TrendingUp,
  },
  {
    number: "04",
    title: "Compliance",
    description:
      "Maintaining awareness of relevant product, documentation and international trade requirements throughout the sourcing process.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Long-Term Partnerships",
    description:
      "Building professional relationships with suppliers, manufacturers and buyers with a focus on long-term cooperation.",
    icon: Handshake,
  },
  {
    number: "06",
    title: "Continuous Improvement",
    description:
      "Continuously looking for practical ways to improve sourcing, coordination and supply processes as requirements evolve.",
    icon: Globe2,
  },
];

const principles = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the product, supply requirement and commercial context before progressing.",
  },
  {
    number: "02",
    title: "Evaluate",
    description:
      "Consider relevant supplier, product, documentation and supply information.",
  },
  {
    number: "03",
    title: "Coordinate",
    description:
      "Keep communication and requirements clear between the relevant trading partners.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Look for practical improvements that support efficient and responsible international trade.",
  },
];

export default function SustainabilityPage() {
  return (
    <main className="sustainability-page">
      {/* HEADER */}
      <header className="sustainability-header">
        <div className="sustainability-container sustainability-header-inner">
          <a
            href="/"
            className="sustainability-logo"
            aria-label="OpenButani home"
          >
            OpenButani
          </a>

          <nav
            className="sustainability-nav"
            aria-label="Main navigation"
          >
            <a href="/about">About</a>
            <a href="/products">Products</a>
            <a href="/industries">Industries</a>
            <a href="/global-trade">Global Trade</a>
            <a href="/what-we-do">What We Do</a>
            <a href="/quality-compliance">Quality &amp; Compliance</a>
            <a
              href="/sustainability"
              aria-current="page"
            >
              Sustainability
            </a>
            <a href="/contact">Contact</a>
          </nav>

          <a
            href="/request-a-quote"
            className="sustainability-header-cta"
          >
            Request a Quote
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="sustainability-hero">
        <div className="sustainability-container sustainability-hero-content">
          <div>
            <p className="section-eyebrow">
              SUSTAINABILITY
            </p>

            <h1>
              Responsible growth
              <br />
              through global trade.
            </h1>

            <p className="sustainability-hero-description">
              OpenButani approaches international sourcing and
              trading with a focus on responsible business,
              efficient supply coordination, compliance and
              long-term relationships.
            </p>

            <div className="sustainability-hero-actions">
              <a
                href="/request-a-quote"
                className="sustainability-primary-button"
              >
                Start a Conversation
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                />
              </a>

              <a
                href="#our-approach"
                className="sustainability-secondary-button"
              >
                Explore Our Approach
              </a>
            </div>
          </div>

          <div className="sustainability-hero-side">
            <span>01</span>

            <div />

            <p>
              Responsible
              <br />
              Sourcing
              <br />
              Efficient
              <br />
              Supply
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section
        className="sustainability-intro"
        id="our-approach"
      >
        <div className="sustainability-container sustainability-intro-grid">
          <div>
            <p className="section-eyebrow">
              OUR APPROACH
            </p>

            <h2>
              Sustainability through
              <br />
              responsible practice.
            </h2>
          </div>

          <div className="sustainability-intro-content">
            <p>
              Responsible international trade involves more
              than the movement of products. It also requires
              attention to sourcing practices, supply-chain
              coordination, compliance and long-term business
              relationships.
            </p>

            <p>
              Our approach focuses on practical areas where
              responsible business practices can support
              efficient and sustainable long-term trading
              relationships.
            </p>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY AREAS */}
      <section className="sustainability-areas">
        <div className="sustainability-container">
          <div className="sustainability-section-heading">
            <div>
              <p className="section-eyebrow">
                OUR FOCUS
              </p>

              <h2>
                Practical principles
                <br />
                for responsible trade.
              </h2>
            </div>

            <p>
              We focus on practical areas that support
              responsible sourcing, efficient supply
              coordination and long-term international
              relationships.
            </p>
          </div>

          <div className="sustainability-grid">
            {sustainabilityAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  className="sustainability-card"
                  key={area.title}
                >
                  <div className="sustainability-card-top">
                    <span>{area.number}</span>

                    <div className="sustainability-card-icon">
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
                    className="sustainability-card-link"
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

      {/* PRINCIPLES */}
      <section className="sustainability-principles">
        <div className="sustainability-container sustainability-principles-grid">
          <div className="sustainability-principles-heading">
            <p className="section-eyebrow">
              RESPONSIBLE BUSINESS
            </p>

            <h2>
              A practical path
              <br />
              from sourcing to supply.
            </h2>

            <p>
              Responsible business is built through clear
              requirements, informed decisions and consistent
              coordination throughout the trading process.
            </p>
          </div>

          <div className="sustainability-principles-list">
            {principles.map((principle) => (
              <div
                className="sustainability-principle"
                key={principle.number}
              >
                <span>{principle.number}</span>

                <div>
                  <h3>{principle.title}</h3>

                  <p>{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LONG-TERM PARTNERSHIPS */}
      <section className="sustainability-partnerships">
        <div className="sustainability-container sustainability-partnerships-grid">
          <div className="sustainability-partnerships-visual">
            <div className="sustainability-partnerships-circle">
              <Handshake
                size={52}
                strokeWidth={1.3}
                aria-hidden="true"
              />
            </div>

            <div className="sustainability-partnerships-line" />

            <span>
              LONG-TERM
              <br />
              RELATIONSHIPS
            </span>
          </div>

          <div className="sustainability-partnerships-content">
            <p className="section-eyebrow">
              LONG-TERM PARTNERSHIPS
            </p>

            <h2>
              Building relationships
              <br />
              that create lasting value.
            </h2>

            <p>
              International trading relationships are built
              over time through clear communication,
              consistent coordination and a shared
              understanding of requirements.
            </p>

            <p>
              OpenButani aims to develop professional
              relationships with suppliers, manufacturers and
              buyers that support long-term international
              cooperation.
            </p>

            <a
              href="/about"
              className="sustainability-text-link"
            >
              Learn About OpenButani
              <ArrowRight
                size={16}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </section>

      {/* RESPONSIBLE COMMUNICATION */}
      <section className="sustainability-responsible">
        <div className="sustainability-container sustainability-responsible-inner">
          <div>
            <p className="section-eyebrow">
              RESPONSIBLE COMMUNICATION
            </p>

            <h2>
              Clear commitments.
              <br />
              No unsupported claims.
            </h2>
          </div>

          <div className="sustainability-responsible-content">
            <p>
              OpenButani communicates its sustainability
              approach based on practices and commitments that
              are relevant to the business and its supply
              relationships.
            </p>

            <p>
              We do not present environmental certifications,
              emissions reductions, sustainability awards or
              other formal claims unless they are applicable
              and appropriately verified.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="sustainability-final-cta">
        <div className="sustainability-container sustainability-final-cta-inner">
          <div>
            <p className="section-eyebrow">
              START A CONVERSATION
            </p>

            <h2>
              Looking for a
              <br />
              responsible supply partner?
            </h2>

            <p>
              Tell us about your sourcing or trading
              requirement and let us understand how we can
              support your international supply needs.
            </p>
          </div>

          <a
            href="/request-a-quote"
            className="sustainability-primary-button"
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