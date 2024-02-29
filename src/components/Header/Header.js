import React, { useState } from "react";
import "./Header.css";
import Modal from "react-modal";
import { NavLink, Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="header-container">
        <Link to="/">
          <img
            src="https://ciyashop.potenzaglobalsolutions.com/cookware/wp-content/uploads/sites/90/2020/09/logo.png"
            alt="header-logo"
          />
        </Link>
        <nav className="header-nav">
          <li>
            <NavLink to="/" className="header-nav-link">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="header-nav-link">
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="header-nav-link">
              BLOG
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className="header-nav-link">
              SHOP
            </NavLink>
          </li>
          <li>
            <NavLink to="/account" className="header-nav-link">
              MY ACCOUNT
            </NavLink>
          </li>
          <li>
            <NavLink to="contact" className="header-nav-link">
              CONTACT US
            </NavLink>
          </li>
        </nav>
        <div className="header-right">
          <Link to="/cart">
            <HiOutlineShoppingCart className="cart-icon" />
          </Link>
          <Link to="/wishlist">
            <CiHeart className="wishlist-icon" />
          </Link>
          <CiMenuBurger
            className="menu-icon"
            onClick={() => setModalIsOpen(true)}
          />
          <Modal
            className="header-modal"
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
          >
            <div>
              <button onClick={() => setModalIsOpen(false)}>Close</button>
              <ul className="modal-list">
                <li>
                  <Link to="/" className="modal-link">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="modal-link">
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="modal-link">
                    BLOG
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="modal-link">
                    SHOP
                  </Link>
                </li>
                <li>
                  <Link to="/account" className="modal-link">
                    MY ACCOUNT
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="modal-link">
                    CONTACT US
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" className="modal-link">
                    WISHLIST
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="modal-link">
                    CART
                  </Link>
                </li>
              </ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Header;