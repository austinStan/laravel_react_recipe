import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainContainer from "./pages/MainContainer";

const App = () => {
  return (
    <BrowserRouter>
      <MainContainer />
    </BrowserRouter>
  );
};

export default App;
