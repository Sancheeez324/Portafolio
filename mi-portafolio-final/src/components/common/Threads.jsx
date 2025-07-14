// src/components/common/Threads.jsx
import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle, Color } from "ogl";
import "./Threads.css"; 

const vertexShader = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0, 1);
  }
`;

const fragmentShader = `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uAmplitude;
  uniform float uDistance;

  // Función para generar ruido (perlin noise simplificado)
  float noise(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  // ¡La definición de la función smoothstep personalizada ha sido ELIMINADA!
  // float smoothstep(float edge0, float edge1, float x) {
  //     x = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
  //     return x * x * (3.0 - 2.0 * x);
  // }

  void main() {
      vec2 uv = gl_FragCoord.xy / uResolution;
      uv.y = 1.0 - uv.y; // Invertir el eje Y si es necesario

      // Ajuste de la posición del ratón para que coincida con el rango de UV [0,1]
      vec2 mouseUV = uMouse / uResolution;
      mouseUV.y = 1.0 - mouseUV.y; // Invertir el eje Y del ratón también

      // Calcular la distancia al ratón
      float distToMouse = distance(uv, mouseUV);

      // Crear un efecto de onda que se propaga desde el ratón
      // uDistance controla la velocidad de propagación
      // uAmplitude controla la intensidad de la onda
      float wave = sin(distToMouse * 20.0 - uTime * uDistance) * uAmplitude;
      // Ahora usamos la función smoothstep incorporada de GLSL
      wave = smoothstep(-0.5, 0.5, wave); // Suaviza la onda

      // Color base (azul oscuro)
      vec3 color = vec3(0.1, 0.4, 0.7); // Un azul eléctrico

      // Añadir un brillo en el centro de la onda
      float glow = 0.0;
      if (distToMouse < 0.2) { // Área de influencia del brillo
          glow = smoothstep(0.2, 0.0, distToMouse); // Más brillo cerca del ratón
      }
      color += glow * vec3(0.3, 0.6, 1.0); // Añade un brillo azul claro

      // Añadir un patrón de líneas sutiles
      float lines = sin(uv.y * 100.0 + uTime * 0.1) * 0.05; // Líneas horizontales suaves
      color += lines * vec3(0.05); // Oscurece/aclara sutilmente

      // Aplicar la onda al color final
      color += wave * vec3(0.1, 0.2, 0.3); // La onda oscurece/aclara el color base

      gl_FragColor = vec4(color, 1.0);
  }
`;

const Threads = ({ amplitude, distance, enableMouseInteraction, color }) => {
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);
  const glRef = useRef(null);
  const programRef = useRef(null);
  const meshRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 1. Setup Renderer
    rendererRef.current = new Renderer({
      canvas,
      width: window.innerWidth,
      height: window.innerHeight,
      alpha: true, // Permite transparencia para que el fondo CSS se vea
    });
    glRef.current = rendererRef.current.gl;
    glRef.current.clearColor(0, 0, 0, 0); // Fondo completamente transparente

    // 2. Create Geometry (a simple plane that covers the screen)
    const geometry = new Triangle(glRef.current);

    // 3. Create Program (shaders)
    programRef.current = new Program(glRef.current, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Color(window.innerWidth, window.innerHeight) },
        uMouse: { value: new Color(mouseRef.current.x, mouseRef.current.y) },
        uAmplitude: { value: amplitude || 0.5 },
        uDistance: { value: distance || 1.0 },
        uColor: { value: new Color(...(color || [0.1, 0.4, 0.7])) },
      },
    });

    // 4. Create Mesh
    meshRef.current = new Mesh(glRef.current, { geometry, program: programRef.current });

    // Handle Resize
    const handleResize = () => {
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      programRef.current.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Handle Mouse Move
    const handleMouseMove = (e) => {
      if (enableMouseInteraction) {
        mouseRef.current.x = e.clientX;
        mouseRef.current.y = e.clientY;
        programRef.current.uniforms.uMouse.value.set(e.clientX, e.clientY);
      }
    };
    if (enableMouseInteraction) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Animation Loop
    let lastTime = 0;
    const animate = (time) => {
      const deltaTime = (time - lastTime) * 0.001; // Convert to seconds
      lastTime = time;

      programRef.current.uniforms.uTime.value += deltaTime; // Increment time uniform

      rendererRef.current.render({ scene: meshRef.current }); // Render the scene
      requestAnimationFrame(animate); // Request next frame
    };

    // Start the animation on window load.
    // Ensure the canvas is ready before starting the animation.
    const startAnimation = () => {
        animate(0); // Start with time 0
    };
    if (document.readyState === 'complete') {
        startAnimation();
    } else {
        window.addEventListener('load', startAnimation);
    }


    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (enableMouseInteraction) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('load', startAnimation); // Clean up load listener
      // No need to dispose OGL objects explicitly as canvas will be removed
    };
  }, [amplitude, distance, enableMouseInteraction, color]); // Dependencies for useEffect

  return <canvas ref={canvasRef} className="threads-canvas"></canvas>;
};

export default Threads;
