import React from 'react'
import Card from '../ProjectCards/Card'
import './Project.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import aiinterv from '../../assets/AIinterv.png'
import ghostnotes from '../../assets/GhostNotes.png'
import bondsphere from '../../assets/BondSphere.png'
import coursecards from '../../assets/coursecards.png'
import ecommerse from '../../assets/ecommerse.png'
import notesaver from '../../assets/notesaver.png'
import password from '../../assets/password.png'
import rockpaperscissor from '../../assets/roackpaperscissor.png'
import studysync from '../../assets/studysync.png'
import testimonial from '../../assets/testimonial.png'
import tictactoe from '../../assets/tictactoe.png'
import amazon from '../../assets/amazon.png'
import { FaArrowRight } from "react-icons/fa";

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
          <h1 id='para'>MEGA PROJECTS <FaArrowRight className='righticonmega' /></h1>
          <div className='slider'>
          <Card image={ghostnotes} title='GhostNotes'></Card>
          <Card image={aiinterv} title='AutoInterv'></Card>
          <Card image={bondsphere } title='BondSphere'></Card>
          </div>
          

          <h1 id='para'>MINI PROJECTS <FaArrowRight className='righticonmini' /></h1>
          <div className='slider minislider'>
              
          
          <Card image={testimonial} title='Testimonials'></Card>
          <Card image={notesaver} title='NoteSaver'></Card>
          <Card image={password} title='Password Generator'></Card>
          <Card image={tictactoe} title='Tic Tac Toe'></Card>
          <Card image={rockpaperscissor} title='Rock Paper Scissor'></Card>
          <Card image={studysync} title='StudySync'></Card>
          <Card image={coursecards} title='Cards'></Card>
          <Card image={amazon} title='AmazonBasic Css'></Card>
          <Card image={ecommerse} title='Ecommerce'></Card>
          
          </div>

    </div>
  )
}

export default Project
