import React from 'react';
import './CompatibleDevices.css';
import challengeIcon from '../../assets/icons/torch-icon.png';
import backgroundImage from '../../assets/graphic-bg.png';
import appleIcon from '../../assets/apple.png';
import samsungHealthIcon from '../../assets/samsung-health.png';
import garminIcon from '../../assets/garmin.png';
import fitbitIcon from '../../assets/fitbit.png';
import googleFitIcon from '../../assets/google-fit.png';
import zeppLifeIcon from '../../assets/zepp-life.png';
import huaweiHealthIcon from '../../assets/huawei-health.png';
import suuntoIcon from '../../assets/suunto.png';
import polarIcon from '../../assets/polar.png';
import corosIcon from '../../assets/coros.png';
import amazfitIcon from '../../assets/amazfit.png';
import stepsTrackerIcon from '../../assets/stepstracker.png';

const CompatibleDevices = () => {
    return (
      <div className="devices-container">
        <div className="devices-section">
          <div className="devices-gradient-background">
            <img src={challengeIcon} alt="Challenge Icon" className="devices-icon" />
            <div className="devices-title">Compatible Devices & Apps</div>
          </div>
          <div className="devices-details-row" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="devices-row">
              <div className="device-icons">
                <img src={appleIcon} alt="Apple" className="device-icon" />
                <img src={samsungHealthIcon} alt="Samsung Health" className="device-icon" />
                <img src={garminIcon} alt="Garmin" className="device-icon" />
                <img src={fitbitIcon} alt="Fitbit" className="device-icon" />
              </div>
              <div className="device-icons">
                <img src={googleFitIcon} alt="Google Fit" className="device-icon" />
                <img src={zeppLifeIcon} alt="Zepp Life" className="device-icon" />
                <img src={huaweiHealthIcon} alt="Huawei Health" className="device-icon" />
                <img src={suuntoIcon} alt="Suunto" className="device-icon" />
              </div>
              <div className="device-icons">
                <img src={polarIcon} alt="Polar" className="device-icon" />
                <img src={corosIcon} alt="Coros" className="device-icon" />
                <img src={amazfitIcon} alt="Amazfit" className="device-icon" />
                <img src={stepsTrackerIcon} alt="Steps Tracker" className="device-icon" />
              </div>
            </div>
            <div className="devices-text">
              For Zepp Life users, you may refer to the user guide (iOS | Android) for the steps. Do contact our technical support team if you need further assistance. For Google Fit users, please use the account associated with Google Fit.
            </div>
          </div>
        </div>
      </div>
    );
};

export default CompatibleDevices;
