// src/components/Cart.js
import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleConfirmOrder = () => {
    if (cartItems.length === 0) return;
    // You could also send order to backend here
    setOrderConfirmed(true);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price.toFixed(2)}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>

          <button className="confirm-button" onClick={handleConfirmOrder}>
            Confirm Order
          </button>

          {orderConfirmed && <p className="confirmation-message">🎉 Order Confirmed! Thank you!</p>}
        </>
      )}
    </div>
  );
};

export default Cart;
