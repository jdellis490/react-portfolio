import React from "react";
import Nav from "react-bootstrap/Nav";

const Navbar = () => {
  return (
    <Nav className="navbar" justify variant="tabs" defaultActiveKey="/home">
      <div className="container">
        <Nav.Item>
          <Nav.Link href="/home">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="portfolio">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="contact">Contact Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="resume">Resume</Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default Navbar;
