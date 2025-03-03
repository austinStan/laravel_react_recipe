import React, { createContext, useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null); // Store user and token data
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") !== null
  );
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = async (credentials) => {
    try {
      const response = await api.post(
        "http://localhost:8000/api/login",
        credentials
      );
      setLoggedIn(true);
      setAuthData(response.data); // Store the token and user details
      setToken(localStorage.setItem("token", response.data.token));
      return response.data;
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  };

  const logout = async () => {
    setAuthData(null);
    localStorage.removeItem("token");
    const navigate = useNavigate();
    navigate("/login");
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ authData, login, logout, loggedIn, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

export const LogoutRoute = () => useAuth().logout();
