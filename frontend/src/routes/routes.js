import React from "react";

const Dashboard = React.lazy(() => import("../components/Dashboard/Dashboard"));
const LeadList = React.lazy(() => import("../components/Leads/LeadList"));
const LeadsForm = React.lazy(() => import("../components/Leads/LeadsForm"));
const FollowUpList = React.lazy(() =>
  import("../components/FollowUps/FollowUpList")
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

export const guestRoutes = () => [];
