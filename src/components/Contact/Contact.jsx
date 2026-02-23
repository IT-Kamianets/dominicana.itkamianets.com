// Contact.jsx — тільки форма бронювання
//
// ПІДКЛЮЧЕННЯ FORMSPREE:
// 1. formspree.io → "New Form" → отримай ID вигляду "xpwzrjkl"
// 2. npm install @formspree/react
// 3. Розкоментуй useForm нижче і замінь YOUR_FORM_ID
// import { useForm } from '@formspree/react';

import React, { useState } from 'react';
import './Contact.css';

const INITIAL = {
  name: '', email: '', phone: '',
  checkIn: '', checkOut: '',
  guests: '2', message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL);
  const [status, setStatus] = useState('idle');

  const handleChange = (e) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // TODO: замінити на useForm з @formspree/react
    await new Promise(r => setTimeout(r, 1100));
    setStatus('success');
    setFormData(INITIAL);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        <div className="contact__header">
          <span className="section-eyebrow">Онлайн-бронювання</span>
          <h2 className="section-title">Забронювати номер</h2>
          <p className="section-subtitle">
            Заповніть форму — відповімо протягом кількох годин
          </p>
        </div>

        <div className="contact__body">
          {status === 'success' ? (
            <div className="contact__success" aria-live="polite">
              <div className="contact__success-check" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>Запит надіслано!</h3>
              <p>Ми отримали вашу заявку та зв'яжемося найближчим часом для підтвердження бронювання.</p>
              <button className="btn btn-primary" onClick={() => setStatus('idle')}>
                Надіслати ще один запит
              </button>
            </div>
          ) : (
            <form
              className="contact__form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Форма бронювання номеру"
            >
              {/* name + phone */}
              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="cf-name">
                    Ім'я та прізвище <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cf-name" name="name" type="text"
                    placeholder="Ваше ім'я"
                    value={formData.name} onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="cf-phone">
                    Телефон <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cf-phone" name="phone" type="tel"
                    placeholder="+380 XX XXX XX XX"
                    value={formData.phone} onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* email */}
              <div className="contact__field">
                <label htmlFor="cf-email">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input
                  id="cf-email" name="email" type="email"
                  placeholder="your@email.com"
                  value={formData.email} onChange={handleChange}
                  required
                />
              </div>

              {/* dates side by side */}
              <div className="contact__row contact__row--dates">
                <div className="contact__field">
                  <label htmlFor="cf-checkin">
                    Дата заїзду <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cf-checkin" name="checkIn" type="date"
                    value={formData.checkIn} onChange={handleChange}
                    min={today}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="cf-checkout">
                    Дата виїзду <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cf-checkout" name="checkOut" type="date"
                    value={formData.checkOut} onChange={handleChange}
                    min={formData.checkIn || today}
                    required
                  />
                </div>
              </div>

              {/* guests — окремий рядок, не тиснемо в 3-col */}
              <div className="contact__field">
                <label htmlFor="cf-guests">Кількість гостей</label>
                <select
                  id="cf-guests" name="guests"
                  value={formData.guests} onChange={handleChange}
                >
                  {[1, 2, 3, 4].map(n => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'гість' : 'гостей'}
                    </option>
                  ))}
                  <option value="5+">5+ гостей</option>
                </select>
              </div>

              {/* message */}
              <div className="contact__field">
                <label htmlFor="cf-message">Додаткові побажання</label>
                <textarea
                  id="cf-message" name="message" rows={3}
                  placeholder="Особливі побажання, час прибуття, запитання..."
                  value={formData.message} onChange={handleChange}
                />
              </div>

              <div className="contact__submit-row">
                <button
                  type="submit"
                  className="btn btn-primary contact__submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending'
                    ? 'Надсилаємо…'
                    : 'Надіслати запит на бронювання'}
                </button>
                <p className="contact__note">
                  * Обов'язкові поля. Відповідаємо протягом 4–8 год.
                  Бронювання підтверджується після передоплати.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
