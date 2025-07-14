// src/App.jsx
import React, { useState, useEffect } from 'react';
import './index.css';

// Importaciones de componentes comunes
import Threads from './components/common/Threads.jsx';
import SplitText from './components/common/SplitText.jsx';
import TypewriterEffect from './components/common/TypewriterEffect.jsx';
import BlurText from './components/common/BlurText.jsx';

// Importación del componente de layout
import Header from './components/layout/Header.jsx';

// Importaciones de componentes de sección
import AboutMe from './components/sections/AboutMe/AboutMe.jsx';
import Experience from './components/sections/Experience/Experience.jsx';
import Certificates from './components/sections/Certificates/Certificates.jsx'; 
import Projects from './components/sections/Projects/Projects.jsx';
import Contact from './components/sections/Contact/Contact.jsx';

function App() {
  const professionText = "Ingeniero Informático/Desarrollador Full-Stack";

  const handleTitleAnimationComplete = () => {
    console.log('El título principal ha terminado de animarse!');
  };

  // Función para desplazamiento suave a una sección específica de la página.
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Componente Header con enlaces de navegación. */}
      <Header scrollToSection={scrollToSection} />

      {/* Contenedor para el fondo animado (Threads). */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}>
        <Threads
          amplitude={1.5}
          distance={0}
          enableMouseInteraction={true}
          color={[0.1, 0.4, 0.7]}
        />
      </div>

      {/* Sección Hero (Inicio) */}
      <section id="inicio" className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white text-center p-12 relative z-10">
        <SplitText
          key="main-title"
          text="Hola, soy Pablo"
          className="text-7xl md:text-9xl font-bold mb-4"
          delay={130}
          duration={1.2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleTitleAnimationComplete}
        />

        <TypewriterEffect
          phrases={["Ingeniero Informático", "Desarrollador Full-Stack"]}
          typingSpeed={150}
          deletingSpeed={75}
          pauseBetween={2000}
          loop={true}
          className="text-4xl md:text-6xl font-mono text-blue-400"
          cursorColor="#60A5FA"
        />
      </section>

      {/* Secciones del portafolio */}
      <AboutMe />
      <Experience />
      <Certificates /> 
      <Projects />
      <Contact />

    </div>
  );
}

export default App;
