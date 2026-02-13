import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Rooms from '../components/Rooms/Rooms';
import Services from '../components/Services/Services';
import Gallery from '../components/Gallery/Gallery';
import Testimonials from '../components/Testimonials/Testimonials';
import Location from '../components/Location/Location';
import Contact from '../components/Contact/Contact';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Rooms />
      <Services />
      <Gallery />
      <Testimonials />
      <Location />
      <Contact />
    </main>
  );
};

export default HomePage;
