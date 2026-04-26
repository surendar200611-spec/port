import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsList = [
    { name: 'HTML', icon: '🌐', level: '90%' },
    { name: 'CSS', icon: '🎨', level: '85%' },
    { name: 'JavaScript', icon: '📜', level: '80%' },
    { name: 'ReactJS', icon: '⚛️', level: '85%' }
  ];

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <h2 className="section-title">My Technical Skills</h2>
        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div className="skill-card glass" key={index}>
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-bar" style={{ width: skill.level }}></div>
              </div>
              <span className="skill-level">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
