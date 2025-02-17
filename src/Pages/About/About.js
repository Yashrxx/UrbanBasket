import React from 'react'
import planeIcon from '../../assets/img/icon-plane.png'
import icon_1 from './img/icon-1.svg'
import icon_2 from './img/icon-2.svg'
import icon_3 from './img/icon-3.svg'
import icon_4 from './img/icon-4.svg'
import icon_5 from './img/icon-5.svg'
function About() {
    return (
        <>
            <div className='rx'>
                <div className="crt">
                    <h1>Stay home & get your daily
                        needs from our shop </h1>
                    <h6>Start You'r Daily Shopping with <span style={{color: "#3BB77E"}}>Niraag India</span></h6>
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
            </div>
                <div className="abt">
                    <div className="abt-1">
                        <div className="ab">
                            <img src={icon_1} alt="Error 404" />
                        </div>
                        <div className="ab-1">
                        <h4>Best prices & Offers <p>Orders $50 or more</p></h4>
                        </div>
                    </div>
                    <div className="abt-1">
                    <div className="ab">
                            <img src={icon_2} alt="Error 404" />
                        </div>
                        <div className="ab-1">
                        <h4>Free delivery <p>24/7 amazing services</p></h4>
                        </div>
                    </div>
                    <div className="abt-1">
                    <div className="ab">
                            <img src={icon_3} alt="Error 404" />
                        </div>
                        <div className="ab-1">
                        <h4>Great daily deal <p>When you sign up</p></h4>
                        </div>
                    </div>
                    <div className="abt-1">
                    <div className="ab">
                            <img src={icon_4} alt="Error 404" />
                        </div>
                        <div className="ab-1">
                        <h4>Wide assortment <p>Mega Discounts</p></h4>
                        </div>
                    </div>
                    <div className="abt-1">
                    <div className="ab">
                            <img src={icon_5} alt="Error 404" />
                        </div>
                        <div className="ab-1">
                        <h4>Easy returns <p>Within 30 days</p></h4>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default About
