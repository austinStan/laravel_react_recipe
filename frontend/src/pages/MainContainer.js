import React, { Suspense } from "react";
import AuthContainer from "./AuthContainer";
import { standardRoutes, guestRoutes } from "../routes/routes";
import { Route, Routes } from "react-router-dom";
import Container from "./Container";

const MainContainer = () => {
  const loggedIn = true;
  if (loggedIn) {
    return (
      <AuthContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {standardRoutes().map(({ component, exact, path }, i) => (
              <Route path={path} exact={exact} element={component} key={i} />
            ))}
          </Routes>
        </Suspense>
      </AuthContainer>
    );
  }
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {guestRoutes().map(({ component, exact, path }, i) => (
            <Route path={path} exact={exact} element={component} key={i} />
          ))}
        </Routes>
      </Suspense>
    </Container>
  );
};

export default MainContainer;
