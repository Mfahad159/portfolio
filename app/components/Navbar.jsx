import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])
  return (
    <>
      <div className='w-11/12 fixed top-0 right-0 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full h-full object-cover' >
        </Image>
      </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
                flex items-center justify-between z-50 duration-500 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""}`}>
        <a href="#top">
          <div className='-mg-2'>
            <span className='text-5xl font-bold text-black font-ovo'>Fahad</span><span className='text-7xl text-red-500 ml-1.5'>.</span> 
          </div>
          {/* <Image src={assets.logo_2} className='w-28
         cursor-pointer mr-14' alt="" />*/}
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8
                    rounded-full px-12 py-3 duration-500 ${isScroll ? "" : "shadow-sm bg-white/50"} `}>
          <li><a className='font-ovo' href="#top">Home</a></li>
          <li><a className='font-ovo' href="#about">About me</a></li>
          <li><a className='font-ovo' href="#services">Services</a></li>
          <li><a className='font-ovo' href="#work">My Work</a></li>
          <li><a className='font-ovo' href="#contact">Contact</a></li>
        </ul>
        <div className='flex items-center gap-4'>
          <button>
            <Image src={assets.moon_icon} alt='' className='w-6 cursor-pointer'>

            </Image>
          </button>
          <a className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'
            href="#contact font-ovo">Contact <Image src={assets.arrow_icon} className='w-3' alt='icon' /></a>
          <button className='block md:hidden ml:3' onClick={openMenu}>
            <Image src={assets.menu_black} alt='' className='w-6 cursor-pointer'>

            </Image>
          </button>
        </div>
        {/** Mobile Menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 px-20
                  py-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen
                  bg-rose-50 transition duration-500'>
          <div className='absolute right-5 top-5 ' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'>

            </Image>
          </div>
          <li><a onClick={closeMenu} className='font-ovo' href="#top">Home</a></li>
          <li><a onClick={closeMenu} className='font-ovo' href="#about">About me</a></li>
          <li><a onClick={closeMenu} className='font-ovo' href="#services">Services</a></li>
          <li><a onClick={closeMenu} className='font-ovo' href="#work">My Work</a></li>
          <li><a onClick={closeMenu} className='font-ovo' href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar