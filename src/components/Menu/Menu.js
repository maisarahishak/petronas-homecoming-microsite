import React, { useState, useEffect } from 'react';
import './Menu.css';
import emailIcon from '../../assets/icons/email.png';
import phoneIcon from '../../assets/icons/phone.png';
import logo from '../../assets/logo.png';

const Menu = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (section) => {
    setActiveLink(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const fromTop = window.scrollY;
      const menuLinks = document.querySelectorAll('.menu-items a');

      menuLinks.forEach(link => {
        const section = document.querySelector(link.hash);

        if (
          section &&
          section.offsetTop <= fromTop + 200 &&
          section.offsetTop + section.offsetHeight > fromTop + 200
        ) {
          setActiveLink(link.hash.slice(1));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="menu-container">
      <div className="menu-top-row">
        <div className="contact-info">
          <div className="contact-text">
            <img src={emailIcon} alt="Email Icon" className="icon" />
            <span>care@bookdoc.com</span>
          </div>
          <div className="contact-text">
            <img src={phoneIcon} alt="Phone Icon" className="icon" />
            <span>1300-88-2362</span>
          </div>
        </div>
      </div>
      <div className="menu-bottom-row">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="menu-items">
          <a
            href="#header"
            className={activeLink === 'header' ? 'active' : ''}
            onClick={() => handleLinkClick('header')}
          >
            Header
          </a>
          <a
            href="#challenge-details"
            className={activeLink === 'challenge-details' ? 'active' : ''}
            onClick={() => handleLinkClick('challenge-details')}
          >
            Challenge Details
          </a>
          <a
            href="#leaderboard"
            className={activeLink === 'leaderboard' ? 'active' : ''}
            onClick={() => handleLinkClick('leaderboard')}
          >
            Leaderboard
          </a>
          <a
            href="#user-guide"
            className={activeLink === 'user-guide' ? 'active' : ''}
            onClick={() => handleLinkClick('user-guide')}
          >
            User Guide
          </a>
          <a
            href="#compatible-devices-apps"
            className={activeLink === 'compatible-devices-apps' ? 'active' : ''}
            onClick={() => handleLinkClick('compatible-devices-apps')}
          >
            Compatible Devices & Apps
          </a>
          <a
            href="#contact"
            className={activeLink === 'contact' ? 'active' : ''}
            onClick={() => handleLinkClick('contact')}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
