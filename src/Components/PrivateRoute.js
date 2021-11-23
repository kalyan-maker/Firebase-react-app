import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/Auth";

function PrivateRoute({ children, redirectTo }) {
  const currentUser = useAuth();
  return currentUser ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoute;
