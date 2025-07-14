// src/App.jsx
// Importa los hooks de React necesarios: useState para manejar el estado y useEffect para efectos secundarios.
import React, { useState, useEffect } from 'react';
// Importa los estilos CSS principales de la aplicación. En proyectos Vite, suele ser index.css.
import './index.css';
// Importa el componente Threads, que crea el fondo animado de ondas.
import Threads from './components/Threads';
// Importa el componente SplitText, que anima el texto letra por letra o palabra por palabra.
import SplitText from './components/SplitText';

// Define el componente principal de la aplicación, App.
function App() {
  // Define un estado para controlar la visibilidad del cursor de escritura.
  const [showCursor, setShowCursor] = useState(false);
  // Define el texto para la sección de la profesión. ¡Recuerda cambiarlo con tu información!
  const professionText = "software engineer apasionado por crear experiencias digitales."; // <-- ¡CAMBIA ESTE TEXTO CON TU PROFESIÓN!

  // Esta función se ejecuta cuando la animación del título principal ("Hola, soy [Tu Nombre]") ha terminado.
  const handleTitleAnimationComplete = () => {
    console.log('El título principal ha terminado de animarse!');
    // Una vez que el título principal termina, activamos la visibilidad del cursor.
    setShowCursor(true);
  };

  // Este hook useEffect maneja la lógica del parpadeo del cursor.
  useEffect(() => {
    let cursorInterval; // Variable para almacenar el ID del intervalo del cursor.
    if (showCursor) {
      // Si showCursor es true, iniciamos un intervalo para hacer que el cursor parpadee.
      cursorInterval = setInterval(() => {
        const cursorElement = document.getElementById('typing-cursor'); // Obtiene el elemento del cursor por su ID.
        if (cursorElement) {
          // Alterna la visibilidad del cursor entre 'hidden' y 'visible'.
          cursorElement.style.visibility = cursorElement.style.visibility === 'hidden' ? 'visible' : 'hidden';
        }
      }, 500); // El cursor parpadea cada 500 milisegundos (medio segundo).
    }

    // Esta es la función de limpieza del efecto. Se ejecuta cuando el componente se desmonta
    // o cuando showCursor cambia (para limpiar el intervalo anterior si se reinicia).
    return () => {
      if (cursorInterval) {
        clearInterval(cursorInterval); // Limpia el intervalo para evitar fugas de memoria.
      }
    };
  }, [showCursor]); // El efecto se re-ejecuta solo cuando el valor de showCursor cambia.

  // La estructura de la interfaz de usuario de tu aplicación.
  return (
    <div className="App">
      {/* Contenedor para el fondo animado (Threads). Se fija a la pantalla completa. */}
      <div style={{
        position: 'fixed', // Posiciona el elemento de forma fija en la ventana.
        top: 0,            // Lo alinea en la parte superior.
        left: 0,           // Lo alinea en la parte izquierda.
        width: '100%',     // Ocupa el 100% del ancho de la ventana.
        height: '100%',    // Ocupa el 100% de la altura de la ventana.
        zIndex: -1,        // Lo envía al fondo, detrás de todo el contenido.
      }}>
        <Threads
          amplitude={1.5}             // Intensidad de las ondas.
          distance={0}                // Distancia entre las ondas.
          enableMouseInteraction={true} // Permite que las ondas reaccionen al movimiento del mouse.
          color={[0.1, 0.4, 0.7]}     // Color de las ondas: un azul eléctrico.
        />
      </div>

      {/* Sección Hero (Inicio) - Contiene el título y la profesión animada. */}
      <div className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white text-center p-12">
        {/*
          min-h-screen: Asegura que la sección ocupe al menos el 100% de la altura de la ventana.
          flex flex-col: Usa Flexbox para organizar los elementos en una columna.
          justify-center items-center: Centra el contenido tanto vertical como horizontalmente.
          bg-transparent: Hace el fondo de esta sección transparente para que se vea el fondo de Threads.
          text-white: Establece el color del texto a blanco (clase de Tailwind).
          text-center: Centra el texto horizontalmente.
          p-12: Añade un padding de 3rem (48px) alrededor del contenido.
        */}
        {/* Título principal con efecto de animación de aparición (SplitText). */}
        <SplitText
          text="Hola, soy [Tu Nombre]" // <-- ¡CAMBIA ESTE TEXTO CON TU NOMBRE!
          // Clases de Tailwind para el tamaño del texto:
          // text-7xl para pantallas pequeñas (móviles)
          // md:text-9xl para pantallas medianas y grandes (escritorio)
          className="text-7xl md:text-9xl font-bold mb-4"
          delay={130} // Retraso en milisegundos entre la animación de cada letra.
          duration={1.2} // Duración de la animación individual de cada letra en segundos.
          ease="power3.out" // Función de suavizado para la animación.
          splitType="chars" // Anima el texto caracter por caracter.
          from={{ opacity: 0, y: 40 }} // Estado inicial de la animación (transparente, 40px hacia abajo).
          to={{ opacity: 1, y: 0 }} // Estado final de la animación (opaco, en su posición original).
          threshold={0.1} // Porcentaje del elemento visible para disparar la animación (ScrollTrigger).
          rootMargin="-100px" // Ajuste del margen para el ScrollTrigger.
          textAlign="center" // Alinea el texto al centro.
          onLetterAnimationComplete={handleTitleAnimationComplete} // Llama a la función cuando la animación del título termina.
        />

        {/* Contenedor para el texto de la profesión y el cursor parpadeante. */}
        <div className="inline-flex items-center justify-center mt-4 max-w-full flex-wrap">
          {/*
            inline-flex: Permite que el texto y el cursor estén en la misma línea y usen Flexbox.
            items-center: Alinea los elementos verticalmente al centro.
            justify-center: Centra los elementos horizontalmente.
            mt-4: Margen superior de 1rem (16px).
            max-w-full: Asegura que el contenedor no exceda el ancho de su padre.
            flex-wrap: Permite que los elementos se envuelvan a la siguiente línea si no hay espacio.
          */}
          {/* Subtítulo de profesión con efecto de escritura de código (SplitText). */}
          <SplitText
            text={professionText} // Usa la variable con el texto de la profesión.
            // Clases de Tailwind para el tamaño del texto:
            // text-4xl para pantallas pequeñas (móviles)
            // md:text-6xl para pantallas medianas y grandes (escritorio)
            className="text-4xl md:text-6xl max-w-full"
            delay={20} // Retraso muy pequeño entre la animación de cada caracter (simula escritura rápida).
            duration={0.1} // Duración muy corta para la animación de cada caracter.
            ease="none" // Sin suavizado, para un efecto más "seco" y directo de escritura.
            splitType="chars" // Anima el texto caracter por caracter.
            from={{ opacity: 0 }} // Empieza transparente.
            to={{ opacity: 1 }} // Termina opaco.
            threshold={0.2} // Porcentaje del elemento visible para disparar la animación.
            rootMargin="-50px" // Ajuste del margen para el ScrollTrigger.
            textAlign="center" // Alinea el texto al centro.
          />
          {/* Cursor parpadeante. Solo se muestra si el estado showCursor es true. */}
          {showCursor && (
            <span
              id="typing-cursor" // ID para poder manipularlo con JavaScript (en el useEffect).
              style={{
                display: 'inline-block', // Para que el span se comporte como un bloque pero en línea.
                width: '3px',            // Ancho del cursor.
                height: '1.2em',         // Altura del cursor (relativa al tamaño de la fuente del texto).
                backgroundColor: '#e6edf3', // Color del cursor (mismo color que el texto).
                marginLeft: '5px',       // Espacio entre el texto y el cursor.
                verticalAlign: 'middle', // Alinea el cursor verticalmente con la línea media del texto.
              }}
            ></span>
          )}
        </div>
      </div>

      {/* Sección de prueba 2: Una sección adicional para probar el scroll y el fondo fijo. */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center bg-transparent text-white p-12">
        {/*
          relative z-10: Posición relativa y z-index para estar sobre el fondo.
          min-h-screen: Ocupa al menos el 100% de la altura de la ventana.
          flex flex-col justify-center items-center: Centra el contenido.
          bg-transparent: Fondo transparente.
          text-white: Texto blanco.
          p-12: Padding.
        */}
        <h2 className="text-4xl font-bold mb-4">Sección de Prueba - Haz Scroll</h2>
        <p className="text-xl">El fondo animado debería seguir viéndose detrás.</p>
      </div>

    </div>
  );
}

export default App; // Exporta el componente App para que pueda ser usado en index.jsx.
