"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftRight, Boxes, Globe2 } from "lucide-react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main>
      {/* =========================
          HEADER
      ========================== */}

      <header className="site-header">
        <div className="header-container">

          {/* LOGO */}
          <Link
            href="/"
            className="logo-link"
            aria-label="OpenButani home"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/images/openbutani-logo-wordmark.png"
              alt="OpenButani"
              width={629}
              height={155}
              priority
              className="site-logo"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="main-navigation"
            aria-label="Main navigation"
          >
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/global-trade">Global Trade</Link>
            <Link href="/what-we-do">What We Do</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* DESKTOP QUOTE BUTTON */}
          <Link
            href="/request-a-quote"
            className="header-quote-button"
          >
            Request a Quote
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className={`mobile-menu-button ${
              isMobileMenuOpen ? "is-open" : ""
            }`}
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() =>
              setIsMobileMenuOpen((open) => !open)
            }
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <nav
          id="mobile-navigation"
          className={`mobile-navigation ${
            isMobileMenuOpen ? "is-open" : ""
          }`}
          aria-label="Mobile navigation"
        >
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>

          <Link
            href="/products"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </Link>

          <Link
            href="/industries"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Industries
          </Link>

          <Link
            href="/global-trade"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Global Trade
          </Link>

          <Link
            href="/what-we-do"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            What We Do
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="/request-a-quote"
            className="mobile-navigation-quote"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Request a Quote
          </Link>
        </nav>
      </header>

      {/* =========================
          HERO
      ========================== */}

      <section className="hero">
        <div
          className="hero-slider"
          aria-hidden="true"
        >
          <div className="hero-slide hero-slide-one" />
          <div className="hero-slide hero-slide-two" />
          <div className="hero-slide hero-slide-three" />
          <div className="hero-slide hero-slide-four" />
        </div>

        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-content-inner">
            <p className="hero-eyebrow">
              INTERNATIONAL TRADING &amp; GLOBAL SOURCING
            </p>

            <h1>
              Connecting Global Supply
              <br />
              With Global Demand.
            </h1>

            <p className="hero-description">
              OpenButani connects suppliers, manufacturers and
              buyers through international sourcing, trading and
              supply solutions across chemicals, polymers and
              industrial products.
            </p>

            <div className="hero-actions">
              <Link
                href="/request-a-quote"
                className="hero-button hero-button-primary"
              >
                Request a Quote
              </Link>

              <Link
                href="/products"
                className="hero-button hero-button-secondary"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>

        <div
          className="hero-slider-status"
          aria-hidden="true"
        >
          <span className="indicator-one" />
          <span className="indicator-two" />
          <span className="indicator-three" />
          <span className="indicator-four" />
        </div>
      </section>
            {/* =========================
          TRADING PROPOSITION
      ========================== */}

      <section className="trading-proposition">
        <div className="trading-container">
          <div className="trading-intro">
            <div className="trading-intro-copy">
              <p className="section-eyebrow">
                WHAT WE DO
              </p>

              <h2>
                Global trade,
                <br />
                built around reliable supply.
              </h2>
            </div>

            <div className="trading-intro-description">
              <p>
                OpenButani connects international supply with
                customer demand through sourcing, trading and
                supply solutions across industrial markets.
              </p>
            </div>
          </div>

          <div className="trading-capabilities">
            <article className="trading-card">
              <div className="trading-card-number">
                01
              </div>

              <div
                className="trading-card-icon"
                aria-hidden="true"
              >
                <Globe2
                  size={28}
                  strokeWidth={1.7}
                />
              </div>

              <div className="trading-card-content">
                <h3>
                  Global Sourcing
                </h3>

                <p>
                  Connecting buyers with suitable international
                  supply based on product requirements,
                  specifications and commercial needs.
                </p>

                <Link
                  href="/what-we-do"
                  className="trading-card-link"
                >
                  Explore sourcing
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>

            <article className="trading-card">
              <div className="trading-card-number">
                02
              </div>

              <div
                className="trading-card-icon"
                aria-hidden="true"
              >
                <ArrowLeftRight
                  size={28}
                  strokeWidth={1.7}
                />
              </div>

              <div className="trading-card-content">
                <h3>
                  International Trading
                </h3>

                <p>
                  Connecting supply and demand across
                  international markets through a focused B2B
                  trading approach.
                </p>

                <Link
                  href="/what-we-do"
                  className="trading-card-link"
                >
                  Explore trading
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>

            <article className="trading-card">
              <div className="trading-card-number">
                03
              </div>

              <div
                className="trading-card-icon"
                aria-hidden="true"
              >
                <Boxes
                  size={28}
                  strokeWidth={1.7}
                />
              </div>

              <div className="trading-card-content">
                <h3>
                  Supply Solutions
                </h3>

                <p>
                  Supporting customers with international
                  supply requirements across chemicals, polymers
                  and industrial products.
                </p>

                <Link
                  href="/what-we-do"
                  className="trading-card-link"
                >
                  Explore solutions
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>
          </div>

          <div className="trading-bottom">
            <p>
              International sourcing
              <span>•</span>
              Trading
              <span>•</span>
              Industrial supply
            </p>

            <Link
              href="/what-we-do"
              className="trading-bottom-link"
            >
              Discover how we work
              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          PRODUCTS
      ========================== */}

      <section className="products-section">
        <div className="products-container">
          <div className="products-intro">
            <div className="products-intro-copy">
              <p className="section-eyebrow">
                PRODUCTS
              </p>

              <h2>
                Materials that move
                <br />
                global industry.
              </h2>
            </div>

            <div className="products-intro-description">
              <p>
                Explore OpenButani&apos;s product categories across
                chemicals, plastics and polymers, and industrial
                products.
              </p>
            </div>
          </div>

          <div className="products-grid">
            <article className="product-category-card">
              <div className="product-category-number">
                01
              </div>

              <div className="product-category-content">
                <h3>
                  Chemicals
                </h3>

                <p>
                  Chemical products for industrial and
                  commercial supply requirements.
                </p>

                <Link
                  href="/products"
                  className="product-category-link"
                >
                  Explore products
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>

            <article className="product-category-card">
              <div className="product-category-number">
                02
              </div>

              <div className="product-category-content">
                <h3>
                  Plastics &amp; Polymers
                </h3>

                <p>
                  Polymer materials and related products for
                  industrial applications.
                </p>

                <Link
                  href="/products"
                  className="product-category-link"
                >
                  Explore products
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>

            <article className="product-category-card">
              <div className="product-category-number">
                03
              </div>

              <div className="product-category-content">
                <h3>
                  Industrial Products
                </h3>

                <p>
                  Industrial materials supporting a range of
                  manufacturing and supply requirements.
                </p>

                <Link
                  href="/products"
                  className="product-category-link"
                >
                  Explore products
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>
          </div>

          <div className="products-bottom">
            <p>
              Chemicals
              <span>•</span>
              Plastics &amp; Polymers
              <span>•</span>
              Industrial Products
            </p>

            <Link
              href="/products"
              className="products-bottom-link"
            >
              View product catalogue
              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
            {/* =========================
          INDUSTRIES
      ========================== */}

      <section className="industries-section">
        <div className="industries-container">
          <div className="industries-intro">
            <div className="industries-intro-copy">
              <p className="section-eyebrow">
                INDUSTRIES
              </p>

              <h2>
                Supporting industries
                <br />
                across global markets.
              </h2>
            </div>

            <div className="industries-intro-description">
              <p>
                OpenButani supports international supply
                requirements across selected industrial and
                manufacturing sectors.
              </p>
            </div>
          </div>

          <div className="industries-grid">
            <Link
              href="/industries/chemical-manufacturing"
              className="industry-card"
            >
              <span className="industry-number">
                01
              </span>

              <div>
                <h3>
                  Chemical Manufacturing
                </h3>

                <p>
                  Materials and supply solutions for chemical
                  manufacturing requirements.
                </p>
              </div>

              <span
                className="industry-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </Link>

            <Link
              href="/industries/pharmaceuticals"
              className="industry-card"
            >
              <span className="industry-number">
                02
              </span>

              <div>
                <h3>
                  Pharmaceuticals
                </h3>

                <p>
                  Supporting material sourcing and supply
                  requirements across pharmaceutical applications.
                </p>
              </div>

              <span
                className="industry-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </Link>

            <Link
              href="/industries/plastics-packaging"
              className="industry-card"
            >
              <span className="industry-number">
                03
              </span>

              <div>
                <h3>
                  Plastics &amp; Packaging
                </h3>

                <p>
                  Polymer and industrial material supply for
                  plastics and packaging applications.
                </p>
              </div>

              <span
                className="industry-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </Link>

            <Link
              href="/industries/automotive"
              className="industry-card"
            >
              <span className="industry-number">
                04
              </span>

              <div>
                <h3>
                  Automotive
                </h3>

                <p>
                  Industrial and polymer materials supporting
                  automotive supply requirements.
                </p>
              </div>

              <span
                className="industry-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </Link>

            <Link
              href="/industries/construction"
              className="industry-card"
            >
              <span className="industry-number">
                05
              </span>

              <div>
                <h3>
                  Construction
                </h3>

                <p>
                  Materials supporting construction and related
                  industrial applications.
                </p>
              </div>

              <span
                className="industry-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </Link>

            <Link
              href="/industries/water-treatment"
              className="industry-card"
            >
              <span className="industry-number">
                06
              </span>

              <div>
                <h3>
                  Water Treatment
                </h3>

                <p>
                  Products and supply support for water treatment
                  requirements.
                </p>
              </div>

              <span
                className="industry-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>

          <div className="industries-bottom">
            <p>
              Industrial markets
              <span>•</span>
              Global supply
              <span>•</span>
              B2B solutions
            </p>

            <Link
              href="/industries"
              className="industries-bottom-link"
            >
              Explore industries
              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          GLOBAL TRADE
      ========================== */}

      <section
        className="global-trade-section"
        id="global-trade"
      >
        <div className="global-trade-container">
          <div className="global-trade-header">
            <div className="global-trade-heading">
              <p className="section-eyebrow">
                GLOBAL TRADE
              </p>

              <h2>
                Connecting markets
                <br />
                across borders.
              </h2>
            </div>

            <div className="global-trade-intro-text">
              <p>
                OpenButani connects international supply and demand
                through sourcing, trading and supply solutions across
                global markets.
              </p>
            </div>
          </div>

          <div className="global-trade-map-area">
            <div className="global-trade-map">
              <div className="map-line map-line-one" />
              <div className="map-line map-line-two" />
              <div className="map-line map-line-three" />

              <span className="map-region region-north-america">
                North America
              </span>

              <span className="map-region region-south-america">
                South America
              </span>

              <span className="map-region region-europe">
                Europe
              </span>

              <span className="map-region region-africa">
                Africa
              </span>

              <span className="map-region region-middle-east">
                Middle East
              </span>

              <span className="map-region region-asia">
                Asia
              </span>

              <span className="map-region region-oceania">
                Oceania
              </span>

              <span className="map-dot dot-north-america" />
              <span className="map-dot dot-south-america" />
              <span className="map-dot dot-europe" />
              <span className="map-dot dot-africa" />
              <span className="map-dot dot-middle-east" />
              <span className="map-dot dot-asia" />
              <span className="map-dot dot-oceania" />
            </div>

            <div className="global-trade-side">
              <p className="global-trade-label">
                INTERNATIONAL SUPPLY NETWORK
              </p>

              <h3>
                From sourcing
                <br />
                to delivery.
              </h3>

              <div className="global-trade-points">
                <div className="global-trade-point">
                  <span>01</span>
                  <strong>
                    Global Sourcing
                  </strong>
                </div>

                <div className="global-trade-point">
                  <span>02</span>
                  <strong>
                    International Trading
                  </strong>
                </div>

                <div className="global-trade-point">
                  <span>03</span>
                  <strong>
                    Import &amp; Export
                  </strong>
                </div>

                <div className="global-trade-point">
                  <span>04</span>
                  <strong>
                    Supply Coordination
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <div className="global-trade-bottom">
            <p>
              International sourcing
              <span>•</span>
              Global trading
              <span>•</span>
              Supply solutions
            </p>

            <Link href="/global-trade">
              Discover our global approach
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
            {/* =========================
          QUALITY & COMPLIANCE
      ========================== */}

      <section className="quality-section">
        <div className="quality-container">
          <div className="quality-intro">
            <div className="quality-intro-copy">
              <p className="section-eyebrow">
                QUALITY &amp; COMPLIANCE
              </p>

              <h2>
                Built around
                <br />
                confidence and control.
              </h2>
            </div>

            <div className="quality-intro-description">
              <p>
                OpenButani approaches international supply with
                attention to product requirements, supplier
                information, documentation and quality coordination.
              </p>
            </div>
          </div>

          <div className="quality-grid">
            <article className="quality-card">
              <span className="quality-number">
                01
              </span>

              <div>
                <h3>
                  Product Specifications
                </h3>

                <p>
                  Supporting product requirements through
                  specifications, technical information and customer
                  needs.
                </p>
              </div>
            </article>

            <article className="quality-card">
              <span className="quality-number">
                02
              </span>

              <div>
                <h3>
                  Supplier Qualification
                </h3>

                <p>
                  Reviewing relevant supplier information as part
                  of the sourcing and supply process.
                </p>
              </div>
            </article>

            <article className="quality-card">
              <span className="quality-number">
                03
              </span>

              <div>
                <h3>
                  Documentation
                </h3>

                <p>
                  Coordinating relevant product and commercial
                  documentation required for international supply.
                </p>
              </div>
            </article>

            <article className="quality-card">
              <span className="quality-number">
                04
              </span>

              <div>
                <h3>
                  Quality Coordination
                </h3>

                <p>
                  Supporting quality-related requirements between
                  suppliers and customers where applicable.
                </p>
              </div>
            </article>
          </div>

          <div className="quality-bottom">
            <p>
              Specifications
              <span>•</span>
              Documentation
              <span>•</span>
              Quality coordination
            </p>

            <Link
              href="/quality-compliance"
              className="quality-bottom-link"
            >
              Explore quality &amp; compliance
              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          SUSTAINABILITY
      ========================== */}

      <section className="sustainability-section">
        <div className="sustainability-container">
          <div className="sustainability-intro">
            <div className="sustainability-intro-copy">
              <p className="section-eyebrow">
                SUSTAINABILITY
              </p>

              <h2>
                Responsible trade,
                <br />
                built for the long term.
              </h2>
            </div>

            <div className="sustainability-intro-description">
              <p>
                OpenButani approaches international trade with a
                focus on responsible sourcing, efficient supply
                chains and long-term business relationships.
              </p>
            </div>
          </div>

          <div className="sustainability-main">
            <div className="sustainability-statement">
              <span
                className="sustainability-mark"
                aria-hidden="true"
              >
                +
              </span>

              <h3>
                Building supply relationships that create lasting
                value.
              </h3>

              <p>
                Our approach considers responsible sourcing,
                supply-chain efficiency, compliance and continuous
                improvement across international trading activities.
              </p>
            </div>

            <div className="sustainability-points">
              <article className="sustainability-point">
                <span>01</span>

                <div>
                  <h3>
                    Responsible Sourcing
                  </h3>

                  <p>
                    Considering responsible sourcing practices
                    across relevant supply relationships.
                  </p>
                </div>
              </article>

              <article className="sustainability-point">
                <span>02</span>

                <div>
                  <h3>
                    Supply-Chain Efficiency
                  </h3>

                  <p>
                    Supporting efficient coordination across
                    international supply activities.
                  </p>
                </div>
              </article>

              <article className="sustainability-point">
                <span>03</span>

                <div>
                  <h3>
                    Long-Term Partnerships
                  </h3>

                  <p>
                    Building durable relationships with suppliers
                    and customers through reliable business
                    practices.
                  </p>
                </div>
              </article>

              <article className="sustainability-point">
                <span>04</span>

                <div>
                  <h3>
                    Continuous Improvement
                  </h3>

                  <p>
                    Looking for practical opportunities to improve
                    processes, coordination and supply solutions.
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div className="sustainability-bottom">
            <p>
              Responsible sourcing
              <span>•</span>
              Supply efficiency
              <span>•</span>
              Long-term relationships
            </p>

            <Link
              href="/sustainability"
              className="sustainability-bottom-link"
            >
              Explore sustainability
              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
            {/* =========================
          INSIGHTS
      ========================== */}

      <section className="insights-section">
        <div className="insights-container">
          <div className="insights-intro">
            <div className="insights-intro-copy">
              <p className="section-eyebrow">
                INSIGHTS
              </p>

              <h2>
                Market knowledge
                <br />
                for better decisions.
              </h2>
            </div>

            <div className="insights-intro-description">
              <p>
                Practical perspectives on products, markets,
                international trade and supply-chain topics.
              </p>
            </div>
          </div>

          <div className="insights-grid">
            <article className="insight-card">
              <span className="insight-number">
                01
              </span>

              <div className="insight-card-content">
                <p className="insight-category">
                  MARKET INSIGHTS
                </p>

                <h3>
                  Understanding changing global supply markets.
                </h3>

                <p>
                  Perspectives on market movements, supply
                  requirements and international trading activity.
                </p>

                <Link
                  href="/insights"
                  className="insight-link"
                >
                  Read insights
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>

            <article className="insight-card">
              <span className="insight-number">
                02
              </span>

              <div className="insight-card-content">
                <p className="insight-category">
                  PRODUCT KNOWLEDGE
                </p>

                <h3>
                  Product knowledge for industrial buyers.
                </h3>

                <p>
                  Useful information to help understand products,
                  specifications and application requirements.
                </p>

                <Link
                  href="/insights"
                  className="insight-link"
                >
                  Explore knowledge
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>

            <article className="insight-card">
              <span className="insight-number">
                03
              </span>

              <div className="insight-card-content">
                <p className="insight-category">
                  INTERNATIONAL TRADE
                </p>

                <h3>
                  Practical perspectives on global trade.
                </h3>

                <p>
                  Insights into sourcing, supply coordination and
                  international business relationships.
                </p>

                <Link
                  href="/insights"
                  className="insight-link"
                >
                  Explore insights
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>
          </div>

          <div className="insights-bottom">
            <p>
              Market insights
              <span>•</span>
              Product knowledge
              <span>•</span>
              International trade
            </p>

            <Link
              href="/insights"
              className="insights-bottom-link"
            >
              View all insights
              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          FINAL CTA
      ========================== */}

      <section className="final-cta-section">
        <div className="final-cta-container">
          <div className="final-cta-main">
            <p className="section-eyebrow">
              START A CONVERSATION
            </p>

            <h2>
              Looking for a reliable
              <br />
              global supply partner?
            </h2>

            <p>
              Tell us what you are looking for and our team can
              discuss sourcing, trading and supply requirements.
            </p>

            <div className="final-cta-actions">
              <Link
                href="/request-a-quote"
                className="final-cta-button"
              >
                Request a Quote
                <span aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                href="/contact"
                className="final-cta-secondary"
              >
                Contact OpenButani
              </Link>
            </div>
          </div>

          <div className="final-cta-side">
            <div className="final-cta-side-line" />

            <p>
              Chemicals
              <span>•</span>
              Plastics &amp; Polymers
              <span>•</span>
              Industrial Products
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}