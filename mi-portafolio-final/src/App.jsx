// src/App.jsx
import React from 'react';
import './App.css';
import { Download } from 'lucide-react';

import Threads from './components/common/Threads.jsx';
import SplitText from './components/common/SplitText.jsx';
import TypewriterEffect from './components/common/TypewriterEffect.jsx';

import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';

import AboutMe from './components/sections/AboutMe/AboutMe.jsx';
import Experience from './components/sections/Experience/Experience.jsx';
import Certificates from './components/sections/Certificates/Certificates.jsx';
import Projects from './components/sections/Projects/Projects.jsx';
import Contact from './components/sections/Contact/Contact.jsx';

import myPhoto from './assets/FotoYo/yo.jpg';

function App() {
  const handleTitleAnimationComplete = () => {};

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />

      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Threads amplitude={1.5} distance={0} enableMouseInteraction={true} color={[0.1, 0.4, 0.7]} />
      </div>

      <section id="inicio" className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white text-center p-12 relative z-10">
        {/* Badge disponibilidad */}
        <div className="flex items-center gap-2 bg-green-900 bg-opacity-60 text-green-400 border border-green-600 rounded-full px-4 py-2 mb-8 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block"></span>
          Disponible para trabajar
        </div>

        {/* Foto de perfil */}
        <img
          src={myPhoto}
          alt="Pablo Sánchez"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-400 shadow-lg mb-8"
        />

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

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="/cv.pdf"
            download
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Download size={20} />
            Descargar CV
          </a>
          <button
            onClick={() => scrollToSection('proyectos')}
            className="flex items-center justify-center gap-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Ver Proyectos
          </button>
        </div>
      </section>

      <AboutMe />
      <Experience />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
