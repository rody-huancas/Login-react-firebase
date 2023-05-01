import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { Home } from "../pages/Home";
import { Layout } from "../layouts/Layout";
import { Login } from "../pages/Login";
import { SingUp } from "../pages/SingUp";

export const MyRoutes = () => {
  const [userName, setUserName] = useState([]);
  //   useEffect(() => {
  //     auth.onAuthStateChanged((user) => {
  //       if (user) setUserName(user.displayName);
  //       else setUserName("");
  //     }, []);
  //   });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singup" element={<SingUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
