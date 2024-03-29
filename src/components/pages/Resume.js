import React from 'react'
import givingHand from '../assets/images/givinghand.jpeg';

const Resume = () => {
  return (
    <div className='container'>
      <h1 className='title'>Resume</h1>
      <p className='p-resume'>Please click image below! ⬇️</p>
      <div className='image'>
        <a href='https://drive.google.com/file/d/1P7TcpIGOQuaa78x-x2afGq7xjJ6paCCC/view?usp=sharing' target='_blank'rel='noopener noreferrer'>
      <img className='resume-pic' src={givingHand} alt='resume' />
      </a>
      </div>        
    </div>
    
  )
}

export default Resume