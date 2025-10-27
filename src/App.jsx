import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import MyNavbar from './components/MyNavbar'
import Home from "./pages/Home";
import Products from "./pages/Products";

import Cart from "./pages/Cart";


function App() {
  

  return (


    <>
    <div className='flex w-screen sm: justify-center space-x-4'>
        <MyNavbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:category" element={<Products/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
    
      
  


      
    
  )
}

export default App
