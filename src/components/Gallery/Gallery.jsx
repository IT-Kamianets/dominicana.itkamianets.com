import React, { useState, useCallback, useEffect } from 'react';
import { galleryImages } from '../../config';
import './Gallery.css';

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + galleryImages.length) % galleryImages.length
        : null
    );
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxIndex, goNext, goPrev]);

  // Визначаємо розміри для masonry ефекту
  const getItemClass = (index) => {
    // Перше та кожне 5-те фото — велике
    if (index === 0 || index === 4) return 'gallery-item--large';
    return '';
  };

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <h2 className="section-title" data-animate="fade-in">Галерея</h2>
        <p className="section-subtitle" data-animate="fade-in">
          Погляньте на наш готель та атмосферу, яку ми створюємо
        </p>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              className={`gallery-item ${getItemClass(index)}`}
              key={image.id}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`Відкрити фото: ${image.alt}`}
              data-animate="scale-up"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="gallery-item__image"
                loading="lazy"
              />
              <div className="gallery-item__overlay">
                <span className="gallery-item__label">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox__close" onClick={closeLightbox} aria-label="Закрити">✕</button>
            <button className="lightbox__nav lightbox__nav--prev" onClick={goPrev} aria-label="Попереднє">‹</button>
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="lightbox__image"
            />
            <button className="lightbox__nav lightbox__nav--next" onClick={goNext} aria-label="Наступне">›</button>
            <p className="lightbox__caption">
              {galleryImages[lightboxIndex].alt}
              <span className="lightbox__counter">{lightboxIndex + 1} / {galleryImages.length}</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
