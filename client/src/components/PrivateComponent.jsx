import React from "react";
import useAuthStatus from "../hooks/useAuthStatus";
import Loader from "./Loader";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
  const { isLoggedIn, checkStatus } = useAuthStatus();

  if (checkStatus) {
    return <Loader />;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateComponent;
