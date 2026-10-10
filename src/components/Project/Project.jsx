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
              points={[
                "Architected a microservices-based Code Generation platform that automates full-stack web application generation using LLMs, mirroring the functionality of industry leaders like Lovable/v0.",
                "Built a custom Node.js & Redis reverse proxy integrated with a Kubernetes NGINX Ingress Controller, dynamically routing 10,000+ subdomains for live app previews via rapid Redis lookups.",
                "Secured and routed backend communication using Spring Cloud Gateway, Eureka, and Config Server, validating JWTs across 6 microservices with <15ms overhead.",
                "Integrated LLM tool calling, reducing context tokens by 50% and improving latency by 50%.",
                "Decoupled storage operations with Kafka for asynchronous, non-blocking file persistence to MinIO.",
                "Containerized 6 services via Jib to Docker Hub, deployed on GKE with GitHub Actions CI/CD."
              ]}
            />
            <Card 
              image={bondsphere} 
              title='BondSphere'
              points={[
                "Built a social media platform for users to interact via posts and real-time chats.",
                "Incorporated post creation, likes/dislikes, comments, follow/unfollow, real-time notifications, and chat using Socket.IO enabling seamless interaction with under 1s latency.",
                "Leveraged Cloudinary, reducing media load time by 50% and boosting page speed by 30%."
              ]}
            />
            <Card 
              image={ghostnotes} 
              title='GhostNotes'
              points={[
                "Created Anonymous message sending platform using unique links to protect 100% user identity.",
                "Introduced JWT Authentication, OTP-based Email Verification.",
                "Achieved 30+ active users at present."
              ]}
            />
            <Card 
              image={aiinterv} 
              title='AutoInterv'
              points={[
                "Developed AI-powered interview assistant platform that offers personalized interview experience.",
                "Executed chatbot support with natural language processing capabilities.",
                "Optimized performance by 30% using Node.js clustering and React router-based loading."
              ]}
            />
          </div>
    </div>
  )
}

export default Project
