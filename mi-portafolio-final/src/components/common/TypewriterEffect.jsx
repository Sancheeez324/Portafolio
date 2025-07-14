// src/components/TypewriterEffect.jsx
import React, { useState, useEffect, useRef } from 'react';

const TypewriterEffect = ({
  phrases = [], // Array de frases a escribir y borrar)
  typingSpeed = 100, // Velocidad de escritura (ms por caracter)
  deletingSpeed = 50, // Velocidad de borrado (ms por caracter)
  pauseBetween = 1500, // Pausa entre frases (ms)
  loop = true, // Si la animación debe repetirse indefinidamente
  className = "", // Clases CSS para el contenedor del texto
  cursorColor = '#60A5FA', // Color del cursor
}) => {
  const [displayedText, setDisplayedText] = useState(''); // El texto que se muestra actualmente
  const [phraseIndex, setPhraseIndex] = useState(0); // Índice de la frase actual en el array
  const [charIndex, setCharIndex] = useState(0); // Índice del caracter actual dentro de la frase
  const [isDeleting, setIsDeleting] = useState(false); // Si estamos borrando o escribiendo
  const [showCursor, setShowCursor] = useState(true); // Visibilidad del cursor

  const timeoutRef = useRef(null); // Referencia para limpiar los timeouts

  // Efecto principal para la lógica de escritura/borrado
  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        // Modo borrado
        setDisplayedText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);

        if (charIndex === 0) {
          // Si ya borramos toda la frase
          setIsDeleting(false); // Cambiamos a modo escritura
          setPhraseIndex(prev => (prev + 1) % phrases.length); // Pasamos a la siguiente frase
          // Pausa antes de empezar a escribir la siguiente frase
          timeoutRef.current = setTimeout(handleTyping, pauseBetween);
        } else {
          // Sigue borrando
          timeoutRef.current = setTimeout(handleTyping, deletingSpeed);
        }
      } else {
        // Modo escritura
        setDisplayedText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);

        if (charIndex === currentPhrase.length) {
          // Si ya escribimos toda la frase
          setIsDeleting(true); // Cambiamos a modo borrado
          // Pausa antes de empezar a borrar
          timeoutRef.current = setTimeout(handleTyping, pauseBetween);
        } else {
          // Sigue escribiendo
          timeoutRef.current = setTimeout(handleTyping, typingSpeed);
        }
      }
    };

    // Efecto para el parpadeo del cursor
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500); // Parpadea cada 500ms

    // Inicia el efecto de escritura/borrado
    timeoutRef.current = setTimeout(handleTyping, typingSpeed);

    // Función de limpieza al desmontar el componente o al cambiar dependencias
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      clearInterval(cursorInterval);
    };
  }, [phraseIndex, charIndex, isDeleting, phrases, typingSpeed, deletingSpeed, pauseBetween]); // Dependencias del efecto

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <span>{displayedText}</span>
      <span
        className="typing-cursor"
        style={{
          display: 'inline-block',
          width: '3px',
          height: '1.2em', // Altura relativa al tamaño de fuente del texto
          backgroundColor: cursorColor,
          marginLeft: '5px',
          verticalAlign: 'middle',
          visibility: showCursor ? 'visible' : 'hidden', // Controlado por el estado showCursor
        }}
      ></span>
    </div>
  );
};

export default TypewriterEffect;
