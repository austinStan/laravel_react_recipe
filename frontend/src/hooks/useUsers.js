import React from "react";

const useUsers = () => {
  const usersTableColumns = [
    { id: "name", header: "Name" },
    { id: "email", header: "Email", filter: {} },
    { id: "phone_number", header: "Phone Number", filter: {} },
    { id: "actions", header: "Actions" },
  ];

  const usersTableData = (data) => [
    ...data.map((item) => {
      const row = {
        name: item.name,
        email: item.email,
        phone_number: item.phone_number,
        actions: (
          <>
            <Link class="mr-2" style={{ padding: 5, paddingBottom: 0 }}>
              <FaEye />
            </Link>
          </>
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
