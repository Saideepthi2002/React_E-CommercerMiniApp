import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ padding: "1rem", borderBottom: "1px solid #ddd", display: "flex", justifyContent: "space-between", maxWidth: "1280px", margin: "0 auto" }}>
    <Link to="/">Home</Link>
    <Link to="/cart">Cart</Link>
    <Link to="/login">Login</Link>
  </nav>
);

export default Navbar;
