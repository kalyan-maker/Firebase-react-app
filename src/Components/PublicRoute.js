import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/Auth";

const PublicRoute = ({ children, redirectTo }) => {
  const currentUser = useAuth();
  return currentUser ? children : <Navigate to={redirectTo} />;
};

export default PublicRoute;
