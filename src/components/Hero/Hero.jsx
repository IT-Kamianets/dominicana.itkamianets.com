import React from 'react';
import { hotelConfig } from '../../config';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div
        className="hero-background"
        style={{
          backgroundImage:
            'url(https://udominicanakamianetspodilskyi.ua-hotel.com/data/Photos/OriginalPhoto/14217/1421771/1421771208/photo-u-dominicana-kamianets-podilskyi-1=w1920-h1080.JPEG)',
        }}
      >
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content container">
        <h1 className="hero-title hero-title-animation">
          {hotelConfig.hotelName}
        </h1>
        <p className="hero-subtitle hero-subtitle-animation">
          {hotelConfig.tagline}
        </p>
        <div className="hero-buttons hero-button-animation">
          <a href="#rooms" className="btn btn-hero">
            Переглянути номери
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator hero-button-animation">
        <span className="hero-scroll-indicator__text">Скролити</span>
        <div className="hero-scroll-indicator__arrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
