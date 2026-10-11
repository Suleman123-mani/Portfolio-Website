import React from 'react'
import './Work.css'
import portfolio_1 from '../../Assets/portfolio-1.png'
import portfolio_2 from '../../Assets/portfolio-2.png'
import portfolio_3 from '../../Assets/portfolio-3.png'
import portfolio_4 from '../../Assets/portfolio-4.png'
import portfolio_5 from '../../Assets/portfolio-5.png'
import portfolio_6 from '../../Assets/portfolio-6.png'

const Work = () => {
  return (

    <section id='works'>

        <div className="work-title"> Portfolio

    </div>

    <p className='work-para'>I’m a creative Web Designer, App Designer, and UI/UX Designer focused on creating modern and user-friendly digital experiences.
I design responsive websites and intuitive mobile apps with a strong focus on clean layouts, usability, and visual appeal.</p>

    <div className="work-imgs">

        <img src={portfolio_1}  className='work-img'/>
         <img src={portfolio_2}  className='work-img'/>
         <img src={portfolio_3}  className='work-img'/>
         <img src={portfolio_4}  className='work-img'/>
         <img src={portfolio_5} className='work-img'/>
         <img src={portfolio_6}  className='work-img'/>
         

    </div>

<button className='work-btn'>See More</button>


    </section>

  )
}

export default Work
