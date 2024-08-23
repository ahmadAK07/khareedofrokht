import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CartContextProvider from './Context/CartContextProvider.jsx'
import ProductContextProvider from './Context/ProductContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ProductContextProvider>
 <CartContextProvider>
   <BrowserRouter>
    <App />
  </BrowserRouter>
 </CartContextProvider>
 </ProductContextProvider>
)



