import { Badge, Play } from '@/Assets/SVGs/SVG'
import React from 'react'
import Image from 'next/image'
const AboutUs = () => {
  
  return (
    <div className='mt-[92px] mb-[92px]'>
          <div className='2xl:container md:mx-auto'>
            <div className=' flex justify-between items-center h-[473px]'>
              <div className='w-[648px]'>
                {/* About Content */}
                <Badge className='mb-[24px]'/>
                <h1 className='text-5xl font-bold capitalize leading-[60px]'>Capturing the 
                <span className='ml-3 clip'>Essence of <br/> E-commerce Success</span>
                </h1>
                <h3 className='text-2xl font-light italic capitalize leading-[46px]'>Bringing Your Products to Life Through Visual Storytelling</h3>
                <p className='text-[16px]  font-extralight leading-[30px] w-[648px]'>
                Welcome to Product Paparazzi UK Limited, where we blend creativity, technology, and passion for <br/> 
                creating stunning visual content that elevates e-commerce businesses to new heights. 
                <br/>
                <br/>
                We are not just any product photography company; we are your partner in carving a unique identity for <br/> 
                your brand and products, enabling you to stand out in the highly competitive e-commerce landscape
                </p>
              </div>
              <div className='flex items-center justify-between w-[773px] h-[438px] relative '>
                {/* aboutImage */}
                <Play className='z-10 mx-auto'/>
                <div className=' absolute rounded-3xl bg-black opacity-[3%] top-0 w-[773px] h-[438px] left-[-236px]'></div>
                <Image src='/Images/video.png' layout='fill' className=' rounded-3xl'/>
              </div>
              
            </div> 
        </div>
    </div>
  )
}

export default AboutUs