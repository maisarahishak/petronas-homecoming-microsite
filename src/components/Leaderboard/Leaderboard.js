import React, { useState } from 'react';
import './Leaderboard.css';
import challengeIcon from '../../assets/icons/torch-icon.png';
import backgroundImage from '../../assets/graphic-bg.png';
import searchIcon from '../../assets/icons/search.png'; // Ensure you have this icon in your assets

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('Individual');

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-section">
        <div className="leaderboard-gradient-background">
          <img src={challengeIcon} alt="Challenge Icon" className="leaderboard-icon" />
          <div className="leaderboard-title">Leaderboard</div>
        </div>
        <div className="leaderboard-details-row" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="leaderboard-date-row">
            Results From 1st July 2024 To 30th Nov 2024
          </div>
          <div className="leaderboard-tabs-row">
            <div className="leaderboard-tabs-column">
              <div
                className={`leaderboard-tab-item ${activeTab === 'Individual' ? 'active' : ''}`}
                onClick={() => setActiveTab('Individual')}
              >
                Individual
              </div>
              <div
                className={`leaderboard-tab-item ${activeTab === 'Team' ? 'active' : ''}`}
                onClick={() => setActiveTab('Team')}
              >
                Team
              </div>
            </div>
            <div className="leaderboard-content-column">
              <div className="leaderboard-content-row">{activeTab}</div>
              <div className="leaderboard-content-row">
                <div className="search-container">
                  <img src={searchIcon} alt="Search Icon" className="search-icon" />
                  <input type="text" className="search-input" placeholder="Search for name.." />
                </div>
              </div>
              <div className="leaderboard-content-row">
                <table className="leaderboard-table">
                  <thead>
                    <tr>
                      <th>RANK</th>
                      <th>NAME</th>
                      <th>OPU</th>
                      <th>TOTAL STEPS CONTRIBUTED</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="4">Stay tuned for leaderboard updates!</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
