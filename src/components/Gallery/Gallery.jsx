import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { galleryImages } from '../../config';
import './Gallery.css';

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Відкрити модальне вікно з великим зображенням
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  // Закрити модальне вікно
  const handleClose = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="section gallery-section">
      <Container>
        {/* Заголовок секції */}
        <h2 className="section-title">Галерея</h2>
        <p className="section-subtitle">
          Погляньте на наш готель та атмосферу, яку ми створюємо
        </p>
        
        {/* Сітка зображень */}
        <Row className="g-3">
          {galleryImages.map((image) => (
            <Col md={6} lg={4} key={image.id}>
              <div 
                className="gallery-item"
                onClick={() => handleImageClick(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <span className="gallery-zoom-icon">🔍</span>
                    <p className="gallery-overlay-text">{image.alt}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Модальне вікно для перегляду великого зображення */}
      <Modal 
        show={showModal} 
        onHide={handleClose} 
        centered 
        size="lg"
        className="gallery-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedImage?.alt}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          {selectedImage && (
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-100"
            />
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Gallery;
