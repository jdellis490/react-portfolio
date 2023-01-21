import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {  
  return (
    <div className='container'>
      <h2 className='title'>Get in touch!</h2>
      <div className='contact-box'>
      <div className='contact-info'>
        <p>
          Please reach out and I'd be happy to answer any questions or concerns.
          <br />
          Call, Email, or Connect on LinkedIn!
          <br />
          (602) 918-4694
          <br />
          <a href='mailto:jdellis490@gmail.com' id='email'>jdellis490@gmail.com</a>
          <br />
          <a href='https://github.com/jdellis490' id='github-icon'><GoMarkGithub size={40} /></a> {' '}
          <a href='https://www.linkedin.com/in/ellisjd/' id='linkedin-icon'><FaLinkedin size={40} /></a>
        </p>
        </div>
      </div>
    </div>
  )
}

export default Contact