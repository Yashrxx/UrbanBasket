// InventoryContext.js
import React, { createContext } from 'react';

// Create the context
export const InventoryContext = createContext();

// Define the provider component
export const InventoryProvider = ({ children }) => {
  const inventory = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150'
      tag_desc:'hot',
      description: 'Item 1 Description',
      price: '$10.00',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      tag_desc:'Sale',
      description: 'Item 2 Description',
      price: '$20.00',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      tag_desc:'New',
      description: 'Item 3 Description',
      price: '$30.00',
    },
  ];

  return (
    <InventoryContext.Provider value={inventory}>
      {children}
    </InventoryContext.Provider>
  );
};

