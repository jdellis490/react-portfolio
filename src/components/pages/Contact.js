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
          Please reach out and I'd be happy to answer your questions or concerns.
          <br />
          Call, Email, or Connect on LinkedIn!
          <br />
          (602) 918-4694
          <br />
          jdellis490@gmail.com
          <br />
          <GoMarkGithub size={40}/> <FaLinkedin size={40} />
        </p>
        </div>
      </div>
    </div>
  )
}

export default Contact