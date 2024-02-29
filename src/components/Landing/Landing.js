import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-container">
        <div className="landing-content">
          <h4>Cookware</h4>
          <h2>We're Here To Help</h2>
          <h3>Kitchen stuff New Collection Here</h3>
          <Link to="/shop" className="landing-btn">
            SHOP NOW
          </Link>
        </div>
        <div className="landing-img">
          <img
            src="https://ciyashop.potenzaglobalsolutions.com/cookware/wp-content/uploads/sites/90/2020/09/slider-img.png"
            alt="landing-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;