import { motion } from "framer-motion";

export const Proyectos = () => {
  const proyectos = [
    {
      title: "Ahocado Game",
      place: "TypeScript | React | Vite",
      description: "Juego del ahorcado ",
    },
    {
      title: "Gif App",
      place: "React | Vite",
      description: "Pagina de la mutual 30 Octubre",
    },
    {
      title: "Pet-Finder",
      place: "TypeScript | React | Vite | Zustand | Express | PostgreSQL",
      description: "App de busqueda de mascotas perdidas",
    },
    {
      title: "Heroes-App",
      place: "React | React Router | Bootstrap",
      description:
        "Aplicación web para buscar información de héroes de Marvel y DC.",
    },
  ];

  return (
    <div className="bg-gray-900 flex-1 text-white flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl font-bold text-pink-600 mb-12 uppercase tracking-widest">
        Mis Proyectos
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl">
        {proyectos.map((study, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-transform cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            //  initial={{ opacity: 0, scale: 0.9 }}
            // whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            viewport={{ once: false }}
            whileHover={{
              y: -8,
              transition: { duration: 0.05, ease: "linear" },
            }}
          >
            <h2 className="text-xl font-bold text-pink-400">{study.title}</h2>
            <p className="text-gray-400">{study.place}</p>
            <p className="text-gray-300">{study.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
