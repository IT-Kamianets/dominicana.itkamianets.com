import React from 'react';
import { hotelConfig } from '../../config';
import './Location.css';

const Location = () => {
  return (
    <section id="location" className="section location-section">
      <div className="container">

        <div className="location__header">
          <h2 className="section-title">Розташування</h2>
        </div>

        <div className="location__grid">

          {/* ── Info + contacts ── */}
          <div className="location__info">

            {/* Address block */}
            <div className="location__contact-item">
              <p className="location__contact-label">Адреса</p>
              <a
                href={hotelConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="location__contact-value location__address-link"
              >
                {hotelConfig.contact.address}
              </a>
            </div>

            {/* Phone */}
            <div className="location__contact-item">
              <p className="location__contact-label">Телефон</p>
              <a
                href={`tel:${hotelConfig.contact.phone.replace(/\s/g, '')}`}
                className="location__contact-link"
              >
                {hotelConfig.contact.phone}
              </a>
            </div>

            {/* Hours */}
            <div className="location__contact-item">
              <p className="location__contact-label">Реєстрація</p>
              <p className="location__contact-value">Заїзд: 14:00 – 19:00</p>
              <p className="location__contact-value">Виїзд: 07:00 – 11:00</p>
            </div>

            {/* Divider */}
            <div className="location__divider" />

            {/* Nearby landmarks */}
            <div className="location__landmarks">
              <p className="location__landmarks-title">Що поряд</p>
              <ul>
                <li>
                  <span>— Кам'янець-Подільська фортеця · 800 м</span>
                </li>
                <li>
                  <span>— Ратуша · 200 м</span>
                </li>
                <li>
                  <span>— Домініканський монастир · 50 м</span>
                </li>
                <li>
                  <span>— Центр міста · 1 км</span>
                </li>
              </ul>
            </div>

          </div>

          {/* ── Styled map ── */}
          <div className="location__map-wrap">
            {/* Warm-tone overlay on top of iframe */}
            <div className="location__map-overlay" aria-hidden="true" />

            {/* Custom pin overlay */}
            <div className="location__map-pin" aria-hidden="true">
              <div className="location__pin-bubble">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
                <span>У Домінікана</span>
              </div>
            </div>

            <iframe
              src={hotelConfig.location.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Розташування готелю У Домінікана"
            />

            <a
              href={hotelConfig.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="location__map-external-link"
            >
              Відкрити в Google Maps ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
