import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: '', email: '', phone: '', checkIn: '', checkOut: '', guests: '1', message: '',
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title" data-animate="fade-in">Бронювання номера</h2>
        <p className="section-subtitle" data-animate="fade-in">
          Заповніть форму, і ми зв'яжемося з вами найближчим часом
        </p>

        <div className="contact-form-wrap">
          {submitted && (
            <div className="contact-alert">
              <strong>Дякуємо за запит!</strong> Наш менеджер зв'яжеться з вами найближчим часом.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Ім'я *</label>
                <input type="text" name="name" placeholder="Ваше ім'я" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label className="form-label">Email *</label>
                <input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label className="form-label">Телефон *</label>
                <input type="tel" name="phone" placeholder="+380 XX XXX XX XX" value={formData.phone} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label className="form-label">Кількість гостей</label>
                <select name="guests" value={formData.guests} onChange={handleChange}>
                  <option value="1">1 гість</option>
                  <option value="2">2 гості</option>
                  <option value="3">3 гості</option>
                  <option value="4">4 гості</option>
                  <option value="5+">5+ гостей</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Дата заїзду *</label>
                <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label className="form-label">Дата виїзду *</label>
                <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
              </div>

              <div className="form-group form-group--full">
                <label className="form-label">Додаткові побажання</label>
                <textarea name="message" rows={4} placeholder="Розкажіть про ваші побажання..." value={formData.message} onChange={handleChange}></textarea>
              </div>

              <div className="form-group form-group--full">
                <button type="submit" className="btn btn-primary btn-block btn-lg">
                  Відправити запит на бронювання
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
