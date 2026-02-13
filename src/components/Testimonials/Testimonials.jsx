import React from 'react';
import './Testimonials.css';

const reviews = [
  {
    id: 1,
    name: 'Олена К.',
    date: 'Листопад 2025',
    rating: 10,
    text: 'Чудовий готель у самому серці старого міста! Номер був дуже чистим і затишним, з балкону відкривається неймовірний вид на фортецю. Персонал дуже привітний.',
    source: 'Booking.com',
  },
  {
    id: 2,
    name: 'Андрій М.',
    date: 'Жовтень 2025',
    rating: 9,
    text: 'Відмінне розташування — все в пішій доступності. Сніданок у ресторані дуже смачний. Обов\'язково повернемося!',
    source: 'Booking.com',
  },
  {
    id: 3,
    name: 'Марія Т.',
    date: 'Вересень 2025',
    rating: 10,
    text: 'Один з найкращих готелів де ми зупинялися. Атмосфера, чистота, сервіс — все на найвищому рівні. Окреме спасибі за генератор під час блекаутів!',
    source: 'Google',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <h2 className="section-title" data-animate="fade-in">Відгуки гостей</h2>
        <p className="section-subtitle" data-animate="fade-in">
          Що кажуть наші гості про перебування у готелі
        </p>

        {/* Загальний рейтинг */}
        <div className="testimonials-rating" data-animate="scale-up">
          <span className="testimonials-rating__score">9.6</span>
          <div className="testimonials-rating__info">
            <span className="testimonials-rating__label">Чудово</span>
            <span className="testimonials-rating__count">712 відгуків на Booking.com</span>
          </div>
        </div>

        {/* Відгуки */}
        <div className="testimonials-grid">
          {reviews.map((review, i) => (
            <div
              className="testimonial-card"
              key={review.id}
              data-animate="slide-in-bottom"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="testimonial-card__header">
                <div className="testimonial-card__avatar">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="testimonial-card__name">{review.name}</p>
                  <p className="testimonial-card__date">{review.date}</p>
                </div>
                <span className="testimonial-card__score">{review.rating}/10</span>
              </div>
              <p className="testimonial-card__text">{review.text}</p>
              <p className="testimonial-card__source">{review.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
