import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'

import About from './Pages/About/About'
import Form from './Pages/Form/Form'
import AllProducts from './Pages/AllProducts/AllProducts'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Cart from './Pages/Cart/Cart'

function App() {
  
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
     <>
     <Navbar/>
     <div style={{height: "60px"}}></div>
     <Routes>
      <Route path='/' element={<Home/>} /> 
      <Route path='/about' element={<About/>} />
      <Route path='/products' element={<AllProducts/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/form' element={<Form/>} />
     </Routes>
   
     <Footer/>
     </>
  )
}

export default App
