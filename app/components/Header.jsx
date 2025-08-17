import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Header = () => {
    return (
       <div className='w-11/12 max-w-3xl text-center mx-auto h-screen
                       flex flex-col items-center justify-center gap-4 pt-20'>
            <div>
                <Image src={assets.profile_img_2} className='rounded-full w-32' alt=''></Image>
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'
            >Hi! I'm Muhammad Fahad
                <Image src={assets.hand_icon} className='w-6' alt=''></Image>

            </h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
                MERN web developer and GenAI Engineer
            </h1>
            <p className='max-w-2xl mx:auto font-ovo'>
            Building smart web apps with MERN and GenAI magic. Developer by day, AI innovator always.
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a className='px-10 
                py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'
                href="#contact">contact me
                    <Image src={assets.right_arrow_white} className='w-4' alt=''></Image>
                </a>
                <a href="/sample-resume.pdf" download className='px-10 
                py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume
                    <Image src={assets.download_icon} className='w-4' alt=''></Image>
                </a>
            </div>
       </div>
    )
}

export default Header