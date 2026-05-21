// src/components/sections/Experience/Experience.jsx
import React, { useState } from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import BlurText from '../../common/BlurText.jsx'; 


import uaiLogo from '../../../assets/FotosUs_Empresas/uai.jpg'; 
import pucvLogo from '../../../assets/FotosUs_Empresas/pucv.png'; 
import imgOnlineLogo from '../../../assets/FotosUs_Empresas/IMGOnline.jpg'; 
import simotecLogo from '../../../assets/FotosUs_Empresas/simotec.jpg'; 
import unityLogo from '../../../assets/FotosUs_Empresas/Unity.png'; 


const Experience = () => {
  const initialTimelineEvents = [
    {
      type: 'other',
      badge: { label: 'Formación', color: 'bg-amber-900 text-amber-300 border-amber-700' },
      title: 'Curso de Liderazgo para Estudiantes',
      subtitle: 'Universidad Adolfo Ibáñez',
      date: '2019 | Viña del Mar',
      description: [],
      icon: <Award size={28} />,
      logo: uaiLogo,
    },
    {
      type: 'academic',
      badge: { label: 'Académico', color: 'bg-purple-900 text-purple-300 border-purple-700' },
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
      badge: { label: 'Laboral', color: 'bg-green-900 text-green-300 border-green-700' },
      title: 'IMG Online SPA',
      subtitle: 'QA Tester — Práctica Profesional',
      date: 'Enero-Marzo | 2023',
      description: [
        'Ejecuté pruebas comparativas de plataformas no-code (Retool y Scriptcase), documentando resultados y elaborando reportes técnicos de pros y contras.',
        'Construí reportes dinámicos con Excel avanzado para seguimiento de cambios y análisis de datos.',
        'Participé en reuniones diarias bajo metodología ágil, colaborando en coordinación y levantamiento de requerimientos.',
      ],
      icon: <Briefcase size={28} />,
      logo: imgOnlineLogo,
    },
    {
      type: 'professional',
      badge: { label: 'Proyecto Título', color: 'bg-orange-900 text-orange-300 border-orange-700' },
      title: 'Proyecto de Título: Rise of Heroes',
      subtitle: 'Desarrollo de videojuego 3D con fines educativos',
      date: 'Enero-Julio | 2024',
      description: [
        'Diseñé y programé un videojuego histórico sobre la Guerra del Pacífico en Unity/C# con mecánicas de aprendizaje gamificadas.',
        'Modelado 3D en Blender.',
      ],
      icon: <Briefcase size={28} />,
      logo: unityLogo,
    },
    {
      type: 'professional',
      badge: { label: 'Laboral', color: 'bg-green-900 text-green-300 border-green-700' },
      title: 'Simotec',
      subtitle: 'Desarrollador Full-Stack',
      date: 'Feb-Abr | 2025',
      description: [
        'Diseñé y desarrollé un sistema web para evaluaciones psicológicas con integración de simulaciones en realidad virtual.',
        'Backend con AWS Lambda, Node.js y MySQL (AWS RDS); frontend SPA con React y Vite.',
        'Implementación de autenticación JWT, gestión de roles y resultados personalizados por test.',
      ],
      icon: <Briefcase size={28} />,
      logo: simotecLogo,
    },
    {
      type: 'professional',
      badge: { label: 'Laboral', color: 'bg-green-900 text-green-300 border-green-700' },
      title: 'Senado de Chile',
      subtitle: 'Desarrollador Full-Stack (vía RYC Consultores)',
      date: 'Nov 2025 – Presente',
      description: [
        'Desarrollo del frontend con Angular y TypeScript, integrando múltiples APIs REST y servicios externos (Strapi v5, SIL).',
        'Pruebas funcionales y técnicas en entornos de QA; documentación de componentes y decisiones técnicas.',
        'Configuración de pipelines CI/CD en GitLab y contenedores Docker para despliegue en producción.',
        'Colaboración transversal con distintos equipos del Senado en reuniones de requerimientos y mejora continua.',
      ],
      icon: <Briefcase size={28} />,
      logo: null,
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
              {event.badge && (
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-3 ${event.badge.color}`}>
                  {event.badge.label}
                </span>
              )}
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
