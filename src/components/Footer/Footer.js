import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-box">
          <img
            src="https://ciyashop.potenzaglobalsolutions.com/cookware/wp-content/uploads/sites/90/2020/09/logo.png"
            alt="footer-logo"
          />
          <p>
            CiyaShop is an enchanting and easy to use e-Commerce WP theme that
            allows you to sell your products in a dynamic way.
          </p>
          <p>Mon to Fri : 10:00 AM � 7:00 PM</p>
          <p>Sat : 9:00 AM � 1:00 PM</p>
          <p>Sun : Closed</p>
        </div>
        <div className="footer-box">
          <h3>Contact Our Store</h3>
          <p>1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104</p>
          <p>support@ciyashop.com</p>
          <p>126-632-2345</p>
        </div>
        <div className="footer-box">
          <h3>My Account</h3>
          <p>> My Account</p>
          <p>> Shop</p>
          <p>> Cart</p>
          <p>> Checkout</p>
          <p>> Wishlist</p>
        </div>
        <div className="footer-box">
          <h3>Our Newsletter</h3>
          <p>Sign Up to our Newsletter to get the latest news and offers.</p>
          <div className="footer-search">
            <input type="text" placeholder="Enter Your Email" />
            <button>Send</button>
          </div>
          <p>* Don�t worry, we don�t spam</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;