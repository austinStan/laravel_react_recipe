import React from "react";
import { Link } from "react-router-dom";
import useUsers from "../../../hooks/useUsers";
import Table from "../../../commons/Table";

function UsersList() {
  const { usersTableData, usersTableColumns } = useUsers();

  return (
    <React.Fragment>
      <h4>Users</h4>

      <Link to="/users/create" className="btn  btn-sm btn-primary">
        Add User
      </Link>

      <Table tableData={usersTableData([])} tableColumns={usersTableColumns} />
    </React.Fragment>
  );
}

export default UsersList;
