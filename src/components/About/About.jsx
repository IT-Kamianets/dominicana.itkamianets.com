import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import hotelImage from '../../assets/images/about.webp';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section cinematic-about">
      <div className="container cinematic-container">

        <div className={`cinematic-frame ${isVisible ? 'animated' : ''}`}>
          <figure className="cinematic-bg">
            <img
              src={hotelImage}
              alt="У Домінікана - Кам'янець-Подільський"
              loading="lazy"
            />
            {/* Light airy overlay */}
            <div className="cinematic-overlay-light"></div>
          </figure>

          <div className="cinematic-content" data-animate>
            <div className="cinematic-text-box">
              <h2 className="cinematic-title">Зупинка в серці <em>міста</em></h2>
              <span className="cinematic-divider"></span>
              <p className="cinematic-desc">
                Тиша, яку не чутно в центрі.
              </p>
              <p className="cinematic-history">
                10 номерів у відреставрованій будівлі поряд з 
                Домініканським монастирем. Балкони, кондиціонери, 
                власна ванна — і 800 метрів до фортеці.
              </p>
            </div>

            <div className="cinematic-link-wrap">
              <a href="#rooms" className="cinematic-link">
                Ознайомитися з номерами <span className="arrow">&rarr;</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
