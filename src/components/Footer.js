import React from 'react'
import { BsSuitHeartFill } from 'react-icons/bs'
export default function Footer () {
  return (
    <div className='footer'>
      <div className='connect_details'>
        <div>
          <h1 className='connect_title'>let's Connect!</h1>
          <p className='connect_txt'>vigneshwarank.official@gmail.com</p>
        </div>
        <div>
          <ul className='social_links'>
            <li className='footer_link'>
              <a
                href='https://drive.google.com/file/d/1lPHrab7bMmfzvo0jP1UW1nuCDpc_FCbV/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
              >
                Resume
              </a>
            </li>
            <li className='footer_link'>
              <a
                href='https://www.github.com/vigneshwaran-codes'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
            </li>
            <li className='footer_link'>
              <a
                href='mailto:vigneshwarank.official@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Email
              </a>
            </li>
            <li className='footer_link'>
              <a
                href='https://www.linkedin.com/in/vigneshwarank13/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer_bottom'>
        <p className='author_title'>VIGNESHWARAN</p>
        <p className='made'>Made with <span className='made_icon'><BsSuitHeartFill /></span></p>
      </div>
    </div>
  )
}
