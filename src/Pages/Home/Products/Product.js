// App.js
import React from 'react';
import { InventoryProvider } from '../Card/Inventory';
import InventoryList from '../Card/InventoryList';
const Product = () => {
  return (
    <div  className='inventory_products'>
    <InventoryProvider className='inventory_products'>
      <div style={styles.app}>
        <h1>Inventory</h1>
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

