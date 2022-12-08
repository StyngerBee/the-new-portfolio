import React from 'react'
import CV from '../../assets/images'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download>Download my CV</a>
        <a href='#contact'>Contact Me</a>
    </div>
  )
}

export default CTA