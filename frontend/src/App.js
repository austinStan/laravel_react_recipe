import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainContainer from "./pages/MainContainer";
import { ToastContainer } from "react-toastify";
import "./assets/css/index.css";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <MainContainer />
    </BrowserRouter>
  );
};

export default App;
