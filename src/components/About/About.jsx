import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { hotelConfig, hotelFeatures } from '../../config';
import Icon from '../Icon';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section bg-light">
      <Container>
        {/* Заголовок секції */}
        <h2 className="section-title">Про наш готель</h2>
        <p className="section-subtitle">
          Відкрийте для себе ідеальне поєднання комфорту, розкоші та гостинності у серці історичного міста
        </p>
        
        {/* Основний опис */}
        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            <div className="about-content">
              <p className="lead text-center mb-4">
                {hotelConfig.description}
              </p>
              
              <Row className="mt-5">
                <Col md={6} className="mb-4">
                  <div className="info-box">
                    <h4 className="info-title">
                      <Icon name="map-pin" size={24} className="me-2 text-primary" />
                      Розташування
                    </h4>
                    <p className="text-muted">
                      Готель розташований на відстані 800 м від Кам'янець-Подільської фортеці, 
                      у самому центрі міста. Зручне місцерозташування дозволяє з легкістю дістатися 
                      визначних пам'яток архітектури. До Ратуші всього 200 м.
                    </p>
                  </div>
                </Col>
                
                <Col md={6} className="mb-4">
                  <div className="info-box">
                    <h4 className="info-title">
                      <Icon name="briefcase" size={24} className="me-2 text-primary" />
                      Зручності
                    </h4>
                    <p className="text-muted">
                      10 добре обладнаних номерів, розрахованих на проживання до 25 гостей одночасно. 
                      Всі номери мають балкони з видом на місто, кондиціонери, плазмові телевізори 
                      та власні ванні кімнати.
                    </p>
                  </div>
                </Col>
                
                <Col md={6} className="mb-4">
                  <div className="info-box">
                    <h4 className="info-title">
                      <Icon name="restaurant" size={24} className="me-2 text-primary" />
                      Харчування
                    </h4>
                    <p className="text-muted">
                      Ресторан на території пропонує різноманітні страви української та міжнародної 
                      кухні. Гості високо оцінюють якість страв та обслуговування.
                    </p>
                  </div>
                </Col>
                
                <Col md={6} className="mb-4">
                  <div className="info-box">
                    <h4 className="info-title">
                      <Icon name="power" size={24} className="me-2 text-primary" />
                      Безпека
                    </h4>
                    <p className="text-muted">
                      На території готелю встановлено генератор, що забезпечує безперебійне 
                      електропостачання, опалення та водопостачання навіть під час відключень.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        
        {/* Переваги готелю */}
        <h3 className="text-center mb-4 mt-5">Чому обирають нас</h3>
        <Row className="g-4">
          {hotelFeatures.map((feature) => (
            <Col md={6} lg={3} key={feature.id}>
              <Card className="h-100 border-0 shadow-sm feature-card text-center">
                <Card.Body>
                  <div className="feature-icon mb-3">
                    <Icon name={feature.icon} size={40} />
                  </div>
                  <Card.Title className="h5">
                    {feature.title}
                  </Card.Title>
                  <Card.Text className="text-muted">
                    {feature.description}
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

export default About;
