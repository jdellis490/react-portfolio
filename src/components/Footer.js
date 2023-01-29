// Imported icons from react-icons for socials.
import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { BsFileEarmark } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <p>Copyright &copy; 2023 Justin Ellis</p>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/ellisjd/"
            id="linkedin-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jdellis490"
            id="github-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoMarkGithub size={30} />
          </a>
        </li>
        <li>
          <a href="mailto:jdellis490@gmail.com" id="email-icon">
            <BsEnvelope size={30} />
          </a>
        </li>
        <li>
          <a href="" id="resume-icon">
            <BsFileEarmark size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
