import { Link } from "react-router";
import { motion } from "motion/react";
import { TECH_LOGOS, type TechLogo } from "../data/portfolioData";

const CATEGORIES: TechLogo["category"][] = [
  "Frontend",
  "Backend & DB",
  "Estado & Cloud",
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
          <a
            href="/cv-lucas-ricci.pdf"
            download="CV-Lucas-Ricci.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-background-secondary hover:bg-surface-hover text-slate-200 border border-white/10 hover:border-white/20 font-medium text-sm md:text-base transition-all"
          >
            Descargar CV ↓
          </a>
          <Link
            to="/contacto"
            className="px-4 py-3 text-slate-400 hover:text-white font-medium text-sm md:text-base transition-colors"
          >
            Contactarme →
          </Link>
        </div>
      </motion.div>

      {/* Bloques de Stack por Categoría */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {CATEGORIES.map((category) => {
          const items = TECH_LOGOS.filter((logo) => logo.category === category);
          return (
            <div
              key={category}
              className="bg-background-secondary/80 border border-white/10 rounded-2xl p-5 flex flex-col gap-3.5"
            >
              <h2 className="text-sm font-mono text-primary-pink-hover tracking-wide">
                {category}
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {items.map((logo) => (
                  <span
                    key={logo.alt}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs md:text-sm text-slate-200 font-mono"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={`w-4 h-4 md:w-5 md:h-5 object-contain ${
                        logo.invert ? "invert" : ""
                      }`}
                    />
                    {logo.alt}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
