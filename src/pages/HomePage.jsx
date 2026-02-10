import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Rooms from '../components/Rooms/Rooms';
import Services from '../components/Services/Services';
import Gallery from '../components/Gallery/Gallery';
import Location from '../components/Location/Location';

const HomePage = () => {
  return (
    <main>
      {/* Hero секція */}
      <Hero />
      
      {/* Про готель */}
      <About />
      
      {/* Номери */}
      <Rooms />
      
      {/* Послуги */}
      <Services />
      
      {/* Галерея */}
      <Gallery />
      
      {/* Розташування */}
      <Location />
    </main>
  );
};

export default HomePage;
