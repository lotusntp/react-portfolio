import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'
import {Link} from 'react-scroll'

const Nav = () => {
  
  return (
    <nav>
      <Link to="home" spy={true} smooth={true} offset={-100} duration={500}><AiOutlineHome/></Link>
      <Link to="about" spy={true} smooth={true} offset={-100} duration={500}><AiOutlineUser/></Link>
      <Link to="experience" spy={true} smooth={true} offset={-100} duration={500}><BiBook/></Link>
      <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}><BiMessageSquareDetail/></Link>
    </nav>
  )
}

export default Nav