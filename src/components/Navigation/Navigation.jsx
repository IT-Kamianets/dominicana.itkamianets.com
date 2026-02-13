import React, { useEffect, useState } from 'react';
import { hotelConfig } from '../../config';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрити мобільне меню при кліку на лінку
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileOpen(false);

    if (targetId === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(targetId);
    if (element) {
      const offset = 80; // висота навбару
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Головна', href: '#home' },
    { label: 'Про готель', href: '#about' },
    { label: 'Номери', href: '#rooms' },
    { label: 'Послуги', href: '#services' },
    { label: 'Галерея', href: '#gallery' },
    { label: 'Розташування', href: '#location' },
  ];

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        {/* Лого */}
        <a
          href="#home"
          className="nav__brand"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          {hotelConfig.hotelName}
        </a>

        {/* Desktop навігація */}
        <ul className="nav__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav__link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Мобільний гамбургер */}
        <button
          className={`nav__hamburger ${mobileOpen ? 'nav__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Відкрити меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Мобільне меню */}
      {mobileOpen && (
        <div className="nav__mobile">
          <ul className="nav__mobile-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav__mobile-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
