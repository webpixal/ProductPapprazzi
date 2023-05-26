import React from 'react'
import { Cart, Login, Logo } from '@/Assets/SVGs/SVG'
const Navbar = () => {
  let Links =[
    {name: "Home", link:"./"},
    {name: "About Us", link:"./"},
    {name: "Services", link:"./"},
    {name: "Contuct Us", link:"./"},
  ];
  return (
    <div className='bg-black drop-shadow-[0px_25px_13px_rgba(0,0,0,26%)] w-full h-[131px]'>
          <div className='2xl:container md:mx-auto'>
            <div className=' flex justify-between items-center h-[131px] '>
              <div>
                {/* Logo */}
                <Logo className='w[170px] h-full'/>
              </div>
              <div className='flex items-center justify-between'>
                {/* nav Menu */}
                <ul className='md:flex md:items-center text-white'>
                {Links.map((link)=>(
                  <li key={link.name} className='md:ml-8 text-lg font-light hover:cliptwo'>
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
                <li  className='md:ml-8 text-lg font-semibold'>
                  <Cart/>
                </li>
                <li className='md:ml-8 text-lg font-semibold'>
                  <Login/>
                </li>
                </ul>
              </div>
              
            </div> 
        </div>
    </div>
  )
}

export default Navbar