import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OverviewPage from './pages/OverviewPage';
import CompetitivePage from './pages/CompetitivePage';
import TopGamesPage from './pages/TopGamesPage';
import NewsletterPage from './pages/NewsletterPage';
import Navbar from './components/Navbar'; // Import the Navbar component

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/competitive" element={<CompetitivePage />} />
          <Route path="/top-games" element={<TopGamesPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
