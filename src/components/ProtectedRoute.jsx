import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../contexts/UserContext";

function ProtectedRoute() {
  const { authUser } = React.useContext(UserContext);

  if (!authUser) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
