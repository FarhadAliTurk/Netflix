import React from "react";

function Footer() {
  return (
    <footer className="footer py-3 bg-dark text-white">
      <div className="container text-center">
        {/* Social Icons */}
        <div className="d-flex justify-content-center mb-3">
          <a
            href="https://www.facebook.com/profile.php?id=61551771230717&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon mx-3 text-white"
            aria-label="Facebook"
            title="Facebook"
          >
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a
            href="https://linkedin.com/in/farhad-ali-turk-135369305"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon mx-3 text-white"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a
            href="https://github.com/FarhadAliTurk"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon mx-3 text-white"
            aria-label="GitHub"
            title="GitHub"
          >
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a
            href="mailto:369farhadali@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon mx-3 text-white"
            aria-label="Email"
            title="Email"
          >
            <i className="fas fa-envelope fa-lg"></i>
          </a>
        </div>

        {/* Footer Text */}
        <div className="small text-muted">
          <p className="mb-0">
            Designed & Developed by <strong>Farhad Ali Turk</strong>
          </p>
          <p className="mb-0">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
