import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import About from './Pages/About/About'
import AllProducts from './Pages/AllProducts/AllProducts'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Cart from './Pages/Cart/Cart'

function App() {

  return (
     <>
     <Navbar/>
     <div style={{height: "60px"}}></div>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/products' element={<AllProducts/>} />
      <Route path='/cart' element={<Cart/>} />
     </Routes>
     <Footer/>
     </>
  )
}

export default App
