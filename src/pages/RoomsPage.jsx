import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Modal } from 'react-bootstrap';
import { rooms } from '../config';
import './RoomsPage.css';

const RoomsPage = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowDetails = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedRoom(null);
  };

  return (
    <section id="rooms-page" className="rooms-page-section">
      <Container>
        <div className="text-center mb-5 fade-in">
          <h1 className="section-title">Наші Номери</h1>
          <p className="section-subtitle">
            Оберіть ідеальний номер для вашого комфортного проживання в серці історичного міста
          </p>
        </div>

        <Row className="g-4">
          {rooms.map((room, index) => (
            <Col key={room.id} lg={4} md={6} sm={12} className="room-card-wrapper">
              <Card 
                className="room-card h-100 shadow-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="room-image-wrapper">
                  <Card.Img 
                    variant="top" 
                    src={room.image} 
                    alt={room.name}
                    className="room-card-image"
                  />
                  {room.view && (
                    <Badge bg="primary" className="view-badge">
                      {room.view}
                    </Badge>
                  )}
                  {room.rating && (
                    <Badge bg="warning" text="dark" className="rating-badge">
                      ★ {room.rating}
                    </Badge>
                  )}
                </div>
                
                <Card.Body className="d-flex flex-column">
                  <div className="mb-3">
                    <h3 className="room-card-title">{room.name}</h3>
                    {room.area && (
                      <p className="room-area">
                        <i className="bi bi-rulers"></i> {room.area}
                      </p>
                    )}
                  </div>
                  
                  <p className="room-description text-muted">
                    {room.description}
                  </p>

                  <div className="room-info mb-3">
                    <div className="info-item">
                      <i className="bi bi-people"></i>
                      <span>{room.guests} гостя</span>
                    </div>
                    <div className="info-item">
                      <i className="bi bi-door-open"></i>
                      <span>{room.beds}</span>
                    </div>
                  </div>

                  <div className="room-features mb-3">
                    {room.features.slice(0, 4).map((feature, idx) => (
                      <Badge key={idx} bg="light" text="dark" className="me-1 mb-1">
                        {feature}
                      </Badge>
                    ))}
                    {room.features.length > 4 && (
                      <Badge bg="light" text="dark" className="me-1 mb-1">
                        +{room.features.length - 4} більше
                      </Badge>
                    )}
                  </div>

                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="room-price">
                        <span className="price-label">від</span>
                        <span className="price-amount">{room.price} {room.currency}</span>
                        <span className="price-period">/ ніч</span>
                      </div>
                      {room.pricePerNight && (
                        <div className="price-euro text-muted">
                          {room.pricePerNight}
                        </div>
                      )}
                    </div>
                    
                    <div className="d-grid gap-2">
                      <Button 
                        variant="outline-primary"
                        onClick={() => handleShowDetails(room)}
                      >
                        Детальніше
                      </Button>
                      <Button variant="primary" href="/#contact">
                        Забронювати
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Модальне вікно з деталями номера */}
        <Modal show={showModal} onHide={handleClose} size="lg" centered>
          {selectedRoom && (
            <>
              <Modal.Header closeButton>
                <Modal.Title>{selectedRoom.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img 
                  src={selectedRoom.image} 
                  alt={selectedRoom.name}
                  className="img-fluid rounded mb-4"
                />
                
                <div className="room-details">
                  <Row className="mb-4">
                    <Col md={6}>
                      <h5 className="mb-3">Основна інформація</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <strong>Площа:</strong> {selectedRoom.area}
                        </li>
                        <li className="mb-2">
                          <strong>Кількість гостей:</strong> {selectedRoom.guests}
                        </li>
                        <li className="mb-2">
                          <strong>Спальні місця:</strong> {selectedRoom.beds}
                        </li>
                        {selectedRoom.view && (
                          <li className="mb-2">
                            <strong>Вид з вікна:</strong> {selectedRoom.view}
                          </li>
                        )}
                        {selectedRoom.rating && (
                          <li className="mb-2">
                            <strong>Оцінка:</strong> ⭐ {selectedRoom.rating}/10
                          </li>
                        )}
                      </ul>
                    </Col>
                    
                    <Col md={6}>
                      <h5 className="mb-3">Ціна</h5>
                      <div className="price-info">
                        <p className="h4 text-primary mb-2">
                          {selectedRoom.price} {selectedRoom.currency} / ніч
                        </p>
                        {selectedRoom.pricePerNight && (
                          <p className="text-muted">
                            Приблизно {selectedRoom.pricePerNight} за ніч
                          </p>
                        )}
                      </div>
                    </Col>
                  </Row>

                  <Row className="mb-4">
                    <Col md={6}>
                      <h5 className="mb-3">Зручності у номері</h5>
                      <ul className="feature-list">
                        {selectedRoom.features.map((feature, idx) => (
                          <li key={idx}>
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </Col>
                    
                    {selectedRoom.bathroom && (
                      <Col md={6}>
                        <h5 className="mb-3">Ванна кімната</h5>
                        <ul className="feature-list">
                          {selectedRoom.bathroom.map((item, idx) => (
                            <li key={idx}>
                              <i className="bi bi-check-circle-fill text-success me-2"></i>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </Col>
                    )}
                  </Row>

                  {selectedRoom.amenities && (
                    <Row className="mb-3">
                      <Col>
                        <h5 className="mb-3">Додаткові зручності</h5>
                        <div className="d-flex flex-wrap gap-2">
                          {selectedRoom.amenities.map((amenity, idx) => (
                            <Badge key={idx} bg="secondary" className="p-2">
                              {amenity}
                            </Badge>
                          ))}
                        </div>
                      </Col>
                    </Row>
                  )}

                  <div className="mt-4 p-3 bg-light rounded">
                    <p className="mb-2">
                      <strong>📍 Розташування:</strong> В самому центрі старого міста
                    </p>
                    <p className="mb-2">
                      <strong>🕐 Реєстрація заїзду:</strong> 14:00-19:00
                    </p>
                    <p className="mb-0">
                      <strong>🕐 Реєстрація виїзду:</strong> 07:00-11:00
                    </p>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Закрити
                </Button>
                <Button variant="primary" href="/#contact" onClick={handleClose}>
                  Забронювати номер
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </Container>
    </section>
  );
};

export default RoomsPage;
