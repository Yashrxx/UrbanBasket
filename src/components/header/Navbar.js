import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import { Button, ClickAwayListener } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }
  let location = useLocation();
  useEffect(() => {
  }, [location])
  const timer = useRef(null);
  const [dropx, setdropx] = useState(false);
  const [drop1, setdrop1] = useState(false);
  const [drop2, setdrop2] = useState(false);
  const [drop3, setdrop3] = useState(false);
  const [drop4, setdrop4] = useState(false);
  const [drop5, setdrop5] = useState(false);
  const [drop6, setdrop6] = useState(false);
  const handleDropdownToggle = (dropdown) => {
    // Close all dropdowns first
    setdropx(false);
    setdrop1(false);
    setdrop2(false);
    setdrop3(false);
    setdrop4(false);
    setdrop5(false);
    setdrop6(false);
    // Then open the selected dropdown
    if (dropdown === 'dropx') setdropx(true);
    if (dropdown === 'drop1') setdrop1(true);
    if (dropdown === 'drop2') setdrop2(true);
    if (dropdown === 'drop3') setdrop3(true);
    if (dropdown === 'drop4') setdrop4(true);
    if (dropdown === 'drop5') setdrop5(true);
    if (dropdown === 'drop6') setdrop6(true);
  };

  // Handle mouse leave from both button and dropdown
  const handleMouseLeave = (e) => {
    if (!e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) {
      // If the mouse is moving to the dropdown or button, don't start the timer
      return;
    }
    timer.current = setTimeout(() => {
      setdropx(true);
      setdrop2(false);
      setdrop1(false);
      setdrop3(false);
      setdrop4(false);
      setdrop5(false);
      setdrop6(false);
    }, 100); // 1-second delay before closing
  };
  return (
    <div className='Nav d-flex align-items-center flex-row'>
      <div className="container-fluid">
        <div className="row">
          <div className="part-1" style={{ width: "18%", marginLeft: "10px" }}>
            <Button onClick={() => handleDropdownToggle('dropx')} onMouseEnter={() => { clearTimeout(timer.current); setdropx(true); handleDropdownToggle('dropx') }} onMouseLeave={handleMouseLeave} className='text-white catTab'><GridViewIcon />&nbsp; Browse All Categories<KeyboardArrowDownIcon /></Button>
            {/* {
              dropx !== false &&
              <span className="top-products" onMouseEnter={() => { clearTimeout(timer.current); setdropx(true); handleDropdownToggle('dropx') }}
                onMouseLeave={handleMouseLeave}>
                <div className="top-items">
                  <div className="hello">
                    <li className='cube'>Home 1</li>
                    <li className='cube'>Home 2</li>
                    <li className='cube'>Home 3</li>
                    <li className='cube'>Home 4</li>
                    <li className='cube'>Home 5</li>
                  </div>
                  <div className="world">
                    <li className='cube'>Home 6</li>
                    <li className='cube'>Home 7</li>
                    <li className='cube'>Home 8</li>
                    <li className='cube'>Home 9</li>
                    <li className='cube'>Home 10</li>
                  </div>
                </div>
              </span>
            } */}
          </div>
          <div className="part-2" style={{ width: "65%" }}>
            <nav>
              <ClickAwayListener onClickAway={() => { setdrop1(false); setdrop2(false); setdrop3(false) }}>
                <ul className='d-flex flex-row justify-content-evenly content'>
                  <li><LocalFireDepartmentOutlinedIcon style={{ color: "#29A56C", fontWeight: "100" }} /><Link className='listing' to="/listing">Deals</Link></li>
                  <li className="home" onClick={() => handleDropdownToggle('drop1')} onMouseEnter={() => { clearTimeout(timer.current); setdrop1(true); handleDropdownToggle('drop1') }} onMouseLeave={handleMouseLeave}><Link to="/urbanBasket" className={`homey ${location.pathname === "/urbanBasket" ? "active" : ""}`} >Home<KeyboardArrowDownIcon /></Link></li>
                  {
                    drop1 !== false &&
                    <ul className="drop" onMouseEnter={() => { clearTimeout(timer.current); setdrop1(true); handleDropdownToggle('drop1') }}
                      onMouseLeave={handleMouseLeave}>
                      <li>Home 1</li>
                      <li>Home 2</li>
                      <li>Home 3</li>
                      <li>Home 4</li>
                      <li>Home 5</li>
                      <li>Home 6</li>
                    </ul>
                  }
                  <li>About</li>
                  <li className='shop' onMouseEnter={() => { clearTimeout(timer.current); setdrop2(true); handleDropdownToggle('drop2') }}
                    onMouseLeave={handleMouseLeave} ><Link to='/listing' className={`listShop ${location.pathname === "/listing" ? "active" : ""}`} >Shop<KeyboardArrowDownIcon /></Link></li>
                  {
                    drop2 !== false &&
                    <ul className="shopList" onMouseEnter={() => { clearTimeout(timer.current); setdrop2(true) }} onMouseLeave={handleMouseLeave}>
                      <li>Shop Grid - Right Sidebar</li>
                      <li>Shop Grid - Left Sidebar</li>
                      <li>Shop List - Right Sidebar</li>
                      <li>Shop List - Left Sidebar</li>
                      <li>Shop-Wide</li>
                      <li>Shop-Product</li>
                      <li>Shop-Filter</li>
                      <li>Shop-Wishlist</li>
                      <li>Shop-Cart</li>
                      <li>Shop-Checkout</li>
                      <li>Shop-Compare</li>
                      <li>Shop invoice</li>
                    </ul>
                  }
                  <li className={`vendor ${location.pathname === "/vendor" ? "active" : ""}`} onMouseEnter={() => { clearTimeout(timer.current); setdrop3(true); handleDropdownToggle('drop3') }}
                    onMouseLeave={handleMouseLeave}>Vendors<KeyboardArrowDownIcon /></li>
                  {
                    drop3 !== false &&
                    <ul className="vendorList" onMouseEnter={() => { clearTimeout(timer.current); setdrop3(true) }} onMouseLeave={handleMouseLeave}>
                      <li>Vendors Grid</li>
                      <li>Vendors List</li>
                      <li>Vendors Details 01</li>
                      <li>Vendors Details 02</li>
                      <li>Vendors Dashboard</li>
                      <li>Vendors Guide</li>
                    </ul>
                  }
                  <li className='megaMenu' onMouseEnter={() => { clearTimeout(timer.current); setdrop4(true); handleDropdownToggle('drop4') }}
                    onMouseLeave={handleMouseLeave}>Mega Menu<KeyboardArrowDownIcon /></li>
                  {
                    drop4 !== false &&
                    <div className="crax" onMouseEnter={() => { clearTimeout(timer.current); setdrop4(true) }} onMouseLeave={handleMouseLeave}>
                      {/* <h1>Hello World !!</h1> */}
                      <div className="box-1">
                        <ul className="menu-1">
                          <h4>Fruits and Vegitables</h4>
                          <li>Meat and Poultry</li>
                          <li>Fresh Vegitables</li>
                          <li>Herbs and Seasoning</li>
                          <li>Cuts and Sprouts</li>
                          <li>Exotic Fruits and Vegies</li>
                          <li>Packaged Produce</li>
                        </ul>
                      </div>
                      <div className="box-2">
                        <ul className="menu-2">
                          <h4>Breakfast and Dairy</h4>
                          <li>Milk and Flavoured Milk</li>
                          <li>Butter and Margarine</li>
                          <li>Eggs Susbstitutes</li>
                          <li>Marmalades</li>
                          <li>Sour Cream</li>
                          <li>Cheese</li>
                        </ul>
                      </div>
                      <div className="box-3">
                        <ul className="menu-3">
                          <h4>Milk and Seafood</h4>
                          <li>Breakfast and Sausage</li>
                          <li>Dinner Sausage</li>
                          <li>Chicken</li>
                          <li>Sliced Deli Meat</li>
                          <li>Wild Caught Fllets</li>
                          <li>Crab and Shellfish</li>
                        </ul>
                      </div>
                      <div className="box-4">
                        <h5>Hot Deals</h5>
                        <h3>Don't Miss</h3>
                        <h3>Trending</h3>
                        <p>Save to 50% </p>
                        <button className='btn-xy'>Shop Now</button>
                        <div className="offer">
                          <div className='percent'>25%</div>
                          <div className='off'>off</div>
                        </div>
                      </div>
                    </div>
                  }
                  <li className='blog' onMouseEnter={() => { clearTimeout(timer.current); setdrop5(true); handleDropdownToggle('drop5') }}
                    onMouseLeave={handleMouseLeave}>Blog<KeyboardArrowDownIcon /></li>
                  {
                    drop5 !== false &&
                    <ul className="blogList" onMouseEnter={() => { clearTimeout(timer.current); setdrop5(true) }} onMouseLeave={handleMouseLeave}>
                      <li>Blog Category Grid</li>
                      <li>Blog Category List</li>
                      <li>Blog Category Big</li>
                      <li>Blog Category Wide</li>
                      <li>Single Post</li>
                    </ul>
                  }
                  <li className='pages' onMouseEnter={() => { clearTimeout(timer.current); setdrop6(true); handleDropdownToggle('drop6') }}
                    onMouseLeave={handleMouseLeave}>Pages<KeyboardArrowDownIcon /></li>
                  {
                    drop6 !== false &&
                    <ul className="pageList" onMouseEnter={() => { clearTimeout(timer.current); setdrop6(true) }} onMouseLeave={handleMouseLeave}>
                      <Link className='linking' to="/">About Us</Link>
                      <Link className='linking' to="/">Contact</Link>
                      <Link className='linking' to="/">My Account</Link>
                      <Link className='linking' to="/login">Login</Link>
                      <Link className='linking' to="/signup">Register</Link>
                      <Link className='linking' to="/" onClick={handleLogout}>Forgot Password</Link>
                      <Link className='linking' to="/">Reset Password</Link>
                      <Link className='linking' to="/">Privacy Policy</Link>
                      <Link className='linking' to="/">Terms Of Service</Link>
                      <Link className='linking' to="/">404 Page</Link>
                    </ul>
                  }
                  <li>Contact</li>
                </ul>
              </ClickAwayListener>
            </nav>
          </div>
          <div className="part-3" style={{ width: "15%" }}>
            <HeadsetMicOutlinedIcon className='headset' style={{ display: "flex", height: "100%", transform: 'scale(0.6)', justifyContent: "center" }} />
            <div className="num">
              <h4>1900-888</h4>
              <p>24/7 Support Cente</p>
              {/* <p>24/7 Support Center</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
