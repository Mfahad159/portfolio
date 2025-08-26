import React from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
const About = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}

                className='text-center mb-2 text-lg font-ovo'>Introduction</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}

                className='text-center text-5xl font-ovo'>About me</motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}

                className='flex w-full flex-col lg:flex-row items-center gap-15 my-20'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}

                    className='w-64 sm:w80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image_2} alt='user'
                        className='w-full rounded-3xl' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}

                    className='flex-1'>
                    <p className='text-center mb-10 max-w-2xl font-ovo'>
                        I'm a full-stack developer building smart web solutions with MERN stack, Python, and AI. From responsive web apps to intelligent bots with GenAI integration, I create practical tools that actually work. Clean code, real solutions.
                    </p>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}

                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => {
                            return (
                                <motion.li
                                    
                                    whileHover={{ scale: 1.05 }}

                                    key={index}
                                    className={`border-[0.5px] border-gray-400 rounded-xl cursor-pointer px-5 py-4
      hover:-translate-y-1 hover:shadow-black transition duration-500
      ${isDarkMode ? 'dark:hover:bg-darkhover/50' : 'hover:bg-lighthover hover:shadow-white duration-300'}`}
                                >
                                    <Image className='w-7 mt-3' src={isDarkMode ? iconDark : icon} alt={title} />
                                    <h3 className={`my-4 font-semibold text-gray-700 ${isDarkMode ? 'text-white/80' : ''}`}>{title}</h3>
                                    <p className={`text-gray-600 text-sm ${isDarkMode ? 'text-white/80' : ''}`}>{description}</p>
                                </motion.li>
                            )
                        })}
                    </motion.ul>
                    <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{opacity:1,y:0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay:1,duration: 0.5 }}

                    className={`my-6 text-gray-700 font-ovo ${isDarkMode ? "text-white/80" : ""}`}>
                        Tools I use
                        <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay:0.5,duration: 0.4 }}
                        
                        className='flex items-center gap-3 sm:gap-5 mt-2'>
                            {toolsData.map((tool, index) => {

                                return (
                                    <motion.li
                                    whileHover={{scale:1.1}}
                                    
                                    key={index} className='flex items-center justify-center
                                                               w-12 sm:w-14 aspect-sqaure border border-gray-400
                                                                rounded-lg cursor-pointer p-2 hover:-translate-y-1 duration-500' >
                                        <Image src={tool} alt='Tool' className='w-5 sm:w-7'>

                                        </Image>

                                    </motion.li>
                                )

                            })}
                        </motion.ul>
                    </motion.h4>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About