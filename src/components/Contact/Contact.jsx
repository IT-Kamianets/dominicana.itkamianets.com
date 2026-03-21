import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm('YOUR_FORM_ID');
  const today = new Date().toISOString().split('T')[0];
  const [checkIn, setCheckIn] = useState('');

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        
        <div className="contact__header">
          <h2 className="contact__title">Забронювати номер</h2>
          <p className="contact__subtitle">
            Заповніть форму — відповімо протягом кількох годин
          </p>
        </div>

        <div className="contact__body">
          {state.succeeded ? (
            <div className="contact__success" aria-live="polite">
              <div className="contact__success-check" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>Запит надіслано!</h3>
              <p>Ми отримали вашу заявку та зв'яжемося найближчим часом для підтвердження бронювання.</p>
              <button className="btn btn-primary" onClick={() => window.location.reload()}>
                Відправити нову заявку
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} aria-label="Форма бронювання номеру">
              
              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="cf-name">Ім'я та прізвище <span aria-hidden="true">*</span></label>
                  <input id="cf-name" name="name" type="text" placeholder="Ваше ім'я" required />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div className="contact__field">
                  <label htmlFor="cf-phone">Телефон <span aria-hidden="true">*</span></label>
                  <input id="cf-phone" name="phone" type="tel" placeholder="+380 XX XXX XX XX" required />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="cf-email">Email <span aria-hidden="true">*</span></label>
                <input id="cf-email" name="email" type="email" placeholder="your@email.com" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="contact__row contact__row--dates">
                <div className="contact__field">
                  <label htmlFor="cf-checkin">Дата заїзду <span aria-hidden="true">*</span></label>
                  <input 
                    id="cf-checkin" name="checkIn" type="date" 
                    min={today} required 
                    onChange={e => setCheckIn(e.target.value)}
                  />
                  <ValidationError prefix="Check-in" field="checkIn" errors={state.errors} />
                </div>
                <div className="contact__field">
                  <label htmlFor="cf-checkout">Дата виїзду <span aria-hidden="true">*</span></label>
                  <input id="cf-checkout" name="checkOut" type="date" min={checkIn || today} required />
                  <ValidationError prefix="Check-out" field="checkOut" errors={state.errors} />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="cf-guests">Кількість гостей</label>
                <select id="cf-guests" name="guests">
                  {[1, 2, 3, 4].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'гість' : 'гостей'}</option>
                  ))}
                  <option value="5+">5+ гостей</option>
                </select>
                <ValidationError prefix="Guests" field="guests" errors={state.errors} />
              </div>

              <div className="contact__field">
                <label htmlFor="cf-message">Додаткові побажання</label>
                <textarea id="cf-message" name="message" rows={3} placeholder="Особливі побажання, час прибуття, запитання..." />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <div className="contact__submit-row">
                <button type="submit" className="btn btn-primary contact__submit" disabled={state.submitting}>
                  {state.submitting ? 'Надсилаємо…' : 'Надіслати запит на бронювання'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
