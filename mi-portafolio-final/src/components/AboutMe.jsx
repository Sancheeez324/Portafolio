// src/components/AboutMe.jsx
import React, { useState } from 'react';
import { User, Target, Briefcase } from 'lucide-react';

// Importa tus imágenes locales aquí para AWS Lambda y AWS RDS
// ¡Asegúrate de que los nombres de los archivos y las extensiones coincidan con los que descargaste!
// RUTA ACTUALIZADA A src/assets/FotosHerramientas
import awsLambdaIcon from '../assets/FotosHerramientas/amazon_lambda.png'; // Icono de AWS Lambda
import awsRdsIcon from '../assets/FotosHerramientas/amazon_aurora.png';     // Icono de AWS RDS (Aurora)

const AboutMe = () => {
  // Array de habilidades con nombres e íconos
  const initialSkills = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Git/GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    // ¡Usando las importaciones locales para AWS Lambda y AWS RDS con las rutas y nombres de archivo correctos!
    { name: 'AWS Lambda', icon: awsLambdaIcon },
    { name: 'AWS RDS', icon: awsRdsIcon },
    { name: 'Serverless', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' }, // Icono genérico de AWS para Serverless
    { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  ];

  const [skillsWithLoadStatus, setSkillsWithLoadStatus] = useState(initialSkills.map(skill => ({ ...skill, loaded: true })));

  const handleImageError = (index) => {
    setSkillsWithLoadStatus(prevSkills =>
      prevSkills.map((skill, i) =>
        i === index ? { ...skill, loaded: false } : skill
      )
    );
  };

  return (
    <section id="sobre-mi" className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white text-center p-12 relative z-10">
      <h2 className="text-5xl md:text-7xl font-bold mb-12">Sobre Mí</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mb-16">
        <div className="bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-xl flex flex-col items-center text-left transform hover:scale-105 transition-transform duration-300">
          <User size={48} className="text-blue-400 mb-4" />
          <h3 className="text-3xl font-semibold mb-4">¿Quién Soy?</h3>
          <p className="text-lg text-gray-300">
            Ingeniero de Ejecución Informática titulado, con experiencia en desarrollo de sistemas fullstack, automatización de procesos, despliegue en la nube (AWS) y manejo de bases de datos.
          </p>
        </div>

        <div className="bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-xl flex flex-col items-center text-left transform hover:scale-105 transition-transform duration-300">
          <Target size={48} className="text-blue-400 mb-4" />
          <h3 className="text-3xl font-semibold mb-4">Mi Objetivo</h3>
          <p className="text-lg text-gray-300">
            Busco aportar al desarrollo tecnológico de la industria desde la excelencia técnica y la mejora continua. Me apasiona crear soluciones elegantes para problemas complejos.
          </p>
        </div>

        <div className="bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-xl flex flex-col items-center text-left transform hover:scale-105 transition-transform duration-300">
          <Briefcase size={48} className="text-blue-400 mb-4" />
          <h3 className="text-3xl font-semibold mb-4">Mi Perfil</h3>
          <p className="text-lg text-gray-300">
            Comprometido, analítico y con habilidades de liderazgo. Me caracterizo por mi capacidad para adaptarme rápidamente a nuevos entornos de trabajo y tecnologías, con atención al detalle y compromiso con la entrega de productos de alta calidad.
          </p>
        </div>
      </div>

      <h3 className="text-4xl font-bold mb-8">Mis Habilidades Técnicas</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 gap-6 max-w-6xl w-full">
        {skillsWithLoadStatus.map((skill, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-gray-800 bg-opacity-70 rounded-lg shadow-md transform hover:scale-110 transition-transform duration-300">
            {skill.loaded ? (
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-2 object-contain"
                onError={() => handleImageError(index)}
              />
            ) : (
              <span className="w-16 h-16 mb-2 flex items-center justify-center text-xl font-bold text-gray-400 border border-gray-600 rounded-md">
                {skill.name.substring(0, 3)}
              </span>
            )}
            <span className="text-sm font-medium text-gray-200">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
