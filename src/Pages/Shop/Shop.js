import React, { useState, useEffect } from "react";
import "./Shop.css";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa6";
import { shopData } from "../../data";
import { useDispatch } from "react-redux";
import { addToCart } from "../../rtk/slices/cart-slice";

const Shop = () => {
  const dispatch = useDispatch();

  const [rooms, setRooms] = useState([]);
  const [searchkey, setSearchkey] = useState("");
  const [cat, setCat] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");

  const [itemsData, setItemsData] = useState(shopData);

  //get all cat uniqe
  const allCategory = [
    "Any Category",
    ...new Set(shopData.map((i) => i.category)),
  ];
  //get all rating uniqe
  const allRatings = [
    "Any Rating",
    ...new Set(shopData.map((i) => i.newRating)),
  ];
  //get all price uniqe
  const allPrices = ["Any Price", ...new Set(shopData.map((i) => i.newPrice))];

  function filterByCategory(cat) {
    if (cat === "Any Category") {
      setItemsData(shopData);
    } else {
      const newArr = shopData.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  }

  function filterByRating(rat) {
    if (rat === "Any Rating") {
      setItemsData(itemsData);
    } else {
      const newArr = itemsData.filter((item) => item.newRating === rat);
      setItemsData(newArr);
    }
  }

  function filterByPrice(pri) {
    if (pri === "Any Price") {
      setItemsData(itemsData);
    } else {
      const newArr = itemsData.filter((item) => item.newPrice === pri);
      setItemsData(newArr);
    }
  }

  //to filter by category
  const onFilter = (cat) => {
    filterbyCategory(cat);
  };

  //to filter by rating
  const onRating = (rating) => {
    filterbyRating(rating);
  };

  //to filter by price
  const onPrice = (price) => {
    filterbyPrice(price);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="shop">
      <div className="shop-title">
        <h2>Shop</h2>
        <p>Home / Shop</p>
      </div>
      <div className="shop-container">
        <div className="shop-filters-section">
          <div className="shop-cat-section">
            <h3>PRODUCT CATEGORIES</h3>
            <div className="shop-filterby-category">
              <select
                value={cat}
                onChange={(e) => {
                  filterByCategory(e.target.value);
                }}
                className="filter-cat-select"
              >
                <option>CHOOSE CATEGORY.. </option>
                {allCategory.map((cat) => (
                  <option onChange={(e) => setItemsData(e.target.value)}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="shop-rat-section">
            <h3>PRODUCT RATING</h3>
            <div className="shop-filterby-rating">
              <select
                value={rating}
                onChange={(e) => {
                  filterByRating(e.target.value);
                }}
                className="filter-rating-select"
              >
                <option>CHOOSE RATING.. </option>
                {allRatings.map((rat) => (
                  <option onClick={() => onRating(rat)}>{rat}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="shop-price-section">
            <h3>PRODUCT PRICE</h3>
            <div className="shop-filterby-price">
              <select
                value={price}
                onChange={(e) => {
                  filterByPrice(e.target.value);
                }}
                className="filter-price-select"
              >
                <option>CHOOSE PRICE.. </option>
                {allPrices.map((price) => (
                  <option onClick={() => onPrice(price)}>{price}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="shop-products-section">
          {rooms.length > 0
            ? rooms.map((item) => (
                <div className="product-container-unit">
                  <div className="products-box">
                    <Link to="">
                      <img src={item.img} alt="product-img" />
                    </Link>
                    <button onClick={() => dispatch(addToCart(item))}>
                      ADD TO CART
                    </button>
                  </div>
                  <div className="product-box-details">
                    <h5>{item.category}</h5>
                    <h4>{item.title}</h4>
                    <h2>${item.price}</h2>
                  </div>
                </div>
              ))
            : itemsData.map((item) => (
                <div className="product-container-unit">
                  <div className="products-box">
                    <Link to="">
                      <img src={item.img} alt="product-img" />
                    </Link>
                    <button onClick={() => dispatch(addToCart(item))}>
                      ADD TO CART
                    </button>
                  </div>
                  <div className="product-box-details">
                    <h5>{item.category}</h5>
                    <h4>{item.title}</h4>
                    <h2>${item.price}</h2>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;