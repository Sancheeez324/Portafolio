// src/components/layout/Footer.jsx
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-black bg-opacity-70 backdrop-blur-sm text-gray-400 py-8 text-center border-t border-gray-800">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/Sancheeez324"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/pablo-s%C3%A1nchez-234702318/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
      </div>
      <p className="text-sm">© 2025 Pablo Sánchez · Desarrollado con React + Vite</p>
    </footer>
  );
};

export default Footer;
