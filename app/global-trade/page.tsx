import Image from "next/image";
import Header from "@/components/Header";

import {
  Globe2,
  ArrowLeftRight,
  Ship,
  Network,
  Search,
  ClipboardCheck,
  Truck,
  ArrowRight,
} from "lucide-react";

const tradeActivities = [
  {
    number: "01",
    title: "Global Sourcing",
    description:
      "Connecting product requirements with suitable international sourcing opportunities across global markets.",
    icon: Search,
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
    title: "Import & Export",
    description:
      "Supporting international product movement through structured import and export coordination.",
    icon: Ship,
  },
  {
    number: "04",
    title: "Supply Coordination",
    description:
      "Coordinating product information, commercial requirements and supply details between trading partners.",
    icon: Network,
  },
];

const tradeProcess = [
  {
    number: "01",
    title: "Requirement",
    description:
      "Understand the product, specification, quantity, application and destination requirements.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Source",
    description:
      "Identify suitable international sourcing opportunities based on the requirement.",
    icon: Search,
  },
  {
    number: "03",
    title: "Evaluate",
    description:
      "Review product information, specifications and relevant commercial requirements.",
    icon: Globe2,
  },
  {
    number: "04",
    title: "Coordinate",
    description:
      "Coordinate supply, commercial information and communication between trading partners.",
    icon: Network,
  },
  {
    number: "05",
    title: "Supply",
    description:
      "Support a clear and coordinated path from international sourcing to supply.",
    icon: Truck,
  },
];

export default function GlobalTradePage() {
  return (
    <main className="global-trade-page">

      {/* HEADER */}

      <Header />

      {/* HERO */}

      <section className="global-trade-hero">
        <div className="global-trade-hero-image">
          <Image
            src="/images/global-trade.jpg"
            alt="International global trade and supply operations"
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="global-trade-hero-overlay" />

        <div className="global-trade-container global-trade-hero-content">
          <p className="section-eyebrow">
            GLOBAL TRADE
          </p>

          <h1>
            Connecting markets
            <br />
            across borders.
          </h1>

          <p className="global-trade-hero-description">
            OpenButani connects international supply and demand through
            sourcing, trading and supply solutions across global markets.
          </p>

          <div className="global-trade-hero-actions">
            <a
              href="/request-a-quote"
              className="global-trade-primary-button"
            >
              Request a Quote

              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </a>

            <a
              href="#trade-network"
              className="global-trade-secondary-button"
            >
              Explore Our Trade Network
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="global-trade-intro">
        <div className="global-trade-container global-trade-intro-grid">
          <div className="global-trade-intro-heading">
            <p className="section-eyebrow">
              INTERNATIONAL TRADE
            </p>

            <h2>
              Connecting supply
              <br />
              with global demand.
            </h2>
          </div>

          <div className="global-trade-intro-content">
            <p>
              International trade requires more than connecting two
              businesses. It involves understanding requirements, identifying
              suitable supply opportunities and coordinating product and
              commercial information.
            </p>

            <p>
              OpenButani works across international markets to connect
              suppliers, manufacturers and buyers through sourcing, trading
              and supply coordination.
            </p>
          </div>
        </div>
      </section>

      {/* TRADE NETWORK */}

      <section
        className="global-trade-network"
        id="trade-network"
      >
        <div className="global-trade-container">
          <div className="global-trade-section-heading">
            <div>
              <p className="section-eyebrow">
                GLOBAL TRADE NETWORK
              </p>

              <h2>
                Bringing supply
                <br />
                and demand together.
              </h2>
            </div>

            <p>
              OpenButani works as a connection point between international
              supply sources and businesses looking for products and sourcing
              opportunities.
            </p>
          </div>

          <div className="global-trade-network-flow">
            <div className="global-trade-network-node">
              <span>01</span>

              <div className="global-trade-network-icon">
                <Globe2
                  size={25}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <h3>Suppliers</h3>

              <p>
                International supply sources and manufacturing relationships.
              </p>
            </div>

            <div className="global-trade-network-arrow">
              <ArrowRight
                size={28}
                aria-hidden="true"
              />
            </div>

            <div className="global-trade-network-node global-trade-network-main">
              <span>02</span>

              <div className="global-trade-network-icon">
                <Network
                  size={25}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <h3>OpenButani</h3>

              <p>
                Sourcing, trading and supply coordination.
              </p>
            </div>

            <div className="global-trade-network-arrow">
              <ArrowRight
                size={28}
                aria-hidden="true"
              />
            </div>

            <div className="global-trade-network-node">
              <span>03</span>

              <div className="global-trade-network-icon">
                <ArrowLeftRight
                  size={25}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <h3>Buyers</h3>

              <p>
                Manufacturers, businesses and international customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRADE ACTIVITIES */}

      <section className="global-trade-activities">
        <div className="global-trade-container">
          <div className="global-trade-section-heading">
            <div>
              <p className="section-eyebrow">
                TRADE ACTIVITIES
              </p>

              <h2>
                Supporting the
                <br />
                trading journey.
              </h2>
            </div>

            <p>
              Our activities are focused on connecting international supply
              opportunities with business requirements.
            </p>
          </div>

          <div className="global-trade-activities-grid">
            {tradeActivities.map((activity) => {
              const Icon = activity.icon;

              return (
                <article
                  className="global-trade-activity-card"
                  key={activity.title}
                >
                  <div className="global-trade-activity-top">
                    <span>{activity.number}</span>

                    <div className="global-trade-activity-icon">
                      <Icon
                        size={21}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <h3>{activity.title}</h3>

                  <p>{activity.description}</p>

                  <a
                    href="/request-a-quote"
                    className="global-trade-card-link"
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

      {/* HOW TRADE WORKS */}

      <section className="global-trade-process">
        <div className="global-trade-container">
          <div className="global-trade-process-heading">
            <p className="section-eyebrow">
              HOW TRADE WORKS
            </p>

            <h2>
              A clear path from
              <br />
              requirement to supply.
            </h2>
          </div>

          <div className="global-trade-process-list">
            {tradeProcess.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  className="global-trade-process-item"
                  key={step.number}
                >
                  <span className="global-trade-process-number">
                    {step.number}
                  </span>

                  <div className="global-trade-process-icon">
                    <Icon
                      size={21}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="global-trade-process-title">
                    <h3>{step.title}</h3>
                  </div>

                  <p>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}

      <section className="global-trade-presence">
        <div className="global-trade-container global-trade-presence-grid">
          <div className="global-trade-presence-image">
            <Image
              src="/images/global-trade.jpg"
              alt="Global trade and international supply"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>

          <div className="global-trade-presence-content">
            <p className="section-eyebrow">
              GLOBAL PRESENCE
            </p>

            <h2>
              Built around
              <br />
              international markets.
            </h2>

            <p>
              OpenButani&apos;s approach is designed around international
              sourcing, trading and supply relationships rather than a single
              local market.
            </p>

            <p>
              We focus on connecting relevant suppliers, manufacturers and
              buyers according to product requirements, commercial needs and
              destination markets.
            </p>

            <div className="global-trade-presence-points">
              <div>
                <span>01</span>
                <strong>International Sourcing</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Cross-Border Trading</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Supply Coordination</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="global-trade-final-cta">
        <div className="global-trade-container global-trade-final-cta-inner">
          <div>
            <p className="section-eyebrow">
              START A CONVERSATION
            </p>

            <h2>
              Looking for a
              <br />
              global supply partner?
            </h2>

            <p>
              Tell us what you are looking for and let us understand your
              international sourcing or trading requirement.
            </p>
          </div>

          <a
            href="/request-a-quote"
            className="global-trade-primary-button"
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