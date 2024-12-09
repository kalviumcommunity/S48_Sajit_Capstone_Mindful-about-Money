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

// EditableCell component
const EditableCell = ({
                        value: initialValue,
                        row,
                        column,
                        updateRecord,
                        editable,
                        editableOptions,
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
          className={`p-3 rounded-lg transition-all duration-300 ${
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
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            )
        ) : (
            <span className="text-gray-800 font-medium">{value.toString()}</span>
        )}
      </div>
  );
};

// FinancialRecordList component
export const FinancialRecordList = () => {
  const { records } = useFinancialRecords();

  if (!records || records.length === 0) {
    return <div className="text-center text-gray-500 mt-10">Loading records...</div>;
  }

  const columns = useMemo(
      () => [
        {
          Header: "Description",
          accessor: "description",
          Cell: (props: any) => (
              <EditableCell {...props} updateRecord={() => null} editable={true} />
          ),
        },
        {
          Header: "Amount",
          accessor: "amount",
          Cell: (props: any) => (
              <EditableCell {...props} updateRecord={() => null} editable={true} />
          ),
        },
        {
          Header: "Category",
          accessor: "category",
          Cell: (props: any) => (
              <EditableCell
                  {...props}
                  updateRecord={() => null}
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
                  updateRecord={() => null}
                  editable={true}
                  editableOptions={paymentMethods}
              />
          ),
        },
        {
          Header: "Date",
          accessor: "date",
          Cell: (props: any) => (
              <EditableCell {...props} updateRecord={() => null} editable={false} />
          ),
        },
        {
          Header: "Delete",
          id: "delete",
          Cell: ({ row }: any) => (
              <button
                  onClick={() => null}
                  className="bg-gradient-to-r from-red-400 to-red-600 text-white px-4 py-2 rounded-lg shadow hover:scale-105 hover:shadow-xl transition transform"
              >
                Delete
              </button>
          ),
        },
      ],
      []
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
                          className="px-6 py-4 border-b border-gray-200"
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