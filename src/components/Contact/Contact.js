import React from 'react';
import './Contact.css';
import challengeIcon from '../../assets/icons/torch-icon.png';
import backgroundImage from '../../assets/graphic-bg.png';
import locationIcon from '../../assets/location.png';
import emailIcon from '../../assets/email.png';
import hotlineIcon from '../../assets/hotline.png';

const Contact = () => {
  return (
    <div className="challenge-details-container">
      <div className="section">
        <div className="gradient-background">
          <img src={challengeIcon} alt="Challenge Icon" className="challenge-icon" />
          <div className="challenge-title">Contact</div>
        </div>
        <div className="challenge-details-row second-row" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="contact-column">
            <div className="contact-row">
              <img src={locationIcon} alt="Location" className="contact-icon" />
              <div>
                <div className="contact-title">Location</div>
                <div className="contact-desc">Suite 6.03A, Level 6, Menara OBYU, 4, Jalan PJU 8/8A, Damansara Perdana, 47820 Petaling Jaya, Selangor</div>
              </div>
            </div>
            <div className="contact-row">
              <img src={emailIcon} alt="Email" className="contact-icon" />
              <div>
                <div className="contact-title">Email</div>
                <div className="contact-desc">care@bookdoc.com</div>
              </div>
            </div>
            <div className="contact-row">
              <img src={hotlineIcon} alt="Hotline" className="contact-icon" />
              <div>
                <div className="contact-title">BookDoc Hotline:</div>
                <div className="contact-desc">1300-88-2362</div>
              </div>
            </div>
          </div>
          <div className="map-column">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7960.070598994522!2d101.60553024592834!3d3.157447902105953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c4d10ef9df%3A0x3877f1c5e6dbf81a!2sBookDoc%20Malaysia!5e0!3m2!1sen!2smy!4v1628689116226!5m2!1sen!2smy"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="BookDoc Malaysia Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
