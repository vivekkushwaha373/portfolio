import React, { useRef } from 'react'
import './Nav.css'
import { Link } from 'react-scroll'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
const Nav = () => {
    let menu = useRef();
    let mobile = useRef(); 


    useGSAP(() => {
        let t1 = gsap.timeline()
        t1.from('nav h1', {
            y: 100,
            duration: 1,
            opacity:0
        })
        // t1.from('nav ul li', {
        //     y: 100,
        //     duration: 1,
        //     opacity: 0,
        //     stagger:1
        // })
  })
    return (
    <div>
    <nav>
              <h1>PORTFOLIO</h1>
              <ul className='desktopmenu'>
                  <Link to='home' activeClass='active' spy={true} smooth={true} duration={500}><li>Home</li></Link>
                  <Link to='about' activeClass='active' spy={true} smooth={true} duration={500}><li>About</li></Link>
                  <Link to='projects' activeClass='active' spy={true} smooth={true} duration={500}><li>Projects</li></Link> 
                  <Link to='contact' activeClass='active' spy={true} smooth={true} duration={500}><li>Contact</li></Link>
                        
              </ul>   
              <div className="hamburger" ref={menu} onClick={() => {
                  mobile.current.classList.toggle('activemobile');
                  menu.current.classList.toggle('activeham')
              }}>
                  <div className="ham ham1"></div>
                  <div className="ham ham2"></div>
                  <div className="ham ham3"></div>
              </div>
              <ul className='mobilemenu' ref={mobile}>
                  <Link to='home' activeClass='active' spy={true} smooth={true} duration={500}><li>Home</li></Link>
                  <Link to='about' activeClass='active' spy={true} smooth={true} duration={500}><li>About</li></Link>
                  <Link to='project' activeClass='active' spy={true} smooth={true} duration={500}><li>Projects</li></Link>
                  <Link to='contact' activeClass='active' spy={true} smooth={true} duration={500}><li>Contact</li></Link>

              </ul> 
    </nav>
    </div>
  )
}

export default Nav
