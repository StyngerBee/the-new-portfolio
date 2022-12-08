import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/images/Placeholder.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1> Curran Duke</h1>
        <h5 className='text-light'> Fullstack Developer</h5>
        <CTA></CTA>
        <HeaderSocials/>
        <div className='me'>
          <img src={ME} alt='me'></img>
        </div>
        <a href='#contact' className='scroll__down'>Skip to bottom</a>
      </div>
    </header>
  )
}

export default Header