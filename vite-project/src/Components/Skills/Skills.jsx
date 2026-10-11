import React from 'react'
import './Skills.css'
import uidesign from '../../Assets/ui-design.png'
import webdesign from '../../Assets/website-design.png'
import appdesign from '../../Assets/app-design.png'


const Skills = () => {
  return (

    <section id='skills'>

        <div className="skill-title">What I Do</div>
        <p className='skill-para'>I’m a passionate Web Designer who creates modern and responsive websites.
I focus on clean designs, smooth user experiences, and attention to detail.
My goal is to turn creative ideas into attractive and functional websites.
</p>

<div className="skillbars">

    <div className="skillbar">
        <img src={uidesign} alt="" className='skill-img' />

        <div className="skill-text">
            <h2>UI/UX Design</h2>
            <p className='skilltext-para'>I can create best ui/ux design for you.</p>
        </div>
    </div>

    <div className="skillbar">
        <img src={webdesign} alt="" className='skill-img' />

        <div className="skill-text">
            <h2>Website Design</h2>
            <p className='skilltext-para'>I can create best and responsive website for you.</p>
        </div>
    </div>

    <div className="skillbar">
        <img src={appdesign} alt="" className='skill-img' />

        <div className="skill-text">
            <h2>App Design</h2>
            <p className='skilltext-para'>I can create best android apps.</p>
        </div>
    </div>
</div>



    </section>
   
  )
}

export default Skills
