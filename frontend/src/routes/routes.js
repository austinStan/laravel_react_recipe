import React from "react";
import { LogoutRoute } from "../contexts/authContext";

const Dashboard = React.lazy(() => import("../components/Dashboard/Dashboard"));
const LeadList = React.lazy(() => import("../components/Leads/LeadList"));
const FollowUpList = React.lazy(() =>
  import("../components/FollowUps/FollowUpList")
);
const UsersList = React.lazy(() =>
  import("../components/Auth/Users/UsersList")
);
const Login = React.lazy(() => import("../components/Auth/Login/Login"));
const LeadsForm = React.lazy(() => import("../components/Leads/LeadsForm"));
const UserForm = React.lazy(() => import("../components/Auth/Users/UserForm"));
const FollowUpForm = React.lazy(() =>
  import("../components/FollowUps/FollowUpForm")
);
const FollowUpDetails = React.lazy(() =>
  import("../components/FollowUps/FollowUpDetails")
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
  {
    path: "/followup/create",
    component: <FollowUpForm />,
    exact: true,
  },
  {
    path: "/followup/view/:id",
    component: <FollowUpDetails />,
    exact: true,
  },
  {
    path: "/logout",
    component: <LogoutRoute />,
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
