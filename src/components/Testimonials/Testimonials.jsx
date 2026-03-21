import React from 'react';
import { hotelConfig } from '../../config';
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
        
        <div className="testimonials-split">
          {/* Ліва колонка: Sticky Рейтинг */}
          <div className="testimonials-split__left">
            <div className="testimonials-rating-sticky">
              <h2 className="testimonials-rating-sticky__title">Відгуки<br/>Наших Гостей</h2>
              
              <div className="testimonials-rating-new" data-animate="fade-in">
                <div className="testimonials-rating-new__left">
                  <span className="testimonials-rating-new__score">9.6</span>
                  <span className="testimonials-rating-new__platform">на Booking.com</span>
                </div>
                <div className="testimonials-rating-new__divider" />
                <div className="testimonials-rating-new__right">
                  <span className="testimonials-rating-new__count">712 відгуків</span>
                  <span className="testimonials-rating-new__avg">Середня оцінка: Чудово</span>
                </div>
              </div>

              <a 
                href={hotelConfig.social.booking} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="testimonials-booking-link"
                data-animate="fade-in"
              >
                Більше відгуків на Booking.com ↗
              </a>
            </div>
          </div>

          {/* Права колонка: Змінний список відгуків */}
          <div className="testimonials-split__right">
            <div className="testimonials-list">
              {reviews.map((review, i) => (
                <div
                  className={`testimonial-item ${i === 1 ? 'testimonial-item--alt' : ''}`}
                  key={review.id}
                  data-animate="fade-in"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {i !== 1 && <span className="testimonial-item__quote-mark">«</span>}
                  <p className="testimonial-item__text">{review.text}</p>
                  {i === 1 && <span className="testimonial-item__quote-mark">»</span>}
                  <p className="testimonial-item__author">{review.name} &middot; {review.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
