import React, { useEffect } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import { productsData } from "../../data";
import { useDispatch } from "react-redux";
import { addCart } from "../../rtk/slices/favorite-slice";
import { addToCart } from "../../rtk/slices/cart-slice";

const Product = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === +id);
  const { img, title, desc, price, category } = product;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();

  return (
    <div className="product">
      <div className="product-title">
        <h2>{category}</h2>
        <p>
          Home / {title} / {category}
        </p>
      </div>
      <div className="product-container">
        <div className="product-img-container">
          <img src={img} alt="product-img" />
        </div>
        <div className="product-right-content">
          <h3>{title}</h3>
          <h2>{price}</h2>
          <p>{desc}</p>
          <button
            onClick={() => dispatch(addCart(product))}
            className="product-to-wishlist"
          >
            ADD TO WISHLIST
          </button>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="product-to-cart"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;