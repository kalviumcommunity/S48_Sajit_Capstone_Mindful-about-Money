import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useFinancialRecords } from "../../contexts/financial-record-context";
export const FinancialRecordForm = () => {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [type, setType] = useState("");
    const { addRecord } = useFinancialRecords();
    const { user } = useUser();
    const handleSubmit = (event) => {
        event.preventDefault();
        // Ensure all inputs are valid
        if (!type) {
            alert("Please select a type (Income or Expense).");
            return;
        }
        if (!amount || isNaN(parseFloat(amount))) {
            alert("Please enter a valid amount.");
            return;
        }
        // Create a new record object
        const newRecord = {
            userId: user?.id ?? "",
            date: new Date(date),
            description: description.trim(),
            amount: parseFloat(amount),
            category: category.trim(),
            paymentMethod: paymentMethod.trim(),
            type: type,
        };
        // Add the record using the context method
        addRecord(newRecord);
        // Reset form fields
        setDescription("");
        setAmount("");
        setDate("");
        setCategory("");
        setPaymentMethod("");
        setType("");
    };
    return (_jsxs("div", { className: 'overflow-x-auto p-6 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 rounded-2xl shadow-xl', children: [_jsx("h2", { className: 'text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mb-6 text-center', children: "Add Financial Record" }), _jsxs("form", { onSubmit: handleSubmit, className: 'space-y-6', children: [_jsxs("div", { children: [_jsx("label", { className: 'block text-sm font-medium text-emerald-800 mb-2', children: "Description" }), _jsx("input", { type: 'text', required: true, className: 'w-full p-3 border border-emerald-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300', value: description, onChange: (event) => setDescription(event.target.value), placeholder: 'Enter description' })] }), _jsxs("div", { children: [_jsx("label", { className: 'block text-sm font-medium text-emerald-800 mb-2', children: "Type" }), _jsxs("select", { required: true, className: 'w-full p-3 border border-emerald-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300', value: type, onChange: (event) => setType(event.target.value), children: [_jsx("option", { value: '', children: "Select Type" }), _jsx("option", { value: 'Income', children: "Income" }), _jsx("option", { value: 'Expense', children: "Expense" })] })] }), _jsxs("div", { children: [_jsx("label", { className: 'block text-sm font-medium text-emerald-800 mb-2', children: "Amount" }), _jsx("input", { type: 'number', required: true, className: 'w-full p-3 border border-emerald-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300', value: amount, onChange: (event) => setAmount(event.target.value), placeholder: 'Enter amount' })] }), _jsxs("div", { children: [_jsx("label", { className: 'block text-sm font-medium text-emerald-800 mb-2', children: "Date" }), _jsx("input", { type: 'date', required: true, className: 'w-full p-3 border border-emerald-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300', value: date, onChange: (event) => setDate(event.target.value) })] }), _jsxs("div", { children: [_jsx("label", { className: 'block text-sm font-medium text-emerald-800 mb-2', children: "Category" }), _jsxs("select", { required: true, className: 'w-full p-3 border border-emerald-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300', value: category, onChange: (event) => setCategory(event.target.value), children: [_jsx("option", { value: '', children: "Select a Category" }), _jsx("option", { value: 'Food', children: "Food" }), _jsx("option", { value: 'Rent', children: "Rent" }), _jsx("option", { value: 'Salary', children: "Salary" }), _jsx("option", { value: 'Utilities', children: "Utilities" }), _jsx("option", { value: 'Transportation', children: "Transportation" }), _jsx("option", { value: 'Health and Insurance', children: "Health and Insurance" }), _jsx("option", { value: 'Education', children: "Education" }), _jsx("option", { value: 'Savings', children: "Savings" }), _jsx("option", { value: 'Investment', children: "Investment" }), _jsx("option", { value: 'Entertainment', children: "Entertainment" }), _jsx("option", { value: 'Other', children: "Other" })] })] }), _jsxs("div", { children: [_jsx("label", { className: 'block text-sm font-medium text-emerald-800 mb-2', children: "Payment Method" }), _jsxs("select", { required: true, className: 'w-full p-3 border border-emerald-300 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300', value: paymentMethod, onChange: (event) => setPaymentMethod(event.target.value), children: [_jsx("option", { value: '', children: "Select a Payment Method" }), _jsx("option", { value: 'Credit Card', children: "Credit Card" }), _jsx("option", { value: 'Debit Card', children: "Debit Card" }), _jsx("option", { value: 'UPI', children: "UPI" }), _jsx("option", { value: 'Cash', children: "Cash" }), _jsx("option", { value: 'Cheque', children: "Cheque" }), _jsx("option", { value: 'Bank Transfer', children: "Bank Transfer" }), _jsx("option", { value: 'Other', children: "Other" })] })] }), _jsx("button", { type: 'submit', className: 'w-full py-3 px-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-semibold rounded-lg shadow-md hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300', children: "Add Record" })] })] }));
};
