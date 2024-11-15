import React from "react";
import { Link } from "react-router-dom";

const useFollowUp = () => {
  const followUpTableColumns = [
    { id: "lead", header: "Lead" },
    { id: "scheduled_at", header: "Scheduled At", filter: {} },
    { id: "status", header: "Status", filter: {} },
    { id: "actions", header: "Actions" },
  ];

  const followUpTableData = (data) => [
    ...data.map((item) => {
      const row = {
        lead: item.lead?.name,
        scheduled_at: item.scheduled_at,
        status: item.status,
        actions: (
          <Link class="mr-2" style={{ padding: 5, paddingBottom: 0 }}>
            View
          </Link>
        ),
      };
      return row;
    }),
  ];

  return {
    followUpTableColumns,
    followUpTableData,
  };
};

export default useFollowUp;
