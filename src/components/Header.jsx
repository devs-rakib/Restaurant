import React, { useState, useEffect, useRef } from 'react';
import logo from '../Images/Logo.png'
import Button from './Button'
import { FaX } from "react-icons/fa6";



function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [show, setShow] = React.useState(true);
    
console.log(show, 'hello')
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const navRef = useRef();

    const showNavbar = () => {
      navRef.current.classList.toggle(
        "responsive_nav"
      );
      console.log('hello nab')
    };
  

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
        <div id="header" class="header header-fixed">
          <div className="container">
          <div class="main-menu-area d-flex" id="sticker">
            <div class="height-100 w-100">
                <div class="row justify-content-between align-items-center h-100">
                    <div class="col-xl-2 col-lg-3 col-md-3 col-4">
                        <div class="logo-area">
                            <a href="index.html"><img src={logo} alt="company-logo"/></a>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-4 col-1 p-0 d-flex justify-content-start align-items-center">
                        <div class="hamburger" onClick={showNavbar}>
                            <div class="line1"></div>
                            <div class="line2"></div>
                            <div class="line3"></div>
                        </div>
                        <nav id="dropdown" ref={navRef}>
                            <ul class="dropdown-item d-flex text-uppercase text-right m-0">
                                <li><a class="active" href="#"> Home</a>
                                </li>
                                <li><a href="#">About</a>
                                
                                </li>
                                {/* <!-- dropdown-list  --> */}
                                <li><a href="#">Portfolio</a>
                                
                                </li>
                                <li><a href="#">Clients</a>
                                
                                </li>
                                <li><a href="#">Blog</a>
                                
                                </li>
                                <li><a href="contact.html">Contact</a>
                                </li>
                            </ul>
                            <FaX onClick={showNavbar} className='close-btn' />
                        </nav>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-7 d-flex justify-content-end">             
                        <div class="d-none d-lg-block">
                            <Button lable='Book A Table'/>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          </div>
       </div>
    </header>
  )
}

export default Header

