import { workData } from '@/assets/assets';
import React from 'react';
import { motion } from 'motion/react';

const Work = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            id='work'
            className='w-full px-[12%] py-10 scroll-mt-20'
        >
            {/* Heading */}
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-center mb-2 text-lg font-ovo'
            >
                My Portfolio
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='text-center text-5xl font-ovo'
            >
                My Work
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo ${isDarkMode ? "text-white/80" : ""}`}
            >
                These are some of the projects I’ve built, reflecting my journey in software development and practical problem-solving.
            </motion.p>

            {/* Projects Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'
            >
                {workData.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className={`p-5 rounded-xl shadow-md transition-colors duration-300
                          ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"} 
                          border border-gray-300 dark:border-gray-700`}
                    >
                        <h2 className="font-semibold text-lg mb-2">{project.title}</h2>
                        <p className='text-sm mb-3'>{project.description}</p>
                        <div className='flex flex-wrap gap-2'>
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className='text-xs px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Work;
