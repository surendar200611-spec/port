import React, { useState } from 'react';
import './ProjectShowcase.css';

const projects = [
  {
    id: 1,
    title: 'CRM System',
    category: 'Full-Stack App',
    description: 'A professional Client Lead Management System with secure admin authentication, lead tracking, and status management.',
    tech: ['React', 'Node.js', 'Express', 'Firebase'],
    image: '/projects/crm.png',
    link: 'https://github.com/surendar200611-spec/CRM.git'
  },
  {
    id: 2,
    title: 'PhotoStudio',
    category: 'Portfolio Website',
    description: 'An elegant, high-performance photography studio portfolio with a focus on visual storytelling and sophisticated design.',
    tech: ['React', 'Vite', 'CSS Modules'],
    image: '/projects/photostudio.png',
    link: 'https://photostudio-79wb.vercel.app/'
  }
];

const ProjectShowcase = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card glass"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className={`project-overlay ${hoveredId === project.id ? 'active' : ''}`}>
                  <div className="project-tech">
                    {project.tech.map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
