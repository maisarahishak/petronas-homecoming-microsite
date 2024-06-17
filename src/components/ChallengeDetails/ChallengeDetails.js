import React from 'react';
import './ChallengeDetails.css';
import challengeIcon from '../../assets/icons/torch-icon.png';
import timelineImage from '../../assets/timeline.png';
import backgroundImage from '../../assets/graphic-bg.png';
import guideImage from '../../assets/guide.png';
import downloadBookDoc from '../../assets/download-bookdoc.png';

const ChallengeDetails = () => {
  return (
    <div className="challenge-details-container">
      <div className="section">
        <div className="gradient-background">
          <img src={challengeIcon} alt="Challenge Icon" className="challenge-icon" />
          <div className="challenge-title">Challenge Details</div>
        </div>
        <div className="challenge-details-row second-row" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="column">
            <div className="title">About</div>
            <div className="separator"></div>
            <div className="desc">
              Celebrate PETRONAS’ 50 years of success with memorable and inclusive homecoming celebration.
              Engage staff in a virtual steps challenge that integrates physical activity, memorable milestones,
              and homecoming celebration.
            </div>
            <div className="title">Duration</div>
            <div className="separator"></div>
            <div className="desc">July 2024 - November 2024</div>
            <div className="title">How to Join?</div>
            <div className="separator"></div>
            <div className="desc">
              You can manually join via the BookDoc app:
              <ol>
                <li>Open the BookDoc App and navigate to the Challenge Section.</li>
                <li>Find and select the <span className="bold">‘Petronas 50 Homecoming Steps Challenge.’</span></li>
                <li>Hit <span className="bold">‘Join Now’</span> and step into the challenge.</li>
              </ol>
              Alternatively, just <span className="bold">click the</span> <span className="join-now">‘Join Now’</span> button to get started!
            </div>
            <div className="title">Remarks</div>
            <div className="separator"></div>
            <div className="desc">
              <span className="bold">Steps will only be counted upon joining the challenge.</span>
              <br /><br />
              For example:
              <br />
              Challenge period: 1/4/2024 - 31/5/2024
              <br />
              If you join challenge on 2/4/2024 at 12pm
              <br />
              Step only starts to count on 2/4/2024 at 12pm onwards
            </div>
          </div>
          <div className="column column-centered">
            <img src={timelineImage} alt="Timeline" style={{ width: '100%' }} />
            <div className="cta-container">
              <div className="cta-text">Ready to take on the challenge?</div>
              <a href="https://www.bookdoc.com/download-bookdoc-app/" target="_blank" rel="noopener noreferrer" className="cta-button">Join Now</a>
            </div>
          </div>
        </div>
        <div className="challenge-details-row third-row">
          <div className="title">Guide for New Users</div>
          <div className="separator"></div>
          <img src={guideImage} alt="Guide" className="guide-image" />
        </div>
        <div className="challenge-details-row fourth-row">
          <div className="column-download">
            <img src={downloadBookDoc} alt="Download" className="download-bookdoc" />
          </div>  
          <div className="column-download">
          <div className="download-title">Are you up for the challenge?</div>
            <div className="download-desc">
              Start by downloading BookDoc mobile application at the Apple App Store, Google Play Store or Huawei AppGallery!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetails;
