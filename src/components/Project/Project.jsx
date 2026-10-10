import React from 'react'
import Card from '../ProjectCards/Card'
import './Project.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import aiinterv from '../../assets/autointerv.png'
import ghostnotes from '../../assets/GhostNotes.png'
import bondsphere from '../../assets/BondSphere.png'
import lovable from '../../assets/lovable.png'
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
    <div id='projects' className="projects-container">
          <h1 id='para' className="section-title text-gradient">FEATURED PROJECTS <FaArrowRight className='righticonmega' /></h1>
          <div className='slider'>
            <Card 
              image={lovable} 
              title='Lovable Clone' 
              description="Architected a microservices-based Code Generation platform automating full-stack web app generation. Features Node.js & Redis reverse proxy routing 10,000+ subdomains, and Spring Cloud Gateway with <15ms overhead."
            />
            <Card 
              image={bondsphere} 
              title='BondSphere'
              description="Built a full-stack social media platform featuring real-time posts, comments, and chat using Socket.IO. Leveraged Cloudinary for media, boosting page speed by 30% and reducing load times by 50%."
            />
            <Card 
              image={ghostnotes} 
              title='GhostNotes'
              description="Created Anonymous message sending platform using unique links to protect 100% user identity. Introduced JWT Authentication, OTP-based Email Verification. Achieved 30+ active users at present."
            />
            <Card 
              image={aiinterv} 
              title='AutoInterv'
              description="Developed AI-powered interview assistant platform that offers personalized interview experience. Executed chatbot support with NLP capabilities. Optimized performance by 30% using Node.js clustering and React router-based loading."
            />
          </div>
    </div>
  )
}

export default Project
