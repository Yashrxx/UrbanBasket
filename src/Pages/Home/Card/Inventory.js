// InventoryContext.js
import React, { createContext } from 'react';
import Product_1 from './img/product-1-1.jpg'
import Product_2 from './img/product-2-1.jpg'
import Product_3 from './img/product-3-1.jpg'
import Product_4 from './img/product-4-1.jpg'
import Product_5 from './img/product-5-1.jpg'
import Product_6 from './img/product-6-1.jpg'
import Product_7 from './img/product-7-1.jpg'
import Product_8 from './img/product-8-1.jpg'
import Product_9 from './img/product-9-1.jpg'
import Product_10 from './img/product-10-1.jpg'
// Create the context
export const InventoryContext = createContext();

// Define the provider component
export const InventoryProvider = ({ children }) => {
  const inventory = [
    {
      id: 1,
      image: Product_1,
      description: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
      price: '$10.00',
    },
    {
      id: 2,
      image: Product_2,
      description: 'All Natural Italian-Style Chicken Meatballs',
      price: '$20.00',
    },
    {
      id: 3,
      image: Product_3,
      description: 'Angie’s Boomchickapop Sweet & Salty Kettle Corn',
      price: '$40.00',
    },
    {
        id: 4,
        image: Product_4,
        description: 'Foster Farms Takeout Crispy Classic Buffalo Wings',
        price: '$10.00',
      },
      {
        id: 5,
        image: Product_5,
        description: 'Blue Diamond Almonds Lightly Salted Vegetables',
        price: '$30.00',
      },
      {
        id: 6,
        image: Product_6,
        description: 'Blue Diamond Almonds Lightly Salted Vegetables',
        price: '$30.00',
      },
      {
        id: 7,
        image: Product_7,
        description: 'Blue Diamond Almonds Lightly Salted Vegetables',
        price: '$30.00',
      },
      {
        id: 8,
        image: Product_8,
        description: 'Blue Diamond Almonds Lightly Salted Vegetables',
        price: '$30.00',
      },
      {
        id: 9,
        image: Product_9,
        description: 'Blue Diamond Almonds Lightly Salted Vegetables',
        price: '$30.00',
      },
      {
        id: 10,
        image: Product_10,
        description: 'Blue Diamond Almonds Lightly Salted Vegetables',
        price: '$30.00',
      },
  ];

  return (
    <InventoryContext.Provider value={inventory}>
      {children}
    </InventoryContext.Provider>
  );
};
//eslint-disable-next-line
export default {InventoryContext,InventoryProvider};