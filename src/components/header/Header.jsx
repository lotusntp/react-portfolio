import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ntp-removebg-preview.png'
import HeaderSocial from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container" id='home'>
        <h5>Hello I'm</h5>
        <h1>Natthaphorn Jaicahaliew</h1> 
        <h5 className="text-light">Backend Developer</h5>
        <CTA />
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header