import jsLogo from "../assets/javascript.svg";
import tsLogo from "../assets/typescript-svgrepo-com.svg";
import reactLogo from "../assets/react.svg";
import nodeLogo from "../assets/node-js.svg";
import expressLogo from "../assets/express-svgrepo-com.svg";
import pgLogo from "../assets/postgresql.svg";
import mongoLogo from "../assets/mongodb-icon.svg";
import zustandLogo from "../assets/zustand.svg";
import next from "../assets/next.svg";
import firebase from "../assets/firebase2.svg";
import tailwind from "../assets/tailwind.svg";
import redux from "../assets/redux-logo.svg";

export const MainPage = () => {
  const logos = [
    { src: jsLogo, alt: "JavaScript" },
    { src: tsLogo, alt: "TypeScript" },
    { src: reactLogo, alt: "React" },
    { src: next, alt: "Next.js", invert: true },
    { src: nodeLogo, alt: "Node.js" },
    { src: expressLogo, alt: "Express", invert: true },
    { src: pgLogo, alt: "PostgreSQL" },
    { src: mongoLogo, alt: "MongoDB" },
    { src: firebase, alt: "Firebase" },
    { src: zustandLogo, alt: "Zustand" },
    { src: redux, alt: "Redux" },
    { src: tailwind, alt: "Tailwind CSS" },
  ];

  return (
    <div className="bg-gray-900 flex-1 text-white flex flex-col md:flex-row justify-center gap-4 md:gap-10">
      <div className="flex flex-col gap-6 md:gap-8 p-6 md:p-20 max-w-6xl">
        <h1 className="text-xl md:text-2xl uppercase font-bold text-pink-600 text-center md:text-left">
          Hola, soy Lucas Ricci
        </h1>
        <span className="text-3xl md:text-6xl font-semibold mr-0 md:mr-6 text-center md:text-left">
          Desarrollador Fullstack
        </span>
        <p className="text-gray-300 text-lg md:text-2xl leading-relaxed text-center md:text-left">
          Soy desarrollador Fullstack apasionado por crear aplicaciones modernas
          y eficientes. <br className="hidden md:block"></br>
          Trabajo con tecnologías como JavaScript, TypeScript, React, Node.js,
          Express, PostgreSQL, MongoDB y Zustand.
        </p>

        {/* Contenedor de la animación */}
        <div className="overflow-hidden mt-4">
          <div className="flex animate-scroll gap-12 items-center">
            {/* Primera serie de logos */}
            {logos.map((logo, index) => (
              <img
                key={`first-${index}`}
                src={logo.src}
                alt={logo.alt}
                className={`h-10 w-10 md:h-14 md:w-14 flex-shrink-0 ${
                  logo.invert ? "invert" : ""
                }`}
              />
            ))}
            {/* Segunda serie de logos para el efecto loop */}
            {logos.map((logo, index) => (
              <img
                key={`second-${index}`}
                src={logo.src}
                alt={logo.alt}
                className={`h-10 w-10 md:h-14 md:w-14 flex-shrink-0 ${
                  logo.invert ? "invert" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
