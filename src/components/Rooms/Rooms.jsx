import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { rooms } from '../../config';
import './Rooms.css';

const Rooms = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedRooms = showAll ? rooms : rooms.slice(0, 3);

  return (
    <section id="rooms" className="section rooms-section">
      <Container>
        {/* Заголовок секції */}
        <h2 className="section-title">Наші номери</h2>
        <p className="section-subtitle">
          Оберіть ідеальний номер для вашого комфортного відпочинку
        </p>
        
        {/* Картки номерів */}
        <Row className="g-4 mb-4">
          {displayedRooms.map((room, index) => (
            <Col md={6} lg={4} key={room.id} className="room-col">
              <Card className="h-100 room-card border-0 shadow">
                {/* Зображення номера */}
                <div className="room-image-wrapper">
                  <Card.Img 
                    variant="top" 
                    src={room.image} 
                    alt={room.name}
                    className="room-image"
                  />
                  {room.pricePerNight && (
                    <div className="price-badge">
                      {room.pricePerNight}
                    </div>
                  )}
                </div>
                
                {/* Інформація про номер */}
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h5 mb-2">
                    {room.name}
                  </Card.Title>
                  
                  <p className="room-price mb-3">
                    від <span className="price-amount">{room.price} {room.currency}</span>/ніч
                  </p>
                  
                  <Card.Text className="text-muted mb-3 room-description">
                    {room.description}
                  </Card.Text>
                  
                  {/* Основна інформація */}
                  {(room.area || room.guests) && (
                    <div className="room-meta mb-3">
                      {room.area && (
                        <span className="meta-item">
                          <i className="bi bi-rulers"></i> {room.area}
                        </span>
                      )}
                      {room.guests && (
                        <span className="meta-item">
                          <i className="bi bi-people"></i> {room.guests} гостя
                        </span>
                      )}
                    </div>
                  )}
                  
                  {/* Особливості номера */}
                  <div className="room-features mb-3">
                    {room.features.slice(0, 3).map((feature, idx) => (
                      <Badge 
                        key={idx} 
                        bg="light" 
                        text="dark" 
                        className="me-2 mb-2"
                      >
                        {feature}
                      </Badge>
                    ))}
                    {room.features.length > 3 && (
                      <Badge bg="primary" className="me-2 mb-2">
                        +{room.features.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <Button variant="outline-primary" className="mt-auto w-100">
                    Детальніше
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        {/* Кнопка "Показати більше" */}
        {!showAll && rooms.length > 3 && (
          <div className="text-center">
            <Button 
              variant="primary" 
              size="lg"
              className="show-more-btn"
              onClick={() => setShowAll(true)}
            >
              <span>Показати всі номери ({rooms.length})</span>
              <i className="bi bi-arrow-down ms-2"></i>
            </Button>
          </div>
        )}
        
        {/* Кнопка "Згорнути" */}
        {showAll && (
          <div className="text-center">
            <Button 
              variant="outline-primary" 
              size="lg"
              className="show-less-btn"
              onClick={() => {
                setShowAll(false);
                document.getElementById('rooms').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Згорнути</span>
              <i className="bi bi-arrow-up ms-2"></i>
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Rooms;
