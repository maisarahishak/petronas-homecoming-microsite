import React from 'react';
import './UserGuide.css';
import challengeIcon from '../../assets/icons/torch-icon.png';
import backgroundImage from '../../assets/graphic-bg.png';
import openIcon from '../../assets/open.png';
import closeIcon from '../../assets/close.png';
import fullSizeImage1 from '../../assets/001.png';
import fullSizeImage2 from '../../assets/002.png';
import fullSizeImage3 from '../../assets/003.png';
import fullSizeImage4 from '../../assets/004.png';
import fullSizeImage5 from '../../assets/005.png';

const UserGuide = () => {
  const toggleImage = (id) => {
    const imageContainer = document.getElementById(`imageContainer-${id}`);
    const toggleIcon = document.getElementById(`toggleIcon-${id}`);

    if (imageContainer.style.display === 'none' || imageContainer.style.display === '') {
      imageContainer.style.display = 'block';
      toggleIcon.src = closeIcon;
    } else {
      imageContainer.style.display = 'none';
      toggleIcon.src = openIcon;
    }
  };

  return (
    <div className="challenge-details-container">
      <div className="section">
        <div className="gradient-background">
          <img src={challengeIcon} alt="Challenge Icon" className="challenge-icon" />
          <div className="challenge-title">User Guide</div>
        </div>
        <div className="challenge-details-row second-row" style={{ backgroundImage: `url(${backgroundImage})` }}>

          <div className="user-guide-container">
            <div className="row-content">
              <div className="content-container">
                <p className="question">How to install BookDoc and upgrade to PETRONAS premium account</p>
                <img src={openIcon} alt="Open Icon" className="icon" id="toggleIcon-1" onClick={() => toggleImage(1)} />
              </div>
            </div>
            <div className="image-container" id="imageContainer-1" style={{ display: 'none' }}>
              <img src={fullSizeImage1} alt="Full Size 1" className="full-image" />
            </div>
          </div>

          <div className="user-guide-container">
            <div className="row-content">
              <div className="content-container">
                <p className="question">How to Join Challenge?</p>
                <img src={openIcon} alt="Open Icon" className="icon" id="toggleIcon-2" onClick={() => toggleImage(2)} />
              </div>
            </div>
            <div className="image-container" id="imageContainer-2" style={{ display: 'none' }}>
              <img src={fullSizeImage2} alt="Full Size 2" className="full-image" />
            </div>
          </div>

          <div className="user-guide-container">
            <div className="row-content">
              <div className="content-container">
                <p className="question">How to Join Team Challenge?</p>
                <img src={openIcon} alt="Open Icon" className="icon" id="toggleIcon-3" onClick={() => toggleImage(3)} />
              </div>
            </div>
            <div className="image-container" id="imageContainer-3" style={{ display: 'none' }}>
              <img src={fullSizeImage3} alt="Full Size 3" className="full-image" />
            </div>
          </div>

          <div className="user-guide-container">
            <div className="row-content">
              <div className="content-container">
                <p className="question">How to Invite Group Member?</p>
                <img src={openIcon} alt="Open Icon" className="icon" id="toggleIcon-4" onClick={() => toggleImage(4)} />
              </div>
            </div>
            <div className="image-container" id="imageContainer-4" style={{ display: 'none' }}>
              <img src={fullSizeImage4} alt="Full Size 4" className="full-image" />
            </div>
          </div>

          <div className="user-guide-container">
            <div className="row-content">
              <div className="content-container">
                <p className="question">How do Group Leader Remove The Group Member</p>
                <img src={openIcon} alt="Open Icon" className="icon" id="toggleIcon-5" onClick={() => toggleImage(5)} />
              </div>
            </div>
            <div className="image-container" id="imageContainer-5" style={{ display: 'none' }}>
              <img src={fullSizeImage5} alt="Full Size 5" className="full-image" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserGuide;
