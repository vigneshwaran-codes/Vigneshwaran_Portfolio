import React from 'react'
import ErrorPicJpg from '../assets/404error.jpg'
import ErrorPicWebp from '../assets/404error.webp'

function PageNotFound () {
  return (
    <div>
      <picture>
        <source srcSet={ErrorPicWebp} type='image/webp' />
        <img src={ErrorPicJpg} alt='pagenotfound' className='err_img' />
      </picture>
    </div>
  )
}

export default PageNotFound
