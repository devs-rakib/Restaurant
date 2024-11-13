import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Food from '../components/Food'
import Booking from '../components/Booking'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
function Home() {
  return (
    <div>
        <Hero />
        <About/>
        <Food/>
        <Booking/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home