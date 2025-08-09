import { Route, Routes } from "react-router";
import { Layout } from "../components/Layout";
import { MainPage, Contacto, Estudios, Proyectos } from "../pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/estudios" element={<Estudios />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
}
