import React from 'react'
import Banner_1 from './banner-1.png'
import Banner_2 from './banner-2.png'
import Banner_3 from './banner-3.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function Banner() {
  return (
    <div className='container-fluid'>
      <div className="Banner">
        <div className="banner-1">
            <img src={Banner_1} alt="Error 404" />
            <div className="classic">
                <p>Everyday fresh & clean with our products</p>
            </div>
            <button className='hrx'>Shop Now <ArrowRightAltIcon style={{transform:'scale(0.8)'}}/></button>
        </div>
        <div className="banner-2">
            <img src={Banner_2} alt="Error 404" />
            <div className="classic">
                <p>Make your Breakfast Healthy and Easy</p>
            </div>
            <button className='hrx'>Shop Now <ArrowRightAltIcon style={{transform:'scale(0.8)'}}/></button>
        </div>
        <div className="banner-3">
            <img src={Banner_3} alt="Error 404" />
            <div className="classic">
                <p>The best Organic Products Online</p>
            </div>
            <button className='hrx'>Shop Now <ArrowRightAltIcon style={{transform:'scale(0.8)'}}/></button>
        </div>
      </div>
    </div>
  )
}
