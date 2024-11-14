import React from "react";
import LeadList from "../components/Leads/LeadList";
import FollowUpList from "../components/FollowUps/FollowUpList";

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
    path: "/followup",
    component: <FollowUpList />,
    exact: true,
  },
];

export const guestRoutes = () => [];
