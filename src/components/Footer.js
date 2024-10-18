import React from 'react';
import { FaTwitter, FaEnvelope , FaGithub, FaLinkedin } from 'react-icons/fa'; // Import the icons
import '../styles.css'; // Import your CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaTwitter />
        </a>
        <a href="https://github.com/basantiOP" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/aryan-singh-7451a6304/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaLinkedin />
        </a>
        <a href="mailto:aryan878963@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
