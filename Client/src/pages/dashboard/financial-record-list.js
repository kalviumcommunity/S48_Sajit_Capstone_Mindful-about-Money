import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { useFinancialRecords, } from "../../contexts/financial-record-context";
import { useTable } from "react-table";
import { Trash2, Edit2, Save, X, Filter, ChevronDown, ChevronUp, } from "lucide-react";
// Dropdown options (kept the same as in original)
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
const paymentMethods = [
    "Credit Card",
    "Debit Card",
    "UPI",
    "Cash",
    "Cheque",
    "Bank Transfer",
    "Other",
];
const types = ["Income", "Expense"];
// Enhanced EditableCell component
const EditableCell = ({ value: initialValue, row, column, updateRecord, editable, editableOptions, additionalClass = "", }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(initialValue);
    const onBlur = () => {
        setIsEditing(false);
        updateRecord(row.index, column.id, value);
    };
    return (_jsx("div", { className: `relative group ${editable ? "cursor-pointer" : ""}`, onClick: () => editable && setIsEditing(true), children: isEditing ? (_jsxs("div", { className: 'flex items-center', children: [editableOptions ? (_jsx("select", { value: value, onChange: (e) => setValue(e.target.value), autoFocus: true, onBlur: onBlur, className: 'w-full border-2 border-indigo-300 rounded-lg px-3 py-2 shadow focus:outline-none focus:ring-2 focus:ring-indigo-500', children: editableOptions.map((option) => (_jsx("option", { value: option, children: option }, option))) })) : (_jsx("input", { value: value, onChange: (e) => setValue(e.target.value), autoFocus: true, onBlur: onBlur, className: `w-full border-2 border-indigo-300 rounded-lg px-3 py-2 shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 ${additionalClass}` })), _jsxs("div", { className: 'flex ml-2', children: [_jsx("button", { onClick: onBlur, className: 'text-green-600 hover:bg-green-100 p-1 rounded-full', children: _jsx(Save, { size: 18 }) }), _jsx("button", { onClick: () => setIsEditing(false), className: 'text-red-600 hover:bg-red-100 p-1 rounded-full ml-1', children: _jsx(X, { size: 18 }) })] })] })) : (_jsxs("div", { className: 'flex items-center', children: [_jsx("span", { className: `font-semibold ${additionalClass}`, children: value.toString() }), editable && (_jsx(Edit2, { size: 16, className: 'ml-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300' }))] })) }));
};
export const FinancialRecordList = () => {
    const { records, updateRecord, deleteRecord } = useFinancialRecords();
    const [filterType, setFilterType] = useState(null);
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState("asc");
    // Clear filter function
    const clearFilter = () => {
        setFilterType(null);
    };
    const updateCellRecord = (rowIndex, columnId, value) => {
        const id = records[rowIndex]._id;
        updateRecord(id ?? "", { ...records[rowIndex], [columnId]: value });
    };
    // Filtered and sorted records
    const processedRecords = useMemo(() => {
        let filteredRecords = filterType
            ? records.filter((record) => record.type === filterType)
            : records;
        if (sortColumn) {
            filteredRecords.sort((a, b) => {
                const valueA = a[sortColumn];
                const valueB = b[sortColumn];
                if (valueA !== undefined && valueB !== undefined) {
                    if (valueA < valueB) {
                        return sortDirection === "asc" ? -1 : 1;
                    }
                    if (valueA > valueB) {
                        return sortDirection === "asc" ? 1 : -1;
                    }
                }
                return 0;
            });
        }
        return filteredRecords;
    }, [records, filterType, sortColumn, sortDirection]);
    const columns = useMemo(() => [
        {
            Header: "Description",
            accessor: "description",
            Cell: (props) => (_jsx(EditableCell, { ...props, updateRecord: updateCellRecord, editable: true })),
        },
        {
            accessor: "type",
            Header: () => (_jsxs("div", { className: 'flex items-center', children: [_jsx("span", { children: "Type" }), _jsxs("div", { className: 'flex items-center ml-2', children: [_jsx("div", { className: 'cursor-pointer', onClick: () => {
                                    setSortColumn("type");
                                    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
                                }, children: sortColumn === "type" &&
                                    (sortDirection === "asc" ? (_jsx(ChevronUp, { size: 16 })) : (_jsx(ChevronDown, { size: 16 }))) }), _jsx(Filter, { size: 16, className: 'ml-1 cursor-pointer', onClick: (e) => {
                                    e.stopPropagation();
                                    setFilterType(filterType === "Income" ? "Expense" : "Income");
                                } })] })] })),
            Cell: (props) => {
                const { value } = props;
                return (_jsx(EditableCell, { ...props, updateRecord: updateCellRecord, editable: true, editableOptions: types, additionalClass: value === "Income"
                        ? "text-green-600 font-bold"
                        : "text-red-600 font-bold" }));
            },
        },
        {
            Header: "Amount",
            accessor: "amount",
            Cell: ({ row, value }) => {
                const type = row.original.type;
                const formattedValue = type === "Income"
                    ? `+${Number(value).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}`
                    : `-${Number(value).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}`;
                return (_jsx(EditableCell, { value: formattedValue, row: row, column: { id: "amount" }, updateRecord: updateCellRecord, editable: true, additionalClass: type === "Income"
                        ? "text-green-600 font-bold"
                        : "text-red-600 font-bold" }));
            },
        },
        {
            Header: "Category",
            accessor: "category",
            Cell: (props) => (_jsx(EditableCell, { ...props, updateRecord: updateCellRecord, editable: true, editableOptions: categories })),
        },
        {
            Header: "Payment Method",
            accessor: "paymentMethod",
            Cell: (props) => (_jsx(EditableCell, { ...props, updateRecord: updateCellRecord, editable: true, editableOptions: paymentMethods })),
        },
        {
            Header: "Date",
            accessor: "date",
            Cell: ({ value }) => {
                const formattedDate = new Date(value).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                });
                return (_jsx(EditableCell, { value: formattedDate, updateRecord: updateCellRecord, editable: false }));
            },
        },
        {
            Header: "Actions",
            id: "actions",
            Cell: ({ row }) => (_jsx("div", { className: 'flex space-x-2', children: _jsx("button", { onClick: () => deleteRecord(row.original._id ?? ""), className: 'text-red-500 hover:bg-red-100 p-2 rounded-full transition-colors', children: _jsx(Trash2, { size: 18 }) }) })),
        },
    ], [records, filterType, sortColumn, sortDirection]);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data: processedRecords,
    });
    if (!records || records.length === 0) {
        return (_jsx("div", { className: 'text-center text-gray-500 mt-10', children: "No financial records found. Start tracking your finances!" }));
    }
    return (_jsxs("div", { className: 'bg-white rounded-3xl shadow-2xl overflow-hidden', children: [_jsxs("div", { className: 'px-6 py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white flex justify-between items-center', children: [_jsx("h1", { className: 'text-2xl font-bold', children: "Financial Records" }), _jsx("div", { className: 'flex items-center space-x-2', children: filterType && (_jsxs(_Fragment, { children: [_jsxs("span", { className: 'bg-white/20 px-3 py-1 rounded-full', children: [filterType, " Only"] }), _jsxs("button", { onClick: clearFilter, className: 'bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full flex items-center', children: [_jsx(X, { size: 16, className: 'mr-1' }), " Clear Filter"] })] })) })] }), _jsx("div", { className: 'overflow-x-auto', children: _jsxs("table", { ...getTableProps(), className: 'w-full', children: [_jsx("thead", { className: 'bg-emerald-50', children: headerGroups.map((headerGroup) => (_jsx("tr", { ...headerGroup.getHeaderGroupProps(), children: headerGroup.headers.map((column) => (_jsx("th", { ...column.getHeaderProps(), className: 'px-6 py-3 text-left text-xs font-medium text-emerald-600 uppercase tracking-wider', children: column.render("Header") }))) }))) }), _jsx("tbody", { ...getTableBodyProps(), className: 'divide-y divide-emerald-200', children: rows.map((row) => {
                                prepareRow(row);
                                return (_jsx("tr", { ...row.getRowProps(), className: 'hover:bg-emerald-50 transition duration-200', children: row.cells.map((cell) => (_jsx("td", { ...cell.getCellProps(), className: 'px-6 py-4 whitespace-nowrap', children: cell.render("Cell") }))) }));
                            }) })] }) })] }));
};
export default FinancialRecordList;
