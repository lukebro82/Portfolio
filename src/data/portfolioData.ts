import jsLogo from "../assets/javascript.svg";
import tsLogo from "../assets/typescript-svgrepo-com.svg";
import reactLogo from "../assets/react.svg";
import nodeLogo from "../assets/node-js.svg";
import expressLogo from "../assets/express-svgrepo-com.svg";
import pgLogo from "../assets/postgresql.svg";
import mongoLogo from "../assets/mongodb-icon.svg";
import zustandLogo from "../assets/zustand.svg";
import next from "../assets/next.svg";
import firebase from "../assets/firebase2.svg";
import tailwind from "../assets/tailwind.svg";
import redux from "../assets/redux-logo.svg";

import argprograma from "../assets/certificadoargprog.jpg";
import devtallesReact from "../assets/certificatedevtalles.jpg";

export interface TechLogo {
  src: string;
  alt: string;
  invert?: boolean;
  category: "Frontend" | "Backend & DB" | "Estado & Cloud";
}

export interface Project {
  title: string;
  role: string;
  stack: string[];
  description: string;
  github: string;
  web: string;
  featured?: boolean;
}

export interface Study {
  title: string;
  place: string;
  date: string;
  description: string;
  img: string;
}

export const TECH_LOGOS: TechLogo[] = [
  { src: tsLogo, alt: "TypeScript", category: "Frontend" },
  { src: jsLogo, alt: "JavaScript", category: "Frontend" },
  { src: reactLogo, alt: "React", category: "Frontend" },
  { src: next, alt: "Next.js", invert: true, category: "Frontend" },
  { src: tailwind, alt: "Tailwind CSS", category: "Frontend" },
  { src: nodeLogo, alt: "Node.js", category: "Backend & DB" },
  { src: expressLogo, alt: "Express", invert: true, category: "Backend & DB" },
  { src: pgLogo, alt: "PostgreSQL", category: "Backend & DB" },
  { src: mongoLogo, alt: "MongoDB", category: "Backend & DB" },
  { src: firebase, alt: "Firebase", category: "Estado & Cloud" },
  { src: zustandLogo, alt: "Zustand", category: "Estado & Cloud" },
  { src: redux, alt: "Redux", category: "Estado & Cloud" },
];

export const PROJECTS: Project[] = [
  {
    title: "Pet-Finder",
    role: "Fullstack App",
    stack: ["TypeScript", "React", "Vite", "Zustand", "Express", "PostgreSQL"],
    description:
      "Plataforma integral para reportar y geolocalizar mascotas perdidas. Incluye autenticación de usuarios, gestión de estado global con Zustand y API REST con PostgreSQL.",
    github: "https://github.com/lukebro82/petfinder-react",
    web: "https://petfinder-react-front.onrender.com",
    featured: true,
  },
  {
    title: "Mutual 30 de Octubre",
    role: "Sitio Institucional en Producción",
    stack: ["JavaScript", "HTML5", "CSS3", "Parcel"],
    description:
      "Sitio web oficial en producción para la Mutual 30 de Octubre, optimizado para acceso rápido a servicios, beneficios e información para asociados.",
    github: "https://github.com/lukebro82/mutual",
    web: "https://mutual30.com.ar",
    featured: true,
  },
  {
    title: "WordClue",
    role: "Juego Web",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS 4"],
    description:
      "WordClue es un juego de palabras en español, al estilo Wordle. Tenés que adivinar una palabra oculta de 5, 6 o 7 letras en un máximo de 6 intentos.",
    github: "https://github.com/lukebro82/wordclue",
    web: "https://wordclue.vercel.app/",
  },
  {
    title: "Heroes App",
    role: "Frontend SPA",
    stack: ["React", "React Router", "Bootstrap"],
    description:
      "Aplicación web interactiva con rutas protegidas y filtrado dinámico para explorar fichas de héroes de Marvel y DC.",
    github: "https://github.com/lukebro82/Heroes-App",
    web: "https://heroes-searchapp.netlify.app",
  },
  {
    title: "Gif App",
    role: "Frontend App",
    stack: ["React", "Vite", "REST API"],
    description:
      "Buscador ágil de GIFs conectado a la API de Giphy, con historial de búsquedas y carga optimizada de recursos.",
    github: "https://github.com/lukebro82/gif-app",
    web: "https://gif-app-luke.netlify.app/",
  },
  {
    title: "Ahorcado Game",
    role: "Interactive Game",
    stack: ["TypeScript", "React", "Vite"],
    description:
      "Versión web interactiva del clásico juego del ahorcado desarrollada con tipado estricto en TypeScript y manejo de estados en React.",
    github: "https://github.com/lukebro82/ahorcado-game",
    web: "https://ahorcado-luke.netlify.app/",
  },
];

export const STUDIES: Study[] = [
  {
    title: "Software Developer (Nivel 3)",
    place: "APX",
    date: "2025",
    description:
      "Nivel 3 y etapa final de la carrera de Software Developer enfocada en arquitectura fullstack y despliegues en producción.",
    img: "https://res.cloudinary.com/apx/image/upload/w_1200/co_white,g_south_east,l_text:Arial_18_bold:diciembre%202025,x_411,y_150/co_white,g_north,l_text:Arial_60_bold:Lucas%20Emanuel%20Ricci,y_240/f_auto,q_auto/v1/apx2/certificates/web-2_-_certificate_rk3uwu.png",
  },
  {
    title: "React: De cero a experto",
    place: "DevTalles",
    date: "2025",
    description:
      "Especialización en React desde sus fundamentos hasta patrones avanzados, testing, hooks personalizados, manejo de estado y despliegues.",
    img: devtallesReact,
  },
  {
    title: "Software Developer (Nivel 2)",
    place: "APX",
    date: "2024",
    description:
      "Desarrollo web frontend y backend, consumo de APIs REST, bases de datos y arquitectura cliente-servidor.",
    img: "https://res.cloudinary.com/apx/image/upload/w_1200/co_white,g_south_east,l_text:Arial_18_bold:agosto%202024,x_411,y_150/co_white,g_north,l_text:Arial_60_bold:Lucas%20Emanuel%20Ricci,y_240/f_auto,q_auto/v1/apx2/certificates/web-1_-_certificate_xgda8n.png",
  },
  {
    title: "Software Developer (Nivel 0 y 1)",
    place: "APX",
    date: "2025",
    description:
      "Fundamentos de ingeniería de software, algoritmos, estructuras de datos, Git y programación con JavaScript y TypeScript.",
    img: "https://res.cloudinary.com/apx/image/upload/w_1200/co_white,g_south_east,l_text:Arial_18_bold:agosto%202025,x_411,y_150/co_white,g_north,l_text:Arial_60_bold:Lucas%20Emanuel%20Ricci,y_240/f_auto,q_auto/v1/apx2/certificates/dev-1_-_certificate_goaarb.png",
  },
  {
    title: "#SéProgramar",
    place: "Argentina Programa 4.0",
    date: "2022",
    description:
      "Curso inicial de fundamentos de la programación, lógica computacional, JavaScript y Ruby.",
    img: argprograma,
  },
];
