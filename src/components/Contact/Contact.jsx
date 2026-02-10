import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    message: ''
  });

  const [showAlert, setShowAlert] = useState(false);

  // Обробка зміни полів форми
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Обробка відправки форми
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // ТУТ ВИ МОЖЕТЕ ДОДАТИ ЛОГІКУ ВІДПРАВКИ ФОРМИ
    // Наприклад, відправка на сервер або email
    
    console.log('Дані форми:', formData);
    
    // Показати повідомлення про успішну відправку
    setShowAlert(true);
    
    // Очистити форму
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: '1',
      message: ''
    });
    
    // Сховати повідомлення через 5 секунд
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section contact-section">
      <Container>
        {/* Заголовок секції */}
        <h2 className="section-title">Бронювання номера</h2>
        <p className="section-subtitle">
          Заповніть форму, і ми зв'яжемося з вами найближчим часом
        </p>
        
        <Row className="justify-content-center">
          <Col lg={8}>
            {/* Повідомлення про успішну відправку */}
            {showAlert && (
              <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                <Alert.Heading>Дякуємо за запит!</Alert.Heading>
                <p>
                  Ваш запит на бронювання успішно отримано. Наш менеджер зв'яжеться з вами найближчим часом.
                </p>
              </Alert>
            )}
            
            {/* Форма бронювання */}
            <div className="booking-form-container">
              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  {/* Ім'я */}
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Ім'я *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Ваше ім'я"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  
                  {/* Email */}
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  
                  {/* Телефон */}
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Телефон *</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="+380 XX XXX XX XX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  
                  {/* Кількість гостей */}
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Кількість гостей</Form.Label>
                      <Form.Select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                      >
                        <option value="1">1 гість</option>
                        <option value="2">2 гості</option>
                        <option value="3">3 гості</option>
                        <option value="4">4 гості</option>
                        <option value="5+">5+ гостей</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  
                  {/* Дата заїзду */}
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Дата заїзду *</Form.Label>
                      <Form.Control
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  
                  {/* Дата виїзду */}
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Дата виїзду *</Form.Label>
                      <Form.Control
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  
                  {/* Додаткові побажання */}
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Додаткові побажання</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        placeholder="Розкажіть про ваші побажання або особливі запити..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  
                  {/* Кнопка відправки */}
                  <Col md={12}>
                    <Button 
                      variant="primary" 
                      type="submit" 
                      size="lg" 
                      className="w-100"
                    >
                      Відправити запит на бронювання
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
