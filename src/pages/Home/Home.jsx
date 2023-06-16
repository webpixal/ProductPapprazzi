import React from 'react'
import Navbar from '@/Components/navbar'
import Hero from '@/Components/Hero'
import AboutUs from '@/Components/aboutus'
import Whychooseus from '@/Components/Whychooseus'
import Steps from '@/Components/Steps'
import Service from '@/Components/service'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <AboutUs/>
        <Whychooseus/>
        <Steps/>
        <Service/>
    </>
  )
}

export default Home