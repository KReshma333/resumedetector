import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Brand + Tagline */}
        <div className="footer-brand">
          <h2>Uniform2Career</h2>
          <p>Built with ❤️ in India for the world</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/about">About</a>
          <a href="/jobs">Jobs</a>
          <a href="/resume">Resume Builder</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
        </div>

        {/* Contact + Socials */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>sales@uniform2career.com</p>
          <p>support@uniform2career.com</p>
          <p>+91-9311777388 (Mon–Fri, 9 AM – 6 PM)</p>
          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="YouTube">YouTube</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Uniform2Career. All rights reserved.
      </div>
    </footer>
  );
}
