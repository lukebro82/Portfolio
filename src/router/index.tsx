import { Route, Routes } from "react-router";
import { Layout } from "../components/Layout";
import { MainPage } from "../pages/MainPage";
import { Estudios } from "../pages/Estudios";
import { Proyectos } from "../pages/Proyectos";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/estudios" element={<Estudios />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Route>
    </Routes>
  );
}
