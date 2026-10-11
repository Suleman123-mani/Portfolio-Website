import React from 'react'
import './Intro.css'
import image from '../../Assets/image.png'
import hire from '../../Assets/hireme.png'

const Intro = () => {
  return (
    <div id='intro'>

        <div className="intro-content">

            <span className='hello'>Hello,</span>
            <span className='intro-start'>I am  <span className='intro-name'>Devid</span> <br />Website Designer</span>
            <p className='intro-para'>I’m a passionate Web Designer focused on creating modern, responsive, <br /> and user-friendly websites.
I turn ideas into clean, visually  appealing <br /> digital experiences with attention to detail.</p> 


<div>
            <button className='intro-btn' ><img src={hire} alt=""  className='intro-img'/>Hire me</button>

            </div>
        </div>

        <img src={image} alt="" className='bg' />
      
    </div>
  )
}

export default Intro
