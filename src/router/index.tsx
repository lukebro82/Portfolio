import { useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router";
import { Layout } from "../components/Layout";
import { MainPage, Contacto, Estudios, Proyectos } from "../pages";
import { usePageMeta } from "../hooks/usePageMeta";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

const HOME_META = {
  title: "Lucas Emanuel Ricci | Desarrollador Fullstack",
  description:
    "Portafolio de Lucas Emanuel Ricci, Desarrollador Fullstack especializado en TypeScript, React, Next.js, Node.js, Express y PostgreSQL.",
};

const ROUTE_META: Record<string, { title: string; description: string }> = {
  "/": HOME_META,
  "/proyectos": {
    title: "Proyectos | Lucas Ricci",
    description:
      "Proyectos web fullstack de Lucas Ricci construidos con React, TypeScript, Node.js y PostgreSQL.",
  },
  "/estudios": {
    title: "Estudios y Certificaciones | Lucas Ricci",
    description:
      "Formaci\u00f3n y certificaciones de Lucas Ricci en desarrollo web y programaci\u00f3n.",
  },
  "/contacto": {
    title: "Contacto | Lucas Ricci",
    description:
      "Contact\u00e1 a Lucas Ricci, Desarrollador Fullstack, para propuestas laborales o proyectos.",
  },
};

function RouteMeta() {
  const { pathname } = useLocation();
  const normalized =
    pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const known = ROUTE_META[normalized];
  const meta = known ?? {
    title: "P\u00e1gina no encontrada | Lucas Ricci",
    description: "La p\u00e1gina que busc\u00e1s no existe o fue movida.",
  };
  usePageMeta(meta.title, meta.description, !known);
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
      <RouteMeta />
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
