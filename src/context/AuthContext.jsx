// import { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export function AuthProvider({ children }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(
//     localStorage.getItem("isLoggedIn") === "true"
//   );

//   const login = () => { setIsLoggedIn(true); localStorage.setItem("isLoggedIn", "true"); };
//   const logout = () => { setIsLoggedIn(false); localStorage.removeItem("isLoggedIn"); };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }


// context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Accepts { username } object
  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

