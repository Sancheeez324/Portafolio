// src/App.jsx
import React, { useState, useEffect } from 'react';
import './index.css';
import Threads from './components/Threads.jsx';
import SplitText from './components/SplitText.jsx';
import TypewriterEffect from './components/TypewriterEffect.jsx';
import Header from './components/Header.jsx'; // <-- ¡NUEVA IMPORTACIÓN: Componente Header!

function App() {
  const [showCursor, setShowCursor] = useState(false);
  const professionText = "Ingeniero Informático/Desarrollador Full-Stack";

  const handleTitleAnimationComplete = () => {
    console.log('El título principal ha terminado de animarse!');
    setShowCursor(true);
  };

  // Función para desplazamiento suave a una sección
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let cursorInterval;
    if (showCursor) {
      cursorInterval = setInterval(() => {
        const cursorElement = document.getElementById('typing-cursor');
        if (cursorElement) {
          cursorElement.style.visibility = cursorElement.style.visibility === 'hidden' ? 'visible' : 'hidden';
        }
      }, 500);
    }
    return () => {
      if (cursorInterval) {
        clearInterval(cursorInterval);
      }
    };
  }, [showCursor]);

  return (
    <div className="App">
      {/* Componente Header con enlaces de navegación */}
      <Header scrollToSection={scrollToSection} /> {/* Pasamos la función de scroll */}

      {/* Contenedor para el fondo animado. Se fija a la pantalla completa. */}
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

      {/* Sección Hero (Inicio) - Con ID para navegación */}
      <section id="inicio" className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white text-center p-12 relative z-10">
        {/* Título principal con efecto de animación de aparición */}
        <SplitText
          key="main-title"
          text="Hola, soy Pablo" // <-- ¡CAMBIA ESTE TEXTO CON TU NOMBRE!
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

        {/* Contenedor para el texto de la profesión y el cursor */}
        <div className="inline-flex items-center justify-center mt-4 max-w-full flex-wrap
                    text-4xl md:text-6xl font-mono text-blue-400">
          {/* Subtítulo de profesión con efecto de escritura de código */}
          <TypewriterEffect
            phrases={["Ingeniero Informático", "Desarrollador Full-Stack"]} // <-- ¡TUS FRASES AQUÍ!
            typingSpeed={150}
            deletingSpeed={75}
            pauseBetween={2000}
            loop={true}
            className="text-4xl md:text-6xl font-mono text-blue-400"
            cursorColor="#60A5FA"
          />
        </div>
      </section>

      {/* Sección Sobre Mí - Con ID para navegación */}
      <section id="sobre-mi" className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white text-center p-12 relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-4">Sobre Mí</h2>
        <p className="text-xl md:text-2xl max-w-3xl">
          Aquí puedes hablar sobre tu experiencia, habilidades y lo que te apasiona.
          ¡Haz scroll para ver más!
        </p>
      </section>

      {/* Sección Proyectos - Con ID para navegación */}
      <section id="proyectos" className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white text-center p-12 relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-4">Proyectos</h2>
        <p className="text-xl md:text-2xl max-w-3xl">
          Una muestra de mis trabajos más destacados.
        </p>
        {/* Aquí irán tus tarjetas de proyectos */}
      </section>

      {/* Sección Contacto - Con ID para navegación */}
      <section id="contacto" className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white text-center p-12 relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-4">Contacto</h2>
        <p className="text-xl md:text-2xl max-w-3xl">
          ¡Hablemos! Puedes contactarme a través de...
        </p>
        {/* Aquí irá tu formulario de contacto o información de contacto */}
      </section>

    </div>
  );
}

export default App;
