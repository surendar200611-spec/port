import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content glass">
          <div className="about-text">
            <h3>Turning complex problems into elegant solutions</h3>
            <p>
              I am a dedicated Frontend Developer with a strong foundation in modern web technologies. 
              My journey in tech is driven by a passion for creating seamless user experiences and 
              writing clean, maintainable code.
            </p>
            <p>
              With expertise in React, JavaScript, and contemporary CSS techniques, I focus on 
              building responsive applications that not only look great but perform exceptionally.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <div className="highlight-info">
                  <h4>Fast Learner</h4>
                  <p>Quick to adopt new technologies and best practices.</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🎨</span>
                <div className="highlight-info">
                  <h4>Design Focused</h4>
                  <p>Keen eye for detail and aesthetic appeal.</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🛠️</span>
                <div className="highlight-info">
                  <h4>Problem Solver</h4>
                  <p>Analytical approach to complex technical challenges.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
