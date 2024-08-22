import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";
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
      <Link to={"cart"} className='nav-cart'> <FaCartShopping /> </Link>
      <button className='btn nav-toggler' onClick={()=>{setNavToggleVal(!navToggleVal)}}> {!navToggleVal ? <BiMenu /> :  <IoCloseSharp /> }   </button>
     </div>
     <div className="sub-nav-container" style={{transform: !navToggleVal ? "translateX(-300px)" : "translateX(0px)"}}>
         <ul className="sub-nav-list">
         <li> <Link className='sub-nav-link poppins-normal' to={"/"}>Home</Link> </li>
         <li> <Link className='sub-nav-link poppins-normal' to={"/about"}>About</Link> </li>
         <li> <Link className='sub-nav-link poppins-normal' to={"/products"}>All Products</Link> </li>
         </ul>
     </div>
    </nav>
  )
}

export default Navbar
