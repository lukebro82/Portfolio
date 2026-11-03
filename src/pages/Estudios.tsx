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

      {/* TIMELINE */}
      <ol className="relative flex flex-col gap-8 border-l border-white/15 ml-2 md:ml-3">
        {STUDIES.map((study, index) => (
          <motion.li
            key={`${study.title}-${study.date}`}
            className="relative pl-6 md:pl-10"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: index * 0.08 }}
          >
            <span
              aria-hidden="true"
              className="absolute -left-[7px] top-7 w-3.5 h-3.5 rounded-full bg-primary-pink border-4 border-background ring-1 ring-primary-pink/50"
            />
            <button
              type="button"
              onClick={() => setSelected(study)}
              className="w-full text-left bg-background-secondary hover:bg-surface-hover p-5 rounded-2xl border border-white/10 hover:border-primary-pink/40 transition-colors cursor-pointer flex flex-col sm:flex-row gap-5 group focus:outline-none focus:ring-2 focus:ring-primary-pink"
            >
              <img
                src={study.img}
                alt=""
                loading="lazy"
                className="w-full sm:w-40 h-28 object-cover object-top rounded-lg border border-white/10 bg-black/40 opacity-70 group-hover:opacity-100 transition-opacity shrink-0"
              />
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-primary-pink-hover bg-primary-pink/10 border border-primary-pink/25 px-2.5 py-0.5 rounded-md">
                    {study.place}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {study.date}
                  </span>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-white group-hover:text-primary-pink-hover transition-colors">
                  {study.title}
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {study.description}
                </p>
                <span className="mt-auto text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                  Ver certificado ↗
                </span>
              </div>
            </button>
          </motion.li>
        ))}
      </ol>

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
