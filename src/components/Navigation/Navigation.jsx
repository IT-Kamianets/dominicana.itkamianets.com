import React, { useEffect, useState } from 'react';
import { hotelConfig } from '../../config';
import Icon from '../Icon';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    if (targetId.startsWith('tel:') || targetId.startsWith('mailto:')) {
      return;
    }
    e.preventDefault();
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

  const mobileNavLinks = [
    { label: 'Головна', href: '#home', icon: 'home' },
    { label: 'Номери', href: '#rooms', icon: 'bed' },
    { label: 'Галерея', href: '#gallery', icon: 'image' },
    { label: 'Контакти', href: '#location', icon: 'map-pin' },
    { label: 'Дзвінок', href: `tel:${hotelConfig.contact.phone.replace(/\s/g, '')}`, icon: 'phone' }
  ];

  return (
    <>
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
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="nav__bottom">
        <ul className="nav__bottom-links">
          {mobileNavLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav__bottom-link" onClick={(e) => handleNavClick(e, link.href)}>
                <Icon name={link.icon} size={22} className="nav__bottom-icon" />
                <span className="nav__bottom-label">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
