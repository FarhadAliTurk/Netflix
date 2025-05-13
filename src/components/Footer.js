import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-3">
            <h5>About Netflix</h5>
            <ul className="list-unstyled">
              <li><a href="/company-info">Company Info</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/press">Press</a></li>
              <li><a href="/terms-of-use">Terms of Use</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="col-md-3">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><a href="/help-center">Help Center</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/cookie-preferences">Cookie Preferences</a></li>
            </ul>
          </div>

          {/* Account Section */}
          <div className="col-md-3">
            <h5>Account</h5>
            <ul className="list-unstyled">
              <li><a href="/manage-account">Manage Account</a></li>
              <li><a href="/redeem-gift-cards">Redeem Gift Cards</a></li>
              <li><a href="/buy-gift-cards">Buy Gift Cards</a></li>
              <li><a href="/media-center">Media Center</a></li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="col-md-3 text-center">
            <h5>Follow Me</h5>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=61551771230717&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://linkedin.com/in/farhad-ali-turk-135369305"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/FarhadAliTurk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="mailto:369farhadali@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <small>&copy; 2025 Netflix Clone. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;