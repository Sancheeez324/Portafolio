// src/App.jsx
import React, { useState, useEffect } from 'react';
import './index.css';
import Threads from './components/Threads.jsx';
import SplitText from './components/SplitText.jsx';
import TypewriterEffect from './components/TypewriterEffect.jsx';
import Header from './components/Header.jsx';
import AboutMe from './components/AboutMe.jsx';
import Experience from './components/Experience.jsx'; // Importación del componente Experience
import Projects from './components/Projects.jsx'; // Importación del componente Projects
import Contact from './components/Contact.jsx'; // Importación del componente Contact

function App() {
  const professionText = "Ingeniero Informático/Desarrollador Full-Stack";

  const handleTitleAnimationComplete = () => {
    console.log('El título principal ha terminado de animarse!');
  };

  // Función para desplazamiento suave a una sección específica de la página.
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
    }
  };

  return (
    <div className="App">
      {/* Componente Header con enlaces de navegación.
          Se le pasa la función scrollToSection para que los botones de navegación funcionen. */}
      <Header scrollToSection={scrollToSection} />

      {/* Contenedor para el fondo animado (Threads). Se fija a la pantalla completa. */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Asegura que el fondo esté detrás del contenido
      }}>
        <Threads
          amplitude={1.5}
          distance={0}
          enableMouseInteraction={true}
          color={[0.1, 0.4, 0.7]} // Color de las ondas: Azul eléctrico
        />
      </div>

      {/* Sección Hero (Inicio) - Contiene el título y la profesión animada. */}
      {/* Se le asigna un ID para que la navegación pueda apuntar a ella. */}
      <section id="inicio" className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white text-center p-12 relative z-10">
        {/* Título principal con efecto de animación de aparición (SplitText). */}
        {/* Se usa una 'key' única para ayudar a React a identificar el componente. */}
        <SplitText
          key="main-title"
          text="Hola, soy Pablo" // <-- ¡CAMBIA ESTE TEXTO CON TU NOMBRE!
          className="text-7xl md:text-9xl font-bold mb-4" // Clases de Tailwind para el tamaño y estilo
          delay={130} // Retraso entre la aparición de cada caracter
          duration={1.2} // Duración de la animación de cada caracter
          ease="power3.out" // Función de suavizado para la animación
          splitType="chars" // Anima el texto caracter por caracter
          from={{ opacity: 0, y: 40 }} // Estado inicial de la animación
          to={{ opacity: 1, y: 0 }} // Estado final de la animación
          threshold={0.1} // Porcentaje del elemento visible para disparar la animación
          rootMargin="-100px" // Ajuste del margen para el ScrollTrigger
          textAlign="center" // Alinea el texto al centro
          onLetterAnimationComplete={handleTitleAnimationComplete} // Callback al finalizar la animación
        />

        {/* Contenedor para el texto de la profesión y el cursor. */}
        {/* Se aplican las clases de fuente y color directamente a este componente TypewriterEffect. */}
        <TypewriterEffect
          phrases={["Ingeniero Informático", "Desarrollador Full-Stack"]} // Frases a animar
          typingSpeed={150} // Velocidad de escritura (ms por caracter)
          deletingSpeed={75} // Velocidad de borrado (ms por caracter)
          pauseBetween={2000} // Pausa entre frases (ms)
          loop={true} // Repetir la animación indefinidamente
          className="text-4xl md:text-6xl font-mono text-blue-400" // Clases de Tailwind para estilo
          cursorColor="#60A5FA" // Color del cursor
        />
      </section>

      {/* Sección Sobre Mí - Usa el componente AboutMe. */}
      {/* Se le asigna un ID internamente en AboutMe.jsx para que la navegación funcione. */}
      <AboutMe />

      {/* Sección Trayectoria - Usa el componente Experience. */}
      {/* Se le asigna un ID internamente en Experience.jsx para que la navegación funcione. */}
      <Experience />

      {/* Sección Proyectos - Usa el componente Projects. */}
      {/* Se le asigna un ID internamente en Projects.jsx para que la navegación funcione. */}
      <Projects />

      {/* Sección Contacto - Usa el componente Contact. */}
      {/* Se le asigna un ID internamente en Contact.jsx para que la navegación funcione. */}
      <Contact />

    </div>
  );
}

export default App;
