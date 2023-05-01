import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { InputControl } from "../components/InputControl";
import { useState } from "react";

export const SingUp = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState([]);
  const [error, setError] = useState(false);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Llene todos los campos.");
      setError(true);
      setTimeout(() => {
        setErrorMsg("");
        setError(false);
      }, 5000);
      return;
    }

    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, { displayName: values.name });
        navigate("/login");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <>
      <section className="py-10">
        <div className="flex flex-col items-center mx-auto lg:py-0 px-5">
          {error ? (
            <p className="flex flex-col gap-2 w-full sm:w-2/3 md:w-2/4 xl:w-2/5 bg-red-600 mb-5 rounded-lg py-3 text-center font-medium text-white uppercase">
              <span className="font-bold uppercase">¡Error!</span>
              {errorMsg}
            </p>
          ) : (
            ""
          )}
          <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0bg-gray-900 bg-gray-900 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Crea una cuenta
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <InputControl
                  label="Nombre completo"
                  type="text"
                  identification="name"
                  placeholder="Jhon Doe"
                  functionControl={(e) =>
                    setValues((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
                <InputControl
                  label="Correo Electrónico"
                  type="email"
                  identification="email"
                  placeholder="ejemplo@correo.com"
                  functionControl={(e) =>
                    setValues((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
                <InputControl
                  label="Contraseña"
                  type="password"
                  identification="password"
                  placeholder="Ingrese su contraseña"
                  functionControl={(e) =>
                    setValues((prev) => ({ ...prev, pass: e.target.value }))
                  }
                />

                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-700 uppercase hover:bg-primary-700 focus:ring-primary-800"
                  disabled={submitButtonDisabled}
                >
                  Registrarse
                </button>
                <p className="text-sm font-light text-gray-200">
                  ¿Ya tienes una cuenta?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Inicia Sesión
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
