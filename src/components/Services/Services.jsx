import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="section experience-section">
      <div className="container">
        <div className="experience-layout">
          
          {/* Main Large Block (Dominant) */}
          <div className="exp-block exp-main" data-animate="fade-in">
            <figure className="exp-figure">
              <img 
                src="/rooms/5/1_main.webp" 
                alt="Просторий та світлий номер" 
                loading="lazy" 
              />
            </figure>
            <div className="exp-content">
              <h3 className="exp-title">Тихі ранки. М'яке світло.<br/>Абсолютний комфорт.</h3>
              <p className="exp-text">Бездоганність у кожній деталі вашого перебування.</p>
            </div>
          </div>

          {/* Secondary Block */}
          <div className="exp-block exp-secondary" data-animate="fade-in">
            <figure className="exp-figure">
              <img 
                src="/rooms/1/2.webp" 
                alt="Куточок для відпочинку" 
                loading="lazy" 
              />
            </figure>
            <div className="exp-content">
              <h4 className="exp-title-sm">Тиша та приватність</h4>
              <p className="exp-text-sm">Ваш особистий просторий куточок для глибокого відновлення.</p>
            </div>
          </div>

          {/* Optional Third Block */}
          <div className="exp-block exp-tertiary" data-animate="fade-in">
            <div className="exp-content">
              <h4 className="exp-title-sm">Атмосфера міста</h4>
              <p className="exp-text-sm">
                Відчуйте подих історії, споглядаючи віковічну архітектуру прямо з вікна свого номера.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
