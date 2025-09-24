import React from 'react'
import { motion } from 'motion/react'
import { projects } from '../../assets/Projects'
import Footer from '../../Components/Footer/Footer'

const Projects = () => {
  return (
    <div className="projects pt-[6%]">
      <motion.h2
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-Ovo text-primary text-6xl pb-14 text-center font-semibold"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-6 pb-[8%] place-items-center">
        {projects.map((project, index) => (
          <motion.div
            key={project.id || index}
            className="relative w-60 h-auto sm:w-72 aspect-square rounded-xl overflow-hidden shadow-lg group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="relative z-10 bg-gray-900/60 p-6 h-full w-full rounded-xl flex flex-col items-center justify-center text-center text-white transition-all duration-500 group-hover:bg-gray-900/85">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="mt-2 text-gray-200">{project.description}</p>

              <div className="flex gap-4 mt-6 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition"
                >
                  Live
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-600 transition"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default Projects
