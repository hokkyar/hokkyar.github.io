import React from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { HiInformationCircle } from 'react-icons/hi'
import { FaProjectDiagram } from 'react-icons/fa'
import { IoMdContact } from 'react-icons/io'
import Home from '../pages/Home'
import About from '../pages/About'
import Project from '../pages/Project'
import Contact from '../pages/Contact'

const Container = () => {
  return (
    <div className="container">
      <div className='simple-link'>
        <NavLink to='/'><AiFillHome /></NavLink>
        <NavLink to='/about'><HiInformationCircle /></NavLink>
        <NavLink to='/project'><FaProjectDiagram /></NavLink>
        <NavLink to='/contact'><IoMdContact /></NavLink>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Container