import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../Context/Auth";

function PublicRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return !currentUser ? (
    <Route {...rest}>{(props) => <Component {...props} />}</Route>
  ) : (
    <Redirect to="/" />
  );
}

export default PublicRoute;
