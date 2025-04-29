// src/components/MenuItem.js
import React from 'react';
import './MenuItem.css';

const MenuItem = ({ item, addToCart }) => {
  return (
    <div className="menu-item">
      {/* Use 'loading="lazy"' for lazy loading the image */}
      <img 
        src={item.image} 
        alt={item.name} 
        className="menu-item-image" 
        loading="lazy" 
      />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p className="price">₹{item.price.toFixed(2)}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default MenuItem;
