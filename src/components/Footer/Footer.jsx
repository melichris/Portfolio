import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <p>I am front end developper with 10+ years of experience</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <input type="email" placeholder='Enter your email...' name='email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-botton-left">@ 2025 MeliChris. All Rights reserve</p>
            <div className="footer-bottom-right">
                <p>Terms and services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer