import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFollowUp from "../../hooks/useFollowUp";
import Table from "../../commons/Table";
import { FOLLOW_UP_API } from "../../api/endpoints";
import api from "../../api/api";

function FollowUpList() {
  const [data, setData] = useState([]); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle errors
  const { followUpTableData, followUpTableColumns } = useFollowUp();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make the API request using Axios
        const response = await api.get(FOLLOW_UP_API);
        setData(response.data); // Update state with fetched data
        setLoading(false); // Stop the loading spinner
      } catch (error) {
        setError(error); // Set error if request fails
        setLoading(false); // Stop the loading spinner
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  return (
    <React.Fragment>
      <h4>Follow Up</h4>

      <Link to="/followup/create" className="btn  btn-sm btn-primary">
        Add Follow Up
      </Link>

      <Table
        tableData={followUpTableData(data || [])}
        tableColumns={followUpTableColumns}
      />
    </React.Fragment>
  );
}

export default FollowUpList;
