import React from "react";
import { Link } from "react-router-dom";

const useUsers = () => {
  const usersTableColumns = [
    { id: "name", header: "Name" },
    { id: "email", header: "Email", filter: {} },
    { id: "role", header: "Role", filter: {} },
    { id: "actions", header: "Actions" },
  ];

  const usersTableData = (data) => [
    ...data?.map((item) => {
      const row = {
        name: item.name,
        email: item.email,
        role: item.role,
        actions: (
          <Link className="mr-2" style={{ padding: 5, paddingBottom: 0 }}>
            View
          </Link>
        ),
      };
      return row;
    }),
  ];

  return {
    usersTableColumns,
    usersTableData,
  };
};

export default useUsers;
