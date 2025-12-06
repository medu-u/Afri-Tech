import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Phone: +251708793756</p>
          <p>Email: medhanitmulatu6796@gmai1.com</p>
        </div>

        <div className="footer-section">
          <h4>Headquarter</h4>
          <p>Addis Abeba, Ethiopia</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Afri-Tech. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
