// App.js
import React from 'react';
import { InventoryProvider } from '../Card/Inventory';
import InventoryList from '../Card/InventoryList';
const Product = () => {
  return (
    <div  className='inventory_products'>
    <InventoryProvider>
      <div style={styles.app}>
        <div className="inventory_nav">
          <h1>Popular Products</h1>
          <div className="catList">
            <li>All</li>
            <li>Milk and Diaries</li>
            <li>Cofees and Teas</li>
            <li>Pet Foods</li>
            <li>Meats</li>
            <li>Vegetables</li>
            <li>Fruits</li>
          </div>
        </div>
        <InventoryList />
      </div>
    </InventoryProvider>
    </div>
  );
};

const styles = {
  app: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
};

export default Product;