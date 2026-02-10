import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { hotelConfig } from '../../config';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Фонове зображення - ЗАМІНІТЬ на фото вашого готелю */}
      {/* Рекомендований розмір: 1920x1080px */}
      {/* Можна використати фото зовнішнього вигляду готелю або краєвид старого міста */}
      <div 
        className="hero-background"
        style={{
          backgroundImage: 'url(https://udominicanakamianetspodilskyi.ua-hotel.com/data/Photos/OriginalPhoto/14217/1421771/1421771208/photo-u-dominicana-kamianets-podilskyi-1=w1920-h1080.JPEG)',
        }}
      >
        <div className="hero-overlay"></div>
      </div>
      
      {/* Контент Hero секції */}
      <Container className="hero-content">
        <div className="text-center text-white">
          <h1 className="hero-title display-2 fw-bold mb-4">
            {hotelConfig.hotelName}
          </h1>
          <p className="hero-subtitle display-6 mb-5">
            {hotelConfig.tagline}
          </p>
          <div className="hero-buttons">
            <Button 
              variant="primary" 
              size="lg" 
              href="#rooms"
            >
              Переглянути номери
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
