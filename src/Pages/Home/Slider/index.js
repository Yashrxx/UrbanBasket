import React from 'react'
import Slider from 'react-slick'
import './index.css'
import { useRef, useEffect } from 'react';
import planeIcon from '../../../assets/img/icon-plane.png'
export default function HomeSlider() {

    const sliderRef = useRef(null);
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };
    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                sliderRef.current.slickNext(); // Move to the next slide
            }
        }, 50000); // Change slide every 3 seconds (3000ms)

        // Clean up the interval when the component unmounts or when dependencies change
        return () => clearInterval(interval);
    }, []);
    // Add a keydown event listener for left and right arrow keys
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (sliderRef.current) {
                if (event.key === 'ArrowLeft') {
                    event.preventDefault();
                    sliderRef.current.slickPrev(); // Move to the previous slide
                } else if (event.key === 'ArrowRight') {
                    event.preventDefault();
                    sliderRef.current.slickNext(); // Move to the next slide
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
        <section className='homeSlider'>
            <div className="container-fluid">
                <div className="slider-img">
                    <Slider {...settings} ref={sliderRef}>
                        <div className='Slider_1'>
                            <div className='heading-1'>Don't miss amazing grocery deals</div>
                            <div className='heading-2'>Sign up for the daily newsletter</div>
                            <form className="form-subscriber d-flex">
                                <div className="plane-icon">
                                    <img src={planeIcon} alt="Error 404" />
                                </div>
                                <div className="inputTag">
                                    <input type="email" placeholder='Your email address' tabIndex="-1" />
                                </div>
                                <div className="sub">
                                    <button className='btn' type='submit' tabIndex={0}>Subscribe</button>
                                </div>
                            </form>
                        </div>
                        <div className='Slider_2'>
                            <div className='heading-1'>Fresh Vegetable big Discount</div>
                            <div className='heading-2'>Save upto 50% off on your first order</div>
                            <form className="form-subscriber d-flex">
                                <div className="plane-icon">
                                    <img src={planeIcon} alt="Error 404" />
                                </div>
                                <div className="inputTag">
                                    <input type="email" placeholder='Your email address' tabIndex="-1" />
                                </div>
                                <div className="sub">
                                    <button className='btn' type='submit' tabIndex={0}>Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}
