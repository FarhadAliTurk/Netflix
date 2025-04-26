import React from "react";

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container ">
        {/* Social Icons */}
        <div className="d-flex justify-content-center mb-3">
          <a
            href="https://www.facebook.com/profile.php?id=61551771230717&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon mx-2"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            href="https://linkedin.com/in/farhad-ali-turk-135369305"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon mx-2"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://github.com/FarhadAliTurk"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon mx-2"
            aria-label="GitHub"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="mailto:369farhadali@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon mx-2"
            aria-label="Email"
          >
            <i className="fas fa-envelope fa-2x"></i>
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} Farhad Ali Turk. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;