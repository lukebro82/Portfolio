import { motion } from "framer-motion";

export const Proyectos = () => {
  const proyectos = [
    {
      title: "Ahocado Game",
      place: "TypeScript | React | Vite",
      description: "Juego del ahorcado",
      github: "https://github.com/lukebro82/ahorcado-game",
      web: "https://ahorcado-luke.netlify.app/",
    },
    {
      title: "Gif App",
      place: "React | Vite",
      description: "Buscador de GIFs",
      github: "https://github.com/lukebro82/gif-app",
      web: "https://gif-app-luke.netlify.app/",
    },
    {
      title: "Pet-Finder",
      place: "TypeScript | React | Vite | Zustand | Express | PostgreSQL",
      description: "App de busqueda de mascotas perdidas",
      github: "https://github.com/lukebro82/petfinder-react",
      web: "https://petfinder-react-front.onrender.com",
    },
    {
      title: "Heroes-App",
      place: "React | React Router | Bootstrap",
      description:
        "Aplicación web para buscar información de héroes de Marvel y DC.",
      github: "https://github.com/lukebro82/Heroes-App",
      web: "",
    },
  ];

  return (
    <div className="bg-gray-900 h-[80dvh] text-white flex flex-col items-center py-8 px-6 overflow-y-auto">
      <h1 className="text-4xl font-bold text-pink-600 mb-8 uppercase tracking-widest">
        Mis Proyectos
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl">
        {proyectos.map((proyecto, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-transform cursor-pointer flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            whileHover={{
              y: -8,
              transition: { duration: 0.05, ease: "linear" },
            }}
          >
            <div>
              <h2 className="text-xl font-bold text-pink-400">
                {proyecto.title}
              </h2>
              <p className="text-gray-400">{proyecto.place}</p>
              <p className="text-gray-300 mb-4">{proyecto.description}</p>
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href={proyecto.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm"
              >
                GitHub
              </a>
              <a
                href={proyecto.web}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-pink-600 hover:bg-pink-500 text-white rounded-lg text-sm"
              >
                Ver Web
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
