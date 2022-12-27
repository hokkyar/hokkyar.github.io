import React from 'react'
import { motion } from 'framer-motion'
import TypeWriter from 'typewriter-effect'
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import ProfilePicture from '../assets/images/profile.png'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className='home'
    >
      <div className='user-simple'>
        <img src={ProfilePicture} alt='profile' />
        <h3 className='name'>hokky aryasta</h3>
      </div>
      <h3 className='welcome'>Hi, Welcome! 👋</h3>
      <h3 className='hello-typing' style={{ textTransform: 'none' }}>I'm interested in..</h3>
      <h3 className='text-typing'><TypeWriter options={{ autoStart: true, loop: true, delay: 20, strings: ['programming', 'software engineering', 'data mining', 'machine learning'] }} /></h3>

      <div className="share">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/hokkyaryasta/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/hokkyar">
          <FaGithub />
        </a>
      </div>
    </motion.div>
  )
}

export default Home