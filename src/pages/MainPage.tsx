import Marquee from "react-fast-marquee";

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
    { src: tailwind, alt: "Tailwind CSS" },
    { src: nodeLogo, alt: "Node.js" },
    { src: expressLogo, alt: "Express", invert: true },
    { src: pgLogo, alt: "PostgreSQL" },
    { src: mongoLogo, alt: "MongoDB" },
    { src: firebase, alt: "Firebase" },
    { src: zustandLogo, alt: "Zustand" },
    { src: redux, alt: "Redux" },
  ];

  return (
    <div className="bg-background flex-1 text-white flex flex-col md:flex-row justify-center gap-4 md:gap-10">
      <div className="flex flex-col gap-8 md:gap-8 p-6 md:p-20 max-w-6xl">
        <h1 className="text-3xl md:text-2xl uppercase font-bold text-primary-pink text-left">
          Hola, soy Lucas Ricci
        </h1>
        <span className="text-3xl md:text-6xl font-semibold mr-0 md:mr-6 text-left">
          Desarrollador Fullstack
        </span>
        <p className="text-gray-300 text-lg md:text-2xl leading-relaxed text-left">
          Soy desarrollador Fullstack enfocado en crear aplicaciones modernas y
          eficientes.
          <br />
          Uso de JavaScript y TypeScript, React y Next.js en el frontend con
          Tailwind CSS, Node.js y Express.js en el backend, Zustand para manejo
          de estado y PostgreSQL, MongoDB y Firebase como bases de datos.
        </p>

        <Marquee
          pauseOnHover={true}
          gradient={false}
          speed={60}
          className="mt-4 md:mt-8"
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className={`h-10 w-10 md:h-14 md:w-14 mx-3 md:mx-6 ${
                logo.invert ? "invert" : ""
              }`}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};
