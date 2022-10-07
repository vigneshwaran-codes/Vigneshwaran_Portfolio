import '../css/Navbar.css'
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { FaTimes } from 'react-icons/fa'
import { Link, useHistory } from 'react-router-dom'

function Menu () {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  const history = useHistory()

  return (
    <div>
      <nav>
        <h3
          className='navbar_title'
          onClick={() => history.push('/')}
        >
          VIGNESHWARAN
        </h3>
        <div>
          <ul className={clicked ? 'navbar active' : 'navbar'}>
            <li className='nav_li'>
              <Link className='nav_link' to='/portfolio'>
                Work
              </Link>
            </li>
            <li className='nav_li'>
              <Link className='nav_link' to='/about'>
                About
              </Link>
            </li>
            <li className='nav_li'>
              <Link className='nav_link' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='mobile'>
          <i className='bar' onClick={handleClick}>{clicked ? <FaTimes /> : <FiMenu />}</i>
        </div>
      </nav>
    </div>
  )
}

export default Menu
