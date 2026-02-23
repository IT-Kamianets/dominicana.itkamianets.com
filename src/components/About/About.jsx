import React from 'react';
import { hotelConfig } from '../../config';
import Icon from '../Icon';
import './About.css';
import hotelImage from '../../assets/images/hotel.png';

const FACTS = [
  { icon: 'map-pin',    text: '800 м до фортеці. До Ратуші — 200 м.' },
  { icon: 'restaurant', text: 'Ресторан з українською та міжнародною кухнею.' },
  { icon: 'power',      text: 'Власний генератор — світло, тепло та вода завжди.' },
  { icon: 'parking',    text: 'Безкоштовна парковка та зарядка для електромобілів.' },
];

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about__layout">

          {/* ── Left: photo ── */}
          <div className="about__photo-col">
            <div className="about__photo-frame">
              <img
                src={hotelImage}
                alt="Готель У Домінікана, Кам'янець-Подільський"
                loading="lazy"
              />
              <div className="about__badge">
                <span className="about__badge-score">9.6</span>
                <span className="about__badge-label">Booking.com</span>
                <span className="about__badge-sub">712 відгуків</span>
              </div>
            </div>
          </div>

          {/* ── Right: content ── */}
          <div className="about__content">

            <span className="section-eyebrow">Про готель</span>

            <h2 className="about__title">
              Зупинка в<br />
              <em>серці міста</em>
            </h2>

            <p className="about__desc">
              {hotelConfig.description}
            </p>

            <ul className="about__facts">
              {FACTS.map((f, i) => (
                <li key={i} className="about__fact">
                  <span className="about__fact-icon">
                    <Icon name={f.icon} size={16} />
                  </span>
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>

            <a href="#rooms" className="btn btn-primary about__cta">
              Переглянути номери
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
