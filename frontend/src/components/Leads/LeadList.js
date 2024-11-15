import React, { useEffect, useState } from "react";
import Table from "../../commons/Table";
import useLead from "../../hooks/useLead";
import { Link } from "react-router-dom";
import { LEADS_API } from "../../api/endpoints";
import api from "../../api/api";

function LeadList() {
  const [data, setData] = useState();
  []; // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle errors
  const { leadsTableData, leadsTableColumns } = useLead();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make the API request using Axios
        const response = await api.get(LEADS_API);
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
      <h4>Leads</h4>

      <Link to="/leads/create" className="btn  btn-sm btn-primary">
        Add Lead
      </Link>

      <Table
        tableData={leadsTableData(data || [])}
        tableColumns={leadsTableColumns}
      />
    </React.Fragment>
  );
}

export default LeadList;
