import { useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router";
import { Layout } from "../components/Layout";
import { MainPage, Contacto, Estudios, Proyectos } from "../pages";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <p className="text-7xl font-extrabold text-primary-pink">404</p>
      <h1 className="text-2xl font-bold">Página no encontrada</h1>
      <p className="text-slate-400">
        La dirección que buscás no existe o fue movida.
      </p>
      <Link
        to="/"
        className="mt-2 rounded-lg bg-primary-pink px-5 py-2.5 font-semibold text-white transition-colors hover:bg-primary-pink-hover"
      >
        Volver al inicio
      </Link>
    </section>
  );
}

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/estudios" element={<Estudios />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
