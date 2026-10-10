import React from 'react'
import './About.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
const About = () => {
    useGSAP(() => {
        gsap.from('.circle', {
            x: -100,
            duration: 1,
            opacity: 0,
            stagger:1,
            scrollTrigger: {
                trigger: ".circle",
                scroll: 'body',
                scrub: 2,
                start: 'top 70%',
                
            }
          })
        gsap.from('.line', {
            x: -100,
            duration: 1,
            opacity: 0,
            stagger:1,
            scrollTrigger: {
                trigger: ".circle",
                scroll: 'body',
                scrub: 2,
                start: 'top 60%',
                end:'top 20%'
                
            }
          })
        gsap.from('.aboutdetails h1', {
            x: -100,
            duration: 1,
            opacity: 0,
            stagger:1,
            scrollTrigger: {
                trigger: ".aboutdetails h1",
                scroll: 'body',
                scrub: 2,
                start: 'top 60%',
                end: 'top 20%'
                
            }
        })
        gsap.from('.aboutdetails ul', {
            y: 100,
            duration: 1.5,
            opacity: 0,
            stagger: 1,
            scrollTrigger: {
                trigger: ".aboutdetails ul",
                scroll: 'body',
                scrub: 2,
                start: 'top 60%',
                end: 'top 20%'

            }
        })
        gsap.from('.rightabout', {
            x: 100,
            duration: 1,
            opacity: 0,
            stagger: 1,
            scrollTrigger: {
                trigger: ".rightabout",
                scroll: 'body',
                scrub: 2,
                start: 'top 60%',
                end: 'top 20%'

            }
        })
        
        
      })
    return (

        <div id="about">
            <div className="leftabout">
                <div className="circle-line">
                    <div className="circle"></div>
                    <div className="line"></div>
                    <div className="circle"></div>
                    <div className="line"></div>
                    <div className="circle"></div>

                </div>
                <div className="aboutdetails">
                    <div className="personalinfo about-card">
                        <h1 className="text-gradient">Personal Info</h1>
                        <ul>
                            <li><span>NAME:</span> Vivek Kushwaha</li>
                            <li><span>LOCATION:</span> Hyderabad / Bangalore</li>
                            <li><span>EMAIL:</span> vivekkushwaha734@gmail.com</li>
                            <li><span>LANGUAGES:</span> Hindi, English</li>
                        </ul>
                    </div>

                    <div className="education about-card">
                        <h1 className="text-gradient">Education</h1>
                        <ul>
                            <li><span>DEGREE:</span> B.Tech in Computer Science</li>
                            <li><span>COLLEGE:</span> Jawaharlal Nehru University, New Delhi</li>
                            <li><span>DURATION:</span> 2021 - 2025</li>
                        </ul>
                    </div>

                    <div className="Skills about-card">
                        <h1 className="text-gradient">Technical Skills</h1>
                        <ul>
                            <li><span>Languages:</span> Java, JavaScript, TypeScript, C, C++</li>
                            <li><span>FullStack:</span> Spring Boot, Spring Security, Hibernate/JPA, Microservices, REST APIs, Resilience4j, Multithreading, NodeJS, React.js</li>
                            <li><span>Databases & Messaging:</span> MongoDB, MySQL, Redis, Kafka</li>
                            <li><span>Dev Tools:</span> Git, GitHub, VS Code, Cursor, Antigravity, Codex, Claude, Vite, Postman, Vercel, Netlify, Render</li>
                            <li><span>DevOps & Cloud:</span> CI/CD (GitHub Actions), Docker, AWS, GKE, Kubernetes, Nginx</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="rightabout">
                <div className="social-links">
                    <a href="https://github.com/vivekkushwaha373" target="_blank" rel="noopener noreferrer" className="social-btn github-btn">
                        <FaGithub /> GitHub
                    </a>
                    <a href="https://linkedin.com/in/vivekkushwaha373" target="_blank" rel="noopener noreferrer" className="social-btn linkedin-btn">
                        <FaLinkedin /> LinkedIn
                    </a>
                </div>
                
                <div className="tech-stack-container about-card">
                    <h2 className="text-gradient">Tech Stack</h2>
                    <div className="tech-grid">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" title="Java" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring" title="Spring Boot" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" title="React" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" title="Node.js" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" title="AWS" className="invert-on-dark" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" alt="Kafka" title="Kafka" className="invert-on-dark" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" title="Docker" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" title="MongoDB" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" title="MySQL" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" alt="Redis" title="Redis" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
