import { Link, NavLink } from "react-router";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { to: "/", label: "Inicio", end: true },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/estudios", label: "Estudios" },
  { to: "/contacto", label: "Contacto" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-6xl mx-auto w-full px-6 py-4 flex flex-row justify-between items-center">
        <Link
          to="/"
          className="flex flex-row gap-3.5 items-center group focus:outline-none"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src="https://avatars.githubusercontent.com/u/109926314?v=4&size=96"
            alt="Foto de perfil de Lucas Emanuel Ricci"
            className="rounded-full w-10 h-10 md:w-11 md:h-11 ring-2 ring-white/15 group-hover:ring-primary-pink transition-all"
          />
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-bold tracking-tight text-white group-hover:text-primary-pink-hover transition-colors">
              Lucas Emanuel Ricci
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              Fullstack Developer
            </span>
          </div>
        </Link>

        {/* Botón menú hamburguesa para mobile */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={isMenuOpen}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary-pink relative"
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 absolute ${
              isMenuOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 absolute ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 absolute ${
              isMenuOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>

        {/* Navegación Desktop */}
        <nav aria-label="Navegación principal" className="hidden md:flex flex-row items-center gap-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium border transition-colors duration-200 ${
                  isActive
                    ? "bg-primary-pink/15 text-primary-pink-hover border-primary-pink/30"
                    : "border-transparent text-slate-300 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Navegación Mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-white/10 bg-background-secondary ${
          isMenuOpen ? "max-h-72 opacity-100 visible" : "max-h-0 opacity-0 invisible border-t-0"
        }`}
      >
        <nav aria-label="Navegación móvil" className="flex flex-col gap-1 px-6 py-4">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? "bg-primary-pink/15 text-primary-pink-hover border-l-2 border-primary-pink"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};
