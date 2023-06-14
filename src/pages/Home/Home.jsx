import React from 'react'
import Navbar from '@/Components/navbar'
import Hero from '@/Components/Hero'
import AboutUs from '@/Components/aboutus'
import Whychooseus from '@/Components/Whychooseus'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <AboutUs/>
      <Whychooseus/>
        </>
  )
}

export default Home