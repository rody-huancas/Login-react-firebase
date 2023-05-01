import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="max-w-[1200px] mx-auto my-5">
        <Outlet />
      </main>
    </>
  );
};
