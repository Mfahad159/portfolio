import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Header = () => {
    return (
        <>
            <div>
                <Image src={assets.profile_img} className='rounded-full w-32' alt=''></Image>
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'
            >Hi! I'm Muhammad Fahad
                <Image src={assets.hand_icon} className='w-6' alt=''></Image>

            </h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
                MERN web developer and GenAI Engineer
            </h1>
            <p className='max-w-2xl mx:auto font-ovo'>
                MERN Developer & GenAI Engineer crafting smart web solutions and AI-powered experiences. Building the future, one line of code at a time.
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
        </>
    )
}

export default Header