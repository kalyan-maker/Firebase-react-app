import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./Context/Auth";
import Layout from "./Components/Layout";
import Home from "./Components/Pages/Home";
import ErrorPage from "./Components/Pages/Error/error";
import SignIn from "./Components/Pages/Sign/Signin";
import SignUp from "./Components/Pages/Sign/SignUp";
import Forget from "./Components/Pages/Sign/Forget";
import Update from "./Components/Pages/Sign/Update";
import Reset from "./Components/Pages/Sign/Reset";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";
import Quiz from "./Components/Quiz/Quiz";
import Result from "./Components/Quiz/Result";
import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <PublicRoute path="/signin" exact component={SignIn} />
            <PublicRoute path="/signup" exact component={SignUp} />
            <PublicRoute path="/forget-password" exact component={Forget} />
            <PrivateRoute path="/new-password" exact component={Update} />
            <PrivateRoute path="/quiz/:id" exact component={Quiz} />
            <PrivateRoute path="/result/:id" exact component={Result} />
            <PublicRoute path="/reset-password" exact component={Reset} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
