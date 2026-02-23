import React, { useEffect, useState } from 'react';
import { hotelConfig } from '../../config';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileOpen(false);
    if (targetId === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(targetId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Про готель', href: '#about' },
    { label: 'Номери', href: '#rooms' },
    { label: 'Послуги', href: '#services' },
    { label: 'Галерея', href: '#gallery' },
    { label: 'Розташування', href: '#location' },
  ];

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">

        {/* Brand */}
        <a href="#home" className="nav__brand" onClick={(e) => handleNavClick(e, '#home')}>
          {hotelConfig.hotelName}
        </a>

        {/* Desktop links */}
        <ul className="nav__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav__link" onClick={(e) => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right side: phone + CTA */}
        <div className="nav__actions">
          <a
            href={`tel:${hotelConfig.contact.phone.replace(/\s/g, '')}`}
            className="nav__phone"
            aria-label="Зателефонувати"
          >
            <svg viewBox="0 0 24 24" width={15} height={15} fill="none" stroke="currentColor"
              strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11.5 19.8 19.8 0 0 1 3 2.18 2 2 0 0 1 5 0h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.91 7.09a16 16 0 0 0 6 6l.71-.71a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>{hotelConfig.contact.phone}</span>
          </a>

          <a
            href="#contact"
            className="btn btn-nav"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Бронювати
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`nav__hamburger ${mobileOpen ? 'nav__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Закрити меню' : 'Відкрити меню'}
          aria-expanded={mobileOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="nav__mobile">
          <ul className="nav__mobile-links">
            <li>
              <a href="#home" className="nav__mobile-link" onClick={(e) => handleNavClick(e, '#home')}>
                Головна
              </a>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav__mobile-link" onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__mobile-footer">
            <a
              href={`tel:${hotelConfig.contact.phone.replace(/\s/g, '')}`}
              className="nav__mobile-phone"
            >
              <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor"
                strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11.5 19.8 19.8 0 0 1 3 2.18 2 2 0 0 1 5 0h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.91 7.09a16 16 0 0 0 6 6l.71-.71a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {hotelConfig.contact.phone}
            </a>
            <a
              href="#contact"
              className="btn btn-nav"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Бронювати
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
