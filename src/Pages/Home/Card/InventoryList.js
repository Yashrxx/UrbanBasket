// InventoryList.js
import React, { useContext } from 'react';
import { InventoryContext } from './Inventory';
import Card from './card';
const InventoryList = ({x}) => {
  const inventory = useContext(InventoryContext);
  const filteredInventory = inventory.filter(item => item.id >= 1 && item.id <= x);
  return (
    <div style={styles.container}>
      {filteredInventory.map((item) => (
        <Card
          key={item.id}
          tag={item.tag}
          tag_desc={item.tag_desc}
          image={item.image}
          category={item.category}
          description={item.description}
          price={item.price}
          brand={item.brand}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
  },
};

export default InventoryList;