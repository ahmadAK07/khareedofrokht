import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  let [navToggleVal, setNavToggleVal] = useState(false);
  return (
    <nav>
     <div className="nav-container">
      <div className="log">
        <h1><a href="/" className='nav-logo'> <img src="./tab-logo.jpg" alt="" /> </a></h1>
      </div>

      {/* list ------- */}
     <ul className='nav-list '>
         <li> <Link className='nav-link poppins-normal' to={"/"}>Home</Link> </li>
         <li> <Link className='nav-link poppins-normal' to={"/about"}>About</Link> </li>
         <li> <Link className='nav-link poppins-normal' to={"/products"}>All Products</Link> </li>
      </ul>


      {/* cart -------- */}
      <a href="#" className='nav-cart'> <FaCartShopping /> </a>
     </div>
     <div className="sub-nav-container">
        <div className="sub-nav-toggler" onClick={()=> setNavToggleVal(!navToggleVal) }>
        <button className='kanit-semibold btn'> Menu &nbsp; <GiHamburgerMenu /></button>
        </div>
        <ul className="sub-nav-list" style={{height: navToggleVal ? "140px" : "0px"}}>
        <li> <Link className='sub-nav-link poppins-normal' to={"/"}>Home</Link> </li>
         <li> <Link className='sub-nav-link poppins-normal' to={"/about"}>About</Link> </li>
         <li> <Link className='sub-nav-link poppins-normal' to={"/products"}>All Products</Link> </li>
        </ul>
     </div>
    </nav>
  )
}

export default Navbar
