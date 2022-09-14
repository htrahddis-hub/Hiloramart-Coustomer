import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import NavBar from "../Components/NavBar";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

function ProtectedRoutes() {
  const location = useLocation();
  let { auth } = useContext(AuthContext);

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
