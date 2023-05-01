import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="bg-gray-900 h-[90px]">
        <div className="max-w-[1200px] h-[100%] mx-auto text-white flex items-center justify-between">
          <Link to="/">
            <h1 className="font-bold text-xl">LOGO</h1>
          </Link>

          <nav className="flex items-center gap-10">
            <ul className="flex items-center gap-5">
              <Link
                to="/"
                className="font-medium uppercase text-md hover:text-indigo-200 transition-colors"
              >
                Inicio
              </Link>
              <Link
                to="/"
                className="font-medium uppercase text-md hover:text-indigo-200 transition-colors"
              >
                Nosotros
              </Link>
              <Link
                to="/"
                className="font-medium uppercase text-md hover:text-indigo-200 transition-colors"
              >
                Servicios
              </Link>
            </ul>

            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="font-medium uppercase px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded-md"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/singup"
                className="font-medium uppercase px-4 py-2 bg-blue-800 hover:bg-blue-900 transition-colors rounded-md"
              >
                Registrarse
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
