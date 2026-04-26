import React from 'react';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      title: 'Website Development',
      description: 'Custom, fast, and scalable websites tailored to your business needs, built from the ground up.',
      icon: '🌐'
    },
    {
      title: 'Responsive UI Design',
      description: 'Beautiful, intuitive user interfaces that look perfect on all devices, from mobile to desktop.',
      icon: '📱'
    },
    {
      title: 'React.js Web Apps',
      description: 'Complex, interactive single-page applications utilizing the power of React ecosystem.',
      icon: '⚛️'
    },
    {
      title: 'Performance Optimization',
      description: 'Auditing and optimizing existing websites to achieve blazing fast loading speeds and better SEO.',
      icon: '⚡'
    }
  ];

  return (
    <section className="section services" id="services">
      <div className="container">
        <h2 className="section-title">My Services</h2>
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div className="service-card glass" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
