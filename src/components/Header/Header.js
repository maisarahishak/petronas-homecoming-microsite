import React from 'react';
import './Header.css';
import banner from '../../assets/banner.png';

const Header = () => {
  return (
    <div className="header-container">
      <img src={banner} alt="Banner" className="banner-image" />
    </div>
  );
};

export default Header;
