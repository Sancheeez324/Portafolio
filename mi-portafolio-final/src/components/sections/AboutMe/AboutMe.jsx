// src/components/sections/AboutMe/AboutMe.jsx
import React, { useState } from 'react';
import { User, Target, Trophy } from 'lucide-react';
import BlurText from '../../common/BlurText.jsx';

import awsLambdaIcon from '../../../assets/FotosHerramientas/amazon_lambda.png';
import awsRdsIcon from '../../../assets/FotosHerramientas/amazon_aurora.png';

const skillGroups = [
  {
    label: 'Frontend',
    color: 'text-blue-400',
    borderColor: 'border-blue-800',
    skills: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    ],
  },
  {
    label: 'Backend',
    color: 'text-green-400',
    borderColor: 'border-green-800',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Strapi', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/strapi/strapi-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    ],
  },
  {
    label: 'DevOps & Cloud',
    color: 'text-orange-400',
    borderColor: 'border-orange-800',
    skills: [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'GitLab CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
      { name: 'AWS Lambda', icon: awsLambdaIcon },
      { name: 'AWS RDS', icon: awsRdsIcon },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    ],
  },
  {
    label: 'Herramientas',
    color: 'text-purple-400',
    borderColor: 'border-purple-800',
    skills: [
      { name: 'Git / GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Unity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
      { name: 'Blender', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
    ],
  },
];

const AboutMe = () => {
  const [failedIcons, setFailedIcons] = useState(new Set());

  const handleImageError = (name) => {
    setFailedIcons(prev => new Set([...prev, name]));
  };

  return (
    <section id="sobre-mi" className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white text-center p-12 relative z-10">
      <BlurText
        text="Sobre Mí"
        className="text-5xl md:text-7xl font-bold mb-12"
        delay={100}
        animateBy="words"
        direction="top"
      />

      {/* Cards principales */}
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
          <Trophy size={48} className="text-blue-400 mb-4" />
          <h3 className="text-3xl font-semibold mb-4">Liderazgo</h3>
          <ul className="text-lg text-gray-300 space-y-3 list-disc list-inside">
            <li>Presidente Centro de Alumnos de Informática PUCV (2022–2024)</li>
            <li>Coordinador Juegos de Ingeniería PUCV (2022)</li>
            <li>Curso de Liderazgo, Universidad Adolfo Ibáñez (2019)</li>
          </ul>
        </div>
      </div>

      {/* Skills agrupadas por categoría */}
      <h3 className="text-4xl font-bold mb-10">Habilidades Técnicas</h3>
      <div className="flex flex-col gap-8 max-w-6xl w-full">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h4 className={`text-xl font-semibold mb-4 text-left ${group.color} border-b ${group.borderColor} pb-2`}>
              {group.label}
            </h4>
            <div className="flex flex-wrap gap-4">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center p-3 bg-gray-800 bg-opacity-70 rounded-lg shadow-md transform hover:scale-110 transition-transform duration-300 w-20"
                >
                  {!failedIcons.has(skill.name) ? (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 mb-2 object-contain"
                      onError={() => handleImageError(skill.name)}
                    />
                  ) : (
                    <span className="w-12 h-12 mb-2 flex items-center justify-center text-xs font-bold text-gray-400 border border-gray-600 rounded-md">
                      {skill.name.substring(0, 3)}
                    </span>
                  )}
                  <span className="text-xs font-medium text-gray-200 text-center leading-tight">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Idiomas */}
      <h3 className="text-4xl font-bold mt-16 mb-8">Idiomas</h3>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg flex items-center gap-4 min-w-52">
          <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold shrink-0">
            ES
          </div>
          <div className="text-left">
            <p className="font-semibold text-white text-lg">Español</p>
            <p className="text-gray-400 text-sm">Nativo</p>
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg flex items-center gap-4 min-w-52">
          <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold shrink-0">
            EN
          </div>
          <div className="text-left">
            <p className="font-semibold text-white text-lg">Inglés</p>
            <p className="text-gray-400 text-sm">C1 Advanced · EF SET</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
