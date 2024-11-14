import React from "react";
import UserForm from "../components/Auth/Users/UserForm";
import UsersList from "../components/Auth/Users/UsersList";

const Dashboard = React.lazy(() => import("../components/Dashboard/Dashboard"));
const LeadList = React.lazy(() => import("../components/Leads/LeadList"));
const FollowUpList = React.lazy(() =>
  import("../components/FollowUps/FollowUpList")
);
const Login = React.lazy(() => import("../components/Auth/Login/Login"));
const LeadsForm = React.lazy(() => import("../components/Leads/LeadsForm"));

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
