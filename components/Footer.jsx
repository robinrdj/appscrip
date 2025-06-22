// components/Footer.jsx
import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-column social-payment">
          <div>
            <h4>FOLLOW US</h4>
            <div className="social-icons">
              <img src="/icons/instagram.svg" alt="Instagram" />
              <img src="/icons/linkedin.svg" alt="LinkedIn" />
            </div>
          </div>

          <div>
            <h4>mettā muse ACCEPTS</h4>
            <div className="payment-icons">
              <img src="gpay.png" alt="Google Pay" />
              <img src="mastercard.png" alt="MasterCard" />
              <img src="visa.png" alt="Visa" />
              <img src="amex.png" alt="Amex" />
              <img src="applepay.png" alt="Apple Pay" />
              <img src="paypal.png" alt="PayPal" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}
