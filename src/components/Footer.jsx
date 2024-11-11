import React from 'react'
import ClockIcon from '../Images/clock.svg'
import MailIcon from '../Images/mail.svg'
import PhoneIcon from '../Images/call-alt.svg'
import LocationIcon from '../Images/Email.svg'
import { FaBeer } from 'react-icons/fa';
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";



function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="section-space">
                <div className="footer-content">
                    <h2 className='mb-60'>We ready to have you the best dining experiences</h2>
                    <div className="contact-info mb-70">
                        <div className="contact-info-list">
                            <img className='mb-16' src={ClockIcon} alt="icon" />
                            <h4>Opening hours</h4>
                            <p className='text-center'>Monday - Sunday <br/>
                            9:00 AM to 11:30 PM</p>
                        </div>
                        <div className="contact-info-list">
                            <img className='mb-16' src={PhoneIcon} alt="icon" />
                            <h4>LET'S TALK</h4>
                            <p className='text-center'>Phone: 1-800-222-4545 <br/>
                            Fax: 1-800-222-4545</p>
                        </div>
                        <div className="contact-info-list">
                            <img className='mb-16' src={LocationIcon} alt="icon" />
                            <h4>BOOK A TABLE</h4>
                            <p className='text-center'>Email: demo@website.com <br/>
                            Support: support@website.com</p>
                        </div>
                        <div className="contact-info-list">
                            <img className='mb-16' src={MailIcon} alt="icon" />
                            <h4>Our Address</h4>
                            <p className='text-center'>123 Stree New York City , <br/>
                            United States Of America.</p>
                        </div>
                    </div>
                    <div className="social-content">
                        <div className="social-icon mb-16">
                            <IoLogoFacebook />
                            <FaXTwitter />
                            <CiInstagram />
                            <FaLinkedinIn />
                        </div>
                        <p>© 2023 <span>Niomax</span> All Rights Reserved </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer