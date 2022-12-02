import React from 'react'
import { MdCall, MdAlternateEmail } from 'react-icons/md'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

export default function Contact () {
  return (
    <div className='contact_container'>
      <h1 className='contact_title'>Contacts</h1>
      <div className='contact_details'>
        <p className='contact_details_txt'>
          I'm currently available for hire, <br /> full time or for internship.<br />That's why I
          encourage you to drop me an email.
          Let's chat.
        </p>
        <a
          href='mailto:vigneshwarank.official@gmail.com'
          className='contact__link'
        >
          Say hello
        </a>
      </div>
      <div className='contact_links'>
        <p className='contact_bottom_txt'>You can also find and follow me here:</p>
        <h2 className='contact_link_txt'>
          <a href='tel:+918825562096' className='contact_link'>
            <MdCall />
            {' '}
            Call
          </a>
        </h2>
        <h2 className='contact_link_txt'>
          <a href='mailto:vigneshwarank.official@gmail.com' className='contact_link'>
            <MdAlternateEmail />
            {' '}
            Email
          </a>
        </h2>
        <h2 className='contact_link_txt'>
          <a href='https://www.github.com/vigneshwaran-codes' rel='noopener noreferrer' className='contact_link'>
            <SiGithub />
            {' '}
            Github
          </a>
        </h2>
        <h2 className='contact_link_txt'>
          <a href='https://www.linkedIn.com/vigneshwaran13' rel='noopener noreferrer' className='contact_link'>
            <FaLinkedin />
            {' '}
            LinkedIn
          </a>
        </h2>
      </div>
    </div>
  )
}
