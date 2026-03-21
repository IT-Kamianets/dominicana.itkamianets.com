import React, { useState, useEffect, useRef } from 'react';
import { rooms } from '../config';
import '../components/Rooms/Rooms.css';
import './AllRoomsPage.css';

const AllRoomsPage = () => {
  const [activeRoom, setActiveRoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => { setTouchEnd(null); setTouchStart(e.targetTouches[0].clientX); };
  const onTouchMove = (e) => { setTouchEnd(e.targetTouches[0].clientX); };
  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextImage(new Event('swipe'));
    else if (distance < -minSwipeDistance) prevImage(new Event('swipe'));
  };

  const openGallery = (room) => {
    setActiveRoom(room);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setActiveRoom(null);
    document.body.style.overflow = '';
  };

  const nextImage = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (activeRoom?.images) setCurrentImageIndex((p) => (p + 1) % activeRoom.images.length);
  };

  const prevImage = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (activeRoom?.images) setCurrentImageIndex((p) => (p - 1 + activeRoom.images.length) % activeRoom.images.length);
  };

  const setSpecificImage = (e, index) => { e.stopPropagation(); setCurrentImageIndex(index); };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const handleKeyDown = (e) => {
      if (!activeRoom) return;
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowRight') nextImage(e);
      if (e.key === 'ArrowLeft') prevImage(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeRoom]);

  const renderRoomCard = (room) => (
    <div className="room-card" key={room.id}>
      <div className="room-card__image-wrap" onClick={() => room.images && openGallery(room)}>
        <img
          src={room.images ? room.images[0] : room.image}
          alt={room.name}
          className="room-card__image"
          loading="lazy"
        />
        {room.images && room.images.length > 0 && (
          <div className="room-card__image-overlay">
            <div className="room-card__zoom-hint">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
              <span>Натисніть для перегляду</span>
            </div>
            <span className="gallery-icon-pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              {room.images.length} фото
            </span>
          </div>
        )}
        {room.rating && <span className="room-card__rating">★ {room.rating}</span>}
      </div>

      <div className="room-card__body">
        <h3 className="room-card__title">{room.name}</h3>
        <div className="room-card__meta">
          {room.area && <span className="room-card__meta-item">{room.area}</span>}
          {(room.area && room.guests) && <span className="room-card__meta-sep"> &middot; </span>}
          {room.guests && <span className="room-card__meta-item">{room.guests} {room.guests === 1 ? 'гість' : (room.guests > 4 ? 'гостей' : 'гостя')}</span>}
        </div>
        <p className="room-card__desc">{room.description}</p>
        <div className="room-card__features">
          {room.features.slice(0, 3).map((feature, idx) => (
            <span key={idx} className="room-card__tag">{feature}</span>
          ))}
          {room.features.length > 3 && (
            <span className="room-card__tag room-card__tag--more">+{room.features.length - 3}</span>
          )}
        </div>
        <div className="room-card__footer">
          <div className="room-card__price-wrap">
            <div className="room-card__price">
              <span className="room-card__price-from">від</span>
              <span className="room-card__price-amount">{room.price} {room.currency}</span>
              <span className="room-card__price-period">/ ніч</span>
            </div>
          </div>
          <a href="/#contact" className="room-card__link">Забронювати &rarr;</a>
        </div>
      </div>
    </div>
  );

  return (
    <main className="all-rooms-page">
      <div className="all-rooms-page__header">
        <div className="container">
          <a href="/" className="all-rooms-page__back">← Головна</a>
          <h1 className="all-rooms-page__title">Всі номери</h1>
          <p className="all-rooms-page__subtitle">
            Оберіть ідеальний номер для вашого перебування в Кам'янці-Подільському
          </p>
        </div>
      </div>

      <div className="container">
        <div className="all-rooms-page__grid">
          {rooms.map(renderRoomCard)}
        </div>
      </div>

      {/* Gallery Modal */}
      {activeRoom && activeRoom.images && (
        <div className="gallery-modal" onClick={closeGallery}>
          <button className="gallery-modal__close" onClick={closeGallery}>&times;</button>
          <div
            className="gallery-modal__content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEndHandler}
          >
            <button className="gallery-modal__nav prev" onClick={prevImage}>&#10094;</button>
            <div className="gallery-modal__main-image-container">
              <img src={activeRoom.images[currentImageIndex]} alt={activeRoom.name} className="gallery-modal__main-image" />
              <div className="gallery-modal__counter">{currentImageIndex + 1} / {activeRoom.images.length}</div>
            </div>
            <button className="gallery-modal__nav next" onClick={nextImage}>&#10095;</button>
          </div>
          <div className="gallery-modal__thumbnails" onClick={(e) => e.stopPropagation()}>
            {activeRoom.images.map((img, idx) => (
              <img key={idx} src={img} alt="Мініатюра" className={`gallery-modal__thumb ${idx === currentImageIndex ? 'active' : ''}`} onClick={(e) => setSpecificImage(e, idx)} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default AllRoomsPage;
