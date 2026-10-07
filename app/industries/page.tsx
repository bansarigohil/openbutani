import Image from "next/image";
import Header from "@/components/Header";

import {
  Factory,
  Pill,
  Package,
  Car,
  Building2,
  Wheat,
  Utensils,
  Droplets,
  Shirt,
  Cog,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    title: "Chemical Manufacturing",
    description:
      "Supporting chemical manufacturers with sourcing and supply solutions for industrial requirements.",
    image: "/images/chemical-manufacturing.jpg",
    icon: Factory,
  },
  {
    title: "Pharmaceuticals",
    description:
      "Connecting pharmaceutical supply requirements with suitable products and international sourcing channels.",
    image: "/images/pharmaceuticals.jpg",
    icon: Pill,
  },
  {
    title: "Plastics & Packaging",
    description:
      "Supporting plastics and packaging businesses with polymer and industrial material sourcing.",
    image: "/images/plastics-packaging.jpg",
    icon: Package,
  },
  {
    title: "Automotive",
    description:
      "Helping automotive-related businesses source materials and products required across their supply chains.",
    image: "/images/automotive.jpg",
    icon: Car,
  },
  {
    title: "Construction",
    description:
      "Supporting construction supply requirements through international sourcing and trading relationships.",
    image: "/images/construction.jpg",
    icon: Building2,
  },
  {
    title: "Agriculture",
    description:
      "Connecting agricultural supply requirements with international sourcing and trading opportunities.",
    image: "/images/agriculture.jpg",
    icon: Wheat,
  },
  {
    title: "Food & Nutrition",
    description:
      "Supporting food and nutrition businesses with sourcing and supply solutions for their requirements.",
    image: "/images/food-nutrition.jpg",
    icon: Utensils,
  },
  {
    title: "Water Treatment",
    description:
      "Supporting water-treatment applications through product sourcing and international supply coordination.",
    image: "/images/water-treatment.jpg",
    icon: Droplets,
  },
  {
    title: "Textiles",
    description:
      "Helping textile businesses access relevant materials and international supply sources.",
    image: "/images/textiles.jpg",
    icon: Shirt,
  },
  {
    title: "Industrial Manufacturing",
    description:
      "Supporting industrial manufacturers with requirement-based sourcing and supply coordination.",
    image: "/images/industrial-manufacturing.jpg",
    icon: Cog,
  },
];

export default function IndustriesPage() {
  return (
    <main className="industries-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="industries-hero">
        <div className="industries-hero-image">
          <Image
            src="/images/industrial-manufacturing.jpg"
            alt="Industrial manufacturing facility"
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="industries-hero-overlay" />

        <div className="industries-container industries-hero-content">
          <p className="section-eyebrow industries-hero-eyebrow">
            INDUSTRIES WE SERVE
          </p>

          <h1>
            Supporting industries
            <br />
            across global markets.
          </h1>

          <p className="industries-hero-description">
            OpenButani connects businesses with international sourcing,
            trading and supply solutions across a range of industrial sectors.
          </p>

          <a
            href="/request-a-quote"
            className="industries-primary-button"
          >
            Discuss Your Requirement

            <ArrowRight
              size={18}
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="industries-intro">
        <div className="industries-container industries-intro-grid">
          <div className="industries-intro-heading">
            <p className="section-eyebrow">
              INDUSTRY FOCUS
            </p>

            <h2>
              Connecting supply
              <br />
              with industry demand.
            </h2>
          </div>

          <div className="industries-intro-text">
            <p>
              Different industries have different material, product and supply
              requirements. OpenButani works across international markets to
              help connect those requirements with appropriate sourcing and
              trading opportunities.
            </p>

            <p>
              Our approach is requirement-driven, with attention to product
              specifications, supply availability, commercial requirements and
              international coordination.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="industries-list">
        <div className="industries-container">
          <div className="industries-section-heading">
            <p className="section-eyebrow">
              OUR INDUSTRIES
            </p>

            <h2>
              Markets where
              <br />
              supply matters.
            </h2>

            <p>
              Explore the industries that can benefit from OpenButani&apos;s
              international sourcing and trading approach.
            </p>
          </div>

          <div className="industries-grid">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  className="industry-card"
                  key={industry.title}
                >
                  <div className="industry-card-image">
                    <Image
                      src={industry.image}
                      alt={`${industry.title} industry`}
                      fill
                      sizes="(max-width: 820px) 100vw, 50vw"
                    />
                  </div>

                  <div className="industry-card-content">
                    <div
                      className="industry-card-icon"
                      aria-hidden="true"
                    >
                      <Icon
                        size={21}
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3>{industry.title}</h3>

                    <p>{industry.description}</p>

                    <a
                      href={`/request-a-quote?industry=${encodeURIComponent(
                        industry.title
                      )}`}
                      className="industry-card-link"
                    >
                      Discuss Your Requirement

                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW WE SUPPORT
      ===================================================== */}

      <section className="industries-support">
        <div className="industries-container industries-support-grid">
          <div className="industries-support-heading">
            <p className="section-eyebrow">
              HOW WE SUPPORT
            </p>

            <h2>
              From requirement
              <br />
              to supply.
            </h2>
          </div>

          <div className="industries-support-content">
            <div className="industries-support-item">
              <span>01</span>

              <div>
                <h3>
                  Requirement-Based Sourcing
                </h3>

                <p>
                  We start with your product, specification, quantity and
                  destination requirements to identify suitable sourcing
                  opportunities.
                </p>
              </div>
            </div>

            <div className="industries-support-item">
              <span>02</span>

              <div>
                <h3>
                  International Supply
                </h3>

                <p>
                  We connect international suppliers and buyers through
                  trading and sourcing relationships across global markets.
                </p>
              </div>
            </div>

            <div className="industries-support-item">
              <span>03</span>

              <div>
                <h3>
                  Supply Coordination
                </h3>

                <p>
                  We coordinate product information, commercial requirements
                  and supply details throughout the trading process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="industries-final-cta">
        <div className="industries-container industries-final-cta-inner">
          <div>
            <p className="section-eyebrow">
              START A CONVERSATION
            </p>

            <h2>
              Have a specific
              <br />
              industry requirement?
            </h2>

            <p>
              Tell us what you are looking for and our team can review your
              sourcing or supply requirement.
            </p>
          </div>

          <a
            href="/request-a-quote"
            className="industries-primary-button"
          >
            Request a Quote

            <ArrowRight
              size={18}
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        </div>
      </section>

    </main>
  );
}