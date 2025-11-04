import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Student Management System",
      description: "A full-stack web app to manage student data with Firebase.",
      link: "#"
    },
    {
      title: "Chat App",
      description: "A real-time chat system built with React and Firebase.",
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "This personal website built using React and GitHub Pages.",
      link: "#"
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
