import React, { useState } from 'react';
import { rooms, hotelConfig } from '../../config';
import './Rooms.css';

const Rooms = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedRooms = showAll ? rooms : rooms.slice(0, 3);

  return (
    <section id="rooms" className="section rooms-section">
      <div className="container">
        <h2 className="section-title" data-animate="fade-in">Наші номери</h2>
        <p className="section-subtitle" data-animate="fade-in">
          Оберіть ідеальний номер для вашого комфортного відпочинку
        </p>

        <div className="rooms-grid">
          {displayedRooms.map((room) => (
            <div
              className="room-card"
              key={room.id}
              data-animate="slide-in-bottom"
              style={{ transitionDelay: `${displayedRooms.indexOf(room) * 100}ms` }}
            >
              <div className="room-card__image-wrap">
                <img
                  src={room.image}
                  alt={room.name}
                  className="room-card__image"
                  loading="lazy"
                />
                {room.rating && (
                  <span className="room-card__rating">★ {room.rating}</span>
                )}
              </div>

              <div className="room-card__body">
                <h3 className="room-card__title">{room.name}</h3>

                <div className="room-card__meta">
                  {room.area && <span className="room-card__meta-item">📏 {room.area}</span>}
                  {room.guests && <span className="room-card__meta-item">👥 {room.guests} гостя</span>}
                </div>

                <p className="room-card__desc">{room.description}</p>

                <div className="room-card__features">
                  {room.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="room-card__tag">{feature}</span>
                  ))}
                  {room.features.length > 3 && (
                    <span className="room-card__tag room-card__tag--more">
                      +{room.features.length - 3}
                    </span>
                  )}
                </div>

                <div className="room-card__footer">
                  <div className="room-card__price-wrap">
                    <div className="room-card__price">
                      <span className="room-card__price-from">від</span>
                      <span className="room-card__price-amount">{room.price} {room.currency}</span>
                      <span className="room-card__price-period">/ ніч</span>
                    </div>
                    {room.pricePerNight && (
                      <span className="room-card__price-euro">{room.pricePerNight}</span>
                    )}
                  </div>
                  <a
                    href={hotelConfig.social.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Замовити
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {rooms.length > 3 && (
          <div className="rooms-toggle">
            {!showAll ? (
              <button className="btn btn-outline btn-lg" onClick={() => setShowAll(true)}>
                Показати всі номери ({rooms.length})
              </button>
            ) : (
              <button
                className="btn btn-outline"
                onClick={() => {
                  setShowAll(false);
                  document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Згорнути
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Rooms;
