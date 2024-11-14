import React from "react";
import LeadList from "../components/Leads/LeadList";

const Dashboard = React.lazy(() => import("../components/Dashboard/Dashboard"));

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
    path: "/",
    component: <Fol />,
    exact: true,
  },
];

export const guestRoutes = () => [];
