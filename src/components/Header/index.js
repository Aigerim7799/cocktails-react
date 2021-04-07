import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src="https://blondiesstl.com/wp-content/uploads/2016/06/Blondies-white-logo.png" />
      </Link>
    </header>
  );
}
