import React, { useRef } from 'react';
import { services } from '../../config';
import Icon from '../Icon';
import './Services.css';

const Services = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      // Використовуємо ширину картки або контейнера
      const scrollAmount = scrollRef.current.clientWidth > 400 ? 300 : scrollRef.current.clientWidth * 0.85;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title" data-animate="fade-in">Наші послуги</h2>
        <p className="section-subtitle" data-animate="fade-in">
          Все необхідне для вашого комфортного відпочинку
        </p>

        <div className="services-slider-wrap">
          <button
            className="slider-nav slider-nav--left"
            onClick={() => scroll('left')}
            aria-label="Previous services"
          >
            ‹
          </button>

          <div className="services-grid cascade-hover" ref={scrollRef}>
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

          <button
            className="slider-nav slider-nav--right"
            onClick={() => scroll('right')}
            aria-label="Next services"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
