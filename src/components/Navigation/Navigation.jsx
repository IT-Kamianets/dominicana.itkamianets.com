import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { hotelConfig } from '../../config';
import './Navigation.css';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page, hash) => {
    if (page) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (hash) {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <Navbar expand="lg" fixed="top" className={`shadow-sm ${scrolled ? 'scrolled' : ''}`}>
      <Container>
        {/* Логотип/Назва готелю */}
        <Navbar.Brand 
          href="#" 
          className="fw-bold"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
        >
          {hotelConfig.hotelName}
        </Navbar.Brand>
        
        {/* Кнопка для мобільного меню */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Навігаційні посилання */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
            >
              Головна
            </Nav.Link>
            <Nav.Link 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(null, '#about');
              }}
            >
              Про готель
            </Nav.Link>
            <Nav.Link 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('rooms');
              }}
            >
              Номери
            </Nav.Link>
            <Nav.Link 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(null, '#services');
              }}
            >
              Послуги
            </Nav.Link>
            <Nav.Link 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(null, '#gallery');
              }}
            >
              Галерея
            </Nav.Link>
            <Nav.Link 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(null, '#location');
              }}
            >
              Розташування
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
