// Card.js
import React, { useRef, useState } from 'react';
import './card.css'
import { Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShuffleIcon from '@mui/icons-material/Shuffle';
const Card = ({ image, description, price, category, brand }) => {
  const timer = useRef(null);
  const [cloud1, setcloud1] = useState(false);
  const [cloud2, setcloud2] = useState(false);
  const [cloud3, setcloud3] = useState(false);
  const handleTogglecloud=(cloud)=>{
    setcloud1(false);
    if(cloud==='cloud1') setcloud1(true);
    if(cloud==='cloud2') setcloud2(true);
    if(cloud==='cloud3') setcloud3(true);
  }
  const handleMouseLeave=(e)=>{
    if(e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)){
      timer.current=setTimeout(()=>{
        setcloud1(false)
        setcloud2(false)
        setcloud3(false)
      },1000)
    }
  }
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
      <div className='styler' style={styles.card} onMouseEnter={()=>setcloud1(false)}>
        <div className="imgx1">
          <img src={image} alt="Product" style={styles.image} />
          <div className="overlay">
            <ul className='list list-inline mb-0'>
              <li className='list list-inline-item'>
                <a className='cur' href='/'>
                  <FavoriteBorderOutlinedIcon className='Wish' onMouseEnter={() => { clearTimeout(timer.current); setcloud1(true); handleTogglecloud('cloud1') }} onMouseLeave={handleMouseLeave} />
                    {
                      cloud1 !== false &&
                      <>
                      <div className='Atw'><h6>Add to Wishlist</h6></div>
                      <div className='t-1'></div>
                      </>
                    }
                </a>
              </li>
              <li className='list list-inline-item'>
                <a className='cur' href='/'><ShuffleIcon className='Comp' onMouseEnter={() => { clearTimeout(timer.current); setcloud1(true); handleTogglecloud('cloud2') }} onMouseLeave={handleMouseLeave}/>
                {
                      cloud2 !== false &&
                      <>
                      <div className='Cmp' onMouseEnter={() => { clearTimeout(timer.current); setcloud2(true) }} onMouseLeave={handleMouseLeave}><h6>Compare</h6></div>
                      <div className='t-2'></div>
                      </>
                    }
                </a>
              </li>
              <li className='list list-inline-item'>
                <a className='cur' href='/'><VisibilityOutlinedIcon className='quickView' onMouseEnter={() => { clearTimeout(timer.current); setcloud1(true); handleTogglecloud('cloud3') }} onMouseLeave={handleMouseLeave}/>
                {
                      cloud3 !== false &&
                      <>
                      <div className='Qv' onMouseEnter={() => { clearTimeout(timer.current); setcloud3(true) }} onMouseLeave={handleMouseLeave}><h6>Quick View</h6></div>
                      <div className="t-3"></div>
                      </>
                    }
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='catg'>{category}</div>
        <div className='title'>{description}</div>
        <Rating className='rating' name="half-rating-read" value={2.5} defaultValue={2.5} precision={0.5} readOnly />
        <div className='brand d-block'>By <div className="brd">{brand}</div></div>
        <div className='pricex1'><strong>{price}</strong> <Button className='shopcartButton'><ShoppingCartOutlinedIcon style={{ transform: 'scale(0.8)' }}></ShoppingCartOutlinedIcon>Add</Button></div>
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
