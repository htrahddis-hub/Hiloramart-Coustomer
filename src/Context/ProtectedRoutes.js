import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

function ProtectedRoutes() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default ProtectedRoutes;
