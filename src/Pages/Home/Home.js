import React from 'react'
import HomeSlider from './Slider/index'
import CatSlider from '../../components/CategorySlider/CatSlider'
import Banner from './Banner/Banner'
import Product from './Products/Product'
import About from '../About/About'
import Header from '../../components/header/Header'
import './Banner/Banner.css'
import './Home.css'
import './Products/Product.css'
import '../About/About.css'
import Footer from'../../components/footer/footer'
import '../../components/footer/footer.css'
export default function Home() {
  return (
    <div>
      <Header/>
      <HomeSlider/>
      <CatSlider/>
      <Banner/>
      <Product/>
      <About/>
      <Footer/>
    </div>
  )
}
