// src/components/RestaurantList.js
import React from 'react';
import MenuItem from './MenuItem';

const RestaurantList = ({ restaurants, addToCart }) => {
  return (
    <div  className='rl'>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="restaurant">
          <h2>{restaurant.name}</h2>
          <div className="menu">
            {restaurant.menu.map((item) => (
              <MenuItem key={item.id} item={item} addToCart={addToCart} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
