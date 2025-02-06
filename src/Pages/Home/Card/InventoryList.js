// InventoryList.js
import React, { useContext } from 'react';
import { InventoryContext } from './Inventory';
import Card from './card';

const InventoryList = () => {
  const inventory = useContext(InventoryContext);

  return (
    <div style={styles.container}>
      {inventory.map((item) => (
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