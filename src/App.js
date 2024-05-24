import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/global.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';

const App = () => (
  <Router>
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/portfolio' element={<PortfolioPage/>} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicePage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
