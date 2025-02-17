import React, { useEffect, useState } from 'react';
import Logo_1 from '../../assets/img/image.png';
import Logo_2 from '../../assets/img/icon-compare.svg';
import Logo_3 from '../../assets/img/icon-heart.svg';
import Logo_4 from '../../assets/img/icon-cart.svg';
import Logo_5 from '../../assets/img/icon-user.svg';
import '../header/Header.css';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Select from '../SelectDrop/Select';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import PinDropIcon from '@mui/icons-material/PinDrop';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TuneIcon from '@mui/icons-material/Tune';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import axios from 'axios';
import Navbar from './Navbar';
import Home from '../../Pages/Home/Home';
export default function Header() {
  const [isOpenDropdown,setisOpenDropdown]=useState(false);
  const [categories]=useState([
    'Milk and Diaries',
    'Clothing and Beauty',
    'Pet Food & Toy',
    'Baking Material',
    'Fresh Fruit',
    'Wines and Drinks',
    'Fresh seafood',
    'Fast Food',
    'Bread and Juice',
    'Bread and Juice',
    'Noodles',
    'Icecream'
  ])
  // eslint-disable-next-line
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const getCountry = async (url) => {
      try {
        const res = await axios.get(url);
        if (res?.data?.data) {
          setCountryList(res.data.data.map((item) => item.country));
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);// eslint-disable-next-line
  return (
    <>
      <header>
          <div className="row">
            <div className="hb-1"><img src={Logo_1} alt="Error 404" /></div>
            <div className="headersearch">
              <div className="borderbox">
                <Select className="selectBox" data={categories} placeholder={'All Categories'}/>
                <div className="search">
                  <input type="text" placeholder='   Search for items...' />
                  <div className="searchIcon"><SearchIcon/></div>
                </div>
              </div>
            </div>
            <div className="countryList"><LocationOnIcon className='locationIcon'/><Select data={countryList} placeholder={'Your Location'}/></div>
            <ClickAwayListener onClickAway={() => { setisOpenDropdown(false) }}>
            <div className="hb-3">
              <div className="lg-2"><img src={Logo_2} alt="Error 404" /><span className='badge bg-success rounded-cirlce'>3</span><h5>Compare</h5></div>
              <div className="lg-3"><img src={Logo_3} alt="Error 404" /><span className='badge bg-success rounded-cirlce'>3</span><h5>Wishlist</h5></div>
              <div className="lg-4"><img src={Logo_4} alt="Error 404" /><span className='badge bg-success rounded-cirlce'>3</span><h5>Cart</h5></div>
              <div className="lg-5" onClick={()=>setisOpenDropdown(!isOpenDropdown)}><img src={Logo_5} alt="Error 404" /><span className='badge bg-success rounded-cirlce'>3</span><h5>Account</h5>
              {
                isOpenDropdown!==false && 
              <ul className="dropDownMenu">
              <li><Button><PersonIcon/> My Account</Button></li>
              <li><Button><PinDropIcon/> Order Tracking</Button></li>
              <li><Button><FavoriteBorderIcon/> My Wishlist</Button></li>
              <li><Button><TuneIcon/> Setting</Button></li>
              <li><Button><ExitToAppIcon/> Sign out</Button></li>
              </ul>
              }
              </div>
            </div>
            </ClickAwayListener>
          </div>
      </header>
      <div className="headerWrapper">
      <Navbar/>
      </div>
      <Home/>
    </>
  )
}
