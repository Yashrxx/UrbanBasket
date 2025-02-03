// Card.js
import React from 'react';
import './card.css'
import { Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShuffleIcon from '@mui/icons-material/Shuffle';
 const Card = ({ image, description, price, category ,brand}) => {
//   document.querySelectorAll('.rating').forEach(rating => {
//     const stars = rating.querySelectorAll('.star');

  //   stars.forEach(star => {
  //     star.addEventListener('mouseover', () => {
  //       resetStars(stars);
  //       highlightStars(star);
  //     });

  //     star.addEventListener('click', () => {
  //       rating.dataset.rating = star.dataset.value;
  //     });

  //     star.addEventListener('mouseleave', () => {
  //       resetStars(stars);
  //       highlightStarsToRating(rating);
  //     });
  //   });

  //   highlightStarsToRating(rating);
  // });

  // function resetStars(stars) {
  //   stars.forEach(star => star.classList.remove('selected'));
  // }

  // function highlightStars(star) {
  //   const index = Array.from(star.parentElement.children).indexOf(star);
  //   star.parentElement.querySelectorAll('.star').forEach((s, i) => {
  //     if (i <= index) s.classList.add('selected');
  //   });
  // }

  // function highlightStarsToRating(rating) {
  //   const selectedRating = rating.dataset.rating;
  //   rating.querySelectorAll('.star').forEach((star, index) => {
  //     if (index < selectedRating) star.classList.add('selected');
  //   });
  // }
  return (
    <div className="container-fluid-x">
      <div className='styler' style={styles.card}>
        <div className="imgx1">
          <img src={image} alt="Product" style={styles.image} />
          <div className="overlay">
          <ul className='list list-inline mb-0'>
            <li className='list list-inline-item'>
              <a className='cur' href='/'><FavoriteBorderOutlinedIcon className='Wish'/></a>
            </li>
            <li className='list list-inline-item'>
              <a className='cur' href='/'><ShuffleIcon className='Comp'/></a>
            </li>
            <li className='list list-inline-item'>
              <a className='cur' href='/'><VisibilityOutlinedIcon className='quickView'/></a>
            </li>
          </ul>
          </div>
        </div>
        <div className='catg'>{category}</div>
        <div className='title'>{description}</div>
        <Rating className='rating' name="half-rating-read" value={2.5} defaultValue={2.5} precision={0.5} readOnly />
        <div className='brand d-block'>By <div className="brd">{brand}</div></div>
        <div className='pricex1'><strong>{price}</strong> <Button className='shopcartButton'><ShoppingCartOutlinedIcon style={{transform:'scale(0.8)'}}></ShoppingCartOutlinedIcon>Add</Button></div>
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
    height: '450px',
  },
  image: {
    width: '200px',
    height: '220px',
    objectFit: 'cover',
  },
};

export default Card;
