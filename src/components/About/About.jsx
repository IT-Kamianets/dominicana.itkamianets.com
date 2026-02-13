import React from 'react';
import { hotelConfig, hotelFeatures } from '../../config';
import Icon from '../Icon';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title" data-animate="fade-in">Про наш готель</h2>
        <p className="section-subtitle" data-animate="fade-in">
          Відкрийте для себе ідеальне поєднання комфорту та гостинності у серці історичного міста
        </p>

        {/* Опис з фото */}
        <div className="about-intro" data-animate="fade-in">
          <div className="about-intro__photo">
            <img
              src="https://udominicanakamianetspodilskyi.ua-hotel.com/data/Photos/OriginalPhoto/14989/1498989/1498989439/photo-u-dominicana-kamianets-podilskyi-6.JPEG"
              alt="Готель У Домінікана"
              loading="lazy"
            />
          </div>
          <div className="about-intro__text">
            <p className="about-lead">
              {hotelConfig.description}
            </p>
            <div className="about-highlights">
              <div className="about-highlight">
                <span className="about-highlight__number">10</span>
                <span className="about-highlight__label">номерів</span>
              </div>
              <div className="about-highlight">
                <span className="about-highlight__number">9.6</span>
                <span className="about-highlight__label">рейтинг</span>
              </div>
              <div className="about-highlight">
                <span className="about-highlight__number">712</span>
                <span className="about-highlight__label">відгуків</span>
              </div>
            </div>
          </div>
        </div>

        {/* Інфо блоки */}
        <div className="about-info-grid">
          {[
            { icon: 'map-pin', title: 'Розташування', text: "На відстані 800 м від фортеці, у самому центрі міста. До Ратуші всього 200 м." },
            { icon: 'briefcase', title: 'Зручності', text: 'Балкони з видом на місто, кондиціонери, плазмові телевізори та власні ванні кімнати.' },
            { icon: 'restaurant', title: 'Харчування', text: 'Ресторан з українською та міжнародною кухнею. Високі оцінки від гостей.' },
            { icon: 'power', title: 'Безпека', text: 'Власний генератор — безперебійне електропостачання, опалення та вода.' },
          ].map((item, i) => (
            <div
              className="about-info-box"
              key={i}
              data-animate="slide-in-bottom"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="about-info-icon">
                <Icon name={item.icon} size={22} />
              </div>
              <div>
                <h4 className="about-info-title">{item.title}</h4>
                <p className="about-info-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Переваги */}
        <h3 className="about-features-title" data-animate="fade-in">Чому обирають нас</h3>
        <div className="about-features-grid">
          {hotelFeatures.map((feature, i) => (
            <div
              className="about-feature-card"
              key={feature.id}
              data-animate="scale-up"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="about-feature-icon">
                <Icon name={feature.icon} size={32} />
              </div>
              <h5 className="about-feature-name">{feature.title}</h5>
              <p className="about-feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
