import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import About from './Pages/About/About'
import Products from './Pages/Products/Products'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  return (
     <>
     <Navbar/>
     <div style={{height: "60px"}}></div>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/products' element={<Products/>} />
     </Routes>
     <Footer/>
     </>
  )
}

export default App
