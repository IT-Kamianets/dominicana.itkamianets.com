import React, { useState, useEffect, useRef } from 'react';
import { rooms, hotelConfig } from '../../config';
import './Rooms.css';

const Rooms = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Перевірка ширини екрану для мобільної версії
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // На мобільному завжди показуємо всі номери в слайдері
  const displayedRooms = (showAll || isMobile) ? rooms : rooms.slice(0, 3);

  // Mobile Slider State
  const [activeDot, setActiveDot] = useState(0);
  const sliderRef = useRef(null);

  // Modal State
  const [activeRoom, setActiveRoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Touch gestures state for gallery
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage(new Event('swipe')); // next photo
    } else if (isRightSwipe) {
      prevImage(new Event('swipe')); // previous photo
    }
  };

  const openGallery = (room) => {
    setActiveRoom(room);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden'; // Надійніше блокування
  };

  const closeGallery = () => {
    setActiveRoom(null);
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  };

  const nextImage = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (activeRoom?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % activeRoom.images.length);
    }
  };

  const prevImage = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (activeRoom?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + activeRoom.images.length) % activeRoom.images.length);
    }
  };

  const setSpecificImage = (e, index) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeRoom) return;
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowRight') nextImage(e);
      if (e.key === 'ArrowLeft') prevImage(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeRoom]);

  const getCardScrollWidth = () => {
    const slider = sliderRef.current;
    if (!slider || slider.children.length === 0) return slider?.offsetWidth || 0;
    const child = slider.children[0];
    const style = window.getComputedStyle(slider);
    const gap = parseFloat(style.gap) || 0;
    return child.offsetWidth + gap;
  };

  // Handle mobile slider scroll
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const scrollPosition = slider.scrollLeft;
      const cardWidth = getCardScrollWidth();
      // Calculate which card is mostly in view
      const newActive = Math.round(scrollPosition / cardWidth);
      setActiveDot(newActive);
    };

    slider.addEventListener('scroll', handleScroll, { passive: true });
    return () => slider.removeEventListener('scroll', handleScroll);
  }, [displayedRooms]);

  const scrollToCard = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cardWidth = getCardScrollWidth();
    slider.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setActiveDot(index);
  };

  return (
    <section id="rooms" className="section rooms-section">
      <div className="container" style={{ overflow: 'hidden' }}>
        <h2 className="section-title" data-animate="fade-in">Наші номери</h2>
        <p className="section-subtitle" data-animate="fade-in">
          Оберіть ідеальний номер для вашого комфортного відпочинку
        </p>

        {/* Desktop Grid & Mobile Slider Container */}
        <div className="rooms-slider-container">
          <div className="rooms-grid" ref={sliderRef}>
            {displayedRooms.map((room) => (
              <div
                className="room-card"
                key={room.id}
                data-animate="slide-in-bottom"
              >
                <div
                  className="room-card__image-wrap"
                  onClick={() => room.images && openGallery(room)}
                >
                  <img
                    src={room.images ? room.images[0] : room.image}
                    alt={room.name}
                    className="room-card__image"
                    loading="lazy"
                  />

                  {/* Overlay with zoom icon and photo count */}
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

                  {room.rating && (
                    <span className="room-card__rating">★ {room.rating}</span>
                  )}
                </div>

                <div className="room-card__body">
                  <h3 className="room-card__title">{room.name}</h3>

                  <div className="room-card__meta">
                    {room.area && <span className="room-card__meta-item">📏 {room.area}</span>}
                    {room.guests && <span className="room-card__meta-item">👥 {room.guests} {room.guests === 1 ? 'гість' : (room.guests > 4 ? 'гостей' : 'гостя')}</span>}
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

          {/* Mobile Dots Navigation */}
          <div className="rooms-slider-dots">
            {displayedRooms.map((_, idx) => (
              <button
                key={idx}
                className={`rooms-slider-dot ${idx === activeDot ? 'active' : ''}`}
                onClick={() => scrollToCard(idx)}
                aria-label={`Перейти до номера ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Кнопка "Показати всі" ховається на мобільних пристроях */}
        {!isMobile && rooms.length > 3 && (
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

      {/* GALLERY MODAL */}
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
              <img
                src={activeRoom.images[currentImageIndex]}
                alt={`${activeRoom.name} - Фото ${currentImageIndex + 1}`}
                className="gallery-modal__main-image"
              />
              <div className="gallery-modal__counter">
                {currentImageIndex + 1} / {activeRoom.images.length}
              </div>
            </div>

            <button className="gallery-modal__nav next" onClick={nextImage}>&#10095;</button>
          </div>

          <div className="gallery-modal__thumbnails" onClick={(e) => e.stopPropagation()}>
            {activeRoom.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="Miniature"
                className={`gallery-modal__thumb ${idx === currentImageIndex ? 'active' : ''}`}
                onClick={(e) => setSpecificImage(e, idx)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Rooms;
