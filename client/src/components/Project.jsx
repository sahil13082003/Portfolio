import React, { useState } from 'react';
import '../style/Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Agrirenthub from '../assets/agrirenthub.png';
import crud from '../assets/php_crud.png';
import inshort_clone from '../assets/inshort_clone.png'
import Automatic from '../assets/automatic.png'

const projects = [
  {
    id: 1,
    title: 'Agricultural Equipment Rental System',
    tech: ['PHP', 'HTML', 'CSS', 'Razorpay', 'SMTP-Mailer', 'MySQL'],
    description: 'AgriRentHub is a user-friendly online platform designed to empower farmers. This platform facilitates farmers in renting their equipment to fellow farmers at cost-effective rates, creating an opportunity to generate extra income. A smart and efficient solution for optimizing resources in agriculture.',
    image: Agrirenthub,
    github: 'https://github.com/yourusername/projectone',
    live: 'https://projectone.example.com'
  },
  {
    id: 2,
    title: 'PHP CRUD Operation',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
    description: 'This project demonstrates a basic PHP CRUD (Create, Read, Update, Delete) application. It allows users to perform essential database operations on a simple web interface. The application includes features like adding new records, displaying existing records, updating records, and deleting records from a MySQL database.',
    image: crud,
    github: 'https://github.com/yourusername/projecttwo',
    live: 'https://projecttwo.example.com'
  },
  {
    id: 3,
    title: 'Automatic Timetable Generator',
    tech: ['React', 'Express', 'Node.js', 'MongoDB'],
    description: 'A brief description of Project Three.',
    image: Automatic,
    github: 'https://github.com/yourusername/projectthree',
    live: 'https://projectthree.example.com'
  },
  {
    id: 4,
    title: 'Inshort Clone',
    tech: ['React','Node.js', 'Express', 'MongoDB'],
    description: 'AgriRentHub is a user-friendly online platform designed to empower farmers. This platform facilitates farmers in renting their equipment to fellow farmers at cost-effective rates, creating an opportunity to generate extra income. A smart and efficient solution for optimizing resources in agriculture.',
    image: inshort_clone,
    github: 'https://github.com/yourusername/projectfour',
    live: 'https://projectfour.example.com'
  },
  {
    id: 3,
    title: 'Automatic Timetable Generator',
    tech: ['React', 'Express', 'Node.js', 'MongoDB'],
    description: 'A brief description of Project Three.',
    image: Automatic,
    github: 'https://github.com/yourusername/projectthree',
    live: 'https://projectthree.example.com'
  },
  {
    id: 4,
    title: 'Inshort Clone',
    tech: ['React','Node.js', 'Express', 'MongoDB'],
    description: 'AgriRentHub is a user-friendly online platform designed to empower farmers. This platform facilitates farmers in renting their equipment to fellow farmers at cost-effective rates, creating an opportunity to generate extra income. A smart and efficient solution for optimizing resources in agriculture.',
    image: inshort_clone,
    github: 'https://github.com/yourusername/projectfour',
    live: 'https://projectfour.example.com'
  },
  // Add more projects here
];

const Project = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.tech.map(t => t.toLowerCase()).includes(filter));

  return (
    <div id="projects" className="project">
      <h2 className="project_heading">Personal Projects</h2>
      <div className="project_buttons">
        <button
          className={`project_button ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`project_button ${filter === 'php' ? 'active' : ''}`}
          onClick={() => setFilter('php')}
        >
          PHP
        </button>
        <button
          className={`project_button ${filter === 'react' ? 'active' : ''}`}
          onClick={() => setFilter('react')}
        >
          React
        </button>
        <button
          className={`project_button ${filter === 'node.js' ? 'active' : ''}`}
          onClick={() => setFilter('node.js')}
        >
          Node.js
        </button>
      </div>
      <div className="project_cards">
        {filteredProjects.map(project => (
          <div key={project.id} className="project_card">
            <img src={project.image} alt={project.title} />
            <h3 className="project_card_title">{project.title}</h3>
            <div className="project_card_tech">
              {project.tech.map(t => (
                <button key={t} className="tech_button">{t}</button>
              ))}
            </div>
            <p className="project_card_description">{project.description}</p>
            <div className="project_card_icons">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="project_card_icon" />
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGlobe} className="project_card_icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
