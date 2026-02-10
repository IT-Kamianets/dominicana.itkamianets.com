import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import Footer from './components/Footer/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'rooms':
        return <RoomsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      {/* Навігація */}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Поточна сторінка */}
      {renderPage()}
      
      {/* Футер */}
      <Footer />
    </div>
  );
}

export default App;
