import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = ({isDarkMode,setIsDarkMode}) => {
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef();

  const openMenu = () => {
    const el = sideMenuRef.current;
    if (!el) return;
    el.style.transitionProperty = 'transform';
    el.style.transitionDuration = '300ms';
    el.style.transitionTimingFunction = 'ease-out';
    el.style.transform = 'translateX(-16rem)';
  };
  
  const closeMenu = () => {
    const el = sideMenuRef.current;
    if (!el) return;
    el.style.transitionProperty = 'transform';
    el.style.transitionDuration = '300ms';
    el.style.transitionTimingFunction = 'ease-in-out';
    el.style.transform = 'translateX(0)';
  };
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
      <div className="w-11/12 fixed top-0 right-0 -z-10 translate-y-[-80%] dark:hidden relative h-[500px]">
  <Image
    src="/header-bg-color.png"
    alt="Header_bg"
    fill
    className="object-cover"
  />
</div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-2
                flex items-center justify-between z-50 duration-500 ${isScroll ? "backdrop-blur-lg shadow-sm" : ""}`}
                style={{
                  backgroundColor: isScroll 
                    ? isDarkMode 
                      ? 'rgba(17, 0, 31, 0.5)' // darktheme with 50% opacity
                      : 'rgba(255, 255, 255, 0.5)' // white with 50% opacity
                    : 'transparent'
                }}>
        <a href="#top">
          <div className='-mg-2'>
            <span className={`text-5xl font-bold font-ovo ${isDarkMode ? 'text-white' : 'text-black'}`}>Fahad</span><span className='text-7xl text-red-500 ml-1.5'>.</span> 
          </div>
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8
					rounded-full px-12 py-3 duration-500 ${isScroll ? "" : "shadow-sm"} ${isDarkMode ? `border ${!isScroll ? 'border-white/50' : 'border-transparent'} bg-transparent transition-colors duration-300` : ''}`}
					style={{
						backgroundColor: isDarkMode
							? 'transparent'
							: (isScroll ? 'transparent' : 'rgba(255, 255, 255, 0.5)')
					}}>
          <li><a className='font-ovo' href="#top">Home</a></li>
          <li><a className='font-ovo' href="#about">About me</a></li>
          <li><a className='font-ovo' href="#services">Services</a></li>
          <li><a className='font-ovo' href="#work">My Work</a></li>
          <li><a className='font-ovo' href="#contact">Contact</a></li>
        </ul>
        <div className='flex items-center gap-4'>
          <button onClick={()=> setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6 cursor-pointer'>
            </Image>
          </button>
          <a href="#contact" className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 cursor-pointer'
                        font-ovo" `}>Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className='w-3' alt='icon' /></a>
          <button className='block md:hidden ml:3 cursor-pointer' onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6 cursor-pointer'>
            </Image>
          </button>
        </div>
        {/** Mobile Menu */}
        <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 px-20 py-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition-transform duration-300 ease-in-out ${isDarkMode ? 'bg-darktheme' : 'bg-rose-50'}`}>
          <div className='absolute right-10 top-10 ' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer'>
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