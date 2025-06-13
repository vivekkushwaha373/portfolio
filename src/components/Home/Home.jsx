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
                              text={['Full Stack DEVELOPER', 'MERN|NEXT DEVELOPER', 'Proficient in DSA', 'SOFTWARE DEVELOPER']}
                              speed={100}
                              eraseSpeed={50}
                              eraseDelay={1000}
                              cursor='|'
                          >
                              
                          </TypingEffect>
                          
                      </div>
                      <Link to='contact' spy={true} smooth={true} duration={500}><button>HIRE ME</button></Link>
                          
                  </div>
              </div>
              <div className="righthome">
                  <img src={man} alt="" style={{borderRadius:"90%"}} />
              </div>
          </div>
    </div>
  )
}

export default Home
