import React from "react";

const Table = ({ tableColumns, tableData }) => {
  return (
    <div className="table-responsive small">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            {tableColumns.map((row, i) => (
              <th key={i} scope="col">
                {row.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, i) => (
            <tr key={i}>
              {tableColumns.map((item) => (
                <td
                  style={{
                    verticalAlign: "middle",
                    whiteSpace: "nowrap",
                  }}
                >
                  {row[item.id]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
