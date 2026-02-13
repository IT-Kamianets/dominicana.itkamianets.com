import React from 'react';
import { hotelConfig } from '../../config';
import Icon from '../Icon';
import './Location.css';

const Location = () => {
  return (
    <section id="location" className="section location-section">
      <div className="container">
        <h2 className="section-title" data-animate="fade-in">Розташування</h2>
        <p className="section-subtitle" data-animate="fade-in">
          Ми знаходимося в самому серці міста
        </p>

        <div className="location-grid">
          <div className="location-info">
            {[
              { icon: 'map-pin', label: 'Адреса', value: hotelConfig.contact.address },
              { icon: 'phone', label: 'Телефон', value: hotelConfig.contact.phone, href: 'tel:' + hotelConfig.contact.phone },
              { icon: 'mail', label: 'Email', value: hotelConfig.contact.email, href: 'mailto:' + hotelConfig.contact.email },
              { icon: 'clock', label: 'Режим роботи', value: hotelConfig.contact.workingHours },
            ].map((item, i) => (
              <div className="location-info__item" key={i}>
                <div className="location-info__icon">
                  <Icon name={item.icon} size={20} />
                </div>
                <div>
                  <h4 className="location-info__label">{item.label}</h4>
                  {item.href ? (
                    <a href={item.href} className="location-info__link">{item.value}</a>
                  ) : (
                    <p className="location-info__value">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="location-map">
            <iframe
              src={hotelConfig.location.mapEmbedUrl}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Розташування готелю"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
