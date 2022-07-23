import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import NavBar from "../Components/NavBar";

function ProtectedRoutes() {
  const location = useLocation();
  const { auth } = useContext(AuthContext);

  return auth ? (
    <>
      <NavBar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/choose-role-login" state={{ from: location }} replace />
  );
}

export default ProtectedRoutes;
