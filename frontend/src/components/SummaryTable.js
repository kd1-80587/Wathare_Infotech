// components/SummaryTable.js

import React from 'react';
import ReactTable from 'react-table';
// import 'react-table/react-table.css';

function SummaryTable({ summary }) {
  const columns = [
    {
      Header: 'Metric',
      accessor: 'metric'
    },
    {
      Header: 'Value',
      accessor: 'value'
    }
  ];

  const data = [
    { metric: 'Number of 1s', value: summary.numberOfOnes },
    { metric: 'Number of 0s', value: summary.numberOfZeros }
    // Add more metrics as needed
  ];

  return (
    <div>
      <h2>Summary Table</h2>
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={5}
        className="-striped -highlight"
      />
    </div>
  );
}

export default SummaryTable;
