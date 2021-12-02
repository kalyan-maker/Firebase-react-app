import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Styles/Navbar";
import AccountCom from "./Account";

function Navbarfunction() {
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
}

export default Navbarfunction;
