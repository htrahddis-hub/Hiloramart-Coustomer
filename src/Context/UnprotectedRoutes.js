import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function UnprotectedRoutes() {
  const { auth } = useContext(AuthContext);
  console.log(auth);
  //-1 will take one page reverse where we came
  return auth ? <Navigate to={-1} /> : <Outlet />;
}

export default UnprotectedRoutes;
