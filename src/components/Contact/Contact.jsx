import React, { useState } from 'react';
import { contactFormsBlocked, hotelConfig } from '../../config';
import './Contact.css';

const Contact = () => {
  const today = new Date().toISOString().split('T')[0];
  const [checkIn, setCheckIn] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Keep this guard even while the button is disabled so programmatic form
    // submissions cannot reach the Telegram endpoint.
    if (contactFormsBlocked) return;

    setStatus('submitting');

    const form = e.target;
    const data = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      checkIn: form.checkIn.value,
      checkOut: form.checkOut.value,
      guests: form.guests.value,
      message: form.message.value,
    };

    const message = [
      '🏨 Новий запит на бронювання — У Домінікана',
      '',
      data.name     && `👤 Ім'я: ${data.name}`,
      data.phone    && `📞 Телефон: ${data.phone}`,
      data.email    && `📧 Email: ${data.email}`,
      data.checkIn  && `📅 Заїзд: ${data.checkIn}`,
      data.checkOut && `📅 Виїзд: ${data.checkOut}`,
      data.guests   && `👥 Гостей: ${data.guests}`,
      data.message  && `💬 Побажання: ${data.message}`,
    ].filter(Boolean).join('\n');

    try {
      const res = await fetch('https://it.webart.work/api/telegram/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: 'dominicana', message }),
      });

      const result = await res.json();
      if (result === true) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        <div className="contact__header">
          <h2 className="contact__title"></h2>
          <p className="contact__subtitle">
            {contactFormsBlocked
              ? 'Бронювання тимчасово недоступне'
              : 'Заповніть форму — відповімо протягом кількох годин'}
          </p>
        </div>

        <div className="contact__body">
          {status === 'success' ? (
            <div className="contact__success" aria-live="polite">
              <div className="contact__success-check" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>Запит надіслано!</h3>
              <p>Ми отримали вашу заявку та зв'яжемося найближчим часом для підтвердження бронювання.</p>
              <button className="btn btn-primary" onClick={() => setStatus('idle')}>
                Відправити нову заявку
              </button>
            </div>
          ) : (
            <form
              className="contact__form"
              onSubmit={handleSubmit}
              aria-label="Форма бронювання номеру"
              aria-describedby={contactFormsBlocked ? 'contact-form-unavailable' : undefined}
            >

              {contactFormsBlocked && (
                <p id="contact-form-unavailable" className="contact__unavailable" role="status">
                  Бронювання тимчасово не приймає заявки. Зателефонуйте нам за номером{' '}
                  <a href={`tel:${hotelConfig.contact.phone.replace(/\s/g, '')}`}>
                    {hotelConfig.contact.phone}
                  </a>.
                </p>
              )}

              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="cf-name">Ім'я та прізвище</label>
                  <input id="cf-name" name="name" type="text" placeholder="Ваше ім'я" disabled={contactFormsBlocked} />
                </div>
                <div className="contact__field">
                  <label htmlFor="cf-phone">Телефон <span aria-hidden="true">*</span></label>
                  <input id="cf-phone" name="phone" type="tel" placeholder="+380 XX XXX XX XX" required disabled={contactFormsBlocked} />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" name="email" type="email" placeholder="your@email.com" disabled={contactFormsBlocked} />
              </div>

              <div className="contact__row contact__row--dates">
                <div className="contact__field">
                  <label htmlFor="cf-checkin">Дата заїзду</label>
                  <input
                    id="cf-checkin" name="checkIn" type="date"
                    min={today}
                    onChange={e => setCheckIn(e.target.value)}
                    disabled={contactFormsBlocked}
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="cf-checkout">Дата виїзду</label>
                  <input id="cf-checkout" name="checkOut" type="date" min={checkIn || today} disabled={contactFormsBlocked} />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="cf-guests">Кількість гостей</label>
                <select id="cf-guests" name="guests" disabled={contactFormsBlocked}>
                  {[1, 2, 3, 4].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'гість' : 'гостей'}</option>
                  ))}
                  <option value="5+">5+ гостей</option>
                </select>
              </div>

              <div className="contact__field">
                <label htmlFor="cf-message">Додаткові побажання</label>
                <textarea id="cf-message" name="message" rows={3} placeholder="Особливі побажання, час прибуття, запитання..." disabled={contactFormsBlocked} />
              </div>

              {status === 'error' && (
                <p className="contact__error" role="alert">
                  Не вдалося надіслати запит. Спробуйте ще раз або зателефонуйте нам.
                </p>
              )}

              <div className="contact__submit-row">
                <button
                  type="submit"
                  className="btn btn-primary contact__submit"
                  disabled={contactFormsBlocked || status === 'submitting'}
                >
                  {contactFormsBlocked
                    ? 'Надсилання тимчасово недоступне'
                    : status === 'submitting'
                      ? 'Надсилаємо…'
                      : 'Надіслати запит на бронювання'}
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