import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

export const Dashboard = ({ name }) => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        navigate("/login");
      }
    });
    return unsubscribe;
  }, [navigate]);

  function logout() {
    auth.signOut().then(() => {
      navigate("/login");
    });
  }

  if (!authenticated) {
    return null;
  }

  return (
    <>
      <header className="h-[80px] bg-gray-900">
        <div className="max-w-[1200px] h-[100%] mx-auto text-white flex items-center justify-between">
          <h2>
            Bienvenido <span>{name}</span>
          </h2>
          <button
            onClick={logout}
            className="px-10 py-3 rounded-lg uppercase bg-blue-700 font-medium hover:bg-blue-900 transition-colors"
          >
            Salir
          </button>
        </div>
      </header>
    </>
  );
};
