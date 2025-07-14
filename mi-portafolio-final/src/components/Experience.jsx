// src/components/Experience.jsx
import React, { useState } from 'react'; // Importa useState para manejar el estado de carga de los logos
// Importa íconos de Lucide React para los encabezados de sección
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const Experience = () => {
  // Datos de la trayectoria, combinando académica, profesional y otros para la línea de tiempo
  const initialTimelineEvents = [
    {
      type: 'other',
      title: 'Curso de Liderazgo para Estudiantes',
      subtitle: 'Universidad Adolfo Ibáñez',
      date: '2019 | Viña del Mar',
      description: [],
      icon: <Award size={28} />,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Logo_UAI.svg/1200px-Logo_UAI.svg.png', // Logo UAI
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
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Logo_PUCV.svg/1200px-Logo_PUCV.svg.png', // Logo PUCV
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
      logo: 'https://placehold.co/60x60/000000/FFFFFF?text=IMG', // Placeholder para IMG Online SPA (si tienes el logo, cámbialo)
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
      logo: 'https://placehold.co/60x60/000000/FFFFFF?text=Juego', // Placeholder para el logo del juego (si tienes uno, cámbialo)
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
      logo: 'https://simotec.cl/wp-content/uploads/2020/08/logo-simotec.png', // Logo Simotec
    },
  ];

  // Estado para manejar si el logo se cargó o no
  const [timelineEventsWithLoadStatus, setTimelineEventsWithLoadStatus] = useState(initialTimelineEvents.map(event => ({ ...event, logoLoaded: true })));

  // Función para manejar el error de carga de la imagen del logo
  const handleLogoError = (index) => {
    setTimelineEventsWithLoadStatus(prevEvents =>
      prevEvents.map((event, i) =>
        i === index ? { ...event, logoLoaded: false } : event
      )
    );
  };

  return (
    <section id="trayectoria" className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white text-center p-12 relative z-10">
      <h2 className="text-5xl md:text-7xl font-bold mb-12">Trayectoria</h2>

      <div className="relative max-w-4xl w-full mx-auto">
        {/* Línea vertical central de la línea de tiempo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 h-full rounded-full hidden md:block"></div>

        {timelineEventsWithLoadStatus.map((event, index) => (
          <div
            key={index}
            className={`mb-8 flex items-center w-full ${
              index % 2 === 0 ? 'md:justify-start' : 'md:justify-end' // Alterna izquierda/derecha
            }`}
          >
            {/* Contenido del evento (lado izquierdo para pares, derecho para impares) */}
            <div
              className={`w-full md:w-1/2 p-4 rounded-lg shadow-xl bg-gray-800 bg-opacity-70 transform hover:scale-105 transition-transform duration-300
                ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}
            >
              <h3 className="text-2xl font-semibold text-blue-300 mb-2 flex items-center justify-center md:justify-start">
                {/* Mostrar el logo si se cargó, si no, mostrar el icono de Lucide */}
                {event.logoLoaded && event.logo ? (
                  <img
                    src={event.logo}
                    alt={`${event.title} logo`}
                    className="w-8 h-8 mr-2 object-contain"
                    onError={() => handleLogoError(index)}
                  />
                ) : (
                  event.icon // Fallback al icono de Lucide si el logo no carga o no existe
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

            {/* Círculo del nodo en la línea de tiempo (solo visible en desktop) */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-400 rounded-full items-center justify-center border-4 border-blue-800 z-10">
              {/* Mostrar el logo en el círculo también si se cargó, si no, el icono de Lucide */}
              {event.logoLoaded && event.logo ? (
                <img
                  src={event.logo}
                  alt={`${event.title} logo`}
                  className="w-5 h-5 object-contain" // Tamaño más pequeño para el círculo
                  onError={() => handleLogoError(index)} // Reutiliza el manejador de errores
                />
              ) : (
                React.cloneElement(event.icon, { size: 18, className: 'text-white' }) // Fallback
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
