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
import Rating from '@mui/material/Rating';
import Card from '../Card/card';
import Product_1 from '../Card/img/product-1-1.jpg'
import Product_2 from '../Card/img/product-2-1.jpg'
import Product_3 from '../Card/img/product-3-1.jpg'
import Product_4 from '../Card/img/product-4-1.jpg'
import Product_5 from '../Card/img/product-5-1.jpg'
import Product_6 from '../Card/img/product-6-1.jpg'
import Product_7 from '../Card/img/product-7-1.jpg'
import Product_8 from '../Card/img/product-8-1.jpg'
import Product_9 from '../Card/img/product-9-1.jpg'
import Product_10 from '../Card/img/product-10-1.jpg'
import top_product_1 from './img/thumbnail-1.jpg'
import top_product_2 from './img/thumbnail-2.jpg'
import top_product_3 from './img/thumbnail-3.jpg'
import top_product_4 from './img/thumbnail-4.jpg'
import top_product_5 from './img/thumbnail-5.jpg'
import top_product_6 from './img/thumbnail-6.jpg'
import top_product_7 from './img/thumbnail-7.jpg'
import top_product_8 from './img/thumbnail-8.jpg'
import top_product_9 from './img/thumbnail-9.jpg'
import top_product_10 from './img/thumbnail-10.jpg'
import top_product_11 from './img/thumbnail-11.jpg'
import top_product_12 from './img/thumbnail-12.jpg'
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
          <Button className='btn btn-success'>Shop now<a href='/' style={{ transform: 'scale(0.9)',color:'#fff'}}><ArrowRightAltIcon/></a></Button>
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
            <div className="cx-5">
            <Card
              key={5}
              tag={'best'}
              tag_desc={'-14%'}
              image={Product_5}
              category={'snacks'}
              description={'Blue Diamond Almonds Lightly Salted Vegetables'}
              price={'NestFood'}
              brand={'$30.00'}
            />
            </div>
            <div className="cx-6">
            <Card
              key={6}
              tag={''}
              tag_desc={''}
              image={Product_6}
              category={'snacks'}
              description={'Blue Diamond Almonds Lightly Salted Vegetables'}
              price={'NestFood'}
              brand={'$30.00'}
            />
            </div>
            <div className="cx-7">
            <Card
              key={7}
              tag={'sale'}
              tag_desc={'sale'}
              image={Product_7}
              category={'snacks'}
              description={'Blue Diamond Almonds Lightly Salted Vegetables'}
              price={'NestFood'}
              brand={'$10.00'}
            />
            </div>
            <div className="cx-8">
            <Card
              key={8}
              tag={'new'}
              tag_desc={'new'}
              image={Product_8}
              category={'snacks'}
              description={'Blue Diamond Almonds Lightly Salted Vegetables'}
              price={'NestFood'}
              brand={'$30.00'}
            />
            </div>
            <div className="cx-9">
            <Card
              key={4}
              tag={''}
              tag_desc={''}
              image={Product_9}
              category={'snacks'}
              description={'Blue Diamond Almonds Lightly Salted Vegetables'}
              price={'Old El Paso'}
              brand={'$30.00'}
            />
            </div>
            <div className="cx-10">
            <Card
              key={4}
              tag={''}
              tag_desc={''}
              image={Product_10}
              category={'snacks'}
              description={'Blue Diamond Almonds Lightly Salted Vegetables'}
              price={'Tyson'}
              brand={'$30.00'}
            />
            </div>
          </Slider>
        </div>
      </div>
      <h1>Deals of the Day</h1>
      <div className="brics">
        <h1>Hello world !!Hello world !!</h1>
      </div>
      <section className="TopproductSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col r-1">
              <h1>Top Selling</h1>
              <hr />
              <div className="rbx-1">
                  <img src={top_product_1} alt="Error 404" />
                  <div className="rbxx">
                  <a href='/'>Nestle Original Coffee-Mate Coffee Creamer</a>
                  <Rating className='rating_tpd' name="half-rating-read" value={2.5} defaultValue={2.5} precision={0.5} readOnly />
                  <h5>$32.85</h5>
                  </div>
              </div>
              <div className="rbx-1">
                  <img src={top_product_2} alt="Error 404" />
                  <div className="rbxx">
                  <a href='/'>Nestle Original Coffee-Mate Coffee Creamer</a>
                  <Rating className='rating_tpd' name="half-rating-read" value={2.5} defaultValue={2.5} precision={0.5} readOnly />
                  <h5>$32.85</h5>
                  </div>
              </div>
              <div className="rbx-1">
                <img src={top_product_3} alt="Error 404" />
                <div className="rbxx">
                  <a href='/'>Nestle Original Coffee-Mate Coffee Creamer</a>
                  <Rating className='rating_tpd' name="half-rating-read" value={2.5} defaultValue={2.5} precision={0.5} readOnly />
                  <h5>$32.85</h5>
                  </div>
              </div>
            </div>
            <div className="col r-1">
              <h1>Trending Products</h1>
              <hr />
              <div className="rbx-1">
                  <img src={top_product_4} alt="Error 404" />
                  <div className="rbxx">
                  <a href='/'>Organic Cage-Free Grade A Large Brown Eggs</a>
                  <Rating className='rating_tpd' name="half-rating-read" value={2.5} defaultValue={2.5} precision={0.5} readOnly />
                  <h5>$32.85</h5>
                  </div>
              </div>
              <div className="rbx-1">
                  <img src={top_product_5} alt="Error 404" />
                  <div className="rbxx">
                  <a href='/'>Seeds of Change Organic Quinoa, Brown, & Red Rice</a>
                  <Rating className='rating_tpd' name="half-rating-read" value={2.5} defaultValue={2.5} precision={0.5} readOnly />
                  <h5>$32.85</h5>
                  </div>
              </div>
              <div className="rbx-1">
                <img src={top_product_6} alt="Error 404" />
                <div className="rbxx">
                  <a href='/'>Naturally Flavored Cinnamon Vanilla Light Roast Coffee</a>
                  <Rating className='rating_tpd' name="half-rating-read" value={2.5} defaultValue={2.5} precision={0.5} readOnly />
                  <h5>$32.85</h5>
                  </div>
              </div>
            </div>
            <div className="col r-1">
              <h1>Recently added</h1>
              <hr />
              <div className="rbx-1">
                  <img src={top_product_7} alt="Error 404" />
                  <div className="rbxx">
                  <a href='/'>Pepperidge Farm Farmhouse Hearty White Bread</a>
                  <Rating className='rating_tpd' name="half-rating-read" value={2.5} defaultValue={2.5} precision={0.5} readOnly />
                  <h5>$32.85</h5>
                  </div>
              </div>
              <div className="rbx-1">
                  <img src={top_product_8} alt="Error 404" />
                  <div className="rbxx">
                  <a href='/'>Organic Frozen Triple Berry Blend</a>
                  <Rating className='rating_tpd' name="half-rating-read" value={2.5} defaultValue={2.5} precision={0.5} readOnly />
                  <h5>$32.85</h5>
                  </div>
              </div>
              <div className="rbx-1">
                <img src={top_product_9} alt="Error 404" />
                <div className="rbxx">
                  <a href='/'>Oroweat Country Buttermilk Bread</a>
                  <Rating className='rating_tpd' name="half-rating-read" value={2.5} defaultValue={2.5} precision={0.5} readOnly />
                  <h5>$32.85</h5>
                  </div>
              </div>
            </div>
            <div className="col r-1">
              <h1>Top Rated</h1>
              <hr />
              <div className="rbx-1">
                  <img src={top_product_10} alt="Error 404" />
                  <div className="rbxx">
                  <a href='/'>Foster Farms Takeout Crispy Classic Buffalo Wings</a>
                  <Rating className='rating_tpd' name="half-rating-read" value={2.5} defaultValue={2.5} precision={0.5} readOnly />
                  <h5>$32.85</h5>
                  </div>
              </div>
              <div className="rbx-1">
                  <img src={top_product_11} alt="Error 404" />
                  <div className="rbxx">
                  <a href='/'>Angie’s Boomchickapop Sweet & Salty Kettle Corn</a>
                  <Rating className='rating_tpd' name="half-rating-read" value={2.5} defaultValue={2.5} precision={0.5} readOnly />
                  <h5>$32.85</h5>
                  </div>
              </div>
              <div className="rbx-1">
                <img src={top_product_12} alt="Error 404" />
                <div className="rbxx">
                  <a href='/'>All Natural Italian-Style Chicken Meatballs</a>
                  <Rating className='rating_tpd' name="half-rating-read" value={2.5} defaultValue={2.5} precision={0.5} readOnly />
                  <h5>$32.85</h5>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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