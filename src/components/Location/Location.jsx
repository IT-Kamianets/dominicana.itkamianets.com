import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { hotelConfig } from '../../config';
import Icon from '../Icon';
import './Location.css';

const Location = () => {
  return (
    <section id="location" className="section location-section bg-light">
      <Container>
        {/* Заголовок секції */}
        <h2 className="section-title">Розташування</h2>
        <p className="section-subtitle">
          Ми знаходимося в самому серці міста
        </p>
        
        <Row className="g-4">
          {/* Адреса та інформація */}
          <Col lg={4}>
            <div className="location-info">
              <div className="location-info-item mb-4">
                <div className="location-icon-wrapper mb-2">
                  <Icon name="map-pin" size={24} />
                  <h4 className="h5 mb-0 ms-2">Адреса</h4>
                </div>
                <p className="text-muted mb-0">
                  {hotelConfig.contact.address}
                </p>
              </div>
              
              <div className="location-info-item mb-4">
                <div className="location-icon-wrapper mb-2">
                  <Icon name="phone" size={24} />
                  <h4 className="h5 mb-0 ms-2">Телефон</h4>
                </div>
                <p className="text-muted mb-0">
                  <a href={`tel:${hotelConfig.contact.phone}`} className="text-decoration-none">
                    {hotelConfig.contact.phone}
                  </a>
                </p>
              </div>
              
              <div className="location-info-item mb-4">
                <div className="location-icon-wrapper mb-2">
                  <Icon name="mail" size={24} />
                  <h4 className="h5 mb-0 ms-2">Email</h4>
                </div>
                <p className="text-muted mb-0">
                  <a href={`mailto:${hotelConfig.contact.email}`} className="text-decoration-none">
                    {hotelConfig.contact.email}
                  </a>
                </p>
              </div>
              
              <div className="location-info-item">
                <div className="location-icon-wrapper mb-2">
                  <Icon name="clock" size={24} />
                  <h4 className="h5 mb-0 ms-2">Режим роботи</h4>
                </div>
                <p className="text-muted mb-0">
                  {hotelConfig.contact.workingHours}
                </p>
              </div>
            </div>
          </Col>
          
          {/* Google Maps */}
          <Col lg={8}>
            <div className="map-container">
              {/* ЗАМІНІТЬ src на ваше посилання з Google Maps */}
              <iframe
                src={hotelConfig.location.mapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Location"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Location;
