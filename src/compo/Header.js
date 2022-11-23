import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <div>
      <span className="header">react context</span>
      <ul className="nav">
        <li className="prod">
          <Link to="/">home</Link>
        </li>
        <li className="prod1">
          <Link to="/cart">cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
