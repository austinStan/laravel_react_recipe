import React from "react";

const Dashboard = React.lazy(() => import("../components/Dashboard/Dashboard"));
const LeadList = React.lazy(() => import("../components/Leads/LeadList"));
const FollowUpList = React.lazy(() =>
  import("../components/FollowUps/FollowUpList")
);
const Login = React.lazy(() => import("../components/Auth/Login/Login"));
const LeadsForm = React.lazy(() => import("../components/Leads/LeadsForm"));
const UserForm = React.lazy(() => import("../components/Auth/Users/UserForm"));
const UsersList = React.lazy(() =>
  import("../components/Auth/Users/UsersList")
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
    path: "/followup",
    component: <FollowUpList />,
    exact: true,
  },
  {
    path: "/users",
    component: <UsersList />,
    exact: true,
  },
  {
    path: "/leads/create",
    component: <LeadsForm />,
    exact: true,
  },
  {
    path: "/users/create",
    component: <UserForm />,
    exact: true,
  },
];

export const guestRoutes = () => [
  {
    path: "/login",
    component: <Login />,
    exact: true,
  },
];
