// src/components/sections/Experience/Experience.jsx
import React, { useState } from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import BlurText from '../../common/BlurText.jsx'; // <-- RUTA ACTUALIZADA


import uaiLogo from '../../../assets/FotosUs_Empresas/uai.jpg'; 
import pucvLogo from '../../../assets/FotosUs_Empresas/pucv.png'; 
import imgOnlineLogo from '../../../assets/FotosUs_Empresas/IMGOnline.jpg'; 
import simotecLogo from '../../../assets/FotosUs_Empresas/simotec.jpg'; 
import unityLogo from '../../../assets/FotosUs_Empresas/unity.png'; 


const Experience = () => {
  const initialTimelineEvents = [
    {
      type: 'other',
      title: 'Curso de Liderazgo para Estudiantes',
      subtitle: 'Universidad Adolfo Ibáñez',
      date: '2019 | Viña del Mar',
      description: [],
      icon: <Award size={28} />,
      logo: uaiLogo,
    },
    {
      type: 'academic',
      title: 'Ingeniería de Ejecución Informática',
      subtitle: 'Pontificia Universidad Católica de Valparaíso',
      date: '2020-2024',
      description: [
        'Coordinador Juegos de ingeniería PUCV | 2022',
        'Presidente centro de alumnos de informática | 2022-2024',
      ],
      icon: <GraduationCap size={28} />,
      logo: pucvLogo,
    },
    {
      type: 'professional',
      title: 'IMG Online SPA',
      subtitle: 'Practicante',
      date: 'Enero-Marzo | 2023',
      description: [
        'Pruebas de SW utilizando Retool y Scriptcase.',
        'Desarrollo y diseño de modales en Retool.',
        'Creación de casos de pruebas.',
        'Programación en Python.',
        'Uso avanzado de Excel.',
      ],
      icon: <Briefcase size={28} />,
      logo: imgOnlineLogo,
    },
    {
      type: 'professional',
      title: 'Proyecto de Título: Rise of Heroes',
      subtitle: 'Desarrollo de videojuego 3D con fines educativos',
      date: 'Enero-Julio | 2024',
      description: [
        'Programación en Unity/C#, diseño de narrativa y mecánicas interactivas.',
        'Diseño 3D en blender.',
      ],
      icon: <Briefcase size={28} />,
      logo: unityLogo,
    },
    {
      type: 'professional',
      title: 'Simotec',
      subtitle: 'Evaluación de Riesgos Laborales',
      date: 'Febrero-Abril | 2025',
      description: [
        'Desarrollo de sistema web para evaluar riesgos laborales mediante pruebas psicológicas, cognitivas y simulaciones en VR.',
        'Backend serverless utilizando AWS Lambda, Node.js y base de datos MySQL en AWS RDS.',
        'Frontend SPA desarrollado en React con Vite.',
        'Implementación de lógica de autenticación (JWT, bcrypt), gestión de roles y resultados personalizados por test.',
        'Conexión y despliegue de la base de datos desde MySQL Workbench a la nube.',
      ],
      icon: <Briefcase size={28} />,
      logo: simotecLogo,
    },
  ];

  const [timelineEventsWithLoadStatus, setTimelineEventsWithLoadStatus] = useState(initialTimelineEvents.map(event => ({ ...event, logoLoaded: true })));

  const handleLogoError = (index) => {
    setTimelineEventsWithLoadStatus(prevEvents =>
      prevEvents.map((event, i) =>
        i === index ? { ...event, logoLoaded: false } : event
      )
    );
  };

  return (
    <section id="trayectoria" className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white text-center p-12 relative z-10">
      {/* Título de la sección con BlurText */}
      <BlurText
        text="Trayectoria"
        className="text-5xl md:text-7xl font-bold mb-12"
        delay={100}
        animateBy="words"
        direction="top"
      />

      <div className="relative max-w-4xl w-full mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 h-full rounded-full hidden md:block"></div>

        {timelineEventsWithLoadStatus.map((event, index) => (
          <div
            key={index}
            className={`mb-8 flex items-center w-full ${
              index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
            }`}
          >
            <div
              className={`w-full md:w-1/2 p-4 rounded-lg shadow-xl bg-gray-800 bg-opacity-70 transform hover:scale-105 transition-transform duration-300
                ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}
            >
              <h3 className="text-2xl font-semibold text-blue-300 mb-2 flex items-center justify-center md:justify-start">
                {event.logoLoaded && event.logo ? (
                  <img
                    src={event.logo}
                    alt={`${event.title} logo`}
                    className="w-8 h-8 mr-2 object-contain"
                    onError={() => handleLogoError(index)}
                  />
                ) : (
                  event.icon
                )}
                <span className="ml-2">{event.title}</span>
              </h3>
              <p className="text-lg text-gray-300 mb-1">{event.subtitle}</p>
              <p className="text-sm text-gray-400 mb-3">{event.date}</p>
              <ul className="list-disc list-inside text-gray-400 text-base space-y-1">
                {event.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-400 rounded-full items-center justify-center border-4 border-blue-800 z-10">
              {event.logoLoaded && event.logo ? (
                <img
                  src={event.logo}
                  alt={`${event.title} logo`}
                  className="w-5 h-5 object-contain"
                  onError={() => handleLogoError(index)}
                />
              ) : (
                React.cloneElement(event.icon, { size: 18, className: 'text-white' })
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
