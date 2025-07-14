// src/components/Header.jsx
import React from 'react';
// Importa íconos de Lucide React para LinkedIn y GitHub
import { Linkedin, Github } from 'lucide-react';

const Header = ({ scrollToSection }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-sm z-50 p-4 flex justify-between items-center rounded-b-lg shadow-lg">
      {/* Logo o Nombre */}
      <div className="text-white text-2xl font-bold rounded-md px-3 py-2">
        Dev Pablo. {/* <-- ¡CAMBIA ESTO POR TU NOMBRE O LOGO! */}
      </div>

      {/* Navegación principal */}
      <nav className="flex space-x-6">
        <button
          onClick={() => scrollToSection('inicio')}
          className="text-white hover:text-blue-400 transition-colors duration-300 text-lg font-medium rounded-md px-3 py-2 hover:bg-gray-800"
        >
          Inicio
        </button>
        <button
          onClick={() => scrollToSection('sobre-mi')}
          className="text-white hover:text-blue-400 transition-colors duration-300 text-lg font-medium rounded-md px-3 py-2 hover:bg-gray-800"
        >
          Sobre Mí
        </button>
        <button
          onClick={() => scrollToSection('proyectos')}
          className="text-white hover:text-blue-400 transition-colors duration-300 text-lg font-medium rounded-md px-3 py-2 hover:bg-gray-800"
        >
          Proyectos
        </button>
        <button
          onClick={() => scrollToSection('contacto')}
          className="text-white hover:text-blue-400 transition-colors duration-300 text-lg font-medium rounded-md px-3 py-2 hover:bg-gray-800"
        >
          Contacto
        </button>
      </nav>

      {/* Íconos de Redes Sociales */}
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/pablo-sánchez-234702318/" // <-- ¡CAMBIA ESTO POR TU PERFIL DE LINKEDIN!
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors duration-300"
          aria-label="Perfil de LinkedIn"
        >
          <Linkedin size={28} /> {/* Icono de LinkedIn */}
        </a>
        <a
          href="https://github.com/Sancheeez324"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors duration-300"
          aria-label="Perfil de GitHub"
        >
          <Github size={28} /> {/* Icono de GitHub */}
        </a>
      </div>
    </header>
  );
};

export default Header;
