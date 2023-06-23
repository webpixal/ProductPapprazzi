import Patter_color from '@/Assets/SVGs/Patter_color'
import { Pattern, ZIcon } from '@/Assets/SVGs/SVG'
import React from 'react'

const Btn_Zoom = () => {
  return (
    <section className="flex justify-center relative lg:mt-28 mx-4 pb-56 lg:pb-48 mt-6">
    <Pattern className="absolute left-0 xl:-left-12 xl:top-20 top-36 " />
    <div className="grid justify-items-center">
      <h1 className="text-center clip text-3xl leading-10 italic font-extrabold clip">
        Don't leave opportunities on the table
      </h1>
      <p className="text-center italic text-2xl font-semibold leading-8 mt-3 relative z-1">
        Book a Zoom call with us today to learn more about our <br />
        White background Photography and enhance your product images and
        boost your sales success.
      </p>
      <button className="btn_light_primary2 mt-8 flex items-center justify-center">
        <ZIcon /> Book a Zoom call
      </button>
    </div>
    <Patter_color classNAME="absolute -top-28 xl:-top-24 xl:right-0 -right-16 -z-10 md:z-10" />
  </section>
  )
}

export default Btn_Zoom;