import React, { useState } from 'react'
import './Navbar.css'

import logo from '../../Assets/logo.png'
import contact from '../../Assets/contact.png'
import { Link } from 'react-scroll'
import menu from '../../Assets/menu.png'



const Navbar = () => {

  const [showMenu,setShowMenu] = useState(false)
  return (
    <nav  id='navbar' >

        <img src={logo} alt="" className='logo'/>

<div className="dekstop-menu">

  <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='dekstoplistItem'>Home</Link>

    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='dekstoplistItem'>About</Link>

      <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='dekstoplistItem'>Portfolio</Link>

       <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={500} className='dekstoplistItem'>Contact</Link>
      



  

  



</div>
   

       <button className='dekstop-btn' onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'})
       }}><img src={contact} alt="" className='dekstop-img' />Contact Me</button>

       <img src={menu} alt="" className='mob-menu' onClick={()=> setShowMenu(!showMenu)}/>

<div className="nav-menu " style={{display: showMenu?'flex' : 'none'}} >

  <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>

    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> {setShowMenu(false)}}>About</Link>

      <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> {setShowMenu(false)}}>Portfolio</Link>

       <Link activeClass='active' to='client' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> {setShowMenu(false)}}>Clients</Link>

       <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> {setShowMenu(false)}}>Contact</Link>

       </div>




    </nav>
  )
}

export default Navbar
