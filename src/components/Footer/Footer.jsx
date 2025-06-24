import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-section">
          <p><strong>FoodZone</strong></p>
          <p>Fast, fresh, and hot food delivered to your doorstep.</p>
          <p>© 2025 FoodZone — Your trusted food delivery partner.</p>
        </div>

        <div className="footer-section">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>9876543210</li>
            <li>contact@foodzone.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copy">Copyright 2025 © FoodZone.com - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
