import jsLogo from "../assets/javascript.svg";
import tsLogo from "../assets/typescript-svgrepo-com.svg";
import reactLogo from "../assets/react.svg";
import nodeLogo from "../assets/node-js.svg";
import expressLogo from "../assets/express-svgrepo-com.svg";
import pgLogo from "../assets/Postgresql_elephant.svg.png";
import mongoLogo from "../assets/mongodb-icon.svg";
import zustandLogo from "../assets/zustand.svg";
import next from "../assets/next.svg";
import firebase from "../assets/firebase2.svg";
import tailwind from "../assets/tailwind.svg";

export const MainPage = () => {
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
        <div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-4 items-center">
            <img
              src={jsLogo}
              alt="JavaScript"
              className="h-10 w-10 md:h-14 md:w-14"
            />
            <img
              src={tsLogo}
              alt="TypeScript"
              className="h-10 w-10 md:h-14 md:w-14"
            />
            <img
              src={reactLogo}
              alt="React"
              className="h-10 w-10 md:h-14 md:w-14"
            />
            <img
              src={next}
              alt="Next.js"
              className="h-10 w-10 md:h-14 md:w-14"
            />
            <img
              src={nodeLogo}
              alt="Node.js"
              className="h-10 w-10 md:h-14 md:w-14"
            />
            <img
              src={expressLogo}
              alt="Express"
              className="h-10 w-10 md:h-14 md:w-14 invert"
            />
            <img
              src={pgLogo}
              alt="PostgreSQL"
              className="h-10 w-10 md:h-14 md:w-14"
            />
            <img
              src={mongoLogo}
              alt="MongoDB"
              className="h-10 w-10 md:h-14 md:w-14"
            />
            <img
              src={firebase}
              alt="Firebase"
              className="h-10 w-10 md:h-14 md:w-14"
            />
            <img
              src={zustandLogo}
              alt="Zustand"
              className="h-10 w-10 md:h-14 md:w-14"
            />
            <img
              src={tailwind}
              alt="Tailwind CSS"
              className="h-10 w-10 md:h-14 md:w-14"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
