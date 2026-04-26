import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectShowcase from './components/ProjectShowcase';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectShowcase />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
