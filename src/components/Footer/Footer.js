import React from 'react';
import './Footer.css';
import arrowImage from '../../assets/arrow.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>
            © Copyright <span className="bold">PETRONAS 50 HOMECOMING STEPS CHALLENGE</span>. All Rights Reserved
          </p>
          <p className="footer-left-2">Designed by <span className="bookdoc">BookDoc</span></p>
        </div>
        <div className="footer-right" onClick={scrollToTop}>
          <img src={arrowImage} alt="Back to top" className="back-to-top" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
