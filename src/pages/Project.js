import React from 'react'
import { motion } from 'framer-motion'
import { FaFreeCodeCamp } from 'react-icons/fa'
import ProjectBox from '../components/ProjectBox'
import { projectData } from '../data/projectData'

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className='project'
    >
      <h3 className="page-title"><FaFreeCodeCamp /> my projects</h3>
      <div className="project-container">
        {
          projectData.map(({ name, link }, i) => (
            <ProjectBox key={i} name={name} link={link} />
          ))
        }
      </div>
    </motion.div>
  )
}

export default Project