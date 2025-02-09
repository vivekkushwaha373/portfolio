import React from 'react'
import './About.css'
import Card from '../Card/Card'
import mern from '../../assets/mern.png'
import dsa from '../../assets/dsa.png'
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
                            <li><span>CGPA</span>: 8.2</li>
                            <li><span>LANGUAGE KNOWN</span>: HINDI,ENGLISH</li>

                        </ul>
                    </div>

                    <div className="Skills">
                        <h1>SKILLS</h1>
                        <ul>
                            <li>MERN STACK | NEXT JS</li>
                            <li>DSA</li>
                            <li><span>CORE: </span>DBMS,COMPUTER NETWORKS,OS,OOPS</li>
                            <li><span>LANGUAGE:</span>C,C++,JAVASCRIPT</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="rightabout">
                <Card title='MERN STACK WEB DEVELOPER' image={mern}></Card>
                <Card title='DSA' image={dsa}></Card>
               
                <Card title='GITHUB' image={git}></Card>
            </div>
        </div>

    )
}

export default About
