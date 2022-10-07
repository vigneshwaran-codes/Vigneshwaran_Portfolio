import React from 'react'
import Welcome, { Service } from './Welcome'
import { useHistory } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { BsArrowDownCircle } from 'react-icons/bs'
export default function Intro () {
  const history = useHistory()

  return (
    <div className='intro_container'>
      <h1 className='intro_title'>
        <Welcome />
      </h1>
      <p className='intro_details'>
        I'm Vigneshwaran K, a <span className='into_txt_name'>Full Stack Developer</span> based in TN, India.
      </p>
      <div className='intro_details'>
        I have a passion for creating
        <Service />
        <br />
        I am actively seeking for Full-time opportunities :)
      </div>
      <br />
      <button className='intro_cta_btn'>
        <a
          href='https://drive.google.com/file/d/18Y993Z8ERyRLFHTokqgoR_DLCbWyBH0C/view?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
          className='intro_cta_link'
        >
          Resume <BsArrowDownCircle />
        </a>
      </button>
      <br />
      <div>
        <button className='intro_action_btn' onClick={() => history.push('/portfolio')}>see What I can do <FiArrowRight /></button>
        <span className='btn_span_txt'> or </span>
        <button className='intro_action__btn' onClick={() => history.push('/about')}>a bit about myself <FiArrowRight /></button>
      </div>
    </div>
  )
}
