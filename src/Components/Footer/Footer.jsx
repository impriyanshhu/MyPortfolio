import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Footer = () => {
  return (
    <div className="bg-primary/30 py-4 relative bottom-0">
      <motion.Link
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        to="/" className="flex items-center justify-center pb-3">
        <img src={logo} alt="Portfolio logo" className="w-8 sm:w-10 cursor-pointer" />
        <span className="font-Cursive text-xl sm:text-2xl p-0">myPortfolio</span>
      </motion.Link>

      <div className="w-[90%] md:w-[70%] m-auto">
        <hr className="border-gray-600 h-[1px]" />

        <div className="flex items-center justify-between pt-2 flex-wrap-reverse max-md:gap-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="text-sm md:text-base text-center">
            &copy; Copyright - All Rights Reserved 2025
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center gap-4 text-lg md:text-xl">
            <a href="https://www.linkedin.com/in/priyanshu-dhiman-62542622b"
              target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/impriyanshhu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.instagram.com/impriyanshhu/"
              target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Footer;
