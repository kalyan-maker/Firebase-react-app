import React from "react";
import { Navbar } from "./Styles/Navbar";
import { Link } from "react-router-dom";
import AccountCom from "./Account";

const Navbarfunction = () => {
  return (
    <Navbar>
      <ul>
        <li>
          <Link to="/" className="link">
            <h1>Quiz App</h1>
          </Link>
        </li>
      </ul>
      <AccountCom />
    </Navbar>
  );
};

export default Navbarfunction;
