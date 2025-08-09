import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <>
      <div className="flex flex-col h-[100dvh]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
