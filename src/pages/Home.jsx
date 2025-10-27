import React from 'react'
import Hero from '../components/Hero'
import WomenSection from '../components/WomenSection'
import MenSection from '../components/MenSection'

const Home = () => {
  return (
    <>
     <div className="app-container  bg-[#f9fafb]max-w-7xl mx-auto px-4">
        <Hero />
      <div className="mt-20 ">
         <WomenSection/>
      <MenSection />
      </div>
      
      </div>

    </>

   
  )
}

export default Home