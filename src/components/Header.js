import React from 'react'
import ProfilePicture from '../assets/images/profile.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='user'>
        <img src={ProfilePicture} alt='profile' />
        <h3 className='name'>hokky aryasta</h3>
        <p className='post'>undergraduate student</p>
      </div>
      <nav>
        <ul>
          <li><NavLink to='/'>home</NavLink></li>
          <li><NavLink to='/about'>about</NavLink></li>
          <li><NavLink to='/project'>project</NavLink></li>
          <li><NavLink to='/contact'>contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header