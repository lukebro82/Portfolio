import { Link } from "react-router";

export const Header = () => {
  return (
    <>
      <div className="bg-gray-900 text-white h-[10dvh] flex justify-between flex-row items-center p-20 ">
        <div className="flex flex-row gap-5 items-center">
          <img
            src="https://avatars.githubusercontent.com/u/109926314?v=4&size=64"
            alt=""
            className="rounded-full"
          />
          <span className="text-[20px]">Lucas Emanuel Ricci</span>
        </div>
        <div className="flex flex-row gap-8 text-[20px]">
          <Link to="/">Home</Link>
          <Link to="/estudios">Estudios</Link>
          <Link to="/proyectos">Proyectos</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
      </div>
    </>
  );
};
