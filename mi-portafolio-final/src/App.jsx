// src/App.jsx
import React, { useState, useEffect } from 'react';
import './index.css';
import Threads from './components/Threads.jsx';
import SplitText from './components/SplitText.jsx';
import TypewriterEffect from './components/TypewriterEffect.jsx';
import Header from './components/Header.jsx';
import AboutMe from './components/AboutMe.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import BlurText from './components/BlurText.jsx'; // <-- ¡NUEVA IMPORTACIÓN: Componente BlurText!

function App() {
  const professionText = "Ingeniero Informático/Desarrollador Full-Stack";

  const handleTitleAnimationComplete = () => {
    console.log('El título principal ha terminado de animarse!');
  };

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

      {/* Contenedor para el fondo animado (Threads). Se fija a la pantalla completa. */}
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

      {/* Sección Sobre Mí */}
      <AboutMe /> {/* El título "Sobre Mí" se moverá dentro de AboutMe.jsx si lo quieres animado */}
      {/* Si quieres animar los títulos de las secciones, el h2 debe estar DENTRO del componente */}
      {/* Por ejemplo, en AboutMe.jsx, Experience.jsx, Projects.jsx y Contact.jsx */}
      {/* Haré los cambios en esos componentes directamente para que el BlurText se aplique a sus títulos */}

      {/* Sección Trayectoria */}
      <Experience />

      {/* Sección Proyectos */}
      <Projects />

      {/* Sección Contacto */}
      <Contact />

    </div>
  );
}

export default App;
