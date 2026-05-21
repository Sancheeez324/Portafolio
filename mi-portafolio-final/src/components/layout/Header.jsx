// src/components/layout/Header.jsx
import React, { useState } from 'react';
import { Linkedin, Github, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Sobre Mí', id: 'sobre-mi' },
  { label: 'Trayectoria', id: 'trayectoria' },
  { label: 'Certificados', id: 'certificados' },
  { label: 'Proyectos', id: 'proyectos' },
  { label: 'Contacto', id: 'contacto' },
];

const Header = ({ scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-sm z-50 shadow-lg">
      <div className="flex justify-between items-center p-4 rounded-b-lg">
        {/* Logo */}
        <div className="text-white text-2xl font-bold px-3 py-2">
          Dev Pablo.
        </div>

        {/* Nav desktop */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white hover:text-blue-400 transition-colors duration-300 text-lg font-medium rounded-md px-3 py-2 hover:bg-gray-800"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Social icons + hamburger */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/pablo-s%C3%A1nchez-234702318/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300"
            aria-label="Perfil de LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://github.com/Sancheeez324"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300"
            aria-label="Perfil de GitHub"
          >
            <Github size={28} />
          </a>
          {/* Hamburger - solo en mobile */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Nav mobile desplegable */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-black bg-opacity-90 flex flex-col px-4 pb-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-white hover:text-blue-400 transition-colors duration-300 text-lg font-medium py-3 text-left border-b border-gray-700 last:border-0"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
