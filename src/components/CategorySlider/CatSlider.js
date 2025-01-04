import React from 'react'
import './CatSlider.css'
import Slider from 'react-slick'
import { useRef, useEffect } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import cat_1 from './CatSlider_img/cat-1.png'
import cat_2 from './CatSlider_img/cat-2.png'
import cat_3 from './CatSlider_img/cat-3.png'
import cat_4 from './CatSlider_img/cat-4.png'
import cat_5 from './CatSlider_img/cat-5.png'
import cat_6 from './CatSlider_img/cat-9.png'
import cat_7 from './CatSlider_img/cat-11.png'
import cat_8 from './CatSlider_img/cat-12.png'
import cat_9 from './CatSlider_img/cat-13.png'
import cat_10 from './CatSlider_img/cat-14.png'
import cat_11 from './CatSlider_img/cat-15.png'
export default function CatSlider() {
    const sliderRef_1 = useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade: false,
    };
    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef_1.current) {
                sliderRef_1.current.slickNext(); // Move to the next slide
            }
        }, 50000); // Change slide every 3 seconds (3000ms)
        // Clean up the interval when the component unmounts or when dependencies change
        return () => clearInterval(interval);
    }, []);
    // Add a keydown event listener for left and right arrow keys
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (sliderRef_1.current) {
                if (event.key === 'ArrowLeft') {
                    event.preventDefault();
                    sliderRef_1.current.slickPrev(); // Move to the previous slide
                } else if (event.key === 'ArrowRight') {
                    event.preventDefault();
                    sliderRef_1.current.slickNext(); // Move to the next slide
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []); // End of keydown listener addition
    return (
        <div className='CatSliderSection'>
            <div className="container-fluid">
                <div className="titleMenu">
                    <div className='hd'>Featured Categories</div>
                    <div className="itemList">
                        <p>Cake and Milk</p>
                        <p>Coffes and Teas</p>
                        <p>Pet Foods</p>
                        <p>Vegetables</p>
                    </div>
                    <div className="click">
                        <button className="cat-slider-button prev-1" onClick={() => sliderRef_1.current.slickPrev()}>
                            <KeyboardArrowLeftIcon />
                        </button>
                        <button className="cat-slider-button next-1" onClick={() => sliderRef_1.current.slickNext()}>
                            <KeyboardArrowRightIcon />
                        </button>
                    </div>
                </div>
                <div className="cat-slider-img">
                    <Slider {...settings} ref={sliderRef_1} className='cat_Slider_Main'>
                        <div className="bx-1">
                            <img src={cat_1} alt="Error 404" />
                            <h6>Vegetables</h6>
                        </div>
                        <div className="bx-2">
                            <img src={cat_2} alt="Error 404" />
                            <h6>Strawberry</h6>
                        </div>
                        <div className="bx-3">
                            <img src={cat_3} alt="Error 404" />
                            <h6>Black Plum</h6>
                        </div>
                        <div className="bx-4">
                            <img src={cat_4} alt="Error 404" />
                            <h6>Custard Apple</h6>
                        </div>
                        <div className="bx-5">
                            <img src={cat_5} alt="Error 404" />
                            <h6>Coffe & Tea</h6>
                        </div>
                        <div className="bx-6">
                            <img src={cat_6} alt="Error 404" />
                            <h6>Headphone</h6>
                        </div>
                        <div className="bx-7">
                            <img src={cat_7} alt="Error 404" />
                            <h6>Cake & Milk</h6>
                        </div>
                        <div className="bx-8">
                            <img src={cat_8} alt="Error 404" />
                            <h6>Organic Kiwi</h6>
                        </div>
                        <div className="bx-9">
                            <img src={cat_9} alt="Error 404" />
                            <h6>Peach</h6>
                        </div>
                        <div className="bx-10">
                            <img src={cat_10} alt="Error 404" />
                            <h6>Red Apple</h6>
                        </div>
                        <div className="bx-11">
                            <img src={cat_11} alt="Error 404" />
                            <h6>Snack</h6>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
