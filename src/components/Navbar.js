import React from "react";
import Nav from "react-bootstrap/Nav";

const Navbar = ({pageChange, currentpage}) => { 
  // Had to lowercase currentPage because its an attribute on a DOM element instead of a React Component
  return (
    <ul className="navbar">
      <li><a href="#home" onClick={() => pageChange('Home')} currentpage={currentpage}>Home</a></li>
      <li><a href="#about" onClick={() => pageChange('About')} currentpage={currentpage}>About Me</a></li>
      <li><a href="#project" onClick={() => pageChange('Project')} currentpage={currentpage}>Projects</a></li>
      <li><a href="#contact" onClick={() => pageChange('Contact')} currentpage={currentpage}>Contact Me</a></li>
      <li><a href="#resume" onClick={() => pageChange('Resume')} currentpage={currentpage}>Resume</a></li>
    </ul>
  );
};

export default Navbar;
