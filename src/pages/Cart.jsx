import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";
import "../App.css";

function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item.id));
  };

  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
   <div className="cart-container">
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>

      {/* Title */}
      <h1 className="cart-title">🛒 Your Cart</h1>

      {/* Empty Cart */}
      {items.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          {/* Table */}
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="cart-product">{item.title}</td>

                  <td>${item.price}</td>

                  <td>
                    <button
                      className="qty-btn"
                      onClick={() => handleDecrement(item)}
                    >
                      -
                    </button>

                    <span className="qty-value">
                      {item.quantity}
                    </span>

                    <button
                      className="qty-btn"
                      onClick={() => handleIncrement(item)}
                    >
                      +
                    </button>
                  </td>

                  <td>
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>

                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemove(item)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Total */}
          <div className="cart-total">
            Total: ${totalAmount.toFixed(2)}
          </div>

          {/* Checkout */}
          <button
            onClick={() => navigate("/checkout")}
            className="checkout-btn"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;