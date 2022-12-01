import React from 'react'
import assignmentorImg from '../assets/assign-mentor.webp'
import posterImg from '../assets/poster.webp'
import loginformImg from '../assets/loginform.webp'
import docsImg from '../assets/docs.png'
import workboardImg from '../assets/workboard.webp'
import pizzaImg from '../assets/pizzahotdelivery.jpg'
import expenseImg from '../assets/expense-note.png'
import { MdCallMade } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'

export default function Portfolio () {
  return (
    <div className='project'>
      <div className='cards'>
        <div className='card card1'>
          <div className='container'>
            <img src={workboardImg} alt='password-reset-app' />
          </div>
          <div className='details'>
            <h1>Workboard</h1>
            <p>Workboard is a MERN Stack application<br />
              which manages projects and clients
            </p>
            <a href='https://workboard-app.netlify.app' target='_blank' rel='noopener noreferrer'>workboard-app.netlify.app <MdCallMade /></a>{' '}
            <a href='https://github.com/vigneshwaran-codes/Workboard-cli' target='_blank' rel='noopener noreferrer'><FaGithub /> Frontend <MdCallMade /></a>{' '}
            <a href='https://github.com/vigneshwaran-codes/Workboard-server' target='_blank' rel='noopener noreferrer'><FaGithub /> Backend <MdCallMade /></a>
          </div>
        </div>
        <div className='card card2'>
          <div className='container'>
            <img src={expenseImg} alt='password-reset-app' />
          </div>
          <div className='details'>
            <h1>Expense Note</h1>
            <p>Expense Note is a MERN Stack application<br />
              used to track our income and expenditures from various sources.
            </p>
            <a href='https://expense-note.netlify.app' target='_blank' rel='noopener noreferrer'>expense-note.netlify.app <MdCallMade /></a>{' '}
            <a href='https://github.com/vigneshwaran-codes/expense_note-cli' target='_blank' rel='noopener noreferrer'><FaGithub /> Frontend <MdCallMade /></a>{' '}
            <a href='https://github.com/vigneshwaran-codes/expense_note-server' target='_blank' rel='noopener noreferrer'><FaGithub /> Backend <MdCallMade /></a>
          </div>
        </div>
        <div className='card card3'>
          <div className='container'>
            <img src={pizzaImg} alt='password-reset-app' />
          </div>
          <div className='details'>
            <h1>Pizza Delivery App</h1>
            <p>Pizza delivery application with admin panel<br />
              used to track orders and integrated Stripe as a payment gateway.
            </p>
            <a href='https://pizzahotdelivery.netlify.app' target='_blank' rel='noopener noreferrer'>pizzahotdelivery.netlify.app <MdCallMade /></a>{' '}
            <a href='https://github.com/vigneshwaran-codes/Pizza_Delivery-App-cli' target='_blank' rel='noopener noreferrer'><FaGithub /> Frontend <MdCallMade /></a>{' '}
            <a href='https://github.com/vigneshwaran-codes/Pizza_Delivery-App-server' target='_blank' rel='noopener noreferrer'><FaGithub /> Backend <MdCallMade /></a>
          </div>
        </div>
        <div className='card card4'>
          <div className='container'>
            <img src={docsImg} alt='password-reset-app' />
          </div>
          <div className='details'>
            <h1>Google Docs Clone</h1>
            <p>Replicated google docs application in which<br />
              we can create and share documents using web sockets.
            </p>
            <a href='https://googledocs-clone.netlify.app' target='_blank' rel='noopener noreferrer'>googledocs-clone.netlify.app <MdCallMade /></a>{' '}
            <a href='https://github.com/vigneshwaran-codes/googledocs_clone-cli' target='_blank' rel='noopener noreferrer'><FaGithub /> Frontend <MdCallMade /></a>{' '}
            <a href='https://github.com/vigneshwaran-codes/googledocs_clone-server' target='_blank' rel='noopener noreferrer'><FaGithub /> Backend <MdCallMade /></a>
          </div>
        </div>
        <div className='card card1'>
          <div className='container'>
            <img className='app_img' src={assignmentorImg} alt='assign-mentor-app' />
          </div>
          <div className='details'>
            <h1>Assign-Mentor</h1>
            <p>This is Assign-Mentor application using MERN Stack<br />
              We can add, assign students and mentors in this portal
            </p>
            <a href='https://assign-mentors-students.netlify.app' target='_blank' rel='noopener noreferrer'>assign-mentors-students.netlify.app <MdCallMade /></a>{' '}
            <a href='https://github.com/vigneshwaran-codes/assign-mentor-cli' target='_blank' rel='noopener noreferrer'><FaGithub /> Frontend <MdCallMade /></a>{' '}
            <a href='https://github.com/vigneshwaran-codes/assign-mentor' target='_blank' rel='noopener noreferrer'><FaGithub /> Backend <MdCallMade /></a>
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
            <a href='https://poster-blog.netlify.app' target='_blank' rel='noopener noreferrer'>poster-blog.netlify.app <MdCallMade /></a>{' '}
            <a href='https://github.com/vigneshwaran-codes/react-task-5' target='_blank' rel='noopener noreferrer'><FaGithub /> Frontend <MdCallMade /></a>
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
            <a href='https://login-register-formik.netlify.app' target='_blank' rel='noopener noreferrer'>login-register-formik.netlify.app <MdCallMade /></a>{' '}
            <a href='https://github.com/vigneshwaran-codes/react-task-7' target='_blank' rel='noopener noreferrer'><FaGithub /> Frontend <MdCallMade /></a>
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
