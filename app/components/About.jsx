import React from 'react'
import Image from 'next/image'
import { assets, infoList } from '@/assets/assets'
const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
            <h2 className='text-center text-5xl font-ovo'>About me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-64 sm:w80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image_2} alt='user'
                        className='w-full rounded-3xl' />
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl font-ovo'>
                        I'm Fahad, a software developer who builds smart solutions with Python, AI, and automation. From intelligent bots to AI-integrated web platforms, I create practical tools that actually work. My focus? Reliable code that solves real problems efficiently.
                    </p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                      {infoList.map(({icon,iconDark,title,description},index)=>{
                        return(
                            <li key={index} className='border-[0.5px] border-gray-400 rounded-xl cursor-pointer px-5 py-4 hover:bg-lighthover hover:-translate-y-1 duration-500'>

                            <Image className='w-7 mt-3' src={icon} alt={title}/>
                            <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                            <p className='text-gray-600 text-sm'>{description}</p>

                        </li>
                        )
                      })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About