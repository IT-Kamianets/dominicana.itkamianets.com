import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { hotelConfig } from '../../config';
import heroImg from '../../assets/images/hero.webp';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current || !bgRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 to 1
      
      // translate(x*12px, y*8px) + scale(1.06)
      bgRef.current.style.transform = `translate(${x * 12}px, ${y * 8}px) scale(1.06)`;
    };

    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener('mousemove', handleMouseMove);
      return () => heroEl.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleHeroScroll = (e, targetId) => {
    if (location.pathname !== '/') {
      return; // Link will handle navigation
    }
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" ref={heroRef} aria-label={`Готель ${hotelConfig.hotelName}`}>

      {/* Background container to hide overflow from scaling */}
      <div className="hero__bg-wrap">
        <div
          ref={bgRef}
          className="hero__bg"
          style={{
            backgroundImage: `url(${heroImg})`,
          }}
          role="img"
          aria-label="Кам'янець-Подільський"
        />
      </div>

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
          <Link 
            to="/#contact" 
            className="btn-hero"
            onClick={(e) => handleHeroScroll(e, '#contact')}
          >
            Забронювати номер
          </Link>
          <Link 
            to="/#rooms" 
            className="hero__link" 
            style={{ marginTop: '0.8rem' }}
            onClick={(e) => handleHeroScroll(e, '#rooms')}
          >
            Переглянути вітрину ↓
          </Link>
        </div>
      </div>

      {/* Thin Marquee Line at bottom instead of floating stats strip */}
      <div className="hero__marquee hero__anim hero__anim--5" aria-hidden="true">
        <div className="hero__marquee-inner">
          {/* Duplicate content to create seamless loop */}
          <span>Кам'янець-Подільський &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; Старе місто &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; 9.6 на Booking &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; 712 відгуків &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; Бездоганний сервіс &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; Розташування 9.9 &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; Авторський інтер'єр &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; 10 унікальних номерів &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; </span>
          <span>Кам'янець-Подільський &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; Старе місто &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; 9.6 на Booking &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; 712 відгуків &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; Бездоганний сервіс &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; Розташування 9.9 &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; Авторський інтер'єр &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; 10 унікальних номерів &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; </span>
          <span>Кам'янець-Подільський &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; Старе місто &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; 9.6 на Booking &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; 712 відгуків &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; Бездоганний сервіс &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; Розташування 9.9 &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; Авторський інтер'єр &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; 10 унікальних номерів &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; </span>
          <span>Кам'янець-Подільський &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; Старе місто &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; 9.6 на Booking &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; 712 відгуків &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; Бездоганний сервіс &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; Розташування 9.9 &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; Авторський інтер'єр &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; 10 унікальних номерів &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp; </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
