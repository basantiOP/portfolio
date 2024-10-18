import React from 'react';
import '../styles.css'; // Make sure to reference your CSS styles
import { FaGithub } from 'react-icons/fa'; // React-icons for GitHub icon
import alzcare from "../assets/alzcare.jpg";
import chatapp from "../assets/chatapp.jpg";
import game from "../assets/game.jpg";
import scraper from "../assets/scraper.jpg";
const projects = [
  {
    name: 'ALzCare',
    description: 'An App designed to assist people with early-stage Alzheimer’s disease. Tech: Dart, Firebase, Flutter Libraries - kommunicate flutter',
    image: alzcare, 
    githubLink: 'https://github.com/basantiOP/AlzCare',
  },
  {
    name: 'Chat Application',
    description: 'This is a MERN Stack application that enables registered users to have seamless conversations.Tech : NodeJS, ReactJS , Express.js , MongoDB , Tailwind CSS',
    image: chatapp, 
    githubLink: 'https://github.com/basantiOP/chatApp',
  },
  {
    name: 'Gamify',
    description: 'A ReactJs Gaming Website to get you out of your monotonous hectic scheduele :)',
    image: game,
    githubLink: 'https://github.com/basantiOP/Gamify',
  },
  {
    name: 'Job Scraper',
    description: 'This tool is designed to parse raw job data from various websites like Indeed and Shine. Tech : Tkinter , Python - (Beautiful Soup)',
    image: scraper, 
    githubLink: 'https://github.com/basantiOP/jobScraper',
  },
];

const ProjectCards = () => {
  return (
    <section className="project-section">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={`Screenshot of ${project.name}`}
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <FaGithub className="github-icon" /> View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCards;

