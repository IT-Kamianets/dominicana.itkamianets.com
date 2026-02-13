import React, { useEffect } from 'react';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import { initScrollAnimations } from './hooks/useScrollAnimation';

function App() {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <div className="App">
      <Navigation />
      <HomePage />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
