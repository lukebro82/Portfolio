import { motion } from "motion/react";
import { PROJECTS } from "../data/portfolioData";

export const Proyectos = () => {
  return (
    <section className="flex-1 max-w-6xl mx-auto w-full px-6 py-10 md:py-16 flex flex-col gap-10">
      <div className="flex flex-col gap-3 max-w-2xl">
        <span className="text-xs font-mono text-primary-pink-hover tracking-wider">
          PORTAFOLIO DE TRABAJO
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Mis Proyectos
        </h1>
        <p className="text-slate-400 text-base md:text-lg">
          Aplicaciones fullstack, sitios en producción y proyectos interactivos
          desarrollados con React, TypeScript y Node.js.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((proyecto, index) => (
          <motion.article
            key={proyecto.title}
            className={`rounded-2xl p-6 flex flex-col justify-between border transition-colors ${
              proyecto.featured
                ? "bg-background-secondary border-primary-pink/35 hover:border-primary-pink/60 lg:col-span-1"
                : "bg-background-secondary/80 border-white/10 hover:border-white/25"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.06 }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-slate-400">
                  {proyecto.role}
                </span>
                {proyecto.featured && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-primary-pink/15 text-primary-pink-hover border border-primary-pink/30">
                    Destacado
                  </span>
                )}
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white">
                {proyecto.title}
              </h2>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {proyecto.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {proyecto.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-6 mt-6 border-t border-white/10">
              <a
                href={proyecto.web}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2.5 bg-primary-pink hover:bg-primary-pink-hover text-white font-medium rounded-xl text-sm transition-colors"
              >
                Ver Demo
              </a>
              <a
                href={proyecto.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-medium rounded-xl text-sm transition-colors"
              >
                Código GitHub
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
