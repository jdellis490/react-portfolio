import React from 'react'
import { GoMarkGithub } from 'react-icons/go';
import { FaLinkedin } from 'react-icons/fa';
import { BsFileEarmark } from 'react-icons/bs';
import { BsEnvelope } from 'react-icons/bs';

const Footer = () => {
  return (
    <section className='footer'>
      <p>Copyright &copy; 2023 Justin Ellis</p>
      <FaLinkedin  size={30}/> 
      <GoMarkGithub  size={30}/> 
      <BsEnvelope  size={30} /> 
      <BsFileEarmark size={30}/>
    </section>
  )
}

export default Footer