// src/components/sections/Certificates/Certificates.jsx
import React from 'react';
import { Award, GraduationCap } from 'lucide-react'; // Iconos para certificados (ExternalLink ya no es necesario aquí)
import BlurText from '../../common/BlurText.jsx'; // Importa el componente BlurText

// Importa los logos de tus certificaciones aquí
// ¡REEMPLAZA ESTOS PLACEHOLDERS CON TUS IMÁGENES REALES!
import efsetLogo from '../../../assets/LogosCertificados/efset_logo.png'; // Placeholder para EF SET
import ciscoLogo from '../../../assets/LogosCertificados/cisco_logo.png'; // Placeholder para Cisco

const Certificates = () => {
  const certificatesList = [
    {
      title: 'EF SET English Certificate',
      issuer: 'EF Education First',
      date: '2025',
      level: 'C1 Advanced Level',
      logo: efsetLogo, // Logo de EF SET
      icon: <Award size={40} />, // Icono Lucide como fallback o adorno
    },
    {
      title: 'Cisco CCNA v7 Introducción a Redes',
      issuer: 'Cisco Networking Academy',
      date: '2023',
      level: 'Certificación de Curso',
      logo: ciscoLogo, // Logo de Cisco
      icon: <GraduationCap size={40} />,
    },
    {
      title: 'Introducción a la Ciberseguridad',
      issuer: 'Cisco Networking Academy',
      date: '2025',
      level: 'Certificación de Curso',
      logo: ciscoLogo, // Logo de Cisco
      icon: <Award size={40} />,
    },
    // Agrega más certificados aquí siguiendo el mismo formato
  ];

  return (
    <section id="certificados" className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white text-center p-12 relative z-10">
      {/* Título de la sección con BlurText */}
      <BlurText
        text="Certificados"
        className="text-5xl md:text-7xl font-bold mb-12"
        delay={100}
        animateBy="words"
        direction="top"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {certificatesList.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-xl flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
          >
            {/* Mostrar el logo si está disponible, si no, el icono */}
            {cert.logo ? (
              <img
                src={cert.logo}
                alt={`${cert.issuer} logo`}
                className="w-24 h-24 object-contain mb-4" // Ajusta el tamaño según necesites
              />
            ) : (
              cert.icon // Fallback al icono si no hay logo
            )}
            <h3 className="text-2xl font-semibold mt-4 mb-2 text-blue-300">{cert.title}</h3>
            <p className="text-lg text-gray-300 mb-1">{cert.issuer}</p>
            <p className="text-md text-gray-400 mb-3">{cert.date} - {cert.level}</p>
            {/* El botón "Ver Certificado" y el enlace han sido ELIMINADOS */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
