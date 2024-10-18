import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Social from './components/Social';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/social" element={<Social />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
