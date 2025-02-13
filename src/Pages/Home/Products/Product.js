// App.js
import React, { useRef , useEffect} from 'react';
import { InventoryProvider } from '../Card/Inventory';
import InventoryList from '../Card/InventoryList';
import { Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Card from '../Card/card';
import Product_1 from '../Card/img/product-1-1.jpg'
import Product_2 from '../Card/img/product-2-1.jpg'
import Product_3 from '../Card/img/product-3-1.jpg'
import Product_4 from '../Card/img/product-4-1.jpg'
const Product = () => {
  const Slider_2 = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToscroll: 1,
    fade: false,
    arrows: false
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if (Slider_2.current) {
        Slider_2.current.slickNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (Slider_2.current) {
  //       if (event.key === 'ArrowLeft') {
  //         event.preventDefault();
  //         Slider_2.current.slickNext();
  //       }
  //       if (event.key === 'ArrowRight') {
  //         event.preventDefault();
  //         Slider_2.current.slickNext();
  //       }
  //       window.addEventListener('KeyDown', handleKeyDown);
  //       return () => window.addEventListener('KeyDown', handleKeyDown);
  //     }
  //   }
  // })
  return (
    <div className='inventory_products'>
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
      <div className="container-fluid-x2">
        <div className="prop">
          <h1>Daily Best Sales</h1>
        </div>
        <div className="lef">
          <h5>Featured</h5>
          <h5>Popular</h5>
          <h5>New added</h5>
        </div>
      </div>
      <div className="container-fluid-x3">
        <div className="imgb_4">
          <h1>Bring nature into your home</h1>
          <Button className='btn btn-success'>Shop now<ArrowRightAltIcon style={{ transform: 'scale(0.8)' }} /></Button>
        </div>
        <div className="Slider_2">
            <button className="prev-2" onClick={() => Slider_2.current.slickPrev()}>
              <KeyboardArrowLeftIcon />
            </button>
            <button className="next-2" onClick={() => Slider_2.current.slickNext()}>
              <KeyboardArrowRightIcon />
            </button>
          <Slider {...settings} ref={Slider_2}>
            <div className="cx-1">
            <Card 
              key={1}
              tag={'hot'}
              tag_desc={'hot'}
              image={Product_1}
              category={'snacks'}
              description={'Seeds of Change Organic Quinoa, Brown, & Red Rice'}
              price={'NestFood'}
              brand={'$10.00'}
            />
            </div>
            <div className="cx-2">
            <Card
              key={2}
              tag={'sale'}
              tag_desc={'sale'}
              image={Product_2}
              category={'snacks'}
              description={'All Natural Italian-Style Chicken Meatballs'}
              price={'Stouffer'}
              brand={'$20.00'}
            />
            </div>
            <div className="cx-3">
            <Card
              key={3}
              tag={'new'}
              tag_desc={'new'}
              image={Product_3}
              category={'snacks'}
              description={'Angie’s Boomchickapop Sweet & Salty Kettle Corn'}
              price={'Starkist'}
              brand={'$40.00'}
            />
            </div>
            <div className="cx-4">
            <Card
              key={4}
              tag={''}
              tag_desc={''}
              image={Product_4}
              category={'snacks'}
              description={'Foster Farms Takeout Crispy Classic Buffalo Wings'}
              price={'NestFood'}
              brand={'$10.00'}
            />
            </div>
          </Slider>
        </div>
      </div>
      <h1>Hello world!!</h1>
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