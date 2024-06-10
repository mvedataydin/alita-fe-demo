import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import NotFound from './pages/NotFound'; // Import the NotFound component
import MainLayout from './layouts/MainLayout';

const AppRouter: React.FC = () => (
  <Router>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        {/* Wildcard route for 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  </Router>
);

export default AppRouter;
