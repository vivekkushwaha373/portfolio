import React from 'react'
import './Card.css'

const Card = ({ title, image, description }) => {
  
  const redirect = () => {
    if (title === 'GITHUB') {
      window.open('https://github.com/vivekkushwaha373', '_blank');
    }
    if (title === 'Lovable Clone') {
      window.open('https://github.com/vivekkushwaha373/lovable-clone', '_blank');
    }
    if (title === 'AutoInterv') {
      window.open('https://autointerv.vercel.app/', '_blank');
    }
    if (title === 'BondSphere') {
      window.open('https://bond-spheree.vercel.app/', '_blank');
    }
    if (title === 'GhostNotes') {
      window.open('https://ghost-notes-tau.vercel.app/', '_blank');
    }
  }

  return (
    <div className='card' onClick={() => redirect()}>
      <div className='card-image-container'>
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h1>{title}</h1>
        {description && <p className="card-description">{description}</p>}
      </div>
    </div>
  )
}
 
export default Card
