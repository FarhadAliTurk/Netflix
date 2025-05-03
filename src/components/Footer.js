import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* Brand Section */}
        <div className="footer-brand">
          <img
            src="https://png.pngtree.com/png-vector/20241102/ourmid/pngtree-clothing-brand-logo-vector-png-image_14220479.png"
            alt="ClothingStore Logo"
            className="footer-logo"
          />
          <p className="footer-tagline">Elevate your style with ClothingStore</p>
        </div>

        {/* Quick Links */}
        <nav className="footer-links" aria-label="Quick Links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/mens">Men's Wear</a></li>
            <li><a href="/womens">Women's Wear</a></li>
            <li><a href="/sale">Sale</a></li>
            <li><a href="/new-arrivals">New Arrivals</a></li>
          </ul>
        </nav>

        {/* Support Links */}
        <nav className="footer-support" aria-label="Customer Support">
          <h3>Customer Support</h3>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/shipping">Shipping Info</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get exclusive offers, updates, and more.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              aria-label="Email address"
            />
            <button type="submit" aria-label="Subscribe to newsletter">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        {/* Social Media */}
        <div className="social-media" aria-label="Social Media">
          <a href="https://www.facebook.com/profile.php?id=61551771230717&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://github.com/FarhadAliTurk" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/farhad-ali-turk-135369305" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:369farhadali@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        {/* Payment Methods */}
        <div className="payment-methods" aria-label="Accepted Payment Methods">
          <img src="https://pngimg.com/d/visa_PNG4.png" alt="Visa" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCnGY2DhER0IPKrKxq5IFZOpX9VSll56KMGQ&s" alt="MasterCard" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwbUiy3hHxllR47quPLalw0K-USf5poRGSA&s" alt="PayPal" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJDDa_7bjkkqG_GphD0J3Cq8pMG3g1smsjQ&s" alt="Stripe" />
        </div>

        {/* Copyright */}
        <p className="copyright">
          &copy; {new Date().getFullYear()} ClothingStore. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;



         