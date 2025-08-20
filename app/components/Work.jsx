import { assets, workData } from '@/assets/assets'
import React from 'react'
import {motion} from 'motion/react'
import Image from 'next/image'
const Work = ({isDarkMode}) => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        
        id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4
              initial={{ y:-20,opacity: 0 }}
              whileInView={{y:0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{delay:0.3, duration: 0.5 }}
            
            className='text-center mb-2 text-lg font-ovo'>My Portfolio</motion.h4>
            <motion.h2
            initial={{ y:-20,opacity: 0 }}
            whileInView={{y:0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{delay:0.5, duration: 0.5 }}
            
            
            className='text-center text-5xl font-ovo'>My Work</motion.h2>
            <motion.p
              initial={{opacity: 0 }}
              whileInView={{opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{delay:0.7, duration: 0.5 }}
            
            className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo ${isDarkMode?"text-white/80":""}`}>
                These are some of the projects I’ve built, reflecting my journey in software development and practical problem-solving
            </motion.p>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay:0.9,duration:0.6 }}

            className={`grid grid-cols-auto my-10 gap-5 `}>
                {workData.map((project, index) => (
                    <motion.div
                    whileHover={{scale:1.05}}
                    transition={{duration:0.3}}


                        key={index}
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                    >
                        <div className={`bg-[white] w-10/11 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-5 px-5 flex items-center justify-between
  transition-all duration-500 ease-in-out
  group-hover:bottom-7 ${isDarkMode ? "text-black" : ""}`}
  style={{ transition: 'bottom 500ms ease-in-out' }}>
                            <div>
                                <h2 className="font-semibold text-[black]">{project.title}</h2>
                                <p className='text-sm text-gray-700'>{project.description}</p>
                            </div>
                            <div className='border rounded-full border-black w-9 aspect-square
                                           flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <motion.a
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:1.1, duration:0.5}}
            
            href="" className={`w-max flex items-center justify-center gap-2 
                                  text-gray-700 border-[0.5px] border-gray-700
                                  rounded-full py-3 px-10 mx-auto my-20 hover:bg-lighthover duration-500
                                  ${isDarkMode?"text-white border-white dark:hover:bg-darkhover":""}`}>Show more
                                  <Image src={isDarkMode?assets.right_arrow_bold_dark:assets.right_arrow_bold} alt='right arrrow' className='w-4'></Image></motion.a>
        </motion.div>
    )
}

export default Work