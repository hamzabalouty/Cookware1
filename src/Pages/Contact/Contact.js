import React, { useEffect } from "react";
import "./Contact.css";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact">
      <div className="contact-title">
        <h2>Contact</h2>
        <p>Home / Contact</p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            It would be great to hear from you! If you got any questions, please
            do not hesitate to send us a message. We are looking forward to
            hearing from you! We reply within 24 hours!
          </p>
          <div className="contact-info-row">
            <div className="contact-info-icon">
              <CiLocationOn className="location-icon" />
            </div>
            <div className="contact-info-content">
              <h4>17504 Carlton Cuevas Rd,</h4>
              <p>Gulfport, MS, 39503</p>
            </div>
          </div>
          <div className="contact-info-row">
            <div className="contact-info-icon">
              <FaPhoneAlt className="phone-icon" />
            </div>
            <div className="contact-info-content">
              <h4>17504 Carlton Cuevas Rd,</h4>
              <p>Gulfport, MS, 39503</p>
            </div>
          </div>
          <div className="contact-info-row">
            <div className="contact-info-icon">
              <CiMail className="mail-icon" />
            </div>
            <div className="contact-info-content">
              <h4>17504 Carlton Cuevas Rd,</h4>
              <p>Gulfport, MS, 39503</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <p>Have a project or a question? We'd love to hear from you.</p>
          <div className="contact-form-row">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email Address" />
          </div>
          <div className="contact-form-row">
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" />
          </div>
          <div className="contact-form-row">
            <textarea placeholder="Your Message"></textarea>
          </div>
          <div className="contact-form-row">
            <button>SEND MESSAGE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;