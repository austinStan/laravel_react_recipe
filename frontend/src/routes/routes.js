import React from "react";

const Dashboard = React.lazy(() => import("../components/Dashboard/Dashboard"));
const LeadList = React.lazy(() => import("../components/Leads/LeadList"));
const LeadsForm = React.lazy(() => import("../components/Leads/LeadsForm"));
const FollowUpList = React.lazy(() =>
  import("../components/FollowUps/FollowUpList")
);
const Login = React.lazy(() => import("../components/Auth/Login/Login"));
const Register = React.lazy(() =>
  import("../components/Auth/Register/Register")
);

export const standardRoutes = () => [
  {
    path: "/",
    component: <Dashboard />,
    exact: true,
  },
  {
    path: "/leads",
    component: <LeadList />,
    exact: true,
  },
  {
    path: "/leads/create",
    component: <LeadsForm />,
    exact: true,
  },
  {
    path: "/followup",
    component: <FollowUpList />,
    exact: true,
  },
];

export const guestRoutes = () => [
  {
    path: "/login",
    component: <Login />,
    exact: true,
  },
  {
    path: "/register",
    component: <Register />,
    exact: true,
  },
];
