import { Link } from "react-router-dom";
import { InputControl } from "../components/InputControl";

export const Login = () => {
  return (
    <>
      <section class="py-10">
        <div class="flex flex-col items-center mx-auto lg:py-0">
          <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0bg-gray-900 bg-gray-900 border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Inicia Sesión con tu cuenta
              </h1>
              <form class="space-y-4 md:space-y-6">
                <InputControl
                  label="Correo Electrónico"
                  type="email"
                  identification="email"
                  placeholder="ejemplo@correo.com"
                />
                <InputControl
                  label="Contraseña"
                  type="password"
                  identification="password"
                  placeholder="Ingrese su contraseña"
                />

                <button
                  type="submit"
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-700 uppercase hover:bg-primary-700 focus:ring-primary-800"
                >
                  Iniciar Sesión
                </button>
                <p class="text-sm font-light text-gray-200">
                  ¿No tienes una cuenta?{" "}
                  <Link
                    to="/singup"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Regístrate
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
