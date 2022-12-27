import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaAddressBook, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [msg, setMsg] = useState('')
  const [btnLoad, setBtnLoad] = useState(false)
  const apiScript = 'https://script.google.com/macros/s/AKfycbwv3BFAhIF6SSIhd_59QtNNsY8UYNwE67UqeHUWB3pE2yvgqmDPUWbzRPNWGy8UdCAcbw/exec'
  function submitForm(e) {
    e.preventDefault()
    setBtnLoad(true)
    fetch(apiScript, {
      method: 'POST',
      body: new FormData(e.target)
    }).then(() => {
      setMsg('Pesan Terkirim!')
      setBtnLoad(false)
      e.target.reset()
      setTimeout(() => {
        setMsg('')
      }, 3500)
    }).catch(error => {
      console.log(error)
      e.target.reset()
    })
  }

  return (
    <motion.div
      className='contact'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <h3 className="page-title"><span><FaAddressBook /></span> contact</h3>
      {
        (msg === 'Pesan Terkirim!') ? <p className='terkirim'>Pesan Terkirim!</p> : ''
      }
      <div className="contact-container">
        <h3 style={{ marginBottom: '1rem' }}>Send your message here!</h3>
        <form name="submit-to-google-sheet" onSubmit={(e) => submitForm(e)}>
          <div className="user-detail">
            <div className="user-name">
              <input type="text" name="nama" placeholder='Your name' required />
            </div>
            <div className="user-email">
              <input type="email" name="email" placeholder='Your email' required />
            </div>
          </div>
          <div className="message">
            <textarea name="pesan" placeholder='Your Message' required></textarea>
          </div>
          {
            (btnLoad) ? <button type="submit" className='btn-send' disabled >Loading...</button> : <button type="submit" className='btn-send'><FaPaperPlane /> Send</button>
          }
        </form>
      </div>
    </motion.div >
  )
}

export default Contact