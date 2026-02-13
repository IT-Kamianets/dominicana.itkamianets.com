import React from 'react';
import { services } from '../../config';
import Icon from '../Icon';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title" data-animate="fade-in">Наші послуги</h2>
        <p className="section-subtitle" data-animate="fade-in">
          Все необхідне для вашого комфортного відпочинку
        </p>

        <div className="services-grid cascade-hover">
          {services.map((service, i) => (
            <div
              className="service-card"
              key={service.id}
              data-animate="scale-up"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="service-card__icon">
                <Icon name={service.icon} size={28} />
              </div>
              <h5 className="service-card__title">{service.title}</h5>
              <p className="service-card__desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
