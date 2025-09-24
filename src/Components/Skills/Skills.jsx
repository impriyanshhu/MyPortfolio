import React from 'react'
import { skills } from "../../assets/Skills"
import { motion } from 'motion/react';


function Skills() {
    return (
        <div className='skills mt-[15%] mb-[7%]'>
            <motion.h2
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className='font-Ovo text-primary text-5xl pb-10 text-center font-semibold'>Skills</motion.h2>

            <div className='flex justify-evenly md:justify-center items-center gap-8 md:gap-16 flex-wrap cursor-default md:w-[80%] m-auto'>

                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, y: 50}}
                        whileInView={{ opacity: 1, y: 0, }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}

                        className="class text-center font-bold max-sm:w-[100px] max-sm:h-[100px] transform transition-transform duration-300 hover:scale-110">

                        <img src={skill.img} alt="" className='object-cover w-full h-full' />
                        <h2 className='text-base md:text-lg text-gray-400'>{skill.title}</h2>

                    </motion.div>
                ))}

            </div>
        </div>
    )
}

export default Skills
