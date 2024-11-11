import React from 'react'
import Bargar from '../Images/Bargar.png'
import Tabs from './Tabs'
import ServiceIcon from '../Images/service-icon.svg'
import ServiceIcon2 from '../Images/service-icon-2.svg'
import ServiceIcon3 from '../Images/service-icon-3.svg'


function About() {
  return (
    <div className='about position-relative'>
        <div className="container">
            <div className="section-space">
                <div className="row justify-content-between mb-60">
                    <div className="col-lg-5 col-md-10 col-12 mb-lg-0 mb-30 position-relative">
                        <img className='w-100 h-100' src={Bargar} alt="Img" />
                        <div class="card-box">
                            <div class="circle">
                                 <strong class="circle-text">50+</strong>
                            </div>
                            <p class="text">Market <br/> Experiences</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 col-12">
                        <Tabs/>
                    </div>
                </div>
                <div className="service-items d-flex flex-wrap g-3 justify-content-between align-items-center">
                    <div className="service-list d-flex align-items-center">
                        <img src={ServiceIcon} alt="icon" />
                        <div className="service-content">
                            <h3 className='m-0'>fast delivery</h3>
                            <p>Within 30 minutes</p>
                        </div>
                    </div>
                    <div className="service-list d-flex align-items-center">
                        <img src={ServiceIcon2} alt="icon" />
                        <div className="service-content">
                            <h3 className='m-0'>absolute dining</h3>
                            <p>Best buffet restaurant</p>
                        </div>
                    </div>
                    <div className="service-list d-flex align-items-center">
                        <img src={ServiceIcon3} alt="icon" />
                        <div className="service-content">
                            <h3 className='m-0'>pickup delivery</h3>
                            <p>Grab your food order</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About