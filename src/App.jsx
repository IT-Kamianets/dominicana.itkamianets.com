import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage';
import AllRoomsPage from './pages/AllRoomsPage';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import { initScrollAnimations } from './hooks/useScrollAnimation';

function App() {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<AllRoomsPage />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
