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
      tag:'hot',
      tag_desc:'hot',
      image: Product_1,
      category: 'snacks',
      description: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
      brand:'NestFood',
      price: '$10.00',
    },
    {
      id: 2,
      tag:'sale',
      tag_desc:'sale',
      image: Product_2,
      category: 'snacks',
      description: 'All Natural Italian-Style Chicken Meatballs',
      brand:'Stouffer',
      price: '$20.00',
    },
    {
      id: 3,
      tag:'new',
      tag_desc:'new',
      image: Product_3,
      category: 'snacks',
      description: 'Angie’s Boomchickapop Sweet & Salty Kettle Corn',
      brand:'Starkist',
      price: '$40.00',
    },
    {
        id: 4,
        tag:'',
        tag_desc:'',
        image: Product_4,
        category: 'snacks',
        description: 'Foster Farms Takeout Crispy Classic Buffalo Wings',
        brand:'NestFood',
        price: '$10.00',
      },
      {
        id: 5,
        image: Product_5,
        tag:'best',
        tag_desc:'-14%',
        category: 'snacks',
        description: 'Blue Diamond Almonds Lightly Salted Vegetables',
        brand:'NestFood',
        price: '$30.00',
      },
      {
        id: 6,
        image: Product_6,
        tag:'',
        tag_desc:'',
        category: 'snacks',
        description: 'Blue Diamond Almonds Lightly Salted Vegetables',
        brand:'NestFood',
        price: '$30.00',
      },
      {
        id: 7,
        image: Product_7,
        tag:'sale',
        tag_desc:'Sale',
        category: 'snacks',
        description: 'Blue Diamond Almonds Lightly Salted Vegetables',
        brand:'NestFood',
        price: '$30.00',
      },
      {
        id: 8,
        tag:'new',
        tag_desc:'New',
        image: Product_8,
        category: 'snacks',
        description: 'Blue Diamond Almonds Lightly Salted Vegetables',
        brand:'NestFood',
        price: '$30.00',
      },
      {
        id: 9,
        tag:'',
        tag_desc:'',
        image: Product_9,
        category: 'snacks',
        description: 'Blue Diamond Almonds Lightly Salted Vegetables',
        brand:'Old El Paso',
        price: '$30.00',
      },
      {
        id: 10,
        tag:'',
        tag_desc:'',
        image: Product_10,
        category: 'snacks',
        description: 'Blue Diamond Almonds Lightly Salted Vegetables',
        brand:'Tyson',
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