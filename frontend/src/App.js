import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainContainer from "./pages/MainContainer";
import { ToastContainer } from "react-toastify";
import "./assets/css/index.css";

import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/authContext";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer />
        <MainContainer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
