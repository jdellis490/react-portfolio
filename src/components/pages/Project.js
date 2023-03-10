// Imported Bootstap Card and Buttons for Project visualization and structure
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { weatherDash, animeScout, socialAPI } from "../assets/index";

// Each Project contains a screenshot of app, description, link to deployment(if possible), and link to GitHub repo.
const Project = () => {
  return (
    <div className="container">
      <h1 className="title">Projects</h1>
      <div className="project-container">
      <Card className="project">
          <Card.Img variant="top" src={animeScout} />
          <Card.Body>
            <Card.Title>Anime Scout</Card.Title>
            <Card.Text>
              Search engine that uses multiple API calls to fetch anime titles,
              descriptions, ratings, and YouTube trailers from an anime title
              input.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>
              <Button
                variant="success"
                href="https://jdellis490.github.io/anime-scout/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployment
              </Button>{" "}
              <Button
                variant="secondary"
                href="https://github.com/jdellis490/anime-scout"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
            </small>
          </Card.Footer>
        </Card>
        <Card className="project">
          <Card.Img variant="top" src={weatherDash} />
          <Card.Body>
            <Card.Title>Weather Dashboard</Card.Title>
            <Card.Text>
              This project uses an API to get the weather conditions and
              temperature of different cities across the country.
              {/* Might add technologies used in each application later below */}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>
              <Button
                variant="success"
                href="https://jdellis490.github.io/weather-dashboard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployment
              </Button>{" "}
              <Button
                variant="secondary"
                href="https://github.com/jdellis490/weather-dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
            </small>
          </Card.Footer>
        </Card>
        <Card className="project">
          <Card.Img variant="top" src={socialAPI} />
          <Card.Body>
            <Card.Title>Social Network API</Card.Title>
            <Card.Text>
              Backend application built to demostrate how users can interact
              with posts and manage their friends.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <br></br>
            <small>
              <Button
                variant="success"
                href="https://github.com/jdellis490/Social-Network-API"
                target="_blank"
                rel="noopener noreferrer"
              >
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
