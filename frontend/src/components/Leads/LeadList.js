import React from "react";
import Table from "../../commons/Table";
import useLead from "../../hooks/useLead";
import { Link } from "react-router-dom";

function LeadList() {
  const { leadsTableData, leadsTableColumns } = useLead();

  return (
    <React.Fragment>
      <h4>Leads</h4>

      <Link to="/leads/create" className="btn  btn-sm btn-primary">
        Add Lead
      </Link>

      <Table tableData={leadsTableData([])} tableColumns={leadsTableColumns} />
    </React.Fragment>
  );
}

export default LeadList;
