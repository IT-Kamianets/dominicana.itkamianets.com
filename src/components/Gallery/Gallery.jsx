import React, { useState, useEffect, useCallback } from 'react';
import './Gallery.css';

// ─── Локальні фото з assets/gallery/ ───────────────────────────
// Закидай файли з назвами 1.webp, 2.webp, ... 12.webp
// у папку src/assets/gallery/
import photo1  from '../../assets/gallery/1.webp';
import photo2  from '../../assets/gallery/2.webp';
import photo3  from '../../assets/gallery/3.webp';
import photo4  from '../../assets/gallery/4.webp';
import photo5  from '../../assets/gallery/5.webp';
import photo6  from '../../assets/gallery/6.webp';
import photo7  from '../../assets/gallery/7.webp';
import photo8  from '../../assets/gallery/8.webp';
import photo9  from '../../assets/gallery/9.webp';
import photo10 from '../../assets/gallery/10.webp';
import photo11 from '../../assets/gallery/11.webp';
import photo12 from '../../assets/gallery/12.webp';

const PHOTOS = [
  photo1, photo2, photo3, photo4,
  photo5, photo6, photo7, photo8,
  photo9, photo10, photo11, photo12,
];

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

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
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft')  goPrev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handle);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handle);
    };
  }, [lightboxIndex, goNext, goPrev]);

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

        <div className="gallery__grid">
          {PHOTOS.map((src, i) => (
            <button
              key={i}
              className="gallery__cell"
              onClick={() => setLightboxIndex(i)}
              aria-label={`Фото ${i + 1}`}
            >
              <img
                src={src}
                alt={`Готель У Домінікана — фото ${i + 1}`}
                loading="lazy"
                className="gallery__img"
              />
              <div className="gallery__overlay">
                <span className="gallery__zoom" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.8">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="gallery__lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Перегляд фото"
        >
          <div className="gallery__lb-content" onClick={e => e.stopPropagation()}>
            <button className="gallery__lb-close" onClick={closeLightbox} aria-label="Закрити">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <button className="gallery__lb-nav gallery__lb-nav--prev" onClick={goPrev} aria-label="Попередня">‹</button>

            <img
              src={PHOTOS[lightboxIndex]}
              alt={`Готель У Домінікана — фото ${lightboxIndex + 1}`}
              className="gallery__lb-img"
            />

            <button className="gallery__lb-nav gallery__lb-nav--next" onClick={goNext} aria-label="Наступна">›</button>

            <div className="gallery__lb-footer">
              <span className="gallery__lb-counter">
                {lightboxIndex + 1} / {PHOTOS.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
