import React from 'react'
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative flex justify-start items-center">
          <div className=' 2xl:container md:mx-auto'>
            <div className='w-[641px] h[77px] text-white'>
            <h3 className=''>Captivate</h3>
            <h2>Your Audience at First Glance</h2>
            <p>Exceptional product photography shapes consumers' crucial initial<br/>
              impressions, compelling them to explore and engage with your brand further.
            </p>
          <Link href='/deshboard'>
            <button className='relative bgone w-[123px] h-[48px] text-white rounded-full 
            before:content-[""] before:absolute before:w-[100%] 
            before:h-[100%] before:bgtwo before:rounded-full
            before:top-0 before:left-0 before:scale-x-0 before:transition-transform 
            before:ease-in before:origin-right before:duration-500
            hover:before:scale-x-100 hover:before:origin-left hover:before:rounded-full 
            hover:before:ease-in 
            '><span className='z-50 relative'>
              Read More
              </span>
              </button>
              </Link>
            </div>
          </div>
        <div className="  bg-black bg-no-repeat h-[87vh] bg-center bg-cover  bg-blend-overlay">
          <video autoPlay loop muted className="absolute inset-0 object-cover h-[87vh] xl:h-[87vh] w-full z-[-1]">
            <source
              src="Videos/bg.mp4"
              type="video/mp4"
            />
          </video>
          

        </div>
      </div>
  )
}

export default Hero;