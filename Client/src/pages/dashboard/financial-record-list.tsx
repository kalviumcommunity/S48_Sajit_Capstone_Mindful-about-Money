import { useMemo, useState } from "react";
import {
  FinancialRecord,
  useFinancialRecords,
} from "../../contexts/financial-record-context";
import { useTable } from "react-table";

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

// Dropdown options for type
const types = ["Income", "Expense"];

// EditableCell component
const EditableCell = ({
  value: initialValue,
  row,
  column,
  updateRecord,
  editable,
  editableOptions,
  additionalClass = "",
}: any) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const onBlur = () => {
    setIsEditing(false);
    updateRecord(row.index, column.id, value);
  };

  return (
    <div
      onClick={() => editable && setIsEditing(true)}
      className={`p-3 rounded-lg transition-all duration-300 text-left ${
        editable ? "cursor-pointer hover:bg-blue-100" : ""
      }`}
    >
      {isEditing ? (
        editableOptions ? (
          <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus
            onBlur={onBlur}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
          >
            {editableOptions.map((option: string) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus
            onBlur={onBlur}
            className={`w-full border border-gray-300 rounded-lg px-3 py-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 text-left ${additionalClass}`}
          />
        )
      ) : (
        <span className={`font-bold text-left ${additionalClass}`}>
          {value.toString()}
        </span>
      )}
    </div>
  );
};

// FinancialRecordList component
export const FinancialRecordList = () => {
  const { records, updateRecord, deleteRecord } = useFinancialRecords();

  const updateCellRecord = (rowIndex: number, columnId: string, value: any) => {
    const id = records[rowIndex]._id;
    updateRecord(id ?? "", { ...records[rowIndex], [columnId]: value });
  };

  if (!records || records.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">Loading records...</div>
    );
  }

  const columns = useMemo(
    () => [
      {
        Header: "Description",
        accessor: "description",
        Cell: (props: any) => (
          <EditableCell
            {...props}
            updateRecord={updateCellRecord}
            editable={true}
          />
        ),
      },
      {
        Header: "Type",
        accessor: "type",
        Cell: (props: any) => {
          const { value } = props;
          return (
            <EditableCell
              {...props}
              updateRecord={updateCellRecord}
              editable={true}
              editableOptions={types}
              additionalClass={
                value === "Income" ? "text-green-600" : "text-red-600"
              }
            />
          );
        },
      },
      {
        Header: "Amount",
        accessor: "amount",
        Cell: ({ row, value }: any) => {
          const type = row.original.type;
          const formattedValue =
            type === "Income"
              ? `+${Number(value).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
              : `-${Number(value).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

          return (
            <EditableCell
              value={formattedValue}
              row={row}
              column={{ id: "amount" }}
              updateRecord={updateCellRecord}
              editable={true}
              additionalClass={
                type === "Income" ? "text-green-600" : "text-red-600"
              }
            />
          );
        },
      },
      {
        Header: "Category",
        accessor: "category",
        Cell: (props: any) => (
          <EditableCell
            {...props}
            updateRecord={updateCellRecord}
            editable={true}
            editableOptions={categories}
          />
        ),
      },
      {
        Header: "Payment Method",
        accessor: "paymentMethod",
        Cell: (props: any) => (
          <EditableCell
            {...props}
            updateRecord={updateCellRecord}
            editable={true}
            editableOptions={paymentMethods}
          />
        ),
      },
      {
        Header: "Date",
        accessor: "date",
        Cell: ({ value }: any) => {
          // Format the date to a more readable format
          const formattedDate = new Date(value).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });

          return (
            <EditableCell
              value={formattedDate}
              updateRecord={updateCellRecord}
              editable={false}
            />
          );
        },
      },
      {
        Header: "Delete",
        id: "delete",
        Cell: ({ row }: any) => (
          <div className="text-left">
            <button
              onClick={() => deleteRecord(row.original._id ?? "")}
              className="bg-gradient-to-r from-red-400 to-red-600 text-white px-4 py-2 rounded-lg shadow hover:scale-105 hover:shadow-xl transition transform"
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    [records],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: records,
    });

  return (
    <div className="overflow-x-auto p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        Financial Records
      </h1>
      <table
        {...getTableProps()}
        className="min-w-full table-auto bg-white rounded-lg border border-gray-200"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-6 py-3 text-left text-lg font-semibold tracking-wide"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="text-gray-800">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="hover:shadow-lg hover:bg-gray-50 transition transform"
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-6 py-4 border-b border-gray-200 text-left"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
