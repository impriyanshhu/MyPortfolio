import React from 'react';
import top_bg from '../../assets/top_bg.mp4';
import { motion } from 'motion/react';

const Home = () => {
    return (
        <div className="scrollbar-hide w-full h-screen bg-black bg-opacity-30 relative overflow-hidden">
            <video
                src={top_bg}
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover absolute -z-50"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 -z-40"></div>

            <div className="flex items-center justify-center w-full h-full">
                <div className="text-center container lg:w-[60%] p-4">
                    <motion.h3
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-base sm:text-2xl py-2"
                    >
                        Hi I'm
                    </motion.h3>

                    <motion.h1
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-3xl sm:text-6xl text-primary font-medium font-Ovo"
                    >
                        Priyanshu Dhiman
                    </motion.h1>

                    <motion.h2
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="text-xl sm:text-3xl pt-2 font-Ovo"
                    >
                        Full-Stack Web Developer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 1.8 }}
                        className="text-gray-400 max-sm:text-sm py-5 text-lg leading-8"
                    >
                        I’m a passionate Full-Stack Web Developer who loves crafting scalable, responsive,
                        and user-friendly web applications. From building fast, intuitive front-ends with
                        modern JavaScript frameworks to designing secure and efficient back-end systems,
                        I bring ideas to life with clean code and thoughtful design. My goal is to
                        create digital experiences that not only work flawlessly but also delight users.
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default Home;
