import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/Auth";

function PrivateRoute({ children, redirectTo }) {
  const auth = useAuth();
  return auth ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoute;
