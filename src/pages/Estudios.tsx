import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { STUDIES, type Study } from "../data/portfolioData";

export const Estudios = () => {
  const [selected, setSelected] = useState<Study | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };
    if (selected) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  return (
    <section className="flex-1 max-w-6xl mx-auto w-full px-6 py-10 md:py-16 flex flex-col gap-10">
      <div className="flex flex-col gap-3 max-w-2xl">
        <span className="text-xs font-mono text-primary-pink-hover tracking-wider">
          FORMACIÓN CONTINUA
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Mis Estudios y Certificaciones
        </h1>
        <p className="text-slate-400 text-base md:text-lg">
          Seleccioná cualquier tarjeta para visualizar el certificado oficial.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {STUDIES.map((study, index) => (
          <motion.button
            type="button"
            key={`${study.title}-${study.date}`}
            className="text-left bg-background-secondary hover:bg-surface-hover p-6 rounded-2xl border border-white/10 hover:border-primary-pink/40 transition-colors cursor-pointer flex flex-col justify-between gap-5 group focus:outline-none focus:ring-2 focus:ring-primary-pink"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.06 }}
            onClick={() => setSelected(study)}
          >
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-primary-pink-hover bg-primary-pink/10 border border-primary-pink/25 px-2.5 py-0.5 rounded-md">
                  {study.place}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {study.date}
                </span>
              </div>

              <h2 className="text-xl font-bold text-white group-hover:text-primary-pink-hover transition-colors pt-1">
                {study.title}
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                {study.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-slate-400 group-hover:text-white transition-colors w-full">
              <span>Ver certificado</span>
              <span aria-hidden="true">↗</span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-study-title"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-background-secondary border border-white/15 rounded-2xl p-5 md:p-6 max-w-3xl w-full shadow-2xl max-h-[90dvh] overflow-y-auto"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2
                    id="modal-study-title"
                    className="text-xl md:text-2xl font-bold text-white"
                  >
                    {selected.title}
                  </h2>
                  <p className="text-sm font-mono text-slate-400 mt-1">
                    {selected.place} · {selected.date}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Cerrar certificado"
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm font-mono transition-colors"
                >
                  ESC ✕
                </button>
              </div>

              <img
                src={selected.img}
                alt={`Certificado de ${selected.title} en ${selected.place}`}
                loading="lazy"
                className="w-full rounded-xl border border-white/10 bg-black/40"
              />

              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  className="px-5 py-2 bg-primary-pink hover:bg-primary-pink-hover text-white font-medium rounded-xl text-sm transition-colors"
                  onClick={() => setSelected(null)}
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
