import React from 'react'
import Card from '../ProjectCards/Card'
import './Project.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import aiinterv from '../../assets/AIinterv.png'
import ghostnotes from '../../assets/GhostNotes.png'
import bondsphere from '../../assets/BondSphere.png'

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
          <Card image={aiinterv} title='AutoInterv'></Card>
          <Card image={bondsphere } title='BondSphere'></Card>
          <Card image={ghostnotes} title='GhostNotes'></Card>
          </div>
          

          <h1 id='para'>MINI PROJECTS</h1>
          <div className='slider'>
              
          
          <Card title='Testimonials'></Card>
          <Card title='Ecommerce'></Card>
          <Card title='NoteSaver'></Card>
          <Card title='Password Generator'></Card>
          <Card title='Tic Tac Toe'></Card>
          <Card title='Rock Paper Scissor'></Card>
          <Card title='StudySync'></Card>
          <Card title='Cards'></Card>
          <Card title='AmazonBasic Css'></Card>
          
          </div>

    </div>
  )
}

export default Project
