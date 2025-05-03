import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo-section">
        <Link to="/" className="logo">
          <img
            src="https://png.pngtree.com/png-vector/20241102/ourmid/pngtree-clothing-brand-logo-vector-png-image_14220479.png"
            alt="Clothing Brand Logo"
            className="logo-image"
          />
        </Link>
        <span className="tagline">Fashion Forward, Always</span>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Navigation Section */}
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/sale" className="highlighted">Sale</Link>
        <Link to="/about-us">About</Link>
        <Link to="/contact-us">Contact</Link>
      </nav>

      {/* Search and Icons */}
      <div className="actions-section">
        <div className="search-bar">
          <input type="text" placeholder="Search for style..." />
          <button type="button">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <Link to="/account" className="account-icon" title="Account">
          <i className="fas fa-user-circle"></i>
        </Link>
        <Link to="/cart" className="cart-icon" title="Cart">
          <i className="fas fa-shopping-bag"></i>
          <span className="cart-count">3</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
