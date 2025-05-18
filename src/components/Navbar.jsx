// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => (
//   <nav style={{ padding: "1rem", borderBottom: "1px solid #ddd", display: "flex", justifyContent: "space-between", maxWidth: "1280px", margin: "0 auto" }}>
//     <Link to="/">Home</Link>
//     <Link to="/cart">Cart</Link>
//     <Link to="/login">Login</Link>
//   </nav>
// );

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MyStore</div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/cart" className="navbar-link">Cart</Link>
        <Link to="/login" className="navbar-link">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
