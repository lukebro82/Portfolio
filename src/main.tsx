import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "./router/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
