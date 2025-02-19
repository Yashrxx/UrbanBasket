import React from 'react'
import Logo from '../../assets/img/image.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import HistoryIcon from '@mui/icons-material/History';
import appStore from './img/app-store.jpg'
import playStore from './img/google-play.jpg'
import paymentGateway from './img/payment-method.png'
import PhoneIcon from './img/phone-call.svg';
import Facebook from './img/icon-facebook-white.svg'
import Instagram from './img/icon-instagram-white.svg'
import Pinterest from './img/icon-pinterest-white.svg'
import Twitter from './img/icon-twitter-white.svg'
import Youtube from './img/icon-youtube-white.svg'
function footer() {
  return (
    <>
    <div className='container-fluid-x-4'>
      <div className="contact">
      <img className='img_logo' src={Logo} alt="Error 404" />
        <div className="cont">
          <h6>Awesome grocery store website template</h6>
          <p><LocationOnOutlinedIcon className='cc-1'/><strong>Address</strong>: 69,Nattu pilliar koil st,Sowcarpet,Ch-01</p>
          <p><HeadsetMicOutlinedIcon className='cc-2'/><strong>Call Us</strong>:(+91) - 9840670184</p>
          <p><MailOutlinedIcon className='cc-3'/><strong>Email</strong>:sale@UrbanBasket.com</p>
          <p><HistoryIcon className='cc-4'/><strong>Hours</strong>:10:00 - 18:00, Mon - Sat</p>
        </div>
      </div>
      <div className="company">
        <h3>Company</h3>
        <a href="/">About Us</a>
        <a href="/">Delivery Information</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Terms & Conditions</a>
        <a href="/">Contact Us</a>
        <a href="/">Support Center</a>
        <a href="/">Careers</a>
      </div>
      <div className="account">
      <h3>Account</h3>
      <a href="/">Sign In</a>
      <a href="/">View Cart</a>
      <a href="/">My Wishlist</a>
      <a href="/">Track My order</a>
      <a href="/">Help Ticket</a>
      <a href="/">Shipping Details</a>
      <a href="/">Compare Products</a>
      </div>
      <div className="corporate">
      <h3>Corporate</h3>
      <a href="/">Become a Vendor</a>
      <a href="/">Affiliate Program</a>
      <a href="/">Farm Business</a>
      <a href="/">Farm Carrers</a>
      <a href="/">Our Suppliers</a>
      <a href="/">Accessibility</a>
      <a href="/">Promotions</a>
      </div>
      <div className="popular">
      <h3>Popular</h3>
      <a href="/">Milk & Flavoured Milk</a>
      <a href="/">Butter and Margarine</a>
      <a href="/">Eggs Substitutes</a>
      <a href="/">Marmalades</a>
      <a href="/">Sour Cream and Dips</a>
      <a href="/">Tea & Kombucha</a>
      <a href="/">Cheese</a>
      </div>
    </div>
    <div className="container-fluid-x-5">
    <h2>Install App</h2>
    <p>From App Store or Google Play</p>
    <img className='appSt' src={appStore} alt="Error 404" />
    <img className='playSt'src={playStore} alt="Error 404" />
    <p>Secured Payment Gateways</p>
    <img className='paymentGate' src={paymentGateway} alt="Error 404" />
    </div>
    <hr />
    <div className="container-fluid-x-6">
      <div className="cx-6-1">
        <p>© 2022, <span>Nest</span> - HTML Ecommerce Template
        All rights reserved</p>
      </div>
      <div className="cx-6-2">
        <div className="cx-6-2-1">
          <div className="h1p1">
          <img className='phonecall' src={PhoneIcon} alt="Error 404" />
          </div>
        <div className="h1p2">
        <h1>1900 - 6666</h1>
        <p>Working 8:00 - 22:00</p>
        </div>
        </div>
        <div className="cx-6-2-1">
          <div className="h1p1">
          <img className='phonecall' src={PhoneIcon} alt="Error 404" />
          </div>
        <div className="h1p2">
        <h1>1900 - 6666</h1>
        <p>Working 8:00 - 22:00</p>
        </div>
        </div>
      </div>
      <div className="cx-6-3">
        <div className="cx-6-3-1">
        <h6>Follow Us</h6>
        <div className="imagesBlock">
          <img src={Facebook} alt="Error 404" />
          <img src={Instagram} alt="Error 404" />
          <img src={Pinterest} alt="Error 404" />
          <img src={Twitter} alt="Error 404" />
          <img src={Youtube} alt="Error 404" />
        </div>
        </div>
        <p>Up to 15% discount on your first subscribe</p>
      </div>
    </div>
    </>
  )
}
export default footer