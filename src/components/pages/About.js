import React from "react";
import ProfilePic from "../assets/images/MePortfolio.jpeg";

const About = () => {
  return (
    <div className="container">
      <h1 className="title">About me</h1>
      <div className="image">
      <img  src={ProfilePic} alt="ProfilePic" width={300} height={400} />
      </div>
      <div className="container">
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
      </div>
    </div>
  );
};

export default About;
