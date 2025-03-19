import React, { useEffect, useState } from 'react';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <section className="projects">
      <h2>프로젝트 목록</h2>
      <ul>
        {projects.map(project => (
          <li key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>Technologies: {project.technologies.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
