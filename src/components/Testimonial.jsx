import React, { useState } from 'react'
import FoodImg from '../Images/Video.jpg'
import User from '../Images/User.png'
import { FaPlay } from "react-icons/fa";
import VideoPopup from './VideoPopup';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';


function Testimonial() {
    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => {
      setShowPopup(true);
    };
  
    const handleClosePopup = () => {
      setShowPopup(false);
    };
  return (
    <div className='testimonial position-relative'>
        <div className="container">
            <div className="section-space">
            <div className="section-title mb-60">
                    <h5 className='mb-20 position-relative z-index'>Crispy, Every Bite Taste</h5>
                    <h2 className='z-index d-inline-block'>What Some of my Customers Say</h2>
                </div>
                <Splide className="testimonial-slider"
                    options={{
                        type: 'loop',                // Enables continuous looping
                        gap: '1rem',                  // Gap between slides
                        perPage: 1,                  // Number of slides visible at once
                        autoplay: false,               // Enables autoplay
                        pauseOnHover: true,          // Avoids pausing on hover
                        pauseOnFocus: false,          // Avoids pausing on focus
                        resetProgress: false,         // Prevents resetting the progress
                        arrows: true,                // Hides navigation arrows
                        pagination: false,            // Hides pagination dots    // Speed of auto-scroll
                    }}
                >
                    <SplideSlide className='slider-items'>
                        <div className="client-comment position-relative">
                            <div className="comment-box">
                            <blockquote className='responsive-quote position-relative'>
                                <p className='mb-40'>You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                            </blockquote>
                                <div className="user">
                                    <div className="user-name">
                                        <h5>Khalid Al Dawsry</h5>
                                        <p>Jeddah, Saudi</p>
                                    </div>
                                    <div className="picture position-relative">
                                        <img src={User} alt="User" />
                                    </div>
                                </div>
                            </div>

                            <div className="video position-relative">
                                <img src={FoodImg} alt="Img" />
                                <FaPlay onClick={handleOpenPopup} className='video-icon' />
                                <VideoPopup
                                show={showPopup}
                                videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
                                onClose={handleClosePopup}/>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide className='slider-items'>
                        <div className="client-comment position-relative">
                            <div className="comment-box">
                                <p className='mb-40'>You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                                <div className="user">
                                    <div className="user-name">
                                        <h5>Khalid Al Dawsry</h5>
                                        <p>Jeddah, Saudi</p>
                                    </div>
                                    <div className="picture position-relative">
                                        <img src={User} alt="User" />
                                    </div>
                                </div>
                            </div>

                            <div className="video position-relative">
                                <img src={FoodImg} alt="Img" />
                                <FaPlay onClick={handleOpenPopup} className='video-icon' />
                                <VideoPopup
                                show={showPopup}
                                videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
                                onClose={handleClosePopup}/>
                            </div>
                        </div>
                    </SplideSlide>
                    </Splide>
            </div>
        </div>

    </div>
  )
}

export default Testimonial