import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { hotelConfig } from '../../config';
import Icon from '../Icon';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        setScrolled(window.scrollY > 50);
      } else {
        setScrolled(true);
      }
    };

    handleScroll(); // Set correct state on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle hash scroll when returning from other pages (e.g. /rooms -> /#contact)
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      // Small timeout to allow the browser to render the homepage first
      const timeout = setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [location.pathname, location.hash]);

  const handleNavClick = (e, targetId) => {
    if (targetId.startsWith('tel:') || targetId.startsWith('mailto:')) {
      return;
    }
    
    // If we're navigating to a completely different page (not home)
    if (targetId.startsWith('/') && !targetId.startsWith('/#')) {
      return; // Regular Link will handle this
    }

    e.preventDefault();

    // If we are on e.g. /rooms and want to go to #gallery
    if (location.pathname !== '/') {
      navigate('/' + targetId);
      return;
    }

    // Standard smooth scroll for in-page links
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
    { label: 'Номери', href: '/rooms' },
    { label: 'Послуги', href: '#services' },
    { label: 'Галерея', href: '#gallery' },
    { label: 'Розташування', href: '#location' },
  ];

  const mobileNavLinks = [
    { label: 'Головна', href: '#home', icon: 'home' },
    { label: 'Номери', href: '#rooms', icon: 'bed' },
    { label: 'Галерея', href: '#gallery', icon: 'image' },
    { label: 'Бронювати', href: '#contact', icon: 'check-circle' },
    { label: 'Дзвінок', href: `tel:${hotelConfig.contact.phone.replace(/\s/g, '')}`, icon: 'phone' }
  ];

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner container">

          {/* Brand */}
          <Link to="/" className="nav__brand" onClick={(e) => handleNavClick(e, '#home')}>
            {hotelConfig.hotelName}
          </Link>

          {/* Desktop links */}
          <ul className="nav__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  to={link.href} 
                  className="nav__link" 
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop right side: phone + CTA */}
          <div className="nav__actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
              className="btn btn-primary"
              style={{ padding: '8px 16px', fontSize: '0.9rem' }}
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Бронювати
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
