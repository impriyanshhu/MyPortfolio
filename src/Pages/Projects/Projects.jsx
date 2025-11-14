import React from "react";
import { motion } from "motion/react";
import { projects } from "../../assets/Projects";
import './Projects.css'

const Projects = () => {
  return (
    <div className="project w-full min-h-screen pt-24 pb-16 px-6">

      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-primary"
      >
        My Projects
      </motion.h1>

      {/* Projects Grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">

        {projects.map((project, index) => (
          <motion.div
            key={project.id || index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative w-64 sm:w-72 aspect-square rounded-xl overflow-hidden shadow-lg group bg-black/40"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />

            {/* Glass Layer */}
            <div className="relative z-10 h-full w-full bg-black/60 group-hover:bg-black/75 transition-all duration-500 flex flex-col items-center justify-center p-4 text-center text-white">
              <h2 className="text-lg sm:text-xl font-bold">{project.title}</h2>
              <p className="mt-2 text-gray-200 text-sm">{project.description}</p>

              {/* Buttons */}
              <div className="flex gap-4 mt-6 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition text-sm"
                >
                  Live
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-600 transition text-sm"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Projects;
