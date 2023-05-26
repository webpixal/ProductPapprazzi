import React from 'react'
// import Image from 'next/image'
const Hero = () => {
  return (
    <div className="relative">
        <div className=" bg-no-repeat h-[1080px] bg-center bg-cover ">
          <video autoPlay loop muted className="absolute inset-0 object-cover h-screen xl:h-auto w-full  bg-green-900 bg-blend-color-dodge">
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