import React from "react";
import { motion } from "framer-motion";
import { education } from "../../assets/Education";

const Education = () => {
  return (
    <div id="education" className="my-[10%] px-4 sm:px-0">
      <div className="text-center">
        <motion.h2
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-Ovo text-primary text-5xl sm:text-6xl pb-4 font-semibold"
        >
          Education
        </motion.h2>

        <motion.p
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gray-400 mt-2 text-sm sm:text-lg font-semibold"
        >
          A collection of my educational journey
        </motion.p>
      </div>

      <div className="relative mt-[8%]">
        <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-[2px] bg-white h-full"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center mb-12 sm:mb-16 ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
          >
            <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 bg-gray-700 border-2 border-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex justify-center items-center z-10 sm:z-0 p-1">
              <img
                src={edu.board_img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <motion.div
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`w-full sm:max-w-md p-4 sm:p-8 mt-8 sm:mt-0 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${index % 2 === 0 ? "sm:ml-20" : "sm:mr-20"
                } transform transition-transform duration-300 ml-7`}
            >
              <div className="flex items-start sm:items-center justify-center flex-col sm:flex-row gap-4">
                <div className="w-28 sm:w-32 h-auto bg-white rounded-md overflow-hidden p-1">
                  <img src={edu.img} alt={edu.school} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white">{edu.degree}</h3>
                  <h4 className="text-sm sm:text-md text-gray-300">{edu.school}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm sm:text-base text-gray-400 font-bold">Grade: {edu.grade}</p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">{edu.desc}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
