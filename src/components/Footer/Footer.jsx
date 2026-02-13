import React from 'react';
import { hotelConfig } from '../../config';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <h5 className="footer__heading">{hotelConfig.hotelName}</h5>
            <p className="footer__text">{hotelConfig.tagline}</p>
          </div>

          <div className="footer__col">
            <h5 className="footer__heading">Навігація</h5>
            <ul className="footer__links">
              <li><a href="#home">Головна</a></li>
              <li><a href="#about">Про готель</a></li>
              <li><a href="#rooms">Номери</a></li>
              <li><a href="#services">Послуги</a></li>
              <li><a href="#contact">Контакти</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h5 className="footer__heading">Контакти</h5>
            <ul className="footer__contacts">
              <li>{hotelConfig.contact.address}</li>
              <li>
                <a href={'tel:' + hotelConfig.contact.phone}>
                  {hotelConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={'mailto:' + hotelConfig.contact.email}>
                  {hotelConfig.contact.email}
                </a>
              </li>
            </ul>
            <div className="footer__social">
              <a href={hotelConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
              <a href={hotelConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} {hotelConfig.hotelName}. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
