// Imported Bootstap Card and Buttons for Project visualization and structure
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { weatherDash, animeScout, socialAPI, neupixl } from "../assets/index";

// Each Project contains a screenshot of app, description, link to deployment(if possible), and link to GitHub repo.
const Project = () => {
  return (
    <div className="container">
      <h1 className="title">Projects</h1>
      <div className="project-container">
      <Card className="project">
          <Card.Img variant="top" src={neupixl} />
          <Card.Body>
            <Card.Title><h4>Neupixl</h4></Card.Title>
            <Card.Text>
              - Photo gallery that lets users upload and comment on photos, interacting with other users.
              <br></br>
              <b>Technologies:</b> React, Express, Apollo/Graphql, MongoDB, Node, Tailwind, Cloudinary API
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>
              <Button
                variant="primary"
                href="https://neupixl-b3196fa7bb12.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployment
              </Button>{" "}
              <Button
                variant="secondary"
                href="https://github.com/jdellis490/neupixl"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
            </small>
          </Card.Footer>
        </Card>
      <Card className="project">
          <Card.Img variant="top" src={animeScout} />
          <Card.Body>
            <Card.Title><h4>Anime Scout</h4></Card.Title>
            <Card.Text>
              - Search engine that uses multiple API calls to fetch anime titles,
              descriptions, ratings, and YouTube trailers from an anime title
              input.
              <br></br>
              <b>Technologies:</b> HTML, CSS, JavaScript, YouTube and Jikan APIs
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>
              <Button
                variant="primary"
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
            <Card.Title><h4>Weather Dashboard</h4></Card.Title>
            <Card.Text>
              - This project uses an API to get the weather conditions and
              temperatures of different cities across the country.
              <br></br>
              <b>Technologies:</b> HTML, CSS, JavaScript, JQuery, Bootstrap, OpenWeather API 
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>
              <Button
                variant="primary"
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
            <Card.Title><h4>Social Network API</h4></Card.Title>
            <Card.Text>
              - Dual video demonstration of a backend CRUD application built to show how users can interact
              with posts and manage their friends. Not deployed.
              <br></br>
              <b>Technologies:</b> Express, MongoDB, Mongoose
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <br></br>
            <small>
              <Button
                variant="primary"
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
