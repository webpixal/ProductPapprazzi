import React from 'react'
import Image from 'next/image'
import { Circle_Dash } from '@/Assets/SVGs/SVG'

const Whychooseus = () => {
  return (
    <div className='mt-[92px] mb-[92px]'>
          <div className='2xl:container md:mx-auto'>
            <div className=' flex justify-between items-center h-[775px]'>
              <div className='w-[775px] delay-[300ms] duration-[600ms] taos:translate-x-[200px] taos:opacity-0' data-taos-offset="400">
                {/* About Content */}
                
                <div className='flex items-center justify-between w-[773px] h-[775px] relative '>
                {/* aboutImage */}
                
                <Image src='/Images/video.png' layout='fill' className=' w-[673px] h-[675px] rounded-3xl'/>
                <Circle_Dash className='z-10 mt-[-575px] ml-[561px]'/>
              </div>
              
              </div>
              <div className=' relative w-[648px]'>
                {/* Why Choose Us Points*/}
                <h1 className='text-5xl font-bold'>Why Choose Us</h1>
                <div className='grid grid-rows-3 grid-flow-col gap-4 '>
                        <div className=' w-[261px]'>
                          <h4 className='clip text-xl font-semibold'>Our Expertise</h4>
                          <p className='text-base font-extralight'>As specialists in product photography, we understand that the perfect image is more than just a high-resolution photograph against a white background. </p>
                        </div>
                        <div className=' w-[261px]'>
                          <h4 className='clip text-xl font-semibold'>Turning Product Features into Benefits</h4>
                          <p className='text-base font-extralight'>Our talented designers transform mundane product photographs into compelling visual stories through the power of infographics.</p>
                        </div>
                        <div className='w-[261px]'>
                          <h4 className='clip text-xl font-semibold'>Bringing Your Products into the Real World</h4>
                          <p className='text-base font-extralight'>Our lifestyle photography service adds a touch of authenticity to your product images by placing them in real-life situations.</p>
                        </div>
                        <div className='w-[261px]'>
                          <h4 className='clip text-xl font-semibold'>Our Expertise</h4>
                          <p className='text-base font-extralight'>As specialists in product photography, we understand that the perfect image is more than just a high-resolution photograph against a white background. </p>
                        </div>
                        <div className='w-[261px]'>
                          <h4 className='clip text-xl font-semibold'>Turning Product Features into Benefits</h4>
                          <p className='text-base font-extralight'>Our talented designers transform mundane product photographs into compelling visual stories through the power of infographics.</p>
                        </div>
              </div>
              </div>
              
            </div> 
           
        </div>
    </div>
  )
}

export default Whychooseus