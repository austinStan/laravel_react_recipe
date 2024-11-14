import React from "react";
import Sidebar from "./Sidebar";
import Settings from "./Settings";
import Header from "./Header";

const AuthContainer = ({ children }) => {
  return (
    <React.Fragment>
      <Settings />
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {children}
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AuthContainer;
