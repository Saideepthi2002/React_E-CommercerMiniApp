// import React, {  useRef, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const inputRef = useRef();

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   const handleLogin = () => {
//     login();
//     navigate("/checkout");
//   };

//   return (
//     <div className="max-w-sm mx-auto p-4">
//       <input
//         ref={inputRef}
//         type="text"
//         placeholder="Username"
//         className="border p-2 w-full mb-4 rounded"
//       />
//       <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded">
//         Login
//       </button>
//     </div>
//   );
// };

// export default Login;


// pages/Login.js
import React, { useRef, useEffect } from "react";
// import { AuthContext } from "../context/AuthContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.css"; // Import the CSS file

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const from = location.state?.from || "/";

  const handleLogin = () => {
    login();
    navigate(from, { replace: true });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your username"
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
};

export default Login;
