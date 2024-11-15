import React from "react";
import { Link } from "react-router-dom";

const useLead = () => {
  const leadsTableColumns = [
    { id: "name", header: "Name" },
    { id: "email", header: "Email", filter: {} },
    { id: "phone", header: "Phone Number", filter: {} },
    { id: "actions", header: "Actions" },
  ];

  const leadsTableData = (data) => [
    ...data.map((item) => {
      const row = {
        name: item.name,
        email: item.email,
        phone: item.phone,
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
    leadsTableColumns,
    leadsTableData,
  };
};

export default useLead;
