import React from 'react';
import "../styles/projects.css";
import { motion } from "framer-motion";
import ProfileImg from '../images/netflix.png';
import ProfileImg1 from '../images/neut.png';
import ProfileImg2 from '../images/ship.png';

const projectExperience = [
  {
    title: "Netflix-clone",
    dates: "Ongoing",
    description: "This project involved creating dynamic, scalable solutions with MongoDB, Express.js, React, and Node.js.",
    image: ProfileImg,
    url: "https://github.com/Ritu9755/netflix-clone",
  },
  {
    title: "Neut",
    dates: "Aug 2024 - Oct 2024",
    description: "Developed responsive and user-friendly websites using HTML, CSS, and JavaScript, ensuring compatibility across devices.",
    image: ProfileImg1,
    url: "https://neutrinointernational.co/",
  },
  {
    title: "Shipping",
    dates: "Oct 2024 - Jan 2025",
    description: "Managed an import/export business, sourcing products globally and selling them domestically or abroad.",
    image: ProfileImg2,
    url: "https://www.nageshwarshipping.com/",
  },
];

const fade = {
  opacity: 1,
  transition: {
    duration: 0.5,
  },
};

const ProjectExperience = () => {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={fade}
          viewport={{ once: true }}
          className="heading"
        >
          <p className="heading-sub-text">My Project Journey</p>
          <p className="heading-text">Project Experience</p>
        </motion.div>

        <motion.div
          className="projects-box"
          initial={{ opacity: 0 }}
          whileInView={fade}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {projectExperience.map((project, index) => (
            <div
              key={index}
              className="project-experience"
              style={{
                textAlign: index === 1 ? "center" : index === 0 ? "left" : "right",
              }}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                />
              </a>
              <div className="project-info">
                <h1>{project.title}</h1>
                <p className="dates">{project.dates}</p>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectExperience;
