import React from 'react'
import './Card.css'
import mern from '../../assets/mern.png'

const Card = ({ title, image}) => {
  
  const redirect = () => {
    if (title == 'GITHUB') {
      window.open('https://github.com/vivekkushwaha373', '_blank');
    }
  }

  return (
    <div className='card' onClick={()=>redirect()}>
          <h1>{title}</h1>
          <div className='hovercard'>
              <img src={image} alt="" />
          </div>
    </div>
  )
}
 
export default Card
