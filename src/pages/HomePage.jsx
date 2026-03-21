import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero/Hero';

// Ледаче завантаження компонентів, що знаходяться поза першим екраном
const About = lazy(() => import('../components/About/About'));
const Rooms = lazy(() => import('../components/Rooms/Rooms'));
const Services = lazy(() => import('../components/Services/Services'));
const Gallery = lazy(() => import('../components/Gallery/Gallery'));
const Testimonials = lazy(() => import('../components/Testimonials/Testimonials'));
const Contact = lazy(() => import('../components/Contact/Contact'));
const Location = lazy(() => import('../components/Location/Location'));

const HomePage = () => {
  return (
    <main>
      {/* Hero-блок (перший екран) завантажується миттєво */}
      <Hero />

      {/* Всі інші секції завантажуються лише тоді, коли потрібні, зменшуючи початковий бандл */}
      <Suspense fallback={<div style={{ minHeight: '100vh' }}></div>}>
        <About />
        <Rooms />
        <Services />
        <Gallery />
        <Testimonials />
        <Location />
        <Contact />
      </Suspense>
    </main>
  );
};

export default HomePage;
