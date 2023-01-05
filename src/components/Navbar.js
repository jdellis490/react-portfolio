import React from "react";
import Nav from "react-bootstrap/Nav";

const Navbar = ({currentPage, pageChange}) => {
  return (
    <ul className="navbar">
      <li><a href="#home" onClick={() => pageChange('Home')} currentPage={currentPage}>Home</a></li>
      <li><a href="#about" onClick={() => pageChange('About')} currentPage={currentPage}>About Me</a></li>
      <li>Projects</li>
      <li>Contact Me</li>
      <li>Resume</li>
    </ul>
      // <Nav className="navbar" justify variant="tabs" defaultActiveKey="#">
      //   <div className="container">
      //     <Nav.Item>
      //       <Nav.Link href="/About">About Me</Nav.Link>
      //     </Nav.Item>
      //     <Nav.Item>
      //       <Nav.Link eventKey="portfolio">Portfolio</Nav.Link>
      //     </Nav.Item>
      //     <Nav.Item>
      //       <Nav.Link eventKey="contact">Contact Me</Nav.Link>
      //     </Nav.Item>
      //     <Nav.Item>
      //       <Nav.Link eventKey="resume">Resume</Nav.Link>
      //     </Nav.Item>
      //   </div>
      // </Nav>
  );
};

export default Navbar;
