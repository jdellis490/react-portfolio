import React from "react";
import ProfilePic from "../assets/images/MePortfolio.jpeg";
import { html5,
    css3,
    javascript,
    jquery,
    bootstrap,
    mongodb,
    express,
    reactjs,
    node,
    mysql,
    github,
    mern
} from '../assets/images/skills/index';

const About = () => {
  return (
    <div className="container">
      <h1 className="title">About me</h1>
      <div className="image">
      <img  src={ProfilePic} alt="Justin Ellis" />
      </div>
      <section className="container">
        <h5>
          Hello, I'm Justin, a now Full Stack Software Engineer with a
          background in Occupational Therapy. On my spare time, I am constantly
          working to improve my skills gained through continuing education on
          technologies and seeing how I can apply them to my everyday life. Ever
          since I learned programming, I developed a passion for it and try to
          make a daily habit. Technology never stops improving, whether it's
          through improved versions or completely new creations, and I am
          willing to commit to learn in the future and the work place.
          <br></br>
          <br></br>
          Programming is an amazing creative outlet that allows one to make
          anything they set their mind to. Although challenging at times, when
          enough effort is placed, fulfillment occurs and all the hard work
          seems worth it. When I am not coding, I enjoy working out, video
          games, spending time with friends, and the occasional Netflix binge.
        </h5>
      </section>
      <div className="container">
        <h1 className="title">Skills</h1>
        <div className="skills">
        <ul>
          <li><img className="skill-images" src={html5} alt="HTML5" /></li>
          <li><img className="skill-images" src={css3} alt="CSS3" /></li>
          <li><img className="skill-images" src={javascript} alt="JS" /></li>
          <li><img className="skill-images" src={reactjs} alt="React" /></li>
          <li><img className="skill-images" src={express} alt="Express" /></li>
          <li><img className="skill-images" src={mongodb} alt="MongoDB" /></li>
          <li><img className="skill-images" src={node} alt="NodeJs" /></li>
          <li><img className="skill-images" src={mysql} alt="MySQL" /></li>
          <li><img className="skill-images" src={jquery} alt="JQuery" /></li>
          <li><img className="skill-images" src={bootstrap} alt="Boostrap" /></li>
          <li><img className="skill-images" src={github} alt="GitHub" /></li>
          <li><img className="skill-images" src={mern} alt="MERN" /></li>
        </ul>
        </div>
     </div>
    </div>
  );
};

export default About;
