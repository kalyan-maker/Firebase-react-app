import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoute from "./Components/PublicRoute";
import PrivateRoute from "./Components/PrivateRoute";
import LayOut from "./Components/LayOut";
import HomePage from "./Components/Pages/HomePage";
import SignUp from "./Components/Pages/SignUp";
import SignIn from "./Components/Pages/SignIn";
import Forget from "./Components/Pages/Forget";
import Reset from "./Components/Pages/Reset";
import { AuthProvider } from "./Context/Auth";
import Update from "./Components/Pages/Update";
import ErrorPage from "./Components/Pages/Error/ErrorPage";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <LayOut>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route
              path="signup"
              exact
              element={
                <PublicRoute redirectTo="/">
                  <SignUp />
                </PublicRoute>
              }
            />
            <Route
              path="signin"
              exact
              element={
                <PublicRoute redirectTo="/">
                  <SignIn />
                </PublicRoute>
              }
            />
            <Route
              path="forget-password"
              exact
              element={
                <PublicRoute redirectTo="/">
                  <Forget />
                </PublicRoute>
              }
            />
            <Route
              path="reset-Password"
              exact
              element={
                <PrivateRoute redirectTo="/signin">
                  <Reset />
                </PrivateRoute>
              }
            />
            <Route
              path="new-password"
              exact
              element={
                <PrivateRoute redirectTo="/signin">
                  <Update />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </LayOut>
      </AuthProvider>
    </Router>
  );
}
