import React, { useState, useEffect, useCallback, useRef } from 'react';
import { hotelConfig } from '../../config';
import './Gallery.css';

// ─── Локальні фото з assets/gallery/ ───────────────────────────
// Закидай файли з назвами 1.webp, 2.webp, ... 12.webp
// у папку src/assets/gallery/
import photo1 from '../../assets/gallery/exterior-night.webp';
import photo2 from '../../assets/gallery/bathroom.webp';
import photo3 from '../../assets/gallery/staircase-interior.webp';
import photo4 from '../../assets/gallery/exterior-sign.webp';
import photo5 from '../../assets/gallery/reception.webp';
import photo6 from '../../assets/gallery/staircase-view.webp';
import photo7 from '../../assets/gallery/balcony-view.webp';
import photo8 from '../../assets/gallery/hotel-church.webp';
import photo9 from '../../assets/gallery/restaurant.webp';
import photo10 from '../../assets/gallery/city-view.webp';
import photo11 from '../../assets/gallery/breakfast.webp';
import photo12 from '../../assets/gallery/interior-decor.webp';

const PHOTOS = [
  { src: photo1, alt: "Фасад готелю Y Dominikana вночі" },
  { src: photo2, alt: "Сучасна ванна кімната в готелі" },
  { src: photo3, alt: "Інтер'єр готелю та дерев'яні сходи" },
  { src: photo4, alt: "Історична вивіска готелю Y Dominikana" },
  { src: photo5, alt: "Зона рецепції та прийому гостей" },
  { src: photo6, alt: "Вигляд на сходи всередині готелю" },
  { src: photo7, alt: "Затишний балкон з видом на вечірнє місто" },
  { src: photo8, alt: "Вид на готель та вежу навпроти" },
  { src: photo9, alt: "Ресторан готелю з автентичним баром" },
  { src: photo10, alt: "Панорама старого міста з вікна номера" },
  { src: photo11, alt: "Смачний сніданок з авокадо та лососем" },
  { src: photo12, alt: "Деталі декору та історичний інтер'єр" },
];

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) goNext();
    if (isRightSwipe) goPrev();
  };

  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() =>
    setLightboxIndex(i => i !== null ? (i + 1) % PHOTOS.length : null),
    []);

  const goPrev = useCallback(() =>
    setLightboxIndex(i => i !== null ? (i - 1 + PHOTOS.length) % PHOTOS.length : null),
    []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handle = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.documentElement.classList.add('no-scroll');
    document.body.classList.add('no-scroll');
    window.addEventListener('keydown', handle);
    return () => {
      document.documentElement.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', handle);
    };
  }, [lightboxIndex, goNext, goPrev]);

  const scrollRef = useRef(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const getCardScrollWidth = () => {
    if (!scrollRef.current || scrollRef.current.children.length === 0) return scrollRef.current?.clientWidth || 0;
    const child = scrollRef.current.children[0];
    const style = window.getComputedStyle(scrollRef.current);
    const gap = parseFloat(style.gap) || 0;
    return child.offsetWidth + gap;
  };

  const scrollGrid = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = getCardScrollWidth();
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = getCardScrollWidth();
      const index = Math.round(scrollLeft / width);
      setActivePhotoIndex(index);
    }
  };

  const scrollTo = (index) => {
    if (scrollRef.current) {
      const width = getCardScrollWidth();
      scrollRef.current.scrollTo({ left: width * index, behavior: 'smooth' });
      setActivePhotoIndex(index);
    }
  };

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">

        <div className="gallery__header">
          <span className="section-eyebrow">Фотографії</span>
          <h2 className="section-title">Галерея</h2>
          <p className="section-subtitle">
            Номери, інтер'єр, ресторан і вид на старе місто
          </p>
        </div>

        <div className="gallery-slider-wrap">

          <div className="gallery__grid" ref={scrollRef} onScroll={handleScroll}>
            {PHOTOS.map((item, i) => (
              <button
                key={i}
                className="gallery__cell"
                onClick={() => setLightboxIndex(i)}
                aria-label={item.alt}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="gallery__img"
                />
                <div className="gallery__overlay">
                  <span className="gallery__zoom" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="1.8">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="slider-dots">
          {PHOTOS.map((_, idx) => (
            <button
              key={idx}
              className={`slider-dot ${activePhotoIndex === idx ? 'active' : ''}`}
              onClick={() => scrollTo(idx)}
              aria-label={`Go to photo ${idx + 1}`}
            />
          ))}
        </div>

        <div className="gallery__footer">
          <a
            href={hotelConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="gallery__more-link"
          >
            Більше фото в нашому Instagram ↗
          </a>
        </div>
      </div>

      {/* GALLERY MODAL */}
      {lightboxIndex !== null && (
        <div className="gallery-modal" onClick={closeLightbox}>
          <button className="gallery-modal__close" onClick={closeLightbox}>&times;</button>

          <div
            className="gallery-modal__content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <button className="gallery-modal__nav prev" onClick={(e) => { e.stopPropagation(); goPrev(); }}>&#10094;</button>

            <div className="gallery-modal__main-image-container">
              <img
                src={PHOTOS[lightboxIndex].src}
                alt={PHOTOS[lightboxIndex].alt}
                className="gallery-modal__main-image"
              />
              <div className="gallery-modal__counter">
                {lightboxIndex + 1} / {PHOTOS.length}
              </div>
            </div>

            <button className="gallery-modal__nav next" onClick={(e) => { e.stopPropagation(); goNext(); }}>&#10095;</button>
          </div>

          <div className="gallery-modal__thumbnails" onClick={(e) => e.stopPropagation()}>
            {PHOTOS.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt="Miniature"
                className={`gallery-modal__thumb ${idx === lightboxIndex ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(idx); }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
