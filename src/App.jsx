import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyNavbar from './components/MyNavbar'
import Hero from './components/Hero'

function App() {
  

  return (

    <div className='relative w-full min-h-100vh overflow-x-hidden'>
        <div className='flex w-screen sm: justify-center space-x-4'>
        <MyNavbar />
        
      </div>
      <div className='w-full h-full'>
        <Hero />

      </div>
      

    </div>
    
      
  


      
    
  )
}

export default App
