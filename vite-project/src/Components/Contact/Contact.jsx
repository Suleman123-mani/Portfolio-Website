import React, { useRef } from 'react'
import './Contact.css'

import walmart from '../../Assets/walmart.png'
import facebook from '../../Assets/facebook.png'
import adobe from '../../Assets/adobe.png'
import microsoft from '../../Assets/microsoft.png'
import facebookIcon from '../../Assets/facebook-icon.png'
import instagramIcon from '../../Assets/instagram.png'
import twitterIcon from '../../Assets/twitter.png'
import youtubeIcon from '../../Assets/youtube.png'

import emailjs from '@emailjs/browser' ;

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_isok59b', 'template_i07ba54', form.current, {
        publicKey: '3GsP2OxEVI-NTYXfb',
      })
      .then(
        () => {
          console.log('SUCCESS!');

          e.target.reset();

          alert('Email Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
  <section id='contactPage'>



    <div id="client">

        <h2 className='client-title'>My Clients</h2>

        <p className='client-para'>I have had the opportunity to work with major brands, including Facebook, Walmart, and Netflix. If you’re looking for creative and professional design services, I’m available to bring your ideas to life.</p>

        <div className="client-imgs">

            <img src={walmart} alt="" className='client-img' />
            <img src={facebook} alt="" className='client-img' />
            <img src={microsoft} alt="" className='client-img' />
            <img src={adobe} alt="" className='client-img' />
        </div>


    </div>


    <div id="contact">

        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-para">Please fill out the form below to discuss any work opportunities</p>

        <form className='contact-form' ref={form} onSubmit={sendEmail}>
            <input type="text" className='name' placeholder='Enter your name' name='your_name' />
            <input type="email" className='email' placeholder='Enter your email' name='your_email' />
            <textarea className='msg' name="message" rows="5" placeholder='Enter your message' ></textarea>
            <button className='submit-btn' value="send" type='submit'>Submit</button>
            <div className="links">
                <img src={instagramIcon} alt="" className='link'/>
                <img src={twitterIcon} alt="" className='link'/>
                <img src={youtubeIcon} alt="" className='link'/>
                <img src={facebookIcon} alt="" className='link'/>
            </div>
        </form>
        
    </div>




  </section>
  )
}

export default Contact
