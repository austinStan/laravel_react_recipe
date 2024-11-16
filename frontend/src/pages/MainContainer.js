import React, { Suspense } from "react";
import AuthContainer from "./AuthContainer";
import { standardRoutes, guestRoutes } from "../routes/routes";
import { Navigate, Route, Routes } from "react-router-dom";
import Container from "./Container";
import { useAuth } from "../contexts/authContext";

const MainContainer = () => {
  const { loggedIn } = useAuth();

  if (loggedIn) {
    return (
      <AuthContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {standardRoutes().map(({ component, exact, path }, i) => (
              <Route path={path} exact={exact} element={component} key={i} />
            ))}
            <Route path="*" element={<Navigate replace to="/" />} />
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
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default MainContainer;
