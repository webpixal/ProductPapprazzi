import { Polegone, Product } from '@/Assets/SVGs/SVG'
import React from 'react'

const PolegoneStape = () => {
  return (
    <div className='flex justify-between items-center relative'>
        <div>
        <Polegone className='w-[36rem] h-56 absolute'/>
        <Product className='ml-[436px] mt-[72px] relative'/>
        </div>
        <div className='absolute left-[613px] top-[70px]'>
            <h3 className='font-bold text-4xl clip'>STEP 01</h3>
            <p className='w-48 font-bold text-2xl'>
            Ship your products to our studio!
            </p>
        </div>

    </div>
  )
}

export default PolegoneStape