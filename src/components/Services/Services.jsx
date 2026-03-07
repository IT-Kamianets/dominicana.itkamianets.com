import React from 'react';
import { services } from '../../config';
import Icon from '../Icon';
import './Services.css';

const row1 = services.slice(0, 5);
const row2 = services.slice(5);

const MarqueeRow = ({ items, reverse = false }) => (
  <div className={`marquee-track${reverse ? ' marquee-track--reverse' : ''}`}>
    {[...items, ...items, ...items].map((service, i) => (
      <div key={i} className="marquee-item">
        <div className="marquee-item__icon">
          <Icon name={service.icon} size={18} />
        </div>
        <span className="marquee-item__name">{service.title}</span>
      </div>
    ))}
  </div>
);

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title" data-animate="fade-in">Наші послуги</h2>
        <p className="section-subtitle" data-animate="fade-in">
          Все необхідне для вашого комфортного відпочинку
        </p>
      </div>

      <div className="marquee-wrap">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
};

export default Services;
