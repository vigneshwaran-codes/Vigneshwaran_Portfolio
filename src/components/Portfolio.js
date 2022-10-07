import React from 'react'
import passwordresetImg from '../assets/password-reset.jpg'
import assignmentorImg from '../assets/assign-mentor.webp'
import posterImg from '../assets/poster.webp'
import loginformImg from '../assets/loginform.webp'
import { MdCallMade } from 'react-icons/md'

export default function Portfolio () {
  return (
    <div className='project'>
      <div className='cards'>
        <div className='card card1'>
          <div className='container'>
            <img src={passwordresetImg} alt='password-reset-app' />
          </div>
          <div className='details'>
            <h1>Password-reset</h1>
            <p>This is Password-reset application using MERN Stack<br />
              We can reset password with proper validation
            </p>
            <a href='https://passcode-reset.netlify.app' target='_blank' rel='noopener noreferrer'>passcode-reset.netlify.app <MdCallMade /></a>
          </div>
        </div>
        <div className='card card2'>
          <div className='container'>
            <img className='app_img' src={assignmentorImg} alt='assign-mentor-app' />
          </div>
          <div className='details'>
            <h1>Assign-Mentor</h1>
            <p>This is Assign-Mentor application using MERN Stack<br />
              We can add, assign students and mentors in this portal
            </p>
            <a href='https://assign-mentors-students.netlify.app' target='_blank' rel='noopener noreferrer'>assign-mentors-students.netlify.app <MdCallMade /></a>
          </div>
        </div>
        <div className='card card3'>
          <div className='container'>
            <img className='app_img' src={posterImg} alt='poster-app' />
          </div>
          <div className='details'>
            <h1>Poster</h1>
            <p>This is Blog application, built with react<br />
              We can add posts and user,this Admin panel where user can edit , delete post and user details
            </p>
            <a href='https://poster-blog.netlify.app' target='_blank' rel='noopener noreferrer'>poster-blog.netlify.app <MdCallMade /></a>
          </div>
        </div>
        <div className='card card4'>
          <div className='container'>
            <img className='app_img' src={loginformImg} alt='login-form' />
          </div>
          <div className='details'>
            <h1>Form</h1>
            <p>This Form built with react<br />
              Using Formik library and yup validate the given fields
            </p>
            <a href='https://login-register-formik.netlify.app' target='_blank' rel='noopener noreferrer'>login-register-formik.netlify.app <MdCallMade /></a>
          </div>
        </div>
      </div>
      <a
        href='https://www.github.com/vigneshwaran-codes'
        target='_blank'
        rel='noopener noreferrer'
        className='link'
      >
        View more on Github <MdCallMade />
      </a>

    </div>
  )
}
