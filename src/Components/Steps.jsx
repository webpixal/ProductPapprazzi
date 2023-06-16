import { Polegone, Vector } from '@/Assets/SVGs/SVG'
import React from 'react'

const Steps = () => {
  return (
        <div className='mt-[92px] mb-[92px]'>
            <div className='2xl:container md:mx-auto'>
                <div className='flex justify-center items-center'>
                    <div className="bg-left-bottom shadow-[-30px_60px_60px_10px_rgba(0,0,0,0.3)] rounded-full ">
                        <div className="bg-white z-20 rounded-full w-[668px] h-[668px]">
                            <div className='ml-48 mt-7'>
                                    <Polegone className='relative z-[-10] '/>
                                    <Vector className='relative z-[-10] top-[-170px] left-10'/>
                            </div>
                            <div className='ml-48 mt-7'>
                                    <Polegone className='relative z-[-10] '/>
                                    <Vector className='relative z-[-10] top-[-170px] left-10'/>
                            </div>
                            <div className='ml-48 mt-7'>
                                    <Polegone className='relative z-[-10] '/>
                                    <Vector className='relative z-[-10] top-[-170px] left-10'/>
                            </div>

                        </div>
                    </div> 
                </div>
            </div>
        </div>
  )
}

export default Steps