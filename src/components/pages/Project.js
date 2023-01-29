import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
  passGen,
  weatherDash,
  workayPlan,
  animeSearch,
  jateEdit,
  socialAPI,
} from "../assets/index";

const Project = () => {
  return (
    <div className="container">
      <h1 className="title">Projects</h1>
    <div className="project-container">
       <Card className="project">
        <Card.Img variant="top" src={weatherDash} />
        <Card.Body>
          <Card.Title>Weather Dashboard</Card.Title>
          <Card.Text>
            This project uses and API to get the weather conditions and
            temperature of different cities across the country.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>
            <Button variant="success">
              <a href="https://jdellis490.github.io/weather-dashboard/"></a>
              Deployment
            </Button>{" "}
            <Button variant="secondary">
              <a href="https://github.com/jdellis490/weather-dashboard"></a>
              GitHub
            </Button>
          </small>
        </Card.Footer>
      </Card>
      <Card className="project">
        <Card.Img variant="top" src={animeSearch} />
        <Card.Body>
          <Card.Title>Anime Search Engine</Card.Title>
          <Card.Text>
            Search engine that uses multiple API calls to fetch anime titles,
            descriptions, ratings, and YouTube trailers from anime title input.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>
            <Button variant="success">
              <a href="https://skyw41k3r.github.io/project_1/ "></a>Deployment
            </Button>{" "}
            <Button variant="secondary">
              <a href="https://github.com/Skyw41k3r/project_1"></a>GitHub
            </Button>
          </small>
        </Card.Footer>
      </Card>
      <Card className="project">
        <Card.Img variant="top" src={socialAPI} />
        <Card.Body>
          <Card.Title>Social Network API</Card.Title>
          <Card.Text>
            Backend application built to demostrate how users can interact with posts and 
            manage their friends.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <br></br>
          <small>
            <Button variant="success">
              <a href="https://github.com/jdellis490/Social-Network-API"></a>
              GitHub
            </Button>
          </small>
        </Card.Footer>
      </Card>
      </div>
    </div>
  );
};

export default Project;
