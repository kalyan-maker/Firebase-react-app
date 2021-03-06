import React from "react";
import { useAuth } from "../Context/Auth";
import { Account } from "./Styles/Navbar";
import { Link, useNavigate } from "react-router-dom";
const AccountCom = () => {
  const { currentUser, logout } = useAuth();

  const navigate = useNavigate();

  const nav = (e) => {
    e.preventDefault();
    navigate("/new-password");
  };

  return (
    <Account>
      <div className="login">
        {currentUser ? (
          <>
            <div className="dropdown">
              <button className="dropbtn">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <img src={currentUser.PhotoURL} alt="" />
                  <span>{currentUser.displayName}</span>
                </Link>
              </button>
              <div className="dropdown-content">
                <li className="dropdown-item">{currentUser.email}</li>
                <li className="dropdown-item" onClick={nav}>
                  NewPassword
                </li>
                <hr />
                <li className="dropdown-item" onClick={logout}>
                  LogOut
                </li>
              </div>
            </div>
          </>
        ) : (
          <>
            <ul>
              <Link to="/signin" className="link">
                <li>SignIn</li>
              </Link>
              <Link to="/signup" className="link">
                <li>SignUp</li>
              </Link>
            </ul>
          </>
        )}
      </div>
    </Account>
  );
};

export default AccountCom;
