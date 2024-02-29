import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import { productsData } from "../../data";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../rtk/slices/cart-slice";
import { addCart } from "../../rtk/slices/favorite-slice";

const Products = () => {
  const dispatch = useDispatch();
  return (
    <div className="products">
      <div className="products-title">
        <h2>Trending Products</h2>
        <p>Success is something of which we all want more.</p>
      </div>
      <div className="products-container">
        {productsData.map((item) => (
          <div key={item.id} className="product-container-unit">
            <div className="products-box">
              <Link to={`product/${item.id}`}>
                <img src={item.img} alt="product-img" />
              </Link>
              <ul>
                <li
                  onClick={() => dispatch(addCart(item))}
                  className="products-li-wishlist"
                >
                  <CiHeart className="product-wishlist-icon" />
                </li>
                <li className="products-li-view">
                  <Link to={`product/${item.id}`}>
                    <FaEye className="product-view-icon" />
                  </Link>
                </li>
              </ul>
              <button onClick={() => dispatch(addToCart(item))}>
                ADD TO CART
              </button>
            </div>
            <div className="product-box-details">
              <h5>{item.title}</h5>
              <h4>{item.category}</h4>
              <h2>${item.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;