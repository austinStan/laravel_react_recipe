import React from "react";
import Settings from "./pages/Settings";
import Container from "./pages/Container";
import Header from "./pages/Header";

const App = () => {
  return (
    <React.Fragment>
      <Settings />
      <Header />
      <Container />
    </React.Fragment>
  );
};

export default App;
