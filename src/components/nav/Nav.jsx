import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'
import {FaMedal} from 'react-icons/fa'
import {MdHomeRepairService} from 'react-icons/md'
import {BsChatTextFill} from 'react-icons/bs'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() =>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
      <a href='#about' onClick={() =>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsFillPersonFill/></a>
      <a href='#experience' onClick={() =>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaMedal/></a>
      <a href='#services' onClick={() =>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdHomeRepairService/></a>
      <a href='#contact' onClick={() =>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsChatTextFill/></a>
    </nav>
  )
}

export default Nav