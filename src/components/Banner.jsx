import React from 'react'
import Button from './Button'
import BannerImg from '../Images/Banner.png'
import StarImg from '../Images/Star.svg'

function Banner() {
  return (
    <div className='container'>
       <div className="section-space">
        <div className="hero-content position-relative d-flex justify-content-between align-items-center">
            <div className="entry-content w-100 mb-xl-0 mb-50">
                <h1 className='entry-title'>Taste the authentic <br/>
                Saudi cuisine</h1>
                <p className='text mb-30'>Among the best Saudi chefs in the world, serving <br/> you something beyond flavor. </p>
                <Button lable='Explore Menu'/>
            </div>
             <img className='bannerImg position-relative' src={BannerImg} alt="Hero-Banner" />
             <img className='starImg position-absolute' src={StarImg} alt="Hero-Banner" />
             <div className='order'>
                <strong>Today<br/>
                Offer</strong>
             </div>
        </div>
       </div>

    </div>
  )
}

export default Banner