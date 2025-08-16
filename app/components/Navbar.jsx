import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Navbar = () => {
  return (
    <>
    <div className='w-11/12 fixed top-0 right-0 -z-10 translate-y-[-80%]'>
      <Image src={assets.header_bg_color} alt='' className='w-full h-full object-cover' >
      </Image>
    </div>
   <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
                flex items-center justify-between z-50'>
    <a href="#top">
        <Image src={assets.logo} className='w-28
        cursor-pointer mr-14' alt=""/>
    </a>
    <ul className='hidden md:flex items-center gap-6 lg:gap-8
                    rounded-full px-12 py-3 bg-white bg-opacity-50'>
       <li><a className='font-ovo' href="#top">Home</a></li>
       <li><a className='font-ovo' href="#about">About me</a></li>
       <li><a className='font-ovo' href="#services">Services</a></li>
       <li><a className='font-ovo' href="#work">My Work</a></li>
       <li><a className='font-ovo' href="#contact">Contact</a></li>
    </ul>
    <div>
        <a className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'
        href="#contact font-ovo">Contact <Image src={assets.arrow_icon} className='w-3' alt=''/></a>
    </div>
    
   </nav>
   </>
  )
}

export default Navbar