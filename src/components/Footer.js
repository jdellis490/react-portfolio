import React from 'react'
import { GoMarkGithub } from 'react-icons/go';
import { FaLinkedin } from 'react-icons/fa';
import { BsFileEarmark } from 'react-icons/bs';
import { BsEnvelope } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer'>
      <p>Copyright &copy; 2023 Justin Ellis</p>
      <a href='https://www.linkedin.com/in/ellisjd/' id='linkedin-icon'><FaLinkedin  size={30} /></a>
      <a href='https://github.com/jdellis490' id='github-icon'><GoMarkGithub  size={30} /></a>
      <a href='mailto:jdellis490@gmail.com' id='email-icon'><BsEnvelope  size={30} /></a>
      <a href='' id='resume-icon'><BsFileEarmark size={30} /></a>
    </div>
  )
}

export default Footer