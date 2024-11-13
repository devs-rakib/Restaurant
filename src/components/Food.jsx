import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import sliderImage1 from '../Images/Slider (1).png'
import sliderImage2 from '../Images/Slider (2).png'
import sliderImage3 from '../Images/Slider (3).png'
import sliderImage4 from '../Images/Slider (4).png'

function Food() {


  return (
    <div className='food-item position-relative'>
      <div className="container">
        <div className="section-space">
          <div className="section-title mb-60">
            <h5 className='mb-20 position-relative'>Crispy, Every Bite Taste</h5>
            <h2>POPULAR FOOD ITEMS</h2>
          </div>
          <Splide className='food-slider'
            options={{
              type: 'loop',                // Enables continuous looping
              gap: '1rem',                  // Gap between slides
              perPage: 3, 
              breakpoints: {
                1024: {
                  perPage: 3,
                 
                },
                767: {
                  perPage: 2,
              
                },
                640: {
                  perPage: 1,
            
                },
                                },                  // Number of slides visible at once
              autoplay: true,               // Enables autoplay
              pauseOnHover: false,          // Avoids pausing on hover
              pauseOnFocus: false,          // Avoids pausing on focus
              resetProgress: false,         // Prevents resetting the progress
              arrows: true,                // Hides navigation arrows
              pagination: false,            // Hides pagination dots
              autoScroll: { speed: 2 },     // Speed of auto-scroll
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide className='slider-items'>
             <div className="slider-list d-flex flex-column">
                <div className="bar mb-30 position-relative d-flex justify-content-center align-items-center m-16">
                  <img className='mb-20 text-center' src={sliderImage2} alt="img" />
                </div>
                <h4 className='text-center m-0'>vegetables burger</h4>
                <p className='text-center m-0'>Barbecue Italian cuisine pizza</p>
              </div>
            </SplideSlide>
            <SplideSlide className='slider-items'>
              <div className="slider-list d-flex flex-column">
                <div className="bar mb-30 position-relative d-flex justify-content-center align-items-center m-16">
                  <img className='mb-20 text-center' src={sliderImage3} alt="img" />
                </div>
                <h4 className='text-center m-0'>vegetables burger</h4>
                <p className='text-center m-0'>Barbecue Italian cuisine pizza</p>
              </div>
            </SplideSlide>
            <SplideSlide className='slider-items'>
              <div className="slider-list d-flex flex-column">
                <div className="bar mb-30 position-relative d-flex justify-content-center align-items-center m-16">
                  <img className='mb-20 text-center' src={sliderImage4} alt="img" />
                </div>
                <h4 className='text-center m-0'>vegetables burger</h4>
                <p className='text-center m-0'>Barbecue Italian cuisine pizza</p>
              </div>
            </SplideSlide>
            <SplideSlide className='slider-items'>
             <div className="slider-list d-flex flex-column">
                <div className="bar mb-30 position-relative d-flex justify-content-center align-items-center m-16">
                  <img className='mb-20 text-center' src={sliderImage1} alt="img" />
                </div>
                <h4 className='text-center m-0'>vegetables burger</h4>
                <p className='text-center m-0'>Barbecue Italian cuisine pizza</p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  )
}

export default Food


