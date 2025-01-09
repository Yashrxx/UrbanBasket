import React from 'react'
import HomeSlider from './Slider/index'
import CatSlider from '../../components/CategorySlider/CatSlider'
import Banner from './Banner/Banner'
import Product from './Products/Product'
import './Banner/Banner.css'
import './Home.css'
import './Products/Product.css'
export default function Home() {
  return (
    <div>
      <HomeSlider/>
      <CatSlider/>
      <Banner/>
      <Product/>
    </div>
  )
}
