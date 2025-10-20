import React from 'react'
import Hero from '../components/Hero'
import WomenSection from '../components/WomenSection'
import MenSection from '../components/MenSection'

const Home = () => {
  return (
    <>
     <div className='relative w-full min-h-100vh overflow-x-hidden'>
      <div className='w-full h-full'>
        <Hero />
      </div>
      <WomenSection/>
      <MenSection />
      </div>

    </>

   
  )
}

export default Home