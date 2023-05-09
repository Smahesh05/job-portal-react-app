import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header ">
      <h2>
        <Link to="/"> XeroCodee</Link>
      </h2>
      <div className="navbar">
        <a href="/" className="auth-portal">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Header;
