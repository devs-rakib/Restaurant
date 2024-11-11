import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Booking from './components/Booking';
import Food from './components/Food';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';


function App() {

  return (
    <div className="App">
        <Hero />
        <About/>
        <Food/>
        <Booking/>
        <Testimonial/>
        <Footer/>
    </div>
  );
}

export default App;
