import React from 'react'
import { motion } from 'framer-motion'
import CV from '../assets/cv/cv.pdf'
import { FaDownload, FaGraduationCap, FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaNode, FaReact, FaUserNinja, FaUserGraduate, FaBook, FaStackOverflow } from 'react-icons/fa'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className='about'
    >
      <h3 className='page-title'><FaUserNinja /> about me</h3>
      <div className="about-info">
        <p style={{ textTransform: 'none' }} className='about-text'>Halo perkenalkan nama saya Komang Hokky Aryasta. Saya adalah mahasiswa jurusan Teknik Informatika dengan program studi Sistem Informasi dari Universitas Pendidikan Ganesha. Saya tertarik dengan perkembangan teknologi seperti Software Development, Data Mining, Machine Learning dan sesuatu yang berkaitan dengan Artificial Intelligence (AI).</p>
        <a href={CV} download="hokkyaryasta-cv" className='cv-btn'><FaDownload /> download cv</a>
      </div>

      <h3 className='page-title to-right'>education <FaUserGraduate /></h3>
      <div className="about-info">
        <div className="box-container">
          <div className="box">
            <div className="year">2008-2013</div>
            <h3 className='education-title'><FaGraduationCap /> SD</h3>
            <p>Saya bersekolah di SD Negeri 1 Seririt selama 6 tahun.</p>
          </div>
          <div className="box">
            <div className="year">2014-2016</div>
            <h3 className='education-title'><FaGraduationCap /> SMP</h3>
            <p>Saya bersekolah di SMP Negeri 1 Seririt selama 3 tahun.</p>
          </div>
          <div className="box">
            <div className="year">2017-2019</div>
            <h3 className='education-title'><FaGraduationCap /> SMA</h3>
            <p>Saya bersekolah di SMA Negeri 1 Seririt selama 3 tahun.</p>
          </div>
          <div className="box">
            <div className="year">2020-now</div>
            <h3 className='education-title'><FaGraduationCap /> Kuliah</h3>
            <p>Saat ini saya sedang berkuliah di Undiksha.</p>
          </div>
        </div>
      </div>

      <h3 className='page-title'><FaStackOverflow /> Skills</h3>
      <div className="about-info">
        <div className="skill-container">
          <div className="skill-box"><FaHtml5 /></div>
          <div className="skill-box"><FaCss3Alt /></div>
          <div className="skill-box"><FaJsSquare /></div>
          <div className="skill-box"><FaPhp /></div>
          <div className="skill-box"><FaNode /></div>
          <div className="skill-box"><FaReact /></div>
        </div>
      </div>

      <h3 className='page-title to-right'>Experience <FaBook /></h3>
      <div className="about-info">
        <div className="experience-container">
          <div className="experience-box">
            <h3>Juara 2 Competitive Programming TI CUP 2022.</h3>
            <p className="subtitle">Universitas Pendidikan Ganesha, 28 Januari 2022</p>
          </div>
          <div className="experience-box">
            <h3>Peserta Coding Competition Algobash 2021</h3>
            <p className="subtitle">Online, 30 November 2021</p>
          </div>
          <div className="experience-box">
            <h3>Peserta Coding Competition Algobash 2022</h3>
            <p className="subtitle">Online, 23 November 2022</p>
          </div>
        </div>
      </div>
    </motion.div >
  )
}

export default About