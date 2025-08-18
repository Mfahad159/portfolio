import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2 '/>
            <div className='w-max flex items-center gap-2 max-auto'>
                <Image src={assets.mail_icon} alt='' className='w-6'></Image>
                mianfahad664@gmail.com
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t
                        border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Muhammad Fahad. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/Mfahad159">Github</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/muhammad-fahad-136436291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">LinkedIn</a></li>
                <li><a target='_blank' href="#">Twitter</a></li>

            </ul>
        </div>
    </div>
  )
}

export default Footer