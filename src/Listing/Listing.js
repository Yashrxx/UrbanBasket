import React from 'react'
import Footer from '../components/footer/footer'
import About from '../Pages/About/About'
import Loader from '../components/Loader/Loader'
import '../components/Loader/Loader.css'
// import Header from '../components/header/Header'
import Header from '../components/header/Header'
import { useState , useEffect} from 'react'
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
              <div className="container">
                
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
