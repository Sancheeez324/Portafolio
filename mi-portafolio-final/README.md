# Portafolio Personal — Pablo Sánchez

Portafolio web interactivo desarrollado con React + Vite. Presenta mi trayectoria, proyectos y certificaciones como Ingeniero Informático y Desarrollador Full-Stack.

## Tecnologías

- **React 19** + **Vite 7**
- **Tailwind CSS** — estilos utilitarios
- **GSAP** — animaciones de texto (SplitText)
- **Framer Motion** — animaciones de entrada (BlurText)
- **OGL** — fondo animado con WebGL (Threads)
- **Lucide React** — iconografía
- **Formspree** — manejo del formulario de contacto

## Estructura

```
src/
├── components/
│   ├── common/        # SplitText, BlurText, TypewriterEffect, Threads
│   ├── layout/        # Header con nav responsive
│   └── sections/      # AboutMe, Experience, Certificates, Projects, Contact
├── assets/            # Imágenes locales (proyectos, logos, foto)
├── App.jsx
└── index.css
```

## Requisitos

- Node.js 18+
- npm 9+

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build de producción
npm run build

# Previsualizar build de producción
npm run preview
```

## Personalización

| Qué cambiar | Dónde |
|---|---|
| Datos personales y foto | `src/components/sections/AboutMe/AboutMe.jsx` |
| Experiencia laboral/académica | `src/components/sections/Experience/Experience.jsx` |
| Proyectos | `src/components/sections/Projects/Projects.jsx` |
| Certificaciones | `src/components/sections/Certificates/Certificates.jsx` |
| Email de contacto | `src/components/sections/Contact/Contact.jsx` + Formspree |
| Links de redes sociales | `src/components/layout/Header.jsx` |
| Colores del fondo | `src/App.jsx` — prop `color` del componente `Threads` |

## Despliegue

El proyecto está optimizado para desplegarse en **Vercel** o **Netlify**:

```bash
npm run build
# Subir la carpeta /dist
```

## Autor

**Pablo Sánchez** — [GitHub](https://github.com/Sancheeez324) · [LinkedIn](https://www.linkedin.com/in/pablo-s%C3%A1nchez-234702318/)
