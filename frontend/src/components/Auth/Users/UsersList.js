import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useUsers from "../../../hooks/useUsers";
import Table from "../../../commons/Table";
import api from "../../../api/api";
import { REGISTER_API } from "../../../api/endpoints";

function UsersList() {
  const [data, setData] = useState([]); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle errors
  const { usersTableData, usersTableColumns } = useUsers();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make the API request using Axios
        const response = await api.get(REGISTER_API);
        setData(response.data); // Update state with fetched data
        setLoading(false); // Stop the loading spinner
      } catch (error) {
        setError(error); // Set error if request fails
        setLoading(false); // Stop the loading spinner
      }
    };
    fetchData();
  }, []); //

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  return (
    <React.Fragment>
      <h4>Users</h4>

      <Link to="/users/create" className="btn  btn-sm btn-primary">
        Add User
      </Link>

      <Table
        tableData={usersTableData(data || [])}
        tableColumns={usersTableColumns}
      />
    </React.Fragment>
  );
}

export default UsersList;
