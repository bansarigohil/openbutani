"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen((open) => !open);
  };

  return (
    <header className="site-header">
      <div className="header-container">

        {/* LOGO */}
        <Link
          href="/"
          className="logo-link"
          aria-label="OpenButani home"
          onClick={closeMobileMenu}
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

        {/* HEADER ACTIONS */}
        <div className="header-actions">

          {/* SEARCH BUTTON */}
          <button
            type="button"
            className="header-search-button"
            aria-label={
              isSearchOpen
                ? "Close search"
                : "Open search"
            }
            aria-expanded={isSearchOpen}
            onClick={toggleSearch}
          >
            <Search size={20} strokeWidth={2} />
          </button>

          {/* DESKTOP QUOTE BUTTON */}
          <Link
            href="/request-a-quote"
            className="header-quote-button"
          >
            Request a Quote
          </Link>

        </div>

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
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* SEARCH PANEL */}
      <div
        className={`header-search-panel ${
          isSearchOpen ? "is-open" : ""
        }`}
      >
        <form className="header-search-form">
          <label
            htmlFor="site-search"
            className="sr-only"
          >
            Search OpenButani
          </label>

          <Search
            size={20}
            strokeWidth={2}
            aria-hidden="true"
          />

          <input
            id="site-search"
            type="search"
            name="search"
            placeholder="Search products, industries, services..."
            autoComplete="off"
          />

          <button type="submit">
            Search
          </button>
        </form>
      </div>

      {/* MOBILE NAVIGATION */}
      <nav
        id="mobile-navigation"
        className={`mobile-navigation ${
          isMobileMenuOpen ? "is-open" : ""
        }`}
        aria-label="Mobile navigation"
      >
        <Link href="/" onClick={closeMobileMenu}>
          Home
        </Link>

        <Link href="/about" onClick={closeMobileMenu}>
          About
        </Link>

        <Link href="/products" onClick={closeMobileMenu}>
          Products
        </Link>

        <Link href="/industries" onClick={closeMobileMenu}>
          Industries
        </Link>

        <Link href="/global-trade" onClick={closeMobileMenu}>
          Global Trade
        </Link>

        <Link href="/what-we-do" onClick={closeMobileMenu}>
          What We Do
        </Link>

        <Link href="/contact" onClick={closeMobileMenu}>
          Contact
        </Link>

        <Link
          href="/request-a-quote"
          className="mobile-navigation-quote"
          onClick={closeMobileMenu}
        >
          Request a Quote
        </Link>
      </nav>
    </header>
  );
}