import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
const Footer = () => {

  return (
    <footer>
      <div className="container seperator-b">
        <div className="footer">
          <div className="footer-first">
            <ul className='footer-first-list'>
              <li> <Link className='footer-first__link poppins-normal' to={"/"}>Contact US</Link> </li>
              <li> <Link className='footer-first__link poppins-normal' to={"/"}>FAQs</Link> </li>
              <li> <Link className='footer-first__link poppins-normal' to={"/"}>Refund Policy</Link> </li>
              <li> <Link className='footer-first__link poppins-normal' to={"/"}>Shipping Policy</Link> </li>
              <li> <Link className='footer-first__link poppins-normal' to={"/"}>Term Of Services</Link> </li>
              <li> <Link className='footer-first__link poppins-normal' to={"/"}>Privacy Policy</Link> </li>
            </ul>
          </div>
          <div className="footer-second">
            <h5 className='display-4 poppins-normal'>Let's get in touch</h5>
            <p className='poppins-normal'>Sign up for our newsletter and receive 10% off your</p>
            <div className='footer-second__input'>
                  <input type="text" placeholder='Enter your Email' />
                  <button className='btn'>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-bottom">
           <p className=''>© 2024 KhareedoFrokht. All rights reserved.</p>
           <div className="footer-social">
            <Link to={"/"}> <FaFacebookSquare /> </Link>
            <Link to={"/"}> <FaSquareXTwitter /> </Link>
            <Link to={"/"}> <FaWhatsappSquare /> </Link>
           </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
