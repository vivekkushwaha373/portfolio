import React from 'react'
import './Card.css'
import mern from '../../assets/mern.png'

const Card = ({ title, image}) => {
  
  const redirect = () => {
    if (title == 'GITHUB') {
      window.open('https://github.com/vivekkushwaha373', '_blank');
    }
    if (title == 'AutoInterv') {
      window.open('https://autointerv.vercel.app/', '_blank');
    }
    if (title == 'BondSphere') {
      window.open('https://bond-spheree.vercel.app/', '_blank');
    }
    if (title == 'GhostNotes') {
      window.open('https://ghost-notes-tau.vercel.app/', '_blank');
    }
    if (title == 'Ecommerce') {
      window.open('https://ec0mmfrontend.netlify.app/', '_blank');
    }
    if (title == 'NoteSaver') {
      window.open('https://notesav.netlify.app/', '_blank');
    }
    if (title == 'Password Generator') {
      window.open('https://passwogen.netlify.app/', '_blank');
    }
    if (title == 'Tic Tac Toe') {
      window.open('https://tic-tac0.netlify.app/', '_blank');
    }
    if(title == 'Rock Paper Scissor'){
      window.open('https://rpaperscissor.netlify.app/', '_blank');
    }      
    if(title == 'StudySync'){
      window.open('https://studysyc.netlify.app/', '_blank');
    }
    if (title == 'Cards') {
      window.open('https://courscard.netlify.app/', '_blank');
    }
    if (title == 'Testimonials') {
      window.open('https://testimoncards.netlify.app/', '_blank');
    }
    if (title == 'AmazonBasic Css') {
      window.open('https://amz0n1.netlify.app/', '_blank');
    }
  }

  return (
     
    <div className='card' onClick={()=>redirect()}>
      <h1>{title}</h1>
          <div className='hoverprojectcard' >
              <img src={image}  alt="" />
        </div>


    </div>
      
  )
}
 
export default Card
