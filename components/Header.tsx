"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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
          <span />
          <span />
          <span />
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