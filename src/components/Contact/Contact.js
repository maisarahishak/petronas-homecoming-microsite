import React from 'react';
import './Contact.css';
import contactIcon from '../../assets/icons/torch-icon.png';
import backgroundImage from '../../assets/graphic-bg.png';
import locationIcon from '../../assets/location.png';
import emailIcon from '../../assets/email.png';
import hotlineIcon from '../../assets/hotline.png';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-section">
        <div className="contact-gradient-background">
          <img src={contactIcon} alt="Contact Icon" className="contact-icon" />
          <div className="contact-title">Contact</div>
        </div>
        <div className="contact-details-row" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="contact-info-column">
            <div className="contact-info-row">
              <img src={locationIcon} alt="Location" className="contact-info-icon" />
              <div>
                <div className="contact-info-title">Location</div>
                <div className="contact-info-desc">Suite 6.03A, Level 6, Menara OBYU, 4, Jalan PJU 8/8A, Damansara Perdana, 47820 Petaling Jaya, Selangor</div>
              </div>
            </div>
            <div className="contact-info-row">
              <img src={emailIcon} alt="Email" className="contact-info-icon" />
              <div>
                <div className="contact-info-title">Email</div>
                <div className="contact-info-desc">care@bookdoc.com</div>
              </div>
            </div>
            <div className="contact-info-row">
              <img src={hotlineIcon} alt="Hotline" className="contact-info-icon" />
              <div>
                <div className="contact-info-title">BookDoc Hotline:</div>
                <div className="contact-info-desc">1300-88-2362</div>
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
