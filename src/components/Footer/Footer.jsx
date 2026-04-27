import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, X, Camera, Video, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>ABOUT</h3>
          <Link to="/about">Contact Us</Link>
          <Link to="/about">About Us</Link>
          <Link to="/">Careers</Link>
          <Link to="/">FluxCommerce Stories</Link>
        </div>
        <div className="footer-section">
          <h3>HELP</h3>
          <Link to="/">Payments</Link>
          <Link to="/">Shipping</Link>
          <Link to="/">Cancellation & Returns</Link>
          <Link to="/">FAQ</Link>
        </div>
        <div className="footer-section">
          <h3>POLICY</h3>
          <Link to="/">Return Policy</Link>
          <Link to="/">Terms Of Use</Link>
          <Link to="/">Security</Link>
          <Link to="/">Privacy</Link>
        </div>
        <div className="footer-section social">
          <h3>SOCIAL</h3>
          <div className="social-icons">
            <MessageCircle size={20} />
            <X size={20} />
            <Camera size={20} />
            <Video size={20} />
          </div>
        </div>
        <div className="footer-divider-vertical"></div>
        <div className="footer-section contact">
          <h3>Registered Office:</h3>
          <p><MapPin size={14} /> FluxCommerce Private Limited,</p>
          <p>Buildings Alyssa, Begonia & </p>
          <p>Clove Embassy Tech Village,</p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103,</p>
          <p>Karnataka, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container bottom-content">
          <span>© 2023 FluxCommerce.com</span>
          <div className="payment-methods">
            {/* Placeholder for payment icons */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
