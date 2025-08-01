import React from 'react'
import './About.css'
import Card from '../Card/Card'
import mern from '../../assets/mern.png'
import linkedin from '../../assets/linkedin.png'
import git from '../../assets/git.png'
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
                    <div className="personalinfo">
                        <h1>Personal Info</h1>
                        <ul>
                            <li><span>NAME</span>: Vivek Kushwaha</li>
                            <li><span>AGE</span>: 22 YEARS</li>
                            <li><span>GENDER</span>: Vivek Kushwaha</li>
                            <li><span>LANGUAGE KNOWN</span>: HINDI,ENGLISH</li>

                        </ul>
                    </div>

                    <div className="education">
                        <h1>Education</h1>
                        <ul>
                            <li><span>DEGREE</span>: B.Tech</li>
                            <li><span>BRANCH</span>: COMPUTER SCIENCE & ENGINEERING</li>
                            <li><span>COLLEDGE</span>: JAWAHARLAL NEHRU UNIVERSITY</li>
                            {/* <li><span>CGPA</span>: 8.2</li> */}
                            <li><span>LANGUAGE KNOWN</span>: HINDI,ENGLISH</li>

                        </ul>
                    </div>

                    <div className="Skills">
                        <h1>SKILLS</h1>
                        <ul>
                            <li><span>Languages: </span>SQL, C,Python, C++, JavaScript, TypeScript, HTML, CSS</li>
                            <li><span>Developer Tools: </span>Git, GitHub, VS Code, Postman</li>
                            <li><span>Frameworks: </span>Express.js, Tailwind, NEXT.js, React.js, Django</li>
                            <li><span>Databases: </span> MongoDB, MySQL, Redis</li>
                            <li><span>DevOps & Cloud: </span>CI/CD (GitHub Actions), Docker, Kubernetes, AWS (IAM, EC2, S3, CloudFront, Lambda)</li>
                            <li><span>Core: </span>DBMS,COMPUTER NETWORKS,OS,OOPS</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="rightabout">
                <Card title='MERN STACK|NEXT DEVELOPER' image={mern}></Card>
                <Card title='Linkedin' image={linkedin}></Card>
               
                <Card title='GITHUB' image={git}></Card>
            </div>
        </div>

    )
}

export default About
