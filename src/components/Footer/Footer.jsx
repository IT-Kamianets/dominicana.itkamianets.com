import React from 'react';
import { Link } from 'react-router-dom';
import { hotelConfig } from '../../config';
import Icon from '../Icon';
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
              <li><Link to="/#home">Головна</Link></li>
              <li><Link to="/#about">Про готель</Link></li>
              <li><Link to="/#rooms">Вітрина</Link></li>
              <li><Link to="/rooms">Всі номери</Link></li>
              <li><Link to="/#services">Послуги</Link></li>
              <li><Link to="/#location">Розташування</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h5 className="footer__heading">Контакти</h5>
            <ul className="footer__contacts">
              <li>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${hotelConfig.location.latitude},${hotelConfig.location.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {hotelConfig.contact.address}
                </a>
              </li>
              <li>
                <a href={'tel:' + hotelConfig.contact.phone}>
                  {hotelConfig.contact.phone}
                </a>
              </li>
            </ul>
            <div className="footer__social">
              <a href="#contact" aria-label="Бронювання" className="footer__social-link booking-btn-link">
                Забронювати
              </a>
              <a href={hotelConfig.social.booking} target="_blank" rel="noopener noreferrer" aria-label="Booking.com" className="footer__social-link booking-dot-link">
                Booking.com
              </a>
              <a href={hotelConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link instagram-link">
                <Icon name="instagram" size={20} />
              </a>
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
