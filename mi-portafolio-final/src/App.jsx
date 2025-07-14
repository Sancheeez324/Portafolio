// src/App.jsx
import React, { useState, useEffect } from 'react';
import './index.css';
import Threads from './components/Threads.jsx';
import SplitText from './components/SplitText.jsx';
import TypewriterEffect from './components/TypewriterEffect.jsx'; // <-- ¡NUEVA IMPORTACIÓN!

function App() {
  const professionText = "Ingeniero Informático/Desarrollador Full-Stack"; // Ya no se necesita aquí directamente

  const handleTitleAnimationComplete = () => {
    console.log('El título principal ha terminado de animarse!');
    // No necesitamos llamar a setShowCursor(true) aquí, el TypewriterEffect se inicia solo.
  };

  return (
    <div className="App">
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
          color={[0.1, 0.4, 0.7]} // Color de las ondas: Azul eléctrico
        />
      </div>

      {/* Sección Hero (Inicio) - Aquí estará tu título animado */}
      <div className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white text-center p-12">
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
        {/* Aplicamos las clases de fuente y color directamente a este div padre */}
        {/* Ahora usamos TypewriterEffect en lugar de SplitText para la profesión */}
        <TypewriterEffect
          phrases={["Ingeniero Informático", "Desarrollador Full-Stack"]} // <-- ¡TUS FRASES AQUÍ!
          typingSpeed={150} // Velocidad de escritura (más alto = más lento) <-- AJUSTADO
          deletingSpeed={75} // Velocidad de borrado (más alto = más lento) <-- AJUSTADO
          pauseBetween={2000} // Pausa entre frases (más alto = más largo) <-- AJUSTADO
          loop={true} // Repetir la animación
          // Pasamos las clases de estilo al componente TypewriterEffect
          className="text-4xl md:text-6xl font-mono text-blue-400"
          cursorColor="#60A5FA" // Color del cursor
        />

      </div>

      {/* Sección de prueba 2: Usando clases de Tailwind */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center bg-transparent text-white p-12">
        <h2 className="text-4xl font-bold mb-4">Sección de Prueba - Haz Scroll</h2>
        <p className="text-xl">El fondo animado debería seguir viéndose detrás.</p>
      </div>

    </div>
  );
}

export default App;
