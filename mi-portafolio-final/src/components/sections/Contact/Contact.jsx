// src/components/sections/Contact/Contact.jsx
import React from 'react'; // Ya no necesitamos useState si Formspree maneja todo directamente
import { Mail, MapPin, Linkedin } from 'lucide-react';
import BlurText from '../../common/BlurText.jsx';

import myPhoto from '../../../assets/FotoYo/yo.jpg';

const Contact = () => {
  return (
    <section id="contacto" className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white text-center p-12 relative z-10">
      {/* Título de la sección con BlurText */}
      <BlurText
        text="Contacto"
        className="text-5xl md:text-7xl font-bold mb-12"
        delay={100}
        animateBy="words"
        direction="top"
      />

      <div className="flex flex-col md:flex-row gap-12 max-w-5xl w-full">
        {/* Información de Contacto */}
        <div className="md:w-1/2 bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-xl flex flex-col items-center justify-center text-left">
          <h3 className="text-3xl font-semibold mb-6 text-blue-300">¡Hablemos!</h3>
          <img
            src={myPhoto}
            alt="Pablo Sánchez"
            className="w-48 h-48 rounded-full object-cover mb-8 shadow-lg border-4 border-blue-400 transform hover:scale-110 transition-transform duration-300"
          />
          <p className="text-lg text-gray-300 mb-4">
            Estoy abierto a nuevas oportunidades y colaboraciones. No dudes en contactarme.
          </p>
          <div className="space-y-4 text-left w-full">
            <div className="flex items-center text-lg text-gray-200">
              <Mail size={24} className="text-blue-400 mr-3" />
              <a
                href="mailto:pablo.sanchez.m2002@gmail.com"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                pablo.sanchez.m2002@gmail.com
              </a>
            </div>
            <div className="flex items-center text-lg text-gray-200">
              <Linkedin size={24} className="text-blue-400 mr-3" />
              <a
                href="https://www.linkedin.com/in/pablo-sánchez-234702318/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center text-lg text-gray-200">
              <MapPin size={24} className="text-blue-400 mr-3" />
              <span>Quilpué, Valparaíso, Chile</span>
            </div>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div className="md:w-1/2 bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-xl text-left">
          <h3 className="text-3xl font-semibold mb-6 text-blue-300">Envíame un Mensaje</h3>
         
          <form action="https://formspree.io/f/mwpqedbv" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-200 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name" // ¡IMPORTANTE! El atributo 'name' es crucial para Formspree
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="_replyto" // ¡IMPORTANTE! Usa '_replyto' para que Formspree use este email como remitente
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-lg font-medium text-gray-200 mb-2">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject" // ¡IMPORTANTE! El atributo 'name' es crucial para Formspree
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-200 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message" // ¡IMPORTANTE! El atributo 'name' es crucial para Formspree
                rows="5"
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold transition-colors duration-300 shadow-lg transform hover:scale-105 hover:bg-blue-700"
            >
              Enviar Mensaje
            </button>

            {/* Estos mensajes de estado ya no se mostrarán con Formspree directo,
                Formspree redirige a una página de éxito o error. */}
            {/* {submissionStatus === 'success' && ( ... )} */}
            {/* {submissionStatus === 'error' && ( ... )} */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
