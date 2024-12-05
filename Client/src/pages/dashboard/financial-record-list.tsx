import { useMemo, useState } from "react";
import {
  FinancialRecord,
  useFinancialRecords,
} from "../../contexts/financial-record-context";
import { useTable, Column, CellProps, Row } from "react-table";

// Dropdown options for categories
const categories = [
  "Food",
  "Rent",
  "Salary",
  "Utilities",
  "Transportation",
  "Health and Insurance",
  "Education",
  "Savings",
  "Investment",
  "Entertainment",
  "Other",
];

// Dropdown options for payment methods
const paymentMethods = [
  "Credit Card",
  "Debit Card",
  "UPI",
  "Cash",
  "Cheque",
  "Bank Transfer",
  "Other",
];

// EditableCell component: Handles rendering and editing of table cells
const EditableCell = ({
  value: initialValue, // The initial value of the cell
  row, // The current row data
  column, // The current column data
  updateRecord, // Function to update the record
  editable, // Boolean indicating if the cell is editable
  editableOptions, // Optional array of dropdown options
}) => {
  const [isEditing, setIsEditing] = useState(false); // State to track if the cell is being edited
  const [value, setValue] = useState(initialValue); // State for the current cell value

  // Handles blur event: stops editing and updates the record
  const onBlur = () => {
    setIsEditing(false);
    updateRecord(row.index, column.id, value);
  };

  return (
    // Render the cell as a clickable div when not editing
    <div
      onClick={() => editable && setIsEditing(true)}
      style={{ cursor: editable ? "pointer" : "default" }}
    >
      {isEditing ? (
        // If the cell is being edited, render an input or select element
        editableOptions ? (
          // Render a dropdown (select) if editableOptions are provided
          <select
            value={value}
            onChange={(e) => setValue(e.target.value)} // Update the cell value on change
            autoFocus
            onBlur={onBlur}
            style={{ width: "100%" }}
          >
            {/* Render dropdown options */}
            {editableOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          // Render a text input for general editing
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)} // Update the cell value on change
            autoFocus
            onBlur={onBlur}
            style={{ width: "100%" }}
          />
        )
      ) : (
        // If not editing, display the cell value
        value.toString()
      )}
    </div>
  );
};

// FinancialRecordList component: Displays and manages the financial records table
export const FinancialRecordList = () => {
  const { records } = useFinancialRecords(); // Fetch financial records from the context

  // Display a loading message if no records are available
  if (!records || records.length === 0) {
    return <div>Loading records...</div>;
  }

  // Define table columns
  const columns = useMemo(
    () => [
      {
        Header: "Description", // Column header
        accessor: "description", // Field name in the record
        Cell: (props) => (
          <EditableCell {...props} updateRecord={() => null} editable={true} /> // Editable text cell
        ),
      },
      {
        Header: "Amount", // Column header
        accessor: "amount", // Field name in the record
        Cell: (props) => (
          <EditableCell {...props} updateRecord={() => null} editable={true} /> // Editable text cell
        ),
      },
      {
        Header: "Category", // Column header
        accessor: "category", // Field name in the record
        Cell: (props) => (
          <EditableCell
            {...props}
            updateRecord={() => null}
            editable={true} // Editable dropdown cell
            editableOptions={categories} // Pass category options
          />
        ),
      },
      {
        Header: "Payment Method", // Column header
        accessor: "paymentMethod", // Field name in the record
        Cell: (props) => (
          <EditableCell
            {...props}
            updateRecord={() => null} // Handle update event
            editable={true} // Editable dropdown cell
            editableOptions={paymentMethods} // Pass payment method options
          />
        ),
      },
      {
        Header: "Date", // Column header
        accessor: "date", // Field name in the record
        Cell: (props) => (
          <EditableCell {...props} updateRecord={() => null} editable={false} /> // Non-editable text cell
        ),
      },
      {
        Header: "Delete", // Column header
        id: "delete", // Custom column ID
        Cell: ({ row }) => (
          // Render a delete button
          <button onClick={() => null} className="button">
            Delete
          </button>
        ),
      },
    ],
    [],
  );

  // Generate table instance using react-table
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns, // Table columns
      data: records, // Table data
    });

  // Render the table
  return (
    <div className="table-container">
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th> // Render column headers
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row); // Prepare the row data
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td> // Render cell content
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
