import React from 'react'
import Footer from '../components/footer/footer'
import About from '../Pages/About/About'
import Loader from '../components/Loader/Loader'
import '../components/Loader/Loader.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Header from '../components/header/Header'
import { useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
function Listing() {
  const [loading, setLoading] = useState(true); // Manage loading state
  // Simulate loading effect
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); // Example: Hide loader after 2 seconds
  }, []);
  return (
    <>
    {/* <Header/> */}
    <Header/>
    {loading ? (
        <Loader className="loader" />
      ) : (
        <>
          <section className='listingItems'>
              <div className="container-fluid-x">
                  <div className="Banner_123">
                    <div className="b-x-1">
                      <div className="b-x-1-1">
                      <h2>Snack</h2>
                      <div className="para">
                        <div className="emoj">
                        <p><HomeOutlinedIcon className='homeEmoj'/><Link className='btnhm' to="urbanBasket">Home</Link>
                        </p>
                        <p><ArrowForwardIosOutlinedIcon className='arrow'/></p>
                        <p>Shop</p>
                        <p><ArrowForwardIosOutlinedIcon className='arrow'/></p>
                        <p>Snack</p>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div className="b-x-2">
                      <div className="Boxes">
                      <div className="bbx-1">
                          <a href='/'>Cabbage</a>
                      </div>
                      <div className="bbx-1">
                      <a href='/'>Brocolli</a>
                      </div>
                      <div className="bbx-1">
                      <a href='/'>Artichoke</a>
                      </div>
                      <div className="bbx-1">
                      <a href='/'>Celery</a>
                      </div>
                      <div className="bbx-1">
                      <a href='/'>Spinach</a>
                      </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="container-items">
                    <div className="item">

                    </div>
                    <div className="cart">
                      
                    </div>
                  </div> */}
                  <div className="ListingData">
                    <div className="row">
                      <div className="col-md-3">
                        <Sidebar/>
                      </div>
                      <div className="col-md-9">

                      </div>
                    </div>
                  </div>
              </div>
          </section>
          <About />
          <Footer />
        </>
      )}
    </>
  )
}

export default Listing
