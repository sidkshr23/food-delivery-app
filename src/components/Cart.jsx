// src/components/Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  // Calculate total price
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <p><strong>{item.name}</strong> - ${item.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)} className="remove-button">
                Remove from Cart
              </button>
            </div>
          ))}
          <hr />
          <p className="cart-total"><strong>Total:</strong> ${total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
