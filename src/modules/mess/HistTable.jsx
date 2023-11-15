
import fakeData from "./History.json";
import * as React from "react";
import { useTable } from "react-table";

function App() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "SL.NO",
        accessor: "id",
      },
      {
        Header: "MESSOUT",
        accessor: "outdate",
      },
      {
        Header: "MESSIN",
        accessor: "indate",
      },
      {
        Header: "DAYS",
        accessor: "days",
      },
     
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    
      <div className="container">
        <h3>Messin and Messout History</h3>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    
  );
}

export default App;