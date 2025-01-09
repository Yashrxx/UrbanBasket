// Card.js
import React from 'react';
import './card.css'
const Card = ({ image, description, price }) => {
  return (
    <div className="container-fluid-x">
        <div style={styles.card}>
          <img src={image} alt="Product" style={styles.image} />
          <p>{description}</p>
          <p><strong>{price}</strong></p>
        </div>
      </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    width: '90%',
    margin: '10px',
    height: '425px',
  },
  image: {
    width: '175px',
    height: '200px',
    objectFit: 'cover',
  },
};

export default Card;
