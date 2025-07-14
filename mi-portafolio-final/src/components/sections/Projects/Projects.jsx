// src/components/sections/Projects/Projects.jsx
import React from 'react';
// Importa íconos de Lucide React para los proyectos (ej. para enlaces a GitHub, demo)
import { Github, ExternalLink } from 'lucide-react';

// Importa las imágenes locales de tus proyectos
import portafolioImage from '../../../assets/Proyectos/portafolio.png';
import riseOfHeroesImage from '../../../assets/Proyectos/rise_of_heroes.jpg';
import worldMapsImage from '../../../assets/Proyectos/world_maps.png';


const Projects = () => {
  // Array de proyectos de ejemplo
  const projects = [
    {
      title: 'Proyecto de Portafolio Personal',
      description: 'Desarrollo de un portafolio web interactivo utilizando React, Vite y Tailwind CSS, con animaciones de texto y fondo dinámico.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'GSAP', 'Ogl'],
      githubLink: 'https://github.com/Sancheeez324/Portafolio', // Enlace actualizado
      demoLink: '#',
      image: portafolioImage,
    },
    {
      title: 'Sistema de Evaluación de Riesgos Laborales (Simotec)',
      description: 'Desarrollo de un sistema web con backend serverless (AWS Lambda, Node.js) y frontend SPA (React con Vite) para evaluaciones psicológicas y simulaciones VR.',
      technologies: ['React', 'Vite', 'Node.js', 'AWS Lambda', 'AWS RDS', 'MySQL', 'JWT'],
      githubLink: 'https://github.com/Sancheeez324/Proyecto-SIMOTEC', // Enlace actualizado
      demoLink: '#',
      image: 'https://placehold.co/400x250/0d1117/e6edf3?text=Simotec', // Placeholder de imagen (Si tienes una imagen de Simotec, cámbiala aquí)
    },
    {
      title: 'Videojuego 3D: Rise of Heroes',
      description: 'Proyecto de título para el desarrollo de un videojuego 3D educativo sobre la guerra del Pacífico, utilizando Unity/C# y diseño 3D en Blender.',
      technologies: ['Unity', 'C#', 'Blender', 'Game Development'],
      githubLink: null,
      demoLink: '#', // Puedes poner un enlace a un video de YouTube (no listado) aquí si lo deseas.
      image: riseOfHeroesImage,
    },
    {
      title: 'App de Mapas Históricos Interactivos',
      description: 'Aplicación web educativa desarrollada con React, que permite explorar civilizaciones históricas de distintos continentes a través de una interfaz visual, interactiva y multilingüe. Diseñada como herramienta didáctica para estudiantes de enseñanza básica y media.',
      technologies: ['React', 'Vite', 'CSS', 'JavaScript', 'HTML', 'Despliegue'],
      githubLink: 'https://github.com/Sancheeez324/world_history_maps_react', // Enlace actualizado
      demoLink: '#',
      image: worldMapsImage,
    },
  ];

  return (
    // Sección principal "Proyectos" con ID para la navegación
    <section id="proyectos" className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white text-center p-12 relative z-10">
      {/* Título de la sección */}
      <h2 className="text-5xl md:text-7xl font-bold mb-12">Proyectos</h2>

      {/* Contenedor de las tarjetas de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-xl flex flex-col transform hover:scale-105 transition-transform duration-300">
            {/* Imagen del proyecto */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            {/* Título del proyecto */}
            <h3 className="text-3xl font-semibold mb-2 text-blue-300">{project.title}</h3>
            {/* Descripción del proyecto */}
            <p className="text-lg text-gray-300 mb-4 flex-grow">{project.description}</p>
            {/* Tecnologías usadas */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            {/* Enlaces a GitHub y Demo */}
            <div className="flex justify-center space-x-4 mt-auto">
              {project.githubLink && ( // Solo muestra el botón si githubLink existe
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-blue-400 transition-colors duration-300"
                  aria-label={`Ver código de ${project.title} en GitHub`}
                >
                  <Github size={24} className="mr-2" />
                  GitHub
                </a>
              )}
              {project.demoLink && project.demoLink !== '#' && ( // Solo muestra el botón si demoLink existe y no es '#'
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-blue-400 transition-colors duration-300"
                  aria-label={`Ver demo de ${project.title}`}
                >
                  <ExternalLink size={24} className="mr-2" />
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
