import React from 'react'
import './About.css'
import my_Photo from '../../assets/my_Photo.png'
import Education from '../../Components/Education/Education.jsx'
import Skills from '../../Components/Skills/Skills.jsx'
import { AboutMe } from '../../assets/About.js'
import { motion } from 'framer-motion'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const About = () => {

  const handleDownload = () => {
    const fileUrl = "/PRIYANSHU.pdf"; 
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "PRIYANSHU.pdf";
    link.click();

    toast.success("CV downloaded successfully!");
  };

  return (
    <div className='w-full min-h-screen relative'>
      <div className='about scrollbar-hide px-[80px] m-auto max-md:py-[15%] max-md:px-4 py-[6%] max-h-max'>
        
        <div className="flex flex-col items-center justify-center gap-8 sm:w-[75%] m-auto border-solid border-primary/10">
          
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <div className="relative mx-auto bg-gradient-to-b from-primary/40 rounded-full w-48 h-48 md:w-64 md:h-64 overflow-hidden">
              <img src={my_Photo} alt="Profile" className='object-cover' />
            </div>
          </motion.div>

          <div className='w-full'>
            
            <motion.h2
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className='font-Ovo text-primary text-6xl sm:text-7xl pb-4 font-semibold'
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className='text-gray-400 text-base md:text-lg leading-8 pb-10'
            >
              I’m a passionate and detail-oriented fresher Full-Stack MERN Developer with a strong foundation in MongoDB, Express.js, React, and Node.js. I love building clean,
              responsive, and user-friendly web applications, and I’m constantly exploring new
              technologies to improve my skills. As I begin my professional journey, my focus is
              on creating meaningful digital experiences, collaborating with like-minded teams,
              and growing into a versatile and impactful developer.
            </motion.p>

            <motion.div
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              {Object.entries(AboutMe).map(([key, value]) => (
                <div key={key} className="flex items-center pb-4 text-sm md:text-lg">
                  <p className="font-normal leading-7 md:max-w-[9.5rem] max-w-[7rem] w-full">{key}</p>
                  <p className="about-detail-info text-gray-400">{value}</p>
                </div>
              ))}
            </motion.div>

            <button onClick={handleDownload} className='bg-primary/30 py-2 px-4 rounded-md text-base md:text-lg my-4 hover:bg-primary/50 transition'>
              Download CV
            </button>

            <ToastContainer position="top-center" autoClose={2000} />

          </div>
        </div>

        <Education />
        <Skills />
        
      </div>

    </div>
  )
}

export default About
