import React, { useEffect } from "react";
import "./Cart.css";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../rtk/slices/cart-slice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cart">
      <div className="cart-title">
        <h2>Cart</h2>
        <p>Home / Cart</p>
      </div>
      <div className="cart-container">
        <table>
          <tr className="cart-table-head">
            <th className="delete-place"></th>
            <th className="img-place"></th>
            <th className="product-place">Product Name</th>
            <th className="price-place">Unit Price</th>
            <th className="quantity-place">Quantity</th>
            <th className="subtotal-place">Subtotal</th>
          </tr>
          {cart.length > 0 ? (
            cart.map((item) => (
              <tr className="cart-table-row">
                <td className="delete-place">
                  <MdDelete
                    onClick={() => dispatch(deleteFromCart(item))}
                    className="delete-icon"
                  />
                </td>
                <td className="img-place">
                  <img src={item.img} alt="cart-row-img" />
                </td>
                <td className="product-place">
                  <p>{item.title}</p>
                </td>
                <td className="price-place">
                  <p>${item.price}</p>
                </td>
                <td className="quantity-place">
                  <p className="">{item.quantity}</p>
                </td>
                <td className="subtotal-place">
                  <p>${item.quantity * item.price}</p>
                </td>
              </tr>
            ))
          ) : (
            <p className="no-product-para">
              No products were added to the Cart
            </p>
          )}
          <tr className="cart-table-row">
            <td className="total-price">
              <p>TOTAL PRICE</p>
            </td>
            <td></td>
            <td></td>
            <td className="total-price-val">
              <p>${totalPrice}</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Cart;