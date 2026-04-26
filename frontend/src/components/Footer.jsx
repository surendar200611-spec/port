import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">
          <a href="#">Surendar <span>M</span></a>
        </div>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Surendar M. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
