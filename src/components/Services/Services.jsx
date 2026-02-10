import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { services } from '../../config';
import Icon from '../Icon';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="section services-section bg-light">
      <Container>
        {/* Заголовок секції */}
        <h2 className="section-title">Наші послуги</h2>
        <p className="section-subtitle">
          Все необхідне для вашого комфортного відпочинку
        </p>
        
        {/* Картки послуг */}
        <Row className="g-4">
          {services.map((service) => (
            <Col sm={6} md={4} lg={3} key={service.id}>
              <Card className="h-100 service-card border-0 shadow-sm text-center">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  {/* Іконка послуги */}
                  <div className="service-icon mb-3">
                    <Icon name={service.icon} size={40} />
                  </div>
                  
                  {/* Назва послуги */}
                  <Card.Title className="h5 mb-2">
                    {service.title}
                  </Card.Title>
                  
                  {/* Опис послуги */}
                  <Card.Text className="text-muted small">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
