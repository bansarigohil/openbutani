import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Handshake,
  PackageCheck,
  Search,
  ShieldCheck,
  Truck,
} from "lucide-react";

const tradingCategories = [
  {
    number: "01",
    title: "Chemicals",
    text: "Chemical raw materials and products serving industrial and commercial requirements, including selected specialty and industrial chemical categories.",
    href: "/products/chemicals",
  },
  {
    number: "02",
    title: "Plastics & Polymers",
    text: "Polymer materials and plastics used across manufacturing, packaging, construction and other industrial applications.",
    href: "/products/plastics-polymers",
  },
  {
    number: "03",
    title: "Industrial Products",
    text: "Industrial materials and products supporting manufacturing, processing and other commercial applications.",
    href: "/products/industrial-products",
  },
  {
    number: "04",
    title: "Other Commodities",
    text: "Selected commodities and trading categories based on established supply opportunities and confirmed OpenButani activities.",
    href: "/products/other-commodities",
  },
];

const services = [
  {
    icon: Search,
    number: "01",
    title: "Global Sourcing",
    text: "Identifying suitable suppliers and supply opportunities based on product requirements, specifications, quantity and destination.",
  },
  {
    icon: Handshake,
    number: "02",
    title: "Trading",
    text: "Connecting supply and demand through international commercial transactions across our product categories.",
  },
  {
    icon: PackageCheck,
    number: "03",
    title: "Procurement",
    text: "Supporting product and supplier requirements by coordinating sourcing, commercial information and purchasing needs.",
  },
  {
    icon: Truck,
    number: "04",
    title: "Import & Export",
    text: "Supporting international trade requirements and coordinating the information and documentation needed for cross-border transactions.",
  },
  {
    icon: Globe2,
    number: "05",
    title: "Supply Coordination",
    text: "Helping coordinate the parties involved in an international supply process, from suppliers and buyers to relevant trade partners.",
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "Market Access",
    text: "Connecting businesses with international supply and demand opportunities across selected markets.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    text: "We begin by understanding the product requirement, specification, quantity, application, destination and commercial needs.",
  },
  {
    number: "02",
    title: "Source",
    text: "We identify relevant suppliers and supply opportunities that match the requirement.",
  },
  {
    number: "03",
    title: "Evaluate",
    text: "We consider product information, specifications, supplier suitability and commercial requirements before moving forward.",
  },
  {
    number: "04",
    title: "Coordinate",
    text: "We coordinate communication, documentation and commercial requirements between the relevant parties.",
  },
  {
    number: "05",
    title: "Supply",
    text: "We support the international supply process through the agreed trade and delivery arrangements.",
  },
];

const industries = [
  "Chemical Manufacturing",
  "Pharmaceuticals",
  "Plastics & Packaging",
  "Automotive",
  "Construction",
  "Agriculture",
  "Water Treatment",
  "Industrial Manufacturing",
  "Food & Nutrition",
  "Textiles",
];

const values = [
  {
    title: "Global Sourcing",
    text: "Connecting customers with relevant international supply opportunities.",
  },
  {
    title: "Product Understanding",
    text: "Looking beyond the product name to understand specification, grade, application and requirements.",
  },
  {
    title: "International Coordination",
    text: "Bringing suppliers, buyers and relevant trade partners together through structured communication.",
  },
  {
    title: "Supply Solutions",
    text: "Supporting customers with sourcing and supply requirements rather than simply presenting a product list.",
  },
  {
    title: "Long-Term Relationships",
    text: "Building professional relationships with suppliers, manufacturers and customers for sustainable international business.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Header */}
      <header className="about-header">
        <div className="about-header-inner">
          <Link href="/" className="about-logo">
            OpenButani
          </Link>

          <nav className="about-nav" aria-label="Main navigation">
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/global-trade">Global Trade</Link>
            <Link href="/what-we-do">What We Do</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <Link href="/request-a-quote" className="about-header-cta">
            Request a Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="about-hero">
        <div className="about-container">
          <div className="about-hero-content">
            <p className="about-eyebrow">ABOUT OPENBUTANI</p>

            <h1>
              Connecting Global Supply
              <br />
              With Global Demand.
            </h1>

            <p className="about-hero-text">
              OpenButani connects suppliers, manufacturers and buyers through
              international sourcing, trading and supply solutions across
              chemicals, plastics and polymers, industrial products and
              selected trading categories.
            </p>

            <div className="about-hero-actions">
              <Link href="/what-we-do" className="about-button-primary">
                Explore What We Do
                <ArrowRight size={17} />
              </Link>

              <Link href="/request-a-quote" className="about-button-secondary">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-who">
        <div className="about-container">
          <div className="about-section-grid">
            <div>
              <p className="about-eyebrow">WHO WE ARE</p>

              <h2>
                An International Trading
                <br />
                & Sourcing Partner.
              </h2>
            </div>

            <div className="about-copy">
              <p>
                OpenButani is an international trading and sourcing company
                focused on connecting global suppliers, manufacturers and
                buyers.
              </p>

              <p>
                Our business brings together product sourcing, supplier
                relationships, international trading and supply coordination
                across chemicals, plastics and polymers, industrial products
                and other selected commodities.
              </p>

              <p>
                We understand that international supply is about more than
                finding a product. It requires the right specification,
                suitable supply, commercial clarity, documentation,
                coordination and dependable communication between the parties
                involved.
              </p>

              <p>
                That is where OpenButani aims to create value — connecting the
                right requirements with the right supply opportunities and
                supporting the process from sourcing through international
                delivery coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Trade */}
      <section className="about-trade">
        <div className="about-container">
          <div className="about-section-heading">
            <div>
              <p className="about-eyebrow">WHAT WE TRADE</p>

              <h2>
                Products That Connect
                <br />
                Industries and Markets.
              </h2>
            </div>

            <p>
              Our trading activities are organized around core product areas,
              with additional commodities and products where applicable.
            </p>
          </div>

          <div className="about-category-grid">
            {tradingCategories.map((category) => (
              <Link
                href={category.href}
                className="about-category-card"
                key={category.number}
              >
                <span>{category.number}</span>

                <div>
                  <h3>{category.title}</h3>
                  <p>{category.text}</p>
                </div>

                <ArrowRight size={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Operate */}
      <section className="about-global">
        <div className="about-container">
          <div className="about-global-grid">
            <div>
              <p className="about-eyebrow">WHERE WE OPERATE</p>

              <h2>
                Connecting Supply
                <br />
                Across International Markets.
              </h2>

              <p className="about-global-intro">
                International trade is built through relationships across
                markets. OpenButani works to connect suppliers, manufacturers
                and buyers across international supply chains, supporting
                cross-border sourcing and commercial opportunities where
                suitable supply and demand meet.
              </p>

              <Link href="/global-trade" className="about-text-link">
                Explore Our Global Trade
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="about-global-points">
              <div className="about-global-point">
                <span>01</span>
                <div>
                  <h3>Global Supply</h3>
                  <p>
                    Identifying suitable suppliers and sourcing opportunities.
                  </p>
                </div>
              </div>

              <div className="about-global-point">
                <span>02</span>
                <div>
                  <h3>International Markets</h3>
                  <p>
                    Connecting supply with customers and commercial demand.
                  </p>
                </div>
              </div>

              <div className="about-global-point">
                <span>03</span>
                <div>
                  <h3>Trade Corridors</h3>
                  <p>
                    Coordinating relevant origin, destination and logistics
                    requirements.
                  </p>
                </div>
              </div>

              <div className="about-global-point">
                <span>04</span>
                <div>
                  <h3>Cross-Border Supply</h3>
                  <p>
                    Supporting documentation, commercial coordination and
                    international supply requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="about-services">
        <div className="about-container">
          <div className="about-section-heading">
            <div>
              <p className="about-eyebrow">WHAT WE DO</p>

              <h2>
                From Sourcing
                <br />
                to Supply.
              </h2>
            </div>

            <p>
              OpenButani brings together activities around the international
              movement of products and materials.
            </p>
          </div>

          <div className="about-service-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div className="about-service-card" key={service.number}>
                  <div className="about-service-top">
                    <span>{service.number}</span>
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="about-process">
        <div className="about-container">
          <div className="about-process-heading">
            <p className="about-eyebrow">HOW WE WORK</p>

            <h2>
              A Structured Approach
              <br />
              to International Supply.
            </h2>

            <p>
              Every requirement is different. Our approach starts with
              understanding what the customer needs and then working through
              the supply process step by step.
            </p>
          </div>

          <div className="about-process-list">
            {processSteps.map((step) => (
              <div className="about-process-item" key={step.number}>
                <span>{step.number}</span>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="about-industries">
        <div className="about-container">
          <div className="about-industries-heading">
            <p className="about-eyebrow">INDUSTRIES WE SERVE</p>

            <h2>
              Supporting Businesses
              <br />
              Across Industrial Markets.
            </h2>

            <p>
              Our products and sourcing activities can support a range of
              industrial and commercial applications.
            </p>
          </div>

          <div className="about-industry-grid">
            {industries.map((industry, index) => (
              <div className="about-industry-item" key={industry}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{industry}</strong>
                <ArrowRight size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why OpenButani */}
      <section className="about-values">
        <div className="about-container">
          <div className="about-section-heading">
            <div>
              <p className="about-eyebrow">WHY OPENBUTANI</p>

              <h2>
                More Than
                <br />
                a Product Supplier.
              </h2>
            </div>

            <p>
              International trading requires coordination, communication and
              an understanding of the supply chain behind every transaction.
            </p>
          </div>

          <div className="about-values-list">
            {values.map((value, index) => (
              <div className="about-value-item" key={value.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <h3>{value.title}</h3>

                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="about-quality">
        <div className="about-container">
          <div className="about-quality-grid">
            <div>
              <p className="about-eyebrow">QUALITY & COMPLIANCE</p>

              <h2>
                Clear Information.
                <br />
                Structured Coordination.
              </h2>
            </div>

            <div>
              <p className="about-quality-intro">
                Quality begins with understanding what is required. Depending
                on the product and transaction, our approach can include:
              </p>

              <div className="about-quality-list">
                <span>Product Specifications</span>
                <span>Supplier Qualification</span>
                <span>Technical & Commercial Documentation</span>
                <span>Inspection Coordination</span>
                <span>Quality Coordination</span>
                <span>Traceability Where Applicable</span>
                <span>Regulatory Awareness</span>
              </div>

              <Link href="/quality-compliance" className="about-text-link">
                Explore Quality & Compliance
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="about-sustainability">
        <div className="about-container">
          <div className="about-sustainability-heading">
            <p className="about-eyebrow">SUSTAINABILITY</p>

            <h2>
              Responsible Trade
              <br />
              for Long-Term Value.
            </h2>

            <p>
              Responsible international trade is about creating long-term
              value while considering the efficiency and impact of the supply
              chain.
            </p>
          </div>

          <div className="about-sustainability-grid">
            <div>
              <strong>Responsible Sourcing</strong>
              <p>
                Working toward responsible and transparent sourcing
                relationships.
              </p>
            </div>

            <div>
              <strong>Supply-Chain Efficiency</strong>
              <p>
                Supporting efficient coordination across international supply
                processes.
              </p>
            </div>

            <div>
              <strong>Resource Efficiency</strong>
              <p>
                Considering opportunities to improve the efficient use of
                resources across supply activities.
              </p>
            </div>

            <div>
              <strong>Compliance</strong>
              <p>
                Maintaining awareness of applicable commercial, regulatory and
                supply requirements.
              </p>
            </div>

            <div>
              <strong>Long-Term Partnerships</strong>
              <p>
                Building relationships that support sustainable business over
                the long term.
              </p>
            </div>

            <div>
              <strong>Continuous Improvement</strong>
              <p>
                Continuously improving how we source, coordinate and support
                international supply.
              </p>
            </div>
          </div>

          <Link href="/sustainability" className="about-text-link">
            Explore Sustainability
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="about-final-cta">
        <div className="about-container">
          <div className="about-final-cta-inner">
            <div>
              <p className="about-eyebrow">LET&apos;S CONNECT</p>

              <h2>
                Let&apos;s Build the Right
                <br />
                Supply Solution.
              </h2>

              <p>
                Tell us what you are looking for, including the product,
                quantity, specification, application and destination.
              </p>
            </div>

            <div className="about-final-actions">
              <Link
                href="/request-a-quote"
                className="about-button-primary"
              >
                Request a Quote
                <ArrowRight size={17} />
              </Link>

              <Link href="/contact" className="about-button-secondary">
                Contact OpenButani
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}