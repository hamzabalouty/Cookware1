import React, { useEffect } from "react";
import "./Wishlist.css";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../../rtk/slices/favorite-slice";
import { addToCart } from "../../rtk/slices/cart-slice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wishlist">
      <div className="wishlist-title">
        <h2>Wishlist</h2>
        <p>Home / Wishlist</p>
      </div>
      <div className="wishlist-container">
        <table>
          <tr className="wishlist-table-head">
            <th className="delete-place"></th>
            <th className="img-place"></th>
            <th className="product-place">Product Name</th>
            <th className="price-place">Unit Price</th>
            <th className="stock-place">Stock Status</th>
            <th className="button-place"></th>
          </tr>
          {favorite.length > 0 ? (
            favorite.map((item) => (
              <tr className="wishlist-table-row">
                <td className="delete-place">
                  <MdDelete
                    onClick={() => dispatch(deleteCart(item))}
                    className="delete-icon"
                  />
                </td>
                <td className="img-place">
                  <img src={item.img} alt="wishlist-row-img" />
                </td>
                <td className="product-place">
                  <p>{item.title}</p>
                </td>
                <td className="price-place">
                  <p>${item.price}</p>
                </td>
                <td className="stock-place">
                  <p className="instock">In Stock</p>
                </td>
                <td className="button-place">
                  <button onClick={() => dispatch(addToCart(item))}>
                    ADD TO CART
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <p className="no-product-para">
              No products were added to the wishlist
            </p>
          )}
        </table>
      </div>
    </div>
  );
};

export default Wishlist;