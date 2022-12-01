import React from 'react'
import Footer from './Footer'
import PicJpg from '../assets/pic.jpg'
import PicWebp from '../assets/pic.webp'
import Skills from './Skills'
import Certification from './Certification'
import { BsArrowDownCircle } from 'react-icons/bs'

export default function About () {
  return (
    <div>
      <div className='about_container'>
        <div className='about'>
          <h1 className='about_intro_title'>
            Nice to meet you :) <br />
            Hi! I am Vigneshwaran k
          </h1>
          <p className='about_intro_txt'>
            I'm a full stack developer currently living in Chennai, TamilNadu.
            <br />
            I was born and raised in Chennai and I recently completed my under
            graduation in 2021 <br />
          </p>
          <br />
          <p className='about_intro_txt'>
            I specialize in transforming design appealing User Interface into
            simple.
          </p>
          <br />
          <p className='about_intro_txt'>
            In addition, I have been trained  in Full stack Development (MERN) at GUVI and have{' '}
            <br /> hands on experience in Front-end, back-end, Databases,
            developed web application and websites.
          </p>
          <p className='about_intro_txt'>
            I am actively seeking entry level roles for
            developer.
          </p>
          <button className='cta_btn'>
            <a
              href='https://drive.google.com/file/d/1AT1w_fqhrK2US2Oj2VOHCjq7ue80hDDp/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className='cta_link'
            >
              Resume <BsArrowDownCircle />
            </a>
          </button>
          <picture>
            <source srcSet={PicWebp} type='image/webp' />
            <img src={PicJpg} alt='me' className='about_img' />
          </picture>
        </div>
        <div>
          <Skills />
        </div>
        <div className='about_timeline'>
          <div>
            <h1 className='about_timeline_title'>See my journey</h1>
          </div>
          <div>
            <ul className='about_timeline_education'>
              <li className='about_timeline_education_list'>
                <h1 className='about_timeline_heading'>Experience</h1>
                <h2>Guvi Geek Network</h2>
                <p className='about_timeline_education_course_text'>Full Stack Development Training</p>
                <span className='about_timeline_course_year'>2021 to Present</span>
              </li>
              <li className='about_timeline_education_list'>
                <h1 className='about_timeline_heading'>Education</h1>
                <h2> Vel Tech High Tech Engineering College</h2>
                <p className='about_timeline_education_course_text'> B.E, Electronics and Communication</p>
                <span className='about_timeline_course_year'>2017-2021</span>
              </li>
            </ul>
          </div>
        </div>
        <Certification />
      </div>
      <Footer />
    </div>
  )
}
