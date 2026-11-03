import { Link } from "react-router";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";
import { TECH_LOGOS } from "../data/portfolioData";

const STACK_CATEGORIES = [
  {
    title: "Frontend",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend & Datos",
    items: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    title: "Estado & Arquitectura",
    items: ["Zustand", "Redux Toolkit", "REST APIs", "Git & Deploy"],
  },
];

export const MainPage = () => {
  return (
    <section className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-6 py-12 md:py-14 gap-14">
      {/* Hero Principal */}
      <motion.div
        className="flex flex-col gap-6 max-w-4xl"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-primary-pink/10 border border-primary-pink/25 w-fit">
          <span className="w-2 h-2 rounded-full bg-primary-pink animate-pulse" />
          <span className="text-xs md:text-sm font-mono text-primary-pink-hover">
            Disponible para nuevos desafíos Fullstack
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-lg md:text-xl font-medium text-slate-300">
            Hola, soy{" "}
            <span className="text-white font-semibold">
              Lucas Emanuel Ricci
            </span>
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Desarrollador <span className="text-primary-pink">Fullstack</span>{" "}
            enfocado en productos web modernos.
          </h1>
        </div>

        <p className="text-slate-300 text-base md:text-xl leading-relaxed max-w-3xl">
          Diseño y desarrollo aplicaciones web completas de punta a punta: desde
          interfaces rápidas y accesibles con{" "}
          <strong className="text-white font-medium">
            React, Next.js y TypeScript
          </strong>{" "}
          hasta APIs escalables y bases de datos con{" "}
          <strong className="text-white font-medium">
            Node.js, Express y PostgreSQL
          </strong>
          .
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            to="/proyectos"
            className="px-6 py-3 rounded-xl bg-primary-pink hover:bg-primary-pink-hover text-white font-semibold text-sm md:text-base transition-colors shadow-lg shadow-primary-pink/20"
          >
            Explorar Proyectos
          </Link>
          <Link
            to="/contacto"
            className="px-6 py-3 rounded-xl bg-background-secondary hover:bg-surface-hover text-slate-200 border border-white/10 hover:border-white/20 font-medium text-sm md:text-base transition-all"
          >
            Contactarme
          </Link>
          <Link
            to="/estudios"
            className="px-4 py-3 text-slate-400 hover:text-white font-medium text-sm md:text-base transition-colors"
          >
            Ver certificaciones →
          </Link>
        </div>
      </motion.div>

      {/* Bloques de Stack por Categoría */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {STACK_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="bg-background-secondary/80 border border-white/10 rounded-2xl p-5 flex flex-col gap-3"
          >
            <h2 className="text-sm font-mono text-primary-pink-hover tracking-wide">
              {category.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs md:text-sm text-slate-200 font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Carrusel de Tecnologías */}
      <div className="pt-2 border-t border-white/10">
        <Marquee
          pauseOnHover={true}
          gradient={false}
          speed={45}
          className="py-3"
        >
          {TECH_LOGOS.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center gap-3 mx-5 md:mx-8 px-4 py-2 rounded-xl bg-background-secondary/60 border border-white/5"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`h-7 w-7 md:h-8 md:w-8 object-contain ${
                  logo.invert ? "invert" : ""
                }`}
              />
              <span className="text-sm font-mono text-slate-300">
                {logo.alt}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
