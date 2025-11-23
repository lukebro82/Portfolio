import { Link } from "react-router";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-background text-white h-[10dvh] flex justify-between flex-row items-center p-4 md:p-12">
        <div className="flex flex-row justify-between items-center max-w-6xl mx-auto w-full">
          <div className="flex flex-row gap-5 items-center">
            <Link to="/">
              <img
                src="https://avatars.githubusercontent.com/u/109926314?v=4&size=64"
                alt=""
                className="rounded-full w-10 h-10 md:w-16 md:h-16"
              />
            </Link>
            <span className="text-[16px] md:text-[20px]">
              Lucas Emanuel Ricci
            </span>
          </div>

          {/* Menú hamburguesa para mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 absolute left-2 top-1/2 -translate-y-1/2 ${
                isMenuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 absolute left-2 top-1/2 -translate-y-1/2 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 absolute left-2 top-1/2 -translate-y-1/2 ${
                isMenuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            ></span>
          </button>

          {/* Menú desktop */}
          <div className="hidden md:flex flex-row gap-8 text-[20px]">
            <Link
              className="hover:text-pink-600 transition-colors duration-200"
              to="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-pink-600 transition-colors duration-200"
              to="/estudios"
            >
              Estudios
            </Link>
            <Link
              className="hover:text-pink-600 transition-colors duration-200"
              to="/proyectos"
            >
              Proyectos
            </Link>
            <Link
              className="hover:text-pink-600 transition-colors duration-200"
              to="/contacto"
            >
              Contacto
            </Link>
          </div>
        </div>

        {/* Menú mobile */}
        <div
          className={`md:hidden fixed top-[12dvh] left-0 right-0 bg-background transition-all duration-300 z-[9999] ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col gap-4 p-4 text-[18px]">
            <Link
              className="hover:text-pink-600 transition-colors duration-200 py-2"
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className="hover:text-pink-600 transition-colors duration-200 py-2"
              to="/estudios"
              onClick={() => setIsMenuOpen(false)}
            >
              Estudios
            </Link>
            <Link
              className="hover:text-pink-600 transition-colors duration-200 py-2"
              to="/proyectos"
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </Link>
            <Link
              className="hover:text-pink-600 transition-colors duration-200 py-2"
              to="/contacto"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
