import React, { useState, useCallback, useEffect } from 'react';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';
import { galleryImages } from '../../config';
import './Gallery.css';

// Помірна різноманітність — помітна, але без екстриму
const photoRatios = [
  { w: 1600, h: 1000 }, // 1 — широке (8:5)
  { w: 1000, h: 1300 }, // 2 — вертикальне
  { w: 1200, h: 1100 }, // 3 — майже квадрат
  { w: 1500, h: 1000 }, // 4 — широке (3:2)
  { w: 1000, h: 1200 }, // 5 — вертикальне
  { w: 1300, h: 1000 }, // 6 — помірно широке
  { w: 1000, h: 1350 }, // 7 — вертикальне
  { w: 1500, h: 1050 }, // 8 — широке
  { w: 1050, h: 1300 }, // 9 — вертикальне
];

// Конвертуємо galleryImages в формат react-photo-album
const photos = galleryImages.map((img, i) => ({
  src: img.src,
  width: photoRatios[i]?.w || 1600,
  height: photoRatios[i]?.h || 1200,
  alt: img.alt,
  key: img.id.toString(),
}));

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % photos.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + photos.length) % photos.length : null
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

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <h2 className="section-title" data-animate="fade-in">Галерея</h2>
        <p className="section-subtitle" data-animate="fade-in">
          Погляньте на наш готель та атмосферу, яку ми створюємо
        </p>

        <div className="gallery-album">
          <MasonryPhotoAlbum
            photos={photos}
            columns={(containerWidth) => {
              if (containerWidth < 500) return 2;
              if (containerWidth < 900) return 3;
              return 4;
            }}
            spacing={10}
            onClick={({ index }) => setLightboxIndex(index)}
            render={{
              image: (props, { photo, index }) => (
                <div
                  className={`gallery-item ${
                    hoveredIndex === index
                      ? 'gallery-item--hovered'
                      : hoveredIndex !== null
                        ? 'gallery-item--pushed'
                        : ''
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    {...props}
                    className="gallery-item__image"
                    loading="lazy"
                  />
                  <div className="gallery-item__overlay">
                    <span className="gallery-item__label">{photo.alt}</span>
                  </div>
                </div>
              ),
            }}
          />
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox__close" onClick={closeLightbox}>✕</button>
            <button className="lightbox__nav lightbox__nav--prev" onClick={goPrev}>‹</button>
            <img
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt}
              className="lightbox__image"
            />
            <button className="lightbox__nav lightbox__nav--next" onClick={goNext}>›</button>
            <p className="lightbox__caption">
              {photos[lightboxIndex].alt}
              <span className="lightbox__counter">{lightboxIndex + 1} / {photos.length}</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;