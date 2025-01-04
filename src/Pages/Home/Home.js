import React from 'react'
import HomeSlider from './Slider/index'
import './Home.css'
import CatSlider from '../../components/CategorySlider/CatSlider'
import Banner from './Banner/Banner'
import './Banner/Banner.css'
export default function Home() {
  return (
    <div>
      <HomeSlider/>
      <CatSlider/>
      <Banner/>
    </div>
  )
}
