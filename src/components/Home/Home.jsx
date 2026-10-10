import React from 'react'
import './Home.css'
import man from '../../assets/man.jpg'
import TypingEffect from 'react-typing-effect'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-scroll'

const Home = () => {
    useGSAP(() => {
        let t1 = gsap.timeline();
        t1.from('.line1', {
            y: 50,
            duration: 0.8,
            opacity: 0,
            ease: "power3.out"
        })
        t1.from('.line2', {
            y: 50,
            duration: 0.8,
            opacity: 0,
            ease: "power3.out"
        }, "-=0.4")
        t1.from('.line3', {
            y: 50,
            duration: 0.8,
            opacity: 0,
            ease: "power3.out"
        }, "-=0.4")
        gsap.from('.righthome img', {
            scale: 0.8,
            duration: 1.2,
            opacity: 0,
            ease: "power3.out"
        })
    })
  return (
    <div>
          <div id="home">
              <div className="lefthome">
                  <div className="homedetails">
                      <div className="line1 text-secondary">Hello, I'm</div>
                      <div className="line2 text-gradient">Vivek Kushwaha</div>
                      <div className="line3">
                          <TypingEffect
                              text={['Full Stack Engineer', 'Java & Spring Boot Expert', 'React & Node.js Developer', 'AI Integrations Specialist']}
                              speed={80}
                              eraseSpeed={40}
                              eraseDelay={1500}
                              cursor='|'
                          />
                      </div>
                      <Link to='contact' spy={true} smooth={true} duration={500}>
                        <button className="hire-btn">Let's Connect</button>
                      </Link>
                  </div>
              </div>
              <div className="righthome">
                  <div className="img-container">
                    <img src={man} alt="Vivek Kushwaha" />
                    <div className="glow-ring"></div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Home
