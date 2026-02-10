import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { hotelConfig } from '../../config';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-white">
      <Container>
        <Row className="py-5">
          {/* Про готель */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="mb-3">{hotelConfig.hotelName}</h5>
            <p className="footer-text">
              {hotelConfig.tagline}
            </p>
            <p className="footer-text small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Vivamus lacinia odio vitae vestibulum.
            </p>
          </Col>
          
          {/* Швидкі посилання */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="mb-3">Швидкі посилання</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="footer-link">
                  Головна
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="footer-link">
                  Про готель
                </a>
              </li>
              <li className="mb-2">
                <a href="#rooms" className="footer-link">
                  Номери
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="footer-link">
                  Послуги
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="footer-link">
                  Контакти
                </a>
              </li>
            </ul>
          </Col>
          
          {/* Контакти та соцмережі */}
          <Col md={4}>
            <h5 className="mb-3">Контакти</h5>
            <ul className="list-unstyled footer-text">
              <li className="mb-2">
                📍 {hotelConfig.contact.address}
              </li>
              <li className="mb-2">
                📞 <a href={`tel:${hotelConfig.contact.phone}`} className="footer-link">
                  {hotelConfig.contact.phone}
                </a>
              </li>
              <li className="mb-3">
                ✉️ <a href={`mailto:${hotelConfig.contact.email}`} className="footer-link">
                  {hotelConfig.contact.email}
                </a>
              </li>
            </ul>
            
            {/* Соціальні мережі */}
            <div className="social-links">
              <a 
                href={hotelConfig.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                📘
              </a>
              <a 
                href={hotelConfig.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                📷
              </a>
              <a 
                href={hotelConfig.social.tripadvisor} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="TripAdvisor"
              >
                🦉
              </a>
            </div>
          </Col>
        </Row>
        
        {/* Copyright */}
        <div className="footer-bottom py-3 border-top border-secondary">
          <Row>
            <Col className="text-center footer-text small">
              © {currentYear} {hotelConfig.hotelName}. Всі права захищені.
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
