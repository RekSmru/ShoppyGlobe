import {React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

    // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleOrder = () => {
    if (!form.name || !form.email || !form.address || !form.phone) {
      alert("Please fill all fields!");
      return;
    }

    // Show order placed message
    alert("✅ Order placed");

    // Clear Redux cart
    dispatch(clearCart());

    // Clear localStorage cart if used
    localStorage.removeItem("cart");

    // Redirect to home page
    navigate("/");
  };


  return (
     

     <div style={{ maxWidth: "500px", margin: "2rem auto", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
     {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

      <h2>Checkout</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <h3>Order Summary</h3>
      {items.length > 0 ? (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.title} x {item.quantity} - ${item.price * item.quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <p>
        <strong>Total: </strong>${items.reduce((sum, item) => sum + item.price * item.quantity, 0)}
      </p>

      <button
        onClick={handleOrder}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem", backgroundColor: "#237227", color: "#fff", border: "none", borderRadius: "4px" }}
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;