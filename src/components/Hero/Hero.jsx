import React from 'react';
import { hotelConfig } from '../../config';
import heroImg from '../../assets/images/hero.webp';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero" aria-label={`Готель ${hotelConfig.hotelName}`}>

      {/* Background */}
      <div
        className="hero__bg"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
        role="img"
        aria-label="Кам'янець-Подільський"
      />

      {/* Radial vignette overlay */}
      <div className="hero__overlay" />

      {/* Centered title card */}
      <div className="hero__content">

        <p className="hero__location hero__anim hero__anim--1">
          <span className="hero__location-line" />
          Кам'янець-Подільський
          <span className="hero__location-line" />
        </p>

        <div className="hero__title-wrap hero__anim hero__anim--2">
          <div className="hero__rule" aria-hidden="true" />
          <h1 className="hero__title">{hotelConfig.hotelName}</h1>
          <div className="hero__rule" aria-hidden="true" />
        </div>

        <p className="hero__tagline hero__anim hero__anim--3">
          {hotelConfig.tagline}
        </p>

        <div className="hero__ctas hero__anim hero__anim--4">
          <a href={hotelConfig.social.booking} target="_blank" rel="noopener noreferrer" className="btn-hero">Забронювати</a>
          <a href="#rooms" className="hero__link" style={{ marginTop: '0.5rem' }}>Переглянути номери ↓</a>
        </div>
      </div>

      {/* Floating stats strip - overlaps next section */}
      <div className="hero__strip hero__anim hero__anim--5" aria-label="Рейтинги готелю">
        <div className="hero__strip-inner">
          <div className="hero__strip-item">
            <strong>9.6</strong>
            <span>Booking.com</span>
          </div>
          <div className="hero__strip-sep" aria-hidden="true" />
          <div className="hero__strip-item">
            <strong>712</strong>
            <span>відгуків</span>
          </div>
          <div className="hero__strip-sep" aria-hidden="true" />
          <div className="hero__strip-item">
            <strong>9.9</strong>
            <span>розташування</span>
          </div>
          <div className="hero__strip-sep" aria-hidden="true" />
          <div className="hero__strip-item">
            <strong>10</strong>
            <span>номерів</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
