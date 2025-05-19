// File: src/components/Footer.jsx
import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p className="footer-copy">
        © {new Date().getFullYear()} My W6-D2-Lab2 App. All rights reserved.
      </p>
      <div className="footer-info">
        <p>
          Email: <a href="mailto:contact@myapp.com">contact@W6-D2-Lab2.com</a>
        </p>
        <p>Phone: 0553014227</p>
      </div>
      <div className="footer-icons">
        <a href="#" aria-label="Facebook">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#" aria-label="Twitter">
          <i className="fab fa-twitter" />
        </a>
        <a href="#" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in" />
        </a>
        <a href="#" aria-label="GitHub">
          <i className="fab fa-github" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
