import jsLogo from "../assets/javascript.svg";
import tsLogo from "../assets/typescript-svgrepo-com.svg";
import reactLogo from "../assets/react.svg";
import nodeLogo from "../assets/node-js.svg";
import expressLogo from "../assets/express-svgrepo-com.svg";
import pgLogo from "../assets/Postgresql_elephant.svg.png";
import mongoLogo from "../assets/mongodb-icon.svg";
import zustandLogo from "../assets/zustand.svg";

export const MainPage = () => {
  return (
    <div className="bg-gray-900 flex-1  text-white flex flex-row justify-center gap-10 ">
      <div className="flex flex-col  gap-8 p-20 max-w-6xl ">
        <h1 className="text-2xl uppercase font-bold text-pink-600">
          Hola, soy Lucas Ricci
        </h1>
        <span className="text-6xl font-semibold mr-6">
          Desarrollador Fullstack
        </span>{" "}
        <p className="text-gray-300 text-2xl leading-relaxed">
          Soy desarrollador Fullstack apasionado por crear aplicaciones modernas
          y eficientes. <br></br>
          Trabajo con tecnologías como JavaScript, TypeScript, React, Node.js,
          Express, PostgreSQL, MongoDB y Zustand.
        </p>
        <div>
          <div className="flex flex-row gap-12 mt-4 justify-center items-center">
            <img src={jsLogo} alt="JavaScript" className="h-14 w-14" />
            <img src={tsLogo} alt="TypeScript" className="h-14 w-14" />
            <img src={reactLogo} alt="React" className="h-14 w-14" />
            <img src={nodeLogo} alt="Node.js" className="h-14 w-14" />
            <img src={expressLogo} alt="Express" className="h-14 w-14 invert" />
            <img src={pgLogo} alt="PostgreSQL" className="h-14 w-14" />
            <img src={mongoLogo} alt="MongoDB" className="h-14 w-14" />
            <img src={zustandLogo} alt="Zustand" className="h-14 w-14" />
          </div>
        </div>
      </div>
    </div>
  );
};
