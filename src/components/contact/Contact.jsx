import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_64chhtv', 'template_lob9sw1', form.current, 'hKYdf_iHWtBXBPOVS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Gt In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className='contact__option'>
                <MdOutlineEmail className='contact__option-icon' />
                <h4>Email</h4>
                <h5>lotusnatthaphorn@gmail.com</h5>
                <a href="mailto:lotusnatthaphorn@gmail.com" target="_blank">Send a message</a>

            </article>
            <article className='contact__option'>
                <RiMessengerLine className='contact__option-icon'/>
                <h4>Messenger</h4>
                <h5>lotusnatthaphorn@gmail.com</h5>
                <a href="https://m.me/lotus.natthaphorn" target="_blank">Send a message</a>

            </article>
            <article className='contact__option'>
                <BsWhatsapp className='contact__option-icon'/>
                <h4>Line</h4>
                <h5>lotus.lt</h5>
                <a href="https://line.me/ti/p/nm0HbJBJPT" target="_blank">Send a message</a>

            </article>

            
        </div>
       
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name'  required/>
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' value="Send" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact