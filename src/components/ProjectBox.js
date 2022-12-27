import React from 'react'
import ProjectImg from '../assets/images/project-dummy.jpg'

const ProjectBox = (props) => {
  const { name, link } = props
  return (
    <div className="project-box">
      <img src={ProjectImg} alt="project" />
      <p>{name}</p>
      <a href={link}>Show Project</a>
    </div>
  )
}

export default ProjectBox