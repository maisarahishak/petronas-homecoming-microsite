import React, { useState } from 'react';
import './UserGuide.css';
import userGuideIcon from '../../assets/icons/torch-icon.png';
import backgroundImage from '../../assets/graphic-bg.png';
import openIcon from '../../assets/open.png';
import closeIcon from '../../assets/close.png';
import fullSizeImage1 from '../../assets/001.png';
import fullSizeImage2 from '../../assets/002.png';
import fullSizeImage3 from '../../assets/003.png';
import fullSizeImage4 from '../../assets/004.png';
import fullSizeImage5 from '../../assets/005.png';

const UserGuide = () => {
  const [openItemId, setOpenItemId] = useState(1); // Initialize with the ID of the first item

  const toggleImage = (id) => {
    if (openItemId === id) {
      setOpenItemId(null); // Close the current item if it's open
    } else {
      setOpenItemId(id); // Open the clicked item
    }
  };

  const isItemOpen = (id) => {
    return openItemId === id;
  };

  return (
    <div className="user-guide-container">
      <div className="user-guide-section">
        <div className="user-guide-gradient-background">
          <img src={userGuideIcon} alt="User Guide Icon" className="user-guide-icon" />
          <div className="user-guide-title">User Guide</div>
        </div>
        <div className="user-guide-details" style={{ backgroundImage: `url(${backgroundImage})` }}>

          <div className="user-guide-item">
            <div className="row-content">
              <div className="content-container">
                <p className="question">How to install BookDoc and upgrade to PETRONAS premium account</p>
                <img
                  src={isItemOpen(1) ? closeIcon : openIcon}
                  alt={isItemOpen(1) ? 'Close Icon' : 'Open Icon'}
                  className="icon"
                  onClick={() => toggleImage(1)}
                />
              </div>
            </div>
            <div className="image-container" style={{ display: isItemOpen(1) ? 'block' : 'none' }}>
              <img src={fullSizeImage1} alt="Full Size 1" className="full-image" />
            </div>
          </div>

          <div className="user-guide-item">
            <div className="row-content">
              <div className="content-container">
                <p className="question">How to Join Challenge?</p>
                <img
                  src={isItemOpen(2) ? closeIcon : openIcon}
                  alt={isItemOpen(2) ? 'Close Icon' : 'Open Icon'}
                  className="icon"
                  onClick={() => toggleImage(2)}
                />
              </div>
            </div>
            <div className="image-container" style={{ display: isItemOpen(2) ? 'block' : 'none' }}>
              <img src={fullSizeImage2} alt="Full Size 2" className="full-image" />
            </div>
          </div>

          <div className="user-guide-item">
            <div className="row-content">
              <div className="content-container">
                <p className="question">How to Join Team Challenge?</p>
                <img
                  src={isItemOpen(3) ? closeIcon : openIcon}
                  alt={isItemOpen(3) ? 'Close Icon' : 'Open Icon'}
                  className="icon"
                  onClick={() => toggleImage(3)}
                />
              </div>
            </div>
            <div className="image-container" style={{ display: isItemOpen(3) ? 'block' : 'none' }}>
              <img src={fullSizeImage3} alt="Full Size 3" className="full-image" />
            </div>
          </div>

          <div className="user-guide-item">
            <div className="row-content">
              <div className="content-container">
                <p className="question">How to Invite Group Member?</p>
                <img
                  src={isItemOpen(4) ? closeIcon : openIcon}
                  alt={isItemOpen(4) ? 'Close Icon' : 'Open Icon'}
                  className="icon"
                  onClick={() => toggleImage(4)}
                />
              </div>
            </div>
            <div className="image-container" style={{ display: isItemOpen(4) ? 'block' : 'none' }}>
              <img src={fullSizeImage4} alt="Full Size 4" className="full-image" />
            </div>
          </div>

          <div className="user-guide-item">
            <div className="row-content">
              <div className="content-container">
                <p className="question">How do Group Leader Remove The Group Member</p>
                <img
                  src={isItemOpen(5) ? closeIcon : openIcon}
                  alt={isItemOpen(5) ? 'Close Icon' : 'Open Icon'}
                  className="icon"
                  onClick={() => toggleImage(5)}
                />
              </div>
            </div>
            <div className="image-container" style={{ display: isItemOpen(5) ? 'block' : 'none' }}>
              <img src={fullSizeImage5} alt="Full Size 5" className="full-image" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserGuide;
