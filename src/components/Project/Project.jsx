import React from 'react'
import Card from '../Card/Card'
import './Project.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Project = () => {
    useGSAP(() => {
        gsap.from('#para', {
            x: 100,
            duration: 1,
            opacity: 0,
            stagger: 1,
          
            scrollTrigger: {
                trigger: "#para",
                scroll: 'body',
                marked:true,
                scrub: 2,
                start: 'top 60%',
                end: 'top 30%'

            }
        })
    }
        )
    
  return (
    <div id='projects'>
          <h1 id='para'>MEGA PROJECTS</h1>
          <div className='slider'>
              
          
          <Card title='INTERVIEW WITH AI'></Card>
          <Card title='Social Media '></Card>
          <Card title='LMS'></Card>
          
          </div>
    </div>
  )
}

export default Project
