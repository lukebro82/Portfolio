import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import argprograma from "../assets/certificadoargprog.jpg";
import devtallesReact from "../assets/certificatedevtalles.jpg";

export const Estudios = () => {
  type Study = {
    title: string;
    place: string;
    date: string;
    description: string;
    img: string;
  };

  const [selected, setSelected] = useState<Study | null>(null);

  const studies = [
    {
      title: "Se Programar",
      place: "Argentina Programa 4.0",
      date: "2022",
      description: "Curso de inicio a la programacion, Javascript, Ruby",
      img: argprograma,
    },
    {
      title: "Software Developer",
      place: "APX Nivel 0 y 1",
      date: "2023",
      description: "Nivel 1 de la carrera de Software Developer",
      img: "https://res.cloudinary.com/apx/image/upload/w_1200/co_white,g_south_east,l_text:Arial_18_bold:agosto%202025,x_411,y_150/co_white,g_north,l_text:Arial_60_bold:Lucas%20Emanuel%20Ricci,y_240/f_auto,q_auto/v1/apx2/certificates/dev-1_-_certificate_goaarb.png",
    },
    {
      title: "Software Developer",
      place: "APX Nivel 2",
      date: "2024",
      description: "Nivel 2 de la carrera de Software Developer",
      img: "https://res.cloudinary.com/apx/image/upload/w_1200/co_white,g_south_east,l_text:Arial_18_bold:agosto%202024,x_411,y_150/co_white,g_north,l_text:Arial_60_bold:Lucas%20Emanuel%20Ricci,y_240/f_auto,q_auto/v1/apx2/certificates/web-1_-_certificate_xgda8n.png",
    },
    {
      title: "React: De cero a experto (Hooks y MERN)",
      place: "DevTalles",
      date: "2025",
      description:
        "Curso de React desde fundamentos hasta aspectos técnicos avanzados y despliegues, incorporando librerías adicionales utilizadas en la industria.",
      img: devtallesReact,
    },
  ];

  return (
    <div className="bg-gray-900 h-[80dvh] text-white flex flex-col items-center py-4 px-6 overflow-y-auto">
      <h1 className="text-4xl font-bold text-pink-600 mb-6 uppercase tracking-widest">
        Mis Estudios
      </h1>

      {/* GRID */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl">
        {studies.map((study: any, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-transform cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            whileHover={{
              y: -8,
              transition: { duration: 0.05, ease: "linear" },
            }}
            onClick={() => setSelected(study)}
          >
            <h2 className="text-xl font-bold text-pink-400">{study.title}</h2>
            <p className="text-gray-400">{study.place}</p>
            <p className="text-sm text-gray-500 mb-4">{study.date}</p>
            <p className="text-gray-300">{study.description}</p>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl p-4 max-w-3xl w-full shadow-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-pink-400 mb-2">
                {selected.title}
              </h2>
              <p className="text-gray-400">{selected.place}</p>
              <p className="text-sm text-gray-500 mb-4">{selected.date}</p>
              <img
                src={selected.img}
                alt={selected.title}
                className="rounded-lg border border-gray-700"
              />
              <button
                className="mt-4 px-4 py-2 bg-pink-600 hover:bg-pink-500 rounded-lg text-white"
                onClick={() => setSelected(null)}
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
