// components/NewsletterSection.jsx
import React from 'react';
import './Footer.css';

export default function NewsletterSection() {
  return (
    <div className="newsletter-wrapper">
      <div className="newsletter-left">
        <h3>BE THE FIRST TO KNOW</h3>
        <p>Sign up for updates from mettā muse.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your e-mail..." />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
      <div className="newsletter-right">
        <h4>CONTACT US</h4>
        <p>+44 221 133 5360</p>
        <p>customercare@mettamuse.com</p>

        <h4>CURRENCY</h4>
        <p>🇺🇸 USD</p>
        <small>
          Transactions will be completed in Euros and a currency reference is
          available on hover.
        </small>
      </div>
    </div>
  );
}
