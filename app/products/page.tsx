"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

import {
  ArrowRight,
  ChevronDown,
  Search,
} from "lucide-react";

type Product = {
  name: string;
  category: string;
  family: string;
  application: string;
  status: "Category / Family";
};

const products: Product[] = [
  // CHEMICALS
  {
    name: "Acids",
    category: "Chemicals",
    family: "Acids",
    application: "Industrial & Manufacturing",
    status: "Category / Family",
  },
  {
    name: "Additives",
    category: "Chemicals",
    family: "Additives",
    application: "Industrial Applications",
    status: "Category / Family",
  },
  {
    name: "Alcohols",
    category: "Chemicals",
    family: "Alcohols",
    application: "Industrial & Chemical Processing",
    status: "Category / Family",
  },
  {
    name: "Alkalis",
    category: "Chemicals",
    family: "Alkalis",
    application: "Industrial & Manufacturing",
    status: "Category / Family",
  },
  {
    name: "Amines",
    category: "Chemicals",
    family: "Amines",
    application: "Chemical & Industrial Applications",
    status: "Category / Family",
  },
  {
    name: "Aromatics",
    category: "Chemicals",
    family: "Aromatics",
    application: "Chemical Manufacturing",
    status: "Category / Family",
  },
  {
    name: "Esters",
    category: "Chemicals",
    family: "Esters",
    application: "Industrial Applications",
    status: "Category / Family",
  },
  {
    name: "Glycols",
    category: "Chemicals",
    family: "Glycols",
    application: "Industrial Applications",
    status: "Category / Family",
  },
  {
    name: "Industrial Chemicals",
    category: "Chemicals",
    family: "Industrial Chemicals",
    application: "Industrial Manufacturing",
    status: "Category / Family",
  },
  {
    name: "Ketones",
    category: "Chemicals",
    family: "Ketones",
    application: "Industrial & Chemical Processing",
    status: "Category / Family",
  },
  {
    name: "Performance Chemicals",
    category: "Chemicals",
    family: "Performance Chemicals",
    application: "Industrial Applications",
    status: "Category / Family",
  },
  {
    name: "Solvents",
    category: "Chemicals",
    family: "Solvents",
    application: "Manufacturing & Processing",
    status: "Category / Family",
  },
  {
    name: "Specialty Chemicals",
    category: "Chemicals",
    family: "Specialty Chemicals",
    application: "Specialty & Industrial Applications",
    status: "Category / Family",
  },

  // PLASTICS & POLYMERS
  {
    name: "Engineering Plastics",
    category: "Plastics & Polymers",
    family: "Engineering Plastics",
    application: "Industrial Manufacturing",
    status: "Category / Family",
  },
  {
    name: "HDPE",
    category: "Plastics & Polymers",
    family: "Polyethylene",
    application: "Packaging & Manufacturing",
    status: "Category / Family",
  },
  {
    name: "LDPE",
    category: "Plastics & Polymers",
    family: "Polyethylene",
    application: "Packaging & Manufacturing",
    status: "Category / Family",
  },
  {
    name: "LLDPE",
    category: "Plastics & Polymers",
    family: "Polyethylene",
    application: "Packaging & Manufacturing",
    status: "Category / Family",
  },
  {
    name: "PET",
    category: "Plastics & Polymers",
    family: "Polyesters",
    application: "Packaging & Manufacturing",
    status: "Category / Family",
  },
  {
    name: "Polymer Additives",
    category: "Plastics & Polymers",
    family: "Polymer Additives",
    application: "Plastics Processing",
    status: "Category / Family",
  },
  {
    name: "PP",
    category: "Plastics & Polymers",
    family: "Polypropylene",
    application: "Packaging & Manufacturing",
    status: "Category / Family",
  },
  {
    name: "PVC",
    category: "Plastics & Polymers",
    family: "PVC",
    application: "Construction & Manufacturing",
    status: "Category / Family",
  },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [activeLetter, setActiveLetter] = useState("All");

  const categories = [
    "All",
    "Chemicals",
    "Plastics & Polymers",
    "Industrial Products",
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.family.toLowerCase().includes(search.toLowerCase()) ||
        product.application.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      const matchesLetter =
        activeLetter === "All" ||
        product.name.toUpperCase().startsWith(activeLetter);

      return matchesSearch && matchesCategory && matchesLetter;
    });
  }, [search, category, activeLetter]);

  return (
    <main className="products-page">

      {/* =========================
          HEADER
      ========================== */}

      <Header />

      {/* HERO */}

      <section className="products-page-hero">
        <div className="products-page-container">
          <p className="section-eyebrow">
            PRODUCTS & TRADING CATEGORIES
          </p>

          <h1>
            Materials that move
            <br />
            global industry.
          </h1>

          <p className="products-page-hero-text">
            Explore OpenButani&apos;s product categories across chemicals,
            plastics and polymers, and industrial products.
          </p>

          <div className="products-page-hero-actions">
            <a
              href="#product-catalogue"
              className="primary-product-button"
            >
              Explore Catalogue
              <ArrowRight size={17} aria-hidden="true" />
            </a>

            <Link
              href="/request-a-quote"
              className="secondary-product-button"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORY INTRO */}

      <section className="products-category-section">
        <div className="products-page-container">
          <div className="products-section-heading">
            <div>
              <p className="section-eyebrow">PRODUCT CATEGORIES</p>

              <h2>
                A broader trading
                <br />
                portfolio.
              </h2>
            </div>

            <p>
              OpenButani&apos;s product structure is designed around
              international sourcing, trading and industrial supply.
            </p>
          </div>

          <div className="products-category-grid">
            <Link
              href="/products/chemicals"
              className="products-category-card"
            >
              <span>01</span>

              <div>
                <h3>Chemicals</h3>

                <p>
                  Chemical products and raw materials for industrial and
                  commercial supply requirements.
                </p>
              </div>

              <ArrowRight size={20} aria-hidden="true" />
            </Link>

            <Link
              href="/products/plastics-polymers"
              className="products-category-card"
            >
              <span>02</span>

              <div>
                <h3>Plastics &amp; Polymers</h3>

                <p>
                  Polymer materials and related products for manufacturing,
                  packaging and industrial applications.
                </p>
              </div>

              <ArrowRight size={20} aria-hidden="true" />
            </Link>

            <Link
              href="/products/industrial-products"
              className="products-category-card"
            >
              <span>03</span>

              <div>
                <h3>Industrial Products</h3>

                <p>
                  Industrial materials supporting manufacturing and supply
                  requirements.
                </p>
              </div>

              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* CATALOGUE */}

      <section
        className="products-catalogue-section"
        id="product-catalogue"
      >
        <div className="products-page-container">
          <div className="catalogue-heading">
            <div>
              <p className="section-eyebrow">PRODUCT CATALOGUE</p>

              <h2>Explore products A–Z.</h2>
            </div>

            <p>
              Search by product family, category or application. The catalogue
              structure can scale as verified OpenButani products are added.
            </p>
          </div>

          {/* SEARCH + FILTER */}

          <div className="catalogue-controls">
            <div className="catalogue-search">
              <Search size={18} aria-hidden="true" />

              <input
                type="search"
                placeholder="Search products..."
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setActiveLetter("All");
                }}
                aria-label="Search products"
              />
            </div>

            <div className="catalogue-filter">
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                aria-label="Filter by category"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <ChevronDown size={17} aria-hidden="true" />
            </div>
          </div>

          {/* A-Z */}

          <div className="catalogue-alphabet">
            <button
              type="button"
              className={activeLetter === "All" ? "active" : ""}
              onClick={() => setActiveLetter("All")}
            >
              All
            </button>

            {alphabet.map((letter) => (
              <button
                type="button"
                key={letter}
                className={activeLetter === letter ? "active" : ""}
                onClick={() => setActiveLetter(letter)}
              >
                {letter}
              </button>
            ))}
          </div>

          {/* RESULTS */}

          <div className="catalogue-result-header">
            <p>
              Showing <strong>{filteredProducts.length}</strong> product
              families
            </p>
          </div>

          <div className="catalogue-grid">
            {filteredProducts.map((product) => (
              <article
                className="catalogue-product-card"
                key={`${product.category}-${product.name}`}
              >
                <div className="catalogue-product-top">
                  <span>{product.category}</span>
                  <small>{product.status}</small>
                </div>

                <h3>{product.name}</h3>

                <p>{product.application}</p>

                <div className="catalogue-product-footer">
                  <span>{product.family}</span>

                  <Link
                    href="/request-a-quote"
                    aria-label={`Request a quote for ${product.name}`}
                  >
                    Enquire
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="catalogue-empty">
              <h3>No matching product family found.</h3>

              <p>
                Try another search term, category or alphabet letter.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                  setActiveLetter("All");
                }}
              >
                Reset catalogue
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SUPPORT */}

      <section className="products-support-section">
        <div className="products-page-container">
          <div className="products-support-grid">
            <div>
              <p className="section-eyebrow">SUPPLY SUPPORT</p>

              <h2>
                Need a specific
                <br />
                product or specification?
              </h2>
            </div>

            <div>
              <p>
                If you cannot find the exact material you are looking for,
                contact the OpenButani team with your product, specification,
                quantity and destination requirements.
              </p>

              <Link
                href="/request-a-quote"
                className="support-quote-button"
              >
                Request a Quote
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}

      <section className="products-final-cta">
        <div className="products-page-container">
          <p className="section-eyebrow">OPENBUTANI</p>

          <h2>
            Let&apos;s build the right
            <br />
            supply solution.
          </h2>

          <Link
            href="/request-a-quote"
            className="final-product-button"
          >
            Request a Quote
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

    </main>
  );
}