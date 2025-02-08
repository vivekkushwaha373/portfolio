import React from 'react'
import './Home.css'
import man from '../../assets/man.png'
import TypingEffect from 'react-typing-effect'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'




const Home = () => {
    useGSAP(() => {
        let t1 = gsap.timeline();
        t1.from('.line1', {
            y: 100,
            duration: 1,
            opacity: 0
        })
        t1.from('.line2', {
            y: 100,
            duration: 1,
            opacity: 0
        })
        t1.from('.line3', {
            y: 100,
            duration: 1,
            opacity: 0
        })
        gsap.from('.righthome img', {
            x: 200,
            duration: 1,
            opacity:0
        })
    })
  return (
    <div>
          <div id="home">
              <div className="lefthome">
                  <div className="homedetails">
                      <div className="line1">I'M</div>
                      <div className="line2">Vivek Kushwaha</div>
                      <div className="line3">
                          <TypingEffect
                              text={['WEB DEVELOPER', 'MERN DEVELOPER', 'SOFTWARE DEVELOPER']}
                              speed={100}
                              eraseSpeed={50}
                              eraseDelay={1000}
                              cursor='|'
                          >
                              
                          </TypingEffect>
                          
                      </div>
                          <button>HIRE ME</button>
                  </div>
              </div>
              <div className="righthome">
                  <img src={man} alt="" />
              </div>
          </div>
    </div>
  )
}

export default Home
