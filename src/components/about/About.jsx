import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'

import {RiAwardFill} from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
                <RiAwardFill className='about__icon'/>
                <h5>Experience</h5>
                <small>6 Month Working</small>
            </article>
            <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>80+ Complete</small>
            </article>
          </div>

          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor architecto molestias voluptas recusandae veniam repellendus? Natus distinctio labore vitae quas dolores? Exercitationem atque explicabo doloribus ex nesciunt vel sequi.

            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About